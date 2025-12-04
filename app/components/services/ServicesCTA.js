"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function ServicesCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black to-blue-950/20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build what’s next?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Share your idea, current product, or roadmap, and we’ll help you
            choose the right stack, scope, and plan to ship with confidence.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1"
          >
            Apply for a Project Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
