import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon } from './Icons';
import { LedgerCTA, Marquee, SectionHead } from './Ledger';

const roleTabs: Record<string, string> = {
  'fnol-intake-support': 'Intake',
  'claims-document-coordination': 'Evidence',
  'policyholder-status-support': 'Communication',
  'adjuster-work-queue-support': 'Queue',
  'subrogation-admin-support': 'Recovery',
  'claims-quality-support': 'Review',
  'claims-correspondence-support': 'Correspondence',
  'vendor-expert-coordination': 'Coordination',
};

const chain = [
  { label: 'Source', title: 'Anchor the record', text: 'Collect the supplied facts, file, or message and preserve where it came from.' },
  { label: 'Index', title: 'Make it findable', text: 'Name, classify, and link the item to the claim, date, version, and request status.' },
  { label: 'Route', title: 'Send the next owner', text: 'Move complete work or a documented exception to the person who can decide it.' },
  { label: 'Review', title: 'Check the handoff', text: 'Sample the output, inspect patterns, and correct the procedure before adding volume.' },
];

const prepareItems = [
  'Organize intake records and required fields',
  'Index documents, sources, dates, and versions',
  'Prepare approved status drafts and correspondence',
  'Maintain queues, diaries, and request logs',
  'Assemble samples and objective evidence checks',
  'Flag missing, conflicting, or overdue items',
];

const decideItems = [
  'Coverage, liability, and claim acceptance',
  'Reserves, valuation, and damage conclusions',
  'Settlement, denial, and payment approval',
  'Legal, medical, and regulatory interpretation',
  'Fraud conclusions and protected decisions',
  'Any exception outside the written procedure',
];

