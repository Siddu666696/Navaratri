import type { CeremonyVisualMode } from "@/lib/types";
import type { ParticleMode } from "@/components/atmosphere/particleModes";

/**
 * Maps a ceremony's visual identity to ONE primary atmosphere effect.
 * One effect per scene: never combine several in the same place.
 */
export const visualModeConfig: Record<
  CeremonyVisualMode,
  { particle: ParticleMode | null; glow: string }
> = {
  procession: { particle: "lightTrails", glow: "rgba(208,170,99,0.20)" },
  bangles: { particle: "ambientDust", glow: "rgba(166,60,45,0.13)" },
  lotus: { particle: "lotusPetals", glow: "rgba(200,121,61,0.15)" },
  flowers: { particle: "lotusPetals", glow: "rgba(198,164,123,0.15)" },
  shakambari: { particle: "ambientDust", glow: "rgba(198,164,123,0.10)" },
  lamps: { particle: "lampGlow", glow: "rgba(240,213,154,0.22)" },
  vermilion: { particle: "vermilionDust", glow: "rgba(166,60,45,0.22)" },
  fruits: { particle: "ambientDust", glow: "rgba(200,121,61,0.12)" },
  sacredFire: { particle: "sacredFire", glow: "rgba(200,121,61,0.26)" },
  bilva: { particle: "ambientDust", glow: "rgba(208,170,99,0.12)" },
  shami: { particle: "lightTrails", glow: "rgba(208,170,99,0.20)" },
  neutral: { particle: null, glow: "rgba(208,170,99,0.08)" },
};
