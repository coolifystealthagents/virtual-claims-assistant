import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path, encoding = null) => readFileSync(join(root, path), encoding ?? undefined);
const digest = (path) => createHash('sha256').update(read(path)).digest('hex');

function pngDimensions(path) {
  const bytes = read(path);
  assert.deepEqual(bytes.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), `${path} must contain genuine PNG bytes`);
  assert.equal(bytes.subarray(12, 16).toString('ascii'), 'IHDR', `${path} must begin with an IHDR chunk`);
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

test('root metadata declares raster favicon and branded default social image', () => {
  const layout = read('app/layout.tsx', 'utf8');
  const home = read('app/page.tsx', 'utf8');
  assert.match(layout, /icons:\s*\{\s*icon:\s*'\/favicon\.png'/);
  assert.match(layout, /openGraph:[^\n]+images:\s*\['\/virtual-claims-assistant-open-graph\.png'\]/);
  assert.match(layout, /twitter:[^\n]+images:\s*\['\/virtual-claims-assistant-open-graph\.png'\]/);
  assert.match(home, /openGraph:[^\n]+images:\s*\[\{\s*url:\s*'\/virtual-claims-assistant-open-graph\.png'/);
  assert.match(home, /twitter:[^\n]+images:\s*\['\/virtual-claims-assistant-open-graph\.png'\]/);
});

test('identity derivatives are valid raster files with intended dimensions', () => {
  assert.ok(existsSync(join(root, 'public/favicon.png')), 'favicon.png is required');
  assert.deepEqual(pngDimensions('public/favicon.png'), { width: 64, height: 64 });
  assert.ok(existsSync(join(root, 'public/virtual-claims-assistant-open-graph.png')), 'default social card is required');
  assert.deepEqual(pngDimensions('public/virtual-claims-assistant-open-graph.png'), { width: 1200, height: 630 });
});

test('approved source identity and first-party assets retain exact bytes', () => {
  assert.equal(digest('public/logo.svg'), 'b396311c72861023c5d29e34bcc8c2cdd06f7965707204f7e663d14ed03eac31');
  assert.equal(digest('public/hero.png'), '187590809e777897e9aaedb82bd7de48fa405e68b18bc6bb6e67b1cd7b6ee4a9');
  assert.equal(digest('public/brand/stealth-agents-team.webp'), '58d4a9d71f30927c0447a44ce91b818ba7a5f6ebcae495b64acaf5518161c721');
  assert.equal(digest('public/brand/stealth-agents-team-bacolod.jpg'), 'e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767');
  assert.equal(digest('public/brand/stealth-agents-logo-black.png'), 'bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45');
});

test('shared chrome preserves the full primary identity and subordinate acknowledgment', () => {
  const chrome = read('components/SiteChrome.tsx', 'utf8');
  assert.match(chrome, /<span>\{site\.name\}<\/span>/);
  assert.equal((chrome.match(/Powered by StealthAgents/g) ?? []).length, 2);
  assert.equal((chrome.match(/src="\/logo\.svg"/g) ?? []).length, 2);
});

test('editorial detail routes retain route-specific social images', () => {
  for (const path of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(path, 'utf8');
    assert.match(source, /openGraph:[^\n]+images:\s*\[\{\s*url:\s*post\.thumbnail!/);
    assert.match(source, /twitter:[^\n]+images:\s*\[post\.thumbnail!\]/);
    assert.doesNotMatch(source, /virtual-claims-assistant-open-graph/);
  }
});
