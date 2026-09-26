"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          Parlour
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-forest hover:border-forest hover:text-paper"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 ease-standard lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-lg font-display"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex w-full items-center justify-center border border-ink py-3 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
