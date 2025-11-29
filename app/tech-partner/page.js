"use client";

import { motion } from "motion/react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHandshake,
  FaPaperPlane,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiUserGroup } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { useState } from "react";

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

export default function TechPartnerPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    type: "Technology Partner",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    alert("Thank you for your interest! We will get back to you soon.");
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-black min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Strategic Technology{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Partnership
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Scale your business with a dedicated tech ally who understands
              your roadmap, shares your vision, and delivers continuous value.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 sm:px-6 lg:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Partnership Model?
            </h2>
            <p className="text-gray-400">
              Enterprise-grade solutions backed by proven expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300">
                    <benefit.icon className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-4 sm:px-6 lg:px-20 mb-32 relative z-10 bg-zinc-900/30 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What You Get With Our{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  Partnership
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just write code; we become an extension of your team.
                Our partnership model is designed to provide comprehensive
                support and proven results that drive your business forward.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Retention</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">On-Time</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-indigo-500/30 transition-colors"
                >
                  <FaCheckCircle className="text-indigo-400 text-xl shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="px-4 sm:px-6 lg:px-20 mb-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Become a Tech Partner
              </h2>
              <p className="text-gray-400">
                Ready to scale your technology? Fill out the form below and
                let's start the conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Role / Position
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formState.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="CTO / Founder"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Partnership Type
                </label>
                <select
                  name="type"
                  value={formState.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                >
                  <option>Technology Partner</option>
                  <option>Strategic Alliance</option>
                  <option>Reseller / Referral</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Message / Requirements
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaPaperPlane />
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
