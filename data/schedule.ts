import type { Bilingual, SceneConfig } from "@/lib/types";

export interface ProgramItem {
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
  morning: ProgramItem[];
  evening: ProgramItem[];
  note?: Bilingual;
}

const at = (hm: string, mer: "am" | "pm" | "noon"): Bilingual => ({
  en: `${hm} ${mer === "noon" ? "pm" : mer}`,
  te: `${mer === "am" ? "ఉ." : mer === "pm" ? "సా." : "మ."} ${hm}`,
});

const mahapuja = (): ProgramItem => ({
  titleTe: "మహాపూజ, మంత్రపుష్పం, ప్రసాద వితరణ",
  titleEn: "Maha Puja, Mantrapushpam and Prasada Vitarana",
});

const chandi = (): ProgramItem => ({
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
    imageSrc: "/amma.PNG",
    morningImageSrc: "/temple.jpeg",
    eveningImageSrc: "/amma.PNG",
    morning: [
      { titleTe: "శ్రీ గణేశ పూజ, పుణ్యాహవచనము, అమ్మవారి మహాకలశ స్థాపన", titleEn: "Sri Ganesha Puja, Punyahavachanam and Installation of the Maha Kalasha", emphasis: true },
      { titleTe: "దీక్షా మాలధారణ, గురు ధ్యానం", titleEn: "Deeksha Maladharana and Guru Dhyanam" },
    ],
    evening: [
      { titleTe: "అగ్ని ప్రతిష్ఠ, శతచండీ హవనము ప్రారంభం", titleEn: "Agni Pratishtha and the start of Shata Chandi Havanam" },
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
    imageSrc: "/temple.jpeg",
    morningImageSrc: "/kamalarchana_full.JPG",
    eveningImageSrc: "/bonalu.JPG",
    morning: [
      {
        time: at("8:00", "am"),
        titleTe: "8 గంటలకు స్థానిక శ్రీ వేణుగోపాల స్వామి గుడి నుండి పసుపు కుంకుమలను పీఠక్షేత్రం వరకు ఊరేగింపుగా తీసుకురావడం.",
        titleEn: "Turmeric and kumkum are carried in procession from Sri Venugopala Swamy temple to the Peethakshetram",
        emphasis: true,
      },
      {
        time: at("10:15", "am"),
        titleTe: "10:15 నిమిషాలకు దుర్గా సప్తశతి పారాయణం ప్రారంభం.",
        titleEn: "Durga Saptashati Parayanam begins",
      },
    ],
    evening: [
      mahapuja(),
      { titleTe: "అమ్మవారికి గాజుల అలంకరణ", titleEn: "Bangle alankaram of Ammavaru", emphasis: true },
      chandi(),
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
    imageSrc: "/kamalarchana_close.JPG",
    morningImageSrc: "/kamalarchana_full.JPG",
    eveningImageSrc: "/bonalu.JPG",
    morning: [
      mahapuja(),
      { titleTe: "హరిద్రా గణపతి అర్చన", titleEn: "Haridra Ganapati Archana" },
      chandi(),
    ],
    evening: [
      { titleTe: "మాతలచే సామూహిక కమలార్చన", titleEn: "Collective Kamalarchana by the mothers", emphasis: true },
      { titleTe: "పూలంగి సేవ", titleEn: "Poolangi Seva", emphasis: true },
      chandi(),
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
    imageSrc: "/shakambari.JPG",
    morningImageSrc: "/temple.jpeg",
    eveningImageSrc: "/shakambari.JPG",
    morning: [
      mahapuja(),
      { titleTe: "గులాబీ, చామంతి అర్చన", titleEn: "Rose and Chamanti Archana" },
      chandi(),
    ],
    evening: [
      { titleTe: "శాకాంబరి అలంకరణ", titleEn: "Shakambari Alankaram", emphasis: true },
      chandi(),
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
    imageSrc: "/bonalu.JPG",
    morningImageSrc: "/bonalu.JPG",
    eveningImageSrc: "/bonalu.JPG",
    morning: [
      mahapuja(),
      {
        time: at("12:30", "pm"),
        titleTe: "12:30 నిమిషాలకు మహా అన్నప్రసాద వితరణ.",
        titleEn: "Maha Annaprasada Vitarana",
        emphasis: true,
      },
    ],
    evening: [
      { titleTe: "లలితా పంచమి సందర్భంగా దీపోత్సవము", titleEn: "Deepotsavam for Lalitha Panchami", emphasis: true },
      { titleTe: "బోనాల పండుగ", titleEn: "Bonala Panduga", emphasis: true },
      chandi(),
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
    imageSrc: "/amma.PNG",
    morningImageSrc: "/amma.PNG",
    eveningImageSrc: "/bonalu.JPG",
    morning: [
      mahapuja(),
      chandi(),
    ],
    evening: [
      { titleTe: "మాతలచే సామూహిక కుంకుమార్చన", titleEn: "Collective Kumkumarchana by the mothers", emphasis: true },
      chandi(),
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
    imageSrc: "/vasantotsavam.JPG",
    morningImageSrc: "/vasantotsavam.JPG",
    eveningImageSrc: "/nakshatraHarathi.JPG",
    morning: [
      mahapuja(),
      {
        time: at("11:30", "am"),
        titleTe: "11:30 నిమిషాలకు మాతలచే మణిద్వీప వర్ణన 9 సార్లు పారాయణం.",
        titleEn: "Manidweepa Varnana recited nine times by the mothers",
        emphasis: true,
      },
    ],
    evening: [
      { titleTe: "వసంతోత్సవము", titleEn: "Vasantotsavam", emphasis: true },
      { titleTe: "నవహారతులు", titleEn: "Nava Haarathulu" },
      { titleTe: "జీవనలక్ష్మీ బతుకమ్మ", titleEn: "Jeevana Lakshmi Bathukamma", emphasis: true },
      chandi(),
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
    imageSrc: "/nakshatraHarathi.JPG",
    morningImageSrc: "/kamalarchana_close.JPG",
    eveningImageSrc: "/nakshatraHarathi.JPG",
    morning: [
      mahapuja(),
      {
        time: at("11:30", "am"),
        titleTe: "11:30 నిమిషాలకు దుర్గాష్టమి సందర్భంగా కుమారీపూజ.",
        titleEn: "Kumari Puja for Durgashtami",
        emphasis: true,
      },
    ],
    evening: [
      {
        time: at("7:05", "pm"),
        titleTe: "7:05 నిమిషాల నుండి శతచండీ హవనము, మహాపూర్ణాహుతి.",
        titleEn: "Shata Chandi Havanam and Maha Purnahuti",
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
    imageSrc: "/lingarchana.JPG",
    morningImageSrc: "/lingarchana.JPG",
    eveningImageSrc: "/poolangi_seva.JPG",
    morning: [
      mahapuja(),
      { titleTe: "అమ్మవారికి బిల్వార్చన", titleEn: "Bilvarchana of Ammavaru", emphasis: true },
    ],
    evening: [
      { titleTe: "సుహాసిని పూజ", titleEn: "Suhasini Puja", emphasis: true },
      { titleTe: "నవజ్యోతుల లింగార్చన", titleEn: "Navajyothula Lingarchana" },
      { titleTe: "బలిహరణము", titleEn: "Baliharanam" },
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
    imageSrc: "/poolangi_seva.JPG",
    morningImageSrc: "/lingarchana.JPG",
    eveningImageSrc: "/poolangi_seva.JPG",
    morning: [
      { titleTe: "శ్రీ అపరాజితా శమీపూజ", titleEn: "Sri Aparajita Shami Puja", emphasis: true },
      { titleTe: "ఆయుధపూజ", titleEn: "Ayudha Puja" },
      { titleTe: "మహాకలశ ఉద్వాసన", titleEn: "Udvasana of the Maha Kalasha" },
      { titleTe: "మంగళస్వరూపిణి అమ్మవారి శోభాయాత్ర", titleEn: "Shobhayatra of Mangalaswarupini Ammavaru", emphasis: true },
    ],
    evening: [],
  },
];
