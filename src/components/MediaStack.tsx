import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { MediaBlock } from "@/content/case-studies";

/** Gladstone-style long sequence of large media, lightly staggered for editorial rhythm. */
export function MediaStack({ blocks }: { blocks: MediaBlock[] }) {
  return (
    <div className="container-page space-y-6 lg:space-y-10">
      {blocks.map((block, i) => {
        if (block.kind === "full") {
          return (
            <figure key={i}>
              <Reveal media>
                <div
                  className="relative overflow-hidden bg-paper-dim"
                  style={{ aspectRatio: block.image.w && block.image.h ? `${block.image.w} / ${block.image.h}` : "16 / 9" }}
                >
                  <Image src={block.image.src} alt={block.image.alt} fill sizes="100vw" className="object-cover" />
                </div>
              </Reveal>
              {block.caption && <figcaption className="text-meta mt-3">{block.caption}</figcaption>}
            </figure>
          );
        }
        const n = block.images.length;
        const natural = block.aspect === "natural";
        const portrait = block.aspect !== "landscape";
        const cols = n === 1 ? "md:grid-cols-2" : n === 2 ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3";
        return (
          <div key={i} className={`grid items-start gap-6 lg:gap-10 ${natural ? (n === 1 ? "md:grid-cols-2" : n === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3") : cols}`}>
            {block.images.map((img, j) => (
              <Reveal
                key={img.src}
                media
                className={n === 1 ? "md:col-start-2" : natural ? (j === 1 ? "md:mt-16" : j === 2 ? "md:mt-8" : "") : j === 1 ? "md:mt-24" : j === 2 ? "md:mt-12" : ""}
              >
                <div
                  className={`relative overflow-hidden bg-paper-dim ${natural ? "" : portrait ? "aspect-[2/3]" : "aspect-[3/2]"}`}
                  style={natural && img.w && img.h ? { aspectRatio: `${img.w} / ${img.h}` } : undefined}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={n === 3 ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        );
      })}
    </div>
  );
}
