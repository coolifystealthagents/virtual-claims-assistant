import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path, encoding) => readFileSync(join(root, path), encoding);
const sha256 = (path) => createHash('sha256').update(read(path)).digest('hex');

test('contact proof uses the verified first-party Bacolod team photo and official logo', () => {
  const source = read('app/contact-us/page.tsx', 'utf8');

  assert.equal(
    sha256('public/brand/stealth-agents-team-bacolod.jpg'),
    'e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767',
  );
  assert.equal(
    sha256('public/brand/stealth-agents-logo-black.png'),
    'bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45',
  );
  assert.match(source, /src="\/brand\/stealth-agents-team-bacolod\.jpg"/);
  assert.match(source, /width=\{953\}/);
  assert.match(source, /height=\{540\}/);
  assert.match(source, /sizes="\(max-width: 900px\) 100vw, 635px"/);
  assert.doesNotMatch(source, /stealth-agents-team-bacolod\.jpg"[^>]*\sfill\b/);
  assert.match(source, /alt="The official StealthAgents team in Bacolod"/);
  assert.match(source, /src="\/brand\/stealth-agents-logo-black\.png"/);
  assert.match(source, /stealth-agents-logo-black\.png"[^>]*width=\{149\}[^>]*height=\{50\}/);
  assert.match(source, />Official team, Bacolod</);
  assert.match(source, /role design, candidate matching, onboarding support, and accountable service operations/);

  const firstFoldEnd = source.indexOf('</section>', source.indexOf('className="contact-first-fold"'));
  const proofStart = source.indexOf('className="parent-proof"');
  const nextSection = source.indexOf('className="contact-section"');
  assert.ok(firstFoldEnd < proofStart && proofStart < nextSection, 'parent proof must immediately follow the first-fold composition');

  const css = read('app/contact-us/contact.css', 'utf8');
  assert.match(css, /\.team-photo img\{[^}]*object-fit:contain/);
  assert.match(css, /\.team-photo img\{[^}]*aspect-ratio:953\/540/);
  assert.match(css, /\.parent-proof\{[^}]*grid-template-columns:minmax\(0,635px\)/);
  assert.match(css, /\.parent-logo\{[^}]*width:min\(149px,100%\)/);
});
