"use client";

import { motion } from "framer-motion";
import { easings } from "@/lib/motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  /** Reveal when scrolled into view instead of on mount. */
  inView?: boolean;
  className?: string;
  innerClassName?: string;
}

/**
 * Mask reveal: the line rises out of an invisible slit.
 * The mask has vertical padding so Telugu vowel signs are never clipped.
 */
export function TextReveal({
  children,
  delay = 0,
  duration = 1.4,
  inView = false,
  className = "",
  innerClassName = "",
}: Props) {
  const transition = { duration, delay, ease: easings.reveal };
  return (
    <span className={`mask ${className}`}>
      <motion.span
        className={`mask__inner ${innerClassName}`}
        initial={{ y: "112%" }}
        {...(inView
          ? { whileInView: { y: 0 }, viewport: { once: true, amount: 0.6 } }
          : { animate: { y: 0 } })}
        transition={transition}
      >
        {children}
      </motion.span>
    </span>
  );
}
