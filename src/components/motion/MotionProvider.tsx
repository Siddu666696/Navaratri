"use client";

import { MotionConfig } from "framer-motion";

/**
 * Honour the visitor's reduced-motion preference for every framer-motion
 * transform animation on the site. Opacity may still fade; transforms snap.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
