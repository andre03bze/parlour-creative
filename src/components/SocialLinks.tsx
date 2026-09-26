import type { ChannelId } from "@/lib/site";
import { socialChannels } from "@/lib/site";
import type { T } from "@/i18n/t";

const icons: Record<ChannelId, React.ReactNode> = {
  whatsapp: (
    <>
      <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6L3 21z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.2-1.5-2-1-1 .7a4 4 0 0 1-2-2l.7-1-1-2L9 8.5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </>
  ),
  facebook: <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5v4h3v7h4v-7h3l1-4h-4V7.5a.5.5 0 0 1 .5-.5H15z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" />
    </>
  ),
};

const labels: Record<ChannelId, string> = {
  whatsapp: "Contact Parlour on WhatsApp",
  instagram: "Parlour Creative on Instagram",
  facebook: "Parlour Creative on Facebook",
  linkedin: "Parlour Creative on LinkedIn",
};

/** Quiet monoline icons in currentColor (inherits the palette). 44px touch targets; external links open in a new tab. */
export function SocialLinks({ t, className = "" }: { t: T; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center ${className}`} aria-label={t("Parlour on social media and WhatsApp")}>
      {socialChannels.map(({ id, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(labels[id])} (${t("opens in a new tab")})`}
            className="group inline-flex h-11 w-11 items-center justify-center transition-[opacity,transform] duration-500 ease-editorial hover:-translate-y-0.5 hover:opacity-70"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              {icons[id]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
