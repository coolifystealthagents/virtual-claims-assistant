import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

test('homepage uses the approved official team photo and no invented team record', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /brand\/stealth-agents-team-bacolod\.jpg/);
  assert.match(component, /Official team · Bacolod City, Philippines/);
  assert.match(component, /loading="lazy"/);
  assert.ok(existsSync(join(root, 'public/brand/stealth-agents-team-bacolod.jpg')));
  assert.ok(statSync(join(root, 'public/brand/stealth-agents-team-bacolod.jpg')).size > 20_000);
});

test('homepage evidence chain uses labels and keeps no numbered section markers', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /const chain = \[/);
  for (const label of ['Source', 'Index', 'Route', 'Review']) assert.match(component, new RegExp(`label: '${label}'`));
  assert.doesNotMatch(component, />0[1-9]</);
  assert.doesNotMatch(component, /className="service-number"/);
});

test('homepage includes the boundary, quality review, and closing ticket without filler blocks', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /The assistant prepares/);
  assert.match(component, /Your professional decides/);
  assert.match(component, /Check the evidence, not the personality/);
  assert.match(read('components/Ledger.tsx'), /lg-cta-ticket/);
  assert.match(component, /LedgerCTA/);
});

test('ledger rhythm remains responsive without hiding page overflow', () => {
  const css = read('app/ledger.css');
  assert.match(css, /@media \(max-width: 980px\)[\s\S]*?\.lg-roles\s*\{[^}]*grid-template-columns: 1fr/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*?\.lg-notes,[\s\S]*?grid-template-columns: 1fr/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(css, /body\{[^}]*overflow:hidden/);
});
