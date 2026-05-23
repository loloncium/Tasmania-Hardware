import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Services"
          title="Interior consulting, product specification and project support for premium outcomes."
          description="Our services are designed to enhance the experience of every room, from kitchen joinery to bathroom architecture, tailored to the highest standard of luxury living."
        />
      </section>
      <section className="section-wrapper grid gap-12 lg:grid-cols-3 py-20">
        {[
          { title: 'Concept & Vision', detail: 'Narrative-driven interior direction, material storyboards and palette refinement.' },
          { title: 'Product Specification', detail: 'Comprehensive product selection, sample coordination and procurement support.' },
          { title: 'Project Support', detail: 'Technical guidance, installer collaboration and quality review through delivery.' }
        ].map((item) => (
          <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-300">{item.detail}</p>
          </div>
        ))}
      </section>
      <section className="section-wrapper py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#111111]/90 p-10 shadow-card">
            <h3 className="text-3xl font-semibold text-white">Trade and professional consultancy</h3>
            <p className="mt-6 text-base leading-8 text-stone-300">
              Connect with our design team for specification guidance, sample reviews and access to exclusive architectural finishes for commercial and bespoke residential work.
            </p>
          </div>
          <div className="grid gap-6">
            {['Project onset workshops', 'Material sampling and mock-up coordination', 'Site-ready installation support'].map((item) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-soft">
                <p className="text-lg text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
