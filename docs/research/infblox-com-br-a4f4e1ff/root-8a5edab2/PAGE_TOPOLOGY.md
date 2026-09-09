# Page Topology — infblox.com.br (/)

Source: https://infblox.com.br/
Tech stack observed: server-rendered HTML + Tailwind CSS v3.4.17 (compiled, class names visible verbatim in markup) + keen-slider (testimonials carousel) + toastify-js (cart toasts) + lucide icons (inline SVG, `data-lucide` attr) + CentralCart widget (checkout, out of scope — mocked).
Theme tokens (HSL/RGB triples consumed as `rgb(var(--x))` / `hsl(var(--x))`):
- `--background: 9 9 11` → #09090B
- `--foreground: 250 250 250` → #FAFAFA
- `--primary: 29 100% 50%` → hsl(29 100% 50%) = #FF7B00 (orange)
- `--secondary: 0 0% 100%` → white
- `--muted: 255 255 255 / 0.03`
- `--muted-foreground: 171 171 171` → #ABABAB
- `--muted-solid: 16 16 18`
- `--border: 255 255 255 / 0.05`
- `--card: 9 9 11`
- `--radius: 0.6rem`
Font: Geist (Google Font) for all text.

## Sections, top to bottom

1. **Header/Nav** — `<header class="sticky top-3 z-30">`, floating rounded pill bar (`rounded-[22px] border border-white/10 bg-background/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,.35)]`), sticky at 12px from top, z-30. Desktop: logo centered, "Termos" (absolute left-44%) / "Privacidade" links, right side "Entrar" (btn-secondary) + cart icon button (btn-primary). Mobile: search-toggle icon button left, logo center, cart icon button right, collapsible search input below.
2. **Hero** — single full-width banner `<img>` (`rounded-2xl object-contain`), no overlaid text (copy is baked into the image). Section: `<section class="w-full px-3 sm:container">`.
3. **Floating search bar** — pill search input, `-mt-10 md:-mt-12` (overlaps hero bottom edge), `rounded-full bg-white/10 backdrop-blur-md border border-white/20`.
4. **Categorias populares** — `<section class="container pt-6">`, `<h2>` + 2-card grid (`grid-cols-2 sm:grid-cols-2 lg:grid-cols-3`), each card an `<a>` with background image (`aspect-[16/9]`, `object-contain`, brightness/scale hover), dark overlay on hover. Cards: "Blox Fruits" → /category/blox-fruits, "Promoções" → /category/promocoes.
5–13. **9 product-grid sections**, each: pill badge title (`<h3 class="bg-primary/20 border-2 border-primary ... rounded-cc">`) + responsive grid of ProductCard (`grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4`):
   - NOVA ATUALIZAÇÃO (8 items)
   - Blox Fruits (9 items)
   - PROMOÇÃO DO DIA (5 items)
   - Combos (4 items)
   - Frutas no Báu (5 items)
   - Raças V4 (3 items)
   - OS MAIS COMPRADOS (6 items)
   - Gamepass (9 items)
   - Frutas Permanentes (37 items)
   Sections lazy-mount their card grids (only render when scrolled near viewport — confirmed via DOM inspection before/after scroll).
14. **Depoimentos de clientes (testimonials)** — `<section class="container py-12">`, heading + subheading, horizontal keen-slider carousel of customer review cards (11 slides incl. loop clone), each: avatar-initials circle + name + relative date, 5-star rating (lucide star icons, filled orange), review text, divider, purchased-product mini row (thumbnail + name, optional "Ver >" link).
15. **Footer** — `<footer class="bg-background/80 backdrop-blur-md">`, two `py-6 border-t` bands: (a) logo + store name "Inf Blox", contact email, "Desenvolvido por InfBlox" credit; (b) copyright line + "Termos e condições" link.

## Product data
All 86 products extracted with name, discount %, compare-at price, price, and image filename — see `products.json` in this same folder.
