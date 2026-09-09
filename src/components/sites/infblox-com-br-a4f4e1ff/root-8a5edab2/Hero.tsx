import { Search } from "lucide-react";
import { searchPlaceholder } from "../shared/data";

/**
 * Source hero is a single full-bleed banner <img> (copy is baked into the
 * image itself, no overlaid HTML text) with a floating search pill
 * overlapping its bottom edge (`-mt-10 md:-mt-12`). Real banner artwork
 * unavailable in this environment (see ARTIFACT_MANIFEST.md) — recreated
 * here as a gradient banner carrying the same headline copy.
 */
export function Hero() {
  return (
    <>
      <section className="w-full px-3 sm:container">
        <div
          className="w-full rounded-2xl aspect-[21/9] sm:aspect-[3/1] flex items-center justify-between px-6 sm:px-12 overflow-hidden relative"
          style={{
            background:
              "radial-gradient(120% 160% at 15% 30%, #ffb347 0%, #ff7b00 35%, #7a2e00 100%)",
          }}
        >
          <div className="text-5xl sm:text-7xl">🎮</div>
          <div className="text-right">
            <p className="text-white font-black text-xl sm:text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              A MELHOR LOJA
              <br />
              DE BLOX
              <br />
              DO BRASIL
            </p>
            <span className="inline-block mt-2 sm:mt-4 bg-black/60 text-white text-xs sm:text-base font-bold px-3 py-1.5 sm:px-5 sm:py-2 rounded-full">
              ENTREGA AUTOMÁTICA
            </span>
          </div>
        </div>
      </section>

      <div className="flex justify-center -mt-6 sm:-mt-10 md:-mt-12 relative z-10 px-3">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full h-11 sm:h-12 ps-11 pe-4 rounded-full
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-white placeholder:text-white/60
              shadow-[0_8px_25px_rgba(0,0,0,0.35)]
              focus:border-white/40 focus:ring-2 focus:ring-white/20
              transition-all outline-none"
          />
        </div>
      </div>
    </>
  );
}
