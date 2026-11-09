import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const heroes = [
  { route: 'blog', page: 'app/blog/page.tsx', alt: 'Stock photo of a professional organizing notes beside a laptop at a desk' },
  { route: 'research', page: 'app/research/page.tsx', alt: 'Stock photo of a person analyzing generic printed charts with a pencil' },
];

const assets = heroes.flatMap(({ route }) => [
  `public/editorial/${route}-hero-desktop.avif`,
  `public/editorial/${route}-hero-desktop.webp`,
  `public/editorial/${route}-hero-mobile.avif`,
  `public/editorial/${route}-hero-mobile.webp`,
]);

test('editorial indexes use distinct art-directed modern hero photographs', () => {
  const css = read('components/editorial.css');
  assert.match(css, /\.editorial-hero-picture\{[^}]*aspect-ratio:6\/5[^}]*\}/);
  assert.match(css, /\.editorial-index-hero img\{[^}]*height:100%[^}]*aspect-ratio:6\/5[^}]*\}/);
  assert.match(css, /\.editorial-hero-picture,\.editorial-index-hero img\{max-height:420px\}/);
  for (const { route, page, alt } of heroes) {
    const source = read(page);
    assert.match(source, /<picture className="editorial-hero-picture">/);
    assert.match(source, new RegExp(`<source media="\\(max-width: 600px\\)" type="image\\/avif" srcSet="\\/editorial\\/${route}-hero-mobile\\.avif" \\/>`));
    assert.match(source, new RegExp(`<source media="\\(max-width: 600px\\)" type="image\\/webp" srcSet="\\/editorial\\/${route}-hero-mobile\\.webp" \\/>`));
    assert.match(source, new RegExp(`<source type="image\\/avif" srcSet="\\/editorial\\/${route}-hero-desktop\\.avif" \\/>`));
    assert.match(source, new RegExp(`<source type="image\\/webp" srcSet="\\/editorial\\/${route}-hero-desktop\\.webp" \\/>`));
    assert.match(source, new RegExp(`src="\\/editorial\\/${route}-hero-desktop\\.webp"`));
    assert.match(source, new RegExp(`alt="${alt}"`));
    assert.match(source, /width="1440" height="1200" loading="eager" fetchPriority="high" decoding="async"/);
    assert.doesNotMatch(source, new RegExp(`${route}-library\\.svg`));
    assert.match(source, /post\.thumbnail/, `${route} article thumbnails must remain data driven`);
  }
});

test('editorial hero assets are present, optimized, and bounded', () => {
  for (const asset of assets) {
    assert.ok(existsSync(join(root, asset)), `${asset} is required`);
    const bytes = statSync(join(root, asset)).size;
    assert.ok(bytes > 10_000, `${asset} must contain a substantive photograph`);
    assert.ok(bytes < 250_000, `${asset} must remain optimized for web delivery`);
  }
});

test('image provenance records both stock sources and non-employee alt policy', () => {
  const provenance = read('IMAGE_SOURCES.md');
  for (const id of ['3760067', '590022']) assert.match(provenance, new RegExp(id));
  assert.match(provenance, /https:\/\/www\.pexels\.com\/license\//);
  assert.match(provenance, /not employees or claims professionals affiliated with Virtual Claims Assistant/);
});

test('shared footer renders Research as one normal neighboring navigation link', () => {
  const chrome = read('components/SiteChrome.tsx');
  const css = read('app/globals.css');
  assert.equal((chrome.match(/>Research<\/Link>/g) || []).length, 1);
  assert.match(chrome, /<Link href="\/blog">Blog<\/Link><Link href="\/research">Research<\/Link><Link href="\/privacy">Privacy<\/Link>/);
  assert.doesNotMatch(chrome, /footer-research-button/);
  assert.doesNotMatch(css, /footer-research-button/);
});
