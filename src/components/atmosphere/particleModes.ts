/**
 * Particle mode definitions. Each mode is its own small system (spawn,
 * update, draw) rather than one universal renderer. Particle objects are
 * pooled: nothing is allocated per frame.
 */

export type ParticleMode =
  | "ambientDust"
  | "goldenEmbers"
  | "lotusPetals"
  | "lampGlow"
  | "vermilionDust"
  | "sacredFire"
  | "lightTrails";

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  phase: number;
  rot: number;
  vr: number;
  depth: number;
  delay: number;
  tone: number;
}

export interface Sprites {
  gold: HTMLCanvasElement;
  highlight: HTMLCanvasElement;
  saffron: HTMLCanvasElement;
  vermilion: HTMLCanvasElement;
  streak: HTMLCanvasElement;
}

export interface DrawEnv {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
  /** Milliseconds since the canvas mounted. */
  t: number;
  sprites: Sprites;
}

export interface ModeDef {
  /** Share of the device particle budget used by this mode. */
  share: number;
  composite: GlobalCompositeOperation;
  spawn: (p: Particle, w: number, h: number, initial: boolean, i: number, n: number, settled: boolean) => void;
  update: (p: Particle, dt: number, w: number, h: number, t: number) => void;
  draw: (p: Particle, env: DrawEnv) => void;
  /** Optional base layer drawn once per frame before the particles. */
  under?: (env: DrawEnv) => void;
}

export const particleLimits = { desktop: 180, tablet: 100, mobile: 45 } as const;

/* ---------- sprites (rendered once, reused with drawImage) ---------- */

const RGB = {
  gold: "208,170,99",
  highlight: "240,213,154",
  saffron: "200,121,61",
  vermilion: "166,60,45",
};

