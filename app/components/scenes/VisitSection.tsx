"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { site } from "@/data/site";
import { easings } from "@/lib/motion";
import { StoneTexture } from "../architecture/StoneTexture";
import { TextReveal } from "../motion/TextReveal";


/**
 * Practical information for the visit. The one animated moment is the
 * procession route: the line draws stop by stop, showing continuity.
 */
export function VisitSection() {
  const { t } = useLang();
  const routeRef = useRef<HTMLDivElement>(null);
  const routeIn = useInView(routeRef, { once: true, amount: 0.5 });

  return (
    <section id="visit" className="visit" aria-labelledby="visit-title">
      <StoneTexture vignette={false} />
      <div className="visit__inner">
        <header className="visit__head">
          <p className="label">{t(copy.visit.label)}</p>
          <h2 id="visit-title" className="visit__title display">
            <TextReveal inView duration={1.5}>
              {t(copy.visit.title)}
            </TextReveal>
          </h2>
        </header>



        <div className="visit__notes">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.2, ease: easings.gentle }}>
            <h3>{t(copy.visit.busTitle)}</h3>
            <p>{t(copy.visit.busText)}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.2, delay: 0.15, ease: easings.gentle }}>
            <h3>{t(copy.schedule.pujaHoursTitle)}</h3>
            {copy.schedule.pujaHours.map((h) => (
              <p key={h.en}>{t(h)}</p>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.2, delay: 0.3, ease: easings.gentle }}>
            <h3>{t(copy.visit.requestTitle)}</h3>
            <p>{t(copy.visit.requestText)}</p>
          </motion.div>
        </div>

        <a className="btn btn--ghost visit__map" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
          {t(copy.visit.mapCta)}
        </a>

        <div className="visit__info">
          <div className="visit__details">
            <h3>{t(copy.visit.addressTitle)}</h3>
            <p>{t(copy.visit.address)}</p>
          </div>
          <div className="visit__details">
            <h3>{t(copy.visit.emailTitle)}</h3>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>

        <div className="visit__embed-wrap">
          <iframe
            className="visit__embed"
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            title="Navadurga Peethakshetram map"
          />
        </div>
      </div>
    </section>
  );
}
