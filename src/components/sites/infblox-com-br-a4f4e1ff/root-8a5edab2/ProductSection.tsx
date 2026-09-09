import type { ProductSection as ProductSectionType } from "../shared/types";
import { ProductCard } from "./ProductCard";

/**
 * Section pill badge (`<h3 class="bg-primary/20 border-2 border-primary ...">`)
 * + responsive product grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-5`),
 * copied verbatim from the live site's Tailwind classes.
 */
export function ProductSection({ section }: { section: ProductSectionType }) {
  return (
    <section className="container pt-6">
      <h3 className="bg-primary/20 border-2 border-primary w-fit py-2 px-4 rounded-cc text-sm sm:text-base font-semibold backdrop-blur-sm reveal-fade-up">
        {section.title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mt-4 sm:mt-8 package-list">
        {section.items.map((item, i) => (
          <ProductCard key={`${section.title}-${i}`} product={item} />
        ))}
      </div>
    </section>
  );
}
