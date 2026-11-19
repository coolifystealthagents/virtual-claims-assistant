import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { PageHero, LedgerCTA } from '@/components/Ledger';

export const metadata: Metadata = {
  title: 'Claims operations field notes',
  description: 'Practical, evidence-led guides for designing, delegating, and reviewing specialist claims support workflows.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Claims operations field notes', description: 'Practical guides to controlled claims support workflows.', url: '/blog', images: ['/virtual-claims-assistant-open-graph.png'] },
  twitter: { card: 'summary_large_image', images: ['/virtual-claims-assistant-open-graph.png'] }
};

const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return <main id="main-content" tabIndex={-1} className="lg-index">
    <PageHero
      label="Claims operations field notes"
      title={<>Build workflows people can <em style={{ color: 'var(--lg-clay)', fontStyle: 'italic' }}>inspect.</em></>}
      lead="A working library for claims leaders who need clearer queues, stronger source records, and safer handoffs. Each field note turns a recurring problem into a role boundary, evidence checklist, review rhythm, and escalation path."
      fileLabel="Field notes"
      fileTitle="Read the file before the workflow."
      fileNote="Every note separates administrative preparation from professional claim judgment."
      actions={<><Link className="lg-btn lg-btn--clay" href="/contact-us">Discuss a workflow</Link><Link className="lg-btn lg-btn--paper" href="/research">Open the research file</Link></>}
    />

    <section className="lg-section">
      <div className="lg-container">
        <div className="lg-toolbar">
          <p>Start with the queue that creates the most searching or repeated follow up.</p>
          <span>{blogPosts.length} field notes · {categories.length} topics</span>
        </div>

        <Link className="lg-feature" href={`/blog/${featured.slug}`}>
          <div className="lg-feature-media"><img src={featured.thumbnail} alt={`${featured.title} illustration`} fetchPriority="high" /></div>
          <div className="lg-feature-copy">
            <span className="lg-post-meta">Featured note · {featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <span className="lg-post-meta" style={{ color: 'var(--lg-sage)' }}><time dateTime={featured.publishedAt}>{featured.publishedAt}</time> · {featured.readTime}</span>
            <span className="lg-link" style={{ marginTop: 18 }}>Read the field note</span>
          </div>
        </Link>

        <div className="lg-card-grid">
          {rest.map((post, index) => (
            <Link className="lg-card" href={`/blog/${post.slug}`} key={post.slug}>
              <div className="lg-card-media"><img src={post.thumbnail} alt={`${post.title} illustration`} loading={index < 3 ? 'eager' : 'lazy'} /><span>{post.category}</span></div>
              <div className="lg-card-body">
                <span className="lg-post-meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readTime}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="lg-link">Read the field note</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <LedgerCTA />
  </main>;
}
