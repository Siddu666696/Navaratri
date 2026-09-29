import { describe, it, expect } from "vitest";
import { getCurrentAndNextEvents, getAllEvents, type ParsedEvent } from "./eventTime";
import { schedule } from "../data/schedule";

// 1. Event Selection Logic using injected deterministic fixture
describe("getCurrentAndNextEvents - Event Selection Logic (Mocked Fixture)", () => {
  const mockFixture: ParsedEvent[] = [
    {
      id: "oct-11-event",
      day: 1,
      dateStr: "2026-10-11",
      period: "morning",
      item: { titleEn: "Event 1", titleTe: "" },
      startTime: new Date("2026-10-11T09:00:00+05:30"),
      endTime: new Date("2026-10-11T10:00:00+05:30"),
    },
    {
      id: "oct-11-event-2",
      day: 1,
      dateStr: "2026-10-11",
      period: "evening",
      item: { titleEn: "Event 2", titleTe: "" },
      startTime: new Date("2026-10-11T18:00:00+05:30"),
      endTime: new Date("2026-10-11T19:00:00+05:30"),
    },
    {
      id: "oct-12-event",
      day: 2,
      dateStr: "2026-10-12",
      period: "morning",
      item: { titleEn: "Event 3", titleTe: "" },
      startTime: new Date("2026-10-12T08:00:00+05:30"),
      endTime: new Date("2026-10-12T10:00:00+05:30"),
    },
  ];

  const cases = [
    {
      name: "before festival",
      now: "2026-10-10T23:59:59+05:30",
      current: undefined,
      next: "oct-11-event",
    },
    {
      name: "exactly at first event start",
      now: "2026-10-11T09:00:00+05:30",
      current: "oct-11-event",
      next: "oct-11-event-2",
    },
    {
      name: "during first event",
      now: "2026-10-11T09:30:00+05:30",
      current: "oct-11-event",
      next: "oct-11-event-2",
    },
    {
      name: "exactly when first event ends",
      now: "2026-10-11T10:00:00+05:30",
      current: undefined,
      next: "oct-11-event-2",
    },
    {
      name: "between events",
      now: "2026-10-11T15:00:00+05:30",
      current: undefined,
      next: "oct-11-event-2",
    },
    {
      name: "during second event",
      now: "2026-10-11T18:30:00+05:30",
      current: "oct-11-event-2",
      next: "oct-12-event",
    },
    {
      name: "after festival",
      now: "2026-10-21T00:00:00+05:30",
      current: undefined,
      next: undefined,
    },
  ];

  it.each(cases)("$name", ({ now, current, next }) => {
    // Inject the mockFixture to test purely the event-selection logic
    const result = getCurrentAndNextEvents(new Date(now), mockFixture);
    expect(result.currentEvent?.id).toBe(current);
    expect(result.nextEvent?.id).toBe(next);
  });
});

// 2. Integration Test against real schedule
describe("getCurrentAndNextEvents - Real Oct 11-20 Schedule Integration", () => {
  it("computes accurate current and next events based on the real dataset", () => {
    const allEvents = getAllEvents(schedule);
    
    // Ensure all events parsed successfully
    expect(allEvents.length).toBeGreaterThan(10);
    
    // First event of the real schedule is Day 1 Morning (Oct 11)
    const firstEvent = allEvents[0];
    expect(firstEvent.id).toBe("day-1-morning-0");
    expect(firstEvent.startTime.toISOString()).toContain("2026-10-11");
    
    // Test "before festival"
    const beforeFestival = getCurrentAndNextEvents(new Date("2026-10-01T00:00:00+05:30"));
    expect(beforeFestival.currentEvent).toBeUndefined();
    expect(beforeFestival.nextEvent?.id).toBe("day-1-morning-0");

    // Test a specific moment during Day 5 morning
    // Day 5 is "2026-10-15".
    // Event 1 (Mahapuja) defaults to 08:00 AM -> 10:00 AM
    // Event 2 ("12:30 pm") starts at 12:30 PM -> 14:30 PM
    const day5MidDay = getCurrentAndNextEvents(new Date("2026-10-15T12:45:00+05:30"));
    expect(day5MidDay.currentEvent?.id).toBe("day-5-morning-1"); 
    expect(day5MidDay.nextEvent?.id).toBe("day-5-evening-0");
    
    // Test the evening of Day 8 exactly at 7:05 PM
    // Day 8 evening has an event strictly at "7:05 pm"
    const day8Evening = getCurrentAndNextEvents(new Date("2026-10-18T19:05:00+05:30"));
    expect(day8Evening.currentEvent?.id).toBe("day-8-evening-0");
  });
});
