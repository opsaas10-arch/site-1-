# Behaviors — infblox.com.br (/)

## Scroll sweep
- **Header**: `position: sticky; top: 12px; z-index: 30`. Does not visually restyle on scroll (no shrink/shadow-change threshold observed) — it's already a floating blurred pill at rest.
- **Section reveal animation**: elements carry `.reveal-fade-up` (opacity:0, translateY(30px)) which flips to `.reveal-fade-up.visible` (opacity:1, translateY(0)) via an IntersectionObserver-driven class toggle as each section badge/card scrolls into view. Transition: `opacity .3s ease, transform .3s ease` with a `--delay` custom property for stagger. Respects `prefers-reduced-motion` (disabled to instant when set).
- **Lazy section mounting**: product grids for sections below the fold are not present in the DOM/rendered with placeholder-only state until the section scrolls near the viewport (confirmed: re-querying immediately after page load returned 0 cards for below-fold sections; only after scrolling through the full page did all 86 `.product-card-refined` nodes exist). Implementation approach for the clone: render all data eagerly (SSR/CSR at build time) — visual parity from the reveal-fade-up animation is sufficient; true virtualization is not required for fidelity since final rendered state is identical.
- No scroll-snap, no parallax, no sticky sub-nav.

## Click sweep
- **Category cards** (Blox Fruits / Promoções): navigate to `/category/...` — out of scope (mock as `#` or a static page).
- **Product card**: whole card is an `<a>` wrapping the package (click navigates to product/checkout flow — mock as `#`).
- **"Comprar" (buy) button**: `<span class="product-card-buy">` inside the card anchor — same click target as the card (adds to cart / opens CentralCart checkout widget). Mock: no-op or toast.
- **Cart icon button** (header): `onclick="openCart()"` — opens a slide-in cart drawer (`#cart-drawer[data-state=open]`, `animation: fade-in .4s` on the backdrop + `slide-in .4s` on the panel, sliding from the right; reverse `fade-out`/`slide-out` on close). Out of scope to implement checkout; clone can mock an empty drawer with the same open/close animation for visual fidelity.
- **Mobile search toggle**: `onclick="toggleMobileSearch()"` reveals the mobile search input (`hidden` class toggled).

## Hover sweep
- **Product card** (`.product-card-refined:hover`): `border-color` → `hsl(var(--primary)/.7)`; `box-shadow` → `0 12px 30px rgba(0,0,0,.3), 0 0 0 1px hsl(var(--primary)/.12)`; whole card `transform: scale(1.02)` (Tailwind `hover:scale-[102%]`, `transition-all`). The "Comprar" pill inside darkens slightly: `background: hsl(var(--primary)/.86)`.
- **Card active/press**: `.product-card-refined:active .product-card-cart/.product-card-buy { transform: scale(.97) }`.
- **Category card image**: `brightness-95` at rest → `group-hover:brightness-125` + `group-hover:scale-105` (300ms), plus a dark overlay `bg-black/0 → group-hover:bg-black/20`.
- **Nav links** ("Termos"/"Privacidade"): `text-muted-foreground hover:text-white`, simple color transition.

## Time-driven / auto behaviors
- **Testimonials carousel**: keen-slider, horizontally draggable; 11 slides mounted (10 real + 1 loop clone) — treat as a `loop: true` auto-scrolling or drag carousel. No visible autoplay-pause controls found in the DOM; implement as a manually-draggable keen-slider–equivalent (CSS scroll-snap horizontal row is an acceptable close approximation for the clone, or embed `keen-slider` via npm) showing ~3 cards at a time on desktop, 1 on mobile.

## Interaction model summary
- Product grids: **static** grid (no tabs/click-switching) — content differs only in that it's populated per-section from data, no client toggle.
- Testimonials: **scroll/drag-driven** horizontal carousel (keen-slider), not click-driven tabs.
- Header: **static** floating bar (no scroll-triggered restyle).
- Category cards / product cards: **hover + click** driven (color/scale/shadow transitions + navigation).
- Whole-page sections: **scroll-driven reveal** (IntersectionObserver fade-up), independent of the (out-of-scope) lazy-mount optimization.

## Responsive breakpoints (Tailwind defaults: sm=640px, md=768px, lg=1024px)
- **Header**: mobile layout (search icon + centered logo + cart icon, collapsible search row) below `md`; desktop nav (logo + Termos/Privacidade + Entrar/cart) at `md+`.
- **Categorias populares grid**: `grid-cols-2` → `sm:grid-cols-2` → `lg:grid-cols-3`.
- **Product grids**: `grid-cols-2` (mobile) → `md:grid-cols-3` (tablet) → `lg:grid-cols-5` (desktop).
- **Product card body**: `min-height` and font sizes step up at `sm:` (640px) — name 0.82rem→0.9rem, price 1.2rem→1.28rem, buy/cart button height 2.35rem→2.5rem.
- **Search bar**: mobile version lives inside a collapsible row (`md:hidden`); desktop pill version `hidden md:block`, `max-w-lg`, centered, overlapping hero via negative margin.
- Container max-width: 1400px (`.container`/`.!container` at `min-width:1400px`).
