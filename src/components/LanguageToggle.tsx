"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cx } from "@/lib/utils";

export default function LanguageToggle({ tone = "default" }: { tone?: "default" | "on-dark" }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "am" : "en")}
      aria-label={t("language.toggleLabel")}
      className={cx(
        "flex h-9 items-center justify-center rounded-full border px-3 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors",
        tone === "on-dark"
          ? "border-ivory/70 text-ivory hover:border-ivory hover:text-beige"
          : "border-line text-charcoal-soft hover:border-wood hover:text-wood-dark"
      )}
    >
      {lang === "en" ? "AM" : "EN"}
    </button>
  );
}
