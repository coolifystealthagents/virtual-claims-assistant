import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');
const siteSource = read('lib/site.ts');
const coreSource = read('components/CorePages.tsx');
const marketingSource = read('components/Marketing.tsx');
const routeSources = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx', 'app/services/[slug]/page.tsx'].map(read);
const slugs = ['fnol-intake-support', 'claims-document-coordination', 'policyholder-status-support', 'adjuster-work-queue-support', 'subrogation-admin-support', 'claims-quality-support'];
const images = ['about-evidence.svg', 'services-map.svg', 'fnol-intake.svg', 'document-coordination.svg', 'policyholder-status.svg', 'work-queue.svg', 'subrogation-admin.svg', 'quality-support.svg'];

test('six service records include complete long form fields', () => {
  assert.equal(slugs.filter((slug) => siteSource.includes(`slug: '${slug}'`)).length, 6);
  for (const slug of slugs) assert.match(siteSource, new RegExp(`slug: '${slug}'[\\s\\S]+?audience:[\\s\\S]+?problem:[\\s\\S]+?heroImage:[\\s\\S]+?inputs:[\\s\\S]+?workflow:[\\s\\S]+?scope:[\\s\\S]+?deliverables:[\\s\\S]+?decisionBoundaries:[\\s\\S]+?qualityControls:[\\s\\S]+?scenarios:[\\s\\S]+?faq:[\\s\\S]+?related:`));
  assert.equal((siteSource.match(/title: '[^']+', situation:/g) || []).length, 12);
  assert.equal((siteSource.match(/\{ q: '[^']+', a:/g) || []).length, 18);
});

test('core templates expose accessible mains and long form sections', () => {
  assert.equal((coreSource.match(/<main id="main-content" tabIndex=\{-1\}/g) || []).length, 3);
  assert.match(marketingSource, /<main id="main-content" tabIndex=\{-1\}/);
  for (const heading of ['Inputs', 'Workflow', 'Scope', 'Deliverables', 'Decision boundaries', 'Quality controls', 'In practice', 'Common questions', 'Connected workflows']) assert.ok(coreSource.includes(heading), heading);
  assert.doesNotMatch(marketingSource, /service-number|>01<|>02<|>03</);
});

test('each core route declares canonical and social metadata', () => {
  for (const source of routeSources) {
    assert.match(source, /alternates:\s*\{ canonical:/);
    assert.match(source, /openGraph:/);
    assert.match(source, /twitter:/);
  }
});

test('eight distinct route illustrations exist and are substantive', () => {
  const bodies = images.map((name) => {
    const path = join(root, 'public/claims', name);
    assert.ok(existsSync(path), name);
    const body = readFileSync(path, 'utf8');
    assert.ok(body.length > 700, `${name} should be substantive`);
    return body;
  });
  assert.equal(new Set(bodies).size, images.length);
  for (const body of bodies) assert.match(body, /<title/);
});

test('owned visible copy avoids prohibited dash characters', () => {
  const sources = [siteSource, coreSource, marketingSource, ...routeSources];
  for (const source of sources) {
    assert.doesNotMatch(source, /[–—]/);
    const literals = [...source.matchAll(/(['"`])((?:(?!\1).)*)\1/g)].map((match) => match[2]);
    for (const literal of literals) assert.doesNotMatch(literal, /--/);
  }
});
