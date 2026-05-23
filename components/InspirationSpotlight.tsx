'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function InspirationSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.inspiration-card');
    gsap.from(cards, {
      y: 38,
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
    <div ref={sectionRef} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Inspiration</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">A visual edit of interior concepts and curated material stories.</h2>
        <p className="mt-6 text-base leading-8 text-stone-300">
          Discover directional compositions, textural contrasts and layered lighting that set the tone for your next bespoke project.
        </p>
        <Link href="/inspiration" className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold">
          Explore the gallery
        </Link>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2">
        {['https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'].map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            className="inspiration-card overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]/80 shadow-card"
          >
            <img src={src} alt="Interior inspiration" className="h-72 w-full object-cover transition duration-700 hover:scale-105" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
