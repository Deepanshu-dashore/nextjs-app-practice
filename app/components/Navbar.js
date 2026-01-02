
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/public/images/indi-Logo-white.png";

import {
  Code2,
  AppWindow,
  Layers3,
  Palette,
  TrendingUp,
  Gamepad,
  Wrench,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState("Web Development");

  /* -------------------- DATA -------------------- */

const serviceImages = {
  "Web Development":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",

  "App Development":
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200",

  "Software & ERP Development":
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",


  "UI/UX Design":
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200",

  "Digital Marketing":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",

  "Game Development":
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200",
  "Engineering Practices & Support": "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200"
};


  const serviceSlugs = {
    "Web Development": "web-development",
    "App Development": "app-development",
    "Software & ERP Development": "software-erp",
    "UI/UX Design": "ui-ux",
    "Digital Marketing": "digital-marketing",
    "Game Development": "game-development",
    "Engineering Practices & Support": "engineering-support",
  };

  const serviceMeta = {
    "Web Development": {
      icon: Code2,
      desc: "High-performance modern websites",
    },
    "App Development": {
      icon: AppWindow,
      desc: "Scalable mobile & cross-platform apps",
    },
    "Software & ERP Development": {
      icon: Layers3,
      desc: "Enterprise-grade ERP solutions",
    },
    "UI/UX Design": {
      icon: Palette,
      desc: "Pixel-perfect user experiences",
    },
    "Digital Marketing": {
      icon: TrendingUp,
      desc: "Growth-focused digital strategies",
    },
    "Game Development": {
      icon: Gamepad,
      desc: "Immersive gaming experiences",
    },
    "Engineering Practices & Support": {
      icon: Wrench,
      desc: "Reliable systems & tech support",
    },
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    {
      name: "What We Do",
      href: "/services",
      submenu: Object.keys(serviceMeta).map((name) => ({
        name,
        href: `/services#${serviceSlugs[name]}`,
      })),
    },
    { name: "Our Project", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/career" },
  ];

  /* -------------------- HELPERS (JS SAFE) -------------------- */

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isActiveSubLink = (slug) => {
    if (typeof window === "undefined") return false;
    return window.location.hash === `#${slug}`;
  };

  /* -------------------- UI -------------------- */

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image src={logo} alt="logo" className="h-7 w-48" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">

                {/* MAIN LINK */}
                <div className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm transition rounded-lg flex items-center gap-1
                      ${
                        isActiveLink(link.href)
                          ? "text-white bg-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {link.name}
                       {link.submenu && (
                    <ChevronDown className="h-4 w-4 text-white/70 transition group-hover:rotate-180" />
                  )}
                  </Link>

               
                </div>

                {/* SUBMENU */}
                {link.submenu && (
                  <div
                    className="
                      absolute left-1/2 top-full mt-6 -translate-x-1/2
                      w-[1100px] rounded-2xl bg-[#0A0A0A]
                      border border-white/10
                      shadow-[0_40px_120px_rgba(0,0,0,0.9)]
                      opacity-0 invisible translate-y-3
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-300
                    "
                  >
                    <div className="grid grid-cols-[380px_1fr] gap-10 p-10">

                      {/* LEFT PREVIEW */}
                      <div className="rounded-xl bg-[#111] border border-white/10 overflow-hidden">
                        <div className="p-6">
                          <span className="text-xs uppercase tracking-widest text-white/50">
                            Solution
                          </span>
                          <h3 className="text-xl font-semibold text-white mt-3">
                            {activeService}
                          </h3>
                          <p className="text-sm text-white/60 mt-2">
                            {serviceMeta[activeService].desc}
                          </p>
                        </div>

                        <div className="relative h-[220px]">
                          <img
                            src={serviceImages[activeService]}
                            alt={activeService}
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
                        </div>
                      </div>

                      {/* RIGHT GRID */}
                      <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                        {link.submenu.map((item) => {
                          const Icon = serviceMeta[item.name].icon;
                          const slug = serviceSlugs[item.name];

                          return (
                        <Link
  key={item.name}
  href={item.href}
  onMouseEnter={() => setActiveService(item.name)}
  className={`group block rounded-xl p-4 transition 
    ${
      isActiveSubLink(slug)
        ? "bg-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
        : "hover:bg-white/5"
    }
  `}
>
  <div className="flex items-center gap-3 mb-3 ">
    <Icon
      className={`h-5 w-5 transition 
        ${
          isActiveSubLink(slug)
            ? " "
            : "text-white"
        }
      `}
    />
    <h4
      className={`text-sm font-semibold transition
        ${
          isActiveSubLink(slug)
            ? ""
            : "text-white"
        }
      `}
    >
      {item.name}
    </h4>
  </div>

  <ul className="space-y-1 text-sm text-white/60">
    <li>{serviceMeta[item.name].desc}</li>
    <li>Scalable Architecture</li>
    <li>Production Ready</li>
  </ul>
</Link>

                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 rounded-lg bg-(--color) hover:bg-(--color-indigo-800) text-sm text-white font-medium transition"
            >
              Contact us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
