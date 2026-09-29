"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { schedule } from "@/data/schedule";
import styles from "../../page.module.css";

import { getCurrentAndNextEvents } from "@/lib/eventTime";

export function UpcomingEventOverlay() {
  const { lang, t } = useLang();
  const [data, setData] = useState<ReturnType<typeof getCurrentAndNextEvents> | null>(null);

  useEffect(() => {
    const fetchEvents = () => setData(getCurrentAndNextEvents(new Date()));
    fetchEvents();
    const timer = setInterval(fetchEvents, 60000);
    return () => clearInterval(timer);
  }, []);

  if (!data || !data.nextEvent) return null;

  const title = lang === "te" ? data.nextEvent.item.titleTe : data.nextEvent.item.titleEn;

  // Formating date for UI
  const isToday = data.nextEvent.startTime.toDateString() === new Date().toDateString();
  const nextDateStr = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(data.nextEvent.startTime);

  const datePrefixEn = isToday ? "Today" : nextDateStr;
  const periodEn = data.nextEvent.period === "evening" ? "Evening" : "Morning";

  const datePrefixTe = isToday ? "ఈరోజు" : nextDateStr;
  const periodTe = data.nextEvent.period === "evening" ? "సాయంత్రం" : "ఉదయం";

  return (
    <div className={styles.overlayCard}>
      <div className={styles.overlayHeader}>
        <span className={styles.dot} />
        <span>{lang === "te" ? "తదుపరి కార్యక్రమం" : "UPCOMING NEXT"}</span>
      </div>
      <h2>{title}</h2>
      <p>{lang === "te" ? `${datePrefixTe} ${periodTe}` : `${datePrefixEn}, ${periodEn}`}</p>
    </div>
  );
}
