'use client';

import Link from 'next/link';
import { Product } from '../lib/data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/95 shadow-card transition hover:-translate-y-1 hover:border-gold/30">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-7">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{product.category}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{product.name}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-300">{product.summary}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-base font-semibold text-white">{product.price}</span>
          <Link href={`/shop/${product.id}`} className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.24em] text-gold transition hover:border-gold hover:text-white">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
