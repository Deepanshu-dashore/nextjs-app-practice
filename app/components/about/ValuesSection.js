"use client";
import React from "react";
import { motion } from "motion/react";
import {
  FaUserShield,
  FaLightbulb,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

const values = [
  {
    title: "Ownership mindset",
    text: "We treat your product like ours, from planning to maintenance.",
    icon: <FaUserShield size={28} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Clarity over buzzwords",
    text: "Honest conversations about scope, trade‑offs, and timelines.",
    icon: <FaLightbulb size={28} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Quality by default",
    text: "Reviews, testing, and clean code practices in every project.",
    icon: <FaCheckCircle size={28} />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Long‑term thinking",
    text: "Architectures and designs that can evolve with your business.",
    icon: <FaChartLine size={28} />,
    color: "from-orange-500 to-amber-500",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge matching home style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Principles
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                work
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The values that guide every project we build
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-t-2xl`}
                />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-0.5 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.text}
                </p>

                {/* Decorative SVG Pattern */}
                <svg
                  className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="40" fill="url(#gradient)" />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
