import { Header } from "@/components/sites/infblox-com-br-a4f4e1ff/root-8a5edab2/Header";
import { Hero } from "@/components/sites/infblox-com-br-a4f4e1ff/root-8a5edab2/Hero";
import { CategoryCards } from "@/components/sites/infblox-com-br-a4f4e1ff/root-8a5edab2/CategoryCards";
import { ProductSection } from "@/components/sites/infblox-com-br-a4f4e1ff/root-8a5edab2/ProductSection";
import { Testimonials } from "@/components/sites/infblox-com-br-a4f4e1ff/root-8a5edab2/Testimonials";
import { Footer } from "@/components/sites/infblox-com-br-a4f4e1ff/root-8a5edab2/Footer";
import { ScrollReveal } from "@/components/sites/infblox-com-br-a4f4e1ff/shared/ScrollReveal";
import { productSections } from "@/components/sites/infblox-com-br-a4f4e1ff/shared/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollReveal />
      <Header />
      <main className="space-y-0">
        <div className="pt-6">
          <Hero />
        </div>
        <CategoryCards />
        {productSections.map((section) => (
          <ProductSection key={section.title} section={section} />
        ))}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