export function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="home lg-home">
      <section className="lg-hero">
        <div className="lg-hero-grid lg-container">
          <div className="lg-hero-copy">
            <p className="lg-eyebrow">Claims operations built around evidence</p>
            <h1>{site.hero} <em>{site.heroAccent}</em></h1>
            <p className="lg-hero-lead">{site.heroBody}</p>
            <div className="lg-actions lg-hero-actions">
              <Link className="lg-btn lg-btn--clay" href="/contact-us" id="cta-home-hero-bookcall">Book a free consultation <ArrowIcon /></Link>
              <Link className="lg-btn lg-btn--ghost" href="/services">See specialist roles</Link>
            </div>
            <ul className="lg-hero-notes">
              <li>Philippines-based specialists</li>
              <li>Minimum system access</li>
              <li>Professional decisions stay with you</li>
            </ul>
          </div>

          <div className="lg-stage" data-lg-scene aria-label="Claims evidence file">
            <div className="lg-folder-back" data-lg-depth="6" aria-hidden="true" />
            <div className="lg-tabs" data-lg-depth="18" aria-hidden="true">
              <span>Source</span>
              <span>Exception</span>
              <span>Owner</span>
            </div>
            <figure className="lg-photo" data-lg-tilt data-tilt-strength="3">
              <picture>
                <source type="image/avif" srcSet="/hero/claims-coordination-720.avif 720w, /hero/claims-coordination-960.avif 960w, /hero/claims-coordination-1440.avif 1440w" sizes="(max-width: 720px) 80vw, 42vw" />
                <source type="image/webp" srcSet="/hero/claims-coordination-720.webp 720w, /hero/claims-coordination-960.webp 960w, /hero/claims-coordination-1440.webp 1440w" sizes="(max-width: 720px) 80vw, 42vw" />
                <img src="/hero/claims-coordination-1440.webp" alt={site.heroAlt} width="1440" height="960" fetchPriority="high" loading="eager" decoding="async" />
              </picture>
              <figcaption><b>Working file</b> · Illustrative stock photography, not a client claim record.</figcaption>
            </figure>
            <div className="lg-slip lg-slip--a" data-lg-depth="20">
              <span>Source linked</span>
              <strong>Receipt noted</strong>
              <small>Date, channel, and owner recorded</small>
            </div>
            <div className="lg-slip lg-slip--b" data-lg-depth="13">
              <span>Exception routed</span>
              <strong>Owner notified</strong>
              <small>No coverage decision made by the assistant</small>
            </div>
            <div className="lg-seal" data-lg-depth="9" aria-hidden="true">
              <div><b>Evidence</b><span>Filed</span><b>Review ready</b></div>
            </div>
          </div>
        </div>
        <Marquee items={['Source', 'Index', 'Route', 'Review', 'Exception', 'Owner']} />
      </section>

      <section className="lg-manifesto">
        <div className="lg-manifesto-grid lg-container">
          <h2 data-reveal>Every status should point to <em>evidence.</em></h2>
          <div className="lg-manifesto-copy" data-reveal style={{ '--lg-delay': '100ms' } as CSSProperties}>
            <p>{site.manifesto}</p>
            <p>
              We shape a support role around the records, systems, and decisions that already exist.
              The assistant prepares the file for review. The accountable professional keeps the
              coverage decision.
            </p>
            <div className="lg-rules">
              <div><strong>Source first</strong><span>Every fact should be traceable to an approved record.</span></div>
              <div><strong>Exception visible</strong><span>Missing or conflicting details become a named queue item, never a guess.</span></div>
              <div><strong>Review owned</strong><span>A professional owns the sample, the correction, and the final decision.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg-section">
        <div className="lg-container">
          <SectionHead
            label="The role index"
            title={<>Choose the work that needs <em style={{ color: 'var(--lg-clay)', fontStyle: 'italic' }}>a second pair of hands.</em></>}
            copy="Each role starts with a defined source, a clear output, minimum access, and a named reviewer. Combine workflows only after the first handoff is stable."
          />
          <div className="lg-roles">
            {site.services.map((service, index) => (
              <Link className="lg-role" href={`/services/${service.slug}`} key={service.slug} data-reveal style={{ '--lg-delay': `${(index % 2) * 60}ms` } as CSSProperties}>
                <span className="lg-role-tab">{roleTabs[service.slug] || 'Claims'}</span>
                <h3>{service.name}</h3>
                <p>{service.short}</p>
                <span className="lg-role-foot"><span>{service.tasks[0]}</span><span>Review role</span></span>
                <span className="lg-role-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="lg-roles-foot">
            <p>{site.services.length} focused claims roles · one accountable review model</p>
            <Link className="lg-link" href="/services">Compare every service</Link>
          </div>
        </div>
      </section>

      <section className="lg-section lg-section--forest">
        <div className="lg-container">
          <SectionHead
            light
            label="The evidence chain"
            title={<>A record should survive the handoff.</>}
            copy="The specialist follows one traceable path from supplied source to the next owner. Nothing about the path requires a coverage opinion."
          />
          <div className="lg-chain">
            {chain.map((step, index) => (
              <article className="lg-chain-step" key={step.label} data-reveal style={{ '--lg-delay': `${index * 80}ms` } as CSSProperties}>
                <span className="lg-chain-tag">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="lg-chain-note" data-reveal>
            <strong>Review rule</strong>
            <p>If the source is missing, the item is indexed as an exception. The assistant does not infer coverage, value, fault, or payment from an incomplete file.</p>
          </div>
        </div>
      </section>

      <section className="lg-section">
        <div className="lg-container">
          <SectionHead
            label="A clear division"
            title={<>Support the file. Do not take the decision.</>}
            copy="The role is useful because the boundary is explicit. Administrative preparation stays with the specialist. Professional judgment stays with the claims team."
          />
          <div className="lg-boundary">
            <div className="lg-boundary-panel">
              <h3>The assistant prepares</h3>
              <ul>{prepareItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="lg-boundary-panel lg-boundary-panel--decide">
              <h3>Your professional decides</h3>
              <ul>{decideItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="lg-boundary-summary">Documented access · source linked records · named escalation owner</div>
          </div>
        </div>
      </section>

      <section className="lg-quality">
        <div className="lg-quality-grid lg-container">
          <div className="lg-quality-seal" aria-label="Quality review seal">
            <div className="lg-quality-seal-copy">
              <span>Weekly sample</span>
              <b>Review</b>
              <span>Evidence checked</span>
            </div>
          </div>
          <div className="lg-quality-copy">
            <p className="lg-eyebrow">Quality you can inspect</p>
            <h2>Check the evidence, not the personality.</h2>
            <p>
              Start with a small sample from one workflow. Check whether the record is complete,
              the source is traceable, the routing is correct, and the exception reached the right
              owner.
            </p>
            <div className="lg-check-list">
              <div><span>✓</span><p>Required fields present or explicitly marked missing</p></div>
              <div><span>✓</span><p>Every entered fact points to an approved source</p></div>
              <div><span>✓</span><p>Routing and ownership match the written procedure</p></div>
              <div><span>✓</span><p>Exceptions escalated without a coverage or value opinion</p></div>
            </div>
            <Link className="lg-link" href="/about" style={{ marginTop: 20 }}>See how the model works</Link>
          </div>
        </div>
      </section>

      <section className="lg-section lg-section--cream">
        <div className="lg-team lg-container">
          <figure className="lg-team-photo" data-lg-tilt data-tilt-strength="2">
            <Image src="/brand/stealth-agents-team-bacolod.jpg" alt="The official StealthAgents team in Bacolod" width={953} height={540} sizes="(max-width: 900px) 100vw, 48vw" loading="lazy" />
            <figcaption><span>Official team · Bacolod City, Philippines</span><b>StealthAgents</b></figcaption>
          </figure>
          <div className="lg-team-copy" data-reveal>
            <p className="lg-eyebrow">The team behind the file</p>
            <h2>Claims focus, backed by a real staffing team.</h2>
            <p>
              StealthAgents recruits, employs, and supports the Philippines-based specialists behind
              these claims roles. Virtual Claims Assistant is the role design and workflow layer.
            </p>
            <p>
              Your team keeps licensing, supervision, privacy obligations, and every claim decision.
              The specialist keeps the agreed administrative work moving and the record current.
            </p>
            <div className="lg-team-facts">
              <div><strong>Philippines only</strong><span>Recruiting, employment, and ongoing support</span></div>
              <div><strong>Role designed</strong><span>Inputs, outputs, access, and review before launch</span></div>
              <div><strong>Accountable</strong><span>Claims professionals retain every coverage decision</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg-section">
        <div className="lg-container">
          <SectionHead
            label="Field notes"
            title={<>Read the file before changing the workflow.</>}
            copy="Practical guidance for intake records, document indexes, status communication, and controlled support roles."
          />
          <div className="lg-notes">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link className="lg-note" href={`/blog/${post.slug}`} key={post.slug} data-reveal style={{ '--lg-delay': `${index * 70}ms` } as CSSProperties}>
                <span className="lg-note-tab">{post.category}</span>
                <span className="lg-post-meta">{post.publishedAt} · {post.readTime}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="lg-link">Read the field note</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LedgerCTA />
    </main>
  );
}
