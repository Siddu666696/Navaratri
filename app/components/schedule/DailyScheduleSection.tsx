"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { schedule } from "@/data/schedule";
import { easings } from "@/lib/motion";
import { StoneTexture } from "../architecture/StoneTexture";
import { TextReveal } from "../motion/TextReveal";
import { DayNavigator } from "./DayNavigator";
import { DayScene } from "./DayScene";
import { CalendarPlus } from "lucide-react";

/**
 * Scene 5: the ten-day journey, as an editorial timeline rather than a
 * grid of identical cards. A thin gold line fills as the visitor travels.
 */
export function DailyScheduleSection() {
  const { lang, t } = useLang();
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 55%", "end 45%"] });
  const railFill = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.6 });
  const handleEnter = useCallback((i: number) => setActive(i), []);

  return (
    <section id="programme" className="schedule" aria-labelledby="schedule-title">
      <StoneTexture vignette={false} />

      <header className="schedule__head">
        <motion.p className="label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: easings.gentle }}>
          {t(copy.schedule.label)}
        </motion.p>
        <h2 id="schedule-title" className="schedule__title display">
          <TextReveal inView duration={1.5}>
            {t(copy.schedule.title)}
          </TextReveal>
        </h2>
        <p className="schedule__sub">{t(copy.schedule.sub)}</p>

        <div className="schedule__hours">
          <p className="schedule__hours-title">{t(copy.schedule.pujaHoursTitle)}</p>
          <ul>
            {copy.schedule.pujaHours.map((h) => (
              <li key={h.en}>{t(h)}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <a href="/api/calendar" className="btn btn--small" title="Add all to Calendar">
            <CalendarPlus size={16} style={{ marginRight: "8px" }} /> 
            {lang === "te" ? "క్యాలెండర్‌కు అన్నీ చేర్చండి" : "Add all to Calendar"}
          </a>
        </div>
      </header>

      <DayNavigator days={schedule} active={active} />

      <div className="schedule__list" ref={listRef}>
        <div className="schedule__rail" aria-hidden="true">
          <motion.span className="schedule__rail-fill" style={{ scaleY: railFill }} />
        </div>
        {schedule.map((day, i) => (
          <DayScene key={day.id} day={day} index={i} active={active === i} onEnter={handleEnter} />
        ))}
      </div>
    </section>
  );
}
