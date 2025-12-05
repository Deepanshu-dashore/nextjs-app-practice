"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/shared/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServiceSection from "../components/services/ServiceSection";
import ServicesCTA from "../components/services/ServicesCTA";
import { motion } from "motion/react";
import useSectionObserver from "../components/shared/UseObserver";
import { servicesData } from "../data/services";
// const servicesData = [
//   {
//     title: "App Development",
//     description:
//       "We build scalable, high-performance mobile and web apps that feel fast, polished, and intuitive on every device. Using React Native, Flutter, and modern web technologies, we turn your ideas into secure, production-ready applications with smooth UX and clean code.",
//     outcomes: [
//       "Cross-platform apps that ship faster",
//       "Consistent experience across mobile and web",
//       "Architecture ready for future features",
//     ],
//     imageSrc: "/images/services/app-dev.png",
//     id: "app-development",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Indidevelopers crafts responsive, SEO-friendly web applications using frameworks like React, Next.js, Angular, and Vue. From marketing sites to complex dashboards, we focus on performance, accessibility, and maintainable frontends tightly integrated with robust backends.",
//     outcomes: [
//       "Fast-loading, mobile-first interfaces",
//       "Modern stacks aligned to your product needs",
//       "Clean, reusable components for long-term growth",
//     ],
//     imageSrc: "/images/services/web-dev.png",
//     id: "web-development",
//   },
//   {
//     title: "Software & ERP Development",
//     description:
//       "We design and develop custom software and ERP systems that match your real workflows instead of forcing you into rigid templates. Our solutions connect data, automate repetitive tasks, and give teams the visibility they need to make decisions quickly.",
//     outcomes: [
//       "Centralized operations and reporting",
//       "Reduced manual work and errors",
//       "Scalable modules that grow with your business",
//     ],
//     imageSrc: "/images/services/erp.png",
//     id: "software-erp",
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "Our design process starts with understanding your users and business goals. We create clean, consistent design systems, intuitive flows, and pixel-perfect interfaces that make your product easy to use and hard to forget.",
//     outcomes: [
//       "Clear user journeys and improved engagement",
//       "Design systems that keep your brand consistent",
//       "Hand-off ready designs for efficient development",
//     ],
//     imageSrc: "/images/services/ui-ux.png",
//     id: "ui-ux",
//   },
//   {
//     title: "Digital Marketing & Growth",
//     description:
//       "We help your product get discovered and grow through data-driven digital marketing. From SEO-ready builds to landing pages, funnels, and campaign assets, we align tech and marketing so you’re not just launching — you’re growing.",
//     outcomes: [
//       "Better visibility and higher-intent traffic",
//       "Conversion-focused pages and messaging",
//       "Analytics to understand what actually works",
//     ],
//     imageSrc: "/images/services/marketing.png",
//     id: "digital-marketing",
//   },
//   {
//     title: "Game Development",
//     description:
//       "For brands and startups exploring interactive experiences, we build engaging 2D/3D games and gamified products. Using engines like Unity and modern web tech, we focus on performance, smooth gameplay, and memorable visual experiences.",
//     outcomes: [
//       "Cross-platform playable experiences",
//       "Stable performance even on mid-range devices",
//       "Engaging mechanics that keep users coming back",
//     ],
//     imageSrc: "/images/services/game-dev.png",
//     id: "game-development",
//   },
//   {
//     title: "Engineering Practices & Support",
//     description:
//       "Clean code and support are built into every engagement, not sold as add-ons. We use modern engineering practices—version control, CI/CD, code reviews, testing, and monitoring—to keep your product stable as it grows.",
//     outcomes: [
//       "24/7 support options",
//       "Performance optimization and refactoring",
//       "Security reviews and best practices baked in",
//     ],
//     imageSrc: "/images/services/engineering.png",
//     id: "engineering-practices",
//   },
// ];
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};


export default function ServicesPage() {
    const [activeSection, setActiveSection] = useState("");

  useSectionObserver(setActiveSection);
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">

      {/* <Navbar /> */}
    <div
        className="fixed top-0 inset-0  bg-cover bg-top -rotate-5 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/services-hero-wave.png')",
          backgroundAttachment: "fixed",
        }}
      />
      <ServicesHero />

      <div id="services-content" className="relative z-10 bg-black">
        {/* Intro Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed">
              At Indidevelopers, every service is built around three core
              principles:{" "}
              <span className="text-white font-semibold">
                clean architecture
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                measurable impact
              </span>
              , and{" "}
              <span className="text-white font-semibold">
                long‑term partnership
              </span>
              .
            </h2>
            <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
              Whether you need a new product, want to modernize an existing
              system, or scale what you already have, our team helps you move
              fast without breaking quality.
            </p>
          </motion.div>
        </section>

        {/* Service Sections */}
        <div className="space-y-0">
          {servicesData.map((service, index) => (
            <ServiceSection
              key={index}
              index={index}
              {...service}
              scrollToSection={scrollToSection}
              id={service.id}
            />
          ))}
        </div>

        <ServicesCTA />
      </div>

      <Footer />
    </main>
  );
}
