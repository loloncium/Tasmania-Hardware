'use client';

const reasons = [
  { title: 'Curated Luxury', text: 'Only materials and products with impeccable finish, quality and provenance.' },
  { title: 'Architecture-led', text: 'Design systems built for modern residences, hospitality and commercial interiors.' },
  { title: 'Seamless service', text: 'From concept to material sourcing, installation guidance and aftercare.' }
];

export function WhyChoose() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Why choose us</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">An elevated composition of service, curation and craftsmanship.</h2>
        <p className="mt-6 text-base leading-8 text-stone-300">
          We design and source interiors that feel restrained yet sumptuous, shaped by materials, light and enduring proportion.
        </p>
      </div>
      <div className="grid gap-6">
        {reasons.map((item) => (
          <article key={item.title} className="rounded-[28px] border border-white/10 bg-[#111111]/90 p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-300">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
