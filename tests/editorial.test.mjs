import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');
const slugs = (path) => [...read(path).matchAll(/"slug":\s*"([^"]+)"/g)].map((match) => match[1]);
const blogSlugs = [...slugs('lib/october12-blog.ts'), ...slugs('lib/content.ts').slice(0, 25).filter((slug) => !slug.match(/-(?:review|audit|study|brief|report)-\d+$/))];
const researchSlugs = [...slugs('lib/october12-research.ts'), ...slugs('lib/content.ts').filter((slug) => /-(?:review|audit|study|brief|report)-\d+$/.test(slug))];

test('all 42 editorial records resolve to unique static routes', () => {
  assert.equal(blogSlugs.length, 17);
  assert.equal(researchSlugs.length, 25);
  const routes = [...blogSlugs.map((slug) => `/blog/${slug}`), ...researchSlugs.map((slug) => `/research/${slug}`)];
  assert.equal(new Set(routes).size, 42);
  assert.match(read('app/blog/[slug]/page.tsx'), /generateStaticParams/);
  assert.match(read('app/research/[slug]/page.tsx'), /generateStaticParams/);
});

test('indexes provide introductions, taxonomy, thumbnails, dates, and reading metadata', () => {
  for (const path of ['app/blog/page.tsx', 'app/research/page.tsx']) {
    const source = read(path);
    assert.match(source, /editorial-intro/);
    assert.match(source, /taxonomy-nav/);
    assert.match(source, /post\.thumbnail/);
    assert.match(source, /dateTime=\{post\.publishedAt\}/);
    assert.match(source, /post\.readTime/);
  }
});

test('detail templates satisfy article metadata and navigation contracts', () => {
  for (const path of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /alternates:\s*\{ canonical:/);
    assert.match(source, /openGraph:/);
    assert.match(source, /twitter:/);
    assert.match(source, /application\/ld\+json/);
    assert.match(source, /ArticleLayout/);
    assert.match(source, /post\.thumbnail/);
    assert.match(source, /const toc =/);
  }
  const sidebar = read('components/ActiveArticleSidebar.tsx');
  assert.match(sidebar, /IntersectionObserver/);
  assert.match(sidebar, /aria-current/);
  assert.match(sidebar, /Related reading/);
  assert.match(sidebar, /Source desk/);
  assert.match(sidebar, /mobile-article-nav/);
});

test('every content record has a hero mapping and every mapped asset exists', () => {
  const content = read('lib/content.ts');
  assert.match(content, /thumbnail: post\.thumbnail \|\| workflowImage/);
  assert.match(content, /thumbnail: workflowImage\(post\.slug\)/);
  const assets = [...content.matchAll(/return '(\/editorial\/[^']+)'/g)].map((match) => match[1]);
  assert.equal(new Set(assets).size, 7);
  for (const asset of assets) assert.ok(existsSync(join(root, 'public', asset)), asset);
  for (const asset of ['/editorial/blog-library.svg', '/editorial/research-library.svg']) assert.ok(existsSync(join(root, 'public', asset)), asset);
});

test('editorial mobile grid tracks cannot expand past the viewport', () => {
  const css = read('components/editorial.css');
  assert.match(css, /grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css, /\.article-hero-copy,\.article-hero-media\{min-width:0\}/);
  assert.match(css, /\.article-hero h1\{font-size:clamp\(2\.25rem,10\.25vw,2\.5rem\);overflow-wrap:break-word\}/);
});

test('legacy research is expanded with useful record-specific sections and limits', () => {
  const content = read('lib/content.ts');
  for (const heading of ['Evidence questions to ask', 'Apply the finding to the workflow', 'Owner and decision boundaries', 'Source interpretation', 'Limitations and responsible use']) assert.match(content, new RegExp(heading));
  assert.match(content, /focusFromTitle/);
  assert.match(content, /subjectFromTitle/);
  assert.match(content, /No claim files or outcome data were used/);
  assert.match(content, /'exception pattern study': 'exception handling brief'/);
  assert.match(content, /'review consistency report': 'review consistency guide'/);
  assert.match(content, /without claiming observed outcomes/);
  assert.match(read('app/research/[slug]/page.tsx'), /Source synthesis, not an empirical claim-file study/);
});

test('editorial modification dates and sitemap reflect the release review', () => {
  const content = read('lib/content.ts');
  assert.match(content, /LAST_CONTENT_REVIEW = '2026-10-20'/);
  for (const path of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /dateModified: LAST_CONTENT_REVIEW/);
    assert.match(source, /Updated <time dateTime=\{LAST_CONTENT_REVIEW\}/);
  }
  assert.match(read('app/sitemap.ts'), /lastModified:reviewed/);
});

test('sticky desktop and accessible mobile navigation are styled', () => {
  const css = read('components/editorial.css');
  assert.match(css, /\.editorial-sidebar\{position:sticky/);
  assert.match(css, /max-height:calc\(100vh - 120px\)/);
  assert.match(css, /overflow-y:auto/);
  assert.match(css, /scroll-margin-top:116px/);
  assert.match(css, /\.mobile-article-nav/);
});

test('owned visible editorial prose contains no long dash characters or double hyphens', () => {
  const paths = ['app/blog/page.tsx', 'app/blog/[slug]/page.tsx', 'app/research/page.tsx', 'app/research/[slug]/page.tsx', 'lib/content.ts', 'lib/october12-blog.ts', 'lib/october12-research.ts'];
  for (const path of paths) {
    const source = read(path);
    assert.doesNotMatch(source, /[—–]/, path);
    assert.doesNotMatch(source, /--/, path);
  }
});
