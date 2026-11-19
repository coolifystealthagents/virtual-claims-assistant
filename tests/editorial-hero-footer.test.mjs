import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const heroes = [
  { route: 'blog', page: 'app/blog/page.tsx' },
  { route: 'research', page: 'app/research/page.tsx' },
];

test('editorial indexes use the ledger page hero instead of the old stock banner', () => {
  for (const { route, page } of heroes) {
    const source = read(page);
    assert.match(source, /PageHero/);
    assert.match(source, /lg-card-grid/);
    assert.match(source, /post\.thumbnail/);
    assert.match(source, /dateTime=\{post\.publishedAt\}/);
    assert.doesNotMatch(source, new RegExp(`${route}-hero-desktop\\.webp`));
  }
});

test('editorial hero assets are present, optimized, and bounded', () => {
  for (const { route } of heroes) {
    for (const variant of ['desktop.webp', 'mobile.webp']) {
      const asset = join(root, `public/editorial/${route}-hero-${variant}`);
      assert.ok(existsSync(asset), asset);
      assert.ok(statSync(asset).size > 10_000, asset);
      assert.ok(statSync(asset).size < 300_000, asset);
    }
  }
});

test('image provenance records both stock sources and non-employee alt policy', () => {
  const provenance = read('IMAGE_SOURCES.md');
  for (const id of ['3760067', '590022']) assert.match(provenance, new RegExp(id));
  assert.match(provenance, /https:\/\/www\.pexels\.com\/license\//);
  assert.match(provenance, /not employees or claims professionals affiliated with Virtual Claims Assistant/);
});

test('shared footer renders Blog and Research as normal neighboring navigation links', () => {
  const chrome = read('components/SiteChrome.tsx');
  assert.equal((chrome.match(/>Blog<\/Link>/g) || []).length, 1);
  assert.equal((chrome.match(/>Research<\/Link>/g) || []).length, 1);
  assert.doesNotMatch(chrome, /footer-research-button/);
});
