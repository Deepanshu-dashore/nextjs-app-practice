"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import FloatingLines from "../shared/FloatingLines";

export default function TechPartnerSection() {
  const router = useRouter();

  return (
    <section className="relative w-full py-20 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute -left-20 -top-20 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-600 opacity-20 blur-[100px]" />
          <div className="absolute -right-20 -top-20 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-600 opacity-20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-600 opacity-20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-600 opacity-20 blur-[100px]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/tech-partner-collab.png')",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-(--color)/10 via-gray-900/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col justify-between min-h-[500px]">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.5 2C11.5 1.17157 12.1716 0.5 13 0.5C13.8284 0.5 14.5 1.17157 14.5 2V4.5C14.5 5.32843 13.8284 6 13 6C12.1716 6 11.5 5.32843 11.5 4.5V2Z" />
                    <path d="M13 7C11.067 7 9.5 8.567 9.5 10.5V13H6.5C5.39543 13 4.5 13.8954 4.5 15V18C4.5 19.1046 5.39543 20 6.5 20H9.5V22C9.5 23.1046 10.3954 24 11.5 24H13.5C14.6046 24 15.5 23.1046 15.5 22V20H18.5C19.6046 20 20.5 19.1046 20.5 18V15C20.5 13.8954 19.6046 13 18.5 13H15.5V10.5C15.5 8.567 13.933 7 12 7H13Z" />
                    <path d="M2 8C2 7.44772 2.44772 7 3 7H5C5.55228 7 6 7.44772 6 8V10C6 10.5523 5.55228 11 5 11H3C2.44772 11 2 10.5523 2 10V8Z" />
                    <path d="M19 7C18.4477 7 18 7.44772 18 8V10C18 10.5523 18.4477 11 19 11H21C21.5523 11 22 10.5523 22 10V8C22 7.44772 21.5523 7 21 7H19Z" />
                  </svg>
                  <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Tech Partner Program
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to build{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                    together?
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
                  Let's discuss your product, roadmap, and how we can become
                  your long-term tech partner.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/tech-partner"
                    className="group relative bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
                  >
                    <span className="relative z-10">Explore Program</span>
                    <svg
                      className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>

                  <Link
                    href="/tech-partner#apply"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    Apply for Partnership
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
