import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');
const digest = (path) => createHash('sha256').update(readFileSync(join(root, path))).digest('hex');

const parseCssRules = (source, context = 'all', baseOffset = 0) => {
  const rules = [];
  let cursor = 0;
  while (cursor < source.length) {
    const open = source.indexOf('{', cursor);
    if (open < 0) break;
    const selector = source.slice(cursor, open).trim();
    let depth = 1;
    let close = open + 1;
    while (close < source.length && depth) {
      if (source[close] === '{') depth += 1;
      else if (source[close] === '}') depth -= 1;
      close += 1;
    }
    assert.equal(depth, 0, `unbalanced CSS block near ${selector}`);
    const body = source.slice(open + 1, close - 1);
    if (selector.startsWith('@media')) rules.push(...parseCssRules(body, selector, baseOffset + open + 1));
    else rules.push({ selector, body, context, index: baseOffset + cursor });
    cursor = close;
  }
  return rules;
};

const sectionAssets = {
  'public/home/method-doc-review-640.avif': { width: 640, height: 427, bytes: 20629, sha256: '501974c750d515cf97175987ca3d33e274b71e916a84a5c4cdf901e2ffdd6dc4' },
  'public/home/method-doc-review-640.webp': { width: 640, height: 427, bytes: 29634, sha256: '08fd1a87f558b7402a58cab745f8e4c2a5b20fcb3f8223af1859d5f29173de03' },
  'public/home/method-doc-review-960.avif': { width: 960, height: 640, bytes: 33035, sha256: '80580cc5876a6af5350c81a25deda42c69ddd9fdbdec28f2052ac153adb119c3' },
  'public/home/method-doc-review-960.webp': { width: 960, height: 640, bytes: 51038, sha256: '477c4b416f82097bc80cdcfd66c5c1c4ea6001217228c57324da0b644c19c620' },
  'public/home/method-doc-review-1440.avif': { width: 1440, height: 960, bytes: 54663, sha256: 'e223caa9c19fd59121640c4696902ed7325a11abbc2e3291d4ad98826f23185c' },
  'public/home/method-doc-review-1440.webp': { width: 1440, height: 960, bytes: 90118, sha256: 'ec2a2f97863bb5f9a27d21820051d7bb3cb35b0d0b1d751d30c083d54da68c33' },
  'public/home/consultation-planning-640.avif': { width: 640, height: 427, bytes: 27298, sha256: '3dc663e5a0a59daa0312a4fcbfb0af44a60c53f0e1176c3861592353f1a73c36' },
  'public/home/consultation-planning-640.webp': { width: 640, height: 427, bytes: 37210, sha256: 'e38d10593a6fae0a9e083d8daa27243eae4f1c53b2a8b322d1a503349860a659' },
  'public/home/consultation-planning-960.avif': { width: 960, height: 641, bytes: 41306, sha256: '2e3c7cd505d2dd19b036df3f470b8b4f401ba599d08e36587b87172063464c74' },
  'public/home/consultation-planning-960.webp': { width: 960, height: 641, bytes: 61046, sha256: 'babcf71d64a5dd0dda5b2b2859319362a4a1f296f533f788ad15e43b9a6d1857' },
  'public/home/consultation-planning-1440.avif': { width: 1440, height: 961, bytes: 61544, sha256: '20231c164eca24843db697577f26778761ffc2a32a36362868c220e12218dc72' },
  'public/home/consultation-planning-1440.webp': { width: 1440, height: 961, bytes: 100568, sha256: 'b080065cd1b3422239633de749edf19c4f527465bb34f435f940ac1a137590da' },
};

