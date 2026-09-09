"use client";

import { useEffect } from "react";

/**
 * Recreates the source site's scroll-reveal behavior (BEHAVIORS.md): section
 * badges/headings carry `.reveal-fade-up` and flip to `.reveal-fade-up.visible`
 * via an IntersectionObserver as they enter the viewport.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
