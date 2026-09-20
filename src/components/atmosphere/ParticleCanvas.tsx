"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { Intensity } from "@/lib/types";
import { getSprites, modes, particleLimits, type Particle, type ParticleMode } from "./particleModes";

interface Props {
  mode: ParticleMode;
  intensity?: Intensity;
  /** Multiplier on the particle budget. */
  density?: number;
  /** When false the loop is paused entirely. */
  active?: boolean;
  className?: string;
}

const intensityFactor: Record<Intensity, number> = { quiet: 0.45, moderate: 0.75, hero: 1 };

function budget(): number {
  const w = window.innerWidth;
  if (w < 640) return particleLimits.mobile;
  if (w < 1024) return particleLimits.tablet;
  return particleLimits.desktop;
}

function blankParticle(): Particle {
  return { x: 0, y: 0, vx: 0, vy: 0, size: 1, alpha: 1, life: 0, maxLife: 1, phase: 0, rot: 0, vr: 0, depth: 0, delay: 0, tone: 0 };
}

/**
 * Canvas atmosphere layer. Decorative only: content never lives in here.
 * Pauses when off-screen or the tab is hidden, scales with device, and
 * renders a single still frame under prefers-reduced-motion.
 */
export function ParticleCanvas({ mode, intensity = "moderate", density = 1, active = true, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = !!useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const def = modes[mode];
    const sprites = getSprites();
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let started = 0;
    let onScreen = false;

    const env = { ctx, w: 0, h: 0, t: 0, sprites };

    const render = (t: number) => {
      env.w = w;
      env.h = h;
      env.t = t;
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);
      def.under?.(env);
      ctx.globalCompositeOperation = def.composite;
      for (let i = 0; i < particles.length; i++) def.draw(particles[i], env);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.max(4, Math.round(budget() * def.share * intensityFactor[intensity] * density));
      particles = Array.from({ length: n }, blankParticle);
      particles.forEach((p, i) => def.spawn(p, w, h, true, i, n, reduce));

      if (reduce) {
        // still frame: settle positions once, draw once, never animate
        particles.forEach((p) => def.update(p, 0.016, w, h, 2000));
        render(2000);
      }
    };

    const frame = (now: number) => {
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now - started;
      for (let i = 0; i < particles.length; i++) def.update(particles[i], dt, w, h, t);
      render(t);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (reduce || raf || !active || !onScreen || document.hidden || !particles.length) return;
      last = 0;
      if (!started) started = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    build();

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      onScreen ? start() : stop();
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      build();
      if (!reduce) {
        stop();
        start();
      }
    });
    ro.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mode, intensity, density, active, reduce]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
