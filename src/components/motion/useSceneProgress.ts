"use client";

import type { RefObject } from "react";
import {
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "framer-motion";
import { sceneProgress } from "@/lib/motion";

export interface SceneProgressResult {
  /** Raw 0..1 progress of the scene through the viewport. */
  progress: MotionValue<number>;
  /** 0..1 across the "enter" band. */
  enter: MotionValue<number>;
  /** 0..1 across the "exit" band. */
  exit: MotionValue<number>;
  reduce: boolean;
}

/**
 * Treats scroll as a camera. Each scene gets a normalised progress value
 * with enter / focus / exit bands (see `sceneProgress`).
 */
export function useSceneProgress(
  ref: RefObject<HTMLElement | null>,
  offset: UseScrollOptions["offset"] = ["start end", "end start"]
): SceneProgressResult {
  const reduce = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const enter = useTransform(scrollYProgress, [...sceneProgress.enter], [0, 1]);
  const exit = useTransform(scrollYProgress, [...sceneProgress.exit], [0, 1]);
  return { progress: scrollYProgress, enter, exit, reduce };
}
