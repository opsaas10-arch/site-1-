import { ShoppingCart } from "lucide-react";
import type { Product } from "../shared/types";
import { PlaceholderTile } from "../shared/PlaceholderTile";

/**
 * Mirrors infblox.com.br's `.product-card-refined` component exactly
 * (structure + class names copied from the live DOM; CSS copied verbatim
 * into globals.css from their /styles/product-card.css). The whole card is
 * a link in the source (navigates to checkout); here it's a non-interactive
 * `<div>` with a mocked "Comprar" action since checkout is out of scope.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="product-card-refined h-full flex flex-col package group rounded-[0.7rem] overflow-hidden
      ring-offset-4 ring-offset-background border-2 shadow border-white/10 bg-white/[1%] backdrop-blur-sm hover:border-primary transition-all
       hover:scale-[102%] cursor-pointer"
    >
      <div className="overflow-hidden relative border-b-2 border-white/10 aspect-video">
        <PlaceholderTile emoji={product.emoji} seed={product.name} />
      </div>
      <div className="product-card-body p-2 sm:p-3 flex flex-col h-full flex-1">
        <p className="product-card-name text-sm sm:text-base font-semibold line-clamp-2 leading-snug">
          {product.name}
        </p>
        <div className="product-card-pricing mt-auto">
          <div className="product-card-offer-line">
            {product.discount && (
              <span className="product-card-discount">{product.discount}</span>
            )}
            {product.compareAt && (
              <span className="product-card-compare-at">{product.compareAt}</span>
            )}
          </div>
          <span className="product-card-price">{product.price}</span>
        </div>
        <div className="product-card-actions mt-auto">
          <span className="product-card-cart" aria-label="Adicionar ao carrinho">
            <ShoppingCart />
          </span>
          <span className="product-card-buy">Comprar</span>
        </div>
      </div>
    </div>
  );
}
