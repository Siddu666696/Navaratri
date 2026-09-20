"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { site } from "@/data/site";
import { easings } from "@/lib/motion";
import { dayNumber } from "@/lib/format";
import { StoneTexture } from "@/components/architecture/StoneTexture";
import { TextReveal } from "@/components/motion/TextReveal";
import { useSceneProgress } from "@/components/motion/useSceneProgress";

/**
 * Scene 4: the festival introduction.
 * The date enters first, the message follows. As the scene is crossed the
 * lighting shifts from cool stone to warm gold.
 */
export function FestivalIntroScene() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { progress } = useSceneProgress(ref);
  const warm = useTransform(progress, [0.12, 0.55], [0, 1]);

  const rise = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.4 } } as const;

  return (
    <section ref={ref} className="intro" aria-labelledby="intro-date">
      <StoneTexture />
      <motion.div className="intro__warm" style={{ opacity: warm }} aria-hidden="true" />

      <div className="intro__inner">
        <div className="intro__date-block">
          <motion.p className="intro__year label" {...rise} transition={{ duration: 1.2, ease: easings.smooth }}>
            {t(copy.intro.label)}
          </motion.p>
          <h2 id="intro-date" className="intro__date display">
            <TextReveal inView duration={1.6}>
              {dayNumber(site.festivalStart)}
              <span className="intro__dash" aria-hidden="true" />
              {dayNumber(site.festivalEnd)}
            </TextReveal>
          </h2>
          <motion.p className="intro__month" {...rise} transition={{ duration: 1.2, delay: 0.3, ease: easings.smooth }}>
            {t(copy.intro.month)}
          </motion.p>
        </div>

        <div className="intro__body">
          <motion.p className="intro__message" {...rise} transition={{ duration: 1.4, delay: 0.5, ease: easings.smooth }}>
            {t(copy.intro.message)}
          </motion.p>

          <h3 className="intro__list-title">{t(copy.intro.observancesTitle)}</h3>
          <ul className="intro__list">
            {copy.intro.observances.map((o, i) => (
              <motion.li key={o.text.en} className="intro__row" {...rise} transition={{ duration: 1.1, delay: 0.7 + i * 0.12, ease: easings.smooth }}>
                <span className="intro__when">{t(o.when)}</span>
                <span className="intro__what">{t(o.text)}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
