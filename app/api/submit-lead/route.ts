import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 64 * 1024;
const MAX_FIELDS = 20;
const personalDomains = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);
const companySizes = new Set(['1 to 10', '11 to 50', '51 to 200', '201 to 500', '501+']);
const positionOptions = new Set(['1', '2 to 3', '4 to 10', '11+', 'Not sure yet']);
const referralOptions = new Set(['Search engine', 'Referral', 'Insurance network', 'Social media', 'Stealth Agents', 'Other', 'Search', 'Industry colleague', 'Professional group', 'Social', '']);
const phoneCountries = new Set(['+1', '+44', '+61', '+63', 'other', '']);
const allowedOrigins = new Set(['https://virtualclaimsassistant.com', 'https://www.virtualclaimsassistant.com']);

class PayloadTooLargeError extends Error {}

async function readBoundedBody(request: Request) {
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new PayloadTooLargeError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return body;
}

function sameOrigin(request: Request) {
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite && fetchSite !== 'same-origin') return false;
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const parsed = new URL(origin);
    return allowedOrigins.has(parsed.origin) || (process.env.NODE_ENV !== 'production' && parsed.origin === new URL(request.url).origin);
  } catch { return false; }
}

function field(form: FormData, name: string, max: number) {
  const value = form.get(name);
  if (value == null) return '';
  if (typeof value !== 'string') return null;
  const clean = value.trim();
  return clean.length <= max ? clean : null;
}

function reply(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return reply('Invalid request origin.', 403);
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().startsWith('multipart/form-data;')) return reply('Unsupported form encoding.', 415);
  const declared = Number(request.headers.get('content-length') || 0);
  if (!Number.isFinite(declared) || declared < 0 || declared > MAX_BODY_BYTES) return reply('Request is too large.', 413);

  let form: FormData;
  try {
    const body = await readBoundedBody(request);
    form = await new Request(request.url, { method: 'POST', headers: { 'content-type': contentType }, body }).formData();
  } catch (error) {
    return reply(error instanceof PayloadTooLargeError ? 'Request is too large.' : 'Invalid form request.', error instanceof PayloadTooLargeError ? 413 : 400);
  }
  if ([...form.keys()].length > MAX_FIELDS) return reply('Invalid form request.', 400);

  const website = field(form, 'website_url', 200);
  if (website === null || website) return NextResponse.json({ ok: false, ignored: true }, { status: 202, headers: { 'Cache-Control': 'no-store' } });

  const source = field(form, 'source', 80);
  const firstName = field(form, 'first_name', 80);
  const lastName = field(form, 'last_name', 80);
  const legacyName = field(form, 'name', 160);
  const email = field(form, 'email', 254)?.toLowerCase() ?? null;
  const company = field(form, 'company', 160);
  const companySize = field(form, 'company_size', 30);
  const positions = field(form, 'positions_to_fill', 30);
  const referral = field(form, 'referral_source', 50);
  const phoneCountry = field(form, 'phone_country', 10);
  const phone = field(form, 'phone', 40);
  const companyWebsite = field(form, 'company_website', 500);
  const message = field(form, 'message', 2000);
  const full = Boolean(source?.startsWith('contact-page'));

  if ([source, firstName, lastName, legacyName, email, company, companySize, positions, referral, phoneCountry, phone, companyWebsite, message].some((value) => value === null)) return reply('One or more fields are too long.', 400);
  if (!source || !/^[a-z0-9-]{2,80}$/i.test(source) || !email || !/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,63}$/.test(email)) return reply('Please complete every required field.', 400);
  if (full && (!firstName || !lastName || !company || !companySize || !positions || !referral)) return reply('Please complete every required field.', 400);
  if (!full && !legacyName) return reply('Please complete every required field.', 400);
  if ((full && (!companySizes.has(companySize || '') || !positionOptions.has(positions || '') || !referralOptions.has(referral || '') || !phoneCountries.has(phoneCountry || ''))) || (!full && !referralOptions.has(referral || ''))) return reply('Please choose valid form options.', 400);
  if (full && personalDomains.has(email.split('@')[1])) return reply('Please use your business email address.', 400);
  if (companyWebsite) {
    try { const parsed = new URL(companyWebsite); if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error(); } catch { return reply('Please enter a valid company website.', 400); }
  }

  const payload = { first_name: firstName, last_name: lastName, name: legacyName, email, phone_country: phoneCountry, phone, company, company_website: companyWebsite, company_size: companySize, positions_to_fill: positions, referral_source: referral, message, source };
  const acrEndpoint = process.env.ACR_LEAD_ENDPOINT;
  const fallbackWebhook = process.env.SITE_MATTERMOST_FALLBACK_WEBHOOK_URL;
  if (!acrEndpoint && !fallbackWebhook) return reply('Lead service is not configured.', 503);

  try {
    if (acrEndpoint) {
      const target = new URL(acrEndpoint);
      if (target.protocol !== 'https:') return reply('Lead service is not configured.', 503);
      const response = await fetch(target, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(6_000) });
      if (response.ok) return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
    }
    if (fallbackWebhook) {
      const target = new URL(fallbackWebhook);
      if (target.protocol !== 'https:') return reply('Lead service is not configured.', 503);
      const text = [`New Virtual Claims Assistant lead`, `Name: ${[firstName, lastName].filter(Boolean).join(' ') || legacyName}`, `Email: ${email}`, `Company: ${company}`, `Phone: ${phoneCountry} ${phone}`, `Message: ${message}`].join('\n');
      const response = await fetch(target, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text }), cache: 'no-store', signal: AbortSignal.timeout(6_000) });
      if (response.ok) return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
    }
    return reply('We could not send your request.', 502);
  } catch {
    return reply('We could not send your request.', 502);
  }
}
