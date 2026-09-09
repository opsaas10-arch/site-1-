"use client";

import { Star, Calendar, ChevronRight } from "lucide-react";
import { testimonials } from "../shared/data";
import { PlaceholderTile } from "../shared/PlaceholderTile";

/**
 * Source uses keen-slider (horizontally draggable carousel, `loop: true`,
 * ~11 slides). Reproduced here as a native horizontal-scroll-snap row
 * (`overflow-x-auto snap-x`) — visually equivalent drag/scroll interaction
 * without pulling in the extra dependency, matching BEHAVIORS.md's note
 * that this is an acceptable close approximation.
 */
export function Testimonials() {
  return (
    <section className="container py-12">
      <div className="text-center mb-8">
        <p className="text-3xl md:text-4xl font-bold leading-tight mb-1">
          Depoimentos de clientes
        </p>
        <p className="text-muted-foreground">
          Experiências reais de quem já confiou na nossa loja
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-3 px-3 custom-scrollbar">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[380px] group h-full mx-2 flex flex-col gap-4 rounded-cc border border-border bg-background backdrop-blur-sm p-6 transition-colors duration-300"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-sm uppercase">
                    {t.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-foreground font-semibold text-sm leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {t.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`size-4 ${
                      s < t.rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground/30 fill-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.text}
            </p>

            <div className="border-t border-border pt-4">
              <div className="-mx-3 flex items-center gap-3 px-3 py-2">
                <div className="size-7 rounded-md bg-background border border-border overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <PlaceholderTile emoji="🎁" seed={t.product} />
                </div>
                <span className="flex-1 min-w-0 truncate text-xs font-medium text-foreground/90">
                  {t.product}
                </span>
                {t.hasLink && (
                  <span className="flex items-center gap-0.5 text-xs font-medium text-primary shrink-0">
                    Ver <ChevronRight className="size-3" />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
