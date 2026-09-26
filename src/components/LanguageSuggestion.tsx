"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/client";
import { LANG_STORAGE_KEY, localePath } from "@/i18n/config";

/**
 * First-visit language handling (English pages only).
 *  - A stored explicit choice wins: "es" sends returning visitors to the Spanish page; "en" never asks again.
 *  - Otherwise, only if the browser's primary language is Spanish, a small dismissible suggestion appears.
 *  Location is never used. Nothing here blocks the page.
 */
export function LanguageSuggestion() {
  const lang = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (lang !== "en") return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(LANG_STORAGE_KEY);
    } catch {}
    if (stored === "es") {
      router.replace(localePath("es", pathname) + window.location.search + window.location.hash);
      return;
    }
    if (stored) return;
    const primary = (navigator.languages?.[0] ?? navigator.language ?? "").toLowerCase();
    if (primary !== "es" && !primary.startsWith("es-")) return;
    const id = window.setTimeout(() => setShow(true), 900); // arrives after the page settles; never competes with the hero
    return () => window.clearTimeout(id);
  }, [lang, pathname, router]);

  if (!show) return null;

  const choose = (to: "es" | "en") => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, to);
    } catch {}
    setShow(false);
    if (to === "es") router.push(localePath("es", pathname) + window.location.search + window.location.hash);
  };

  return (
    <div
      role="region"
      lang="es"
      aria-label="Idioma"
      className="fixed right-4 top-[5.25rem] z-[65] w-[min(20rem,calc(100vw-2rem))] border border-ink/25 bg-paper p-4 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.12)] lg:right-8"
    >
      <p className="text-sm">¿Prefieres ver Parlour en español?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => choose("es")}
          className="border border-ink bg-ink px-3.5 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper"
        >
          Ver en español
        </button>
        <button
          type="button"
          onClick={() => choose("en")}
          className="border border-ink/40 px-3.5 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] hover:border-ink"
        >
          Mantener inglés
        </button>
      </div>
    </div>
  );
}
