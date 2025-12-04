"use client";
import React from "react";
import { motion } from "motion/react";

export default function IdentitySection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left: Content */}
          <div className="flex-1 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">
                What “Indi” means to us
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                “Indi” stands for{" "}
                <span className="text-white font-semibold">
                  independence in creativity
                </span>{" "}
                and{" "}
                <span className="text-white font-semibold">
                  Indian excellence in technology
                </span>
                . We work like a compact product team: close to the problem,
                fast in execution, and honest about what will actually work.
                Every project is an opportunity to solve something real, not
                just ship another template.
              </p>
            </motion.div>
          </div>

          {/* Right: Abstract Image/Logo Placeholder */}
          <div className="flex-1 w-full order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto flex items-center justify-center"
            >
              {/* Animated Background Layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[82%] h-11/12 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[75%] h-[70%] border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-[60%] h-[60%] bg-linear-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[82%] h-11/12 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                <div className="absolute w-[75%] h-[70%] border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite]" />
              </div>

              {/* Central Logo Container */}
              <div className="relative z-10 w-60 h-60 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <img
                  src="/images/indi-Logo-white.png"
                  alt="Indi Logo"
                  className="w-52 h-auto object-contain opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
