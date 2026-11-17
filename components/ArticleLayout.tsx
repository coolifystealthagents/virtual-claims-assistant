import type { ReactNode } from 'react';
import { ActiveArticleSidebar, type RelatedItem, type SourceItem, type TocItem } from './ActiveArticleSidebar';
import './editorial.css';

type Props = {
  children: ReactNode;
  toc: TocItem[];
  publishedAt: string;
  readTime: string;
  category: string;
  related: RelatedItem[];
  sources: SourceItem[];
  kind: 'blog' | 'research';
};

export function slugifyHeading(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function ArticleLayout({ children, kind, ...sidebar }: Props) {
  return <section className={`editorial-shell editorial-${kind}`}>
    <details className="mobile-toc"><summary>On this page</summary><nav aria-label="Article contents">{sidebar.toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav></details>
    <article className="editorial-prose">{children}</article>
    <ActiveArticleSidebar {...sidebar} items={sidebar.toc} />
  </section>;
}
