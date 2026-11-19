import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const assets = [
  'public/hero/claims-coordination-720.avif',
  'public/hero/claims-coordination-720.webp',
  'public/hero/claims-coordination-960.avif',
  'public/hero/claims-coordination-960.webp',
  'public/hero/claims-coordination-1440.avif',
  'public/hero/claims-coordination-1440.webp',
];

test('homepage hero uses responsive modern photograph sources with eager stable loading', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /className="lg-photo"/);
  assert.match(component, /type="image\/avif"/);
  assert.match(component, /type="image\/webp"/);
  assert.match(component, /claims-coordination-720\.avif 720w/);
  assert.match(component, /claims-coordination-960\.avif 960w/);
  assert.match(component, /claims-coordination-1440\.avif 1440w/);
  assert.match(component, /width="1440" height="960"/);
  assert.match(component, /fetchPriority="high"/);
  assert.match(component, /loading="eager"/);
  assert.match(component, /decoding="async"/);
});

test('homepage hero describes illustrative document coordination without employee claims', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /Illustrative stock photography/);
  assert.match(component, /not a client claim record/);
});

test('responsive hero assets are present and nonempty', () => {
  for (const asset of assets) {
    assert.ok(existsSync(join(root, asset)), `${asset} is required`);
    assert.ok(statSync(join(root, asset)).size > 10_000, `${asset} must contain an optimized image`);
  }
});

test('hero photograph is framed by the ledger layout rather than the old card grid', () => {
  const css = read('app/ledger.css');
  assert.match(css, /\.lg-photo\s*\{[^}]*position:\s*absolute/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*?\.lg-photo\s*\{/);
  assert.match(css, /\.lg-photo figcaption/);
  assert.match(css, /max-width: 45%/);
});

test('hero copy and conversion contracts remain unchanged', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /Book a free consultation/);
  assert.match(component, /id="cta-home-hero-bookcall"/);
  assert.match(component, /See specialist roles/);
  assert.match(component, /\{site\.hero\} <em>\{site\.heroAccent\}<\/em>/);
  assert.match(component, /\{site\.heroBody\}/);
});
