import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-32 lg:pt-48">
      <div className="prose-column">
        <h1 className="text-display !text-[clamp(2.5rem,1.5rem+4vw,5rem)]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated {new Date().toISOString().slice(0, 10)}</p>

        <h2 className="text-h3 mt-10">What we collect</h2>
        <p className="mt-4 text-ink-soft">
          When you submit the contact or Growth Diagnostic form on this
          site, we collect the information you provide — name, company,
          email, phone/WhatsApp number, and any project details you share.
          We use it only to respond to your enquiry.
        </p>

        <h2 className="text-h3 mt-10">Analytics</h2>
        <p className="mt-4 text-ink-soft">
          This site may use standard web analytics (such as Google Analytics)
          to understand how visitors use it, and a conversion-tracking pixel
          (such as the Meta Pixel) to measure the performance of our own
          advertising. Neither is active until we&rsquo;ve configured it —
          see our open items in the project&rsquo;s content-gaps list.
        </p>

        <h2 className="text-h3 mt-10">How we use your information</h2>
        <p className="mt-4 text-ink-soft">
          We use the information you provide solely to respond to your
          enquiry, discuss a potential engagement, and, if we work together,
          to deliver that work. We do not sell your information.
        </p>

        <h2 className="text-h3 mt-10">Contact</h2>
        <p className="mt-4 text-ink-soft">
          Questions about this policy or your data: {" "}
          <a href={`mailto:${contact.email}`} className="text-ink hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
