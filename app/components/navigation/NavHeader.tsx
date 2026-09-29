"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { site } from "@/data/site";
import { easings } from "@/lib/motion";
import { LanguageToggle } from "./LanguageToggle";

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="15" cy="4.5" r="2.2" />
      <circle cx="5" cy="10" r="2.2" />
      <circle cx="15" cy="15.5" r="2.2" />
      <path d="M7 9l6-3.4M7 11l6 3.4" />
    </svg>
  );
}

function TridentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v18" />
      <path d="M12 5 7 12l5 10 5-10-5-7z" />
      <path d="M7 12h10" />
    </svg>
  );
}

/**
 * Minimal, stable navigation. It waits until the opening composition
 * has settled (or the visitor scrolls) before appearing.
 */
export function NavHeader() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(reduce);
  const [solid, setSolid] = useState(false);
  const [note, setNote] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const timer = window.setTimeout(() => setVisible(true), 4600);
    const onScroll = () => {
      if (window.scrollY > 24) setVisible(true);
      setSolid(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: t(copy.meta.title), text: t(copy.meta.description), url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setNote(t(copy.nav.copied));
      window.setTimeout(() => setNote(""), 2200);
    } catch {
      /* the visitor cancelled the share sheet */
    }
  };

  return (
    <motion.header
      className={`nav ${solid ? "nav--solid" : ""}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
      transition={{ duration: 1.2, ease: easings.smooth }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      onFocusCapture={() => setVisible(true)}
    >
      <a className="skip-link" href="#programme">
        {t(copy.nav.skip)}
      </a>
      <a className="nav__brand" href="#top" aria-label={t(site.samithi)}>
        <TridentIcon />
        <span className="nav__brand-text">{t(site.samithi)}</span>
      </a>

      <nav className={`nav__links ${mobileMenuOpen ? 'nav__links--open' : ''}`} aria-label="Primary">
        <a href="#programme" onClick={() => setMobileMenuOpen(false)}>{t(copy.nav.programme)}</a>
        <a href="#visit" onClick={() => setMobileMenuOpen(false)}>{t(copy.nav.visit)}</a>
        <a href="#seva" onClick={() => setMobileMenuOpen(false)}>{t(copy.nav.seva)}</a>
      </nav>

      <div className="nav__actions">
        <LanguageToggle />
        <button type="button" className="nav__share hide-on-mobile" onClick={share} aria-label={t(copy.nav.share)}>
          <ShareIcon />
          <span className="nav__share-text">{note || t(copy.nav.share)}</span>
        </button>
        <a className="btn btn--small hide-on-mobile" href="#seva">
          {t(copy.nav.offerSeva)}
        </a>
        <button type="button" className="nav__hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
