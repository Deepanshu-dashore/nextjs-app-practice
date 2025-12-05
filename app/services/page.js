"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/shared/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServiceSection from "../components/services/ServiceSection";
import ServicesCTA from "../components/services/ServicesCTA";
import { motion } from "motion/react";
import { servicesData } from "../data/services";

export default function ServicesPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* <Navbar /> */}

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
            />
          ))}
        </div>

        <ServicesCTA />
      </div>

      <Footer />
    </main>
  );
}
