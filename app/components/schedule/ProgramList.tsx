"use client";

import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import type { ProgramItem, DaySchedule } from "@/data/schedule";
import { PhotoFrame } from "../schedule/PhotoFrame";
import { CalendarPlus } from "lucide-react";

/** Stable reading column: period heading, then time and event rows. */
export function ProgramList({
  morning,
  evening,
  morningImageSrc,
  eveningImageSrc,
}: {
  day: DaySchedule;
  morning: ProgramItem[];
  evening: ProgramItem[];
  morningImageSrc?: string;
  eveningImageSrc?: string;
}) {
  const { lang, t } = useLang();

  const renderSummary = (period: "morning" | "evening") => {
    const firstItem = (period === "morning" ? morning : evening)[0];
    if (!firstItem) return null;

    return (
      <div className="program__summary">
        <span className="program__summary-label">{t(copy.schedule.period[period])}</span>
        <span className="program__summary-title">{lang === "te" ? firstItem.titleTe : firstItem.titleEn}</span>
        {(firstItem.noteTe || firstItem.noteEn) && (
          <span className="program__summary-note">{lang === "te" ? firstItem.noteTe : firstItem.noteEn}</span>
        )}
      </div>
    );
  };

  const renderItems = (items: ProgramItem[], period: "morning" | "evening") => (
    items.map((item, i) => {
      const eventId = `${item.noteEn}-${period}-${i}`;
      return (
        <li key={i} className={`program__item ${item.emphasis ? "program__item--major" : ""}`}>
          <span className="program__time">{item.time ? t(item.time) : ""}</span>
          <span className="program__what">
            <span className="program__title">
              {lang === "te" ? item.titleTe : item.titleEn}
              <a href={`/api/calendar?id=${eventId}`} title="Add to Calendar" className="program__calendar-link">
                <CalendarPlus size={14} />
              </a>
            </span>
            {(item.noteTe || item.noteEn) && (
              <span className="program__note">{lang === "te" ? item.noteTe : item.noteEn}</span>
            )}
          </span>
        </li>
      );
    })
  );

  return (
    <div className="program">
      <div className="program__columns">
        {morning.length > 0 && (
          <div className="program__group">
            {morningImageSrc && (
              <div className="program__media-card" style={{ marginBottom: "1.5rem" }}>
                <PhotoFrame src={morningImageSrc} alt="Morning programme" className="photo--blend" />
                {renderSummary("morning")}
              </div>
            )}
            <ol className="program__list">
              <li className="program__period" aria-hidden="false">
                {t(copy.schedule.period.morning)}
              </li>
              {renderItems(morning, "morning")}
            </ol>
          </div>
        )}

        {evening.length > 0 && (
          <div className="program__group">
            {eveningImageSrc && (
              <div className="program__media-card" style={{ marginBottom: "1.5rem" }}>
                <PhotoFrame src={eveningImageSrc} alt="Evening programme" className="photo--blend" />
                {renderSummary("evening")}
              </div>
            )}
            <ol className="program__list">
              <li className="program__period" aria-hidden="false">
                {t(copy.schedule.period.evening)}
              </li>
              {renderItems(evening, "evening")}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
