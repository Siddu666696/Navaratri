"use client";

import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import type { DaySchedule } from "@/data/schedule";
import { dayNumber, monthName, weekdayName } from "@/lib/format";

/** Date numeral, weekday and tithi for one day. */
export function EventMetadata({ day }: { day: DaySchedule }) {
  const { t } = useLang();
  return (
    <div className="day__meta">
      <div className="day__date" aria-hidden="true">
        <span className="day__num display">{dayNumber(day.date)}</span>
        <span className="day__month">{t(monthName(day.date))}</span>
      </div>
      <p className="day__facts">
        <span className="visually-hidden">
          {dayNumber(day.date)} {monthName(day.date).en},{" "}
        </span>
        <span>
          {t(copy.schedule.dayWord)} {day.day}
        </span>
        <span className="day__sep" aria-hidden="true" />
        <span>{t(weekdayName(day.date))}</span>
        <span className="day__sep" aria-hidden="true" />
        <span>{t(day.tithi)}</span>
      </p>
    </div>
  );
}
