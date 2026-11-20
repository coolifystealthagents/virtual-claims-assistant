import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ArrowIcon } from './Icons';
import { site } from '@/lib/site';
import type { Service } from '@/lib/types';
import { LedgerCTA, PageHero, SectionHead } from './Ledger';

const serviceHref = (slug: string) => `/services/${slug}`;

const roleTabs: Record<string, string> = {
  'fnol-intake-support': 'Intake',
  'claims-document-coordination': 'Evidence',
  'policyholder-status-support': 'Communication',
  'adjuster-work-queue-support': 'Queue',
  'subrogation-admin-support': 'Recovery',
  'claims-quality-support': 'Review',
  'claims-correspondence-support': 'Correspondence',
  'vendor-and-expert-coordination': 'Coordination',
};

const aboutPrinciples = [
  { title: 'Evidence before status', text: 'Records and updates point back to an approved source. Missing or conflicting information becomes visible rather than guessed.' },
  { title: 'Authority stays named', text: 'Coverage, liability, reserves, valuation, settlement, payment, legal interpretation, and claim outcomes remain with authorized professionals.' },
  { title: 'Review improves the role', text: 'Sampled work, exception patterns, and practical feedback strengthen the workflow after launch.' },
];

const aboutSteps = [
  { title: 'Map the workflow', text: 'Identify recurring work, systems, records, current owners, and pressure points.' },
  { title: 'Draw the boundary', text: 'Separate administrative preparation from licensed, legal, financial, or executive judgment.' },
  { title: 'Define the evidence', text: 'Set the source, required fields, acceptance criteria, and exception route.' },
  { title: 'Review the handoff', text: 'Sample the first work and correct the procedure before expanding scope.' },
];

