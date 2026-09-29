import { schedule, type DaySchedule, type ProgramItem } from "../data/schedule";

export interface ParsedEvent {
  id: string;
  day: number;
  dateStr: string;
  period: "morning" | "evening";
  item: ProgramItem;
  startTime: Date;
  endTime: Date;
}

function parseTimeString(dateStr: string, timeStr?: string, period?: "morning" | "evening"): Date {
  let hours = period === "evening" ? 17 : 8; // Default: Evening 5:00 PM, Morning 8:00 AM
  let minutes = 0;

  if (timeStr) {
    const match = timeStr.match(/(\d+):(\d+)\s*(am|pm)/i);
    if (match) {
      hours = parseInt(match[1]);
      minutes = parseInt(match[2]);
      const ampm = match[3].toLowerCase();
      if (ampm === "pm" && hours < 12) hours += 12;
      if (ampm === "am" && hours === 12) hours = 0;
    }
  }

  return new Date(`${dateStr}T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00+05:30`);
}

export function getAllEvents(festivalSchedule: DaySchedule[]): ParsedEvent[] {
  const events: ParsedEvent[] = [];

  for (const day of festivalSchedule) {
    let lastTime = parseTimeString(day.date, undefined, "morning");

    for (let i = 0; i < day.morning.length; i++) {
      const item = day.morning[i];
      const startTime = item.time ? parseTimeString(day.date, item.time.en, "morning") : lastTime;
      const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // Assume 2-hour duration
      events.push({ id: `${day.id}-morning-${i}`, day: day.day, dateStr: day.date, period: "morning", item, startTime, endTime });
      lastTime = endTime; // Cascade time for items without explicit time
    }

    lastTime = parseTimeString(day.date, undefined, "evening");
    for (let i = 0; i < day.evening.length; i++) {
      const item = day.evening[i];
      const startTime = item.time ? parseTimeString(day.date, item.time.en, "evening") : lastTime;
      const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);
      events.push({ id: `${day.id}-evening-${i}`, day: day.day, dateStr: day.date, period: "evening", item, startTime, endTime });
      lastTime = endTime;
    }
  }

  // Ensure chronological order
  return events.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
}

export function getCurrentAndNextEvents(now: Date, customEvents?: ParsedEvent[]) {
  const events = customEvents ?? getAllEvents(schedule);
  const nowMs = now.getTime();

  // Find the event happening right now
  const currentEvent = events.find((e) => nowMs >= e.startTime.getTime() && nowMs < e.endTime.getTime());

  // Find the next upcoming event
  const nextEvent = events.find((e) => e.startTime.getTime() > nowMs);

  return { currentEvent, nextEvent };
}
