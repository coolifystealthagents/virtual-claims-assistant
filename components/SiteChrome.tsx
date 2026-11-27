'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { ArrowIcon } from './Icons';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <a className="lg-skip" href="#main-content">Skip to main content</a>
      <header data-site-header="sticky" className="lg-header">
        <div className="lg-nav-inner">
          <Link className="lg-brand" href="/" aria-label={`${site.name} home`}>
            <Image src="/logo.svg" alt="" width={38} height={38} priority />
            <span className="lg-brand-copy">
              <span className="lg-brand-name">{site.name}</span>
              <span className="lg-brand-sub">Powered by StealthAgents</span>
            </span>
          </Link>

          <nav className="lg-nav" aria-label="Primary navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined}>{item.label}</Link>
            ))}
          </nav>

          <Link className="lg-nav-cta" href="/contact-us" id="cta-global-header-bookcall">Book a claims consult <ArrowIcon /></Link>

          <button className="lg-menu-button" type="button" aria-expanded={open} aria-controls="lg-mobile-nav" onClick={() => setOpen((value) => !value)}>
            <span>{open ? 'Close' : 'Menu'}</span>
            <i aria-hidden="true" />
          </button>
        </div>

        {open ? (
          <nav ref={panel} id="lg-mobile-nav" className="lg-mobile-nav" aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>
            ))}
            <Link className="lg-mobile-cta" href="/contact-us" onClick={() => setOpen(false)}>Book a claims consult</Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer data-site-footer="true" className="lg-footer">
      <div className="lg-footer-grid lg-container">
        <div className="lg-footer-brand">
          <Link className="lg-brand" href="/" aria-label={`${site.name} home`}>
            <Image src="/logo.svg" alt="" width={40} height={40} />
            <span className="lg-brand-copy">
              <span className="lg-brand-name">{site.name}</span>
              <span className="lg-brand-sub">Powered by StealthAgents</span>
            </span>
          </Link>
          <p>
            Specialist claims support built around source records, named ownership, and reviewable
            administrative work. Accountable professionals keep every coverage and claim decision.
          </p>
          <Link className="lg-footer-cta" href="/contact-us"><span>Map a claims support role</span><b>↗</b></Link>
        </div>

        <div data-footer-menu="true" className="lg-footer-col">
          <h3>Explore</h3>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/research">Research</Link>
        </div>

        <div data-footer-menu="true" className="lg-footer-col">
          <h3>Company</h3>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/thank-you">Book a call</Link>
        </div>
      </div>

      <div className="lg-footer-parent lg-container">
        <a className="lg-footer-parent-logo" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company">
          <Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={149} height={50} />
        </a>
        <div>
          <span>Parent company</span>
          <p>
            StealthAgents recruits, employs, and supports the Philippines-based specialists behind
            this service. Virtual Claims Assistant is a StealthAgents subsidiary.
          </p>
          <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a>
        </div>
      </div>

      <div className="lg-footer-bottom lg-container">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>{site.domain}</span>
      </div>
    </footer>
  );
}
