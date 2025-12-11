"use client";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaFacebook,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Particles from "./Particles";
import logo from "../../../public/images/indi-Logo-white.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
navigation: [
  { title: "HOME", path: "/" },
  { title: "WHO WE ARE", path: "/about" },
  { title: "WHAT WE DO", path: "/services" },
  { title: "OUR PORTFOLIO", path: "/portfolio" },
  { title: "BLOG", path: "/blog" },
  { title: "CAREERS", path: "/careers" },
  { title: "CONTACT", path: "/contact" },
    ],
    services: [
      { title: "Web Development", path: "/service" },
      { title: "Mobile Apps", path: "/service" },
      { title: "Software Development", path: "/service" },
      { title: "UI/UX Design", path: "/service" },
      { title: "Digital Marketing", path: "/service" },
    ],
    sections: [
      { title: "SKILLS", path: "/#skills" },
      { title: "PROJECTS", path: "/#projects" },
      { title: "SERVICES", path: "/#services" },
         { title: "SUPPORT", path: "/#support" },
    ],
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/61576221211599",
      label: "Facebook",
      color: "#1877F2",
    },
    // {
    //   icon: FaGlobe,
    //   href: "https://indidevelopers.com",
    //   label: "Website",
    //   color: "#915eff",
    // },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/indidevelopers_/",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: FaLinkedin,
      href: "https://in.linkedin.com/company/indi-developers",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send/?phone=918435840622&text&type=phone_number&app_absent=0",
      label: "WhatsApp",
      color: "#25D366",
    },
  ];

  const marqueeWords = [
    "DESIGN",
    "DEVELOPER",
    "INNOVATORS",
    "DREAMERS",
    "INDIDEVELOPERS",
  ];

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 w-full">
        <img
          src="/footer-bg.png"
          alt="Tech Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 z-0 w-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 px-6 pt-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto lg:grid-cols-5 gap-8 mb-16">
          {/* Social Section - Indideveloper Branding */}
          <div className="col-span-2 md:col-span-2 flex flex-col items-start">
            {/* Indideveloper Logo */}
            <div className="mb-6">
              <Link href="/">
                <img
                  className="h-11 w-56 object-contain"
                  src={logo.src}
                  alt="Indidevelopers Logo"
                />
              </Link>
            </div>

            {/* Social Text */}
            <h3 className="text-base font-normal mb-6 text-white">
              Let's connect with our socials
            </h3>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                    aria-label={social.label}
                    style={{
                      "--hover-color": social.color,
                    }}
                  >
                    <Icon className="text-white text-lg transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-[#915eff] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#915eff] transition-all duration-300"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-[#915eff] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#915eff] transition-all duration-300"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">
              Sections
            </h3>
            <ul className="space-y-4">
              {footerLinks.sections.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-[#915eff] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#915eff] transition-all duration-300"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 pb-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} Indidevelopers. All rights reserved.
          </p>
          <div>
            <p className="text-gray-200 text-sm flex items-center gap-2">
              Built with{" "}
              <span className="text-[#915eff] font-semibold">React</span> &{" "}
              <span className="text-[#915eff] font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>

        {/* Marquee Animation - Half Cut at Bottom */}
        {/* <div className="mt-12 overflow-hidden h-[100px] md:h-[130px] lg:h-[160px] flex items-start justify-center select-none">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 text-6xl md:text-8xl lg:text-[150px] font-black leading-none tracking-tighter whitespace-nowrap opacity-10"
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12">
                {marqueeWords.map((word, index) => (
                  <span key={`${setIndex}-${index}`} className="text-white">
                    {word}
                    <span className="text-[#915eff] mx-6">•</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
