"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Inertial smooth scrolling (Lenis — the same library Gladstone uses). Skipped for reduced-motion users;
 * touch devices keep native momentum scrolling (Lenis does not hijack touch by default).
 */
export function SmoothScroll() {
  const pathname = usePathname();

  // New route → start at the top, before paint, so the page (and any shared-element transition) begins in place.
  // Lenis keeps its own scroll state, so it must be reset together with the window.
  useLayoutEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, anchors: true });
    window.__lenis = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
  return null;
}
