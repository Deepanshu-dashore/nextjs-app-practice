"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectShowcases = [
  {
    id: 1,
    category: "E-COMMERCE",
    title: "Platform Revamp",
    description:
      "Complete redesign and optimization of a multi-vendor marketplace",
    image: "/images/ecommerce_platform_revamp.png",
    gradient: "from-blue-900/80 to-black",
  },
  {
    id: 2,
    category: "ENTERPRISE",
    title: "ERP Implementation",
    description: "Custom ERP system for manufacturing and inventory management",
    image: "/images/erp_system_implementation.png",
    gradient: "from-purple-900/80 to-black",
  },
  {
    id: 3,
    category: "HOSPITALITY",
    title: "Hotel Management",
    description: "Comprehensive booking and operations management solution",
    image: "/images/hotel_management_software.png",
    gradient: "from-green-900/80 to-black",
  },
  {
    id: 4,
    category: "FINTECH",
    title: "Billing System",
    description: "Automated billing and invoicing platform with GST compliance",
    image: "/images/custom_billing_system.png",
    gradient: "from-orange-900/80 to-black",
  },
  {
    id: 5,
    category: "CRM",
    title: "Lead Management",
    description: "Sales pipeline and customer relationship management system",
    image: "/images/lead_management_crm.png",
    gradient: "from-pink-900/80 to-black",
  },
  {
    id: 6,
    category: "WEB APP",
    title: "Custom Solutions",
    description: "Tailored web applications for unique business needs",
    image: "/images/Software-DFbspHu0.jpg",
    gradient: "from-indigo-900/80 to-black",
  },
];

export default function CommunitySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectShowcases.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + projectShowcases.length) % projectShowcases.length
    );
  };

  // Get 4 cards for the current view
  const visibleCards = [
    projectShowcases[currentIndex % projectShowcases.length],
    projectShowcases[(currentIndex + 1) % projectShowcases.length],
    projectShowcases[(currentIndex + 2) % projectShowcases.length],
    projectShowcases[(currentIndex + 3) % projectShowcases.length],
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="mx-auto px-16">
        {/* Header Section - Single Line */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold leading-tight mb-3"
            >
              Indidevelopers in the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                community
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              Real projects that made a difference
            </motion.p>
          </div>

          {/* Navigation Arrows with Counter */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevCard}
              className="w-14 h-14 cursor-pointer rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="font-mono text-xl text-white">
              <span className="text-indigo-400">0{currentIndex + 1}</span>
              <span className="text-gray-600 mx-2">/</span>
              <span className="text-gray-400">0{projectShowcases.length}</span>
            </div>

            <button
              onClick={nextCard}
              className="w-14 h-14 cursor-pointer rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cards Grid - 4 at a time */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleCards.map((card, index) => (
                <motion.div
                  key={`${card.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Label */}
                    <div>
                      <span className="inline-block text-xs font-bold tracking-widest text-white/60 uppercase">
                        {card.category}
                      </span>
                    </div>

                    {/* Bottom Text */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
