"use client";

import { useT } from "@/lib/i18n/LanguageProvider";

/** Renders a translated string. Usable as a leaf inside Server Component pages. */
export default function T({ k, vars }: { k: string; vars?: Record<string, string | number> }) {
  const t = useT();
  return <>{t(k, vars)}</>;
}
