'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CartDrawer } from './CartDrawer';
import { WishlistDrawer } from './WishlistDrawer';

const navigationItems = [
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'Blog', href: '/blog' },
  { label: 'Trade', href: '/trade' }
];

const megaMenuItems = [
  {
    title: 'Tiles & Surfaces',
    description: 'Large-format porcelain, marble and sculptural wall finishes.',
    href: '/shop?category=tiles',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Kitchens',
    description: 'Bespoke joinery, premium hardware and architectural cabinetry.',
    href: '/services',
    image: 'https://images.unsplash.com/photo-1465098695138-de0a65e2a87f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Bathrooms',
    description: 'Spa-inspired fixtures, seamless stone and warm materials.',
    href: '/services',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Furniture',
    description: 'Contemporary tables, seating and luxury living collections.',
    href: '/shop?category=furniture',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const shopButtonClass = useMemo(
    () =>
      `relative inline-flex items-center gap-2 transition ${megaOpen ? 'text-gold' : 'text-stone-200 hover:text-gold'}`,
    [megaOpen]
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111111]/95 backdrop-blur-xl">
      <div className="section-wrapper flex items-center justify-between py-5 lg:py-6">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-white">
          Maison Atelier
        </Link>
        <nav className="hidden items-center gap-10 lg:flex text-sm uppercase tracking-[0.24em]">
          {navigationItems.map((item) =>
            item.label === 'Shop' ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link href={item.href} className={shopButtonClass} onFocus={() => setMegaOpen(true)}>
                  {item.label}
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="absolute left-0 top-full z-50 mt-4 grid w-[54rem] grid-cols-[1.2fr_0.8fr] gap-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/95 p-6 shadow-soft"
                    >
                      <div className="grid gap-4">
                        {megaMenuItems.map((menu, index) => (
                          <Link
                            key={menu.title}
                            href={menu.href}
                            onMouseEnter={() => setHoveredIndex(index)}
                            className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-gold hover:bg-white/10"
                          >
                            <p className="text-sm uppercase tracking-[0.28em] text-stone-300">{menu.title}</p>
                            <p className="mt-3 text-sm leading-7 text-stone-200">{menu.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]/80">
                        <img
                          src={megaMenuItems[hoveredIndex]?.image}
                          alt={megaMenuItems[hoveredIndex]?.title}
                          className="h-full w-full object-cover transition duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
                          <p className="text-sm uppercase tracking-[0.28em] text-stone-300">Preview</p>
                          <p className="mt-2 text-lg font-semibold text-white">{megaMenuItems[hoveredIndex]?.title}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="transition text-stone-200 hover:text-gold">
                {item.label}
              </Link>
            )
          )}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setWishOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-gold hover:text-gold"
              aria-label="Open wishlist"
            >
              ♥
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-gold hover:text-gold"
              aria-label="Open cart"
            >
              🛒
            </button>
          </div>
          <Link href="/contact" className="rounded-full border border-white/10 px-5 py-2 text-sm text-white transition hover:border-gold hover:text-gold">
            Contact
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold lg:hidden"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-full border-t border-white/10 bg-[#111111] text-white lg:hidden"
          >
            <div className="section-wrapper py-8">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl">Explore</span>
                <button
                  type="button"
                  className="text-sm uppercase tracking-[0.24em] text-stone-200 transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <div className="mt-8 space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-2xl font-semibold uppercase tracking-[0.24em] text-white transition hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-stone-300">
                  <p className="font-semibold text-white">Featured categories</p>
                  {megaMenuItems.map((menu) => (
                    <Link
                      key={menu.title}
                      href={menu.href}
                      className="transition hover:text-gold"
                      onClick={() => setOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <WishlistDrawer open={wishOpen} onClose={() => setWishOpen(false)} />
    </header>
  );
}
