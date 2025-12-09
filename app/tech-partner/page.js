"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import {
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaCode,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";
import { useState } from "react";
import LogoLoop from "../components/LogoLoop";
import Image from "next/image";
import logo from "../../public/images/bttraders.png"
import logo2 from "../../public/images/logo.jpg"
export default function TechPartnerPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    productStage: "Idea Phase",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you! We'll get in touch with you shortly.");
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
    const logosRow1 = [
    logo,
   logo2,
      logo,
          logo,
              logo,
  ];

  const logosRow2 = [
 logo,
     logo,
         logo,
             logo,
                 logo,
  ];

  const logosRow3 = [
  logo,
     logo,
         logo,
             logo, 
                 logo,
  ];

  // Convert logos into LogoLoop format
  const mapLogos = (arr) =>
    arr.map((src) => ({
      node: <Image src={src} alt="logo" width={65} height={65} />,
      title: "logo",
    }));

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "50%"]);

  return (
    <main className="bg-black min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-dvh min-h-[600px] flex items-center justify-center overflow-hidden mb-32 -mt-24">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover -rotate-180 bg-center bg-100"
            style={{ backgroundImage: "url('/images/PartnerProgramBg.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/40 z-10 rotate-180" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40 z-10" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent z-10" />
        </motion.div>

        <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-28 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8 ">
              <span className="text-sm font-bold text-white tracking-[0.3em] uppercase">
                TECH PARTNER PROGRAM
              </span>
           
            </div>
           <div className="h-px flex-1 max-w-sm bg-linear-to-r from-white/60 to-transparent" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-5xl">
              Tech Partner      <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400"> Program</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-gray-200 font-medium mb-6 max-w-4xl leading-snug">
              Build and scale your products with a dedicated tech team that
              thinks like a co‑founder, not a vendor.
            </h2>

            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-10">
              From MVPs to long‑term product roadmaps, Indidevelopers becomes
              your external engineering arm—aligning with your goals, stack, and
              timelines.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                                   <Link
            href="#apply"
            className="group relative bg-(--color) text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(var(--color),0.3)] hover:shadow-[0_0_30px_rgba(var(--color),0.5)] hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
          > <span className="relative z-10"> Become a Tech Partner</span>
              <svg
                 className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
        
            </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2"
              >
                Talk to the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
{/* Featured Tech Partners */}
<section className="relative z-20 -mt-12 mb-32 px-6 sm:px-6 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white/5 flex  overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10">

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full mb-14"
          >
            <h2 className="text-4xl font-bold text-white leading-snug mb-6">
              Featured Tech Partners
            </h2>

            <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-6 shadow-lg shadow-indigo-500/30"></div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              We collaborate with top-tier companies and tools to craft powerful,
              scalable, and future-ready digital products that redefine quality.
            </p>
          </motion.div>

          {/* 3 ROW LOGO LOOP */}
          <div className="space-y-10  w-96 -rotate-[55deg]">
            {/* Row 1 */}
      
  <LogoLoop
    logos={mapLogos(logosRow1)}
    speed={60}
    direction="left"
    logoHeight={70}
    gap={50}
    fadeOut
    fadeOutColor="#000"
    
  />

  <LogoLoop
    logos={mapLogos(logosRow2)}
    speed={50}
    direction="right"
    logoHeight={70}
    gap={50}
    fadeOut
    fadeOutColor="#000"
  />

  <LogoLoop
    logos={mapLogos(logosRow3)}
    speed={55}
    direction="left"
    logoHeight={70}
    gap={50}
    fadeOut
    fadeOutColor="#000"
  />


          </div>
        </div>
      </motion.div>
    </section>


{/* How Our Partnership Works */}
<section className="px-4 sm:px-6 lg:px-20 mb-32 relative z-10">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        How we work{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
          with you
        </span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: FaCode,
          title: "Discovery & Strategy",
          description:
            "Understand your product, users, and goals before writing any code.",
        },
        {
          icon: FaUsers,
          title: "Dedicated Team",
          description:
            "A focused squad for your project – developers, designer, and project lead.",
        },
        {
          icon: FaChartLine,
          title: "Iterative Delivery",
          description:
            "Ship in sprints, gather feedback, and improve continuously.",
        },
        {
          icon: FaHeadset,
          title: "Long-Term Support",
          description:
            "Ongoing maintenance, optimization, and new feature development.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors group "
        >
          <div className="flex flex-col items-left gap-6">
            <div className=" w-14 p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <item.icon className="text-3xl" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* What You Get */}
      <section className="px-4 sm:px-6 lg:px-20 mb-32 relative z-10 bg-zinc-900/30 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What you get as a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                tech partner
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Product Ownership",
                description:
                  "You own the code, IP, and roadmap. We own the execution.",
              },
              {
                title: "Transparent Communication",
                description:
                  "Weekly check-ins, clear updates, and shared dashboards.",
              },
              {
                title: "Scalable Architecture",
                description:
                  "Modern stacks that can grow with your users and business.",
              },
              {
                title: "Measurable Outcomes",
                description:
                  "Focus on performance, reliability, and business impact.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-black/30 border border-white/10 hover:border-indigo-500/30 transition-colors"
              >
                <FaCheckCircle className="text-indigo-400 text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Partners - Accordion */}
      <section className="px-4 sm:px-6 lg:px-20 mb-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Is this program{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                for you?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Perfect for startups, agencies, and businesses that:
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                title: "Need a reliable tech team",
                content:
                  "You don't want to build everything in-house but need a dedicated technical partner who understands your vision and can execute with precision.",
              },
              {
                title: "Want to scale with confidence",
                content:
                  "Whether you have an idea or an existing product, you're looking for experts who can help you scale efficiently while maintaining quality and performance.",
              },
              {
                title: "Prefer long-term collaboration",
                content:
                  "You value ongoing partnerships over one-off projects and want a team that grows with your business through iterations and improvements.",
              },
            ].map((item, index) => {
              const [isOpen, setIsOpen] = useState(index === 0);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-colors"
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <FaCheckCircle className="text-indigo-400 text-xl shrink-0" />
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-indigo-400 -rotate-90" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16">
                      <p className="text-gray-300 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Highlights / Stats */}
      <section className="px-4 sm:px-6 lg:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why companies choose{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Indidevelopers
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col  gap-8 ">
            {[
              { value: "24/7", label: "Support Availability" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "25+", label: "Technologies" },
              { value: "4+", label: "Years Building Products" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-zinc-900/50 border border-white/10 flex  justify-between h-[40dvh]"
              >
                     <div className="text-gray-400">{stat.label}</div>
                <div className="text-5xl font-bold text-white mb-3">
                  {stat.value}
                </div>
           
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Application Form Section - Split Layout */}
      <section id="apply" className="px-4 sm:px-6 lg:px-20 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Partner Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Become a{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  Tech Partner
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Join our exclusive partnership program and get access to a
                dedicated team of experts who will help you build and scale your
                digital products.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Flexible Engagement
                    </h3>
                    <p className="text-gray-400">
                      Work with us on a retainer basis or project-by-project.
                      Scale up or down as needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Dedicated Support
                    </h3>
                    <p className="text-gray-400">
                      Get a dedicated project manager and direct access to our
                      team throughout the engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Transparent Pricing
                    </h3>
                    <p className="text-gray-400">
                      No hidden fees. Clear, upfront pricing with flexible
                      payment terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Full Ownership
                    </h3>
                    <p className="text-gray-400">
                      You retain complete ownership of all code, assets, and
                      intellectual property.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-zinc-900/50 border border-white/10">
                <h4 className="text-white font-semibold mb-3">
                  Partnership Requirements:
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Minimum 3-month engagement for best results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Clear product vision and business goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Regular communication and feedback cycles</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Start Your Application
                </h3>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Role / Position
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formState.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                      placeholder="CTO / Founder"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Product Stage <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="productStage"
                    required
                    value={formState.productStage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all cursor-pointer"
                  >
                    <option>Idea Phase</option>
                    <option>Prototype / MVP</option>
                    <option>Growing Product</option>
                    <option>Scaling / Enterprise</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Tell us about your goals{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                    placeholder="What are you looking to build or scale? What are your key goals and challenges?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
                >
                  Submit Application
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our terms and privacy
                  policy.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
