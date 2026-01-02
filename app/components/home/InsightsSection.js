
"use client";
import { motion } from "motion/react";
import { FaLightbulb, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "Holiday shopping 2025: Tis the season for smarter spending",
    description:
      "Holiday shoppers are seeking value combined with experience, convenience and connection.",
    bgColor: "from-gray-950 via-black to-gray-950",
    textColor: "white",
  },
  {
    id: 4,
    video: "https://indidevelopers.com/assets/website-CN2-k6Gn.mp4",
    date: "Apr 21, 2025",
    title: "Poste Italiane pivots from postal service to national platform",
    description:
      "Learn how organizations accelerate reinvention with an operating model that integrates tech, talent and processes.",
    bgColor: "from-purple-950 via-indigo-950 to-black",
    textColor: "white",
  },
];

export default function InsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* 🔹 Responsive cards per screen */
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  /* 🔹 Navigation: slide 1 card at a time */
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

  /* 🔹 Auto scroll */
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT */}
          <div className="lg:col-span-5 my-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20">
                <FaLightbulb className="text-indigo-400" />
                <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Fresh Perspectives
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Insights &{" "}
                <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Thought Leadership
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                Latest Tech Trends & Strategies
              </p>

              <p className="text-gray-500 leading-relaxed">
                Explore our curated collection of technical deep dives, industry
                insights, and practical guides.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                  width: `${(blogPosts.length * 100) / cardsPerView}%`,
                }}
              >
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative flex-shrink-0 mx-2 rounded-xl overflow-hidden cursor-pointer"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    {/* Background */}
                    <div className={`absolute inset-0 bg-linear-to-br ${post.bgColor}`} />
                    <div
                      className={`absolute inset-0 ${
                        post.textColor === "black"
                          ? "bg-linear-to-b from-white/80 to-white/80"
                          : "bg-linear-to-b from-black/80 to-black/80"
                      }`}
                    />

                    {/* Video */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ y: hoveredCard === post.id ? "100%" : "0%" }}
                      transition={{ duration: 0.7 }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={post.video} type="video/mp4" />
                      </video>
                    </motion.div>

                    {/* Content */}
                    <div
                      className={`relative z-10 
                        h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px]
                        p-4 sm:p-5 md:p-6
                        flex flex-col justify-between
                        ${post.textColor === "black" ? "text-black" : "text-white"}
                      `}
                    >
                      <div>
                        <span className="text-[10px] sm:text-xs tracking-widest opacity-70">
                          {post.date}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold mt-2">
                          {post.title}
                        </h3>
                      </div>

                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{
                          x: hoveredCard === post.id ? "0%" : "100%",
                          opacity: hoveredCard === post.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <p className="text-xs sm:text-sm opacity-80 mb-4">
                          {post.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold">
                          See <FaArrowRight />
                        </span>
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
           <div className="flex items-center gap-4">
             {/* Arrow Buttons */}
             <button
               onClick={() => {
                 setIsPlaying(false);
                 prevSlide();
               }}
               className="w-12 h-12 flex cursor-pointer items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
             >
               <FaArrowLeft size={16} /> 
             </button>
             
             {/* Counter */}
             <span className="text-white font-mono text-base">
               {currentIndex + 1}/{blogPosts.length}
             </span>
             
             <button
               onClick={() => {
                 setIsPlaying(false);
                 nextSlide();
               }}
               className="w-12 h-12 flex cursor-pointer items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
             >
               <FaArrowRight size={16} />
             </button>
           </div>
            </div>
          </div>

        </div>
      </div>

      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />
    </section>
  );
}
