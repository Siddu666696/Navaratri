import { NextResponse } from 'next/server';
import { schedule } from '@/data/schedule';
import { getAllEvents } from '@/lib/eventTime';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const events = getAllEvents(schedule);
  let targetEvents = events;

  if (id && id !== 'all') {
    targetEvents = events.filter(e => e.id === id);
  }

  if (targetEvents.length === 0) {
    return new NextResponse('Not found', { status: 404 });
  }

  let ics = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Navadurga Peethakshetram//EN\n";

  for (const event of targetEvents) {
    const start = event.startTime.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const end = event.endTime.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    ics += "BEGIN:VEVENT\n";
    ics += `SUMMARY:${event.item.titleEn}\n`;
    ics += `DTSTART:${start}\n`;
    ics += `DTEND:${end}\n`;
    ics += "LOCATION:Navadurga Peethakshetram, Jagtial, Telangana, 505327\n";
    if (event.item.noteEn) {
      ics += `DESCRIPTION:${event.item.noteEn}\n`;
    }
    ics += "END:VEVENT\n";
  }

  ics += "END:VCALENDAR";

  return new NextResponse(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="navadurga_events${id && id !== 'all' ? `_${id}` : ''}.ics"`,
    },
  });
}
