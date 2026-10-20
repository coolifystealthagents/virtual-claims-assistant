import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceCorePage } from '@/components/CorePages';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: service.name,
    description: service.socialDescription,
    alternates: { canonical: url },
    openGraph: { title: service.name, description: service.socialDescription, url, images: [{ url: service.heroImage, alt: service.heroAlt }] },
    twitter: { card: 'summary_large_image', title: service.name, description: service.socialDescription, images: [service.heroImage] }
  };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  return <ServiceCorePage service={service} />;
}
