"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionary, type Lang } from "./dictionary";

export const languageInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("lang");
    if (stored === "am") {
      document.documentElement.setAttribute("lang", "am");
    }
  } catch (e) {}
})();
`;

type Vars = Record<string, string | number>;

function resolve(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc == null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => (vars[key] !== undefined ? String(vars[key]) : `{${key}}`));
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string, vars?: Vars) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    // One-time hydration of client-only state (localStorage) that cannot be
    // read during SSR — this is the sanctioned exception, not a
    // derivable-from-props value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "am" || stored === "en") setLangState(stored);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem("lang", next);
    document.documentElement.setAttribute("lang", next);
  }

  const t = useMemo(() => {
    return (path: string, vars?: Vars) => {
      const value = resolve(dictionary[lang], path) ?? resolve(dictionary.en, path);
      if (typeof value !== "string") return path;
      return interpolate(value, vars);
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
