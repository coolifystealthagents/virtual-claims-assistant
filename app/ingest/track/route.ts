import { type NextRequest } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'virtual-claims-assistant';
const MAX_BODY_BYTES = 128 * 1024;
const MAX_EVENTS = 25;
const allowedEvents = new Set(['pageview', 'scroll_depth', 'cwv', 'click', 'cta_click', 'outbound_click', 'form_start', 'form_submit', 'lead_submit', 'empty_form_submit', 'funnel_booking_confirmed', 'engagement', 'banner_impression', 'banner_click']);

export const runtime = 'nodejs';
class PayloadTooLargeError extends Error {}

async function readBoundedText(request: Request) {
  if (!request.body) return '';
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let result = '';
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) { await reader.cancel(); throw new PayloadTooLargeError(); }
      result += decoder.decode(value, { stream: true });
    }
    return result + decoder.decode();
  } finally { reader.releaseLock(); }
}

function sameOrigin(request: NextRequest) {
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite && fetchSite !== 'same-origin') return false;
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const requestHost = (request.headers.get('x-forwarded-host') || request.headers.get('host') || request.nextUrl.host).split(',')[0].trim().toLowerCase();
    return new URL(origin).host.toLowerCase() === requestHost;
  } catch { return false; }
}

function validEvent(value: unknown) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const event = value as Record<string, unknown>;
  if (Object.keys(event).length > 40 || typeof event.event_type !== 'string' || !allowedEvents.has(event.event_type)) return false;
  for (const [key, item] of Object.entries(event)) {
    if (key.length > 80) return false;
    if (typeof item === 'string' && item.length > (key === 'event_metadata' ? 20_000 : 2_000)) return false;
    if (Array.isArray(item) && item.length > 50) return false;
  }
  return true;
}

function failure(detail: string, status: number) {
  return Response.json({ status: 'error', detail }, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return failure('Invalid origin', 403);
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return failure('Invalid content type', 415);
  const declared = Number(request.headers.get('content-length') || 0);
  if (!Number.isFinite(declared) || declared < 0 || declared > MAX_BODY_BYTES) return failure('Payload too large', 413);

  let payload: Record<string, unknown>;
  try {
    const value: unknown = JSON.parse(await readBoundedText(request));
    if (!value || typeof value !== 'object' || Array.isArray(value)) return failure('Invalid payload', 400);
    payload = value as Record<string, unknown>;
  } catch (error) {
    return failure(error instanceof PayloadTooLargeError ? 'Payload too large' : 'Invalid JSON', error instanceof PayloadTooLargeError ? 413 : 400);
  }

  const suppliedSite = payload.site_id ?? payload.siteId ?? payload.site;
  if (suppliedSite !== SITE_ID || !Array.isArray(payload.events) || payload.events.length < 1 || payload.events.length > MAX_EVENTS || !payload.events.every(validEvent)) return failure('Invalid tracking payload', 422);
  const normalized: Record<string, unknown> = { ...payload, site_id: SITE_ID };
  delete normalized.siteId;
  delete normalized.site;

  const clientIp = (request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0').slice(0, 80);
  try {
    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': request.headers.get('user-agent') || '', 'Accept-Language': request.headers.get('accept-language') || '', 'X-ACR-Client-IP': clientIp },
      body: JSON.stringify(normalized),
      cache: 'no-store',
      signal: AbortSignal.timeout(6_000),
    });
    const text = [204, 205, 304].includes(upstream.status) ? null : await upstream.text();
    return new Response(text, { status: upstream.status, headers: { 'Content-Type': upstream.headers.get('content-type') || 'application/json', 'Cache-Control': 'no-store' } });
  } catch (error) {
    const timeout = error instanceof Error && (error.name === 'TimeoutError' || error.name === 'AbortError');
    return failure(timeout ? 'Tracking timeout' : 'Tracking unavailable', timeout ? 504 : 502);
  }
}
