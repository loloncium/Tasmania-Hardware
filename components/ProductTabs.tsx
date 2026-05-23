'use client';

import { useState } from 'react';
import type { Product } from '../lib/data';
import { ProductQuoteForm } from './ProductQuoteForm';

interface ProductTabsProps {
  product: Product;
}

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'specs', label: 'Specifications' },
  { id: 'quote', label: 'Quote Request' }
];

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="rounded-[32px] border border-white/10 bg-[#111111]/90 p-10 shadow-soft">
      <div className="flex flex-wrap gap-3 border-b border-white/10 pb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-5 py-3 text-sm uppercase tracking-[0.24em] transition ${activeTab === tab.id ? 'bg-gold text-[#111111]' : 'border border-white/10 text-stone-300 hover:border-gold hover:text-gold'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <p className="text-base leading-8 text-stone-300">{product.details}</p>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-stone-300">
              <p className="font-semibold text-white">Material story</p>
              <p className="mt-4 leading-7">This refined collection is designed for seamless specification in luxury residences, hospitality suites and architectural interiors.</p>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="grid gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-sm leading-7 text-stone-300">
              <p className="font-semibold text-white">Key details</p>
              <ul className="mt-5 space-y-3">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#111111]/90 p-8 text-sm leading-7 text-stone-300">
              <p className="font-semibold text-white">Quote planning
</p>
              <p className="mt-4">Please include project scope, installed area, and finish requirements for the most accurate response.</p>
            </div>
          </div>
        )}

        {activeTab === 'quote' && <ProductQuoteForm productName={product.name} />}
      </div>
    </div>
  );
}
