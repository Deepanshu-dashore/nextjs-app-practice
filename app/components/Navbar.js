
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
const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState("Web Development");
const [activeCompany, setActiveCompany] = useState("Who We Are");

const isActiveCompanySubLink = (href) => {
  return pathname === href || pathname.startsWith(href + "/");
};

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
const companyMeta = {
  "Who We Are": {
    desc: "Our story, vision & leadership",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
  },
  "Our Culture": {
    desc: "Values, people & work culture",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200",
  },
  Blog: {
    desc: "Insights, news & tech articles",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200",
  },
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
    // { name: "Who We Are", href: "/about" },
    {
  name: "Company",
  href: "/about",
  submenu: [
    { name: "Who We Are", href: "/about" },
    { name: "Our Culture", href: "/culture" },
    { name: "Blog", href: "/blog" },
  ],
},

    {
      name: "What We Do",
      href: "/services",
      submenu: Object.keys(serviceMeta).map((name) => ({
        name,
        href: `/services#${serviceSlugs[name]}`,
      })),
    },
    { name: "Our Project", href: "/projects" },
    // { name: "Blog", href: "/blog" },
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
    w-[1100px] min-h-[520px]
    rounded-2xl bg-[#0A0A0A]
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
      {link.name === "Company" ? "Company" : "Solution"}
    </span>

    <h3 className="text-xl font-semibold text-white mt-3">
      {link.name === "Company" ? activeCompany : activeService}
    </h3>

    <p className="text-sm text-white/60 mt-2">
      {link.name === "Company"
        ? companyMeta[activeCompany].desc
        : serviceMeta[activeService].desc}
    </p>
  </div>

  {/* FIXED IMAGE SIZE */}
  <div className="relative h-[250px] w-full">
    <img
      src={
        link.name === "Company"
          ? companyMeta[activeCompany].image
          : serviceImages[activeService]
      }
      alt="preview"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to from-black/60 via-black/30 to-transparent" />
  </div>
</div>


            {/* RIGHT GRID */}
            <div
              className={`grid ${
                link.name === "Company"
                  ? "grid "
                  : "grid-cols-3"
              } gap-x-5 gap-y-3`}
            >
              {link.submenu.map((item) => {
                const isService = link.name !== "Company";
                const Icon = isService ? serviceMeta[item.name].icon : null;
                const slug = isService ? serviceSlugs[item.name] : null;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() =>
                      isService
                        ? setActiveService(item.name)
                        : setActiveCompany(item.name)
                    }
                className={`group block rounded-xl p-4 transition h-40
  ${
    (isService && isActiveSubLink(slug)) ||
    (!isService && isActiveCompanySubLink(item.href))
      ? "bg-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
      : "hover:bg-white/5"
  }
`}

                  >
                    <div className="flex items-center gap-3 mb-2">
                      {Icon && <Icon className="h-5 w-5 text-white" />}
                      <h4 className="text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                    </div>

                    <p className="text-sm text-white/60">
                      {isService
                        ? serviceMeta[item.name].desc
                        : companyMeta[item.name].desc}
                    </p>
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
    className="ml-4 px-5 py-2.5 rounded-lg bg-(--color) hover:bg-(--color-indigo) text-sm text-white font-medium transition"
  >
Get in Touch
  </Link>
</div>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl cursor-pointer"
          >
            ☰
          </button>
        </div>
      </div>
      {/* MOBILE MENU */}
{isOpen && (
  <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
    <div className="px-6 py-6 space-y-4">

      {navLinks.map((link) => (
        <div key={link.name}>
          
          {/* MAIN MOBILE LINK */}
          <div
            className="flex items-center justify-between text-white py-3 text-base font-medium"
            onClick={() => {
              if (link.submenu) {
                setOpenMobileSubmenu(
                  openMobileSubmenu === link.name ? null : link.name
                );
              } else {
                setIsOpen(false);
              }
            }}
          >
            <Link href={link.href}>{link.name}</Link>

            {link.submenu && (
              <ChevronDown
                className={`h-5 w-5 transition cursor-pointer ${
                  openMobileSubmenu === link.name ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {/* SUBMENU */}
          {link.submenu && openMobileSubmenu === link.name && (
            <div className="ml-4 mt-2 space-y-2">
              {link.submenu.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  onClick={() => {
                    setIsOpen(false);
                    setOpenMobileSubmenu(null);
                  }}
                  className="block text-white/70 text-sm py-2 hover:text-white cursor-pointer"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* CTA */}
      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="block mt-6 text-center px-5 py-3 rounded-lg bg-(--color) text-white font-medium"
      >
        Get in Touch
      </Link>
    </div>
  </div>
)}

    </nav>
  );
}

export default Navbar;
