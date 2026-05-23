'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const collections = [
  {
    title: 'Architectural Stone',
    label: 'New Arrival',
    description: 'Large-format porcelain with sculpted veining and warm neutral tones.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Tactile Plaster',
    label: 'Bespoke Finish',
    description: 'Soft matte surfaces, custom palette and artisan texture profiles.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sculptural Brass',
    label: 'Collection',
    description: 'Distinctive hardware, faucets and fixtures for elevated spaces.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
  }
];

export function CollectionsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.collection-card');
    gsap.from(cards, {
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.14,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%'
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Luxury collections</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Curated suites with a polished editorial rhythm.</h2>
        <p className="mt-6 text-base leading-8 text-stone-300">
          Each collection is crafted to assemble cohesive spaces with uncommon materials, calm palettes and intelligent detailing.
        </p>
      </div>
      <div className="grid gap-6">
        {collections.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="collection-card group overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/90 shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">{item.label}</span>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-stone-300">{item.description}</p>
              <button className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-gold transition hover:text-white">
                Explore collection
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
