"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";
import { useT } from "@/lib/i18n/LanguageProvider";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a.6.6 0 0 0-.8-.7A9.5 9.5 0 1 0 21.2 15.3a.6.6 0 0 0-.7-.8Z" />
    </svg>
  );
}

export default function ThemeToggle({ tone = "default" }: { tone?: "default" | "on-dark" }) {
  const t = useT();
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // One-time hydration of client-only state (localStorage/matchMedia) that
    // cannot be read during SSR — this is the sanctioned exception, not a
    // derivable-from-props value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(stored === "dark" ? true : stored === "light" ? false : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? t("theme.toLight") : t("theme.toDark")}
      className={cx(
        "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
        tone === "on-dark"
          ? "border-ivory/70 text-ivory hover:border-ivory hover:text-beige"
          : "border-line text-charcoal-soft hover:border-wood hover:text-wood-dark"
      )}
    >
      {isDark === null ? null : isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
