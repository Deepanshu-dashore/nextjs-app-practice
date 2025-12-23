"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Footer from "../components/shared/Footer";
import { db } from "../firebase";

export default function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
 const [active, setActive] = useState(2);

  // 🔥 Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));

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
const featuredProducts = [
  {
    title: "Enterprise Web Platform",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Scalable SaaS Application",
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mobile-First E-Commerce Solution",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cloud-Integrated Backend System",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
];


  // 🔁 Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);
  return (
    <div className="bg-[#030303] text-white overflow-hidden relative">
      <section className="relative h-[100dvh] overflow-hidden">
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
              systems, and scalable solutions crafted to solve real-world
              problems and drive business growth.
            </p>
          </div>
        </motion.div>
      </section>

<section className="max-w-7xl mx-auto py-32 px-6">

  {/* Heading */}
  <div className="text-center max-w-5xl mx-auto mb-20">
    <h2 className="text-5xl font-extrabold text-white mb-6">
      Featured Projects
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed">
      A selection of our most impactful digital projects — crafted with
      performance, scalability, and user experience at the core. Each
      project reflects our ability to turn complex ideas into elegant,
      real-world solutions.
    </p>
  </div>

  {/* Cards */}
  <div className="relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
      {featuredProducts.map((item, index) => {
        const isCenter = index === 2;

        return (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden group transition-all duration-700
              ${isCenter
                ? "h-[290px] scale-[1.05] z-10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                : "h-[270px] opacity-90 hover:opacity-100"
              }`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover
              transition-transform duration-700 group-hover:scale-110"
            />

         {/* Bottom → Top Gradient */}
<div
  className={`absolute inset-0 bg-gradient-to-t
    ${isCenter
      ? "from-black/80 via-black/30 to-transparent"
      : "from-black/70 via-black/20 to-transparent"
    }`}
 />


            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <h4
                className={`font-semibold leading-snug
                  ${isCenter ? "text-xl text-white" : "text-lg text-white/90"}`}
              >
                {item.title}
              </h4>
            </div>

            {/* Subtle glow for center */}
            {isCenter && (
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none" />
            )}
          </div>
        );
      })}
    </div>

    {/* Pagination dots */}
    <div className="flex justify-center gap-2 mt-10">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all duration-300
            ${i === 2 ? "bg-white w-6" : "bg-white/40 w-2"}`}
        />
      ))}
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto py-28 px-6 ">

  <div className="text-center mb-28">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
      bg-purple-500/10 border border-purple-500/20 mb-4 backdrop-blur-xl">
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
      <span className="text-sm font-medium text-purple-300">Portfolio</span>
    </div>

    <h3 className="text-5xl font-extrabold text-white 
      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
      text-transparent bg-clip-text">
      What We’ve Built
    </h3>

    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
      From intelligent platforms to high-performance web applications,
      these projects reflect our commitment to quality and innovation.
    </p>
  </div>

  {/* EXACT FEATURE GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
    {projects.map((p, index) => (
      <div key={p.id} className="text-center">
        
        {/* BIG SOFT CONTAINER (outer) */}
        <div className="w-full h-[280px] rounded-[28px] 
          bg-white/10
          flex items-center justify-center mb-10">
          
          {/* FLOATING UI MOCKUP (inner) */}
      
            {p.imgUrl ? (
              <img
                src={p.imgUrl}
                alt={p.projectTitle}
                className="w-[85%] h-[85%] object-cover rounded-2xl "
              />
            ) : (
              <span className="text-6xl font-bold text-white/10">
                {index + 1}
              </span>
            )}
   
        </div>
<div className="flex  justify-between  mb-4 items-center w-[90%] mx-auto">
        {/* TEXT IS OUTSIDE — EXACT LIKE REFERENCE */}
        <h4 className="text-xl font-semibold text-white ">
          {p.projectTitle}
        </h4>
        {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between gap-2 items-center text-gray-300 font-semibold  rounded-xl transition-all duration-300 shadow-md"
                  >
                    View  <ArrowRight className="w-5 h-5" />
                  </a>
)}
</div>

  <p className="text-gray-400  text-sm leading-relaxed 
  max-w-sm mx-auto line-clamp-3 text-justify">
  {p.description}
</p>

{/* <a
  href="#"
  className="inline-flex items-center gap-1 mt-3 
  text-sm font-medium text-purple-400 hover:underline"
>
  Read more <span className="text-base">&gt;</span>
</a> */}


      </div>
    ))}
  </div>
</section>

      {/* -------------- CTA PARALLAX SECTION -------------- */}
      <div
        className="relative bg-fixed bg-cover bg-center py-32 px-6"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDLInyNK7tXN4rlBRbtXQvmiXg-0YWuwXIg&s')",
        }}
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
              Let’s turn your ideas into powerful, scalable solutions. Our team
              is here to guide your project from concept to launch, delivering
              impactful digital solutions tailored to your needs.
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
