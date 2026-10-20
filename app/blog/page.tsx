import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import '@/components/editorial.css';

export const metadata: Metadata = {
  title: 'Claims operations field notes',
  description: 'Practical, evidence-led guides for designing, delegating, and reviewing specialist claims support workflows.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Claims operations field notes', description: 'Practical guides to controlled claims support workflows.', url: '/blog', images: ['/editorial/blog-library.svg'] },
  twitter: { card: 'summary_large_image', images: ['/editorial/blog-library.svg'] }
};

const categories = [...new Set(blogPosts.map((post) => post.category))];
const anchor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function BlogPage() {
  return <main id="main-content" tabIndex={-1} className="editorial-index">
    <header className="editorial-index-hero">
      <div>
        <p className="eyebrow">Claims operations field notes</p>
        <h1>Build workflows people can inspect.</h1>
        <p className="lede">A working library for claims leaders who need clearer queues, stronger source records, and safer handoffs. Each guide turns a recurring administrative problem into a role boundary, evidence checklist, review rhythm, and escalation path.</p>
      </div>
      <img src="/editorial/blog-library.svg" alt="Open field notebook with claims workflow tabs, check marks, and evidence cards" />
    </header>
    <div className="editorial-index-body">
      <section className="editorial-intro" aria-labelledby="blog-library-intro">
        <h2 id="blog-library-intro">Use the library at the point of work.</h2>
        <div>
          <p>Start with the queue that creates the most searching or repeated follow up. The intake guides help teams define complete records. Evidence systems cover naming, provenance, custody, and exceptions. Communication and role design notes clarify what a specialist may prepare and what an accountable professional must decide.</p>
          <p>Every article includes an article map, reading time, public source context, related reading, and practical review questions. The guidance supports workflow design and does not transfer licensed, legal, compliance, or claim decision authority.</p>
        </div>
      </section>
      <nav className="taxonomy-nav" aria-label="Browse blog topics">
        <a href="#all-guides">All guides ({blogPosts.length})</a>
        {categories.map((category) => <a key={category} href={`#${anchor(category)}`}>{category} ({blogPosts.filter((post) => post.category === category).length})</a>)}
      </nav>
      <section id="all-guides" className="editorial-card-grid" aria-label="All claims operations guides">
        {blogPosts.map((post, index) => <Link className="editorial-card" href={`/blog/${post.slug}`} key={post.slug} id={index === blogPosts.findIndex((item) => item.category === post.category) ? anchor(post.category) : undefined}>
          <img src={post.thumbnail} alt={`${post.title} evidence workflow illustration`} loading={index < 3 ? 'eager' : 'lazy'} />
          <div className="editorial-card-copy">
            <span className="topic">{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="card-meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time><span>{post.readTime}</span></div>
          </div>
        </Link>)}
      </section>
    </div>
  </main>;
}
