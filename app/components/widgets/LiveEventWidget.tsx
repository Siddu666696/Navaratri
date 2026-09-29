"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { schedule } from "@/data/schedule";

import { getCurrentAndNextEvents } from "@/lib/eventTime";

export function LiveEventWidget() {
  const { lang, t } = useLang();
  const [data, setData] = useState<ReturnType<typeof getCurrentAndNextEvents> | null>(null);

  useEffect(() => {
    const fetchEvents = () => setData(getCurrentAndNextEvents(new Date("2026-10-15T12:45:00+05:30")));
    fetchEvents();
    const timer = setInterval(fetchEvents, 60000);
    return () => clearInterval(timer);
  }, []);

  // Hide the widget completely if no event is currently active
  if (!data || !data.currentEvent) return null;

  const title = lang === "te" ? data.currentEvent.item.titleTe : data.currentEvent.item.titleEn;

  return (
    <a href="#programme" className="live-widget">
      <span className="live-widget__pulse">
        <span className="live-widget__dot"></span>
      </span>
      <div className="live-widget__content">
        <span className="live-widget__label">{lang === "te" ? "ప్రస్తుతం జరుగుతోంది" : "HAPPENING NOW"}</span>
        <span className="live-widget__title">{title}</span>
      </div>
    </a>
  );
}
