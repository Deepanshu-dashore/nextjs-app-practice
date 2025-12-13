"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Automation System",
    description: "Smart AI-driven workflow automation built for enterprise.",
    img: "https://indidevelopers.com/assets/OurServices-NWxd3.png",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "High-performance multi-vendor e-commerce system.",
    img: "https://indidevelopers.com/assets/OurPortfolio2.png",
  },
  {
    id: 3,
    title: "Mobile App Suite",
    description: "Cross-platform mobile experience with stunning UI.",
    img: "https://indidevelopers.com/assets/OurPortfolio3.png",
  },
];

export default function OurProjects() {
  return (
    <div className="bg-[#030303] text-white overflow-hidden relative">

      {/* FLOATING SHAPES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-700/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-700/20 blur-[140px] animate-pulse"></div>
      </div>

      {/* ---------------- PARALLAX HERO ---------------- */}
      <div
        className="relative h-[70vh] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-bg-dark.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-5xl md:text-7xl font-bold text-center tracking-tight"
        >
          Our Projects
        </motion.h1>

        {/* Animated glow line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1 }}
          className="absolute bottom-16 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>

      {/* ---------------- PROJECT SECTION ---------------- */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          What We’ve Built
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
              className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all shadow-lg"
            >
              {/* NEON BORDER ANIMATION */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 border-2 border-transparent group-hover:border-blue-500 rounded-2xl blur-[2px]"></div>

              {/* IMAGE */}
              <div className="overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* GLASS OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {p.description}
                </p>

                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                  View Project <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------- CTA PARALLAX SECTION -------------- */}
      <div
        className="relative bg-fixed bg-cover bg-center py-32 px-6"
        style={{ backgroundImage: "url('/hero-bg-dark.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <h3 className="text-4xl font-bold mb-6">Want to Build Something Amazing?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Let’s turn your ideas into powerful, scalable solutions.
          </p>
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition shadow-xl text-lg font-semibold">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}
