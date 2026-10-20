import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const publicPageFiles = [
  'components/Marketing.tsx',
  'components/CorePages.tsx',
  'app/contact-us/page.tsx',
  'app/thank-you/page.tsx',
  'app/thanks-whats-next/page.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/research/page.tsx',
  'app/research/[slug]/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/not-found.tsx',
];

test('shared shell has exact navigation, persistent attribution, and no popup', () => {
  const chrome = read('components/SiteChrome.tsx');
  assert.deepEqual([...chrome.matchAll(/label: '([^']+)'/g)].map((match) => match[1]), ['Home', 'Services', 'Contact Us']);
  assert.equal((chrome.match(/Powered by StealthAgents/g) || []).length, 2);
  assert.match(chrome, /className="skip-link" href="#main-content"/);
  assert.doesNotMatch(read('app/layout.tsx'), /TimedLeadModal/);
  assert.doesNotMatch(chrome, /TimedLeadModal|setTimeout\(/);
  assert.match(read('app/globals.css'), /\.site-header\{[^}]*position:sticky/);
});

test('every page renderer provides a server rendered main skip target', () => {
  for (const path of publicPageFiles) {
    const source = read(path);
    assert.match(source, /<main[^>]+id="main-content"[^>]+tabIndex=\{-1\}/, path);
  }
});

test('contact follows the review, form, and parent proof contract', () => {
  const contact = read('app/contact-us/page.tsx');
  const reviews = JSON.parse(read('app/review-provenance.json'));
  assert.equal(reviews.records.length, 10);
  assert.equal(new Set(reviews.records.map((review) => `${review.name}|${review.body}`)).size, 10);
  assert.match(contact, /StealthAgents reviews/);
  assert.match(contact, /★★★★★/);
  assert.match(contact, /<LeadForm source="contact-page-consultation"/);
  assert.match(contact, /stealth-agents-team\.webp/);
  assert.match(contact, /stealth-agents-logo-black\.png/);
  assert.match(contact, /Official team, Bacolod/);
  assert.doesNotMatch(contact, /go\.oncehub\.com|<iframe/);
  assert.doesNotMatch(contact, />0[1-9]</);
  const css = read('app/contact-us/contact.css');
  assert.match(css, /\.review-rail/);
  assert.match(css, /prefers-reduced-motion/);
});

test('conversion sequence keeps scheduler only on thank you', () => {
  const leadForm = read('components/LeadForm.tsx');
  assert.match(leadForm, /fetch\('\/api\/submit-lead'/);
  assert.doesNotMatch(leadForm, /trackLead/);
  assert.match(leadForm, /router\.push\('\/thank-you'\)/);
  assert.match(read('app/layout.tsx'), /acrtracking\.stealthagents\.us\/v1\/tracker\.js/);
  assert.match(read('app/thank-you/page.tsx'), /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(read('app/thanks-whats-next/page.tsx'), /You are booked/);
});

test('public endpoints and security headers are bounded in source', () => {
  const leads = read('app/api/submit-lead/route.ts');
  assert.match(leads, /MAX_BODY_BYTES/);
  assert.match(leads, /content-type/);
  assert.match(leads, /AbortSignal\.timeout/);
  assert.match(leads, /ignored/);
  const tracking = read('app/ingest/track/route.ts');
  assert.match(tracking, /readBoundedText/);
  assert.match(tracking, /sameOrigin/);
  assert.match(tracking, /SITE_ID/);
  for (const event of ['form_view', 'funnel_form_page', 'funnel_form_submitted', 'cta_view', 'js_error', 'unhandled_rejection', 'funnel_booking_booking_confirmed']) assert.match(tracking, new RegExp(`'${event}'`));
  assert.match(leads, /sendLeadFallbackToMattermost/);
  assert.doesNotMatch(leads, /if \(!acrEndpoint &&/);
  const config = read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(config, new RegExp(header));
});

test('canonical host proxy is exact, Cloudflare aware, and preserves path and query', () => {
  const canonical = read('proxy.ts');
  assert.match(canonical, /const CANONICAL_HOST = 'virtualclaimsassistant\.com'/);
  assert.match(canonical, /request\.headers\.get\('cf-visitor'\)/);
  assert.match(canonical, /request\.headers\.get\('x-forwarded-proto'\)/);
  assert.match(canonical, /host !== CANONICAL_HOST && host !== WWW_HOST/);
  assert.match(canonical, /destination\.pathname = request\.nextUrl\.pathname/);
  assert.match(canonical, /destination\.search = request\.nextUrl\.search/);
  assert.match(canonical, /NextResponse\.redirect\(destination, 308\)/);
  assert.doesNotMatch(canonical, /endsWith\(/);
});

test('visible source copy has no prohibited dash punctuation or decorative padded labels', () => {
  const paths = [...publicPageFiles, 'lib/site.ts', 'lib/content.ts', 'lib/october12-blog.ts', 'lib/october12-research.ts', 'components/SiteChrome.tsx', 'components/LeadForm.tsx'];
  for (const path of paths) {
    const source = read(path);
    assert.doesNotMatch(source, /[—–]/, path);
    assert.doesNotMatch(source, /["'`]0[1-9]["'`]/, path);
  }
});
