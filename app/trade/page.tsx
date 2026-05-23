import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';
import { TradeSignupForm } from '../../components/TradeSignupForm';

export default function TradePage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Trade Program"
          title="Design professionals receive priority access, sampling and specification support." 
          description="Our trade program is created for architects, interior designers and builders who need premium materials, product insights and project-first collaboration." 
        />
      </section>
      <section className="section-wrapper grid gap-8 lg:grid-cols-[1.05fr_0.95fr] py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
          <h2 className="text-3xl font-semibold text-white">Program benefits</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
            <li>Priority sample dispatch and material consultation</li>
            <li>Dedicated trade pricing and tailored product packages</li>
            <li>Collaborative project reviews and specification guidance</li>
          </ul>
          <p className="mt-8 text-sm leading-7 text-stone-300">Members also receive exclusive previews, specification guides, and lead support for large-scale interiors work.</p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#111111]/90 p-10 shadow-card">
          <h3 className="text-2xl font-semibold text-white">Apply for trade access</h3>
          <p className="mt-5 text-sm leading-7 text-stone-300">Submit your details and project brief to receive direct support from our trade team and access exclusive interiors resources.</p>
          <TradeSignupForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
