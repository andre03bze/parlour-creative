import { NextResponse, type NextRequest } from "next/server";

/**
 * English is the default language and stays unprefixed (/work); Spanish lives under /es (/es/work).
 * Internally every page is served from app/[lang], so unprefixed URLs are rewritten to /en/…
 * and a literal /en/… URL redirects to its canonical unprefixed form.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next();
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals and any file with an extension (public assets, sitemap.xml, robots.txt…).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
