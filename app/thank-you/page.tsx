import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Choose a time', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero"><p className="eyebrow">Request received</p><h1>Thanks. Pick a time that works for you.</h1><p>Your free consultation can help turn the workflow into a clear support brief.</p></header>
    <section className="content-wrap"><iframe className="booking-frame" title="Book your consultation" src="https://go.oncehub.com/StealthAgentsTeam" loading="lazy" /></section>
  </main>;
}