const dimensions = (buffer, extension) => {
  if (extension === 'avif') {
    assert.equal(buffer.subarray(4, 8).toString('ascii'), 'ftyp', 'AVIF must have an ISO BMFF ftyp box');
    const ftypSize = buffer.readUInt32BE(0);
    const brands = [buffer.subarray(8, 12).toString('ascii')];
    for (let offset = 16; offset + 4 <= ftypSize; offset += 4) brands.push(buffer.subarray(offset, offset + 4).toString('ascii'));
    assert.ok(brands.includes('avif') || brands.includes('avis'), 'AVIF must declare an AVIF major or compatible brand');
    const ispe = buffer.indexOf(Buffer.from('ispe'));
    assert.ok(ispe >= 0, 'AVIF must contain an ispe dimensions box');
    return [buffer.readUInt32BE(ispe + 8), buffer.readUInt32BE(ispe + 12)];
  }
  assert.equal(buffer.subarray(0, 4).toString('ascii'), 'RIFF', 'WebP must have a RIFF signature');
  assert.equal(buffer.subarray(8, 12).toString('ascii'), 'WEBP', 'WebP must have a WEBP signature');
  const marker = buffer.indexOf(Buffer.from([0x9d, 0x01, 0x2a]));
  assert.ok(marker >= 0, 'lossy WebP must contain a VP8 frame marker');
  return [buffer.readUInt16LE(marker + 3) & 0x3fff, buffer.readUInt16LE(marker + 5) & 0x3fff];
};

const protectedHero = {
  'public/hero/claims-coordination-720.avif': '73a66a092d4dfeaca60de29be5c6c10b1b43752a863feb2fd9845e26a0c04a78',
  'public/hero/claims-coordination-720.webp': 'fb95107f56f6bd35b4d16bdaecaeafa2fdc933fbf5525d3c409636bd7231b658',
  'public/hero/claims-coordination-960.avif': '53ac9cf482f60ddedd537e350487a77cb11ce2633dfcee4b0d33359e0af73de7',
  'public/hero/claims-coordination-960.webp': '31b8201338e83c75decac14ebcd03a6e5ada5f6b0c946f83bd6849d193a49e97',
  'public/hero/claims-coordination-1440.avif': '5e7f68404c6e3dce2ec49e892d360762c96d5e3c08c22bbc4a6d0a937af44caf',
  'public/hero/claims-coordination-1440.webp': 'ede9d23da283558bb36bddbb62c47a7ac00ff7dbd219e881bc761c231614a6e5',
};

test('method section uses responsive lazy stock photography and preserves readable workflow content', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /<figure className="method-media">/);
  assert.match(component, /method-doc-review-640\.avif 640w/);
  assert.match(component, /method-doc-review-640\.webp 640w/);
  assert.match(component, /method-doc-review-960\.avif 960w/);
  assert.match(component, /method-doc-review-960\.webp 960w/);
  assert.match(component, /method-doc-review-1440\.avif 1440w/);
  assert.match(component, /method-doc-review-1440\.webp 1440w/);
  assert.match(component, /<source type="image\/avif" srcSet="\/home\/method-doc-review-640\.avif 640w, \/home\/method-doc-review-960\.avif 960w, \/home\/method-doc-review-1440\.avif 1440w" sizes="\(max-width: 900px\) 86vw, 42vw" \/>/);
  assert.match(component, /<source type="image\/webp" srcSet="\/home\/method-doc-review-640\.webp 640w, \/home\/method-doc-review-960\.webp 960w, \/home\/method-doc-review-1440\.webp 1440w" sizes="\(max-width: 900px\) 86vw, 42vw" \/>/);
  assert.match(component, /alt="Professionals reviewing printed documents and coordinating work at an office table"/);
  assert.match(component, /width="1440" height="960" loading="lazy" decoding="async"/);
  assert.doesNotMatch(component, /className="method-art"/);
  for (const text of ['A useful working model', 'Define. Delegate. Improve.', 'Define the boundary.', 'Document the handoff.', 'Improve with evidence.', 'Plan a free consultation']) assert.match(component, new RegExp(text.replaceAll('.', '\\.')));
  assert.match(component, /id="cta-home-method-consultation"/);
  assert.match(component, /const CTA = .*href="\/contact-us"/);
  assert.match(component, /Illustrative stock photography\. The people shown are not identified as Virtual Claims Assistant employees or clients\./);
});

