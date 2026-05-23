'use client';

import Link from 'next/link';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Projects', href: '/projects' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'Trade Program', href: '/trade' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] py-16">
      <div className="section-wrapper grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Maison Atelier</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Luxury interiors, material direction and trade support for visionary spaces.</h2>
          <p className="max-w-xl text-sm leading-7 text-stone-400">
            Founded to deliver considered interiors for residential architecture, boutique hospitality and high-end product environments.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Contact</p>
            <p className="mt-3 text-sm leading-7 text-stone-400">hello@maisonatelier.design</p>
            <p className="text-sm leading-7 text-stone-400">+61 2 8000 1234</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Navigate</p>
            <div className="mt-3 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-stone-400 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-wrapper mt-12 border-t border-white/10 pt-8 text-sm text-stone-500">
        <div className="flex flex-col gap-3 justify-between sm:flex-row">
          <p>© 2026 Maison Atelier. All rights reserved.</p>
          <p>Designed for premium interiors, materials and architectural finishes.</p>
        </div>
      </div>
    </footer>
  );
}
