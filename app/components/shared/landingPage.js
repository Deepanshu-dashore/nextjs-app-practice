"use client";

import { motion, AnimatePresence } from "motion/react";
import BlurText from "./BlurText";
import { useState, useEffect } from "react";

export default function LandingPage({ onComplete }) {
  const [showLanding, setShowLanding] = useState(false);
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check if user has already visited (check session storage)
    const hasVisited = sessionStorage.getItem("isLanding");

    if (!hasVisited) {
      setShowLanding(true);

      // Animation sequence timing
      // Step 1: Show text for 3.5 seconds (text animation + stay visible)
      setTimeout(() => {
        setShowText(false); // Hide text
      }, 3500);

      // Step 2: Show logo after text disappears (wait 600ms for fade out)
      setTimeout(() => {
        setShowLogo(true);
      }, 4100);

      // Step 3: Keep logo visible for 3 seconds, then complete
      setTimeout(() => {
        setIsComplete(true);
        sessionStorage.setItem("isLanding", "true");
        if (onComplete) onComplete();
      }, 7600);
    } else {
      // User has visited before, immediately show home page
      if (onComplete) onComplete();
    }
  }, [onComplete]);

  // Don't render anything if user has already visited
  if (!showLanding) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-100 w-full h-full bg-black flex items-center justify-center"
        >
          {/* Typing Text Animation */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl space-x-3 font-normal text-white flex items-center justify-center"
              >
                <BlurText
                  animateBy="words"
                  direction="top"
                  text="Passionate"
                  delay={100}
                />
                <BlurText
                  animateBy="words"
                  direction="top"
                  className="font-semibold"
                  text="Creative"
                  delay={100}
                />
                <BlurText
                  animateBy="words"
                  direction="top"
                  text="Skilled"
                  delay={100}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logo Animation */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  className="h-12 md:h-14 w-auto object-contain"
                  src="https://indidevelopers.com/assets/blackLogo-CnkHWG4m.png"
                  alt="Indidevelopers Logo"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
