"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Landmark,
  Music4,
  Sparkles,
} from "lucide-react";
import styles from "./page.module.css";
import { NavHeader } from "./components/navigation/NavHeader";
import { DailyScheduleSection } from "./components/schedule/DailyScheduleSection";
import { ClosingScene } from "./components/scenes/ClosingScene";
import { DonationSection } from "./components/donation/DonationSection";
import { VisitSection } from "./components/scenes/VisitSection";
import { UpcomingEventOverlay } from "./components/widgets/UpcomingEventOverlay";
import { LiveEventWidget } from "./components/widgets/LiveEventWidget";
import { EventStructuredData } from "./components/widgets/EventStructuredData";
const ritualMoments = [
  {
    title: "Kamalarchana",
    description:
      "An intimate offering of petals and devotion, carrying the fragrance of the first light of the day.",
    image: "/kamalarchana_full.JPG",
    icon: Sparkles,
  },
  {
    title: "Bonalu",
    description:
      "Tempered celebration, rhythmic prayer, and community devotion flowing through the temple courtyard.",
    image: "/bonalu.JPG",
    icon: Music4,
  },
  {
    title: "Nakshatra Harathi",
    description:
      "A sacred lamp sequence that honors the celestial rhythm and the temple’s living continuity.",
    image: "/nakshatraHarathi.JPG",
    icon: Flame,
  },
];

const galleryCards = [
  { src: "/lingarchana.JPG", alt: "Temple ritual in motion", label: "Sacred rhythm" },
  { src: "/poolangi_seva.JPG", alt: "Temple offering ceremony", label: "Devotion in detail" },
  { src: "/vasantotsavam.JPG", alt: "Cultural celebration", label: "Festival glow" },
];

const stats = [
  { value: "4", label: "Sacred rituals" },
  { value: "30+", label: "Years of tradition" },
  { value: "4000+", label: "Devotees served every Day During Navaratri" },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <NavHeader />

      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <motion.div
            className={styles.heroCopy}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            variants={reveal}
          >
            <p className={styles.kicker}>శరన్నవరాత్రి ఉత్సవములు</p>
            <h1>నవదుర్గా పీఠక్షేత్రం జీవన సమరసతను అనుభవించండి.</h1>
            <p className={styles.lead}>
              అఖండ ధ్యానం, పూజా తీర్థం మరియు కమ్యూనిటీ ఆరాధన కలిసి ఉండే ఈ పీఠక్షేత్రంలో, ప్రతి పూజా సన్నివేశం
              భక్తి, శ్రద్ధ మరియు అక్షయ వారసత్వం గల కథను పలికిస్తుంది.
            </p>

            <div className={styles.heroActions}>
              <a href="#programme" className={styles.primaryButton}>
                కార్యక్రమాలను చూడండి
                <ArrowRight size={18} />
              </a>
              <a href="#story" className={styles.secondaryButton}>
                కథను కనుగొనండి
              </a>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className={styles.imageFrame}>
              <Image src="/temple_cutout.png" alt="Temple front view" fill priority sizes="(max-width: 768px) 100vw, 50vw" className={styles.heroImage} />
            </div>

            <UpcomingEventOverlay />
          </motion.div>
        </section>

        <section className={styles.storySection} id="story">
          <motion.div
            className={styles.sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={reveal}
          >
            <p className={styles.sectionEyebrow}>కథ</p>
            <h2>భక్తి మరియు శాశ్వత స్మృతుల మధ్య ఉన్న పీఠక్షేత్రం.</h2>
          </motion.div>

          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              variants={reveal}
            >
              <p>
                నవదుర్గా సందర్శన, రాయి శ్రద్ధ, పూజా దీపాల బలము మరియు నమ్మకానికి నిదర్శనమయ్యే భక్తుల సమూహం కలిసి
                ఒక అద్భుతమైన ఆధ్యాత్మిక అనుభూతిని ქმరిస్తుంది.
              </p>
              <p>
                ప్రతి ఋతువు మొదటి घंटిక నుండి చివరి ఆశీస్సులతో ప్రారంభించి, జ్ఞాపకశక్తి, మేల్కొలుపు మరియు ఉత్సవ సందడి
                కలిగి సాగుతుంది.
              </p>
            </motion.div>

            <motion.div
              className={styles.featureCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              variants={reveal}
            >
              <div className={styles.featureBadge}>
                <Landmark size={18} />
                పవిత్ర వాస్తుశిల్పం
              </div>
              <p>
                ప్రార్థన ప్రవాహం మరియు సహజ కాంతితో నిర్మితమైన ఈ పీఠక్షేత్రం, శాంతిని అందిస్తూ తరతరాల భక్తుల స్మృతులను
                నిలబెట్టుతుంది.
              </p>
            </motion.div>
          </div>
        </section>


        <DailyScheduleSection />
        <section className={styles.ritualSection} id="rituals">
          <motion.div
            className={styles.sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={reveal}
          >
            <p className={styles.sectionEyebrow}>ఆచారాలు</p>
            <h2>ఈ పీఠక్షేత్రపు ఆత్మను మోసుకెళ్లే పూజా క్షణాలు.</h2>
          </motion.div>

          <div className={styles.ritualGrid}>
            {ritualMoments.map(({ title, description, image, icon: Icon }, index) => (
              <motion.article
                key={title}
                className={styles.ritualCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                variants={reveal}
              >
                <div className={styles.ritualImageWrap}>
                  <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.ritualImage} />
                </div>
                <div className={styles.ritualContent}>
                  <div className={styles.ritualHeader}>
                    <span className={styles.iconBubble}>
                      <Icon size={18} />
                    </span>
                    <span className={styles.ritualLabel}>దేవాలయ ఆరాధన</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        <section className={styles.gallerySection} aria-label="Temple gallery">
          <div className={styles.galleryGrid}>
            {galleryCards.map((item, index) => (
              <motion.figure
                key={item.label}
                className={styles.galleryCard}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={styles.galleryImageWrap}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.galleryImage} />
                </div>
                <figcaption>{item.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>


        <section className={styles.supportSection} id="support">
          <motion.div
            className={styles.supportCopy}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={reveal}
          >
            <p className={styles.sectionEyebrow}>మాతాశ్రయ సేవ</p>
            <h2>దీపాలు వెలిగించి, పూజలు కొనసాగించేందుకు మద్దతు అందించండి.</h2>
            <p>
              మీ సహకారం వల్ల ప్రతిరోజు పూజ, ఉత్సవ నిర్వహణ, పరమ పవిత్ర అర్చనలు మరియు భక్తుల సమూహ జీవితం కొనసాగుతుంది.
              ఇది భవిష్యత్ తరాల కోసమూ నిత్యమైన సేవగా నిలుస్తుంది.
            </p>
            <div className={styles.supportActions}>
              <a href="#seva" className={styles.primaryButton}>
                దానమివ్వండి
                <ArrowRight size={18} />
              </a>
              <a href="#seva" className={styles.secondaryButton}>
                స్వచ్ఛంద సేవ
              </a>
            </div>
          </motion.div>

          {/* <motion.div
            className={styles.supportVisual}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <div className={styles.supportImageWrap}>
              <Image src="/shakambari.JPG" alt="Temple community gathering" fill className={styles.supportImage} />
            </div>
            <div className={styles.supportBadge}>
              <MapPin size={15} />
              నవదుర్గా పీఠక్షేత్రం
            </div>
          </motion.div> */}
        </section>
        <VisitSection />
        <DonationSection />
      </main>

      <footer>
        <ClosingScene />
      </footer>
      <LiveEventWidget />
      <EventStructuredData />
    </div>
  );
}
