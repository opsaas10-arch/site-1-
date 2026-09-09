import { Search, ShoppingCart } from "lucide-react";
import { PlaceholderTile } from "../shared/PlaceholderTile";

/**
 * Floating sticky pill header — classes copied verbatim from the live DOM
 * (`sticky top-3 z-30`, rounded-[22px] blurred pill). Desktop-only nav shown
 * here (mobile hamburger/search-toggle variant omitted for brevity; the
 * responsive grid/layout classes below still collapse correctly on mobile).
 */
export function Header() {
  return (
    <header className="sticky top-3 z-30">
      <div className="w-full px-4 md:px-8">
        <div className="mx-auto max-w-[1550px] rounded-[22px] border border-white/10 bg-background/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] px-4 md:px-5">
          <nav className="flex items-center justify-between py-3 relative min-h-[48px]">
            <div className="flex items-center gap-4">
              <a href="/" className="block">
                <div className="size-10 sm:size-12 rounded-full overflow-hidden">
                  <PlaceholderTile emoji="🔥" seed="logo" />
                </div>
              </a>
            </div>

            <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-6">
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-white transition"
                >
                  Termos
                </a>
                <a
                  href="/politica-de-privacidade"
                  className="text-sm text-muted-foreground hover:text-white transition"
                >
                  Privacidade
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-sm">
              <button
                type="button"
                className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                aria-label="Abrir busca"
              >
                <Search className="w-5 h-5" />
              </button>
              <a href="/login" className="btn-secondary px-3 h-9">
                Entrar
              </a>
              <button
                type="button"
                className="open-cart btn-primary px-3 h-9"
                aria-label="Abrir carrinho"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Carrinho</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
