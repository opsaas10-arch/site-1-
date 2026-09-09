import { categories } from "../shared/data";
import { PlaceholderTile } from "../shared/PlaceholderTile";

/**
 * `<section class="container pt-6">` + `grid-cols-2 sm:grid-cols-2
 * lg:grid-cols-3` of aspect-[16/9] category cards — classes copied verbatim
 * from the live DOM.
 */
export function CategoryCards() {
  return (
    <section className="container pt-6">
      <h2 className="mb-4 font-bold text-2xl">Categorias populares</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {categories.map((cat) => (
          <a
            key={cat.href}
            href={cat.href}
            className="relative flex items-center aspect-[16/9] rounded-cc overflow-hidden
              transition-all cursor-pointer ring-offset-secondary hover:ring-2 ring-secondary group"
          >
            <div className="w-full h-full brightness-95 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300">
              <PlaceholderTile emoji="📦" seed={cat.name} />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <span className="absolute bottom-3 left-4 text-white font-black text-xl sm:text-2xl uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
