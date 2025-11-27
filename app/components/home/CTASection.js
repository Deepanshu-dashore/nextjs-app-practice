"use client";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import Threads from "../shared/Thread";
import Aroplane from "./Aroplane";
import TrueFocus from "../shared/TrueFocus";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(99, 102, 241, 0.15)",
  onHoverChange,
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.5);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.5);
    if (onHoverChange) {
      onHoverChange(false);
      setTimeout(() => {
        onHoverChange(true);
      }, 2000);
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (onHoverChange) {
      onHoverChange(true);
      setTimeout(() => {
        onHoverChange(false);
      }, 2000);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-zinc-800 bg-zinc-900/80 overflow-hidden p-8 transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function CTASection() {
  const [showAirplane, setShowAirplane] = useState(true);
  const [airplaneKey, setAirplaneKey] = useState(0);

  const handleHover = () => {
    // Hide airplane
    setShowAirplane(false);

    // After 500ms, show it again with new key to trigger re-mount and animation restart
    setTimeout(() => {
      setAirplaneKey((prev) => prev + 1);
      setShowAirplane(true);
    }, 500);
  };

  return (
    <section
      className="relative py-20 bg-black overflow-hidden"
      // onMouseEnter={handleHover}
    >
      {/* Threads Background */}
      <div className="absolute inset-0 opacity-80 bg-black">
        <Threads amplitude={2} distance={0} color={[0.4, 0.4, 1]} />
      </div>

      <div className="flex justify-center items-center w-full relative z-10">
        <motion.div
          className="relative w-11/12 max-w-7xl group overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating Animated Icons */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-6 left-10 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
            <div className="absolute bottom-6 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
            <div className="absolute top-6 right-10 w-4 h-4 bg-indigo-400 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-6 w-4 h-4 border-2 border-indigo-500 rounded-full animate-ping" />
            <div className="absolute top-5 right-10 w-2 h-2 border-2 border-purple-500 rounded-full animate-ping" />
            <div className="absolute top-5 left-2 w-2 h-2 border-2 border-indigo-500 rounded-full animate-ping" />
            <div className="absolute top-12 right-24 w-2 h-2 bg-indigo-400 rotate-45 animate-spin" />
            <div className="absolute bottom-6 left-16 w-2 h-2 bg-purple-300 rounded-full animate-bounce" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-indigo-500 rounded-full opacity-30 animate-ping" />
          </div>

          {/* Main CTA Content */}
          <SpotlightCard
            // spotlightColor="rgba(99, 102, 241, 0.06)"
            className="relative z-10 text-center"
          >
            {/* Airplane - Always visible, reloads on hover */}
            {showAirplane && (
              <Aroplane key={airplaneKey} className="mt-22 -rotate-32!" />
            )}

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's transform your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                ideas
              </span>{" "}
              into digital reality
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Ready to bring your vision to life with innovative technology and
              expert craftsmanship? Our team is here to guide your project from
              concept to launch, delivering scalable and impactful digital
              solutions tailored to your needs.
            </motion.p>

            <motion.p
              className="text-sm text-gray-400 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Whether you're a startup, growing business, or enterprise, take
              the first step towards accelerating your success today.
            </motion.p>

            <motion.a
              href="/contact"
              className="inline-block bg-linear-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Apply For Meeting
            </motion.a>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
