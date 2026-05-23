import { notFound } from 'next/navigation';
import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { ProductGallery } from '../../../components/ProductGallery';
import { ProductTabs } from '../../../components/ProductTabs';
import { products } from '../../../lib/data';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = products.find((item) => item.id === params.slug);
  if (!product) return notFound();

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 2);

  return (
    <main className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <section className="section-wrapper py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-stone-300">{product.category}</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">{product.name}</h1>
            <p className="max-w-2xl text-base leading-8 text-stone-300">{product.details}</p>
            <div className="flex flex-wrap gap-4">
              <span className="rounded-full bg-gold/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-gold">{product.price}</span>
              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold">
                Request quote
              </button>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#111111]/90 p-8 shadow-soft">
            <ProductGallery product={product} />
          </div>
        </div>
      </section>
      <section className="section-wrapper py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
            <h2 className="text-3xl font-semibold text-white">Product details</h2>
            <p className="mt-6 text-base leading-8 text-stone-300">Designed for seamless integration with high-end cabinetry, feature walls and hospitality interiors, this product offers a premium visual expression with robust performance.</p>
            <button className="mt-8 inline-flex rounded-full border border-white/10 bg-gold/10 px-6 py-3 text-sm uppercase tracking-[0.24em] text-gold transition hover:bg-gold hover:text-[#111111] hover:border-gold">
              Add to wishlist
            </button>
          </div>
          <ProductTabs product={product} />
        </div>
      </section>
      <section className="section-wrapper py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-sm">
          <h2 className="text-3xl font-semibold text-white">Related luxury products</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {relatedProducts.map((related) => (
              <div key={related.id} className="rounded-[28px] border border-white/10 bg-[#111111]/90 p-6 transition hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white">{related.name}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{related.summary}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-gold">{related.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
