"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const tabs = [
  {
    id: "innovative-impact",
    label: "Innovative Impact",
    title: "Innovative Impact",
    description:
      "Our solutions are designed to solve real-world problems, creating measurable positive change for businesses and users alike. We bring fresh ideas that drive success and set industry standards.",
    image: "/images/innovative-impact.jpg",
  },
  {
    id: "cutting-edge",
    label: "Cutting-Edge Development",
    title: "Cutting-Edge Development",
    description:
      "Utilizing the latest technologies and best practices, our development team delivers robust, scalable, and high-performance products tailored to your needs. We prioritize code quality, security, and user experience.",
    image: "/images/cutting-edge-development.jpg",
  },
  {
    id: "unmatched-support",
    label: "Unmatched Support",
    title: "Unmatched Support",
    description:
      "Our dedicated support team is available 24/7 to assist you at every stage of your journey. From onboarding to troubleshooting, we ensure your experience is smooth and stress-free.",
    image: "/images/unmatched-support.jpg",
  },
  {
    id: "accelerated-growth",
    label: "Accelerated Growth",
    title: "Accelerated Growth",
    description:
      "We focus on continuous improvement and career advancement for our clients and partners, ensuring progressive development and long-term value creation.",
    image: "/images/accelerated-growth.jpg",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What makes us unique
            </span>
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover what sets us apart
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-6 py-3 rounded-full cursor-pointer text-sm sm:text-base font-medium
                transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }
              `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10"
            >
              {/* Image */}
              <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                <Image
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {activeTabData.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {activeTabData.description}
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
