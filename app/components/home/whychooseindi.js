

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
              `radial-gradient(800px circle at ${x}px ${y}px, rgba(168,85,247,0.08), transparent 40%)`
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
                <div className="inline-flex  items-center gap-2 px-4 py-2 mb-3 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
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

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Ready to build{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                    together?
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-gray-200 mb-5 leading-relaxed">
                  Let's discuss your product, roadmap, and how we can become
                  your long-term tech partner.
                </p>

             
              </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
{/* LEFT SECTION */}
<div className="lg:col-span-6 flex flex-col justify-center gap-10">

  {/* SECTION LABEL */}
  <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
    Features
  </h3>

  {/* FEATURES LIST */}
  <div className="grid grid-cols-1  gap-y-6 gap-x-10">
    {[
      { t: "Expert Team", d: "Industry veterans guiding every step." },
      { t: "Innovation First", d: "Modern, AI-ready tech stack." },
      { t: "Quality Assured", d: "Clean, reliable & tested code." },
      { t: "Scalable Systems", d: "Built to grow with your business." },
    ].map((f, i) => (
      <div key={i} className="flex gap-4">
        <FaCheckCircle className="text-indigo-400 text-lg mt-1 shrink-0" />

        <div>
          <h4 className="text-white font-semibold leading-tight">
            {f.t}
          </h4>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            {f.d}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* ACTION BUTTONS */}
  <div className="flex flex-col sm:flex-row gap-4 pt-4">

    {/* PRIMARY */}
    <Link
      href="/tech-partner"
      className="inline-flex items-center justify-center gap-2
                 px-18 py-4
                 border border-white/30
                 text-white font-semibold
                 rounded-lg
                 hover:bg-indigo-500 hover:border-indigo-500
                 transition"
    >
      Explore Program
      <FaArrowRight className="text-sm" />
    </Link>

    {/* SECONDARY */}
    <Link
      href="/tech-partner#apply"
      className="inline-flex items-center justify-center gap-2
                 px-14 py-4
                  rounded-lg
                 bg-white text-black font-semibold
                 hover:bg-gray-100
                 transition"
    >
      Apply for Partnership
      <FaArrowRight className="text-sm" />
    </Link>

  </div>

</div>



          {/* RIGHT SECTION*/}
    <div className="lg:col-span-6 grid grid-cols-2 justify-center gap-0">
  {stats.map((stat, i) => (
    <motion.div
      key={i}
      // whileHover={{ y: }}
      className={`
        relative p-6 h-44 w-68 flex flex-col justify-center items-start 
        bg-gradient-to-br from-gray-900/40 to-black/50
        backdrop-blur-xl

        border border-white/10 rounded-2xl
      `}
    >
      <span className="text-4xl font-black">
        {stat.value}
      </span>

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
