
"use client";

import { useState, useRef, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const scrollTimeout = useRef(null);

  const scrollContainerRef = useRef(null);

  // Function to handle scroll synchronization
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = activeTab * scrollContainerRef.current.offsetHeight;
      scrollContainerRef.current.scrollTo({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeTab]);


  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
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
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover what sets us apart
          </p>
        </div>



      <div className="max-w-9xl mx-auto">
     
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SECTION: Tab Navigation */}
          <div className="md:col-span-12 lg:col-span-6 space-y-4 lg:order-1  md:order-2 sm:order-2">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onMouseEnter={() => setActiveTab(index)}
                onClick={() => setActiveTab(index)}
                className="group cursor-pointer relative"
              >
                <div className="flex items-center gap-6 py-6 border-b border-white/10">
                  {/* Active Indicator Number */}
                  <span className={`text-sm font-mono transition-colors duration-300 ${
                    activeTab === index ? "text-indigo-500" : "text-gray-500"
                  }`}>
                    0{index + 1}
                  </span>

                  <div className="flex flex-col">
                    <h3 className={`text-2xl md:text-3xl font-semibold transition-all duration-300 ${
                      activeTab === index ? "text-white translate-x-2" : "text-gray-500"
                    }`}>
                      {tab.label}
                    </h3>
                    
                    {/* Expandable Description like Antimatter */}
                    <AnimatePresence>
                      {activeTab === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs">
                            {tab.description}
                          </p>
                          <div className="flex gap-2 mt-4">
                            {tab.tags?.map(tag => (
                              <span key={tag} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Background Highlight */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-white/5 -z-10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SECTION: Scrolling Image Display */}
          <div className="md:col-span-12 lg:col-span-6 sticky top-24 lg:order-1 md:order-1 sm:order-1">
            <div 
              ref={scrollContainerRef}
              className="h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden no-scrollbar shadow-2xl border border-white/5"
              style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none' }}
            >
              {tabs.map((tab, index) => (
                <div 
                  key={tab.id}
                  className="h-full w-full flex-shrink- relative transition-transform duration-700"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ease-out ${
                        activeTab === index ? "scale-100" : "scale-110 blur-sm"
                    }`}
                    priority
                  />
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to- from-black/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
  
      </div>
    </section>
  );
}
