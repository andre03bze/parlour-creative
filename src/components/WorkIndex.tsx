"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { CaseStudy } from "@/content/case-studies";

/**
 * Typographic project index (Gladstone "Our Work"). Desktop pointer: the hovered project's image follows the
 * cursor (eased, sitting *behind* the titles), its disciplines list beside it, and every other row drops to
 * 20% opacity. Touch / small screens: the same rows, each carrying its image inline — the interaction degrades
 * to content rather than disappearing.
 */
export function WorkIndex({ projects }: { projects: CaseStudy[] }) {
  const [active, setActive] = useState<string | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const fine = useRef(false);
  const ease = useRef(0.2);

  useEffect(() => {
    fine.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // reduced motion: the image snaps to the pointer instead of trailing it
    ease.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.2;
  }, []);

  const kick = useRef<() => void>(() => {});

  useEffect(() => {
    const loop = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * ease.current;
      c.y += (t.y - c.y) * ease.current;
      if (follower.current) follower.current.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
      raf.current = Math.abs(t.x - c.x) + Math.abs(t.y - c.y) > 0.2 ? requestAnimationFrame(loop) : 0;
    };
    kick.current = () => {
      if (!raf.current) raf.current = requestAnimationFrame(loop);
    };
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const move = (e: React.PointerEvent) => {
    if (!fine.current || !box.current) return;
    const r = box.current.getBoundingClientRect();
    target.current = { x: e.clientX - r.left - 22, y: e.clientY - r.top - 15 };
    kick.current();
  };

  return (
    <div ref={box} className="work-index relative isolate" onPointerMove={move} onPointerLeave={() => setActive(null)}>
      {/* follower — behind the text (z-0), desktop pointer only */}
      <div
        ref={follower}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 hidden w-[clamp(18rem,32vw,32rem)] lg:block"
        style={{ opacity: active ? 1 : 0, transition: "opacity 300ms ease", willChange: "transform, opacity" }}
      >
        {projects.map((p) => (
          <div key={p.slug} className={`absolute left-0 top-0 w-full transition-[opacity,transform] duration-500 ease-editorial motion-reduce:transition-none ${active === p.slug ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
            <div className="relative aspect-[16/10] overflow-hidden bg-coal">
              <span className={`absolute inset-0 block transition-transform duration-[1200ms] ease-editorial motion-reduce:transition-none ${active === p.slug ? "scale-100" : "scale-[1.08]"}`}><ProjectVisual project={p} sizes="32vw" /></span>
            </div>
            <ul className="absolute left-full top-1/2 ml-4 hidden w-44 -translate-y-1/2 text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.12em] xl:block">
              {p.disciplines.slice(0, 6).map((d, di) => (
                <li
                  key={d}
                  className={`transition-[opacity,transform] duration-500 ease-editorial motion-reduce:transition-none ${active === p.slug ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                  style={{ transitionDelay: active === p.slug ? `${120 + di * 45}ms` : "0ms" }}
                >
                  / {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="relative z-10 border-t-2 border-ink">
        {projects.map((p) => (
          <li key={p.slug} className="border-b-2 border-ink">
            <Link
              href={`/work/${p.slug}`}
              data-cursor="view"
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(p.slug)}
              onFocus={() => setActive(p.slug)}
              onBlur={() => setActive(null)}
              className={`block py-4 transition-[opacity,color] duration-500 ease-link hover:text-accent-text lg:py-5 ${active && active !== p.slug ? "lg:opacity-20" : "opacity-100"}`}
            >
              <span className="flex items-end justify-between gap-6">
                <span className={`text-index transition-transform duration-500 ease-editorial motion-reduce:transition-none ${active === p.slug ? "lg:translate-x-3" : ""}`}>{p.client}</span>
                <span className="hidden shrink-0 pb-3 text-right text-[0.6875rem] font-medium uppercase leading-snug tracking-[0.12em] sm:block sm:max-w-[16rem]">
                  {p.sector}
                  <span className="mt-1 block text-ink-soft">{p.place ?? p.since ?? ""}</span>
                </span>
              </span>
              {/* mobile / touch equivalent of the hover image */}
              <span className="mt-4 block lg:hidden">
                <span className="relative block aspect-[16/10] overflow-hidden bg-coal">
                  <ProjectVisual project={p} sizes="100vw" />
                </span>
                <span className="mt-3 block text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
                  {p.disciplines.slice(0, 5).join(" / ")}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
