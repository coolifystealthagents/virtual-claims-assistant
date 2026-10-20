import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, CheckIcon } from './Icons';
import { site } from '@/lib/site';
import type { Service } from '@/lib/types';
import './CorePages.css';

const ContactLink = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;
const serviceHref = (slug: string) => `/services/${slug}`;

export function AboutCorePage() {
  return <main id="main-content" tabIndex={-1} className="core-page">
    <section className="core-hero split-hero">
      <div><p className="eyebrow">About {site.name}</p><h1>Claims capacity with accountable boundaries.</h1><p className="core-lead">We help claims teams define focused remote roles around evidence, approved systems, and clear escalation. The result is useful support without transferring professional judgment.</p><ContactLink id="cta-about-hero-bookcall">Discuss your workflow</ContactLink></div>
      <div className="core-visual"><Image src="/claims/about-evidence.svg" alt="A claims workflow showing evidence, support activity, and accountable review" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div>
    </section>
    <section className="core-section core-intro"><p className="eyebrow">Why we exist</p><div><h2>More hands only help when the work is well defined.</h2><p>Claims operations depend on timely records, reliable follow through, and decisions that can be traced to evidence. We shape support around that reality. Each role starts with the source material, expected output, review owner, and conditions that require escalation.</p></div></section>
    <section className="core-section"><div className="section-heading"><p className="eyebrow">Our operating principles</p><h2>Designed for control, not vague delegation.</h2></div><div className="core-card-grid thirds">
      <article className="core-card"><h3>Evidence before status</h3><p>Records and updates point back to an approved source. Missing or conflicting information becomes visible rather than guessed.</p></article>
      <article className="core-card"><h3>Authority stays named</h3><p>Coverage, liability, reserves, valuation, settlement, payment, legal interpretation, and claim outcomes remain with authorized professionals.</p></article>
      <article className="core-card"><h3>Review improves the role</h3><p>Sampled work, exception patterns, and practical feedback strengthen the workflow after launch.</p></article>
    </div></section>
    <section className="core-section process-band"><div><p className="eyebrow">How a role takes shape</p><h2>Start narrow. Make the handoff observable.</h2></div><ol className="plain-steps"><li><strong>Map the workflow.</strong><span>Identify recurring work, systems, records, current owners, and pressure points.</span></li><li><strong>Draw the boundary.</strong><span>Separate administrative preparation from licensed, legal, financial, or executive judgment.</span></li><li><strong>Define good work.</strong><span>Document inputs, output format, timeliness, evidence, review, and escalation.</span></li><li><strong>Launch with control.</strong><span>Use minimum access, a focused queue, and regular review before expanding scope.</span></li></ol></section>
    <section className="core-section promise"><div><p className="eyebrow">What partnership means</p><h2>Your operation remains accountable.</h2></div><div><p>A remote assistant works inside the permissions and process you approve. Your organization retains responsibility for supervision, licensing, privacy, security, regulatory obligations, and every claim decision.</p><p>We help turn recurring administrative work into a role that can be explained, reviewed, and improved.</p></div></section>
    <section className="core-closing"><p className="eyebrow">A practical first conversation</p><h2>Bring one workflow that needs more capacity.</h2><p>We will map the work, boundary, and review points with you.</p><ContactLink id="cta-about-closing-bookcall">Book a free consultation</ContactLink></section>
  </main>;
}

export function ServicesCorePage() {
  return <main id="main-content" tabIndex={-1} className="core-page">
    <section className="core-hero split-hero"><div><p className="eyebrow">Claims support services</p><h1>Focused roles for evidence heavy work.</h1><p className="core-lead">Choose the workflow where administrative preparation, coordination, and follow through can give accountable claims professionals more room to review and decide.</p><ContactLink id="cta-services-index-hero-bookcall">Plan a support role</ContactLink></div><div className="core-visual"><Image src="/claims/services-map.svg" alt="Six claims support workflows connected to accountable professional review" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div></section>
    <section className="core-section"><div className="section-heading"><p className="eyebrow">Six focused starting points</p><h2>Match support to the actual queue.</h2><p>Each role has distinct inputs, outputs, controls, and decision boundaries. Combine workflows only after ownership and review are stable.</p></div><div className="service-index-grid">{site.services.map((service) => <article className="service-index-card" key={service.slug}><Image src={service.heroImage} alt="" width={640} height={400} /><div><p className="card-audience">{service.audience}</p><h3>{service.name}</h3><p>{service.short}</p><ul>{service.tasks.slice(0, 3).map((task) => <li key={task}>{task}</li>)}</ul><Link className="text-link" href={serviceHref(service.slug)}>Explore this service <ArrowIcon /></Link></div></article>)}</div></section>
    <section className="core-section process-band"><div><p className="eyebrow">A controlled engagement</p><h2>One working model across every service.</h2></div><div className="control-grid"><article><h3>Document</h3><p>Agree on sources, queues, formats, access, and ownership.</p></article><article><h3>Delegate</h3><p>Assign bounded preparation and coordination, not claim authority.</p></article><article><h3>Review</h3><p>Sample outputs, inspect exceptions, and adjust the procedure.</p></article><article><h3>Expand</h3><p>Add volume or scope only when the first workflow is reliable.</p></article></div></section>
    <section className="core-section boundary-callout"><CheckIcon /><div><p className="eyebrow">A clear line</p><h2>Assistants support the process. Claims professionals own the decisions.</h2><p>Assistants do not determine coverage or liability, set reserves, value damage, negotiate settlements, deny claims, conclude fraud, interpret law, or authorize payment.</p></div></section>
    <section className="core-closing"><p className="eyebrow">Not sure where to start?</p><h2>Map the recurring work before choosing a role.</h2><ContactLink id="cta-services-index-closing-bookcall">Book a free consultation</ContactLink></section>
  </main>;
}

