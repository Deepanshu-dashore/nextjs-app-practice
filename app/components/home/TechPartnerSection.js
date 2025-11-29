"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import FloatingLines from "../shared/FloatingLines";

export default function TechPartnerSection() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[500px] md:h-[550px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: "url('/images/tech-partner-abstract.png')",
        // }}
      >
        {/* Dark Overlay - Subtle to let neon shine through */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute z-10 inset-0 bg-linear-to-t from-gray-900/80 via-black/30 to-gray-900/30" />
        <div
          className="insert-0 z-0"
          style={{ width: "100%", height: "600px", position: "absolute" }}
        >
          <FloatingLines
            enabledWaves={["middle", "top", "bottom", "top"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[10, 15, 20, 10]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[0, 6, 4]}
            bendRadius={50.0}
            bendStrength={-0.12}
            // interactive={true}
            parallax={true}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-sm font-medium text-indigo-300">
                Strategic Partnership
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight whitespace-nowrap">
              Tech Partner{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                Program
              </span>
            </h2>

            <h3 className="text-xl sm:text-2xl text-gray-200 font-medium mb-4 leading-snug max-w-2xl mx-auto">
              Build and scale your products with a dedicated tech team.
            </h3>

            <p className="text-gray-200 text-lg mb-12 max-w-2xl mx-auto">
              From prototypes to production systems, we partner with you for the
              long term.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Primary CTA - Explore Program */}
              <Link
                href="/tech-partner"
                className="group relative bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Explore Program</span>
                {/* Improved Compass/Explore SVG */}
                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              {/* Secondary CTA - Become Partner */}
              <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={() => router.push("/tech-partner#apply")}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-[#0e0d0d] hover:bg-[#1a1a1a] px-8 py-4 text-base font-medium text-white backdrop-blur-3xl">
                  <span>Become Partner</span>
                  <FaArrowRight className="text-gray-300 group-hover:text-white transition-colors" />
                </span>
              </motion.button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-400">Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-400">On-Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
