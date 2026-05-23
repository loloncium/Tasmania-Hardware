'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from '../lib/data';

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const gallery = product.gallery.length > 0 ? product.gallery : [product.image];
  const currentImage = gallery[activeIndex] ?? product.image;

  return (
    <div className="space-y-6">
      <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]/90 shadow-soft">
        <button
          type="button"
          onClick={() => setSelectedImage(currentImage)}
          className="relative block w-full"
        >
          <img src={currentImage} alt={product.name} className="h-[580px] w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white backdrop-blur-sm transition group-hover:bg-black/60">
            Zoom
          </span>
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {gallery.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-[24px] border px-0 transition ${activeIndex === index ? 'border-gold' : 'border-white/10'}`}
          >
            <img src={src} alt={`${product.name} view ${index + 1}`} className="h-24 w-full object-cover transition duration-500" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-gold hover:text-gold"
            >
              ×
            </button>
            <motion.img
              src={selectedImage}
              alt="Expanded product view"
              className="max-h-[88vh] max-w-[88vw] rounded-[24px] object-contain shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
