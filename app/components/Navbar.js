"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from ".././../public/images/indi-Logo-white.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/about" },

  {
    name: "What We Do",
    href: "/services",
submenu: [
  { name: "App Development", href: "/services#app-development" },
  { name: "Web Development", href: "/services#web-development" },
  { name: "Software & ERP Development", href: "/services#software-erp" },
  { name: "UI/UX Design", href: "/services#ui-ux" },
  { name: "Digital Marketing", href: "/services#digital-marketing" },
  { name: "Game Development", href: "/services#game-development" },
  { name: "Engineering Practices & Support", href: "/services#engineering-practices" },
],

  },

  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-black/10 border-b border-white/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <img
                className="h-11 w-56 object-contain"
                src={logo.src}
                alt="Indidevelopers Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
             <div key={link.name} className="relative group">
  {/* Main link */}
  <Link
    href={link.href}
    className="text-white hover:text-gray-300  hover:bg-white/10 px-3 py-2 rounded-md text-sm transition-colors duration-200"
  >
    {link.name}
  </Link>

  {/* Submenu (only if exists) */}
  {link.submenu && (
    <div className="absolute left-0 mt-2  hidden group-hover:block bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg py-2 min-w-60 z-50">
      {link.submenu.map((sub, i) => (
        <Link
          key={i}
          href={sub.href}
          className="block px-3 py-2 text-white hover:bg-white/10 text-sm"
        >
          {sub.name}
        </Link>
      ))}
    </div>
  )}
</div>

            ))}

            <Link
              href="/contact"
              className="bg-(--color) text-white hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-white hover:text-gray-300 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile + Tablet Dropdown */}
      {isOpen && (

  <div className="lg:hidden absolute top-20 left-0 w-full bg-black/70 backdrop-blur-lg border-t border-white/10 px-4 py-4 space-y-3">

          {navLinks.map((link) => (
         <div key={link.name}>
  {/* Main Mobile Link */}
  <div
    onClick={() =>
      link.submenu ? setIsOpen((prev) => ({ ...prev, [link.name]: !prev[link.name] })) : setIsOpen(false)
    }
    className="flex justify-between items-center cursor-pointer text-white hover:text-gray-300 hover:bg-white/10 px-3 py-2 rounded-md text-sm"
  >
    <span>{link.name}</span>

    {link.submenu && (
      <svg
        className={`h-4 w-4 transform transition-transform ${
          isOpen[link.name] ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </div>

  {/* Submenu Mobile */}
  {link.submenu && isOpen[link.name] && (
    <div className="ml-4 space-y-2 mt-1">
      {link.submenu.map((sub, i) => (
        <Link
          key={i}
          href={sub.href}
          className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm"
          onClick={() => setIsOpen(false)}
        >
          {sub.name}
        </Link>
      ))}
    </div>
  )}
</div>

          ))}

          <Link
            href="/contact"
            className="block bg-(--color) text-white text-center hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
