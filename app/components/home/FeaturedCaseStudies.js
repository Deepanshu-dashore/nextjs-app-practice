"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from "react-icons/fa";
import Image from "next/image";
import RotatingText from "../shared/RotatingText";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Revamp",
    category: "E-Commerce",
    description:
      "Delivered a scalable, user-friendly online marketplace that boosted client sales by 40% within six months by integrating modern tech and seamless UX designs.",
    problem: "Outdated UI and slow performance leading to high bounce rates.",
    solution: "Implemented Next.js for speed and a modern design system.",
    tech: ["React", "Node.js", "AWS"],
    image: "/images/ecommerce_platform_revamp.png",
    link: "#",
    color: "#4ECDC4",
  },
  {
    id: 2,
    title: "Custom Billing System",
    category: "FinTech",
    description:
      "Developed a tailored solution compliant with GST regulations, simplifying business operations and reducing manual errors drastically.",
    problem: "Manual billing errors and compliance issues.",
    solution: "Automated tax calculations and real-time reporting.",
    tech: ["Next.js", "PostgreSQL", "Docker"],
    image: "/images/custom_billing_system.png",
    link: "#",
    color: "#915EFF",
  },
  {
    id: 3,
    title: "Hotel Management Software",
    category: "Hospitality",
    description:
      "Implemented a multi-panel system with real-time notification features to optimize daily workflows, improving customer satisfaction scores.",
    problem: "Inefficient room booking and staff coordination.",
    solution: "Real-time dashboard for bookings and staff alerts.",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    image: "/images/hotel_management_software.png",
    link: "#",
    color: "#FFD93D",
  },
  {
    id: 4,
    title: "Lead Management CRM",
    category: "SaaS",
    description:
      "Engineered a flexible, role-based system facilitating efficient lead tracking and notification, accelerating client acquisition cycles.",
    problem: "Lost leads due to poor tracking and follow-up.",
    solution: "Automated lead assignment and follow-up reminders.",
    tech: ["React", "Python", "Redis"],
    image: "/images/lead_management_crm.png",
    link: "#",
    color: "#FF6B35",
  },
  {
    id: 5,
    title: "ERP System Implementation",
    category: "Enterprise",
    description:
      "Designed scalable ERP modules with real-time analytics, automated workflows, and user-friendly dashboards enabling data-driven decision making.",
    problem: "Siloed data and manual reporting processes.",
    solution: "Unified data platform with automated analytics.",
    tech: ["Angular", "Java", "Oracle"],
    image: "/images/erp_system_implementation.png",
    link: "#",
    color: "#EC4899",
  },
];

export default function FeaturedCaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const currentCase = caseStudies[currentIndex];
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <section className="relative py-20 bg-black overflow-hidden flex items-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </span>
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore how we've helped businesses transform and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Large Image */}
          <div className="lg:col-span-6 relative h-[300px] md:h-[400px] w-full">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ y: direction > 0 ? -100 : 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: direction > 0 ? 100 : -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <Image
                  src={currentCase.image}
                  alt={currentCase.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right Side: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20 pl-0 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {currentCase.title}
                </h2>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  {currentCase.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-6">
                  <div>
                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Problem
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {currentCase.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={currentCase.link}
                  className="inline-flex items-center gap-2 text-white font-semibold group transition-colors duration-300"
                >
                  Read more
                  <span className="bg-purple-600 p-1 rounded-sm group-hover:bg-purple-700 transition-colors">
                    <FaArrowRight className="text-xs" />
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Section - Below the card/content */}
        <div className="flex justify-between items-center mt-8 lg:mt-12 px-4 lg:px-8">
          {/* Left: RotatingText Component */}
          <div className="flex-1 flex gap-2 items-center -ml-8 my-auto">
            <h2 className="text-lg md:text-lg font-bold text-white leading-tight">
              Real Problems, Real solutions
            </h2>
            <RotatingText
              texts={[
                "Digital Commerce Excellence",
                "Financial Technology Innovation",
                "Hospitality Tech Solutions",
                "Enterprise SaaS Platform",
                "Enterprise Resource Planning",
              ]}
              rotationInterval={3000}
              transition={{ duration: 0.5 }}
              mainClassName="text-lg md:text-lg font-semibold text-white bg-linear-to-r from-(--color)/20 via-indigo-400/20 to-purple-400/20 w-fit  py-0.5 sm:py-1 md:py-1.5 px-2 sm:px-2 md:px-3 rounded-sm"
              splitBy="words"
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              staggerDuration={0.03}
              staggerFrom={"last"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            />
          </div>

          {/* Right: Counter and Arrows */}
          <div className="flex items-center gap-4">
            {/* Arrow Buttons */}
            <button
              onClick={() => {
                setIsPlaying(false);
                prevSlide();
              }}
              className="w-12 h-12 flex cursor-pointer items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
            >
              <FaArrowLeft />
            </button>
            {/* Counter */}
            <span className="text-white font-mono text-base">
              {currentIndex + 1}/{caseStudies.length}
            </span>
            <button
              onClick={() => {
                setIsPlaying(false);
                nextSlide();
              }}
              className="w-12 h-12 flex cursor-pointer items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Next Slide Preview (Far Right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[10%] h-[40%] hidden 2xl:block opacity-30 pointer-events-none">
        <div className="relative w-full h-full rounded-l-3xl overflow-hidden">
          <Image
            src={nextCase.image}
            alt="Next"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
