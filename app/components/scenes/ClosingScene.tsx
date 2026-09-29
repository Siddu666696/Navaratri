"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { site } from "@/data/site";
import { easings } from "@/lib/motion";
import { useSceneProgress } from "../motion/useSceneProgress";
import { StoneTexture } from "../architecture/StoneTexture";
import { TempleSilhouette } from "../architecture/TempleSilhouette";
import { ParticleCanvas } from "../atmosphere/ParticleCanvas";
import { TextReveal } from "../motion/TextReveal";
// import { StoneTexture } from "@/components/architecture/StoneTexture";
// import { TempleSilhouette } from "@/components/architecture/TempleSilhouette";
// import { ParticleCanvas } from "@/components/atmosphere/ParticleCanvas";
// import { TextReveal } from "@/components/motion/TextReveal";
// import { useSceneProgress } from "@/components/motion/useSceneProgress";

/**
 * Scene 8: the closing. Gratitude, the Samithi's name, and a quiet
 * return to the stone palette. Particles thin out and the scene fades
 * toward darkness; the last thing to remain is a single gold line.
 */
export function ClosingScene() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { progress } = useSceneProgress(ref, ["start end", "end end"]);
  const dustOpacity = useTransform(progress, [0.4, 0.95], [1, 0]);
  const darkness = useTransform(progress, [0.55, 1], [0, 0.85]);
  const { phone, whatsapp, email } = site.contact;
  const hasContact = Boolean(phone || whatsapp || email);

  return (
    <section ref={ref} className="closing" aria-labelledby="closing-title">
      <StoneTexture />
      {/* <div className="closing__temple" aria-hidden="true">
        <TempleSilhouette className="closing__temple-art" />
      </div>
      <motion.div className="closing__dust" style={{ opacity: dustOpacity }} aria-hidden="true">
        <ParticleCanvas mode="ambientDust" intensity="quiet" className="fill-canvas" />
      </motion.div> */}

      <div className="closing__inner">
        <motion.p
          className="closing__salutation display"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2, ease: easings.gentle }}
        >
          {t(copy.closing.salutation)}
        </motion.p>

        <p className="closing__thanks">
          <TextReveal inView duration={1.6} className="mask--block">
            {t(copy.closing.thanks)}
          </TextReveal>
        </p>

        <h2 id="closing-title" className="closing__name display">
          {t(site.samithi)}
        </h2>
        <p className="closing__peetha">{t(site.peetha)}</p>

        {hasContact && (
          <div className="closing__contact">
            <p className="closing__contact-title">{t(copy.closing.contactTitle)}</p>
            {phone && <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>}
            {whatsapp && (
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            )}
            {email && <a href={`mailto:${email}`}>{email}</a>}
          </div>
        )}

        <div className="closing__socials" aria-label="Social media links">
          <a href={site.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={site.socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>

        <motion.span
          className="closing__line"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 2.4, delay: 0.6, ease: easings.reveal }}
        />
        <p className="closing__footer">{t(copy.closing.footer)}</p>
      </div>

      <motion.div className="closing__dark" style={{ opacity: darkness }} aria-hidden="true" />
    </section>
  );
}
