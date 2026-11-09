import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, BoundaryIcon, CheckIcon, ChecklistIcon, SparkIcon, TrendIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;

function ServiceCards() { return <div className="service-grid">{site.services.map((service) => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>; }
function Principles() { return <div className="principles">{site.principles.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

export function HomePage() {
  const design = site.design;
  return <main id="main-content" tabIndex={-1} className={`home design-${design}`}>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div>
      <figure className="hero-visual">
        <picture className="hero-picture">
          <source type="image/avif" srcSet="/hero/claims-coordination-720.avif 720w, /hero/claims-coordination-960.avif 960w, /hero/claims-coordination-1440.avif 1440w" sizes="(max-width: 600px) 90vw, (max-width: 900px) 92vw, 48vw" />
          <source type="image/webp" srcSet="/hero/claims-coordination-720.webp 720w, /hero/claims-coordination-960.webp 960w, /hero/claims-coordination-1440.webp 1440w" sizes="(max-width: 600px) 90vw, (max-width: 900px) 92vw, 48vw" />
          <img src="/hero/claims-coordination-1440.webp" alt={site.heroAlt} width="1440" height="960" fetchPriority="high" loading="eager" decoding="async" />
        </picture>
        <figcaption className="visually-hidden">Illustrative stock photography. The people shown are not identified as Virtual Claims Assistant employees or clients.</figcaption>
        <div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div>
      </figure>
    </section>
    {design === 'signal' && <section className="signal-strip" aria-label="Inside sales workflow"><span>Prospecting support</span><span>CRM hygiene</span><span>Follow through</span><span>Pipeline visibility</span></section>}
    {design === 'conversation' && <section className="conversation-band"><div className="bubble one">Clear replies</div><div className="bubble two">Useful context</div><div className="bubble three">Thoughtful escalation</div></section>}
    <section className="section intro"><p className="eyebrow">Specialist support, shaped around your work</p><div><h2>Build capacity without lowering the bar.</h2><p>{site.manifesto} Your assistant works from documented priorities, clear decision rights, and a practical review rhythm.</p></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose the support your team can actually use.</h2></div><ServiceCards /></section>
    <section className="section method">
      <figure className="method-media">
        <picture>
          <source type="image/avif" srcSet="/home/method-doc-review-640.avif 640w, /home/method-doc-review-960.avif 960w, /home/method-doc-review-1440.avif 1440w" sizes="(max-width: 900px) 86vw, 42vw" />
          <source type="image/webp" srcSet="/home/method-doc-review-640.webp 640w, /home/method-doc-review-960.webp 960w, /home/method-doc-review-1440.webp 1440w" sizes="(max-width: 900px) 86vw, 42vw" />
          <img src="/home/method-doc-review-1440.webp" alt="Professionals reviewing printed documents and coordinating work at an office table" width="1440" height="960" loading="lazy" decoding="async" />
        </picture>
        <figcaption className="visually-hidden">Illustrative stock photography. The people shown are not identified as Virtual Claims Assistant employees or clients.</figcaption>
      </figure>
      <div><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with the recurring work that already has an owner, a standard, and a clear escalation path. Then create a small review loop that makes the handoff stronger over time.</p><ol className="method-steps"><li><BoundaryIcon /><span><strong>Define the boundary.</strong> Separate preparation and coordination from licensed or executive judgment.</span></li><li><ChecklistIcon /><span><strong>Document the handoff.</strong> Set inputs, output format, review points, and exception rules.</span></li><li><TrendIcon /><span><strong>Improve with evidence.</strong> Review a focused sample and update the process when patterns emerge.</span></li></ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div>
    </section>
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for better delegation.</h2></div><Latest /></section>
    <section className="closing">
      <div className="closing-copy"><p className="eyebrow">Make room for the work only you can do</p><h2>Let us map your first specialist support role.</h2><p>A focused conversation can turn scattered tasks into a clear, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></div>
      <figure className="closing-media">
        <picture>
          <source type="image/avif" srcSet="/home/consultation-planning-640.avif 640w, /home/consultation-planning-960.avif 960w, /home/consultation-planning-1440.avif 1440w" sizes="(max-width: 900px) 86vw, 38vw" />
          <source type="image/webp" srcSet="/home/consultation-planning-640.webp 640w, /home/consultation-planning-960.webp 960w, /home/consultation-planning-1440.webp 1440w" sizes="(max-width: 900px) 86vw, 38vw" />
          <img src="/home/consultation-planning-1440.webp" alt="Professionals discussing plans together around an office table" width="1440" height="961" loading="lazy" decoding="async" />
        </picture>
        <figcaption className="visually-hidden">Illustrative stock photography. The people shown are not identified as Virtual Claims Assistant employees or clients.</figcaption>
      </figure>
    </section>
  </main>;
}
