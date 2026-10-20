import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import '@/components/editorial.css';

export const metadata: Metadata = {
  title: 'Claims operations research library',
  description: 'A source-led library of claims workflow methods, evidence questions, limitations, and practical review controls.',
  alternates: { canonical: '/research' },
  openGraph: { title: 'Claims operations research library', description: 'Source-led briefs for inspectable claims operations.', url: '/research', images: ['/editorial/research-library.svg'] },
  twitter: { card: 'summary_large_image', images: ['/editorial/research-library.svg'] }
};

const clusters = [...new Set(researchPosts.map((post) => post.cluster))];
const anchor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function ResearchPage() {
  return <main id="main-content" tabIndex={-1} className="editorial-index research-index">
    <header className="editorial-index-hero">
      <div><p className="eyebrow">Claims research file</p><h1>Evidence before inference.</h1><p className="lede">Source-led briefs for leaders building measurable claims support workflows. The library separates observable administrative records from protected judgment, states what a method can support, and keeps uncertainty and limitations visible.</p></div>
      <img src="/editorial/research-library.svg" alt="Ruled research file with source tabs, evidence points, and review annotations" />
    </header>
    <div className="editorial-index-body">
      <section className="editorial-intro" aria-labelledby="research-intro"><h2 id="research-intro">A claims file, not a claims verdict.</h2><div>
        <p>Use these briefs to frame an operational question, define the eligible population, preserve provenance, inspect exceptions, and assign remediation. Each brief lists its method, public sources, boundaries, and practical application so another reviewer can challenge the reasoning.</p>
        <p>The collection does not invent studies or claim outcomes. It synthesizes public guidance into questions that teams can test against their own procedures, systems, jurisdictions, and professional obligations.</p>
      </div></section>
      <nav className="taxonomy-nav" aria-label="Browse research topics"><a href="#all-research">All briefs ({researchPosts.length})</a>{clusters.map((cluster) => <a key={cluster} href={`#${anchor(cluster)}`}>{cluster} ({researchPosts.filter((post) => post.cluster === cluster).length})</a>)}</nav>
      <section id="all-research" className="editorial-card-grid" aria-label="All research briefs">
        {researchPosts.map((post, index) => <Link className="editorial-card" href={`/research/${post.slug}`} key={post.slug} id={index === researchPosts.findIndex((item) => item.cluster === post.cluster) ? anchor(post.cluster) : undefined}>
          <img src={post.thumbnail} alt={`${post.title} research file illustration`} loading={index < 3 ? 'eager' : 'lazy'} />
          <div className="editorial-card-copy"><span className="topic">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><div className="card-meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time><span>{post.readTime}</span></div></div>
        </Link>)}
      </section>
    </div>
  </main>;
}