export function AboutCorePage() {
  return (
    <main id="main-content" tabIndex={-1} className="lg-page lg-about">
      <PageHero
        label="About Virtual Claims Assistant"
        title={<>Claims capacity with an <em style={{ color: 'var(--lg-clay)', fontStyle: 'italic' }}>accountable boundary.</em></>}
        lead="We help claims teams define focused remote roles around evidence, approved systems, and clear escalation. The result is useful administrative support without transferring professional judgment."
        fileLabel="About the desk"
        fileTitle="Built for inspectable work."
        fileNote="Every role starts with a source, an output, a reviewer, and an exception path."
        actions={<Link className="lg-btn lg-btn--clay" href="/contact-us">Discuss your workflow <ArrowIcon /></Link>}
      />

      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-head">
            <div><p className="lg-eyebrow">Why we exist</p><h2>More hands only help when the work is well defined.</h2></div>
            <p>Claims operations depend on timely records, reliable follow through, and decisions that can be traced to evidence. We shape support around that reality.</p>
          </div>
          <div className="lg-about-grid">
            {aboutPrinciples.map((item, index) => (
              <article className="lg-about-card" key={item.title} data-reveal style={{ '--lg-delay': `${index * 70}ms` } as CSSProperties}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-section lg-section--forest">
        <div className="lg-container">
          <SectionHead light label="How a role takes shape" title={<>Start narrow. Make the handoff observable.</>} />
          <div className="lg-chain">
            {aboutSteps.map((step, index) => (
              <article className="lg-chain-step" key={step.title} data-reveal style={{ '--lg-delay': `${index * 80}ms` } as CSSProperties}>
                <span className="lg-chain-tag">{['Map', 'Boundary', 'Evidence', 'Review'][index]}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-section lg-section--cream">
        <div className="lg-container">
          <div className="lg-head">
            <div><p className="lg-eyebrow">What partnership means</p><h2>Your operation remains accountable.</h2></div>
            <p>A remote assistant works inside the permissions and process you approve. Your organization retains responsibility for supervision, licensing, privacy, security, regulatory obligations, and every claim decision.</p>
          </div>
          <div className="lg-team-facts" style={{ maxWidth: 760 }}>
            <div><strong>Access</strong><span>Minimum role based access inside approved systems only.</span></div>
            <div><strong>Supervision</strong><span>A named client reviewer owns quality, corrections, and escalation.</span></div>
            <div><strong>Decisions</strong><span>Claim authority never transfers to the assistant.</span></div>
          </div>
        </div>
      </section>

      <LedgerCTA />
    </main>
  );
}

export function ServicesCorePage() {
  return (
    <main id="main-content" tabIndex={-1} className="lg-page">
      <PageHero
        compact
        label="Claims support services"
        title={<>Focused roles for <em style={{ color: 'var(--lg-clay)', fontStyle: 'italic' }}>evidence heavy work.</em></>}
        lead="Choose the workflow where administrative preparation, coordination, and follow through can give accountable claims professionals more room to review and decide."
        fileLabel="Service index"
        fileTitle="Eight focused claims roles."
        fileNote="Each role has distinct inputs, outputs, controls, and decision boundaries."
        actions={<Link className="lg-btn lg-btn--clay" href="/contact-us">Plan a support role <ArrowIcon /></Link>}
      />

      <section className="lg-section lg-section--index">
        <div className="lg-container">
          <SectionHead
            label="Role index"
            title={<>Match support to the actual queue.</>}
            copy="Start with one workflow. Combine roles only after ownership, evidence, access, and review are stable."
          />
          <div className="lg-services">
            {site.services.map((service, index) => (
              <Link className="lg-service-row" href={serviceHref(service.slug)} key={service.slug} data-reveal style={{ '--lg-delay': `${(index % 3) * 50}ms` } as CSSProperties}>
                <span>{roleTabs[service.slug] || 'Claims'}</span>
                <h3>{service.name}</h3>
                <p>{service.short}</p>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-section lg-section--sand">
        <div className="lg-container">
          <SectionHead
            label="A controlled engagement"
            title={<>One working model across every service.</>}
            copy="The same controls apply whether the work is intake, evidence, communication, or queue support."
          />
          <div className="lg-panel-grid">
            <article className="lg-panel"><h3>Document</h3><ul><li>Agree on sources, queues, formats, and ownership.</li><li>Set minimum access and retention rules.</li></ul></article>
            <article className="lg-panel"><h3>Delegate</h3><ul><li>Assign bounded preparation and coordination.</li><li>Keep claim authority with authorized professionals.</li></ul></article>
            <article className="lg-panel"><h3>Review</h3><ul><li>Sample outputs and inspect exceptions.</li><li>Adjust the procedure before adding volume.</li></ul></article>
          </div>
        </div>
      </section>

      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-boundary">
            <div className="lg-boundary-panel">
              <h3>Assistants support the process</h3>
              <ul>
                <li>Organize intake records and evidence indexes</li>
                <li>Prepare approved communication and request logs</li>
                <li>Maintain queues, diaries, and review samples</li>
              </ul>
            </div>
            <div className="lg-boundary-panel lg-boundary-panel--decide">
              <h3>Claims professionals own the decisions</h3>
              <ul>
                <li>Coverage, liability, reserves, and valuation</li>
                <li>Settlement, denial, fraud conclusions, and payment</li>
                <li>Legal, medical, and regulatory interpretation</li>
              </ul>
            </div>
            <div className="lg-boundary-summary">No claim authority transfers to a support role</div>
          </div>
        </div>
      </section>

      <LedgerCTA />
    </main>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return <article className="lg-panel"><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}

export function ServiceCorePage({ service }: { service: Service }) {
  const related = service.related.map((slug) => site.services.find((item) => item.slug === slug)).filter((item): item is Service => Boolean(item));
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.socialDescription,
    url: `https://${site.domain}/services/${service.slug}`,
    provider: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` },
  };

  return (
    <main id="main-content" tabIndex={-1} className="lg-detail">
      <section className="lg-detail-hero">
        <div className="lg-detail-grid lg-container">
          <div className="lg-detail-copy">
            <p className="lg-eyebrow lg-eyebrow--light">Specialist claims support</p>
            <h1>{service.name}</h1>
            <p className="lg-detail-audience"><strong>Built for:</strong> {service.audience}</p>
            <p className="lg-detail-summary">{service.short}</p>
            <div className="lg-actions">
              <Link className="lg-btn lg-btn--clay" href="/contact-us">Discuss this workflow <ArrowIcon /></Link>
              <Link className="lg-btn lg-btn--paper" href="#scope">Review the scope</Link>
            </div>
          </div>
          <figure className="lg-detail-media" data-lg-tilt data-tilt-strength="3">
            <img src={service.heroImage} alt={service.heroAlt} width="1200" height="900" fetchPriority="high" />
            <figcaption>{service.name} · source linked workflow illustration</figcaption>
          </figure>
        </div>
      </section>

      <section className="lg-detail-body">
        <div className="lg-container">
          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">The operating problem</p>
            <h2>{service.problem}</h2>
          </section>

          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">Inputs</p>
            <h2>What the role needs.</h2>
            <div className="lg-panel-grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
              <Panel title="Approved starting material" items={service.inputs} />
              <article className="lg-panel">
                <h3>Access rule</h3>
                <p style={{ margin: 0, color: 'var(--lg-muted)', fontSize: 12.5, lineHeight: 1.6 }}>Access begins with the minimum systems and records required for the approved workflow. Broader permissions require a documented review.</p>
              </article>
            </div>
          </section>

          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">Workflow</p>
            <h2>A traceable path from source to review.</h2>
            <ol className="lg-workflow-list">
              {service.workflow.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}
            </ol>
          </section>

          <section className="lg-detail-section" id="scope" data-reveal>
            <p className="lg-eyebrow">Scope</p>
            <h2>Useful work with a visible edge.</h2>
            <div className="lg-scope-grid">
              <div className="lg-scope">
                <h3>Included</h3>
                <ul>{service.scope.included.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="lg-scope lg-scope--excluded">
                <h3>Not included</h3>
                <ul>{service.scope.excluded.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">Controls</p>
            <h2>Deliverables, boundaries, and review.</h2>
            <div className="lg-panel-grid">
              <Panel title="Deliverables" items={service.deliverables} />
              <Panel title="Decision boundaries" items={service.decisionBoundaries} />
              <Panel title="Quality controls" items={service.qualityControls} />
            </div>
          </section>

          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">In practice</p>
            <h2>How the boundary works in real situations.</h2>
            <div className="lg-scenarios">
              {service.scenarios.map((scenario) => (
                <article key={scenario.title}>
                  <h3>{scenario.title}</h3>
                  <p><strong>Situation:</strong> {scenario.situation}</p>
                  <p><strong>Controlled response:</strong> {scenario.response}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">Common questions</p>
            <h2>Before this role begins.</h2>
            <div className="lg-faq">
              {service.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
            </div>
          </section>

          <section className="lg-detail-section" data-reveal>
            <p className="lg-eyebrow">Connected workflows</p>
            <h2>Related specialist support.</h2>
            <div className="lg-related">
              {related.map((item) => (
                <Link href={serviceHref(item.slug)} key={item.slug}>
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                  <span>View service ↗</span>
                </Link>
              ))}
              <Link href="/services">
                <h3>All claims roles</h3>
                <p>Compare every focused service and starting point.</p>
                <span>Open the role index ↗</span>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <LedgerCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