test('homepage method steps keep ordered semantics while replacing visible markers with scoped decorative icons', () => {
  const component = read('components/Marketing.tsx');
  const icons = read('components/Icons.tsx');
  const css = read('app/globals.css');
  const method = component.slice(component.indexOf('<section className="section method">'), component.indexOf('<section className="section journal">'));

  assert.match(method, /<ol className="method-steps">/);
  assert.equal((method.match(/<li>/g) || []).length, 3);
  assert.match(method, /<li><BoundaryIcon \/><span><strong>Define the boundary\.<\/strong> Separate preparation and coordination from licensed or executive judgment\.<\/span><\/li>/);
  assert.match(method, /<li><ChecklistIcon \/><span><strong>Document the handoff\.<\/strong> Set inputs, output format, review points, and exception rules\.<\/span><\/li>/);
  assert.match(method, /<li><TrendIcon \/><span><strong>Improve with evidence\.<\/strong> Review a focused sample and update the process when patterns emerge\.<\/span><\/li>/);
  for (const icon of ['BoundaryIcon', 'ChecklistIcon', 'TrendIcon']) {
    assert.match(icons, new RegExp(`export function ${icon}\\(\\).*aria-hidden="true"`));
    assert.equal((method.match(new RegExp(`<${icon} \\/>`, 'g')) || []).length, 1);
  }
  assert.match(css, /\.home \.method \.method-steps\{[^}]*list-style:none[^}]*padding-left:0[^}]*\}/);
  assert.match(css, /\.home \.method \.method-steps li\{[^}]*display:grid[^}]*grid-template-columns:[^;}]*minmax\(0,1fr\)[^}]*align-items:start[^}]*\}/);
  assert.match(css, /\.home \.method \.method-step-icon\{[^}]*\}/);
  assert.doesNotMatch(css, /(^|})\s*(?:ol|li|\.method ol|\.method li)\s*\{[^}]*list-style:none/);
});

test('closing section uses distinct responsive lazy photography while preserving copy and CTA', () => {
  const component = read('components/Marketing.tsx');
  assert.match(component, /<div className="closing-copy">/);
  assert.match(component, /<figure className="closing-media">/);
  assert.match(component, /consultation-planning-640\.avif 640w/);
  assert.match(component, /consultation-planning-640\.webp 640w/);
  assert.match(component, /consultation-planning-960\.avif 960w/);
  assert.match(component, /consultation-planning-960\.webp 960w/);
  assert.match(component, /consultation-planning-1440\.avif 1440w/);
  assert.match(component, /consultation-planning-1440\.webp 1440w/);
  assert.match(component, /<source type="image\/avif" srcSet="\/home\/consultation-planning-640\.avif 640w, \/home\/consultation-planning-960\.avif 960w, \/home\/consultation-planning-1440\.avif 1440w" sizes="\(max-width: 900px\) 86vw, 38vw" \/>/);
  assert.match(component, /<source type="image\/webp" srcSet="\/home\/consultation-planning-640\.webp 640w, \/home\/consultation-planning-960\.webp 960w, \/home\/consultation-planning-1440\.webp 1440w" sizes="\(max-width: 900px\) 86vw, 38vw" \/>/);
  assert.match(component, /alt="Professionals discussing plans together around an office table"/);
  assert.match(component, /width="1440" height="961" loading="lazy" decoding="async"/);
  for (const text of ['Make room for the work only you can do', 'Let us map your first specialist support role.', 'A focused conversation can turn scattered tasks into a clear, reviewable role brief.', 'Schedule a free call']) assert.match(component, new RegExp(text.replaceAll('.', '\\.')));
  assert.match(component, /id="cta-home-closing-schedulecall"/);
});

