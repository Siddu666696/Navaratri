"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { motion, useInView, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import type { DaySchedule } from "@/data/schedule";
import { easings, sceneParallax } from "@/lib/motion";
import { visualModeConfig } from "@/lib/scene";
import { TempleFrame } from "../architecture/TempleFrame";
import { ParticleCanvas } from "../atmosphere/ParticleCanvas";
import { TextReveal } from "../motion/TextReveal";
import { useSceneProgress } from "../motion/useSceneProgress";
import { EventMetadata } from "./EventMetadata";
import { PhotoFrame } from "./PhotoFrame";
import { ProgramList } from "./ProgramList";

interface Props {
  day: DaySchedule;
  index: number;
  active: boolean;
  onEnter: (index: number) => void;
}

/**
 * One day of the festival, composed as an editorial scene:
 * photograph on one side, a stable reading column on the other.
 * The active day comes into focus; the others recede. Only days with a
 * major ceremony get a particle effect, and only one per scene.
 */
export function DayScene({ day, index, active, onEnter }: Props) {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const centred = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const nearby = useInView(ref, { margin: "25% 0px 25% 0px" });
  const { progress, reduce } = useSceneProgress(ref);

  useEffect(() => {
    if (centred) onEnter(index);
  }, [centred, index, onEnter]);

  const focal = day.focalScale ?? sceneParallax.imageScaleFocus;
  const scale = useTransform(progress, [0, 1], [sceneParallax.imageScaleStart, focal]);
  const imageY = useTransform(progress, [0, 1], [-sceneParallax.imageY, sceneParallax.imageY]);

  const cfg = visualModeConfig[day.visualMode];
  const isHero = day.intensity === "hero";
  const title = t({ te: day.titleTe, en: day.titleEn });
  const morningImage = day.morningImageSrc || day.imageSrc;
  const eveningImage = day.eveningImageSrc || day.imageSrc;

  return (
    <section
      ref={ref}
      id={`day-${day.day}`}
      className={`day day--${day.intensity} ${active ? "day--active" : ""}`}
      style={{ "--glow": cfg.glow } as CSSProperties}
      aria-labelledby={`day-${day.day}-title`}
    >
      <div className="day__glow" aria-hidden="true" />

      <div className="day__marker" aria-hidden="true">
        <span className="day__dot" />
      </div>

      <motion.div className="day__body" animate={{ opacity: active ? 1 : 0.6 }} transition={{ duration: 0.65, ease: easings.smooth }}>
        <EventMetadata day={day} />

        {day.ceremony && (
          <p className="day__badge">
            <span className="day__badge-kind">{t(copy.schedule.ceremonyBadge)}</span>
            <span className="day__badge-name">{t(day.ceremony)}</span>
          </p>
        )}

        <h3 id={`day-${day.day}-title`} className="day__title display">
          <TextReveal inView duration={1.3}>
            {title}
          </TextReveal>
        </h3>

        <ProgramList day={day} morning={day.morning} evening={day.evening} morningImageSrc={morningImage} eveningImageSrc={eveningImage} />

        {/* {day.note && <p className="day__note">{t(day.note)}</p>} */}
      </motion.div>
    </section>
  );
}
