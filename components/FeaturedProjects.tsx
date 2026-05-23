'use client';

const projects = [
  {
    title: 'Gallery Residence',
    description: 'A sculptural apartment with warm stone, custom joinery and muted gold details.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Brass Studio',
    description: 'A refined showroom concept with monolithic counters and a tonal material palette.',
    image: 'https://images.unsplash.com/photo-1465098695138-de0a65e2a87f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Spa Retreat',
    description: 'Tranquil bathrooms layered with tactile surfaces and soft architectural forms.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
  }
];

export function FeaturedProjects() {
  return (
    <div className="grid gap-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Featured projects</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Signature interiors that speak to material richness and calm geometry.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/90 shadow-card transition hover:-translate-y-1 hover:border-gold/30">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{project.description}</p>
              <button className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-gold transition hover:text-white">
                View project
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
