import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Specialist remote staff`, template: `%s | ${site.name}` },
  description: site.heroBody,
  icons: { icon: '/favicon.png' },
  openGraph: { type: 'website', siteName: site.name, images: ['/virtual-claims-assistant-open-graph.png'] },
  twitter: { card: 'summary_large_image', images: ['/virtual-claims-assistant-open-graph.png'] },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}><Header />{children}<Footer /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
  <Script
    id="databull-analytics"
    src="https://databull.stealthagents.us/js/script.js"
    data-website-id="dc_prqm939fe1czc9"
    data-domain="virtualclaimsassistant.com"
    strategy="afterInteractive"
  /></body></html>;
}
