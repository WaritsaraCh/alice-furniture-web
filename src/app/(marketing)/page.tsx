import Image from "next/image";
import { Hero } from "../../features/marketing/components/Hero";
import { CategorySection } from "../../features/category/components/CategorySection";
import { FeaturedProducts } from "../../features/product/components/FeaturedProducts";
import { TestimonialsSection } from "../../features/marketing/components/TestimonialsSection";
import { NewsletterSection } from "../../features/marketing/components/NewsletterSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
