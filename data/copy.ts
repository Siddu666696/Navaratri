import type { Bilingual } from "@/lib/types";

const b = (te: string, en: string): Bilingual => ({ te, en });

export const copy = {
  meta: {
    title: b(
      "శరన్నవరాత్రోత్సవములు 2026 — శ్రీ నవదుర్గా పీఠక్షేత్రం, జగిత్యాల",
      "Sharannavaratri Utsavams 2026 — Sri Navadurga Peethakshetram, Jagtial"
    ),
    description: b(
      "11–20 అక్టోబర్ 2026 శరన్నవరాత్రోత్సవముల పూర్తి కార్యక్రమ వివరములు.",
      "Complete daily programme of the Sharannavaratri Utsavams, 11–20 October 2026."
    ),
  },

  nav: {
    programme: b("కార్యక్రమాలు", "Programme"),
    visit: b("దర్శనం", "Visit"),
    seva: b("సేవ", "Seva"),
    offerSeva: b("సేవ చేయండి", "Offer seva"),
    share: b("పంచుకోండి", "Share"),
    copied: b("లింక్ కాపీ అయింది", "Link copied"),
    language: b("భాష", "Language"),
    skip: b("విషయానికి వెళ్ళండి", "Skip to content"),
  },

  hero: {
    eyebrow: b("నవదుర్గా పీఠక్షేత్రం, జగిత్యాల", "Navadurga Peethakshetram, Jagtial"),
    line1: b("శరన్నవరాత్రి", "Sharannavaratri"),
    line2: b("ఉత్సవములు", "Utsavams"),
    tagline: b("ఈ జగమంతా శక్తిమయం", "All of creation is Shakti"),
    dates: b("11 – 20 అక్టోబర్ 2026", "11 – 20 October 2026"),
    samvatsara: b(
      "ఆశ్వీయుజ శుద్ధ పాడ్యమి నుండి, పరాభవ నామ సంవత్సరం",
      "From Ashwayuja Shuddha Padyami, Parabhava Samvatsaram"
    ),
    cta: b("కార్యక్రమాలు చూడండి", "See the programme"),
    scroll: b("కిందకు", "Scroll"),
  },

  reveal: {
    place: b("జగిత్యాల, తెలంగాణ", "Jagtial, Telangana"),
    title: b("శ్రీ నవదుర్గా పీఠక్షేత్రం", "Sri Navadurga Peethakshetram"),
    line: b(
      "లోక కళ్యాణార్థమై, అందరి కోరికలు తీర్చడానికి",
      "For the welfare of the world, and for every devotee's prayer"
    ),
    facts: [
      {
        label: b("ప్రతి రాత్రి 7:30", "Every night at 7:30"),
        text: b("దుర్గా సప్తశ్లోకి నిత్య పారాయణం", "Durga Saptashloki Parayanam"),
      },
      {
        label: b("ప్రతి పౌర్ణమి", "Every full moon"),
        text: b("సామూహిక శ్రీ లలితా సహస్రనామ పారాయణము, ధ్యానము", "Collective Sri Lalitha Sahasranama Parayanam and meditation"),
      },
    ],
  },

  invocation: {
    label: b("ఆవాహన", "Invocation"),
    lines: [
      "సర్వమంగళ మాంగళ్యే శివే సర్వార్థ సాధికే",
      "శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోఽస్తు తే",
    ],
    translation: b(
      "శుభములన్నింటికీ శుభమైన తల్లీ, శివా, సర్వార్థ సాధికా, శరణ్యా, త్రినేత్రా, గౌరీ, నారాయణీ, నీకు నమస్కారం.",
      "Salutations to You, O Narayani. You are the auspiciousness in all that is auspicious, consort of Shiva, giver of every aim, our refuge, three-eyed Gauri."
    ),
    source: b("శ్రీ దుర్గా సప్తశతి", "Sri Durga Saptashati"),
  },

  intro: {
    label: b("29వ సంవత్సరం", "The 29th year"),
    month: b("అక్టోబర్ 2026", "October 2026"),
    message: b(
      "గత 29 సంవత్సరాలుగా తల్లికి ఇష్టమైన శరన్నవరాత్రోత్సవములను నవదుర్గా సేవా సమితి, జగిత్యాల వారు నవదుర్గా పీఠక్షేత్రములో ఘనంగా నిర్వహిస్తున్నారు. శక్తి స్వరూపిణి అయిన దుర్గాదేవిని ఆరాధించడం జగిత్యాల పురవాసుల అదృష్టం.",
      "For 29 years, the Navadurga Seva Samithi of Jagtial has celebrated the Sharannavaratri Utsavams, the festival dearest to the Mother, at the Navadurga Peethakshetram. To worship Goddess Durga, the embodiment of Shakti, is the good fortune of the people of Jagtial."
    ),
    observancesTitle: b("నిత్య ఆరాధనలు", "Regular worship"),
    observances: [
      {
        when: b("ప్రతి రోజు, రాత్రి 7:30", "Every day, 7:30 pm"),
        text: b("దుర్గా సప్తశ్లోకి నిత్య పారాయణం", "Durga Saptashloki Parayanam"),
      },
      {
        when: b("ప్రతి నెల పౌర్ణమి, రాత్రి", "Every full moon, at night"),
        text: b("సామూహిక శ్రీ లలితా సహస్రనామ పారాయణము, ధ్యానము", "Collective Sri Lalitha Sahasranama Parayanam and meditation"),
      },
      {
        when: b("నవరాత్రులలో, నిత్యం", "During Navaratri, daily"),
        text: b("శ్రీ దుర్గా సప్తశతి పారాయణం", "Sri Durga Saptashati Parayanam"),
      },
      {
        when: b("నవరాత్రులలో, ఉదయం 10 · సాయంత్రం 4", "During Navaratri, 10 am and 4 pm"),
        text: b("సామూహిక శ్రీ లలితా సహస్రనామ పారాయణము", "Collective Sri Lalitha Sahasranama Parayanam"),
      },
    ],
  },

  schedule: {
    label: b("పది రోజుల ప్రయాణం", "Ten days"),
    title: b("కార్యక్రమ వివరములు", "Programme"),
    sub: b(
      "ఒక రోజును ఎంచుకోండి, లేదా కిందకు స్క్రోల్ చేయండి.",
      "Choose a day, or scroll down through the ten days."
    ),
    dayWord: b("రోజు", "Day"),
    pujaHoursTitle: b("ప్రతి రోజు పూజా సమయములు", "Puja hours, every day"),
    pujaHours: [
      b("ఉదయం 9:30 నుండి మధ్యాహ్నం 1:30 వరకు", "9:30 am to 1:30 pm"),
      b("సాయంత్రం 4:30 నుండి రాత్రి 7:30 వరకు", "4:30 pm to 7:30 pm"),
    ],
    period: {
      morning: b("ఉదయం", "Morning"),
      evening: b("సాయంత్రం", "Evening"),
    },
    ceremonyBadge: b("ప్రధాన ఘట్టం", "Major ceremony"),
  },

  visit: {
    label: b("దర్శనం", "Visiting"),
    title: b("పీఠక్షేత్రానికి రండి", "Come to the Peethakshetram"),
    routeTitle: b("అమ్మవారి ఎదుర్కోలు ఊరేగింపు", "Welcoming Ammavaru in procession"),
    routeWhen: b("11 అక్టోబర్, ఆదివారం, సాయంత్రం 6:05", "Sunday 11 October, 6:05 pm"),
    stops: [
      b("తహశీల్ చౌరస్తా", "Tahsil Chowrasta"),
      b("టవర్", "Tower"),
      b("కొత్త బస్టాండ్", "New Bus Stand"),
      b("గోవిందుపల్లె బైపాస్", "Govindupalle Bypass"),
      b("నవదుర్గా పీఠక్షేత్రం", "Navadurga Peethakshetram"),
    ],
    busTitle: b("ఉచిత బస్సు", "Free bus"),
    busText: b(
      "నవరాత్రులలో భక్తులకు స్థానిక దేవిశ్రీ గార్డెన్, బైపాస్ రోడ్డు నుండి ఉచిత బస్సు సౌకర్యం కలదు.",
      "During Navaratri a free bus runs for devotees from Devisri Garden, Bypass Road."
    ),
    requestTitle: b("భక్తులకు విజ్ఞప్తి", "A request to devotees"),
    requestText: b(
      "అమ్మవారి ప్రాంగణంలో కెమెరాలు మరియు సెల్‌ఫోన్లతో ఫోటోలు, సెల్ఫీలు తీయరాదు. దయచేసి భక్తులు సహకరించగలరు.",
      "Please do not take photographs or selfies with cameras or mobile phones inside the Ammavari premises. Thank you for your cooperation."
    ),
    addressTitle: b("స్థానం", "Location"),
    address: b("గోవిందుపల్లె, జగిత్యాల, తెలంగాణ, 505327", "Govindupalle, Jagtial, Telangana, 505327"),
    emailTitle: b("ఇమెయిల్", "Email"),
    mapCta: b("మ్యాప్‌లో చూడండి", "Open in Maps"),
  },

  donation: {
    label: b("సేవ", "Seva"),
    title: b("అమ్మవారి సేవలో పాలుపంచుకోండి", "Take part in the Mother's seva"),
    body: b(
      "ధన, వస్తు రూపేణ (బంగారం, వెండి), బియ్యము, కూరగాయలు మరియు అన్నప్రసాదము చేయదలచిన దాతలు ఆయా వస్తువులు ఇచ్చి రశీదు పొందగలరు.",
      "Devotees who wish to offer money, gold or silver, rice, vegetables, or to sponsor Annaprasadam can hand over their offering and collect a receipt."
    ),
    offeringsTitle: b("సేవా రూపాలు", "Ways to offer"),
    offerings: [
      b("ఆలయ నిర్మాణం కొరకు ధన రూపేణ", "Temple construction"),
      b("దేవీ విగ్రహం కొరకు", "Devi Vigraham"),
      b("అన్నదానం", "Annadanam"),
      b("వస్తు రూపేణ, బంగారం, వెండి", "Gold and silver"),
      b("బియ్యము", "Rice"),
      b("కూరగాయలు", "Vegetables"),
    ],
    receipt: b("మీ సేవకు రశీదు తప్పక పొందండి.", "Please collect a receipt for every offering."),
    ctaCall: b("సమితిని సంప్రదించండి", "Call the Samithi"),
    ctaVisit: b("పీఠక్షేత్రంలో సమర్పించండి", "Offer at the Peethakshetram"),
  },

  closing: {
    thanks: b(
      "గత 28 సంవత్సరాలుగా అన్ని విధాలుగా సహాయ సహకారాలు అందిస్తూ అమ్మవారి కృపను పొందుతున్న దాతలు మరియు భక్తజనులందరికీ పేరు పేరునా మా ధన్యవాదములు.",
      "To every donor and devotee who has supported us in every way for 28 years and received the Mother's grace, our heartfelt thanks."
    ),
    salutation: b("శ్రీ మాత్రే నమః", "Sri Matre Namah"),
    contactTitle: b("సంప్రదించండి", "Contact"),
    footer: b("© 2026 నవదుర్గా సేవా సమితి, జగిత్యాల", "© 2026 Navadurga Seva Samithi, Jagtial"),
  },
};
