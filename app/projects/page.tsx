import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';

const projectCards = [
  { title: 'Residency Suite', description: 'A layered residence with sculptural joinery and tactile stone volumes.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Pool Pavilion', description: 'An architectural retreat with soft ceilings and luminous materials.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Showroom Interior', description: 'A gallery of premium materials with subtle lighting and curated vignettes.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80' }
];

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Projects"
          title="Architectural interiors and material-driven environments with contemporary refinement."
          description="Explore a body of work that balances quiet luxury with elevated product narratives, from residences to hospitality and bespoke showrooms."
        />
      </section>
      <section className="section-wrapper grid gap-8 lg:grid-cols-3 py-20">
        {projectCards.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/90 shadow-card transition hover:-translate-y-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{project.description}</p>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
