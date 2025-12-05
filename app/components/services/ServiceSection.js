"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceSection({
  title,
  description,
  problemStatement,
  approach,
  technologies,
  keyFeatures,
  outcomes,
  engagementModel,
  index,
  imageSrc,
  slug,
}) {
  const isEven = index % 2 === 0;
  const [activeTab, setActiveTab] = useState("problem");

  const tabs = [
    { id: "problem", label: "Problem", content: problemStatement },
    { id: "approach", label: "Approach", content: approach },
    { id: "technologies", label: "Technologies", content: technologies },
    { id: "features", label: "Features", content: keyFeatures },
    { id: "outcomes", label: "Outcomes", content: outcomes },
    { id: "engagement", label: "Engagement", content: engagementModel },
  ];

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
          className={`flex flex-col md:flex-row gap-12 md:gap-20 items-start ${
            isEven ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Text Content */}
          <div className="flex-1 w-full">
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

              {/* Accordion Tabs */}
              <div className="space-y-6">
                {/* Tab Buttons */}
                <div className="flex gap-2 flex-wrap">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                          : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Accordion Content */}
                <div className="relative min-h-[180px] bg-white/5 rounded-2xl p-6 border border-white/10">
                  <AnimatePresence mode="wait">
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.id && (
                          <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            {typeof tab.content === "string" ? (
                              <p className="text-gray-300 leading-relaxed">
                                {tab.content}
                              </p>
                            ) : (
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {tab.content?.map((item, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: i * 0.05,
                                    }}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] shrink-0" />
                                    <span className="text-gray-300 text-sm md:text-base">
                                      {item}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>

                {/* Detail Link */}
                <div className="pt-4">
                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors group"
                  >
                    View Full Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual/Abstract Representation */}
          <div className="flex-1 w-full sticky top-24">
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
