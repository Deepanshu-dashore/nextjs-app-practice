
  "use client";

  import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

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
    // image: "/images/vector-app-dev.png",
    icon: <FaMobile className="text-2xl" />,
    particleIcon: "mobile",
    color: "#4ECDC4",
    buttonText: "Explore App Development",
    features: [
      "Cross-platform mobile apps for iOS & Android",
      "Smooth, intuitive user experiences",
      "Integration with APIs and third-party services",
      "Scalable and maintainable architecture"
    ]
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
    features: [
      "Custom software tailored to business needs",
      "Secure and reliable codebase",
      "Agile development for faster delivery",
      "Easy integration with existing systems"
    ]
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
    features: [
      "Responsive and mobile-friendly websites",
      "Optimized for SEO and performance",
      "Modern frameworks like React & Next.js",
      "Engaging user experiences and UI"
    ]
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
    features: [
      "User-focused interface design",
      "Engaging and intuitive UX flows",
      "Consistent brand experience",
      "Accessibility and usability best practices"
    ]
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
    features: [
      "Cross-platform game development",
      "Immersive graphics and sound design",
      "Smooth performance across devices",
      "Innovative gameplay and mechanics"
    ]
  },
];




  export default function ServicesBentoSection() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const trackRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [cardWidth, setCardWidth] = useState(400);
    const [activeIndex, setActiveIndex] = useState(0);
const [lockScroll, setLockScroll] = useState(false);

    const GAP = 32; // px gap between cards
    const CARD_WIDTH = cardWidth; // px (updated on resize)
    const TOTAL_WIDTH = services.length * (CARD_WIDTH + GAP);

    // Scroll progress of the pinned section
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end end"],
    });

    // Horizontal movement based on active card. On mobile we won't translate horizontally.
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 800;
    const visibleWidth = isMobile ? viewportWidth : 800;
const rawX = useTransform(
  scrollYProgress,
  [0, 1],
  [0, -(TOTAL_WIDTH - visibleWidth)]
);

const x = useSpring(rawX, {
  stiffness: 50,
  damping: 25,
  mass: 1.1,
});

    
    useEffect(() => {
      function onResize() {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);
        setCardWidth(mobile ? Math.min(360, window.innerWidth - 48) : 400);
      }
      onResize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

   
    useEffect(() => {
   
      if (!isMobile) {
        return scrollYProgress.on("change", (v) => {
          const index = Math.min(
            services.length - 1,
            Math.floor(v * services.length)
          );
          setActiveIndex(index);
        });
      }
   
      return () => {};
    }, [scrollYProgress, isMobile]);

  
    useEffect(() => {
      if (!isMobile) {
        cardRefs.current = [];
        return;
      }
      const elList = cardRefs.current || [];
      const rootEl = trackRef.current || null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Number(entry.target.getAttribute("data-index")) || 0;
              setActiveIndex(idx);
            }
          });
        },
        { root: rootEl, rootMargin: "0px", threshold: 0.6 }
      );

      elList.forEach((el) => el && observer.observe(el));
      return () => {
        observer.disconnect();
      };
    }, [isMobile]);


    return (

<section
  ref={sectionRef}
  className="
    relative bg-black px-6 lg:px-5
    py-20
    overflow-hidden
    lg:h-[150vh]   
  "
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

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver
            exceptional digital solutions that drive your business forward
          </p>
        </motion.div>

{/* PINNED CONTAINER */}
<div className="mt-10 flex flex-col lg:sticky lg:top-0 lg:h-screen lg:flex-row lg:items-center px-4 lg:px-12 gap-8">

  {/* LEFT PARTICLE ICON (DESKTOP ONLY) */}
 <div className="hidden lg:flex w-[400px] justify-center h-full items-center relative ml-10">
  <ParticleIconMorph
    key={activeIndex}
    title={services[activeIndex].title}
  />
</div>



  {/* RIGHT HORIZONTAL TRACK */}

<div 
  ref={trackRef}
  className="
    w-full relative flex items-center
    overflow-x-auto lg:overflow-hidden
    scroll-smooth
    scrollbar-hide
  "
  style={{
    WebkitOverflowScrolling: "touch",
    scrollPaddingLeft: "1rem",
    scrollPaddingRight: "4rem",
  }}
>

    
    {/* Desktop fade overlays */}
    <div
      className="absolute left-0 top-0 h-full w-20 pointer-events-none z-20 hidden lg:block"
      style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)",
        backdropFilter: "blur(40px)",
      }}
    />

    <div
      className="absolute right-0 top-0 h-full w-10 pointer-events-none z-20 hidden lg:block"
      style={{
        background: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
        backdropFilter: "blur(40px)",
      }}
    />

    {/* CARD TRACK */}
  {/* <motion.div
  style={{ x }}
  className="
    flex
    gap-8
    px-4
    lg:px-14
    lg:ml-10
    w-max

    py-10
  "
> */}
<motion.div
  style={{
    x,
    willChange: "transform",
    transform: "translateZ(0)",
 
  }}

  className="flex gap-8 px-4 lg:px-14 lg:ml-10 w-max py-10  "
>

      {services.map((service, index) => (
        <div
          key={index}
          data-index={index}
          ref={(el) => (cardRefs.current[index] = el)}

  className={`

    relative group transition-all duration-500 ease-out
    flex flex-col justify-between
    bg-gradient-to- from-white/10 to-transparent
    backdrop-blur-2xl
    border
    ${index === activeIndex
      ? "border-white/20 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-105"
      : "border-white/10 opacity-80"}
   
    w-[320px] sm:w-[360px] lg:w-[400px]
    h-[550px]

    rounded-[2.5rem]
    p-6 lg:p-8
    shrink-0
  `}


        
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity -z-10"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${service.color}20, transparent 40%)`
            }}
          />

          <div>
            {/* Header */}
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

     <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-wide w-[80%]">

                {service.title}
              </h3>
            </div>

            <span className="text-xs font-bold tracking-widest text-white/30 uppercase">
              Service 0{index + 1}
            </span>

  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4">

              {service.description}
            </p>

           <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">

              Features:
              {service.features.map((feature, i) => (
                <li key={i}  className="text-gray-300 text-xs sm:text-sm flex items-center gap-2 mt-1.5 sm:mt-2"
>
                  <span className="text-purple-400">•</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-6">
      <button className="
  flex items-center gap-2
  px-4 sm:px-5
  py-2 sm:py-2.5
  rounded-full
  bg-white/5 border border-white/10
  text-xs sm:text-sm
  text-white
  hover:bg-white/10 transition
">
    {service.buttonText}
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</div>


      </section>
    );
  }
