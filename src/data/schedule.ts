import type { Bilingual, SceneConfig } from "@/lib/types";

export type Period = "day" | "morning" | "afternoon" | "evening";

export interface ProgramItem {
  period: Period;
  time?: Bilingual;
  titleTe: string;
  titleEn: string;
  noteTe?: string;
  noteEn?: string;
  /** Larger type for the defining moments of a day. */
  emphasis?: boolean;
}

export interface DaySchedule extends SceneConfig {
  day: number;
  tithi: Bilingual;
  /** Set on days with a major ceremony. Gets a stronger scene. */
  ceremony?: Bilingual;
  items: ProgramItem[];
  note?: Bilingual;
}

const at = (hm: string, mer: "am" | "pm" | "noon"): Bilingual => ({
  en: `${hm} ${mer === "noon" ? "pm" : mer}`,
  te: `${mer === "am" ? "ఉ." : mer === "pm" ? "సా." : "మ."} ${hm}`,
});

const mahapuja = (period: Period = "morning"): ProgramItem => ({
  period,
  titleTe: "మహాపూజ, మంత్రపుష్పం, ప్రసాద వితరణ",
  titleEn: "Maha Puja, Mantrapushpam and Prasada Vitarana",
});

const chandi = (period: Period): ProgramItem => ({
  period,
  titleTe: "చండీ హవనము",
  titleEn: "Chandi Havanam",
});

