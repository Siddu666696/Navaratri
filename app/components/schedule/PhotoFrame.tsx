"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type MotionStyle } from "framer-motion";
import { TempleSilhouette } from "../architecture/TempleSilhouette";

interface Props {
  src?: string;
  alt: string;
  /** Parallax / push-in transforms applied to the photograph only. */
  mediaStyle?: MotionStyle;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Real photography is the hero. If no photograph exists yet (or it fails
 * to load) a quiet stone panel is shown instead: no cartoons, no
 * placeholder art. Drop files into /public/images to fill the slots.
 */
export function PhotoFrame({ src, alt, mediaStyle, priority, sizes = "(min-width: 1000px) 45vw, 92vw", className = "" }: Props) {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  return (
    <div className={`photo ${className}`}>
      <div className="photo__fallback" aria-hidden="true">
        <TempleSilhouette className="photo__silhouette" />
      </div>
      {src && status !== "error" && (
        <motion.div className="photo__media" style={mediaStyle}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`photo__img ${status === "ok" ? "is-loaded" : ""}`}
            onLoad={() => setStatus("ok")}
            onError={() => setStatus("error")}
          />
        </motion.div>
      )}
      <div className="photo__shade" aria-hidden="true" />
    </div>
  );
}
