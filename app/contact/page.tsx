import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Contact"
          title="Begin your project conversation with our design and trade team."
          description="Reach out for a consultation, sample support or bespoke product requests. We deliver premium service tailored to interiors, architecture and luxury procurement." 
        />
      </section>
      <section className="section-wrapper grid gap-10 lg:grid-cols-[0.9fr_1.1fr] py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
          <h2 className="text-3xl font-semibold text-white">Contact details</h2>
          <p className="mt-6 text-base leading-8 text-stone-300">hello@maisonatelier.design</p>
          <p className="mt-3 text-base leading-8 text-stone-300">+61 2 8000 1234</p>
          <p className="mt-3 text-base leading-8 text-stone-300">Sydney, Australia</p>
        </div>
        <form className="rounded-[32px] border border-white/10 bg-[#111111]/90 p-10 shadow-card">
          <div className="grid gap-6">
            <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
              Name
              <input type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
              Email
              <input type="email" placeholder="hello@domain.com" className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
              Project details
              <textarea rows={6} placeholder="Tell us about your project" className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:brightness-110">
              Send enquiry
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
}
