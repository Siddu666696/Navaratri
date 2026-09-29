export type Lang = "te" | "en";

export interface Bilingual {
  te: string;
  en: string;
}

/** Ceremony-specific visual identity. Drives glow colour and particle mode. */
export type CeremonyVisualMode =
  | "procession"
  | "bangles"
  | "lotus"
  | "flowers"
  | "shakambari"
  | "lamps"
  | "vermilion"
  | "fruits"
  | "sacredFire"
  | "bilva"
  | "shami"
  | "neutral";

/** Controls visual complexity, not merely "more effects". */
export type Intensity = "quiet" | "moderate" | "hero";

export type SceneConfig = {
  id: string;
  date: string; // ISO yyyy-mm-dd
  titleTe: string;
  titleEn: string;
  imageSrc?: string;
  morningImageSrc?: string;
  eveningImageSrc?: string;
  visualMode: CeremonyVisualMode;
  intensity: Intensity;
  focalScale?: number;
  particleDensity?: number;
};
