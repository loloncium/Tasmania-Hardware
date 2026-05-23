'use client';

interface PageSectionProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageSection({ eyebrow, title, description }: PageSectionProps) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
      <p className="text-sm uppercase tracking-[0.32em] text-stone-300">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-6 text-base leading-8 text-stone-300">{description}</p>
    </div>
  );
}
