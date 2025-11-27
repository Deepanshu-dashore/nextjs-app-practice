"use client";

import Image from "next/image";
import DarkVeil from "./components/home/DarkVeil";
import Hero from "./components/home/Hero";
import LogoLoop from "./components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
  SiNodedotjs,
  SiAppveyor,
  SiAdobe,
  SiGoogleads,
  SiUnity,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ServicesBentoSection from "./components/home/ServicesBentoSection";
import CTASection from "./components/home/CTASection";
import InsightsSection from "./components/home/InsightsSection";
import Footer from "./components/shared/Footer";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";
import TargetCursor from "./components/shared/TargetCursor";
import LandingPage from "./components/shared/landingPage";
import { useState, useEffect } from "react";

const services = [
  // App Development with multiple tech logos
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiReact className="text-white/60" size={24} />
        <span className="text-lg">App Development (React)</span>
      </span>
    ),
    title: "App Development (React)",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <TbBrandReactNative className="text-white/60" size={24} />
        <span className="text-lg">App Development (React Native)</span>
      </span>
    ),
    title: "App Development (React Native)",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiFlutter className="text-white/60" size={24} />
        <span className="text-lg">App Development (Flutter)</span>
      </span>
    ),
    title: "App Development (Flutter)",
  },

  // Web Development with multiple tech logos
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiNodedotjs className="text-white/60" size={24} />
        <span className="text-lg">Web Development (Node.js)</span>
      </span>
    ),
    title: "Web Development (Node.js)",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiReact className="text-white/60" size={24} />
        <span className="text-lg">Web Development (React)</span>
      </span>
    ),
    title: "Web Development (React)",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiNextdotjs className="text-white/60" size={24} />
        <span className="text-lg">Web Development (Next.js)</span>
      </span>
    ),
    title: "Web Development (Next.js)",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiAngular className="text-white/60" size={24} />
        <span className="text-lg">Web Development (Angular)</span>
      </span>
    ),
    title: "Web Development (Angular)",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiVuedotjs className="text-white/60" size={24} />
        <span className="text-lg">Web Development (Vue.js)</span>
      </span>
    ),
    title: "Web Development (Vue.js)",
  },

  // Other services
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiAppveyor className="text-white/60" size={24} />
        <span className="text-lg">Software Development</span>
      </span>
    ),
    title: "Software Development",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiAdobe className="text-white/60" size={24} />
        <span className="text-lg">UX/UI Design</span>
      </span>
    ),
    title: "UX/UI Design",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiGoogleads className="text-white/60" size={24} />
        <span className="text-lg">Digital Marketing</span>
      </span>
    ),
    title: "Digital Marketing",
  },
  {
    node: (
      <span className="flex items-center space-x-2 text-white/90">
        <SiUnity className="text-white/60" size={24} />
        <span className="text-lg">Game Development</span>
      </span>
    ),
    title: "Game Development",
  },
];

export default function Home() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem("isLanding");
    if (hasVisited) {
      setShowHome(true);
    }
  }, []);

  const handleLandingComplete = () => {
    setShowHome(true);
  };

  return (
    <div className="relative font-sans bg-black">
      <LandingPage onComplete={handleLandingComplete} />

      {showHome && (
        <>
          <div style={{ width: "100%", height: "100dvh", position: "fixed" }}>
            <DarkVeil speed={1} warpAmount={0.1} />
          </div>
          <div
            style={{ width: "100%", height: "100dvh", position: "relative" }}
          >
            <Hero />
          </div>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
          <LogoLoop
            logos={services}
            speed={60}
            direction="left"
            logoHeight={38}
            gap={40}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Services"
          />
          <WhyChooseUs />
          <ServicesBentoSection />
          <InsightsSection />

          <CTASection />
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}
