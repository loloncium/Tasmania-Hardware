'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../lib/data';

export function ProductsCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const heading = headingRef.current;
    const cards = sectionRef.current.querySelectorAll('.product-card');

    if (heading) {
      gsap.from(heading, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%'
        }
      });
    }

    gsap.from(cards, {
      y: 36,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%'
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="space-y-8">
      <div ref={headingRef} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Featured products</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">A refined product showcase with commerce-ready clarity.</h2>
        </div>
        <button className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold">
          View catalog
        </button>
      </div>
      <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4">
        {products.slice(0, 4).map((product) => (
          <article
            key={product.id}
            className="product-card min-w-[320px] max-w-[320px] shrink-0 rounded-[32px] border border-white/10 bg-[#111111]/95 shadow-card"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[32px] bg-slate-900">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-300">{product.category}</p>
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <p className="text-sm leading-7 text-stone-300">{product.summary}</p>
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-white">{product.price}</span>
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:border-gold hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