function glowSprite(rgb: string, size = 64): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, `rgba(${rgb},1)`);
  grad.addColorStop(0.25, `rgba(${rgb},0.55)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

function streakSprite(rgb: string): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 6;
  const g = c.getContext("2d")!;
  const grad = g.createLinearGradient(0, 0, 256, 0);
  grad.addColorStop(0, `rgba(${rgb},0)`);
  grad.addColorStop(0.8, `rgba(${rgb},0.6)`);
  grad.addColorStop(1, `rgba(${rgb},1)`);
  g.fillStyle = grad;
  g.fillRect(0, 1, 256, 4);
  g.globalAlpha = 0.35;
  g.fillRect(0, 0, 256, 6);
  return c;
}

let cached: Sprites | null = null;
export function getSprites(): Sprites {
  if (!cached) {
    cached = {
      gold: glowSprite(RGB.gold),
      highlight: glowSprite(RGB.highlight),
      saffron: glowSprite(RGB.saffron),
      vermilion: glowSprite(RGB.vermilion),
      streak: streakSprite(RGB.gold),
    };
  }
  return cached;
}

const rnd = Math.random;
const TAU = Math.PI * 2;

function blit(env: DrawEnv, sprite: HTMLCanvasElement, x: number, y: number, size: number, alpha: number) {
  if (alpha <= 0.002) return;
  env.ctx.globalAlpha = alpha;
  env.ctx.drawImage(sprite, x - size / 2, y - size / 2, size, size);
}

/* ---------- ambient dust: almost invisible while reading ---------- */

const ambientDust: ModeDef = {
  share: 0.35,
  composite: "lighter",
  spawn(p) {
    p.depth = rnd();
    p.x = rnd() * 1;
    p.y = rnd() * 1; // normalised; scaled in update on first frame
    p.vx = (rnd() - 0.5) * 6 * (0.4 + p.depth);
    p.vy = -(1.5 + rnd() * 5) * (0.4 + p.depth);
    // distant particles are larger and softer; near ones are small and sharper
    p.size = p.depth < 0.4 ? 9 + rnd() * 5 : 2.5 + rnd() * 3;
    p.alpha = p.depth < 0.4 ? 0.05 + rnd() * 0.07 : 0.14 + rnd() * 0.2;
    p.phase = rnd() * TAU;
    p.life = -1; // -1 = needs pixel positioning
  },
  update(p, dt, w, h) {
    if (p.life < 0) {
      p.x *= w;
      p.y *= h;
      p.life = 0;
    }
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    if (p.x < -20) p.x = w + 20;
    if (p.x > w + 20) p.x = -20;
    if (p.y < -20) p.y = h + 20;
  },
  draw(p, env) {
    const a = p.alpha * (0.55 + 0.45 * Math.sin(env.t * 0.0006 * (0.5 + p.depth) + p.phase));
    blit(env, env.sprites.gold, p.x, p.y, p.size, a);
  },
};

/* ---------- golden embers: gentle upward drift, fade out ---------- */

function spawnEmber(p: Particle, w: number, h: number, initial: boolean, centred: boolean) {
  const spread = centred ? 0.2 : 0.35;
  p.x = w * (0.5 + (rnd() + rnd() - 1) * spread);
  p.y = initial ? rnd() * h : h + rnd() * 20;
  p.vy = -(16 + rnd() * 36) * (centred ? 1.3 : 1);
  p.vx = (rnd() - 0.5) * 10;
  p.size = 3 + rnd() * 4;
  p.maxLife = 3 + rnd() * 4;
  p.life = initial ? rnd() * p.maxLife : 0;
  p.phase = rnd() * TAU;
  p.tone = rnd();
}

function updateEmber(p: Particle, dt: number, w: number, h: number, t: number, centred: boolean) {
  p.life += dt;
  p.x += (p.vx + Math.sin(t * 0.001 + p.phase) * 8) * dt;
  p.y += p.vy * dt;
  if (p.life > p.maxLife || p.y < -20) spawnEmber(p, w, h, false, centred);
}

function drawEmber(p: Particle, env: DrawEnv) {
  const k = p.life / p.maxLife;
  const a = Math.sin(Math.PI * Math.min(1, k)) * 0.8;
  const sprite = p.tone > 0.55 ? env.sprites.highlight : env.sprites.saffron;
  blit(env, sprite, p.x, p.y, p.size * (1 - k * 0.5), a);
}

const goldenEmbers: ModeDef = {
  share: 0.25,
  composite: "lighter",
  spawn: (p, w, h, initial) => spawnEmber(p, w, h, initial, false),
  update: (p, dt, w, h, t) => updateEmber(p, dt, w, h, t, false),
  draw: drawEmber,
};

/* ---------- sacred fire: warm base glow + rising embers ---------- */

const sacredFire: ModeDef = {
  share: 0.35,
  composite: "lighter",
  spawn: (p, w, h, initial) => spawnEmber(p, w, h, initial, true),
  update: (p, dt, w, h, t) => updateEmber(p, dt, w, h, t, true),
  draw: drawEmber,
  under(env) {
    const flicker = 0.85 + 0.1 * Math.sin(env.t * 0.0031) + 0.05 * Math.sin(env.t * 0.0097);
    const gw = env.w * 0.9;
    const gh = env.h * 0.7;
    env.ctx.globalAlpha = 0.22 * flicker;
    env.ctx.drawImage(env.sprites.saffron, env.w / 2 - gw / 2, env.h - gh * 0.55, gw, gh);
  },
};

/* ---------- lamp glow: staggered small lights, limited bloom ---------- */

const lampGlow: ModeDef = {
  share: 0.1,
  composite: "lighter",
  spawn(p, w, h, initial, i, n, settled) {
    const rows = n > 10 ? 2 : 1;
    const row = i % rows;
    const cols = Math.ceil(n / rows);
    const col = Math.floor(i / rows);
    p.x = w * (0.06 + (0.88 * (col + 0.5 * row + 0.25)) / cols);
    p.y = h * (row ? 0.94 : 0.86);
    p.delay = ((i * 7) % n) * 0.22; // staggered activation
    p.phase = rnd() * TAU;
    p.life = settled ? 99 : 0;
    p.size = 1;
  },
  update(p, dt) {
    p.life += dt;
  },
  draw(p, env) {
    const on = Math.min(1, Math.max(0, (p.life - p.delay) / 1.2));
    if (on <= 0) return;
    const f = 0.85 + 0.1 * Math.sin(env.t * 0.004 + p.phase) + 0.05 * Math.sin(env.t * 0.0113 + p.phase * 2);
    blit(env, env.sprites.saffron, p.x, p.y, 46 * on, 0.32 * on * f); // halo
    blit(env, env.sprites.highlight, p.x, p.y, 8 * on * f, 0.95 * on); // core
  },
};

/* ---------- vermilion dust: slow, soft, falling ---------- */

const vermilionDust: ModeDef = {
  share: 0.3,
  composite: "source-over",
  spawn(p, w, h, initial) {
    p.depth = rnd();
    p.x = rnd() * w;
    p.y = initial ? rnd() * h : -20;
    p.size = 8 + rnd() * 12;
    p.alpha = 0.05 + rnd() * 0.11;
    p.vy = (5 + rnd() * 12) * (0.5 + p.depth);
    p.vx = (rnd() - 0.5) * 8;
    p.phase = rnd() * TAU;
  },
  update(p, dt, w, h, t) {
    p.x += (p.vx + Math.sin(t * 0.0005 + p.phase) * 6) * dt;
    p.y += p.vy * dt;
    if (p.y > h + 20) {
      p.y = -20;
      p.x = rnd() * w;
    }
  },
  draw(p, env) {
    const a = p.alpha * (0.6 + 0.4 * Math.sin(env.t * 0.0004 + p.phase));
    blit(env, env.sprites.vermilion, p.x, p.y, p.size, a);
  },
};

/* ---------- lotus petals: controlled fall, slow tumble ---------- */

const PETAL_TONES = ["198,164,123", "200,121,61", "166,60,45"];

const lotusPetals: ModeDef = {
  share: 0.12,
  composite: "source-over",
  spawn(p, w, h, initial) {
    p.x = rnd() * w;
    p.y = initial ? rnd() * h : -20;
    p.size = 8 + rnd() * 8;
    p.vy = 14 + rnd() * 18;
    p.vx = (rnd() - 0.5) * 10;
    p.rot = rnd() * TAU;
    p.vr = (rnd() - 0.5) * 0.6;
    p.phase = rnd() * TAU;
    p.tone = Math.floor(rnd() * PETAL_TONES.length);
    p.alpha = 0.35 + rnd() * 0.25;
  },
  update(p, dt, w, h, t) {
    p.x += (p.vx + Math.sin(t * 0.0008 + p.phase) * 14) * dt;
    p.y += p.vy * dt;
    p.rot += p.vr * dt;
    if (p.y > h + 20) {
      p.y = -20;
      p.x = rnd() * w;
    }
  },
  draw(p, env) {
    const { ctx, t } = env;
    const s = p.size;
    const flat = 0.5 + 0.5 * Math.abs(Math.cos(t * 0.0006 + p.phase));
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.scale(flat, 1);
    ctx.fillStyle = `rgb(${PETAL_TONES[p.tone]})`;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.quadraticCurveTo(s * 0.7, -s * 0.2, 0, s);
    ctx.quadraticCurveTo(-s * 0.7, -s * 0.2, 0, -s);
    ctx.fill();
    ctx.restore();
  },
};

/* ---------- light trails: directional, forward-moving ---------- */

const lightTrails: ModeDef = {
  share: 0.1,
  composite: "lighter",
  spawn(p, w, h, initial) {
    p.depth = rnd();
    p.size = 80 + rnd() * 160; // length
    p.x = initial ? rnd() * (w + p.size) - p.size : -p.size;
    p.y = h * (0.35 + rnd() * 0.5);
    p.vx = (40 + rnd() * 70) * (0.6 + p.depth * 0.6);
    p.alpha = 0.1 + rnd() * 0.22;
    p.rot = 1 + rnd() * 1.5; // thickness
  },
  update(p, dt, w, h) {
    p.x += p.vx * dt;
    if (p.x - p.size > w) {
      p.x = -p.size;
      p.y = h * (0.35 + rnd() * 0.5);
    }
  },
  draw(p, env) {
    // fade toward the edges so trails never pop in or out
    const edge = Math.min(1, Math.max(0, Math.min(p.x, env.w - p.x) / (env.w * 0.18)));
    env.ctx.globalAlpha = p.alpha * edge;
    env.ctx.drawImage(env.sprites.streak, p.x - p.size, p.y, p.size, p.rot * 2);
  },
};

export const modes: Record<ParticleMode, ModeDef> = {
  ambientDust,
  goldenEmbers,
  lotusPetals,
  lampGlow,
  vermilionDust,
  sacredFire,
  lightTrails,
};
