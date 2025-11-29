"use client";

import { motion } from "motion/react";
import { FaArrowRight, FaCheckCircle, FaHandshake } from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiUserGroup } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";

const partnershipBenefits = [
  {
    icon: HiUserGroup,
    title: "Enterprise-Grade Expertise",
    description:
      "Seasoned professionals with 5+ years delivering mission-critical solutions for startups and enterprises.",
  },
  {
    icon: HiSparkles,
    title: "Future-Proof Innovation",
    description:
      "Access to cutting-edge tech stacks (React, Next.js, AI/ML, Cloud) and emerging trends before they become mainstream.",
  },
  {
    icon: HiLightningBolt,
    title: "Zero-Downtime Quality",
    description:
      "100% uptime guarantee through rigorous CI/CD pipelines, automated testing, and proactive monitoring.",
  },
  {
    icon: FaShieldAlt,
    title: "Dedicated Partnership Manager",
    description:
      "Single point of contact ensuring seamless communication, priority support, and strategic alignment.",
  },
];

const whatYouGet = [
  {
    title: "Monthly Strategy Reviews",
    description: "Align tech with business goals",
  },
  {
    title: "Priority Feature Development",
    description: "Faster time-to-market",
  },
  {
    title: "Performance Optimization",
    description: "Continuous improvements",
  },
  {
    title: "Security & Compliance Audits",
    description: "Enterprise-grade protection",
  },
  {
    title: "Scalable Infrastructure",
    description: "Grow without limits",
  },
];

export default function TechPartnerSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-zinc-900/50 border border-indigo-500/30 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Partner Program
            </span>
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Strategic Technology{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Partnership
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scale your business with a dedicated tech ally who understands your
            roadmap, shares your vision, and delivers continuous value.
          </p>
        </motion.div>

        {/* Two Column Layout - Partnership Model & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Why Choose Our Partnership Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Why Choose Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Partnership Model?
              </span>
            </h3>
            <p className="text-gray-400 mb-8 text-sm">
              Enterprise-grade solutions backed by proven expertise
            </p>
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-5 border border-indigo-500/10 hover:border-indigo-500/40 transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-3">
                    <benefit.icon className="text-2xl text-indigo-400 group-hover:text-purple-400 transition-colors duration-300 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              What You Get With Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Partnership
              </span>
            </h3>
            <p className="text-gray-400 mb-8 text-sm">
              Comprehensive support and proven results that drive your business
              forward
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <FaCheckCircle className="text-indigo-400 text-lg mt-1 shrink-0 group-hover:text-purple-400 transition-colors duration-300" />
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats - Compact Version */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-zinc-900/30 rounded-xl border border-indigo-500/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-xs text-gray-400">Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-400">On-Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-xs text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button - Centered Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] cursor-pointer">
            <FaHandshake className="text-xl" />
            BECOME OUR TECH PARTNER
          </button>
        </motion.div>
      </div>

      {/* Background Decorative Elements - Subtle */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
