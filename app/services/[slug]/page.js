"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  Github,
  ExternalLink,
} from "lucide-react";
import Footer from "../../components/shared/Footer";
import { servicesData} from "../../data/services";
import { FaWhatsapp } from "react-icons/fa";
import LogoLoop from "@/app/components/LogoLoop";


export default function ServiceDetailPage() {
  
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }
  

  return (
    
    <main className="bg-black min-h-screen text-white font-sans selection:bg-purple-500/30">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-dvh flex flex-col justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-900/40 via-black to-black pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none z-0" />

        {/* Hero Background Image */}
        {service.imageSrc && (
          <div className="absolute inset-0 opacity-25">
            <img
              src={service.imageSrc}
              alt=""
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10 w-full mb-10">
          {/* <div className="flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
</div> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight leading-tight">
              {service.title}
              <span className="text-purple-500">.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light mb-8 max-w-2xl leading-relaxed">
              {service.heroPromise}
            </p>
            {/* Added Description */}
            <p className="text-lg text-gray-400 mb-10 max-w-3xl leading-relaxed border-l-2 border-purple-500/50 pl-6">
              {service.description}
            </p>
<div className="flex flex-wrap gap-4 items-center">

{/* Book Call Button */}
<Link
  href="/contact"
  className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold 
             rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
>
  {/* Call Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 4.5c0 8.284 6.716 15 15 15h1.125a2.25 2.25 0 0 0 2.121-1.591l.75-2.25a2.25 2.25 0 0 0-1.32-2.832l-3.063-1.021a2.25 2.25 0 0 0-2.342.563l-.97.97a11.25 11.25 0 0 1-4.95-4.95l.97-.97a2.25 2.25 0 0 0 .563-2.342L8.173 3.204A2.25 2.25 0 0 0 5.34 1.883l-2.25.75A2.25 2.25 0 0 0 1.5 4.754V4.5h.75Z"
    />
  </svg>

  Book a Project Call
</Link>


{/* WhatsApp FULL Button (Dynamic Message) */}
<motion.a
  href={`https://api.whatsapp.com/send/?phone=918435840622&text=${encodeURIComponent(
    `Hello, I am interested in your ${service.title} service. Please share more details.`
  )}&type=phone_number&app_absent=0`}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#1E0C35] shadow-md shadow-[#915eff]/40 cursor-pointer"
>
  {/* Icon Glow Wrapper */}
  <div className="relative w-[40px] h-[40px] rounded-full flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-[#915eff]/30 blur-lg" />
    <div className="absolute inset-0 rounded-full" />
    <div className="relative w-[35px] h-[35px] rounded-full bg-[#1E0C35] flex items-center justify-center">
      <FaWhatsapp className="text-white text-xl" />
    </div>
  </div>

  {/* Text */}
  <span className="text-white font-semibold text-lg">
    Direct Message
  </span>
</motion.a>


</div>


          </motion.div>
        </div>
      </section>

      {/* Overview Section (Enhanced Design) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who this is for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/3 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-white">Who this is for</h3>
            </div>
            <ul className="space-y-4">
              {service.whoFor?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-gray-300 group/item p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                  <span className="group-hover/item:text-white transition-colors text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What we deliver */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-br from-purple-900/10 to-black rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Check className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">What we deliver</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            How we go from idea to launch.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-purple-500/50 to-transparent hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {service.process?.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-black border-2 border-white/10 flex items-center justify-center text-lg font-bold text-white mb-6 relative z-10 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-900/20">
                  {i + 1}
                </div>
                <h4 className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {step.step}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     

{/* Technology Section */}
<section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">

  {/* Background Parallax Orbs */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    transition={{ duration: 1.2 }}
    className="absolute inset-0 pointer-events-none"
  >
    <motion.div 
      animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full"
    />
    <motion.div 
      animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
    />
  </motion.div>

  <div className="text-center relative z-10 ">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                    bg-purple-500/10 border border-purple-500/20 mb-4 backdrop-blur-xl">
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
      <span className="text-sm font-medium text-purple-300">Technology</span>
    </div>

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold text-white 
      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
    >
      Tools & Frameworks We Use
    </motion.h3>

    <p className="text-gray-400 max-w-2xl mx-auto">
      A complete blend of coding and non-coding technologies used in this service.
    </p>
  </div>
{/* Parallax Grid Wrapper */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="gap-10 relative z-10 space-y-10"
>

  {/* TECH SECTION */}
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-white tracking-wide">
      Tech Technologies
    </h2>
    <div className="w-16 h-1 bg-purple-500 rounded-full mb-2"></div>

    {/* <div className="h-[28dvh] flex items-center 
      bg-gradient-to-r from-[#0f0f0f] via-[#111827] to-[#0f0f0f]
      rounded-2xl shadow-xl backdrop-blur-xl border border-white/10 p-4"
    > */}
      <LogoLoop
        logos={service.technologies?.map((item) => ({
          node: (
            <div className="flex items-center gap-2 p-8 bg-black/20 rounded-lg">
              {item.icon}
              <span className="text-white/90 text-sm font-medium">
                {item.name}
              </span>
            </div>
          ),
          title: item.name,
        }))}
        speed={40}
        direction="left"
        gap={50}
        logoHeight={50}
        fadeOut
        fadeOutColor="#0f0f0f"
      />
    </div>
  {/* </div> */}

  {/* NON-TECH SECTION */}
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-white tracking-wide">
      Non-Tech Technologies
    </h2>
    <div className="w-20 h-1 bg-pink-500 rounded-full mb-2"></div>

    {/* <div className="h-[28dvh] flex items-center 
      bg-gradient-to-r from-[#0f0f0f] via-[#111827] to-[#0f0f0f]
      rounded-2xl shadow-xl backdrop-blur-xl border border-white/10 p-4"
    > */}
      <LogoLoop
        logos={service.nonTech?.map((item) => ({
          node: (
            <div className="flex items-center gap-2 p-8 bg-black/20 rounded-lg">
              {item.icon}
              <span className="text-white/90 text-sm font-medium">
                {item.name}
              </span>
            </div>
          ),
          title: item.name,
        }))}
        speed={40}
        direction="right"
        gap={50}
        logoHeight={50}
        fadeOut
        fadeOutColor="#0f0f0f"
      />
    {/* </div> */}
  </div>

</motion.div>


</section>




      {/* Deep Dive Accordion */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="text-sm font-medium text-purple-300">
              Technical Details
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Deep Dive</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the technical approach, technologies, and outcomes of this
            service.
          </p>
        </div>
        <div className="space-y-4">
          <AccordionItem
            title="Business Challenge"
            content={service.problemStatement}
            icon={<div className="w-2 h-2 rounded-full bg-red-500" />}
          />
          <AccordionItem
            title="Our Approach"
            content={service.approach}
            icon={<div className="w-2 h-2 rounded-full bg-green-500" />}
          />
          {/* <AccordionItem
            title="Technologies"
            content={service.technologies}
            isList
            isTech
            icon={<div className="w-2 h-2 rounded-full bg-blue-500" />}
          /> */}
          <AccordionItem
            title="Key Features"
            content={service.keyFeatures}
            isList
            icon={<div className="w-2 h-2 rounded-full bg-yellow-500" />}
          />
          <AccordionItem
            title="Outcomes / Business Impact"
            content={service.outcomes}
            isList
            icon={<div className="w-2 h-2 rounded-full bg-purple-500" />}
          />
          <AccordionItem
            title="Engagement Model"
            content={service.engagementModel}
            isList
            icon={<div className="w-2 h-2 rounded-full bg-pink-500" />}
          />
        </div>
      </section>

      {/* Case Study */}
      {service.caseStudy && (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-linear-to-b from-black via-purple-900/5 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-sm font-medium text-purple-300">
                  Case Study
                </span>
              </div>
              <h3 className="text-3xl  font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-purple-200 to-white">
                  Success Story
                </span>
              </h3>
              <p className="text-gray-400 text-lg">
                Real results from real projects
              </p>
            </div>

            {/* Single Row Card */}
            <div className="relative bg-linear-to-br from-white/[0.03] to-white/[0.01] rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Challenge */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2">
                        Challenge
                      </h4>
                      <div className="w-12 h-0.5 bg-linear-to-r from-purple-500/50 to-transparent mb-4" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {service.caseStudy.challenge}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-white/10 to-transparent" />

                {/* Solution */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <div className="w-12 h-0.5 bg-linear-to-r from-blue-500/50 to-transparent mb-4" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {service.caseStudy.solution}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block absolute top-1/2 right-1/3 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-white/10 to-transparent" />

                {/* Result */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">
                        Result
                      </h4>
                      <div className="w-12 h-0.5 bg-linear-to-r from-green-500/50 to-transparent mb-4" />
                    </div>
                  </div>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    {service.caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
  {/* Related Projects */}
      {service.relatedProjects && service.relatedProjects.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-300">
                Portfolio
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Related Projects
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how we've delivered similar solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.relatedProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-linear-to-br from-purple-900/10 to-black overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl text-white/5">
                      <span className="font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-purple-500/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-300">Support</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">
            Common Questions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to frequently asked questions about this service.
          </p>
        </div>
        <div className="space-y-4">
          {service.faq?.map((item, i) => (
            <AccordionItem
              key={i}
              title={item.q}
              content={item.a}
              icon={<div className="w-2 h-2 rounded-full bg-green-500" />}
            />
          ))}
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black via-purple-900/10 to-(--color)/10 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to build something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
              extraordinary?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Share your idea or current product, and we’ll suggest the best scope
            and stack.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-xl shadow-white/10"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AccordionItem({ title, content, isList, isTech, icon }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/2 hover:bg-white/4 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          {icon}
          <span className="text-lg font-bold text-white">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-gray-300 border-t border-white/5 mx-6 mt-2">
          {isList ? (
            <div className="flex flex-wrap gap-3 pt-4">
              {content?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                >
                  {isTech && item.icon && (
                    <span className="text-lg">{item.icon}</span>
                  )}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="leading-relaxed pt-2 text-gray-400">{content}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
