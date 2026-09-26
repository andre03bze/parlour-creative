import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Parlour Creative.",
};

export default function ContactPage() {
  return (
    <Section className="pt-16 lg:pt-20">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h1 className="text-display">Start a project.</h1>
          <p className="prose-column mt-6 text-ink-soft">
            Prefer to talk?
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <a href={contact.whatsappHref} className="block font-medium text-forest hover:underline">
              WhatsApp {contact.whatsapp}
            </a>
            <a href={`mailto:${contact.email}`} className="block font-medium text-forest hover:underline">
              {contact.email}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
