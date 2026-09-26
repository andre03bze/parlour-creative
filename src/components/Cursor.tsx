"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/client";

type State = "dot" | "link" | "view" | "next" | "prev" | "hide";

const LABELS = { en: "View", es: "Ver" } as const;

// ── Adaptive tone (the cursor's version of the adaptive Parlour logo) ─────────────────────────────────────────────
// A tiny luminance grid is cached per image (same-origin, drawn once to a 24×24 canvas); at the pointer we look through the
// element stack until we hit an image or an opaque background and average a few points across the mark. Hysteresis keeps
// it from flickering. Only a data attribute changes — no React state, and sampling is throttled.
const GRID = 24;
type Grid = { data: Uint8ClampedArray } | null;
const grids = new WeakMap<HTMLImageElement, Grid>();
const lumOf = (r: number, g: number, b: number) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

function gridFor(img: HTMLImageElement): Grid {
  if (grids.has(img)) return grids.get(img)!;
  let g: Grid = null;
  if (img.complete && img.naturalWidth > 0) {
    try {
      const c = document.createElement("canvas");
      c.width = c.height = GRID;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx?.drawImage(img, 0, 0, GRID, GRID);
      const d = ctx?.getImageData(0, 0, GRID, GRID).data;
      if (d) g = { data: d };
    } catch {
      g = null; // tainted or unavailable: fall back to the surrounding background
    }
    grids.set(img, g);
  }
  return g;
}

function imageLum(img: HTMLImageElement, x: number, y: number): number | null {
  const g = gridFor(img);
  if (!g) return null;
  const r = img.getBoundingClientRect();
  const nw = img.naturalWidth, nh = img.naturalHeight;
  const scale = Math.max(r.width / nw, r.height / nh); // object-fit: cover
  const u = (x - r.left + (nw * scale - r.width) / 2) / (nw * scale);
  const v = (y - r.top + (nh * scale - r.height) / 2) / (nh * scale);
  if (u < 0 || u > 1 || v < 0 || v > 1) return null;
  const i = (Math.min(GRID - 1, Math.floor(v * GRID)) * GRID + Math.min(GRID - 1, Math.floor(u * GRID))) * 4;
  return lumOf(g.data[i]!, g.data[i + 1]!, g.data[i + 2]!);
}

function surfaceLum(x: number, y: number): number | null {
  for (const node of document.elementsFromPoint(x, y)) {
    if (node.closest(".pc")) continue;
    if (node instanceof HTMLImageElement) {
      const l = imageLum(node, x, y);
      if (l !== null) return l;
      continue;
    }
    const m = getComputedStyle(node).backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const [r, g, b, a = "1"] = m[1]!.split(/[,\s/]+/).filter(Boolean);
      if (Number(a) >= 0.9) return lumOf(Number(r), Number(g), Number(b));
    }
  }
  return null;
}

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
    let tone: "light" | "dark" = "dark"; // dark mark on light surfaces (default: paper)
    let lastSample = 0;
    let sx = -1, sy = -1;

    const sampleTone = () => {
      const now = performance.now();
      if (now - lastSample < 90 || (Math.abs(pos.tx - sx) < 6 && Math.abs(pos.ty - sy) < 6)) return;
      lastSample = now;
      sx = pos.tx;
      sy = pos.ty;
      let sum = 0, n = 0;
      for (const dx of [-18, -9, 0, 9, 18]) {
        const l = surfaceLum(pos.tx + dx, pos.ty);
        if (l !== null) {
          sum += l;
          n++;
        }
      }
      if (!n) return;
      const lum = sum / n;
      // hysteresis: light mark on dark surfaces, dark mark on light ones, with a dead band between
      const next = tone === "dark" ? (lum < 0.4 ? "light" : "dark") : lum > 0.6 ? "dark" : "light";
      if (next !== tone) {
        tone = next;
        el.dataset.tone = tone;
      }
    };

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
      sampleTone();
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
        sx = -1;
        sampleTone();
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
    <div ref={root} className="pc" aria-hidden="true" data-state="dot" data-tone="dark" data-visible="0">
      <span className="pc-mark" />
      <span ref={label} className="pc-label" />
    </div>
  );
}
