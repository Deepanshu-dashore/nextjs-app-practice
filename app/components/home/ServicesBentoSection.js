
  "use client";

  import { useRef, useState, useEffect } from "react";
  import { motion, useScroll, useTransform } from "motion/react";
  import Image from "next/image";
  import {
    FaMobile,
    FaLaptopCode,
    FaCode,
    FaPalette,
    FaGamepad,
    FaArrowRight,
  } from "react-icons/fa";
  import ParticleIconDots from "./partiphomis";
import ParticleIconMorph from "./partiphomis";

  const services = [
    {
      id: 1,
      title: "App Development",
      description:
        "We develop scalable, high-performance mobile applications tailored to your business needs using cutting-edge technologies like React Native, Flutter, and native SDKs. Our apps ensure seamless user experiences and robust functionality across platforms.",
      image: "/images/vector-app-dev.png",
      icon: <FaMobile className="text-2xl" />,
      particleIcon: "mobile",
      color: "#4ECDC4",
      buttonText: "Explore App Development",
    },
    {
      id: 2,
      title: "Software Development",
      image: "/images/Software-DFbspHu0.jpg",
      description:
        "Our software development team specializes in building custom, secure, and maintainable software solutions that streamline operations and drive innovation. We follow agile methodologies to deliver quality products efficiently.",
      icon: <FaLaptopCode className="text-2xl" />,
      particleIcon: "laptop",
      color: "#915EFF",
      buttonText: "Learn About Software Development",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Create responsive, SEO-friendly, and modern web applications with our expert web development services. We leverage frameworks like React, Next.js, Angular, and Vue to build user-centric websites that perform across devices.",
      image: "/images/vector-web-dev.png",
      icon: <FaCode className="text-2xl" />,
      particleIcon: "code",
      color: "#FF6B35",
      buttonText: "Discover Web Development",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "We craft intuitive and engaging user interfaces backed by user research and design principles. Our UI/UX services enhance user satisfaction and maximize customer engagement through visually appealing and accessible designs.",
      image: "/images/uiux-CoSCo8oc.jpg",
      icon: <FaPalette className="text-2xl" />,
      particleIcon: "palette",
      color: "#FFD93D",
      buttonText: "See Our Design Solutions",
    },
    {
      id: 5,
      title: "Game Development",
      description:
        "Our game development experts build immersive and engaging games across platforms, using popular engines like Unity and Unreal. We focus on innovative gameplay, graphics, and seamless performance.",
      image: "/images/GameDev.jpg",
      icon: <FaGamepad className="text-2xl" />,
      particleIcon: "gamepad",
      color: "#FF6B9D",
      buttonText: "Start Your Game Project",
    },
  ];




  export default function ServicesBentoSection() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const CARD_WIDTH = 400; // px
    const GAP = 32; // px gap between cards
    const TOTAL_WIDTH = services.length * (CARD_WIDTH + GAP);

    // Scroll progress of the pinned section
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end end"],
    });

    // Horizontal movement based on active card
    const x = useTransform(scrollYProgress, [0, 1], [0, -(TOTAL_WIDTH - 800)]);

    // Update active card 1 by 1
    useEffect(() => {
      return scrollYProgress.on("change", (v) => {
        const index = Math.min(
          services.length - 1,
          Math.floor(v * services.length)
        );
        setActiveIndex(index);
      });
    }, [scrollYProgress]);

    return (
      <section
        ref={sectionRef}
        className="relative bg-black px-6 lg:px-12 py-20 overflow-hidden"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What we offer
            </span>
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver
            exceptional digital solutions that drive your business forward
          </p>
        </motion.div>

        {/* PINNED CONTAINER */}
        <div className="sticky top-0 h-[600px]  flex  items-center px-6 lg:px-12 gap-10 mt-10">
        
  {/* LEFT PARTICLE ICON */}
  <div className="hidden lg:flex w-1/4 justify-center h-full items-center relative ">

    {/* Ambient Glow */}
  <div className="absolute w-[600px] h-[600px] rounded-full 
    bg-indigo-500/15 blur-[160px]" />

<ParticleIconMorph
  key={activeIndex}
  title={services[activeIndex].title}
  isMobile={typeof window !== "undefined" && window.innerWidth < 768}
/>




  </div>


          {/* RIGHT HORIZONTAL TRACK */}
          {/* <div className="w-full lg:w-3/4 overflow-hidden h-full flex items-cente ml-10 ">
            <motion.div style={{ x }} className="flex gap-8 mt-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative group w-[400px] h-[500px] rounded-3xl p-6 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 ${
                    index === activeIndex
                      ? "border-white/60 scale-[1.03]"
                      : "border-white/10"
                  }`}
                >
            
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

             
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{
                        backgroundColor: `${service.color}30`,
                        color: service.color,
                      }}
                    >
                      {service.icon}
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-white/5">
                      <h3 className="text-white font-semibold text-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

            
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

          
                  <div className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
                    {service.buttonText}
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>

         
                  <div className="absolute inset-0 -z-20 opacity-20">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div> */}
                  {/* RIGHT HORIZONTAL TRACK */}
<div className="w-full lg:w-3/4 overflow-hidden h-[600px] flex items-center ml-10">
  <motion.div style={{ x }} className="flex gap-8 px-10">
    {services.map((service, index) => (
      <div
        key={index}
        className={`relative group w-[400px] h-[520px] rounded-[2.5rem] p-8 
          bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl 
          border transition-all duration-500 ease-out flex flex-col justify-between
          ${
            index === activeIndex
              ? "border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-105"
              : "border-white/10 opacity-80"
          }`}
      >
        {/* Animated Glow Overlay */}
        <div 
          className="absolute inset-0 rounded-[2.5rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${service.color}20, transparent 40%)`
          }}
        />

        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner"
              style={{
                background: `linear-gradient(135deg, ${service.color}40, ${service.color}10)`,
                color: service.color,
                border: `1px solid ${service.color}30`
              }}
            >

              {service.icon}
            </div>
                 {/* Title and Description */}
          <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-indigo-300 transition-colors">
            {service.title}
          </h3>
       
          </div>

          <span className="text-xs font-bold tracking-widest text-white/30 uppercase">
              Service 0{index + 1}
            </span>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Action and Visual */}
        <div className="relative mt-auto">
          {/* CTA */}
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white group-hover:bg-white/10 transition-all">
            {service.buttonText}
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </button>

          {/* Featured Image - Shifted to bottom right with 'Pop' effect */}
          {/* <div className="absolute -right-4 -bottom-4 w-48 h-48 pointer-events-none">
            <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div> */}
        </div>

        {/* Bottom Decorative Line */}
        {/* <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] transition-all duration-500 group-hover:w-1/2"
          style={{ backgroundColor: service.color }}
        /> */}
      </div>
    ))}
  </motion.div>
</div>
        </div>
      </section>
    );
  }
