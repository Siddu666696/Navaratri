import { getAllEvents } from "@/lib/eventTime";
import { schedule } from "@/data/schedule";
import Script from "next/script";

export function EventStructuredData() {
  const events = getAllEvents(schedule);

  const structuredData = events.map(event => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.item.titleEn,
    "description": event.item.noteEn || event.item.titleEn,
    "startDate": event.startTime.toISOString(),
    "endDate": event.endTime.toISOString(),
    "location": {
      "@type": "Place",
      "name": "Navadurga Peethakshetram",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Govindupalle",
        "addressLocality": "Jagtial",
        "addressRegion": "Telangana",
        "postalCode": "505327",
        "addressCountry": "IN"
      }
    }
  }));

  return (
    <Script 
      id="structured-data-events"
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
    />
  );
}
