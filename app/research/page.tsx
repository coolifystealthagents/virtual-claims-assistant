import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { PageHero, LedgerCTA } from '@/components/Ledger';

export const metadata: Metadata = {
  title: 'Claims operations research library',
  description: 'A source-led library of claims workflow methods, evidence questions, limitations, and practical review controls.',
  alternates: { canonical: '/research' },
  openGraph: { title: 'Claims operations research library', description: 'Source-led briefs for inspectable claims operations.', url: '/research', images: ['/virtual-claims-assistant-open-graph.png'] },
  twitter: { card: 'summary_large_image', images: ['/virtual-claims-assistant-open-graph.png'] }
};

const clusters = [...new Set(researchPosts.map((post) => post.cluster))];

export default function ResearchPage() {
  const [featured, ...rest] = researchPosts;
  return <main id="main-content" tabIndex={-1} className="lg-index">
    <PageHero
      label="Claims research file"
      title={<>Evidence before <em style={{ color: 'var(--lg-clay)', fontStyle: 'italic' }}>inference.</em></>}
      lead="Source-led briefs for leaders building measurable claims support workflows. The library separates observable administrative records from protected judgment, states what a method can support, and keeps uncertainty visible."
      fileLabel="Research file"
      fileTitle="A claims file, not a verdict."
      fileNote="Every brief lists its method, public sources, boundaries, and practical application."
      actions={<><Link className="lg-btn lg-btn--clay" href="/contact-us">Apply a brief</Link><Link className="lg-btn lg-btn--paper" href="/blog">Read the field notes</Link></>}
    />

    <section className="lg-section">
      <div className="lg-container">
        <div className="lg-toolbar">
          <p>Use these briefs to frame an operational question, preserve provenance, and inspect exceptions.</p>
          <span>{researchPosts.length} briefs · {clusters.length} clusters</span>
        </div>

        <Link className="lg-feature" href={`/research/${featured.slug}`}>
          <div className="lg-feature-media"><img src={featured.thumbnail} alt={`${featured.title} illustration`} fetchPriority="high" /></div>
          <div className="lg-feature-copy">
            <span className="lg-post-meta">Featured brief · {featured.cluster}</span>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <span className="lg-post-meta" style={{ color: 'var(--lg-sage)' }}><time dateTime={featured.publishedAt}>{featured.publishedAt}</time> · {featured.readTime || 'Research brief'}</span>
            <span className="lg-link" style={{ marginTop: 18 }}>Read the brief</span>
          </div>
        </Link>

        <div className="lg-card-grid">
          {rest.map((post, index) => (
            <Link className="lg-card" href={`/research/${post.slug}`} key={post.slug}>
              <div className="lg-card-media"><img src={post.thumbnail} alt={`${post.title} illustration`} loading={index < 3 ? 'eager' : 'lazy'} /><span>{post.cluster}</span></div>
              <div className="lg-card-body">
                <span className="lg-post-meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readTime || 'Research brief'}</span>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <span className="lg-link">Read the brief</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <LedgerCTA />
  </main>;
}
