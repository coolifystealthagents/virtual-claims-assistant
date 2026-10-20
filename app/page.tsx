import type { Metadata } from 'next';
import { HomePage } from '@/components/Marketing';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.name} | Specialist claims support`,
  description: site.heroBody,
  alternates: { canonical: '/' },
  openGraph: { title: `${site.name} | Specialist claims support`, description: site.heroBody, url: '/', images: [{ url: site.heroImage, alt: site.heroAlt }] },
  twitter: { card: 'summary_large_image', title: `${site.name} | Specialist claims support`, description: site.heroBody, images: [site.heroImage] }
};

export default function Page() { return <HomePage />; }
