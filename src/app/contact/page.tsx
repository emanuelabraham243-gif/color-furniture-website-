import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import {
  FacebookGlyph,
  InstagramGlyph,
  MapPinIcon,
  PhoneIcon,
  TikTokGlyph,
  WhatsAppGlyph,
} from "@/components/icons";
import TikTokEmbed from "@/components/TikTokEmbed";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Color Furniture in Addis Ababa — call, WhatsApp, or visit our showroom.",
};

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (p: { width?: number; height?: number }) => React.JSX.Element;
}) {
  const pending = !href;
  return (
    <a
      href={pending ? undefined : href}
      target={pending ? undefined : "_blank"}
      rel={pending ? undefined : "noreferrer"}
      className={cx(
        "flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3.5 transition-colors",
        pending ? "cursor-default opacity-50" : "hover:border-orange"
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-charcoal-soft">
        <Icon width={16} height={16} />
      </span>
      <span className="text-[13.5px] font-medium text-ink">{pending ? `${label} — coming soon` : label}</span>
    </a>
  );
}

export default function ContactPage() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${site.address.plusCode} Addis Ababa Ethiopia`
  )}&output=embed`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-dark">Contact</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Get in Touch</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft">
          Call, message us on WhatsApp, or visit our showroom in Addis Ababa — we&apos;re happy to help.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <a
            href={whatsappLink("Hi, I'd like to get in touch with Color Furniture.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-green px-6 py-5 text-paper transition-colors hover:bg-green-dark"
          >
            <WhatsAppGlyph width={24} height={24} />
            <div>
              <p className="font-display text-[15px] font-semibold">Chat on WhatsApp</p>
              <p className="text-[13px] text-paper/80">Fastest way to reach us</p>
            </div>
          </a>

          <a
            href={site.phoneHref}
            className="flex items-center gap-4 rounded-2xl border border-line bg-paper px-6 py-5 transition-colors hover:border-orange"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-orange-dark">
              <PhoneIcon width={20} height={20} />
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-ink">{site.phoneDisplay}</p>
              <p className="text-[13px] text-charcoal-soft">Call us directly</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper px-6 py-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-orange-dark">
              <MapPinIcon width={20} height={20} />
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-ink">{site.address.line1}</p>
              <p className="text-[13px] text-charcoal-soft">{site.address.line2}</p>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <SocialLink href={site.social.facebook} label="Facebook" icon={FacebookGlyph} />
            <SocialLink href={site.social.instagram} label="Instagram" icon={InstagramGlyph} />
            <SocialLink href={site.social.tiktok} label="TikTok" icon={TikTokGlyph} />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Color Furniture location"
            src={mapEmbedSrc}
            className="h-full min-h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* TikTok videos */}
      <div className="mt-20">
        <div className="mb-8 flex items-center gap-2">
          <TikTokGlyph width={20} height={20} className="text-ink" />
          <h2 className="font-display text-2xl font-bold text-ink">Follow Us on TikTok</h2>
        </div>

        {site.tiktokVideos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.tiktokVideos.slice(0, 3).map((url) => (
              <TikTokEmbed key={url} url={url} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-[9/16] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line bg-paper text-center"
              >
                <TikTokGlyph width={28} height={28} className="text-charcoal-soft/40" />
                <p className="px-6 text-[12.5px] text-charcoal-soft/70">Video {n} — coming soon</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
