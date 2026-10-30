import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import reviews from '@/app/review-provenance.json';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Insurance Claims Staffing Consultation',
  description: 'Talk with Virtual Claims Assistant about remote administrative support for claims operations.',
  alternates: { canonical: '/contact-us' },
};

const steps = [
  ['Workflow discovery', 'Map the recurring claims work, accountable owner, systems, evidence, and escalation points.'],
  ['Role design', 'Define a focused support role with clear inputs, outputs, access, and coverage boundaries.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit the approved workflow and communication needs.'],
  ['Controlled launch', 'Start with documented tasks, minimum access, sampled work, and accountable claims oversight.'],
];

const faqs = [
  ['What can a virtual claims assistant support?', 'An assistant can prepare intake records, index documents, track approved requests, draft status updates, maintain adjuster queues, and assemble review samples.'],
  ['Can an assistant decide coverage or claim value?', 'No. Coverage, liability, reserves, valuation, settlement, denial, fraud conclusions, legal interpretation, and payment approval stay with licensed or authorized claims professionals.'],
  ['Can we start with one claims workflow?', 'Yes. A narrow first workflow makes evidence requirements, access, ownership, review, and escalation easier to test before the role expands.'],
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us` };
  return <main id="main-content" tabIndex={-1} className="contact-page">
    <section className="contact-first-fold" aria-labelledby="contact-title">
      <div className="contact-intro">
        <p className="evidence-tab">Contact Us</p>
        <h1 id="contact-title">Put claims workflow pressure on the record.</h1>
        <p className="contact-deck">Tell us where intake, document control, policyholder updates, or adjuster queues need dependable administrative capacity.</p>
      </div>
      <div className="contact-form-card">
        <p className="evidence-tab">Consultation intake</p>
        <h2>Book a Free Consultation</h2>
        <p>Describe the workflow only. Do not include claim numbers, policyholder names, medical details, or other nonpublic claim information.</p>
        <LeadForm source="contact-page-consultation" />
      </div>
      <div className="review-evidence">
        <div className="review-heading">
          <span>Verified parent brand evidence</span>
          <strong>StealthAgents reviews</strong>
        </div>
        <div className="review-window" aria-label="StealthAgents reviews">
          <div className="review-rail">
            {reviews.records.map((review) => <article className="review-card" key={review.name} tabIndex={0}>
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <h2>{review.headline}</h2>
              <p>“{review.body}”</p>
              <div className="review-attribution"><strong>{review.name}</strong><span>{review.detail}</span></div>
            </article>)}
          </div>
        </div>
        <p className="review-source">Ten first party reviews published by StealthAgents. Review evidence verified October 19, 2026.</p>
      </div>
    </section>

    <section className="parent-proof" aria-labelledby="parent-proof-title">
      <div className="team-photo"><Image src="/brand/stealth-agents-team-bacolod.jpg" alt="The official StealthAgents team in Bacolod" width={953} height={540} sizes="(max-width: 900px) 100vw, 635px" priority /></div>
      <div className="parent-proof-copy">
        <p className="evidence-tab">Parent brand evidence</p>
        <Image className="parent-logo" src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={149} height={50} />
        <h2 id="parent-proof-title">Claims focus backed by an established staffing team.</h2>
        <p>Virtual Claims Assistant is supported by the StealthAgents team, with role design, candidate matching, onboarding support, and accountable service operations behind each engagement.</p>
        <p className="official-plate">Official team, Bacolod</p>
      </div>
    </section>

    <section className="contact-section"><div className="contact-container">
      <p className="eyebrow">A controlled path forward</p><h2>After you reach out</h2>
      <div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Responsibility and boundaries</h2><p>Remote assistants can prepare intake records, index evidence, maintain approved status records, draft approved communication, organize queues, and flag exceptions. They do not interpret coverage, determine liability, set reserves, value damage, negotiate settlements, deny claims, conclude fraud, give legal or medical advice, authorize payment, or replace licensed adjusters and claims professionals.</p></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Explore focused roles</p><h2>Common starting points</h2><div className="path-grid"><Link href="/services/fnol-intake-support"><h3>FNOL intake support</h3><p>Organize first notice records and route incomplete details.</p></Link><Link href="/services/claims-document-coordination"><h3>Claims document coordination</h3><p>Maintain a clear index of evidence, correspondence, and requests.</p></Link><Link href="/services/policyholder-status-support"><h3>Policyholder status support</h3><p>Prepare approved updates and complete communication records.</p></Link><Link href="/services/adjuster-work-queue-support"><h3>Adjuster work queue support</h3><p>Keep review queues visible and connected to source records.</p></Link></div></div></section>
    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Claims staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
