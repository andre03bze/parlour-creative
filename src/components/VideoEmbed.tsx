"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseStudy } from "@/content/case-studies";
import { useT } from "@/i18n/client";

/**
 * Click-to-play film. A local poster is shown; the third-party player (YouTube no-cookie / Vimeo with DNT)
 * only loads after the visitor presses play, so no tracking scripts or heavy iframes hit the page load.
 */
export function VideoEmbed({ video }: { video: NonNullable<CaseStudy["video"]> }) {
  const t = useT();
  const [playing, setPlaying] = useState(false);
  const src =
    video.provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${video.id}${video.id.includes("?") ? "&" : "?"}autoplay=1&dnt=1`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-coal">
      {playing ? (
        <iframe
          src={src}
          title={video.title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${t("Play film")}: ${video.title}`}
          className="group absolute inset-0 block w-full"
        >
          <Image
            src={video.poster.src}
            alt={video.poster.alt}
            fill
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-black/20 transition-colors duration-500 ease-link group-hover:bg-black/10" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 text-white transition-[background-color,color,transform] duration-500 ease-link group-hover:scale-105 group-hover:bg-white group-hover:text-ink"
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor">
              <path d="M2 1.5v21l18-10.5z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white">
            {t("Play film")} · {video.title}
          </span>
        </button>
      )}
    </div>
  );
}
