'use client';

import { useMemo, useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { PageSection } from '../../components/PageSection';
import { ProductCard } from '../../components/ProductCard';
import { categories, products } from '../../lib/data';

export default function ShopPage() {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = active === 'all' || item.category.toLowerCase().includes(active);
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.summary.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [active, search]);

  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Product Catalogue"
          title="A refined and usable product experience for premium interiors." 
          description="Discover curated tiles, furniture and fixtures through a modern commerce experience designed for easy selection and specification." 
        />
      </section>
      <section className="section-wrapper pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[28px] border border-white/10 bg-[#111111]/80 p-5 shadow-soft backdrop-blur-sm">
            <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
              Search products
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name or material"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setActive('all')}
              className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition ${active === 'all' ? 'border-gold bg-gold/10 text-gold' : 'border-white/10 text-stone-300 hover:border-gold hover:text-gold'}`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.24em] transition ${active === category.id ? 'border-gold bg-gold/10 text-gold' : 'border-white/10 text-stone-300 hover:border-gold hover:text-gold'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="section-wrapper grid gap-8 lg:grid-cols-2 xl:grid-cols-3 py-10">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
