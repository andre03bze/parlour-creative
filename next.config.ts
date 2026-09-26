import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // 75 is the default; 85 is used for full-bleed hero photography so it stays crisp.
    qualities: [75, 85],
  },
  async redirects() {
    // The former "Laura — Artform" page is gone: those projects are now regular Parlour case studies.
    return [{ source: "/work/laura-artform", destination: "/work", permanent: true }];
  },
  async headers() {
    const blockIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "1";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          ...(blockIndexing ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
