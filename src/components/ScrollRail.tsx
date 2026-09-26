"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop scroll rail: a hairline track with a slim thumb that mirrors the real document scroll (Lenis still drives it).
 * Decorative and aria-hidden; keyboard, wheel and assistive-technology scrolling are untouched. The native scrollbar is only
 * hidden where this rail is shown (fine pointer, ≥ 64rem — see globals.css), and the thumb is draggable so nothing is lost.
 * No React state on scroll: geometry goes straight to CSS variables (transform only), coalesced to one write per frame.
 */
export function ScrollRail() {
  const rail = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rail.current;
    const th = thumb.current;
    if (!el || !th) return;
    let raf = 0;
    let dragging = false;

    const metrics = () => {
      const doc = document.documentElement;
      const vh = window.innerHeight;
      const max = Math.max(0, doc.scrollHeight - vh);
      const size = Math.max(44, (vh / Math.max(doc.scrollHeight, 1)) * vh);
      return { vh, max, size, travel: vh - size };
    };

    const paint = () => {
      raf = 0;
      const { vh, max, size, travel } = metrics();
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.setProperty("--rail-h", `${size}px`);
      el.style.setProperty("--rail-y", `${p * travel}px`);
      el.style.setProperty("--rail-p", p.toFixed(3));
      el.dataset.scrollable = max > vh * 0.05 ? "1" : "0";
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    const scrollToRatio = (clientY: number, grab: number) => {
      const { max, size, travel } = metrics();
      const r = Math.min(1, Math.max(0, (clientY - grab - size / 2 + size / 2) / Math.max(travel, 1)));
      const y = r * max;
      if (window.__lenis) window.__lenis.scrollTo(y, { immediate: true, force: true });
      else window.scrollTo(0, y);
    };

    let grab = 0;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      el.dataset.dragging = "1";
      el.setPointerCapture(e.pointerId);
      const r = th.getBoundingClientRect();
      // Grab the thumb where it was pressed; a press on the bare track centres the thumb there (a page-jump).
      grab = e.clientY >= r.top && e.clientY <= r.bottom ? e.clientY - r.top : r.height / 2;
      scrollToRatio(e.clientY, grab);
    };
    const onMove = (e: PointerEvent) => dragging && scrollToRatio(e.clientY, grab);
    const onUp = (e: PointerEvent) => {
      dragging = false;
      delete el.dataset.dragging;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.documentElement);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rail} className="scroll-rail" aria-hidden="true" data-scrollable="0">
      <div ref={thumb} className="scroll-rail-thumb" />
    </div>
  );
}
