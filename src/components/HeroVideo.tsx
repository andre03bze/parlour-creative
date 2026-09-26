"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted looping hero film. The poster is the <Image> the caller renders underneath (one optimised, priority
 * request). The video file is only requested after the page has loaded and gone idle, so it never competes with
 * fonts/JS/poster for bandwidth (LCP), then fades in once actually playing. Reduced-motion and data-saver users
 * never download it: the poster alone carries the page.
 */
export function HeroVideo({ src, className = "" }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduce || conn?.saveData) {
      video.style.display = "none";
      return;
    }
    let timer = 0;
    const start = () => {
      timer = window.setTimeout(() => {
        video.src = src;
        video.play().catch(() => {});
      }, 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", start);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      style={{ opacity: playing ? 1 : 0, transition: "opacity 900ms ease" }}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    />
  );
}
