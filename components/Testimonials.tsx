'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  { quote: 'The attention to finish and proportion has transformed our entire home.', name: 'Eleanor M.', role: 'Private Client' },
  { quote: 'A rare combination of editorial luxury and thoughtful product guidance.', name: 'Julian P.', role: 'Interior Designer' },
  { quote: 'The project felt effortless while the outcomes remained exceptional.', name: 'Nora L.', role: 'Hotel Developer' }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const heading = headingRef.current;
    const cards = sectionRef.current.querySelectorAll('.testimonial-card');

    if (heading) {
      gsap.from(heading, {
        y: 20,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%'
        }
      });
    }

    gsap.from(cards, {
      y: 42,
      opacity: 0,
      duration: 0.95,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 88%'
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="grid gap-8">
      <div ref={headingRef} className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Testimonials</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Trusted by designers, architects and luxury homeowners worldwide.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card rounded-[28px] border border-white/10 bg-[#111111]/90 p-8 shadow-card">
            <p className="text-lg leading-9 text-white">“{item.quote}”</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm uppercase tracking-[0.24em] text-stone-400">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
