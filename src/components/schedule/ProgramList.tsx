"use client";

import { Fragment } from "react";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import type { ProgramItem } from "@/data/schedule";
import { PhotoFrame } from "@/components/schedule/PhotoFrame";

/** Stable reading column: period heading, then time and event rows. */
export function ProgramList({
  items,
  morningImageSrc,
  eveningImageSrc,
}: {
  items: ProgramItem[];
  morningImageSrc?: string;
  eveningImageSrc?: string;
}) {
  const { lang, t } = useLang();

  const renderSummary = (period: "morning" | "evening" | "day" | "afternoon") => {
    const firstItem = items.find((item) => item.period === period);
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

  return (
    <div className="program">
      {(morningImageSrc || eveningImageSrc) && (
        <div className="program__media-grid">
          {morningImageSrc && (
            <div className="program__media-card">
              <PhotoFrame src={morningImageSrc} alt="Morning programme" className="photo--blend" />
              {renderSummary("morning")}
            </div>
          )}
          {eveningImageSrc && (
            <div className="program__media-card">
              <PhotoFrame src={eveningImageSrc} alt="Evening programme" className="photo--blend" />
              {renderSummary("evening")}
            </div>
          )}
        </div>
      )}

      <ol className="program__list">
        {items.map((item, i) => {
          const startsGroup = i === 0 || items[i - 1].period !== item.period;
          return (
            <Fragment key={`${item.titleEn}-${i}`}>
              {startsGroup && (
                <li className="program__period" aria-hidden="false">
                  {t(copy.schedule.period[item.period])}
                </li>
              )}
              <li className={`program__item ${item.emphasis ? "program__item--major" : ""}`}>
                <span className="program__time">{item.time ? t(item.time) : ""}</span>
                <span className="program__what">
                  <span className="program__title">{lang === "te" ? item.titleTe : item.titleEn}</span>
                  {(item.noteTe || item.noteEn) && (
                    <span className="program__note">{lang === "te" ? item.noteTe : item.noteEn}</span>
                  )}
                </span>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}
