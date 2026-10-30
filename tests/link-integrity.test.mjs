import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');
const serviceRoutes = new Set([
  '/services/fnol-intake-support',
  '/services/claims-document-coordination',
  '/services/policyholder-status-support',
  '/services/adjuster-work-queue-support',
  '/services/subrogation-admin-support',
  '/services/claims-quality-support',
]);

function editorialTargets() {
  const targets = [];
  for (const name of readdirSync(join(root, 'lib')).filter((entry) => entry.endsWith('.ts'))) {
    const source = read(`lib/${name}`);
    for (const match of source.matchAll(/["'](internalService|internalSibling)["']?\s*:\s*["']([^"']+)["']/g)) {
      targets.push({ file: name, field: match[1], target: match[2] });
    }
  }
  return targets;
}

test('every editorial service target uses a published service route', () => {
  const invalid = editorialTargets()
    .filter(({ field }) => field === 'internalService')
    .filter(({ target }) => !serviceRoutes.has(target));
  assert.deepEqual(invalid, []);
});

test('every service-valued editorial sibling uses a published service route', () => {
  const invalid = editorialTargets()
    .filter(({ field, target }) => field === 'internalSibling' && target.startsWith('/services/'))
    .filter(({ target }) => !serviceRoutes.has(target));
  assert.deepEqual(invalid, []);
});

test('shared footer exposes the published blog index', () => {
  const chrome = read('components/SiteChrome.tsx');
  const footer = chrome.slice(chrome.indexOf('export function Footer'));
  assert.match(footer, /<Link href="\/blog">Blog<\/Link>/);
});
