"use client";
import React from "react";
import { motion } from "motion/react";

export default function ServiceSection({
  title,
  description,
  outcomes,
  index,
  imageSrc,
}) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-20 md:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradients */}
      <div
        className={`absolute top-1/2 ${
          isEven ? "left-0" : "right-0"
        } -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${
            isEven ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {title}
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Key Outcomes
                </h3>
                <ul className="space-y-4">
                  {outcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-gray-300">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Visual/Abstract Representation */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center group hover:border-white/20 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-colors duration-500" />

              {/* Image Representation */}
              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className={`w-32 h-32 md:w-48 md:h-48 rounded-full bg-linear-to-tr from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse`}
                  />
                )}

                {!imageSrc && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl md:text-9xl font-bold text-white/5 select-none">
                      {index + 1}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
