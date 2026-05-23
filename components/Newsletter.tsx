'use client';

export function Newsletter() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-[#111111]/90 px-8 py-12 shadow-soft sm:px-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Stay inspired</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Receive the latest interior stories, launches and curated material edits.</h2>
        </div>
        <form className="space-y-4">
          <label className="block text-sm uppercase tracking-[0.24em] text-stone-300" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              placeholder="hello@domain.com"
              className="w-full rounded-full border border-white/10 bg-[#111111] px-6 py-4 text-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
            <button type="submit" className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:brightness-110">
              Subscribe
            </button>
          </div>
          <p className="text-sm leading-7 text-stone-400">Join our trade and design community for exclusive previews, product launches and design advice.</p>
        </form>
      </div>
    </section>
  );
}
