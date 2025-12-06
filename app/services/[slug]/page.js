"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/shared/Footer";
import { servicesData } from "../../data/services";
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
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiRender,
  SiAmazonwebservices,
  SiGraphql,
  SiPostman,
} from "react-icons/si";

// Icon Mapping Helper
const getTechIcon = (techName) => {
  const lower = techName.toLowerCase();
  if (lower.includes("react") && !lower.includes("native"))
    return <SiReact className="text-[#61DAFB]" />;
  if (lower.includes("react native"))
    return <SiReact className="text-[#61DAFB]" />;
  if (lower.includes("next")) return <SiNextdotjs className="text-white" />;
  if (lower.includes("angular"))
    return <SiAngular className="text-[#DD0031]" />;
  if (lower.includes("vue")) return <SiVuedotjs className="text-[#4FC08D]" />;
  if (lower.includes("flutter"))
    return <SiFlutter className="text-[#02569B]" />;
  if (lower.includes("node")) return <SiNodedotjs className="text-[#339933]" />;
  if (lower.includes("express")) return <SiExpress className="text-white" />;
  if (lower.includes("typescript") || lower.includes("ts"))
    return <SiTypescript className="text-[#3178C6]" />;
  if (lower.includes("tailwind"))
    return <SiTailwindcss className="text-[#06B6D4]" />;
  if (lower.includes("mongo")) return <SiMongodb className="text-[#47A248]" />;
  if (lower.includes("postgres") || lower.includes("sql"))
    return <SiPostgresql className="text-[#4169E1]" />;
  if (lower.includes("vercel")) return <SiVercel className="text-white" />;
  if (lower.includes("render")) return <SiRender className="text-[#46E3B7]" />;
  if (lower.includes("aws") || lower.includes("amazon"))
    return <SiAmazonwebservices className="text-[#FF9900]" />;
  if (lower.includes("graphql"))
    return <SiGraphql className="text-[#E10098]" />;
  if (lower.includes("rest") || lower.includes("api"))
    return <SiPostman className="text-[#FF6C37]" />; // Using Postman for APIs
  if (lower.includes("ci/cd") || lower.includes("jenkins"))
    return <SiAppveyor className="text-[#00B3E0]" />;
  if (
    lower.includes("adobe") ||
    lower.includes("figma") ||
    lower.includes("xd")
  )
    return <SiAdobe className="text-[#FF0000]" />;
  if (
    lower.includes("google") ||
    lower.includes("ads") ||
    lower.includes("seo")
  )
    return <SiGoogleads className="text-[#4285F4]" />;
  if (lower.includes("unity") || lower.includes("unreal"))
    return <SiUnity className="text-white" />;
  return null;
};

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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex flex-col justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-900/40 via-black to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
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

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
              >
                Book a Project Call
              </Link>
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

      {/* Deep Dive Accordion */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-12 text-center">
          Deep Dive
        </h3>
        <div className="space-y-4">
          <AccordionItem
            title="Problem Statement"
            content={service.problemStatement}
            icon={<div className="w-2 h-2 rounded-full bg-red-500" />}
          />
          <AccordionItem
            title="Our Approach"
            content={service.approach}
            icon={<div className="w-2 h-2 rounded-full bg-green-500" />}
          />
          <AccordionItem
            title="Technologies"
            content={service.technologies}
            isList
            isTech
            icon={<div className="w-2 h-2 rounded-full bg-blue-500" />}
          />
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-linear-to-r from-white/5 to-white/2 rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Success Story
                  </h3>
                  <p className="text-gray-400">
                    Real results from real projects.
                  </p>
                </div>
                <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h4 className="text-purple-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />{" "}
                    Challenge
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {service.caseStudy.challenge}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />{" "}
                    Solution
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {service.caseStudy.solution}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-green-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />{" "}
                    Result
                  </h4>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    {service.caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-12 text-center">
          Common Questions
        </h3>
        <div className="space-y-6">
          {service.faq?.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
              <p className="text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black via-purple-900/10 to-purple-900/20 pointer-events-none" />
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
                  {isTech && getTechIcon(item) && (
                    <span className="text-lg">{getTechIcon(item)}</span>
                  )}
                  <span>{item}</span>
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
