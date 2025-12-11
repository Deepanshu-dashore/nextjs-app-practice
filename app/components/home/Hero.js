"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import BlurText from "../shared/BlurText";

function Hero() {
  const router = useRouter();

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Headline */}
        <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1]">
          <BlurText
            key={"born-to-build"}
            text="Born to Build"
            animateBy="words"
            direction="top"
            className="text-center w-fit mx-auto"
          />
          <BlurText
            key={"designed-to-impact"}
            text="Designed to Impact"
            animateBy="words"
            direction="top"
            className="text-center"
          />
          {/* <span className="block mb-2">Born to Build</span> */}
          {/* <span className="block text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500 pb-2"> */}
          {/* </span> */}
        </h1>

        {/* Subheadline/Description */}
   <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide italic">
  Driven By Trust, Defined By Quality
</p>


        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          {/* Primary CTA */}
          <Link
            href="/careers"
            className="group relative bg-(--color) text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(var(--color),0.3)] hover:shadow-[0_0_30px_rgba(var(--color),0.5)] hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Join Us</span>
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={() => router.push("/contact")}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-[#0e0d0d] hover:bg-[#1a1a1a]  px-8 py-4 text-base font-medium text-white backdrop-blur-3xl">
                <span>Explore Services</span>
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </span>
            </motion.button>
            {/* <Link
              href="/services"
              className="group px-8 py-4 rounded-full text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-base font-medium flex items-center gap-2"
            >
              <span>Explore Services</span>
              <svg 
                className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </Link> */}

            {/* Tertiary CTA */}
            <Link
              href="/portfolio"
              className="group px-6 py-4 rounded-full text-gray-300 hover:text-white transition-all duration-300 text-base font-medium flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <svg
                className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
