import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // 75 is the default; 85 is used for full-bleed hero photography so it stays crisp.
    qualities: [75, 85],
    // Optimised images are addressed by file name and version; cache them for 30 days at the edge and in browsers.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    // The former "Laura — Artform" page is gone: those projects are now regular Parlour case studies.
    return [{ source: "/work/laura-artform", destination: "/work", permanent: true }];
  },
  async headers() {
    const blockIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "1";
    const longCache = "public, max-age=2592000, stale-while-revalidate=86400";
    return [
      { source: "/work/:slug/:file(.*\\.(?:webp|mp4|jpg|jpeg|png|avif))", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/brand/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/api/:path*", headers: [{ key: "Cache-Control", value: "no-store" }] },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Frame protection only (no script/style restrictions, so nothing on the site can break).
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          ...(blockIndexing ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
