"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site";

const fieldClass =
  "mt-1 w-full rounded-none border-0 border-b border-ink/40 bg-transparent py-3 text-lg text-ink placeholder:text-ink-soft/60 transition-colors focus:border-clay focus:outline-none";
const labelClass = "text-meta block";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

// Set NEXT_PUBLIC_CONTACT_DELIVERY=ready once src/lib/deliver-enquiry.ts is wired to a real provider.
const deliveryReady = process.env.NEXT_PUBLIC_CONTACT_DELIVERY === "ready";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 503) {
        setStatus("unconfigured");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/40 p-8">
        <p className="text-h3">Thanks, that&rsquo;s in.</p>
        <p className="mt-2 text-ink-soft">
          Laura reviews every enquiry and replies within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {!deliveryReady && (
        <p className="border border-ink/40 p-4 text-sm" role="note">
          <span className="text-meta mb-1 block">Development notice</span>
          Enquiry delivery isn&rsquo;t connected yet, so this form can&rsquo;t send anything. Please contact us directly on{" "}
          <a href={contact.whatsappHref} className="underline underline-offset-4">WhatsApp</a> or at{" "}
          <a href={`mailto:${contact.email}`} className="underline underline-offset-4">{contact.email}</a>.
        </p>
      )}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company *</label>
          <input id="company" name="company" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>Project location</label>
          <input id="location" name="location" type="text" placeholder="e.g. Ambergris Caye" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="companyType" className={labelClass}>Company type</label>
          <select id="companyType" name="companyType" className={fieldClass} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Developer</option>
            <option>Brokerage / agent</option>
            <option>Hotel / resort</option>
            <option>Founder / personal brand</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>Project type</label>
          <select id="projectType" name="projectType" className={fieldClass} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Growth Diagnostic</option>
            <option>Ongoing retainer</option>
            <option>New launch / development</option>
            <option>Founder Story</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>Monthly budget</label>
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Under $5,000/month</option>
            <option>$5,000–$10,000/month</option>
            <option>$10,000–$15,000/month</option>
            <option>$15,000+/month</option>
            <option>Project-based</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>Timeline</label>
          <select id="timeline" name="timeline" className={fieldClass} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Immediately</option>
            <option>Within 3 months</option>
            <option>3–6 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>What do you need? *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center border border-ink bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-500 hover:border-coal-soft hover:bg-coal-soft disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {status === "unconfigured" && (
        <p role="alert" className="border border-oxide p-4 text-sm text-oxide">
          Your enquiry was <strong>not</strong> sent: this form isn&rsquo;t connected to email yet. Nothing has been received.
          Please message us on{" "}
          <a href={contact.whatsappHref} className="underline">WhatsApp {contact.whatsapp}</a> or email{" "}
          <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-oxide">
          Something went wrong. Please email{" "}
          <a href="mailto:laura@parlourcreative.ca" className="underline">
            laura@parlourcreative.ca
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
