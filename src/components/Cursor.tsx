"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/client";

type State = "dot" | "link" | "view" | "next" | "prev" | "hide";

const LABELS = { en: "View", es: "Ver" } as const;

/**
 * A small editorial cursor for fine-pointer devices only (hover: hover + pointer: fine; never touch).
 * One fixed element; position and state are written straight to the DOM (no React state on mousemove), lerped
 * in a rAF loop that sleeps once the mark settles. The native pointer stays for text fields and the scroll rail, focus
 * rings are untouched, and everything collapses to a plain dot without interpolation under prefers-reduced-motion.
 */
export function Cursor() {
  const lang = useLang();
  const [enabled, setEnabled] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!enabled || !el) return;
    const html = document.documentElement;
    html.classList.add("has-cursor");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pos = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let seen = false;
    let state: State = "dot";
    let hoverRaf = 0;

    const setState = (next: State) => {
      if (next === state) return;
      state = next;
      el.dataset.state = next;
      if (label.current) label.current.textContent = next === "view" ? LABELS[lang] : next === "next" ? "→" : next === "prev" ? "←" : "";
    };
    const resolve = (t: Element | null): State => {
      if (!t) return "dot";
      if (t.closest("input, textarea, select, [contenteditable='true']")) return "hide";
      if (t.closest(".scroll-rail")) return "hide";
      const c = t.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;
      if (c === "view" || c === "next" || c === "prev") return c;
      if (t.closest("a[href], button:not(:disabled), [role='button'], summary, label[for]")) return "link";
      return "dot";
    };

    const frame = () => {
      raf = 0;
      const k = reduce.matches ? 1 : 0.4;
      pos.x += (pos.tx - pos.x) * k;
      pos.y += (pos.ty - pos.y) * k;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      if (Math.abs(pos.tx - pos.x) + Math.abs(pos.ty - pos.y) > 0.2) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pos.tx = e.clientX;
      pos.ty = e.clientY;
      if (!seen) {
        seen = true;
        pos.x = pos.tx;
        pos.y = pos.ty;
        el.dataset.visible = "1";
      }
      kick();
    };
    const onOver = (e: PointerEvent) => e.pointerType === "mouse" && setState(resolve(e.target as Element));
    const onLeave = () => {
      el.dataset.visible = "0";
      seen = false;
      setState("dot");
    };
    const onDown = () => (el.dataset.down = "1");
    const onUp = () => delete el.dataset.down;
    // Lenis moves content under a still pointer without firing pointer events: re-resolve on scroll (one rAF, no state).
    const onScroll = () => {
      if (hoverRaf || !seen) return;
      hoverRaf = requestAnimationFrame(() => {
        hoverRaf = 0;
        setState(resolve(document.elementFromPoint(pos.tx, pos.ty)));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      html.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(hoverRaf);
    };
  }, [enabled, lang]);

  if (!enabled) return null;
  return (
    <div ref={root} className="pc" aria-hidden="true" data-state="dot" data-visible="0">
      <span className="pc-mark" />
      <span ref={label} className="pc-label" />
    </div>
  );
}
