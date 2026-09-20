"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { copy } from "@/data/copy";
import { easings } from "@/lib/motion";
import { StoneTexture } from "@/components/architecture/StoneTexture";
import { TextReveal } from "@/components/motion/TextReveal";

function AmmaPortrait() {
  return (
    <div className="ammavaru-portrait" aria-label="Ammavaru portrait">
      <motion.div className="ammavaru-portrait__glow" animate={{ opacity: [0.7, 1, 0.8, 0.95, 0.72], scale: [1, 1.08, 1.02, 1.12, 1] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }} />
      <div className="ammavaru-portrait__frame">
        <Image src="/images/amma.PNG" alt="Ammavaru" fill className="ammavaru-portrait__img" priority />
      </div>
    </div>
  );
}

/**
 * Scene 3: the invocation. One quiet composition with generous negative
 * space. Lines rise through a vertical mask; the composition then holds.
 */
export function InvocationScene() {
  const { t } = useLang();
  return (
    <section className="invocation" aria-label={t(copy.invocation.label)}>
      <StoneTexture />
      <div className="invocation__inner">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 2, ease: easings.gentle }}>
          <AmmaPortrait />
        </motion.div>

        <blockquote className="invocation__verse display" lang="te">
          {copy.invocation.lines.map((line, i) => (
            <TextReveal key={line} inView delay={i * 0.12} duration={0.9}>
              {line}
            </TextReveal>
          ))}
        </blockquote>

        <motion.p
          className="invocation__translation"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easings.gentle }}
        >
          {t(copy.invocation.translation)}
        </motion.p>
        <motion.p
          className="invocation__source"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t(copy.invocation.source)}
        </motion.p>
      </div>
    </section>
  );
}
