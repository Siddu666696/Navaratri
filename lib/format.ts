import type { Bilingual } from "@/lib/types";

const monthsEn = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthsTe = ["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"];
const weekdaysEn = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weekdaysTe = ["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"];

/** Parses yyyy-mm-dd without timezone drift. */
export function parseIso(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d, weekday: new Date(y, m - 1, d).getDay() };
}

export function dayNumber(iso: string): number {
  return parseIso(iso).d;
}

export function monthName(iso: string): Bilingual {
  const { m } = parseIso(iso);
  return { te: monthsTe[m - 1], en: monthsEn[m - 1] };
}

export function monthShort(iso: string): Bilingual {
  const { m } = parseIso(iso);
  return { te: monthsTe[m - 1], en: monthsEn[m - 1].slice(0, 3) };
}

export function weekdayName(iso: string): Bilingual {
  const { weekday } = parseIso(iso);
  return { te: weekdaysTe[weekday], en: weekdaysEn[weekday] };
}
