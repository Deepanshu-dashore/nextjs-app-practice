// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import logo from ".././../public/images/indi-Logo-white.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState({});

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Who We Are", href: "/about" },

//     {
//       name: "What We Do",
//       href: "/services",
//       submenu: [
//          { name: "Web Development", href: "/services#web-development" },
//         { name: "App Development", href: "/services#app-development" },
//         { name: "Software & ERP Development", href: "/services#software-erp" },
//         { name: "UI/UX Design", href: "/services#ui-ux" },
//         { name: "Digital Marketing", href: "/services#digital-marketing" },
//         { name: "Game Development", href: "/services#game-development" },
//         {
//           name: "Engineering Practices & Support",
//           href: "/services#engineering-practices",
//         },
//       ],
//     },

//     { name: "Our Project", href: "/projects" },
//     { name: "Blog", href: "/blog" },
//     { name: "Careers", href: "/career" },
//       // { name: "Talent Program", href: "/talent" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-black/10 border-b border-white/5 shadow-sm transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="shrink-0 flex items-center">
//             <Link href="/">
//               <img
//                 className="h-11 w-56 object-contain"
//                 src={logo.src}
//                 alt="Indidevelopers Logo"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative group">
//                 {/* Main link + dropdown icon */}
//                 <div className="flex items-center space-x-1 cursor-pointer">
//                   <Link
//                     href={link.href}
//                     className="text-white hover:text-gray-300 hover:bg-white/10 px-3 py-2 rounded-md text-sm transition-colors duration-200"
//                   >
//                     {link.name}
//                   </Link>

//                   {/* Dropdown Icon */}
//                   {link.submenu && (
//                     <svg
//                       className="h-4 w-4 text-white transition-transform duration-200 group-hover:rotate-180"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   )}
//                 </div>

//                 {/* Desktop Submenu */}
//                 {/* {link.submenu && (
//                   <div className="absolute left-0 mt-2 hidden group-hover:block bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg py-2 min-w-60 z-50">
//                     {link.submenu.map((sub, i) => (
//                       <Link
//                         key={i}
//                         href={sub.href}
//                         className="block px-3 py-2 text-white hover:bg-white/10 text-sm"
//                       >
//                         {sub.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )} */}
//                 {link.submenu && (
//   <div
//     className="
//       absolute left-0 top-full mt-4
//       w-[720px]
//       rounded-2xl
//       bg-[#0B0B12]/95
//       backdrop-blur-2xl
//       border border-white/10
//       shadow-[0_20px_80px_rgba(0,0,0,0.8)]
//       opacity-0 invisible
//       translate-y-2
//       group-hover:opacity-100
//       group-hover:visible
//       group-hover:translate-y-0
//       transition-all duration-300 ease-out
//       z-50
//     "
//   >
//     <div className="grid grid-cols-[260px_1fr] gap-4 p-4">
      
//       {/* LEFT LIST */}
//       <div className="space-y-1">
//         {link.submenu.map((sub, i) => (
//           <Link
//             key={i}
//             href={sub.href}
//             className="
//               group/item
//               flex items-center gap-4
//               px-4 py-3
//               rounded-xl
//               text-sm
//               text-white/70
//               hover:text-white
//               hover:bg-white/10
//               transition
//             "
//           >
//             {/* ICON */}
//             <span
//               className="
//                 flex h-9 w-9 items-center justify-center
//                 rounded-lg
//                 border border-white/10
//                 bg-white/5
//                 group-hover/item:bg-white/10
//                 transition
//               "
//             >
//               <svg
//                 className="h-4 w-4 text-white/70"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 6v12m6-6H6"
//                 />
//               </svg>
//             </span>

//             <span className="flex-1">{sub.name}</span>
//           </Link>
//         ))}
//       </div>

//       {/* RIGHT PREVIEW CARD (STATIC LIKE REFERENCE) */}
//       <div
//         className="
//           relative
//           rounded-2xl
//           border border-white/10
//           bg-gradient-to-br from-[#15152A]/80 to-[#0B0B12]
//           p-6
//           overflow-hidden
//         "
//       >
//         {/* Decorative Shapes */}
//         <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full border border-purple-500/20" />
//         <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-2xl border border-purple-400/20 rotate-12" />

//         <div className="relative z-10">
//           <h4 className="text-lg font-semibold text-white mb-2">
//             Our manifesto
//           </h4>

//           <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">
//             Our manifesto is our guide to building a better AI future
//           </p>

//           <div className="mt-6 flex items-center gap-2 text-sm text-purple-400">
//             <span>Read on</span>
//             <svg
//               className="h-4 w-4"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>

//           <span className="absolute top-0 right-0 text-xs text-purple-400">
//             4 min. read
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//               </div>
//             ))}

