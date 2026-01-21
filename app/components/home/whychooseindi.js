

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

                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
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
       <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">

{/* LEFT SECTION */}
<div className="md:col-span-6 flex flex-col gap-6 lg:gap-10 relative pl-6 lg:pl-10">

  {/* LEFT VERTICAL LINE */}
  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500/70 via-indigo-500/70 to-indigo-500/70" />

  {/* HEADING */}
  <div>
  
  </div>

  {/* FEATURES LIST */}
  <div className="grid grid-cols-1 gap-y-8">
    {[
  { t: "Expert Team", d: "Experienced professionals delivering guidance at every project stage" },
  { t: "Innovation First", d: "Future ready solutions using modern AI powered technology" },
  { t: "Quality Assured", d: "Reliable well tested code meeting high industry standards" },
  { t: "Scalable Systems", d: "Flexible systems designed to scale with business growth" },


    ].map((f, i) => (
      <div key={i} className="flex gap-5 items-start">
        
        {/* BIG CHECK ICON */}
        <FaCheckCircle className="text-indigo-400 text-2xl mt-1 shrink-0" />

        <div>
          <h4 className="text-white text-lg font-semibold leading-tight">
            {f.t}
          </h4>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            {f.d}
          </p>
        </div>
      </div>
    ))}
  </div>

</div>

       {/* RIGHT */}
<div className="md:col-span-6 flex ">

  <motion.div
    className="
     w-full max-w-[460px] lg:max-w-[560px] p-6 lg:p-8

      bg-gradient-to-br from-black via-purple-900/10 to-gray-900
      backdrop-blur-xl
      border border-white/10
      rounded-3xl
      shadow-xl shadow-gray-900/50
    "
  >
    {/* STATS GRID INSIDE ONE CARD */}
    <div className="grid grid-cols-2 gap-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center text-center"
        >
          <span className="text-4xl font-black text-white">
            {stat.value}
          </span>

          <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-transparent my-3" />

          <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

 {/* CTA BUTTON */}
<div className="flex justify-center mt-6">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      px-6 sm:px-8 py-2.5 sm:py-3
      text-[10px] sm:text-sm md:text-base
      font-bold uppercase tracking-widest
      rounded-lg
      bg-gradient-to-r from-purple-600 to-indigo-600
      text-white
      shadow-lg shadow-purple-900/40
      border border-white/10
    "
  >
    Start Your Project
  </motion.button>
</div>

  </motion.div>
</div>



 

        </div>
      </div>
    </section>
  );
}
