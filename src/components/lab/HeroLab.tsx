"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./HeroLab.module.css";

const s = styles as Record<string, string>;

const W = (slug: string, f = "01.webp") => `/work/${slug}/${f}`;
const fill = (src: string) => ({ backgroundImage: `url(${src})` });

/* The site header stays the real one; while the hero is pinned its ink is interpolated from --hdr-logo / --hdr-menu (0 = light, 1 = ink). */
const HEADER_CSS = `
html[data-hero-lab] header { background: transparent !important; backdrop-filter: none !important; }
html[data-hero-lab] header:not(:has([aria-expanded="true"])) a { color: color-mix(in srgb, var(--color-ink) calc(var(--hdr-logo, 0) * 100%), #fff); }
html[data-hero-lab] header:not(:has([aria-expanded="true"])) button { color: color-mix(in srgb, var(--color-ink) calc(var(--hdr-menu, 0) * 100%), #fff); }
`;

/** Lab: one scroll-driven number (--p, eased) drives an editorial photo composition. No libraries; CSS does the rest. */
export function HeroLab() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current, st = stage.current;
    if (!sec || !st || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let target = 0, cur = 0, raf = 0;
    const root = document.documentElement;
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const smooth = (v: number) => v * v * (3 - 2 * v);
    // Header ink follows the same eased progress as the photo window: each control turns dark as the paper
    // actually arrives beneath it (menu at the right edge first on desktop, logo once the top strip clears).
    const header = () => {
      const vw = window.innerWidth, vh = window.innerHeight, mobile = vw < 768;
      const topPct = mobile ? 0.24 : 0.152, rightPct = mobile ? 0.08 : 0.54;
      // The paper edge sweeps the logo (y 22–58px) as the photo window retreats; the menu clears sooner on
      // desktop because the window's right edge also pulls in. Same eased e1 as the clip-path.
      const e1 = smooth(clamp01((cur - 0.1) / 0.45));
      const yA = 22 / (topPct * vh), yB = 58 / (topPct * vh);
      const xA = (1 - (vw - 30) / vw) / rightPct, xB = (1 - (vw - 170) / vw) / rightPct;
      const band = (a: number, b: number) => clamp01((e1 - a) / Math.max(0.001, b - a));
      root.style.setProperty("--hdr-logo", band(yA, yB).toFixed(3));
      root.style.setProperty("--hdr-menu", band(Math.min(yA, xA), Math.min(yB, xB)).toFixed(3));
    };
    const measure = () => {
      const r = sec.getBoundingClientRect();
      // adaptive header only while the pinned hero is on screen; afterwards the normal header takes over
      root.toggleAttribute("data-hero-lab", r.bottom > 84);
      target = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cur += (target - cur) * 0.09;
      if (Math.abs(target - cur) < 0.0004) cur = target;
      st.style.setProperty("--p", cur.toFixed(4));
      header();
      raf = cur === target ? 0 : requestAnimationFrame(tick);
    };
    header();
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
      root.removeAttribute("data-hero-lab");
      root.style.removeProperty("--hdr-logo");
      root.style.removeProperty("--hdr-menu");
    };
  }, []);

  const line = (
    <>
      We turn <em>places</em>
      <br />
      into brands people
      <br />
      want to belong to.
    </>
  );

  const item = (cls: string | undefined, src: string, alt: string, cap: string, sizes: string) => (
    <figure className={`${s.item} ${cls}`}>
      <div className={s.frame}>
        <Image src={src} alt={alt} fill sizes={sizes} />
      </div>
      <figcaption className={s.cap}>{cap}</figcaption>
    </figure>
  );

  return (
    <>
    <style>{HEADER_CSS}</style>
    <section ref={section} aria-label="Parlour Creative" className={s.section}>
      <div ref={stage} className={s.stage}>
        <h1 className={s.hl}>{line}</h1>

        <div className={s.photo}>
          <div className={s.settle}>
            <div className={s.photoImg}>
              <Image src={W("blue-ocean-belize", "aerial-009-2880w.webp")} alt="Aerial view of the San Pedro coastline, Belize, with the reef and open sea beyond" fill priority unoptimized sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className={s.shade} aria-hidden="true" />
          <p className={`${s.hl} ${s.hlLight}`} aria-hidden="true">{line}</p>
        </div>

        {item(s.b, W("the-hub-at-30-bay", "02.webp"), "Open-plan sales and design studio with timber ceiling and steel frame", "The HUB at 30 Bay · Toronto", "25vw")}
        {item(s.c, W("forgestone-capital"), "Timber-lined atrium of a mixed-use tower", "Forgestone · Toronto", "18vw")}
        {item(s.d, W("kingwest-magazine"), "Editorial portrait for a magazine cover", "KingWest · Editorial", "30vw")}
        {item(s.e, W("80-82-birch"), "Contemporary townhouse facade", "80–82 Birch", "12vw")}

        <ul className={s.words} aria-hidden="true">
          {(
            [
              ["Places", W("muskoka-bay"), "--f1"],
              ["Brands", W("riocan-oakville-place"), "--f2"],
              ["People", W("kingwest-magazine"), "--f3"],
            ] as [string, string, string][]
          ).map(([w, src, f]) => (
            <li key={w}>
              <span className={s.word} style={{ ...fill(src), ["--f" as string]: `var(${f})` }}>{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
}
