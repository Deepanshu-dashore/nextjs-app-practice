// "use client";
// import { motion } from "motion/react";
// import { FaLightbulb, FaArrowRight } from "react-icons/fa";
// import { useState } from "react";

// const blogPosts = [
//   {
//     id: 1,
//     video: "https://indidevelopers.com/assets/OurServices-NWxd3pLc.mp4",
//     date: "Apr 27, 2025",
//     title: "Destination net zero 2025",
//     description:
//       "How leading companies are scaling decarbonization that delivers business value—and why that's the key to lasting impact.",
//     bgColor: "from-slate-950 via-slate-900 to-black",
//     textColor: "white",
//   },
//   {
//     id: 2,
//     video: "https://indidevelopers.com/assets/indiDevVideo-oBIj7jyj.mp4",
//     date: "Apr 25, 2025",
//     title: "Sovereign AI: From managing risk to accelerating growth",
//     description:
//       "Sovereign AI isn't just a control play—it's a game-changer for global competitiveness and cultural value.",
//     bgColor: "from-rose-200 via-pink-100 to-rose-200",
//     textColor: "black",
//   },
//   {
//     id: 3,
//     video: "https://indidevelopers.com/assets/video4--pY2iHGw.mp4",
//     date: "Apr 23, 2025",
//     title: "Holiday shopping 2025: Tis the season for smarter spending",
//     description:
//       "Holiday shoppers are seeking value combined with experience, convenience and connection.",
//     bgColor: "from-gray-950 via-black to-gray-950",
//     textColor: "white",
//   },
//   {
//     id: 4,
//     video: "https://indidevelopers.com/assets/website-CN2-k6Gn.mp4",
//     date: "Apr 21, 2025",
//     title: "Poste Italiane pivots from postal service to national platform",
//     description:
//       "Learn how organizations accelerate reinvention with an operating model that integrates tech, talent and processes.",
//     bgColor: "from-purple-950 via-indigo-950 to-black",
//     textColor: "white",
//   },
//   {
//     id: 5,
//     video: "https://indidevelopers.com/assets/video4--pY2iHGw.mp4",
//     date: "Apr 19, 2025",
//     title: "AI and your operating model: Radically new ways of working",
//     description:
//       "Traditional workflows will evolve with gen AI to drive sustainable growth.",
//     bgColor: "from-purple-950 via-purple-900 to-black",
//     textColor: "white",
//   },
//   {
//     id: 6,
//     video: "https://indidevelopers.com/assets/bussinessreel-m58TXKYd.mp4",
//     date: "Apr 17, 2025",
//     title: "Building Scalable SaaS Platforms",
//     description:
//       "Architecture patterns for building SaaS platforms that scale to millions of users.",
//     bgColor: "from-white via-gray-100 to-white",
//     textColor: "black",
//   },
// ];

// export default function InsightsSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section className="relative py-20 bg-black overflow-hidden">
//       <div className="mx-auto px-4 sm:px-6 lg:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           <div className="col-span-6 my-auto">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
//                 <FaLightbulb className="w-4 h-4 text-indigo-400" />
//                 <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Fresh Perspectives
//                 </span>
//                 <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
//               </div>

//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//                 Insights &{" "}
//                 <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
//                   Thought Leadership
//                 </span>
//               </h2>

//               <p className="text-xl text-gray-400 mb-8">
//                 Latest Tech Trends & Strategies
//               </p>

