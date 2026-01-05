import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight, FaLightbulb } from "react-icons/fa";

export default function TechPartnerSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const stats = [
    { value: "24/7", label: "Support Available" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100%", label: "Quality Assurance" },
    { value: "25+", label: "Technologies" },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-[#050505] text-white px-6 lg:px-20 overflow-hidden group/section"
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) =>
              `radial-gradient(800px circle at ${x}px ${y}px, rgba(168,85,247,0.08), transparent 40%)`,
          ),
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10"
        >
          {/* Badge */}
          <div className="inline-flex  items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.5 2C11.5 1.17157 12.1716 0.5 13 0.5C13.8284 0.5 14.5 1.17157 14.5 2V4.5C14.5 5.32843 13.8284 6 13 6C12.1716 6 11.5 5.32843 11.5 4.5V2Z" />
              <path d="M13 7C11.067 7 9.5 8.567 9.5 10.5V13H6.5C5.39543 13 4.5 13.8954 4.5 15V18C4.5 19.1046 5.39543 20 6.5 20H9.5V22C9.5 23.1046 10.3954 24 11.5 24H13.5C14.6046 24 15.5 23.1046 15.5 22V20H18.5C19.6046 20 20.5 19.1046 20.5 18V15C20.5 13.8954 19.6046 13 18.5 13H15.5V10.5C15.5 8.567 13.933 7 12 7H13Z" />
              <path d="M2 8C2 7.44772 2.44772 7 3 7H5C5.55228 7 6 7.44772 6 8V10C6 10.5523 5.55228 11 5 11H3C2.44772 11 2 10.5523 2 10V8Z" />
              <path d="M19 7C18.4477 7 18 7.44772 18 8V10C18 10.5523 18.4477 11 19 11H21C21.5523 11 22 10.5523 22 10V8C22 7.44772 21.5523 7 21 7H19Z" />
            </svg>
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Partner Program
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to build{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              together?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
            Let's discuss your product, roadmap, and how we can become your
            long-term tech partner.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT SECTION */}

          <div className="lg:col-span-6 flex flex-col justify-center space-y-10">
            <h3 className="text-gray-300 font-bold uppercase tracking-widest text-sm ml-1">
              Features
            </h3>

            {/* 2x2 FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Expert Team", d: "Industry veterans at your disposal." },
                { t: "Innovation First", d: "AI-ready modern tech stack." },
                { t: "Quality Guaranteed", d: "Zero-compromise development." },
                {
                  t: "Scalable Systems",
                  d: "Built to grow with your business.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-4 p-6 rounded-2xl 
                   bg-white/5 border border-white/10 
                   hover:border-purple-500/30 transition"
                >
                  <FaCheckCircle className="text-purple-400 text-2xl mt-1 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white">{f.t}</h4>
                    <p className="text-sm text-gray-300 mt-1">{f.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-flow-col sm:auto-cols-fr">
              <Link
                href="/tech-partner"
                className="group relative bg-transparent border border-indigo-500/60 text-white px-8 py-4 rounded-full text-base font-semibold
  transition-all duration-300
  shadow-[0_0_15px_rgba(99,102,241,0.25)]
  hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
  hover:-translate-y-1
  flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Explore Program</span>

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

                {/* Hover glass fill */}
                <div className="absolute inset-0 bg-indigo-500/15 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/tech-partner#apply"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Apply for Partnership
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION*/}
          <div className="lg:col-span-6 grid grid-cols-2 justify-center gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                // whileHover={{ y: }}
                className={`
        relative p-6  flex flex-col justify-center items-start 
        bg-gradient-to-br from-gray-900/40 to-black/50
        backdrop-blur-xl

        border border-white/10 rounded-2xl
      `}
              >
                <span className="text-4xl font-black">{stat.value}</span>

                <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-transparent my-3" />

                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
