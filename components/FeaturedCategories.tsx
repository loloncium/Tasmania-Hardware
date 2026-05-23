'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const categories = [
  { title: 'Tiles & Surfaces', description: 'Monolithic stone, porcelain and marble finishes.', href: '/shop?category=tiles' },
  { title: 'Kitchens', description: 'Bespoke joinery, premium hardware and elegant silhouettes.', href: '/services' },
  { title: 'Bathrooms', description: 'Spa-inspired baths, luxurious brassware and sculptural details.', href: '/services' },
  { title: 'Furniture', description: 'Contemporary artisan furniture for residential and hospitality.', href: '/shop?category=furniture' }
];

export function FeaturedCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.category-card');
    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%'
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="grid gap-8 lg:grid-cols-4">
      <div className="lg:col-span-2">
        <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Featured categories</p>
        <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">A product catalogue that feels editorial and effortless.</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-stone-300">
          Browse premium materials and install-ready collections designed for sophisticated interiors and timeless living.
        </p>
      </div>
      {categories.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          viewport={{ once: true, amount: 0.25 }}
          className="category-card rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-stone-300">{item.description}</p>
          <Link href={item.href} className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-gold transition hover:text-white">
            View collection
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
