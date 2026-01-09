"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import {
 
  FaUsers,
  FaHeart,
  FaRocket,
  FaBrain,
} from "react-icons/fa";
import {
  FaUserFriends,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import {
  FaGraduationCap,
  FaLaptopHouse,
  FaUsersCog,
  FaBalanceScale,
} from "react-icons/fa";
import Footer from "../components/shared/Footer";

const CultureHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-[80dvh] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div   
    // style={{ y }}
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-s-4DOj95b3fu0AzIVSP5YHt4MdPDJOSEg&s')",
      y,
    }}
  > 
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* Content */}
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* OUR CULTURE Label with Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-sm font-bold text-white tracking-[0.3em] uppercase">
              OUR CULTURE
            <div className="h-px max-w-sm bg-linear-to-r from-white/60 to-transparent mt-3" />

            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-6xl lg:text-6xl font-bold text-white mb-3 mt-1 leading-tight tracking-tight"
          >
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Work</span>
          </motion.h1>

          {/* Subline with Gradient */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-6 max-w-4xl font-light leading-relaxed"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Beyond just working together,
            </span>{" "}
            <span className="text-gray-300">
              we build meaningful experiences and empower individual excellence
            </span>
          </motion.p> */}

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-3xl leading-relaxed"
          >
            At Indi, our culture is built on independence, integrity, and impact. We celebrate teams that think differently, execute decisively, and never settle for mediocrity.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

const CoreValuesSection = () => {

const values = [
  {
    title: "People First",
    description:
      "We believe that great work starts with happy, empowered people. We prioritize mental health, work-life harmony, and continuous personal growth.",
    icon: <FaUserFriends size={32} className="text-indigo-500" />,

  },
  {
    title: "Radical Innovation",
    description:
      "No idea is too crazy. We encourage experimentation, failing fast, and learning faster. Your best ideas matter here.",
    icon: <FaLightbulb size={32} className="text-indigo-500" />,

  },
  {
    title: "Ownership Mentality",
    description:
      "We don't just complete tasks—we own outcomes. Every team member has autonomy and accountability to drive high-impact decisions.",
    icon: <FaShieldAlt size={32} className="text-indigo-500" />,

  },
  {
    title: "Inclusive by Design",
    description:
      "Diversity fuels better thinking. We actively build a culture where every voice is heard, valued, and empowered.",
    icon: <FaHandshake size={32} className="text-indigo-500" />,
   
  },
];


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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Values That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Guide Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision we make, from hiring to product development.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-white/20"
            >
              <div
                className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-white shadow-lg`}
              >
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CulturePillarsSection = () => {
  const pillars = [
    {
      title: "Ownership mindset",
      description:
        "We treat every project like ours, from planning to execution to maintenance.",
    },
    {
      title: "Clarity over buzzwords",
      description:
        "Honest conversations about scope, trade-offs, and timelines help us build trust.",
    },
    {
      title: "Quality by default",
      description:
        "Code reviews, testing, and clean practices aren't afterthoughts—they're built in.",
    },
    {
      title: "Long‑term thinking",
      description:
        "We build architectures and relationships designed to evolve with your business.",
    },
  ];

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Decorative Lines */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
              <div className="relative">
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-widest uppercase">
                  Building Excellence
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Operate</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our approach is built on solid principles that ensure we deliver exceptional results every time.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamLifeSection = () => {


const experiences = [
  {
    title: "Learning & Growth",
    description:
      "We invest in our people. Regular workshops, conferences, and skill-building sessions keep everyone sharp and engaged.",
    icon: <FaGraduationCap size={28} className="text-white" />,
  },
  {
    title: "Flexible Work",
    description:
      "Work from home, work from office, or work from a coffee shop. We trust you to do your best work wherever you are.",
    icon: <FaLaptopHouse size={28} className="text-white" />,
  },
  {
    title: "Collaborative Spaces",
    description:
      "Our studio is designed for collaboration, creativity, and connection. Spaces that inspire great thinking.",
    icon: <FaUsersCog size={28} className="text-white" />,
  },
  {
    title: "Work-Life Balance",
    description:
      "We don't glorify burnout. Real productivity comes from rest, recovery, and time for what matters outside work.",
    icon: <FaBalanceScale size={28} className="text-white" />,
  },
];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Life at Indi
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Workplace</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've built an environment where your career grows, your ideas matter, and you actually enjoy showing up.
            </p>
          </motion.div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {experience.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {experience.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CultureCTA = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
            <div className="relative">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-widest uppercase">
                Join Our Team
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to grow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">us?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're always looking for passionate builders, creators, and thinkers who want to make an impact. Explore open positions and see if you're the next addition to our team.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/careers"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 bg-white rounded-full hover:bg-blue-50 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Careers
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
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Let's Connect
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function CompanyCulture() {
  return (
    <main className="bg-black min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <CultureHero />
      <CoreValuesSection />
      <CulturePillarsSection />
      <TeamLifeSection />
      <CultureCTA />
      <Footer />
    </main>
  );
}