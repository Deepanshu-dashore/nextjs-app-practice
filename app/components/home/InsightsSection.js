
"use client";

import { motion } from "motion/react";
import { FaLightbulb, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const blogPosts = [
  {
    id: 1,
    video: "https://indidevelopers.com/assets/OurServices-NWxd3pLc.mp4",
    date: "Apr 27, 2025",
    title: "Destination net zero 2025",
    description:
      "How leading companies are scaling decarbonization that delivers business value—and why that's the key to lasting impact.",
    bgColor: "from-slate-950 via-slate-900 to-black",
    textColor: "white",
  },
  {
    id: 2,
    video: "https://indidevelopers.com/assets/indiDevVideo-oBIj7jyj.mp4",
    date: "Apr 25, 2025",
    title: "Sovereign AI: From managing risk to accelerating growth",
    description:
      "Sovereign AI isn't just a control play—it's a game-changer for global competitiveness and cultural value.",
    bgColor: "from-rose-200 via-pink-100 to-rose-200",
    textColor: "black",
  },
  {
    id: 3,
    video: "https://indidevelopers.com/assets/video4--pY2iHGw.mp4",
    date: "Apr 23, 2025",
    title: "Holiday shopping 2025",
    description:
      "Holiday shoppers are seeking value combined with experience, convenience and connection.",
    bgColor: "from-gray-950 via-black to-gray-950",
    textColor: "white",
  },
  {
    id: 4,
    video: "https://indidevelopers.com/assets/website-CN2-k6Gn.mp4",
    date: "Apr 21, 2025",
    title: "Poste Italiane pivots platform",
    description:
      "Learn how organizations accelerate reinvention with integrated tech and talent.",
    bgColor: "from-purple-950 via-indigo-950 to-black",
    textColor: "white",
  },
];

export default function InsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* Responsive cards per view */
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3); // desktop unchanged
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? blogPosts.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === blogPosts.length - 1 ? 0 : prev + 1
    );
  };

  /* Auto scroll */
  useEffect(() => {
    const id = setInterval(nextSlide, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 my-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20">
              <FaLightbulb className="text-indigo-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fresh Perspectives
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Insights &{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Thought Leadership
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-6">
              Latest Tech Trends & Strategies
            </p>

            <p className="text-gray-500">
              Explore curated technical deep dives and industry insights.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="lg:col-span-7">
          <div className="relative overflow-hidden">
  <div
    className="flex transition-transform duration-500"
    style={{
      width: `${(blogPosts.length * 100) / cardsPerView}%`,
      transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
    }}
  >
    {blogPosts.map((post) => (
      <motion.article
        key={post.id}
        onMouseEnter={() => setHoveredCard(post.id)}
        onMouseLeave={() => setHoveredCard(null)}
        className="relative flex-shrink-0 mx-2 rounded-xl overflow-hidden"
        style={{ width: `${100 / cardsPerView}%` }}
      >
        {/* Background & Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${post.bgColor}`} />
        <div
          className={`absolute inset-0 ${
            post.textColor === "black" ? "bg-white/80" : "bg-black/80"
          }`}
        />

        {/* VIDEO */}
        <motion.div
          className="absolute inset-0"
          animate={{
            y:
              hoveredCard === post.id && cardsPerView >= 3
                ? "100%"
                : "0%",
          }}
          transition={{ duration: 0.6 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src={post.video} type="video/mp4" />
          </video>
        </motion.div>

        {/* CONTENT */}
        <div
          className={`relative z-10
            min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[420px]
            p-5 flex flex-col justify-between
            ${post.textColor === "black" ? "text-black" : "text-white"}
          `}
        >
          <div>
            <span className="text-xs opacity-70">{post.date}</span>
            <h3 className="text-lg font-bold mt-2">{post.title}</h3>
          </div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x:
                hoveredCard === post.id && cardsPerView >= 3
                  ? "0%"
                  : "100%",
              opacity:
                hoveredCard === post.id && cardsPerView >= 3 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm opacity-80 mb-4">{post.description}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              See <FaArrowRight />
            </span>
          </motion.div>
        </div>
      </motion.article>
    ))}
  </div>
</div>

            {/* NAVIGATION (DESKTOP ONLY) */}
            <div className="hidden lg:flex justify-end items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                <FaArrowLeft />
              </button>

              <span className="text-white font-mono">
                {currentIndex + 1}/{blogPosts.length}
              </span>

              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BLURS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />
    </section>
  );
}
