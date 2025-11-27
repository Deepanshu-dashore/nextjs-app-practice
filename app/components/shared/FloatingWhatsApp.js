"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Hide in hero section (top 100vh)
      const isInHero = scrollPosition < windowHeight;

      // Hide in footer (bottom 600px)
      const isInFooter = scrollPosition + windowHeight > documentHeight - 600;

      setIsVisible(!isInHero && !isInFooter);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=918435840622&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      {/* Pulse Animation Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#915eff]/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Button */}
      <div className="relative w-15 h-15 rounded-full bg-linear-to-r from-(--color)/20 via-indigo-400/20 to-purple-400/20 shadow-lg shadow-[#915eff]/50 flex items-center justify-center group-hover:from-[#25D366] group-hover:via-[#1da851] group-hover:to-[#128C7E] group-hover:shadow-[#25D366]/70 transition-all duration-500">
        {/* Icon */}
        <FaWhatsapp className="text-white text-3xl transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <p className="text-sm font-medium">Chat with us!</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-gray-900"></div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
