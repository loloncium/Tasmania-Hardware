'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface WishlistDrawerProps {
  open: boolean;
  onClose: () => void;
}

const wishlistItems = [
  { name: 'Plaster Velvet Wall', price: '$165 / m²' },
  { name: 'Atelier Dining Table', price: '$5,200' }
];

export function WishlistDrawer({ open, onClose }: WishlistDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex bg-black/60"
        >
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            className="ml-auto h-full w-full max-w-md overflow-y-auto bg-[#111111] p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-stone-400">Saved for later</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Your wishlist</h2>
              </div>
              <button onClick={onClose} className="text-xl text-stone-300 transition hover:text-white">
                ×
              </button>
            </div>
            <div className="mt-8 space-y-6">
              {wishlistItems.map((item) => (
                <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    </div>
                    <span className="text-sm font-semibold text-gold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6 text-sm leading-7 text-stone-300">
              <p className="font-semibold text-white">Design-ready selections</p>
              <p className="mt-3">Keep your preferred finishes and products close while you refine your luxury scheme.</p>
            </div>
            <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:brightness-110">
              Contact trade support
            </Link>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