//               <p className="text-gray-500 leading-relaxed">
//                 Explore our curated collection of technical deep dives, industry
//                 insights, and practical guides.
//               </p>
//             </motion.div>
//           </div>
//           {/* Right Side - Blog Cards Grid */}
//           {blogPosts.map((post, index) => (
//             <motion.article
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               onMouseEnter={() => setHoveredCard(post.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="group col-span-3 relative overflow-hidden h-[450px] cursor-pointer"
//             >
//               {/* Background Gradient */}
//               <div
//                 className={`absolute z-0 inset-0 bg-linear-to-br ${post.bgColor}`}
//               />
//               <div
//                 className={`absolute z-20 inset-0 bg-linear-to-b ${
//                   post.textColor !== "black"
//                     ? "from-black/80 via-transparent to-black/80"
//                     : "from-white/80 via-transparent to-white/80"
//                 }`}
//               />

//               {/* Video Layer - Scrolls down on hover */}
//               <motion.div
//                 className="absolute z-10 inset-0"
//                 animate={{
//                   y: hoveredCard === post.id ? "100%" : "0%",
//                 }}
//                 transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
//               >
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover opacity-100"
//                 >
//                   <source src={post.video} type="video/mp4" />
//                 </video>
//               </motion.div>

//               {/* Content */}
//               <div
//                 className={`relative h-full flex flex-col justify-between p-6 z-20 ${
//                   post.textColor === "black" ? "text-black" : "text-white"
//                 }`}
//               >
//                 {/* Top - Date and Title (Fixed) */}
//                 <div>
//                   <span
//                     className={`text-sm font-semibold tracking-widest mb-4 block ${
//                       post.textColor === "black"
//                         ? "text-black/70"
//                         : "text-white/70"
//                     }`}
//                   >
//                     {post.date}
//                   </span>
//                   <h3
//                     className={`text-xl font-bold leading-tight ${
//                       post.textColor === "black" ? "text-black" : "text-white"
//                     }`}
//                   >
//                     {post.title}
//                   </h3>
//                 </div>

//                 {/* Bottom - Description and Button (Slides from right) */}
//                 <motion.div
//                   initial={{ x: "100%", opacity: 0 }}
//                   animate={{
//                     x: hoveredCard === post.id ? "0%" : "100%",
//                     opacity: hoveredCard === post.id ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//                   className="absolute bottom-0 left-0 right-0 p-8"
//                 >
//                   <p
//                     className={`text-sm leading-relaxed mb-6 ${
//                       post.textColor === "black"
//                         ? "text-black/80"
//                         : "text-white/80"
//                     }`}
//                   >
//                     {post.description}
//                   </p>

//                   <motion.button
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{
//                       y: hoveredCard === post.id ? 0 : 20,
//                       opacity: hoveredCard === post.id ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.4, delay: 0.2 }}
//                     className={`inline-flex items-center gap-2 font-semibold text-sm group/btn ${
//                       post.textColor === "black" ? "text-black" : "text-white"
//                     }`}
//                   >
//                     See
//                     <FaArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       {/* Background Decoration */}
//       <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
//     </section>
//   );
// }
"use client";
import { motion } from "motion/react";
import { FaLightbulb, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
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

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side */}
          <div className="col-span-5 my-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
                <FaLightbulb className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Fresh Perspectives
                </span>
                <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Insights &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  Thought Leadership
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8">
                Latest Tech Trends & Strategies
              </p>

              <p className="text-gray-500 leading-relaxed">
                Explore our curated collection of technical deep dives, industry
                insights, and practical guides.
              </p>
            </motion.div>
          </div>

          {/* Right Side Slider */}
          <div className="col-span-7 flex flex-col">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                  width: `${(blogPosts.length * 100) / 3}%`,
                }}
              >
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative flex-shrink-0 w-[calc(100%/3)] h-[450px] mx-2 cursor-pointer rounded-xl overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute z-0 inset-0 bg-linear-to-br ${post.bgColor}`}
                    />
                    <div
                      className={`absolute z-20 inset-0 bg-linear-to-b ${
                        post.textColor !== "black"
                          ? "from-black/80 via-transparent to-black/80"
                          : "from-white/80 via-transparent to-white/80"
                      }`}
                    />

                    {/* Video */}
                    <motion.div
                      className="absolute z-10 inset-0"
                      animate={{
                        y: hoveredCard === post.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
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
                      className={`relative h-full flex flex-col justify-between p-6 z-20 ${
                        post.textColor === "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-sm font-semibold tracking-widest mb-4 block ${
                            post.textColor === "black"
                              ? "text-black/70"
                              : "text-white/70"
                          }`}
                        >
                          {post.date}
                        </span>
                        <h3 className={`text-xl font-bold leading-tight`}>
                          {post.title}
                        </h3>
                      </div>

                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{
                          x: hoveredCard === post.id ? "0%" : "100%",
                          opacity: hoveredCard === post.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute bottom-0 left-0 right-0 p-8"
                      >
                        <p
                          className={`text-sm leading-relaxed mb-6 ${
                            post.textColor === "black"
                              ? "text-black/80"
                              : "text-white/80"
                          }`}
                        >
                          {post.description}
                        </p>

                        <motion.button
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredCard === post.id ? 0 : 20,
                            opacity: hoveredCard === post.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className={`inline-flex items-center gap-2 font-semibold text-sm`}
                        >
                          See <FaArrowRight className="w-3 h-3" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
 {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="px-4 py-2 border text-white rounded-md hover:bg-purple-400 hover:border-purple-500 font-semibold hover:scale-105 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 border text-white rounded-md hover:bg-purple-500 hover:border-purple-500 font-semibold hover:scale-105 transition"
            >
              <ChevronRight />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
    </section>
  );
}
