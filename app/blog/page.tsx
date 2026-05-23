import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { PageSection } from '../../components/PageSection';

const posts = [
  { title: 'Material direction for quiet luxury interiors', excerpt: 'How to layer stone, plaster and brass for a refined residential palette.', href: '#' },
  { title: 'Designing bespoke bathrooms with architectural intent', excerpt: 'A guide to sourcing fixtures, lighting and surfaces for serene spaces.', href: '#' },
  { title: 'Creating a modern luxury kitchen with tactile warmth', excerpt: 'Key product details and spatial moves for high-end kitchens.', href: '#' }
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <PageSection
          eyebrow="Journal"
          title="Editorial thinking for interiors, product curation and luxury design." 
          description="Read our latest reflections on modern materials, architectural spaces and design strategies for premium homes." 
        />
      </section>
      <section className="section-wrapper grid gap-8 lg:grid-cols-3 py-20">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[32px] border border-white/10 bg-[#111111]/90 p-10 shadow-card transition hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
            <p className="mt-5 text-sm leading-7 text-stone-300">{post.excerpt}</p>
            <a href={post.href} className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-gold transition hover:text-white">
              Read more
            </a>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
