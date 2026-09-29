type Bezier = [number, number, number, number];

export const motionDurations = {
  micro: 0.18,
  quick: 0.35,
  standard: 0.65,
  cinematic: 1.2,
  reveal: 1.8,
  ceremonial: 2.8,
} as const;

export const easings: Record<"smooth" | "reveal" | "gentle" | "exit", Bezier> = {
  smooth: [0.22, 1, 0.36, 1],
  reveal: [0.16, 1, 0.3, 1],
  gentle: [0.25, 0.1, 0.25, 1],
  exit: [0.7, 0, 0.84, 0],
};

/** Restrained parallax values (px / scale). */
export const sceneParallax = {
  backgroundY: 20,
  imageY: 8,
  foregroundY: -14,
  imageScaleStart: 1.02,
  imageScaleFocus: 1.06,
} as const;

/** Normalised scene progress bands. */
export const sceneProgress = {
  enter: [0, 0.25],
  focus: [0.25, 0.75],
  exit: [0.75, 1],
} as const;
