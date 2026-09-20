"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import type { Lang } from "@/lib/types";

const options: { value: Lang; label: string; aria: string }[] = [
  { value: "te", label: "తెలుగు", aria: "తెలుగు" },
  { value: "en", label: "EN", aria: "English" },
];

export function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label={t(copy.nav.language)}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className="lang-toggle__btn"
          aria-pressed={lang === o.value}
          aria-label={o.aria}
          onClick={() => setLang(o.value)}
        >
          {lang === o.value && (
            <motion.span layoutId="lang-pill" className="lang-toggle__pill" transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} />
          )}
          <span className="lang-toggle__label">{o.label}</span>
        </button>
      ))}
    </div>
  );
}
