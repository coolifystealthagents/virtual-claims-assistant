import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'virtualclaimsassistant.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

function firstHeaderValue(value: string | null) {
  return value?.split(',', 1)[0]?.trim().toLowerCase() || '';
}

function visitorScheme(request: NextRequest) {
  const cloudflareVisitor = request.headers.get('cf-visitor');
  if (cloudflareVisitor) {
    try {
      const parsed: unknown = JSON.parse(cloudflareVisitor);
      if (parsed && typeof parsed === 'object' && 'scheme' in parsed) {
        const scheme = String(parsed.scheme).toLowerCase();
        if (scheme === 'http' || scheme === 'https') return scheme;
      }
    } catch {
      // Fall through to the trusted reverse-proxy protocol or request URL.
    }
  }

  const forwardedScheme = firstHeaderValue(request.headers.get('x-forwarded-proto'));
  if (forwardedScheme === 'http' || forwardedScheme === 'https') return forwardedScheme;
  return request.nextUrl.protocol.replace(':', '').toLowerCase();
}

export function proxy(request: NextRequest) {
  const forwardedHost = firstHeaderValue(request.headers.get('x-forwarded-host'));
  const host = forwardedHost || firstHeaderValue(request.headers.get('host'));

  if (host !== CANONICAL_HOST && host !== WWW_HOST) return NextResponse.next();

  if (host === WWW_HOST || visitorScheme(request) === 'http') {
    const destination = new URL(CANONICAL_ORIGIN);
    destination.pathname = request.nextUrl.pathname;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
