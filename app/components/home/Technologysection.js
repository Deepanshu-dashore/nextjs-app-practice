"use client";
import React from "react";
import { motion } from "motion/react";
import LogoLoop from "@/app/components/LogoLoop";
import { servicesData } from "@/app/data/services";

export default function TechnologySection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-accent-foreground/20 w-full">

      {/* Background Parallax Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
        />
      </motion.div>

      {/* Section Heading */}
      <div className="text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
          bg-purple-500/10 border border-purple-500/20 mb-4 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-300">Technology</span>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-white 
            bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
            text-transparent bg-clip-text"
        >
          Tools & Frameworks We Use
        </motion.h3>

        <p className="text-gray-400 max-w-2xl mx-auto">
          A complete blend of coding and non-coding technologies used in this service.
        </p>
      </div>

      {/* TECH + NON-TECH */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="gap-10 relative z-10 space-y-10"
      >

        {/* TECH SECTION */}
        <div className="space-y-2 flex justify-center items-center flex-col mt-5">
          <h2 className="text-sm text-white tracking-wide">Tech Technologies</h2>
          <div className="w-20 h-0.5 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-5"></div>

        <LogoLoop
  logos={(servicesData[0]?.technologies ?? []).map(item => ({
    node: (
      <div className="flex items-center gap-2 p-8 bg-white/5  font-bold rounded-lg min-w-48 justify-center">
        {item.icon}
        <span className="text-white/90 text-sm font-medium">{item.name}</span>
      </div>
    ),
    title: item.name
  }))}
  speed={40}
  direction="left"
  gap={50}
  logoHeight={50}
  fadeOut
  fadeOutColor="#000"
/>

        </div>

        {/* NON-TECH SECTION */}
        <div className="space-y-2 flex justify-center items-center flex-col mt-5">
          <h2 className="text-sm text-white tracking-wide">Non-Code Technologies</h2>
          <div className="w-20 h-0.5 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-5"></div>

       <LogoLoop
  logos={(servicesData[0]?.nonTech ?? []).map(item => ({
    node: (
      <div className="flex items-center gap-2 p-8 bg-white/5 font-bold rounded-lg min-w-48 justify-center">
        {item.icon}
        <span className="text-white/90 text-sm font-medium">{item.name}</span>
      </div>
    ),
    title: item.name
  }))}
  speed={40}
  direction="right"
  gap={50}
  logoHeight={50}
  fadeOut
  fadeOutColor="#000"
/>

        </div>
      </motion.div>
    </section>
  );
}
