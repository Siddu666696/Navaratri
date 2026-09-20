"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { easings, sceneParallax } from "@/lib/motion";
import { StoneTexture } from "@/components/architecture/StoneTexture";
import { TempleSilhouette } from "@/components/architecture/TempleSilhouette";
import { ParticleCanvas } from "@/components/atmosphere/ParticleCanvas";
import { TextReveal } from "@/components/motion/TextReveal";
import { useSceneProgress } from "@/components/motion/useSceneProgress";

/**
 * Scene 1: the opening void.
 * Sequence: near-black, lamp light rises, the temple is carved out of the
 * dark, the title emerges, a single gold highlight passes, then the
 * navigation and call to action arrive once the composition has settled.
 */
export function HeroScene() {
  const { lang, t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { progress, reduce } = useSceneProgress(ref, ["start start", "end start"]);

  const templeY = useTransform(progress, [0, 1], [0, sceneParallax.backgroundY * 2]);
  const templeScale = useTransform(progress, [0, 1], [1, 1.08]);
  const contentY = useTransform(progress, [0, 1], [0, sceneParallax.foregroundY * 4]);
  const contentOpacity = useTransform(progress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id="top" className="hero" aria-labelledby="hero-title">
      <StoneTexture />

      <motion.div className="hero__glow" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.2, delay: 0.4, ease: easings.gentle }} />

      <motion.div className="hero__temple" aria-hidden="true" style={reduce ? undefined : { y: templeY, scale: templeScale }}>
        <motion.div
          className="hero__temple-reveal"
          initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0.2 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          transition={{ duration: 3.4, delay: 1.0, ease: easings.reveal }}
        >
          <TempleSilhouette className="hero__temple-art" />
        </motion.div>
      </motion.div>

      <motion.div className="hero__dust" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 2.2 }}>
        <ParticleCanvas mode="ambientDust" intensity="quiet" className="fill-canvas" />
      </motion.div>

      <motion.div className="hero__content" style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="label hero__eyebrow"
          initial={lang === "en" ? { opacity: 0, letterSpacing: "0.5em" } : { opacity: 0 }}
          animate={lang === "en" ? { opacity: 1, letterSpacing: "0.26em" } : { opacity: 1 }}
          transition={{ duration: 2.2, delay: 2.6, ease: easings.smooth }}
        >
          {t(copy.hero.eyebrow)}
        </motion.p>

        <h1 id="hero-title" className="hero__title display">
          <TextReveal delay={2.0} duration={1.8}>
            <span className="gold-sweep">{t(copy.hero.line1)}</span>
          </TextReveal>
          <TextReveal delay={2.3} duration={1.8}>
            <span>{t(copy.hero.line2)}</span>
          </TextReveal>
        </h1>

        <motion.p className="hero__tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 3.6, ease: easings.gentle }}>
          {t(copy.hero.tagline)}
        </motion.p>

        <motion.div className="hero__date" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, delay: 3.9 }}>
          <motion.span className="hero__rule" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: 3.9, ease: easings.reveal }} />
          <span className="hero__date-text display">{t(copy.hero.dates)}</span>
          <motion.span className="hero__rule" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: 3.9, ease: easings.reveal }} />
        </motion.div>

        <motion.p className="hero__samvatsara" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, delay: 4.3 }}>
          {t(copy.hero.samvatsara)}
        </motion.p>

        <motion.a
          href="#programme"
          className="btn btn--ghost hero__cta"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 4.7, ease: easings.smooth }}
        >
          {t(copy.hero.cta)}
        </motion.a>
      </motion.div>

      <motion.div className="hero__cue" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 5.2 }}>
        <span className="hero__cue-line" />
      </motion.div>
    </section>
  );
}
