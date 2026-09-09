import { cn } from "@/lib/utils";

/**
 * Real product photography could not be transferred into this project in this
 * environment (see docs/research/.../ARTIFACT_MANIFEST.md for why). This tile
 * stands in for a product photo: a gradient in the site's own orange theme
 * plus the product's own emoji glyphs (most source titles already carry 1-3
 * emoji) so every card still reads as distinct rather than identical boxes.
 */
export function PlaceholderTile({
  emoji,
  seed,
  className,
}: {
  emoji?: string;
  seed: string;
  className?: string;
}) {
  const hue = hashHue(seed);
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full select-none",
        className
      )}
      style={{
        background: `radial-gradient(120% 140% at 30% 20%, hsl(${hue} 90% 55%) 0%, hsl(29 100% 50%) 45%, hsl(${(hue + 20) % 360} 80% 30%) 100%)`,
      }}
    >
      <span className="text-4xl sm:text-5xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
        {emoji || "🎁"}
      </span>
    </div>
  );
}

function hashHue(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) % 360;
  }
  return h;
}
