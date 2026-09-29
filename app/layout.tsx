// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Navadurga Peethakshetram",
//   description: "A cinematic temple storytelling landing page for the Navadurga festival journey.",
// };

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <body>{children}</body>
//     </html>
//   );
// }
import type { Metadata, Viewport } from "next";
import { Cinzel, Noto_Sans_Telugu, Outfit, Ramabhadra } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { site } from "@/data/site";
import "./globals.css";
import { MotionProvider } from "./components/motion/MotionProvider";

// Typography roles: ceremonial display (Cinzel / Ramabhadra), quiet body (Outfit / Noto Sans Telugu)
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const ramabhadra = Ramabhadra({ subsets: ["telugu", "latin"], weight: "400", variable: "--font-ramabhadra", display: "swap" });
const notoTelugu = Noto_Sans_Telugu({ subsets: ["telugu", "latin"], variable: "--font-noto-telugu", display: "swap" });

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Navadurga Seva Samithi Trust",
  url: site.organization.url || "",
  logo: site.organization.logo || "",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.contact.phone,
    contactType: "",
    areaServed: "IN",
    availableLanguage: "Telugu",
  },
  sameAs: [
    site.socialLinks.instagram,
    site.socialLinks.facebook,
    site.socialLinks.youtube,
  ],
};

export const metadata: Metadata = {
  title: `${copy.meta.title.te} | ${copy.meta.title.en}`,
  description: `${copy.meta.description.te} ${copy.meta.description.en}`,
  metadataBase: new URL(site.siteUrl || "https://navaratri.vercel.app"),
  openGraph: {
    title: copy.meta.title.en,
    description: copy.meta.description.en,
    type: "website",
    locale: "te_IN",
    alternateLocale: ["en_IN"],
    images: [{ url: "/images/temple.jpeg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="te" data-lang="te" className={`${cinzel.variable} ${outfit.variable} ${ramabhadra.variable} ${notoTelugu.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <LanguageProvider>
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
