import Image from "next/image";
import { Hero } from "../components/Hero";
import { CategorySection } from "../components/CategorySection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { NewsletterSection } from "../components/NewsletterSection";

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
