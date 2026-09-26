"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-triggered entrance using IntersectionObserver — no animation
 * library. Content is present and readable without JS/animation; this only
 * adds motion on top. `media` uses the curtain-wipe image reveal (the observed
 * wrapper is unclipped — IntersectionObserver treats a clipped target as
 * zero-area); the child must be a single element (it receives the settling zoom).
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  media = false,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  media?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (delayMs) el.style.transitionDelay = `${delayMs}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        }
      },
      { threshold: media ? 0.08 : 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs, media]);

  return (
    <div ref={ref} className={`${media ? "reveal-wrap" : "reveal"} ${className}`}>
      {media ? <div className="reveal-media">{children}</div> : children}
    </div>
  );
}
