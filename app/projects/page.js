
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Footer from "../components/shared/Footer";
import { db } from "../firebase";

export default function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      const q = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(list);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="bg-[#030303] text-white overflow-hidden relative">

     <section className="relative h-[96dvh] overflow-hidden">
  {/* FIXED BACKGROUND */}
  <motion.div className="absolute inset-0 will-change-transform">
    <div
      className="absolute inset-0 bg-cover bg-center scale-110"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/07/54/80/09/360_F_754800974_CXB9YRXM2ItqqUoEYouZnzctO9BTQhSv.jpg')",
      }}
    />
    <div className="absolute inset-0 bg-black/70" />
  </motion.div>

  {/* CONTENT */}
  <motion.div className="relative z-10 h-full flex items-center">
    <div className="max-w-3xl mx-20">
      {/* SUBHEADING */}
      <span className="text-sm tracking-[0.3em] uppercase text-white">
        Our Work
      </span>

      <div className="h-px max-w-sm bg-linear-to-r from-white/60 to-transparent mt-3" />

      {/* MAIN HEADING */}
      <h1 className="text-6xl md:text-7xl font-bold mt-3 text-white">
        Turning Ideas Into{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Powerful Solutions
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-xl text-gray-300 mt-6 max-w-4xl">
        Explore our portfolio of innovative digital products, intelligent
        systems, and scalable solutions crafted to solve real-world problems
        and drive business growth.
      </p>
    </div>
  </motion.div>
</section>


      {/* ---------------- PROJECT SECTION ---------------- */}
     <section className="max-w-7xl mx-auto py-24 px-6 relative">
  {/* HEADER */}
  <div className="text-center relative z-10 mb-20">
   
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                    bg-purple-500/10 border border-purple-500/20 mb-4 backdrop-blur-xl">
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
      <span className="text-sm font-medium text-purple-300"> Portfolio</span>
    </div>
  <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-white 
        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
  
      What We’ve Built
    </motion.h3>

    <p className="text-gray-400 max-w-2xl mx-auto mt-3">
      From intelligent platforms to high-performance web applications,
      these projects reflect our commitment to quality and innovation.
    </p>
  </div>

  {/* Loading */}
  {loading && (
    <p className="text-center text-gray-400">Loading projects...</p>
  )}

 {/* PROJECTS GRID */}
        <div className="max-w-7xl mx-auto px-6 space-y-32">

          {projects.map((p, index) => (
            <div
              key={p.id}
              className="grid lg:grid-cols-2 gap-20 items-cente justify-between"
            >
          {/* LEFT CONTENT */}
<div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"} space-y-6`}>


  {/* Project Title */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl capitalize font-extrabold text-white"
  >
    {p.projectTitle}
  </motion.h2>

  {/* Description Box */}
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl backdrop-blur-xl shadow-lg">
    <p className="text-gray-300 leading-relaxed text-lg">
      {p.description}
    </p>
  </div>

  {/* Call to Action */}
  {p.link && (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gray-600/20 hover:bg-gray-500/30 text-blue-600   hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
    >
      View Project <ArrowRight className="w-5 h-5" />
    </a>
  )}
</div>


              {/* IMAGE */}
              <div
                className={`w-full max-w-md sticky top-24 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-video rounded-xl overflow-hidden 
                             bg-white/5 border border-white/10 backdrop-blur-sm p-8 h-[420px] w-[550px]
                             flex items-center justify-center group hover:border-white/20 transition"
                >
                  {/* IMAGE TITLE */}
                  {/* <div className="absolute top-4 left-4 z-20 
                                  bg-blue-600/20 backdrop-blur-md 

                                  px-4 py-2 rounded-lg border border-blue-500">
                    <h3 className="text-sm font-semibold text-white">
                      {p.projectTitle}
                    </h3>
                  </div> */}

                  <div className="relative z-10 w-full h-full overflow-hidden rounded-lg">
                    {p.imgUrl ? (
                      <img
                        src={p.imgUrl}
                        alt={p.projectTitle}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-7xl font-bold text-white/10">
                        {index + 1}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>


  {!loading && projects.length === 0 && (
    <p className="text-center text-gray-500 mt-20">
      No projects available
    </p>
  )}
</section>


{/* -------------- CTA PARALLAX SECTION -------------- */}
<div
  className="relative bg-fixed bg-cover bg-center py-32 px-6"
  style={{ backgroundImage: "url('/images/ctabg.jpeg')" }}
>
  {/* Dark overlay + gradient for contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-sm shadow-inner"></div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-10"
    >
      {/* Decorative Line */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
        <div className="relative">
          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-widest uppercase">
            Together beyond borders
          </span>
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
        </div>
        <div className="h-px w-20 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
      </div>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
        Want to Build Something{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Amazing?
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mb-10">
        Let’s turn your ideas into powerful, scalable solutions. Our team is here to guide your project from concept to launch, delivering impactful digital solutions tailored to your needs.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 bg-white rounded-full hover:bg-blue-50 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
          <span className="relative z-10 flex items-center">
            Talk to the team
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white/20 rounded-full hover:border-indigo-500/50 hover:bg-white/5 hover:-translate-y-1 backdrop-blur-sm">
          View our work
          <svg
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button> */}
      </div>
    </motion.div>
  </div>
</div>



      <Footer />
    </div>
  );
}
