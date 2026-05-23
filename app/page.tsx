import { Hero } from '../components/Hero';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { CollectionsGrid } from '../components/CollectionsGrid';
import { ProductsCarousel } from '../components/ProductsCarousel';
import { InspirationSpotlight } from '../components/InspirationSpotlight';
import { WhyChoose } from '../components/WhyChoose';
import { Testimonials } from '../components/Testimonials';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <section className="section-wrapper py-20">
        <FeaturedCategories />
      </section>
      <section className="section-wrapper py-20">
        <CollectionsGrid />
      </section>
      <section className="section-wrapper py-20">
        <ProductsCarousel />
      </section>
      <section className="section-wrapper py-20">
        <InspirationSpotlight />
      </section>
      <section className="section-wrapper py-20">
        <WhyChoose />
      </section>
      <section className="section-wrapper py-20">
        <Testimonials />
      </section>
      <section className="section-wrapper py-20">
        <FeaturedProjects />
      </section>
      <section className="section-wrapper py-20">
        <Newsletter />
      </section>
      <Footer />
    </main>
  );
}
