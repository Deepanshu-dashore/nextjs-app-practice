"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export default function ServicesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Content subtle parallax
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div
      ref={ref}
      className="relative h-dvh overflow-hidden flex items-center justify-center"
    >
      {/* FIXED BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-top -rotate-5 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/services-hero-wave.png')",
          backgroundAttachment: "fixed", // IMPORTANT
        }}
      />

      {/* OVERLAYS (scroll slightly, but bg stays fixed) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT PARALLAX ONLY */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full "
      >
        <div className="max-w-7xl mx-auto  space-y-10">

          {/* LABEL */}
          <div className="w-full ">
            <span className="text-sm  md:text-base font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              WHAT WE DO
            </span>
         
          </div>
   <div className=" w-full my-5  h-px bg-gray-700"></div>
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-xl md:text-5xl   font-normal lg:text-6xl xl:text-6xl text-white mb-6 leading-tight tracking-tight"
          >
            Services Designed To Build, Scale, and Sustain Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Digital Products
            </span>
          </motion.h1>

          {/* SUB TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl font-light leading-relaxed"
          >
            From idea to production, Indidevelopers delivers reliable,
            high-performance solutions for startups and growing businesses
            across web, app, and custom software.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
             <motion.button
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-flex overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                      onClick={() => router.push("/contact")}
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-[#0e0d0d] hover:bg-[#1a1a1a]  px-8 py-4 text-base font-medium text-white backdrop-blur-3xl">
                        <span>Explore Services</span>
                     
                      </span>
                    </motion.button>
    <Link
            href="/careers"
            className="group relative bg-(--color) text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(var(--color),0.3)] hover:shadow-[0_0_30px_rgba(var(--color),0.5)] hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
          > <span className="relative z-10"> View Portfolio</span>
              <svg
                 className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
        
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
