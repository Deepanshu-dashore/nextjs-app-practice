"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {id: 1,
    title: "Exceptional Development Experience",
    text:"I can’t thank this company enough for their outstanding work in building my portal! Their professionalism, expertise, and attention to detail are unmatched. No other team could have executed this project with such precision and efficiency. They understood my vision perfectly and delivered a seamless, high-performing platform that exceeded my expectations. Highly recommended for anyone looking for top-notch service and innovation! Highly Recommended to all MSME’s. Also before handing this project to them, I had discarded two other projects that were made by other low end developers, coz they did not suit my taste. But these young fellas “Nailed” it, in one stroke.",
    author: "Vikram Singh",
    position: "CEO, TechSolutions Pvt Ltd",
  }
  ,
  {
    id:2,
    title: "Outstanding Customer Service",
    text: "Indidevelopers delivered our platform on time with clean architecture and solid performance. The team understood our vision and turned it into a product our customers love.",
    author: "Rahul Sharma",
    position: "Founder, RetailTech Solutions",
  },
  {
    id: 2,
    title: "Fast Turnaround & Local Support",
    text: "From planning to deployment, their communication was clear and proactive. Our internal tools are now faster, more reliable, and much easier for the team to use.",
    author: "Ananya Verma",
    position: "Operations Head, HotelEase",
  },
  {
    id: 3,
    title: "Excellent Technical Expertise",
    text: "They handled our billing and inventory system with great attention to detail and GST rules. Manual work has dropped drastically, and reports are now just a click away.",
    author: "Karan Mehta",
    position: "Director, Prime Distributors",
  },
  {
    id: 4,
    title: "Reliable & Professional Team",
    text: "Working with Indidevelopers was seamless. Their attention to detail and commitment to quality exceeded our expectations at every stage of development.",
    author: "Priya Desai",
    position: "CTO, FinanceHub",
  },
  {
    id: 5,
    title: "Innovative Solutions Delivered",
    text: "The team brought fresh ideas and modern solutions to our legacy system. The migration was smooth and our users adapted quickly to the new interface.",
    author: "Amit Patel",
    position: "Product Manager, TechCorp",
  },
  {
    id: 6,
    title: "Best Development Partner",
    text: "Indidevelopers has been our go-to partner for all digital projects. Their expertise, responsiveness, and quality of work is consistently outstanding.",
    author: "Sneha Reddy",
    position: "CEO, StartupLabs",
  },
];

const marqueeWords = [
  "TRUSTED",
  "INNOVATIVE",
  "RELIABLE",
  "SCALABLE",
  "SECURE",
];

// Chunk reviews into pairs
const reviewPairs = [];
for (let i = 0; i < reviews.length; i += 2) {
  reviewPairs.push(reviews.slice(i, i + 2));
}

const ReviewCard = ({ review }) => {
  return (
    <div className="relative bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Decorative SVG Pattern */}
      <svg
        className="absolute top-0 right-0 w-24 h-24 opacity-5"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      <div className="space-y-4 relative z-10">
        {/* Title */}
        <h3 className="text-lg font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          {review.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full" />

        {/* Review Text */}
        <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">"{review.text}"</p>

        {/* Divider Line */}
        <div className="border-t border-white/10 pt-4" />

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold text-sm">
              {review.author}
            </h4>
            <p className="text-indigo-400 text-xs">{review.position}</p>
          </div>

          {/* Star Rating */}
          {/* <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 text-xs" />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviewPairs.length);
  }, []);

  const prevReview = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + reviewPairs.length) % reviewPairs.length
    );
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPair = reviewPairs[currentIndex];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden isolate">
      {/* Background Marquee */}
      <div className="absolute inset-0 -z-10 flex flex-col justify-center opacity-[0.08] pointer-events-none select-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="overflow-hidden py-4">
            <motion.div
              animate={{ x: i % 2 === 0 ? [0, -1000] : [-1000, 0] }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 whitespace-nowrap text-7xl md:text-8xl font-black text-white"
            >
              {[...Array(4)].map((_, j) => (
                <div key={j} className="flex gap-8">
                  {marqueeWords.map((word, k) => (
                    <span key={k}>{word}</span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Heading & Navigation */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </div>

              <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                What our{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  clients say
                </span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Real feedback from businesses that trusted Indidevelopers to
                build, scale, and support their digital products.
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center gap-6 mt-12">
                <button
                  onClick={prevReview}
                  className="w-14 h-14 cursor-pointer rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="font-mono text-xl text-white">
                  <span className="text-indigo-400">0{currentIndex + 1}</span>
                  <span className="text-gray-600 mx-2">/</span>
                  <span className="text-gray-400">0{reviewPairs.length}</span>
                </div>

                <button
                  onClick={nextReview}
                  className="w-14 h-14 cursor-pointer rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Review Cards (2 per view) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {currentPair.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
