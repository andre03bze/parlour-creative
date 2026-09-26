import type { Metadata } from "next";
import { PageHead } from "@/components/editorial";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageHead
      eyebrow="404"
      title={
        <>
          This page <span className="accent">doesn&rsquo;t exist.</span>
        </>
      }
      lead="The page you're looking for may have moved. Try the work, or get in touch."
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/work">View the work</Button>
        <Button href="/contact" variant="secondary">Contact</Button>
      </div>
    </PageHead>
  );
}