function ListPanel({ title, items, tone }: { title: string; items: string[]; tone?: string }) {
  return <article className={`list-panel ${tone || ''}`}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}

export function ServiceCorePage({ service }: { service: Service }) {
  const related = service.related.map((slug) => site.services.find((item) => item.slug === slug)).filter((item): item is Service => Boolean(item));
  const schema = {'@context':'https://schema.org','@type':'Service',name:service.name,description:service.socialDescription,url:`https://${site.domain}/services/${service.slug}`,provider:{'@type':'Organization',name:site.name,url:`https://${site.domain}`}};
  return <main id="main-content" tabIndex={-1} className="core-page service-detail">
    <section className="core-hero split-hero"><div><p className="eyebrow">Specialist claims support</p><h1>{service.name}</h1><p className="core-lead">{service.short}</p><p className="audience-line"><strong>Built for:</strong> {service.audience}</p><ContactLink id={`cta-services-${service.slug}-bookcall`}>Discuss this workflow</ContactLink></div><div className="core-visual"><Image src={service.heroImage} alt={service.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div></section>
    <section className="core-section problem-statement"><p className="eyebrow">The operating problem</p><h2>{service.problem}</h2></section>
    <section className="core-section two-column"><div><p className="eyebrow">Inputs</p><h2>What the role needs.</h2><p>Access begins with the minimum systems and records required for the approved workflow.</p></div><ListPanel title="Approved starting material" items={service.inputs} /></section>
    <section className="core-section workflow-section"><div className="section-heading"><p className="eyebrow">Workflow</p><h2>A traceable path from source to review.</h2></div><ol className="workflow-grid">{service.workflow.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></section>
    <section className="core-section"><div className="section-heading"><p className="eyebrow">Scope</p><h2>Useful work with a visible edge.</h2></div><div className="two-panels"><ListPanel title="Included" items={service.scope.included} tone="included" /><ListPanel title="Not included" items={service.scope.excluded} tone="excluded" /></div></section>
    <section className="core-section evidence-grid"><ListPanel title="Deliverables" items={service.deliverables} /><ListPanel title="Decision boundaries" items={service.decisionBoundaries} /><ListPanel title="Quality controls" items={service.qualityControls} /></section>
    <section className="core-section scenarios"><div className="section-heading"><p className="eyebrow">In practice</p><h2>How the boundary works in real situations.</h2></div><div className="two-panels">{service.scenarios.map((scenario) => <article className="scenario" key={scenario.title}><h3>{scenario.title}</h3><p><strong>Situation:</strong> {scenario.situation}</p><p><strong>Controlled response:</strong> {scenario.response}</p></article>)}</div></section>
    <section className="core-section faq-section"><div><p className="eyebrow">Common questions</p><h2>Before this role begins.</h2></div><div>{service.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <section className="core-section related"><div className="section-heading"><p className="eyebrow">Connected workflows</p><h2>Related specialist support.</h2></div><div className="two-panels">{related.map((item) => <Link className="core-card" href={serviceHref(item.slug)} key={item.slug}><h3>{item.name}</h3><p>{item.short}</p><span className="text-link">View service <ArrowIcon /></span></Link>)}</div></section>
    <section className="core-closing"><p className="eyebrow">Build from a defined queue</p><h2>Shape a controlled {service.name.toLowerCase()} role.</h2><p>Bring the current workflow, review owner, and recurring exceptions to a free consultation.</p><ContactLink id={`cta-services-${service.slug}-consultation`}>Plan a free consultation</ContactLink></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </main>;
}
