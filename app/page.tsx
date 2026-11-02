import type { Metadata } from 'next';
import { HomePage } from '@/components/Marketing';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.name} | Specialist claims support`,
  description: site.heroBody,
  alternates: { canonical: '/' },
  openGraph: { title: `${site.name} | Specialist claims support`, description: site.heroBody, url: '/', images: [{ url: '/virtual-claims-assistant-open-graph.png', alt: site.heroAlt }] },
  twitter: { card: 'summary_large_image', title: `${site.name} | Specialist claims support`, description: site.heroBody, images: ['/virtual-claims-assistant-open-graph.png'] }
};

export default function Page() { return <HomePage />; }
