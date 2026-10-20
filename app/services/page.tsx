import type { Metadata } from 'next';
import { ServicesCorePage } from '@/components/CorePages';

const title = 'Claims support services';
const description = 'Explore six focused remote claims support services with defined inputs, outputs, controls, and decision boundaries.';
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services', images: [{ url: '/claims/services-map.svg', alt: 'Map of six claims support services' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/claims/services-map.svg'] }
};
export default function ServicesPage() { return <ServicesCorePage />; }
