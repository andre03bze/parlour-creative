"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { contact, primaryNav, sectorNav } from "@/lib/site";

/**
 * Wordmark left, "Menu" right (Gladstone pattern). The menu is a black panel that slides in from the right
 * (page stays visible on the left; a circular arrow closes it). On the homepage the small wordmark stays
 * hidden while the giant hero wordmark is on screen (Gladstone: logo opacity 0 → 1 after the hero).
 * Header text is white over `[data-hero]` / `[data-dark]`, ink on stone.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atHero, setAtHero] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const y = 36;
      setOverDark(
        [...document.querySelectorAll("[data-hero],[data-dark]")].some((el) => {
          const r = el.getBoundingClientRect();
          return r.top <= y && r.bottom >= y;
        })
      );
      setScrolled(window.scrollY > 8);
      const hero = document.querySelector("[data-hero]");
      setAtHero(hero ? hero.getBoundingClientRect().bottom > 90 : false);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    const settle = window.setTimeout(check, 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Scroll lock (Lenis-aware), Escape, focus handling.
  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const toggle = toggleRef.current;
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const light = (overDark && !open) || open;
  const hideLogo = isHome && atHero && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-[color,background-color] duration-300 ease-out ${
          open ? "text-paper" : light ? "text-white" : scrolled ? "bg-paper/90 text-ink backdrop-blur-sm" : "text-ink"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Parlour Creative — home"
            aria-hidden={hideLogo || undefined}
            tabIndex={hideLogo ? -1 : undefined}
            className="block transition-opacity duration-300"
            style={{ opacity: hideLogo ? 0 : 1 }}
          >
            <Logo className="h-7 w-auto lg:h-9" title="Parlour Creative" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="group flex h-11 items-center gap-3 pl-4 text-[0.6875rem] font-medium uppercase tracking-[0.14em]"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-7">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-link ${open ? "top-1/2 rotate-45" : "top-0 group-hover:translate-x-1"}`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-link ${open ? "top-1/2 -rotate-45" : "bottom-0 group-hover:-translate-x-1"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        className="fixed inset-0 z-[60]"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {/* page stays visible on the left; click it (or the arrow) to close */}
        <button
          ref={closeRef}
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-y-0 left-0 hidden w-[38vw] items-center justify-center lg:flex"
          style={{ cursor: "pointer" }}
        >
        </button>

        <div
          className="absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-coal text-paper transition-transform duration-[800ms] ease-link lg:w-[62vw]"
          style={{ transform: open ? "none" : "translateX(101%)" }}
        >
          {/* circular arrow: closes the menu (Gladstone) */}
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute left-[5vw] top-1/2 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-paper/80 text-paper transition-colors duration-500 ease-link hover:bg-paper hover:text-ink lg:flex"
          >
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M0 7h26M20 1l6 6-6 6" />
            </svg>
          </button>
          <nav aria-label="Primary" className="mt-28 px-5 lg:mt-36 lg:pl-[12vw] lg:pr-10">
            <ul>
              {primaryNav.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 py-1.5 font-light transition-opacity duration-500 ease-link hover:opacity-60"
                    style={{
                      transform: open ? "none" : "translateY(110%)",
                      transition: `transform 900ms cubic-bezier(0.28,0,0.18,1) ${open ? 250 + i * 55 : 0}ms, opacity 500ms cubic-bezier(0.28,0,0.18,1)`,
                    }}
                  >
                    <span className="text-[clamp(2rem,1.2rem+2.2vw,3.5rem)] leading-[1.15] tracking-[-0.03em]">{item.label}</span>
                    {"badge" in item && (
                      <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-paper/75">{item.badge}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="mt-auto grid gap-8 px-5 py-10 text-sm text-paper/80 sm:grid-cols-2 lg:pl-[12vw] lg:pr-10"
            style={{ opacity: open ? 1 : 0, transition: `opacity 700ms ease ${open ? 700 : 0}ms` }}
          >
            <div>
              <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-paper/70">Belize · The Americas</p>
              <a href={`mailto:${contact.email}`} className="mt-3 block hover:underline">{contact.email}</a>
              <a href={contact.whatsappHref} className="block hover:underline">{contact.whatsapp} · WhatsApp</a>
            </div>
            <div>
              <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-paper/70">Sectors</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {sectorNav.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} onClick={() => setOpen(false)} className="hover:underline">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