export const schedule: DaySchedule[] = [
  {
    id: "day-1",
    day: 1,
    date: "2026-10-11",
    tithi: { te: "పాడ్యమి", en: "Padyami" },
    titleTe: "అమ్మవారి మహా ఊరేగింపు, కలశ స్థాపన",
    titleEn: "The Grand Procession and Kalasha Sthapana",
    ceremony: { te: "మహా ఊరేగింపు", en: "Maha Ooregimpu" },
    visualMode: "procession",
    intensity: "hero",
    imageSrc: "/images/amma.PNG",
    morningImageSrc: "/images/temple.jpeg",
    eveningImageSrc: "/images/amma.PNG",
    items: [
      { period: "afternoon", titleTe: "శ్రీ గణేశ పూజ, పుణ్యాహవచనము", titleEn: "Sri Ganesha Puja and Punyahavachanam" },
      { period: "afternoon", titleTe: "అమ్మవారి మహాకలశ స్థాపన", titleEn: "Installation of the Maha Kalasha", emphasis: true },
      { period: "afternoon", titleTe: "దీక్షా మాలధారణ, గురు ధ్యానం", titleEn: "Deeksha Maladharana and Guru Dhyanam" },
      { period: "afternoon", titleTe: "అగ్ని ప్రతిష్ఠ, శతచండీ హవనము ప్రారంభం", titleEn: "Agni Pratishtha and the start of Shata Chandi Havanam" },
      {
        period: "evening",
        time: at("6:05", "pm"),
        titleTe: "అమ్మవారిని ఊరేగింపుగా పీఠక్షేత్రానికి ఎదుర్కొని రావడం",
        titleEn: "Ammavaru is welcomed in procession to the Peethakshetram",
        noteTe: "తహశీల్ చౌరస్తా నుండి టవర్, కొత్త బస్టాండ్, గోవిందుపల్లె బైపాస్ మీదుగా",
        noteEn: "From Tahsil Chowrasta, past the Tower and New Bus Stand, along Govindupalle Bypass",
        emphasis: true,
      },
    ],
  },
  {
    id: "day-2",
    day: 2,
    date: "2026-10-12",
    tithi: { te: "విదియ", en: "Vidiya" },
    titleTe: "పసుపు కుంకుమల ఊరేగింపు, గాజుల అలంకరణ",
    titleEn: "Turmeric and Kumkum Procession, Bangle Alankaram",
    visualMode: "bangles",
    intensity: "quiet",
    imageSrc: "/images/temple.jpeg",
    morningImageSrc: "/images/kamalarchana_full.JPG",
    eveningImageSrc: "/images/bonalu.JPG",
    items: [
      {
        period: "morning",
        time: at("8:00", "am"),
        titleTe: "శ్రీ వేణుగోపాల స్వామి గుడి నుండి పసుపు కుంకుమలను పీఠక్షేత్రం వరకు ఊరేగింపుగా తీసుకురావడం",
        titleEn: "Turmeric and kumkum are carried in procession from Sri Venugopala Swamy temple to the Peethakshetram",
        emphasis: true,
      },
      {
        period: "morning",
        time: at("10:15", "am"),
        titleTe: "దుర్గా సప్తశతి పారాయణం ప్రారంభం",
        titleEn: "Durga Saptashati Parayanam begins",
      },
      mahapuja("day"),
      { period: "day", titleTe: "అమ్మవారికి గాజుల అలంకరణ", titleEn: "Bangle alankaram of Ammavaru", emphasis: true },
      chandi("day"),
    ],
  },
  {
    id: "day-3",
    day: 3,
    date: "2026-10-13",
    tithi: { te: "తదియ", en: "Tadiya" },
    titleTe: "హరిద్రా గణపతి అర్చన, కమలార్చన, పూలంగి సేవ",
    titleEn: "Haridra Ganapati Archana, Kamalarchana and Poolangi Seva",
    visualMode: "lotus",
    intensity: "moderate",
    imageSrc: "/images/kamalarchana_close.JPG",
    morningImageSrc: "/images/kamalarchana_full.JPG",
    eveningImageSrc: "/images/bonalu.JPG",
    items: [
      mahapuja("morning"),
      { period: "morning", titleTe: "హరిద్రా గణపతి అర్చన", titleEn: "Haridra Ganapati Archana" },
      chandi("morning"),
      { period: "evening", titleTe: "మాతలచే సామూహిక కమలార్చన", titleEn: "Collective Kamalarchana by the mothers", emphasis: true },
      { period: "evening", titleTe: "పూలంగి సేవ", titleEn: "Poolangi Seva", emphasis: true },
      chandi("evening"),
    ],
  },
  {
    id: "day-4",
    day: 4,
    date: "2026-10-14",
    tithi: { te: "చవితి", en: "Chaturthi" },
    titleTe: "గులాబీ చామంతి అర్చన, శాకాంబరి అలంకరణ",
    titleEn: "Rose and Chamanti Archana, Shakambari Alankaram",
    visualMode: "flowers",
    intensity: "moderate",
    imageSrc: "/images/shakambari.JPG",
    morningImageSrc: "/images/temple.jpeg",
    eveningImageSrc: "/images/shakambari.JPG",
    items: [
      mahapuja("morning"),
      { period: "morning", titleTe: "గులాబీ, చామంతి అర్చన", titleEn: "Rose and Chamanti Archana" },
      chandi("morning"),
      { period: "evening", titleTe: "శాకాంబరి అలంకరణ", titleEn: "Shakambari Alankaram", emphasis: true },
      chandi("evening"),
    ],
  },
  {
    id: "day-5",
    day: 5,
    date: "2026-10-15",
    tithi: { te: "పంచమి", en: "Panchami" },
    titleTe: "లలితా పంచమి, దీపోత్సవము",
    titleEn: "Lalitha Panchami and Deepotsavam",
    ceremony: { te: "దీపోత్సవము", en: "Deepotsavam" },
    visualMode: "lamps",
    intensity: "hero",
    imageSrc: "/images/bonalu.JPG",
    morningImageSrc: "/images/bonalu.JPG",
    eveningImageSrc: "/images/bonalu.JPG",
    items: [
      mahapuja("morning"),
      {
        period: "afternoon",
        time: at("12:30", "noon"),
        titleTe: "మహా అన్నప్రసాద వితరణ",
        titleEn: "Maha Annaprasada Vitarana",
        emphasis: true,
      },
      { period: "evening", titleTe: "లలితా పంచమి సందర్భంగా దీపోత్సవము", titleEn: "Deepotsavam for Lalitha Panchami", emphasis: true },
      { period: "evening", titleTe: "బోనాల పండుగ", titleEn: "Bonala Panduga", emphasis: true },
      chandi("evening"),
    ],
    note: {
      te: "ధన, వస్తురూపేణ (బంగారం, వెండి), బియ్యము, కూరగాయలు మరియు అన్నప్రసాదము చేయదలచిన దాతలు ఆయా వస్తువులు ఇచ్చి రశీదు పొందగలరు.",
      en: "Donors of money, gold or silver, rice, vegetables or Annaprasadam may hand over their offering and collect a receipt.",
    },
  },
  {
    id: "day-6",
    day: 6,
    date: "2026-10-16",
    tithi: { te: "షష్ఠి", en: "Shashthi" },
    titleTe: "సామూహిక కుంకుమార్చన",
    titleEn: "Collective Kumkumarchana",
    ceremony: { te: "కుంకుమార్చన", en: "Kumkumarchana" },
    visualMode: "vermilion",
    intensity: "hero",
    imageSrc: "/images/amma.PNG",
    morningImageSrc: "/images/amma.PNG",
    eveningImageSrc: "/images/bonalu.JPG",
    items: [
      mahapuja("morning"),
      chandi("morning"),
      { period: "evening", titleTe: "మాతలచే సామూహిక కుంకుమార్చన", titleEn: "Collective Kumkumarchana by the mothers", emphasis: true },
      chandi("evening"),
    ],
  },
  {
    id: "day-7",
    day: 7,
    date: "2026-10-17",
    tithi: { te: "సప్తమి", en: "Saptami" },
    titleTe: "మణిద్వీప వర్ణన, వసంతోత్సవము, బతుకమ్మ",
    titleEn: "Manidweepa Varnana, Vasantotsavam and Bathukamma",
    visualMode: "flowers",
    intensity: "moderate",
    imageSrc: "/images/vasantotsavam.JPG",
    morningImageSrc: "/images/vasantotsavam.JPG",
    eveningImageSrc: "/images/nakshatraHarathi.JPG",
    items: [
      mahapuja("morning"),
      {
        period: "morning",
        time: at("11:30", "am"),
        titleTe: "మాతలచే మణిద్వీప వర్ణన 9 సార్లు పారాయణం",
        titleEn: "Manidweepa Varnana recited nine times by the mothers",
        emphasis: true,
      },
      { period: "evening", titleTe: "వసంతోత్సవము", titleEn: "Vasantotsavam", emphasis: true },
      { period: "evening", titleTe: "నవహారతులు", titleEn: "Nava Haarathulu" },
      { period: "evening", titleTe: "జీవనలక్ష్మీ బతుకమ్మ", titleEn: "Jeevana Lakshmi Bathukamma", emphasis: true },
      chandi("evening"),
    ],
  },
  {
    id: "day-8",
    day: 8,
    date: "2026-10-18",
    tithi: { te: "అష్టమి", en: "Ashtami" },
    titleTe: "దుర్గాష్టమి, కుమారీ పూజ, మహాపూర్ణాహుతి",
    titleEn: "Durgashtami, Kumari Puja and Maha Purnahuti",
    ceremony: { te: "శతచండీ హవనము, మహాపూర్ణాహుతి", en: "Shata Chandi Havanam and Maha Purnahuti" },
    visualMode: "sacredFire",
    intensity: "hero",
    imageSrc: "/images/nakshatraHarathi.JPG",
    morningImageSrc: "/images/kamalarchana_close.JPG",
    eveningImageSrc: "/images/nakshatraHarathi.JPG",
    items: [
      mahapuja("morning"),
      {
        period: "morning",
        time: at("11:30", "am"),
        titleTe: "దుర్గాష్టమి సందర్భంగా కుమారీ పూజ",
        titleEn: "Kumari Puja for Durgashtami",
        emphasis: true,
      },
      {
        period: "evening",
        time: at("7:05", "pm"),
        titleTe: "శతచండీ హవనము, మహాపూర్ణాహుతి",
        titleEn: "Shata Chandi Havanam and Maha Purnahuti",
        noteTe: "సాయంత్రం 7:05 నుండి",
        noteEn: "From 7:05 pm",
        emphasis: true,
      },
    ],
  },
  {
    id: "day-9",
    day: 9,
    date: "2026-10-19",
    tithi: { te: "నవమి", en: "Navami" },
    titleTe: "బిల్వార్చన, సుహాసినీ పూజ, నవజ్యోతుల లింగార్చన",
    titleEn: "Bilvarchana, Suhasini Puja and Navajyothula Lingarchana",
    visualMode: "bilva",
    intensity: "quiet",
    imageSrc: "/images/lingarchana.JPG",
    morningImageSrc: "/images/lingarchana.JPG",
    eveningImageSrc: "/images/poolangi_seva.JPG",
    items: [
      mahapuja("morning"),
      { period: "morning", titleTe: "అమ్మవారికి బిల్వార్చన", titleEn: "Bilvarchana of Ammavaru", emphasis: true },
      { period: "evening", titleTe: "సుహాసిని పూజ", titleEn: "Suhasini Puja", emphasis: true },
      { period: "evening", titleTe: "నవజ్యోతుల లింగార్చన", titleEn: "Navajyothula Lingarchana" },
      { period: "evening", titleTe: "బలిహరణము", titleEn: "Baliharanam" },
    ],
  },
  {
    id: "day-10",
    day: 10,
    date: "2026-10-20",
    tithi: { te: "దశమి", en: "Dashami" },
    titleTe: "అపరాజితా శమీ పూజ, శోభాయాత్ర",
    titleEn: "Aparajita Shami Puja and Shobhayatra",
    ceremony: { te: "శోభాయాత్ర", en: "Shobhayatra" },
    visualMode: "shami",
    intensity: "hero",
    imageSrc: "/images/poolangi_seva.JPG",
    morningImageSrc: "/images/lingarchana.JPG",
    eveningImageSrc: "/images/poolangi_seva.JPG",
    items: [
      { period: "day", titleTe: "శ్రీ అపరాజితా శమీపూజ", titleEn: "Sri Aparajita Shami Puja", emphasis: true },
      { period: "day", titleTe: "ఆయుధపూజ", titleEn: "Ayudha Puja" },
      { period: "day", titleTe: "మహాకలశ ఉద్వాసన", titleEn: "Udvasana of the Maha Kalasha" },
      { period: "day", titleTe: "మంగళస్వరూపిణి అమ్మవారి శోభాయాత్ర", titleEn: "Shobhayatra of Mangalaswarupini Ammavaru", emphasis: true },
    ],
  },
];
