import { es } from "./es";
import type { Lang } from "./config";

export type T = (s: string, vars?: Record<string, string | number>) => string;

export function format(s: string, vars?: Record<string, string | number>): string {
  return vars ? s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : s;
}

/** Translate an English source string. The English text is the key, so English remains the single source of truth. */
export function makeT(dict: Record<string, string> | null): T {
  return (s, vars) => {
    const hit = dict?.[s];
    if (dict && hit === undefined && typeof process !== "undefined" && process.env.I18N_WARN) console.warn(`[i18n missing] ${s}`);
    return format(hit ?? s, vars);
  };
}

/** Server-side translator. */
export function getT(lang: Lang): T {
  return makeT(lang === "es" ? es : null);
}
