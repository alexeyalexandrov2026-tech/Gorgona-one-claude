"use client";

import { Parallax } from './Motion';
import { motion } from 'framer-motion';

const easeLux = [0.22, 1, 0.36, 1];

// Cinematic full-bleed hero shared by the section landings. The accent color
// is inherited from the nearest `.theme-*` wrapper via CSS custom properties.
export function SectionHero({ eyebrow, title, subtitle, image, kicker }) {
  return (
    <section className="lux-hero full-bleed -mt-[60px] flex min-h-[68vh] items-end">
      <div className="lux-hero__bg">
        <Parallax distance={70} className="h-full">
          {image ? (
            <img src={image} alt="" className="h-[115%] w-full object-cover opacity-80" />
          ) : (
            <div className="h-full w-full bg-[#0a0a0a]" />
          )}
        </Parallax>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
      <div className="lux-hero__grain" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeLux }}
            className="lux-eyebrow"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: easeLux }}
          className="lux-display mt-5 text-5xl sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {kicker && <p className="lux-caption-upper mt-4">{kicker}</p>}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeLux }}
            className="lux-lede mt-6 text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
