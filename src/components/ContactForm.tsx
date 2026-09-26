"use client";

import { useRef, useState, type FormEvent } from "react";
import { useT } from "@/i18n/client";
import { contact } from "@/lib/site";
import { rich } from "@/i18n/rich";

const fieldClass =
  "mt-1 w-full rounded-none border-0 border-b border-ink/40 bg-transparent py-3 text-lg text-ink placeholder:text-ink-soft/60 transition-colors focus:border-clay focus:shadow-[0_1px_0_0_var(--color-clay)] focus:outline-none aria-[invalid=true]:border-oxide";
const labelClass = "text-meta block";

/** idle → submitting → success | invalid (client validation) | unconfigured (503) | failed (server) | network | error */
type Status = "idle" | "submitting" | "success" | "unconfigured" | "failed" | "network" | "error";
type Field = "name" | "company" | "email" | "message";

// Set NEXT_PUBLIC_CONTACT_DELIVERY=ready once src/lib/deliver-enquiry.ts is wired to a real provider.
const deliveryReady = process.env.NEXT_PUBLIC_CONTACT_DELIVERY === "ready";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const fallback = (key: string) =>
    rich(t, key, {
      w: (c) => <a href={contact.whatsappHref} className="underline underline-offset-4">{c}</a>,
      e: () => <a href={`mailto:${contact.email}`} className="underline underline-offset-4">{contact.email}</a>,
    });

  function validate(data: Record<string, FormDataEntryValue>) {
    const next: Partial<Record<Field, string>> = {};
    (["name", "company", "email", "message"] as const).forEach((f) => {
      if (!String(data[f] ?? "").trim()) next[f] = t("This field is required.");
    });
    if (!next.email && !EMAIL_RE.test(String(data.email).trim())) next.email = t("Enter a valid email address.");
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      setStatus("idle");
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 503) return setStatus("unconfigured");
      if (res.status === 502) return setStatus("failed");
      if (!res.ok) return setStatus("error");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("network");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/40 p-8" role="status">
        <p className="text-h3">{t("Thanks, that’s in.")}</p>
        <p className="mt-2 text-ink-soft">{t("Laura reviews every enquiry and replies within one business day.")}</p>
      </div>
    );
  }

  const err = (f: Field) => errors[f];
  const a11y = (f: Field) => ({ "aria-invalid": err(f) ? true : undefined, "aria-describedby": err(f) ? `${f}-error` : undefined });
  const fieldError = (f: Field) =>
    err(f) && (
      <p id={`${f}-error`} className="mt-1 text-sm text-oxide">
        {err(f)}
      </p>
    );
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"} className="space-y-8">
      {!deliveryReady && (
        <p className="border border-ink/40 p-4 text-sm" role="note">
          <span className="text-meta mb-1 block">{t("Development notice")}</span>
          {fallback("Enquiry delivery isn’t connected yet, so this form can’t send anything. Please contact us directly on <w>WhatsApp</w> or at <e>email</e>.")}
        </p>
      )}
      {hasErrors && (
        <p role="alert" className="text-sm text-oxide">
          {t("Please check the highlighted fields.")}
        </p>
      )}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>{t("Name *")}</label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} {...a11y("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>{t("Company *")}</label>
          <input id="company" name="company" type="text" autoComplete="organization" required className={fieldClass} {...a11y("company")} />
          {fieldError("company")}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{t("Email *")}</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} {...a11y("email")} />
          {fieldError("email")}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>{t("Phone / WhatsApp")}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>{t("Project location")}</label>
          <input id="location" name="location" type="text" placeholder={t("e.g. Ambergris Caye")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="companyType" className={labelClass}>{t("Company type")}</label>
          <select id="companyType" name="companyType" className={fieldClass} defaultValue="">
            <option value="" disabled>{t("Select one")}</option>
            <option value="Developer">{t("Developer")}</option>
            <option value="Brokerage / agent">{t("Brokerage / agent")}</option>
            <option value="Hotel / resort">{t("Hotel / resort")}</option>
            <option value="Founder / personal brand">{t("Founder / personal brand")}</option>
            <option value="Other">{t("Other")}</option>
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>{t("Project type")}</label>
          <select id="projectType" name="projectType" className={fieldClass} defaultValue="">
            <option value="" disabled>{t("Select one")}</option>
            <option value="Growth Diagnostic">{t("Growth Diagnostic")}</option>
            <option value="Ongoing retainer">{t("Ongoing retainer")}</option>
            <option value="New launch / development">{t("New launch / development")}</option>
            <option value="Founder Story">{t("Founder Story")}</option>
            <option value="Not sure yet">{t("Not sure yet")}</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>{t("Monthly budget")}</label>
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>{t("Select one")}</option>
            <option value="Under $5,000/month">{t("Under $5,000/month")}</option>
            <option value="$5,000–$10,000/month">{t("$5,000–$10,000/month")}</option>
            <option value="$10,000–$15,000/month">{t("$10,000–$15,000/month")}</option>
            <option value="$15,000+/month">{t("$15,000+/month")}</option>
            <option value="Project-based">{t("Project-based")}</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>{t("Timeline")}</label>
          <select id="timeline" name="timeline" className={fieldClass} defaultValue="">
            <option value="" disabled>{t("Select one")}</option>
            <option value="Immediately">{t("Immediately")}</option>
            <option value="Within 3 months">{t("Within 3 months")}</option>
            <option value="3–6 months">{t("3–6 months")}</option>
            <option value="Just exploring">{t("Just exploring")}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{t("What do you need? *")}</label>
        <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-none`} {...a11y("message")} />
        {fieldError("message")}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center border border-ink bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-500 hover:border-coal-soft hover:bg-coal-soft disabled:opacity-60"
      >
        {status === "submitting" ? t("Sending…") : t("Send")}
      </button>

      <div aria-live="assertive">
        {status === "unconfigured" && (
          <p role="alert" className="border border-oxide p-4 text-sm text-oxide">
            {rich(t, "Your enquiry was <s>not</s> sent: this form isn’t connected to email yet. Nothing has been received. Please message us on <w>WhatsApp</w> or email <e>email</e>.", {
              s: (c) => <strong>{c}</strong>,
              w: () => <a href={contact.whatsappHref} className="underline">WhatsApp {contact.whatsapp}</a>,
              e: () => <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>,
            })}
          </p>
        )}
        {status === "failed" && (
          <p role="alert" className="border border-oxide p-4 text-sm text-oxide">
            {fallback("Your enquiry could not be delivered. Please try again shortly, or contact us directly on <w>WhatsApp</w> or at <e>email</e>.")}
          </p>
        )}
        {status === "network" && (
          <p role="alert" className="border border-oxide p-4 text-sm text-oxide">
            {fallback("We couldn’t reach the server. Check your connection and try again, or contact us directly on <w>WhatsApp</w> or at <e>email</e>.")}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-oxide">
            {rich(t, "Something went wrong. Please email <e>email</e> directly.", {
              e: () => <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>,
            })}
          </p>
        )}
      </div>
    </form>
  );
}
