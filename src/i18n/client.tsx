"use client";

import NextLink from "next/link";
import { createContext, useContext, useMemo } from "react";
import type { ComponentProps } from "react";
import { localePath, type Lang } from "./config";
import { makeT, type T } from "./t";

interface Ctx {
  lang: Lang;
  dict: Record<string, string> | null;
}
const LangContext = createContext<Ctx>({ lang: "en", dict: null });

/** The Spanish dictionary is only sent to the client when Spanish is active, so English pages carry none of it. */
export function LangProvider({ lang, dict, children }: { lang: Lang; dict: Record<string, string> | null; children: React.ReactNode }) {
  const value = useMemo(() => ({ lang, dict }), [lang, dict]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = (): Lang => useContext(LangContext).lang;

export function useT(): T {
  const { dict } = useContext(LangContext);
  return useMemo(() => makeT(dict), [dict]);
}

/** next/link that keeps the active language in internal hrefs. */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const lang = useLang();
  return <NextLink href={typeof href === "string" ? localePath(lang, href) : href} {...props} />;
}