//             <Link
//               href="/contact"
//               className="bg-(--color) text-white hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//             >
//               Contact us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               className="text-white hover:text-gray-300 focus:outline-none cursor-pointer"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden absolute top-20 left-0 w-full bg-black/70 backdrop-blur-lg border-t border-white/10 px-4 py-4 space-y-3">
//           {navLinks.map((link) => (
//             <div key={link.name}>
//               {/* Main Mobile Link */}
//               <div
//                 onClick={() =>
//                   link.submenu
//                     ? setMobileOpen((prev) => ({
//                         ...prev,
//                         [link.name]: !prev[link.name],
//                       }))
//                     : setIsOpen(false)
//                 }
//                 className="flex justify-between items-center cursor-pointer text-white hover:text-gray-300 hover:bg-white/10 px-3 py-2 rounded-md text-sm"
//               >
//                 <span>{link.name}</span>

//                 {/* Mobile dropdown icon */}
//                 {link.submenu && (
//                   <svg
//                     className={`h-4 w-4 transform transition-transform ${
//                       mobileOpen[link.name] ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 )}
//               </div>

//               {/* Submenu Mobile */}
//               {link.submenu && mobileOpen[link.name] && (
//                 <div className="ml-4 space-y-2 mt-1">
//                   {link.submenu.map((sub, i) => (
//                     <Link
//                       key={i}
//                       href={sub.href}
//                       className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {sub.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <Link
//             href="/contact"
//             className="block bg-(--color) text-white text-center hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-medium transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/indi-Logo-white.png";

import {
  Globe,
  Smartphone,
  Boxes,
  PenTool,
  Megaphone,
  Gamepad2,
  Settings,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState({});
  const [activePreview, setActivePreview] = useState(null);

  /* ICON + IMAGE MAPPING */
  const serviceMeta = {
    "Web Development": {
      icon: Globe,
      image: "/images/menu/web.png",
      desc: "High-performance modern websites",
    },
    "App Development": {
      icon: Smartphone,
      image: "/images/menu/app.png",
      desc: "Scalable mobile & cross-platform apps",
    },
    "Software & ERP Development": {
      icon: Boxes,
      image: "/images/menu/erp.png",
      desc: "Enterprise-grade ERP solutions",
    },
    "UI/UX Design": {
      icon: PenTool,
      image: "/images/menu/uiux.png",
      desc: "Pixel-perfect user experiences",
    },
    "Digital Marketing": {
      icon: Megaphone,
      image: "/images/menu/marketing.png",
      desc: "Growth-focused digital strategies",
    },
    "Game Development": {
      icon: Gamepad2,
      image: "/images/menu/game.png",
      desc: "Immersive gaming experiences",
    },
    "Engineering Practices & Support": {
      icon: Settings,
      image: "/images/menu/engineering.png",
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
        href: `/services#${name.toLowerCase().replace(/\s+/g, "-")}`,
      })),
    },
    { name: "Our Project", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/career" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image src={logo} alt="logo" className="h-11 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">

                <div className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm"
                  >
                    {link.name}
                  </Link>

                  {link.submenu && (
                    <ChevronDown className="h-4 w-4 text-white transition group-hover:rotate-180" />
                  )}
                </div>

                {/* MEGA MENU */}
                {link.submenu && (
                  <div
                    className="
                      absolute left-0 top-full mt-4
                      w-[720px]
                      rounded-2xl
                      bg-[#0B0B12]/95
                      backdrop-blur-2xl
                      border border-white/10
                      shadow-[0_20px_80px_rgba(0,0,0,0.8)]
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-300
                    "
                  >
                    <div className="grid grid-cols-[260px_1fr] gap-4 p-4">

                      {/* LEFT LIST */}
                      <div className="space-y-1">
                        {link.submenu.map((sub) => {
                          const Icon = serviceMeta[sub.name].icon;

                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onMouseEnter={() => setActivePreview(sub.name)}
                              className="
                                flex items-center gap-4
                                px-4 py-3 rounded-xl
                                text-sm text-white/70
                                hover:text-white hover:bg-white/10
                                transition
                              "
                            >
                              <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                <Icon className="h-4 w-4" />
                              </span>
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>

                      {/* RIGHT PREVIEW */}
                      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#15152A] to-[#0B0B12] p-6 overflow-hidden">
                        <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full border border-purple-500/20" />
                        <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-2xl border border-purple-400/20 rotate-12" />

                        <div className="relative z-10">
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {activePreview || "Our manifesto"}
                          </h4>

                          <p className="text-sm text-white/60 max-w-[260px]">
                            {activePreview
                              ? serviceMeta[activePreview].desc
                              : "Our manifesto is our guide to building a better AI future"}
                          </p>

                          <div className="mt-6 flex items-center gap-2 text-purple-400 text-sm">
                            Read on <ArrowRight className="h-4 w-4" />
                          </div>

                          {/* <span className="absolute top-0 right-0 text-xs text-purple-400">
                            4 min. read
                          </span> */}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-500 px-5 py-2.5 rounded-lg text-sm text-white font-medium"
            >
              Contact us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
