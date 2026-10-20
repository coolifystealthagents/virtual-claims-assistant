'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { site } from '@/lib/site';
import { ArrowIcon } from './Icons';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;

export function Header() {
  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.id = 'main-content';
      main.tabIndex = -1;
    }
  }, []);

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <Image src="/logo.svg" alt="" width={40} height={40} priority />
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Primary navigation">{primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <span className="powered-mark">Powered by StealthAgents</span>
      <Link id="cta-global-header-bookcall" className="button compact" href="/contact-us">Book a free call <ArrowIcon /></Link>
    </header>
  </>;
}

export function Footer() {
  return <footer>
    <div className="footer-brand">
      <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
      <p>Specialist remote staff for {site.audience}.</p>
      <p className="footer-powered">Powered by StealthAgents</p>
    </div>
    <nav className="footer-links" aria-label="Footer navigation">{primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
    <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
  </footer>;
}
