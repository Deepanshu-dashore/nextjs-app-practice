"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function AboutCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-t border-white/10 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
            <div className="relative">
              <span className="text-sm font-bold text-blue-400 tracking-widest uppercase">
                Together beyond borders
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              meaningful together
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're validating an idea, modernizing an existing system,
            or scaling a live product, we'd love to be your tech partner from
            day one.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 bg-white rounded-full hover:bg-blue-50 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Talk to the team
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white/20 rounded-full hover:border-indigo-500/50 hover:bg-white/5 hover:-translate-y-1 backdrop-blur-sm"
            >
              View our work
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
