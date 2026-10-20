import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleLayout, { slugifyHeading } from '@/components/ArticleLayout';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: 'article', title: post.title, description: post.description, url, publishedTime: post.publishedAt, images: [{ url: post.thumbnail!, alt: `${post.title} editorial illustration` }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.thumbnail!] }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();
  const related = [...blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category), ...blogPosts.filter((item) => item.slug !== post.slug && item.category !== post.category)].slice(0, 3);
  const sectionToc = post.sections.map((section) => ({ id: slugifyHeading(section.heading), label: section.heading, level: 2 as const }));
  const faqToc = post.faq.map((item) => ({ id: slugifyHeading(`question-${item.q}`), label: item.q, level: 3 as const }));
  const toc = [...sectionToc, { id: 'common-questions', label: 'Common questions', level: 2 as const }, ...faqToc, { id: 'next-step', label: 'Plan the next step', level: 2 as const }];
  const canonical = `https://${site.domain}/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.publishedAt, dateModified: post.publishedAt, mainEntityOfPage: canonical,
    image: `https://${site.domain}${post.thumbnail}`, author: { '@type': 'Organization', name: `${site.name} Editorial Team` }, publisher: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` }
  };
  return <main className="editorial-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <header className="article-hero">
      <div className="article-hero-copy">
        <p className="article-kicker"><Link href="/blog">Field notes</Link> / {post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.description}</p>
        <div className="article-byline"><span>{site.name} Editorial Team</span><span><time dateTime={post.publishedAt}>{post.publishedAt}</time></span><span>{post.readTime}</span></div>
      </div>
      <div className="article-hero-media"><img src={post.thumbnail} alt={`${post.title} evidence workflow illustration`} /></div>
    </header>
    <ArticleLayout kind="blog" toc={toc} publishedAt={post.publishedAt} readTime={post.readTime} category={post.category} related={related.map((item) => ({ href: `/blog/${item.slug}`, title: item.title }))} sources={[post.source]}>
      {post.sections.map((section, index) => <section key={section.heading} id={slugifyHeading(section.heading)}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {index === 2 && <p>Use the <Link href={post.internalService}>specialist service role</Link> as a starting point for scope, source evidence, and decision boundaries.</p>}
        {index === 4 && <p>The public guidance from <a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> can help the accountable team test assumptions without replacing local professional review.</p>}
        {index === 6 && <p>Continue with <Link href={post.internalSibling}>this related workflow guide</Link> to compare controls and handoffs.</p>}
      </section>)}
      <section className="faq-block" id="common-questions"><h2>Common questions</h2>
        {post.faq.map((item) => <div key={item.q}><h3 id={slugifyHeading(`question-${item.q}`)}>{item.q}</h3><p>{item.a}</p></div>)}
      </section>
      <section className="article-final" id="next-step"><h2>Plan the next controlled workflow</h2><p>Bring the queue that consumes the most attention. We will help define its source, acceptance criteria, owner boundary, and review points.</p><Link id="cta-blog-final-bookcall" className="button" href="/contact-us">Book a free consultation</Link></section>
    </ArticleLayout>
  </main>;
}
