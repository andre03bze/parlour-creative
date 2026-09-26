"use client";

import { useEffect, useRef, type ElementType } from "react";

export type SplitPart = string | { text: string; mark?: boolean; accent?: boolean };

/**
 * Word-by-word mask reveal (Gladstone's "typing" headline): each word sits in an overflow-hidden mask and
 * rises from 120% → 0 (1s, ease) as the block enters view, staggered per word. The full text is kept for
 * assistive tech; the animated copy is aria-hidden. `mark` words get the grey marker highlight.
 */
export function SplitReveal({
  parts,
  as: Tag = "span",
  className = "",
  delayMs = 0,
  staggerMs = 55,
}: {
  parts: SplitPart[];
  as?: ElementType;
  className?: string;
  delayMs?: number;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let n = 0;
  const words = parts.flatMap((part) => {
    const p = typeof part === "string" ? { text: part } : part;
    return p.text
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => ({ w, mark: "mark" in p ? p.mark : false, accent: "accent" in p ? p.accent : false }));
  });
  const full = words.map((x) => x.w).join(" ");

  return (
    <Tag ref={ref} className={`split ${className}`}>
      <span className="sr-only">{full}</span>
      <span aria-hidden="true">
        {words.map((x, i) => {
          const idx = n++;
          return (
            <span key={i} className={`split-word${x.mark ? " split-mark" : ""}`}>
              <span
                className={`split-inner${x.accent ? " accent" : ""}`}
                style={{ transitionDelay: `${delayMs + idx * staggerMs}ms` }}
              >
                {x.w}
              </span>
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
