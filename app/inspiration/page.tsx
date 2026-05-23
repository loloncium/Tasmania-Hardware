import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';

const visuals = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1465098695138-de0a65e2a87f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
];

export default function InspirationPage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Inspiration"
          title="A gallery of refined interiors, material harmony and architectural details."
          description="Immerse in a curated visual edit of spaces, finishes and product pairings shaped for luxury residential and lifestyle settings."
        />
      </section>
      <section className="section-wrapper grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-20">
        {visuals.map((src) => (
          <div key={src} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]/90 shadow-card">
            <img src={src} alt="Design inspiration" className="h-80 w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
