"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { easings, sceneParallax } from "@/lib/motion";
import { StoneTexture } from "@/components/architecture/StoneTexture";
import { TempleFrame } from "@/components/architecture/TempleFrame";
import { TextReveal } from "@/components/motion/TextReveal";
import { useSceneProgress } from "@/components/motion/useSceneProgress";
import { PhotoFrame } from "@/components/schedule/PhotoFrame";

/**
 * Scene 2: the temple revelation.
 * The scene pins while scroll pushes the camera slowly toward the stone.
 * Enter: the photograph opens through a mask. Focus: slow push-in, light
 * gradually reveals detail. Exit: the frame dims toward the next scene.
 */
export function TempleRevealScene() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { progress, reduce } = useSceneProgress(ref, ["start start", "end end"]);

  const scale = useTransform(progress, [0, 1], [sceneParallax.imageScaleStart, sceneParallax.imageScaleFocus + 0.03]);
  const imageY = useTransform(progress, [0, 1], [sceneParallax.imageY, -sceneParallax.imageY]);
  const frameY = useTransform(progress, [0, 1], [0, sceneParallax.foregroundY]);
  const darkness = useTransform(progress, [0, 0.5, 0.85, 1], [0.55, 0.16, 0.16, 0.62]);
  const textOpacity = useTransform(progress, [0.08, 0.28], [0, 1]);
  const factsOpacity = useTransform(progress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={ref} className="reveal" aria-labelledby="reveal-title">
      <div className="reveal__pin">
        <StoneTexture />
        <div className="reveal__grid">
          <motion.div
            className="reveal__stage"
            style={reduce ? undefined : { y: frameY }}
            initial={{ clipPath: "inset(14% 10% 14% 10%)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: easings.reveal }}
          >
            <TempleFrame variant="major">
              <PhotoFrame src="/images/temple.jpeg" alt={t(copy.reveal.title)} sizes="(min-width: 1000px) 55vw, 92vw" mediaStyle={reduce ? undefined : { scale, y: imageY }} />
              <motion.div className="reveal__dim" style={{ opacity: darkness }} aria-hidden="true" />
            </TempleFrame>
          </motion.div>

          <div className="reveal__text">
            <motion.p className="reveal__place label" style={{ opacity: textOpacity }}>
              {t(copy.reveal.place)}
            </motion.p>
            <h2 id="reveal-title" className="reveal__title display">
              <TextReveal inView duration={1.6}>
                {t(copy.reveal.title)}
              </TextReveal>
            </h2>
            <motion.p className="reveal__line" style={{ opacity: textOpacity }}>
              {t(copy.reveal.line)}
            </motion.p>
            <motion.dl className="reveal__facts" style={{ opacity: factsOpacity }}>
              {copy.reveal.facts.map((f) => (
                <div key={f.text.en} className="reveal__fact">
                  <dt>{t(f.label)}</dt>
                  <dd>{t(f.text)}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
