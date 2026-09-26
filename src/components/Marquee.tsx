"use client";

import { useEffect, useRef } from "react";

/**
 * Endless uppercase ticker at a constant 100px/s (measured on Gladstone's marquee: linear, 100px/s).
 * The row is repeated 4× and the track translates by half its width; duration is derived from the measured
 * width so speed stays 100px/s at any viewport. Decorative (aria-hidden) with an sr-only copy.
 */
export function Marquee({ items, className = "", pxPerSecond = 100 }: { items: string[]; className?: string; pxPerSecond?: number }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const set = () => el.style.setProperty("--marquee-duration", `${el.scrollWidth / 2 / pxPerSecond}s`);
    set();
    document.fonts?.ready.then(set);
  }, [pxPerSecond, items]);

  const row = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item) => (
        <span key={item} className="flex items-center whitespace-nowrap px-6 text-[0.8125rem] font-medium uppercase tracking-[0.14em]">
          <span className="mr-6 inline-block h-1 w-1 bg-current" />
          {item}
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <p className="sr-only">{items.join(", ")}</p>
      <div ref={track} className="marquee-track">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
