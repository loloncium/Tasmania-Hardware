'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const cartItems = [
  { name: 'Margaux Slate Porcelain', price: '$249 / m²', quantity: 2 },
  { name: 'Noir Brassware Set', price: '$1,980', quantity: 1 }
];

export function CartDrawer({ open, onClose }: CartDrawerProps) {
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
                <p className="text-sm uppercase tracking-[0.28em] text-stone-400">Your cart</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Ready for a refined order</h2>
              </div>
              <button onClick={onClose} className="text-xl text-stone-300 transition hover:text-white">
                ×
              </button>
            </div>
            <div className="mt-8 space-y-6">
              {cartItems.map((item) => (
                <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-300">Quantity: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-gold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between text-sm text-stone-300">
                <span>Subtotal</span>
                <span className="text-white">$2,478</span>
              </div>
              <Link href="/shop" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:brightness-110">
                Continue shopping
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
