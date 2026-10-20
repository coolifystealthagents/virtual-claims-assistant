'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string; level?: 2 | 3 };
export type RelatedItem = { href: string; title: string };
export type SourceItem = { label: string; url: string };

type Props = {
  items: TocItem[];
  publishedAt: string;
  readTime: string;
  category: string;
  related: RelatedItem[];
  sources: SourceItem[];
};

function SidebarContents({ items, publishedAt, readTime, category, related, sources }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: '-112px 0px -66% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    const onScroll = () => {
      const current = [...headings].reverse().find((heading) => heading.getBoundingClientRect().top <= 132);
      if (current) setActiveId(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [items]);

  return <div className="editorial-sidebar-inner">
    <div className="sidebar-meta" aria-label="Article details">
      <span>{category}</span>
      <span><time dateTime={publishedAt}>{publishedAt}</time></span>
      <span>{readTime}</span>
    </div>
    <nav className="article-toc" aria-label="On this page">
      <p className="sidebar-label">On this page</p>
      <ol>{items.map((item) => <li className={item.level === 3 ? 'toc-child' : ''} key={item.id}>
        <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined} className={activeId === item.id ? 'active' : ''}>{item.label}</a>
      </li>)}</ol>
    </nav>
    <div className="sidebar-related">
      <p className="sidebar-label">Related reading</p>
      {related.map((item) => <Link key={item.href} href={item.href}>{item.title}</Link>)}
    </div>
    <div className="sidebar-sources">
      <p className="sidebar-label">Source desk</p>
      {sources.slice(0, 4).map((source) => <a key={source.url} href={source.url} rel="noopener noreferrer">{source.label}</a>)}
    </div>
    <Link className="sidebar-cta" href="/contact-us">Plan a controlled workflow</Link>
  </div>;
}

export function ActiveArticleSidebar(props: Props) {
  return <>
    <aside className="editorial-sidebar desktop-sidebar" aria-label="Article navigation"><SidebarContents {...props} /></aside>
    <details className="mobile-article-nav">
      <summary>Article contents and details</summary>
      <SidebarContents {...props} />
    </details>
  </>;
}
