"use client";

import { useEffect, useSyncExternalStore } from "react";

/**
 * TEMPORARY palette-exploration control (remove with the unused themes once a direction is chosen).
 * Switches `data-theme` on <html>: current | a | b | c. Also `?theme=a` in the URL and keys 0–3.
 */
const themes = [
  { id: "current", label: "Current · Default", short: "Now", swatch: ["#e4e2dc", "#171614", "#8a4a38"] },
  { id: "a", label: "A · Warm Editorial", short: "A", swatch: ["#f1eadf", "#5c1e1b", "#c9a66b"] },
  { id: "b", label: "B · Green & Plaster", short: "B", swatch: ["#f3ebe5", "#0e241a", "#edb9af"] },
  { id: "c", label: "C · Cenote & Añil", short: "C", swatch: ["#eae7df", "#101a3a", "#e9a63a"] },
] as const;

const EVENT = "parlour-theme";
const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};
const read = () => document.documentElement.dataset.theme ?? "current";

function apply(id: string) {
  const root = document.documentElement;
  if (id === "current") {
    delete root.dataset.theme;
    try {
      localStorage.removeItem("parlourTheme");
    } catch {}
  } else {
    root.dataset.theme = id;
    try {
      localStorage.setItem("parlourTheme", id);
    } catch {}
  }
  window.dispatchEvent(new Event(EVENT));
}

export function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, read, () => "current");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (e.metaKey || e.ctrlKey || e.altKey || el?.closest("input, textarea, select, [contenteditable]")) return;
      const i = ["0", "1", "2", "3"].indexOf(e.key);
      if (i > -1) apply(themes[i]!.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      role="group"
      aria-label="Palette exploration (temporary)"
      className="fixed bottom-4 left-1/2 z-[90] flex max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full bg-black/90 p-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-white shadow-lg backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {themes.map((t, i) => (
        <button
          key={t.id}
          type="button"
          aria-pressed={theme === t.id}
          title={`Key ${i}`}
          onClick={() => apply(t.id)}
          className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 transition-colors duration-300 ${
            theme === t.id ? "bg-white text-black" : "text-white/80 hover:text-white"
          }`}
        >
          <span aria-hidden="true" className="flex -space-x-1">
            {t.swatch.map((c) => (
              <span key={c} className="h-3 w-3 rounded-full ring-1 ring-black/30" style={{ background: c }} />
            ))}
          </span>
          <span className="hidden sm:inline">{t.label}</span>
          <span className="sm:hidden">{t.short}</span>
        </button>
      ))}
    </div>
  );
}
