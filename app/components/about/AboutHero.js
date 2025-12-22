"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-dvh overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
     
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* WHO WE ARE Label with Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-bold text-white tracking-[0.3em] uppercase">
              WHO WE ARE
            </span>
          
          </motion.div>
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-7xl font-bold text-white mb-5 mt-2 leading-tight tracking-tight"
          >
            About Us
          </motion.h1>

          {/* Subline with Gradient */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-6 max-w-4xl font-light leading-relaxed"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Innovation meets technology,
            </span>{" "}
            <span className="text-gray-300">
              crafted by independent builders rooted in India
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            We're a team of independent builders crafting impactful software,
            web, and mobile solutions. Driven by curiosity and product thinking,
            we ship digital experiences that actually move businesses forward.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
