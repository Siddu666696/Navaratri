"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import type { DaySchedule } from "@/data/schedule";
import { dayNumber, monthShort } from "@/lib/format";

interface Props {
  days: DaySchedule[];
  active: number;
}

/** Sticky strip of ten days. Follows the scroll and jumps on click. */
export function DayNavigator({ days, active }: Props) {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const strip = useRef<HTMLDivElement>(null);

  // keep the active chip centred inside the strip (never scrolls the page)
  useEffect(() => {
    const el = strip.current;
    const chip = el?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    if (!el || !chip) return;
    el.scrollTo({ left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2, behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  const jump = (n: number) => {
    document.getElementById(`day-${n}`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };

  return (
    <nav className="days-nav" aria-label={t(copy.schedule.title)}>
      <div className="days-nav__strip" ref={strip}>
        {days.map((d, i) => (
          <button
            key={d.id}
            type="button"
            data-index={i}
            className="days-nav__chip"
            aria-current={i === active ? "true" : undefined}
            onClick={() => jump(d.day)}
          >
            {i === active && (
              <motion.span layoutId="day-underline" className="days-nav__mark" transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} />
            )}
            <span className="days-nav__num display">{dayNumber(d.date)}</span>
            <span className="days-nav__mon">{t(monthShort(d.date))}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
