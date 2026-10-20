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
    <article className="editorial-prose">{children}</article>
    <ActiveArticleSidebar {...sidebar} items={sidebar.toc} />
  </section>;
}
