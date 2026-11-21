import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { site } from '@/lib/site';

export function PageHero({
  label,
  title,
  lead,
  actions,
  fileLabel = 'Claims evidence desk',
  fileTitle = 'Source linked. Owner named.',
  fileNote = 'Every status should point to evidence. Every exception should reach the right owner.',
  image,
  imageAlt,
  compact = false,
}: {
  label: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  fileLabel?: string;
  fileTitle?: string;
  fileNote?: string;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
}) {
  return (
    <section className={`lg-pagehero${compact ? ' lg-pagehero--compact' : ''}`}>
      <div className="lg-pagehero-grid lg-container">
        <div className="lg-pagehero-copy">
          <p className="lg-eyebrow lg-eyebrow--light">{label}</p>
          <h1>{title}</h1>
          <p className="lg-pagehero-lead">{lead}</p>
          {actions ? <div className="lg-actions">{actions}</div> : null}
        </div>
        {image ? (
          <figure className="lg-pagehero-photo">
            <img src={image} alt={imageAlt || ''} width="1600" height="1067" />
          </figure>
        ) : (
          <div className="lg-pagefile" aria-hidden="true">
            <span className="lg-pagefile-tab">{fileLabel}</span>
            <span>Claim file / working record</span>
            <b>{fileTitle}</b>
            <small>{fileNote}</small>
            <ul className="lg-pagefile-facts">
              <li><span>Source</span>Approved record</li>
              <li><span>Route</span>Named owner</li>
              <li><span>Review</span>Sampled work</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  label,
  title,
  copy,
  light = false,
}: {
  label: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`lg-head${light ? ' lg-head--light' : ''}`} data-reveal>
      <div>
        <p className={`lg-eyebrow${light ? ' lg-eyebrow--light' : ''}`}>{label}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="lg-marquee" aria-hidden="true">
      <div className="lg-marquee-track">
        {[0, 1].map((group) => (
          <div className="lg-marquee-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LedgerCTA() {
  return (
    <section className="lg-cta">
      <div className="lg-cta-grid lg-container">
        <div data-reveal>
          <p className="lg-eyebrow lg-eyebrow--light">A practical first conversation</p>
          <h2>Bring us the queue that keeps hiding the record.</h2>
          <p>
            We will map one claims workflow, its sources, the review owner, and the exceptions that
            must stay with your authorized team.
          </p>
        </div>
        <div className="lg-cta-actions" data-reveal style={{ '--lg-delay': '120ms' } as CSSProperties}>
          <Link className="lg-btn lg-btn--paper" href="/contact-us" id="cta-global-final-bookcall">Book a free consultation ↗</Link>
          <Link className="lg-link" href="/services" style={{ color: 'var(--lg-cream)' }}>Review every service</Link>
          <div className="lg-cta-ticket" aria-hidden="true">
            <span>Start with one file</span>
            <strong>One source. One owner. One review rhythm.</strong>
            <small>Intake · evidence · correspondence · queue</small>
          </div>
        </div>
      </div>
      <div className="lg-cta-facts lg-container">
        <div><b>One workflow</b><span>Start with a queue you can inspect.</span></div>
        <div><b>Minimum access</b><span>Only the systems the role needs.</span></div>
        <div><b>Named reviewer</b><span>A professional keeps the decision.</span></div>
      </div>
      <div className="lg-cta-ticker" aria-hidden="true">SOURCE · INDEX · ROUTE · REVIEW · EXCEPTION · OWNER · SOURCE · INDEX · ROUTE · REVIEW</div>
    </section>
  );
}

export function ServiceLink({ slug, name }: { slug: string; name: string }) {
  return <Link href={`/services/${slug}`} aria-label={`Review ${name}`} />;
}

export const ledgerFileNote = site.manifesto;
