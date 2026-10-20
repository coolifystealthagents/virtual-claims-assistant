import type { Metadata } from 'next';
import { AboutCorePage } from '@/components/CorePages';
import { site } from '@/lib/site';

const title = `About ${site.name}`;
const description = 'Learn how Virtual Claims Assistant designs bounded, evidence based remote support roles for accountable claims operations.';
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: '/about' },
  openGraph: { title, description, url: '/about', images: [{ url: '/claims/about-evidence.svg', alt: 'Evidence based claims support operating model' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/claims/about-evidence.svg'] }
};
export default function AboutPage() { return <AboutCorePage />; }
