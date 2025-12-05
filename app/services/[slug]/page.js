"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/shared/Footer";
import { servicesData } from "../../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-400 font-light mb-8 max-w-3xl">
              {service.heroPromise}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                Book a Project Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who this is for & Deliverables */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Who this is for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Who this service is for
            </h3>
            <ul className="space-y-4">
              {service.whoFor?.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What we deliver */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              What we deliver
            </h3>
            <ul className="space-y-4">
              {service.deliverables?.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-12 text-center">
          Our Process
        </h3>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/10 hidden md:block" />

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
                <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-sm font-bold text-white mb-4 relative z-10 group-hover:border-purple-500 group-hover:text-purple-400 transition-colors">
                  {i + 1}
                </div>
                <h4 className="text-white font-semibold mb-2">{step.step}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-12 text-center">
          Deep Dive
        </h3>
        <div className="space-y-4">
          <AccordionItem
            title="Problem Statement"
            content={service.problemStatement}
          />
          <AccordionItem title="Our Approach" content={service.approach} />
          <AccordionItem
            title="Technologies"
            content={service.technologies}
            isList
          />
          <AccordionItem
            title="Key Features"
            content={service.keyFeatures}
            isList
          />
          <AccordionItem
            title="Outcomes / Business Impact"
            content={service.outcomes}
            isList
          />
          <AccordionItem
            title="Engagement Model"
            content={service.engagementModel}
            isList
          />
        </div>
      </section>

      {/* Case Study */}
      {service.caseStudy && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">
              Success Story
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                  Challenge
                </h4>
                <p className="text-gray-300">{service.caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                  Solution
                </h4>
                <p className="text-gray-300">{service.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                  Result
                </h4>
                <p className="text-gray-300">{service.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-12 text-center">
          Common Questions
        </h3>
        <div className="space-y-6">
          {service.faq?.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 border border-white/5"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.q}
              </h4>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-white/10 bg-linear-to-b from-black to-purple-900/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to build?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Share your idea or current product, and we’ll suggest the best scope
          and stack.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
        >
          Discuss this service
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function AccordionItem({ title, content, isList }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-gray-300 border-t border-white/5">
          {isList ? (
            <ul className="space-y-2">
              {content?.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="leading-relaxed">{content}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
