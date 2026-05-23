'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7
          }
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0,
          y: 28,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            once: true
          }
        });
      }

      mm.add('(max-width: 767px)', () => {
        if (contentRef.current) {
          gsap.from(contentRef.current, {
            opacity: 0,
            y: 40,
            duration: 1.1,
            ease: 'power4.out',
            delay: 0.2
          });
        }

        if (imageRef.current) {
          gsap.from(imageRef.current, {
            opacity: 0,
            y: 24,
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.3
          });
        }
      });

      mm.add('(min-width: 768px)', () => {
        if (contentRef.current) {
          gsap.from(contentRef.current, {
            opacity: 0,
            y: 18,
            duration: 0.85,
            ease: 'power3.out',
            delay: 0.15
          });
        }
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#111111] pb-24 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(222,169,47,0.15),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(17,17,17,0.96))] pointer-events-none" />
      <div className="section-wrapper relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-8 block text-sm uppercase tracking-[0.32em] text-stone-300">Luxury interiors & architectural finishes</span>
          <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Crafted spaces for discerning homes and refined living.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            A tailored collection of premium tiles, bespoke kitchens, bathrooms, furniture and architectural details built for modern luxury and exceptional hospitality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:brightness-110">
              View Collection
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold">
              Explore Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1a18]/80 p-4 shadow-soft"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              alt="Curated interior space"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="mt-6 grid gap-3 text-sm text-stone-300">
            <div className="rounded-3xl bg-white/5 px-5 py-4 shadow-card backdrop-blur-sm">
              <p className="font-semibold text-white">Editorial interiors</p>
              <p>Authentic material stories with architectural lighting and refined finishes.</p>
            </div>
            <div className="rounded-3xl bg-white/5 px-5 py-4 shadow-card backdrop-blur-sm">
              <p className="font-semibold text-white">Premium product curation</p>
              <p>Handpicked tiles, furniture and fixtures from benchmark luxury brands.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
