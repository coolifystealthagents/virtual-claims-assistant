import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleLayout, { slugifyHeading } from '@/components/ArticleLayout';
import { researchPosts, researchBySlug, LAST_CONTENT_REVIEW } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const url = `/research/${post.slug}`;
  return {
    title: post.title, description: post.summary, alternates: { canonical: url },
    openGraph: { type: 'article', title: post.title, description: post.summary, url, publishedTime: post.publishedAt, images: [{ url: post.thumbnail!, alt: `${post.title} research illustration` }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.summary, images: [post.thumbnail!] }
  };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  const sections = post.sections || [];
  const faq = post.faq || [];
  const related = [...researchPosts.filter((item) => item.slug !== post.slug && item.cluster === post.cluster), ...researchPosts.filter((item) => item.slug !== post.slug && item.cluster !== post.cluster)].slice(0, 3);
  const toc = [
    ...sections.map((section) => ({ id: slugifyHeading(section.heading), label: section.heading, level: 2 as const })),
    { id: 'method-note', label: 'Method note', level: 2 as const }, { id: 'sources', label: 'Sources', level: 2 as const },
    ...(faq.length ? [{ id: 'common-questions', label: 'Common questions', level: 2 as const }, ...faq.map((item) => ({ id: slugifyHeading(`question-${item.q}`), label: item.q, level: 3 as const }))] : []),
    { id: 'next-step', label: 'Apply the research', level: 2 as const }
  ];
  const canonical = `https://${site.domain}/research/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.summary,
    datePublished: post.publishedAt, dateModified: LAST_CONTENT_REVIEW, mainEntityOfPage: canonical,
    image: `https://${site.domain}${post.thumbnail}`, author: { '@type': 'Organization', name: `${site.name} Research Desk` },
    publisher: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` }, citation: post.sources.map((source) => source.url)
  };
  return <main id="main-content" tabIndex={-1} className="editorial-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <header className="article-hero"><div className="article-hero-copy"><p className="article-kicker"><Link href="/research">Source brief</Link> / {post.cluster}</p><h1>{post.title}</h1><p className="article-deck">{post.summary}</p><div className="article-byline"><span>{site.name} Research Desk</span><span><time dateTime={post.publishedAt}>{`Published ${new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${post.publishedAt}T00:00:00Z`))}`}</time></span><span>Updated <time dateTime={LAST_CONTENT_REVIEW}>{LAST_CONTENT_REVIEW}</time></span><span>{post.readTime}</span><span>{post.sources.length} sources</span></div></div><div className="article-hero-media"><img src={post.thumbnail} alt={`${post.title} research file illustration`} /></div></header>
    <ArticleLayout kind="research" toc={toc} publishedAt={post.publishedAt} readTime={post.readTime || '8 min read'} category={post.cluster} related={related.map((item) => ({ href: `/research/${item.slug}`, title: item.title }))} sources={post.sources}>
      <p className="evidence-finding"><strong>Source synthesis, not an empirical claim-file study.</strong> {post.finding}</p>
      {sections.map((section) => <section key={section.heading} id={slugifyHeading(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <section id="method-note"><h2>Method note</h2><p>{post.methodology || 'We reviewed the public sources listed below in their original scope and translated recurring operational ideas into review questions. No claim outcome study was conducted.'}</p></section>
      <section className="source-file" id="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></section>
      {faq.length > 0 && <section className="faq-block" id="common-questions"><h2>Common questions</h2>{faq.map((item) => <div key={item.q}><h3 id={slugifyHeading(`question-${item.q}`)}>{item.q}</h3><p>{item.a}</p></div>)}</section>}
      <section className="article-final" id="next-step"><h2>Apply the brief to a real queue</h2><p>Bring the source records, current procedure, and known exceptions. We will help turn the evidence questions into a bounded support role and review plan.</p><Link id="cta-research-final-bookcall" className="button" href="/contact-us">Discuss your workflow</Link></section>
    </ArticleLayout>
  </main>;
}
