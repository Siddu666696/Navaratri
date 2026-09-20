"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { site } from "@/data/site";
import { easings } from "@/lib/motion";
import { TextReveal } from "@/components/motion/TextReveal";

function TridentIcon() {
  return (
    <svg className="offer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v18" />
      <path d="M12 5 7 12l5 10 5-10-5-7z" />
      <path d="M7 12h10" />
    </svg>
  );
}

/**
 * Scene 7: participation. Deliberately calm: a flat, high-contrast
 * surface, no particles anywhere near financial information, and a
 * single clear action.
 */
export function DonationSection() {
  const { t } = useLang();
  const phone = site.contact.phone.trim();
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#visit";

  return (
    <section id="seva" className="seva" aria-labelledby="seva-title">
      <div className="seva__inner">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease: easings.gentle }} className="seva__intro">
          <p className="label">{t(copy.donation.label)}</p>
          <h2 id="seva-title" className="seva__title display">
            <TextReveal inView duration={1.5}>
              {t(copy.donation.title)}
            </TextReveal>
          </h2>
          <p className="seva__body">{t(copy.donation.body)}</p>
          <p className="seva__receipt">{t(copy.donation.receipt)}</p>
          <a className="btn" href={telHref}>
            {phone ? t(copy.donation.ctaCall) : t(copy.donation.ctaVisit)}
          </a>
          {phone && <p className="seva__phone">Donations & volunteering: {phone}</p>}
        </motion.div>

        <div className="seva__offers">
          <h3 className="seva__offers-title">{t(copy.donation.offeringsTitle)}</h3>
          <ul>
            {copy.donation.offerings.map((o) => (
              <li key={o.en} className="offer">
                <TridentIcon />
                <span>{t(o)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
