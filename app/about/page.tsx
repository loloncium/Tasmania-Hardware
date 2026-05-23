import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="About Maison Atelier"
          title="A modern interiors atelier shaping premium spaces with architectural calm."
          description="We bring together luxury finishes, refined product direction and considered service for high-end residential and commercial interiors. Every project is guided by texture, proportion and a timeless material palette."
        />
      </section>
      <section className="section-wrapper grid gap-10 lg:grid-cols-[0.9fr_1.1fr] py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Our approach</h2>
          <p className="mt-6 text-base leading-8 text-stone-300">
            Each collaboration starts with a quiet study of context and the way people move through space. We then curate finishes and details that deliver a minimalist luxury rooted in warmth and sensory depth.
          </p>
        </div>
        <div className="grid gap-6">
          {[
            'Material-led palettes for enduring interiors.',
            'Coordinated specification support for architects and designers.',
            'Bespoke service designed for discerning clients and large-scale builds.'
          ].map((line) => (
            <div key={line} className="rounded-[28px] border border-white/10 bg-[#111111]/90 p-8 shadow-card">
              <p className="text-lg text-white">{line}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-wrapper py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { title: 'Design Direction', description: 'Curated schemes for interiors, furniture and architectural details.' },
            { title: 'Trade Partnerships', description: 'Priority access for professionals to exclusive materials and lead support.' },
            { title: 'Project Delivery', description: 'Collaborative processes from concept to installation and aftercare.' }
          ].map((item) => (
            <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
