import type { Bilingual } from "@/lib/types";

/**
 * Edit the values below to finish the site.
 * Empty contact fields are hidden automatically.
 */
export const site = {
  legalName: "Navadurga Seva Samithi Trust",
  samithi: {
    te: "నవదుర్గా సేవా సమితి, జగిత్యాల",
    en: "Navadurga Seva Samithi, Jagtial",
  } as Bilingual,
  peetha: {
    te: "శ్రీ నవదుర్గా పీఠక్షేత్రం",
    en: "Sri Navadurga Peethakshetram",
  } as Bilingual,
  festivalStart: "2026-10-11",
  festivalEnd: "2026-10-20",
  yearsHosted: 29,
  contact: {
    phone: "9391528223",
    whatsapp: "",
    email: "navadurgasevasamithi9@gmail.com",
  },
  address: "Govindupalle, Jagtial, Telangana, 505327",
  mapsUrl: "https://maps.app.goo.gl/zPJ17M5qWn1eBGWC6",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.3633285486267!2d78.92561427496973!3d18.781954782363012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd13320df98ab3%3A0xc0aa3b0c410e6bfc!2sNavadurga%20peeta%20kshetramu!5e0!3m2!1sen!2sin!4v1789639956192!5m2!1sen!2sin",
  socialLinks: {
    instagram: "https://www.instagram.com/ndss_jagtial",
    facebook: "https://www.facebook.com/jagtialndss",
    youtube: "https://www.youtube.com/@NDSS_JAGTIAL",
  },
  organization: {
    url: "",
    logo: "",
  },
  siteUrl: "", // e.g. "https://navadurga-jagtial.org" (used for share metadata)
} as const;
