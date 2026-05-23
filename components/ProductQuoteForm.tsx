'use client';

import { useState, type FormEvent } from 'react';

interface ProductQuoteFormProps {
  productName: string;
}

export function ProductQuoteForm({ productName }: ProductQuoteFormProps) {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectSummary: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-gold/30 bg-gold/10 p-8 text-stone-100">
        <h4 className="text-2xl font-semibold text-white">Quote request sent</h4>
        <p className="mt-4 text-sm leading-7 text-stone-300">We have received your request for {productName}. Our team will be in touch with pricing and a tailored proposal within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
        Name
        <input
          value={values.name}
          onChange={(event) => handleChange('name', event.target.value)}
          className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          placeholder="Full name"
          required
        />
      </label>
      <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
        Company
        <input
          value={values.company}
          onChange={(event) => handleChange('company', event.target.value)}
          className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          placeholder="Studio or firm"
          required
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
          Email
          <input
            type="email"
            value={values.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            placeholder="hello@domain.com"
            required
          />
        </label>
        <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
          Phone
          <input
            value={values.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            placeholder="Phone number"
          />
        </label>
      </div>
      <label className="block text-sm uppercase tracking-[0.24em] text-stone-300">
        Project summary
        <textarea
          value={values.projectSummary}
          onChange={(event) => handleChange('projectSummary', event.target.value)}
          rows={4}
          className="mt-3 w-full rounded-[28px] border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          placeholder="Describe your project and quote needs"
          required
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:brightness-110"
      >
        Request quote
      </button>
    </form>
  );
}