test('responsive section layout is ordered after desktop rules without overflow hiding', () => {
  const css = read('app/globals.css');
  const methodDesktop = css.indexOf('.method{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr)');
  const closingDesktop = css.indexOf('.closing{margin:3vw;padding:5vw;min-height:560px;background:var(--ink);color:white;border-radius:36px;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(340px,.85fr)');
  const tablet = css.indexOf('@media(max-width:900px)');
  const tabletStack = css.indexOf('.hero,.intro,.method,.closing,.contact-shell{grid-template-columns:1fr}', tablet);
  const mobile = css.indexOf('@media(max-width:600px)', tablet);
  const rules = parseCssRules(css);
  const targets = (className) => rules.filter(({ selector }) => new RegExp(`(^|[^\\w-])\\.${className}(?![\\w-])`).test(selector));
  const methodAspects = targets('method-media').filter(({ body }) => /(?:^|;)\s*aspect-ratio\s*:/.test(body));
  const closingAspects = targets('closing-media').filter(({ body }) => /(?:^|;)\s*aspect-ratio\s*:/.test(body));
  assert.ok(methodDesktop >= 0 && closingDesktop > methodDesktop, 'desktop sections must use bounded minmax grid columns');
  assert.ok(tablet > closingDesktop && tabletStack > tablet && mobile > tabletStack, 'one-column tablet cascade must follow desktop rules and precede mobile rules');
  assert.match(css.slice(methodDesktop, tablet), /\.method-media\{[^}]*aspect-ratio:1[^}]*\}/);
  assert.match(css.slice(closingDesktop, tablet), /\.closing-media\{[^}]*aspect-ratio:4\/3[^}]*\}/);
  assert.match(css.slice(tablet, mobile), /\.method-media\{aspect-ratio:16\/10;border-radius:32px\}\.closing-media\{aspect-ratio:16\/10\}/);
  assert.match(css.slice(mobile), /\.method-media\{aspect-ratio:4\/3;border-radius:24px/);
  assert.deepEqual(methodAspects.length, 3, 'method aspect ratio must have exactly desktop, tablet, and mobile declarations');
  assert.deepEqual(closingAspects.length, 2, 'closing aspect ratio must have exactly desktop and tablet declarations so mobile inherits tablet');
  assert.deepEqual(methodAspects.map(({ context }) => context), ['all', '@media(max-width:900px)', '@media(max-width:600px)'], 'method aspect declarations must follow desktop, tablet, and mobile order');
  assert.deepEqual(closingAspects.map(({ context }) => context), ['all', '@media(max-width:900px)'], 'closing mobile must inherit the final tablet aspect ratio without a later override');
  const safeOverflowOwners = new Set(['.visually-hidden', '.hero', '.hero-visual', '.hero-picture', '.method-media', '.closing-media', '.signal-strip']);
  const hiddenOverflowRules = rules.filter(({ body }) => /(?:^|;)\s*overflow(?:-x)?\s*:\s*(?:hidden|clip)(?:;|$)/.test(body));
  for (const { selector } of hiddenOverflowRules) {
    for (const owner of selector.split(',').map((part) => part.trim())) assert.ok(safeOverflowOwners.has(owner), `${owner} must not hide page or section overflow`);
  }
});

test('section photograph assets have exact formats, dimensions, bytes, and hashes', () => {
  for (const [asset, expected] of Object.entries(sectionAssets)) {
    assert.ok(existsSync(join(root, asset)), `${asset} is required`);
    const buffer = readFileSync(join(root, asset));
    assert.equal(statSync(join(root, asset)).size, expected.bytes, `${asset} byte length changed`);
    assert.deepEqual(dimensions(buffer, asset.split('.').at(-1)), [expected.width, expected.height], `${asset} intrinsic dimensions changed`);
    assert.equal(digest(asset), expected.sha256, `${asset} bytes changed`);
  }
});

test('released main hero bytes remain exact', () => {
  for (const [asset, expected] of Object.entries(protectedHero)) assert.equal(digest(asset), expected, `${asset} changed unexpectedly`);
});
