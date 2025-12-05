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
         <div
                className="fixed top-0 inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                  backgroundImage: "url('/images/tech-partner-collab.png')",
                  backgroundAttachment: "fixed",
                }}
              />
              <div className="relative z-10">
      <AboutHero />
      <IdentitySection />
      <CommunitySection  />
      {/* <ValuesSection /> */}
      <AboutCTA />
      <Footer />
      </div>
    </main>
  );
}
