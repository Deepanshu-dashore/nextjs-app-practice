"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/shared/Footer";
import AboutHero from "../components/about/AboutHero";
import IdentitySection from "../components/about/IdentitySection";
import CommunitySection from "../components/about/CommunitySection";
import ValuesSection from "../components/about/ValuesSection";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <AboutHero />
      <IdentitySection />
      <CommunitySection />
      {/* <ValuesSection /> */}
      <AboutCTA />
      <Footer />
    </main>
  );
}
