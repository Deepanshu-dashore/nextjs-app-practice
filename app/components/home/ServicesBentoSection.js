"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaMobile,
  FaPalette,
  FaBullhorn,
  FaGamepad,
  FaLaptopCode,
  FaShieldAlt,
  FaRocket,
  FaDatabase,
  FaDesktop,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.95,
          y: 20,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 2,
        stiffness: 300,
        damping: 30,
      }}
      className={`rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-8 overflow-hidden relative transition-all duration-300 hover:border-white/20 ${className}`}
      {...rest}
    />
  );
};

const ServicesBentoSection = () => {
  const services = [
    // Row 1
    {
      id: 1,
      title: "App Development",
      description:
        "We develop scalable, high-performance mobile applications tailored to your business needs using cutting-edge technologies like React Native, Flutter, and native SDKs. Our apps ensure seamless user experiences and robust functionality across platforms.",
      image: "/images/vector-app-dev.png",
      icon: <FaMobile className="text-2xl" />,
      color: "#4ECDC4",
      buttonText: "Explore App Development",
      colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      rowSpan: "row-span-2",
    },
    // {
    //   id: 7,
    //   title: "Clean Code",
    //   description:
    //     "We write maintainable, scalable, and efficient code that follows industry best practices.",
    //   icon: <FaCheckCircle className="text-2xl" />,
    //   color: "#10B981",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    //   rowSpan: "row-span-1",
    // },
    {
      id: 2,
      title: "Software Development",
      image: "/images/Software-DFbspHu0.jpg",
      description:
        "Our software development team specializes in building custom, secure, and maintainable software solutions that streamline operations and drive innovation. We follow agile methodologies to deliver quality products efficiently.",
      icon: <FaLaptopCode className="text-2xl" />,
      color: "#915EFF",
      buttonText: "Learn About Software Development",
      isSolid: false,
      colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      rowSpan: "row-span-1",
    },

    // Row 2
    // {
    //   id: 8,
    //   title: "Database Management",
    //   description:
    //     "Expert database design and optimization for optimal performance and scalability.",
    //   icon: <FaDatabase className="text-2xl" />,
    //   color: "#8B5CF6",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    //   rowSpan: "row-span-1",
    // },
    {
      id: 3,
      title: "Web Development",
      description:
        "Create responsive, SEO-friendly, and modern web applications with our expert web development services. We leverage frameworks like React, Next.js, Angular, and Vue to build user-centric websites that perform across devices.",
      image: "/images/vector-web-dev.png",
      icon: <FaCode className="text-2xl" />,
      color: "#FF6B35",
      buttonText: "Discover Web Development",
      colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      rowSpan: "row-span-1",
    },
    // {
    //   id: 9,
    //   title: "Responsive Design",
    //   description:
    //     "Creating beautiful, responsive websites that work perfectly on all devices.",
    //   icon: <FaDesktop className="text-2xl" />,
    //   color: "#F59E0B",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    //   rowSpan: "row-span-1",
    // },

    // Row 3
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "We craft intuitive and engaging user interfaces backed by user research and design principles. Our UI/UX services enhance user satisfaction and maximize customer engagement through visually appealing and accessible designs.",
      image: "/images/uiux-CoSCo8oc.jpg",
      icon: <FaPalette className="text-2xl" />,
      color: "#FFD93D",
      buttonText: "See Our Design Solutions",
      colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      rowSpan: "row-span-1",
    },
    {
      id: 6,
      title: "Game Development",
      description:
        "Our game development experts build immersive and engaging games across platforms, using popular engines like Unity and Unreal. We focus on innovative gameplay, graphics, and seamless performance.",
      image: "/images/GameDev.jpg",
      icon: <FaGamepad className="text-2xl" />,
      color: "#FF6B9D",
      buttonText: "Start Your Game Project",
      colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      rowSpan: "row-span-1",
    },
    // {
    //   id: 10,
    //   title: "Modern Architecture",
    //   description:
    //     "Building scalable and maintainable applications using modern architectural patterns.",
    //   icon: <FaCode className="text-2xl" />,
    //   color: "#EC4899",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    //   rowSpan: "row-span-1",
    // },
    // {
    //   id: 11,
    //   title: "Performance Optimization",
    //   description:
    //     "Optimizing your applications for speed, efficiency, and better user experience.",
    //   icon: <FaChartLine className="text-2xl" />,
    //   color: "#14B8A6",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-3",
    //   rowSpan: "row-span-1",
    // },

    // // Row 4
    // {
    //   id: 12,
    //   title: "Security First",
    //   description:
    //     "Implementing robust security measures to protect your applications and data.",
    //   icon: <FaShieldAlt className="text-2xl" />,
    //   color: "#EF4444",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-3",
    //   rowSpan: "row-span-1",
    // },
    // {
    //   id: 5,
    //   title: "Digital Marketing",
    //   description:
    //     "Boost your brand awareness and online presence through tailored digital marketing strategies, including SEO, social media marketing, PPC campaigns, and content marketing that deliver measurable results.",
    //   icon: <FaBullhorn className="text-2xl" />,
    //   color: "#6BCF7F",
    //   image: "/images/DigitalMaketing.png",
    //   buttonText: "Explore Digital Marketing",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-3",
    //   rowSpan: "row-span-1",
    // },

    // // Row 5
    // {
    //   id: 13,
    //   title: "Fast Development",
    //   description:
    //     "Quick turnaround times without compromising on quality or performance.",
    //   icon: <FaRocket className="text-2xl" />,
    //   color: "#3B82F6",
    //   isSolid: true,
    //   colSpan: "col-span-12 md:col-span-6 lg:col-span-3",
    //   rowSpan: "row-span-1",
    // },
  ];

  return (
    // <section
    //   id="services"
    //   className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    // >
    //   {/* Background Pattern */}
    //   <div className="absolute inset-0 z-0">
    //     <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
    //       <div className="absolute left-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-600 opacity-20 blur-[100px]" />
    //       <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-600 opacity-20 blur-[100px]" />
    //     </div>
    //   </div>

    //   <div className="relative z-10 max-w-7xl mx-auto">
    //     {/* Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.5 }}
    //       className="text-center mb-16"
    //     >
    //       {/* Badge */}
    //       <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
    //         <svg
    //           className="w-4 h-4 text-indigo-400"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    //         </svg>
    //         <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    //           What we offer
    //         </span>
    //         <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
    //       </div>

    //       <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
    //         Our Services
    //       </h2>
    //       <p className="text-xl text-gray-400 max-w-2xl mx-auto">
    //         We combine technical expertise with creative innovation to deliver
    //         exceptional digital solutions that drive your business forward
    //       </p>
    //     </motion.div>

    //     {/* Bento Grid */}
    //     <motion.div
    //       initial="initial"
    //       whileInView="animate"
    //       viewport={{ once: true, margin: "-100px" }}
    //       transition={{
    //         staggerChildren: 0.08,
    //       }}
    //       className="grid grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
    //     >
    //       {services.map((service) => (
    //         <Block
    //           key={service.id}
    //           className={`${service.colSpan} ${service.rowSpan} group cursor-pointer hover:bg-zinc-900/70`}
    //           whileHover={{
    //             scale: 1.02,
    //             y: -4,
    //           }}
    //         >
    //           {/* Background Image - for image-based cards */}
    //           {service.image && !service.isSolid && (
    //             <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-500">
    //               <Image
    //                 src={service.image}
    //                 alt={service.title}
    //                 fill
    //                 className="object-cover"
    //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //               />
    //               <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/20 to-black/40" />
    //             </div>
    //           )}

    //           {/* Solid Color Background - for solid cards */}
    //           {service.isSolid && (
    //             <div
    //               className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-500"
    //               style={{
    //                 background: `linear-gradient(135deg, ${service.color}40 0%, ${service.color}20 50%, ${service.color}10 100%)`,
    //               }}
    //             />
    //           )}

    //           {/* Content */}
    //           <div className="relative z-10 h-full flex flex-col justify-between">
    //             <div>
    //               <div className="flex items-center gap-3 mb-3">
    //                 <div
    //                   className="inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group-hover:scale-110"
    //                   style={{
    //                     backgroundColor: `${service.color}20`,
    //                     color: service.color,
    //                   }}
    //                 >
    //                   {service.icon}
    //                 </div>
    //                 <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
    //                   {service.title}
    //                 </h3>
    //               </div>
    //               <p className="text-gray-400 text-sm leading-relaxed">
    //                 {service.description}
    //               </p>
    //             </div>

    //             {!service.isSolid && service.buttonText && (
    //               <Link
    //                 href="/services"
    //                 className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 w-fit group/btn"
    //               >
    //                 <span className="text-sm font-medium">
    //                   {service.buttonText}
    //                 </span>
    //                 <FaArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
    //               </Link>
    //             )}
    //           </div>
    //         </Block>
    //       ))}
    //     </motion.div>

    //     {/* CTA Button */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.5, delay: 0.3 }}
    //       className="text-center mt-12"
    //     >
    //       <Link
    //         href="/services"
    //         className="inline-block px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
    //       >
    //         EXPLORE ALL SERVICES
    //       </Link>
    //     </motion.div>
    //   </div>
    // </section>
    <section
  id="services"
  className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:18px_28px]" />

    {/* Glow Orbs */}
    <div className="absolute left-10 top-20 h-[320px] w-[320px] rounded-full bg-indigo-600/20 blur-[120px]" />
    <div className="absolute right-10 bottom-20 h-[320px] w-[320px] rounded-full bg-purple-600/20 blur-[120px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      {/* Modern Premium Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full 
          bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.07)]">
        <span className="text-indigo-400 text-sm font-medium">What We Offer</span>
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Our Services
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Delivering high-quality digital solutions through strategy, design and cutting-edge technology.
      </p>
    </motion.div>

    {/* Bento Grid */}
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.08 }}
      className="grid grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]"
    >
      {services.map((service) => (
       <Block
  key={service.id}
  className={`${service.colSpan} ${service.rowSpan} group cursor-pointer 
      relative rounded-2xl overflow-hidden
      border border-white/10 bg-white/[0.04] backdrop-blur-xl
      hover:bg-white/[0.06]
      transition-all duration-500
      hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]
      hover:-translate-y-3`}
  whileHover={{ scale: 1.03 }}
>
  {/* Light Reflection Overlay */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 bg-gradient-to-br from-white/30 to-transparent" />

  {/* Background Image */}
  {!service.isSolid && service.image && (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover scale-110 group-hover:scale-100 transition-all duration-700"
      />
      {/* Dark Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>
  )}

  {/* Solid background gradient */}
  {service.isSolid && (
    <div
      className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `linear-gradient(135deg, ${service.color}40, #000)`,
      }}
    />
  )}

  {/* CONTENT */}
  <div className="relative z-10 h-full flex flex-col justify-between p-7">
    <div>
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center
           bg-white/10 backdrop-blur-md border border-white/20
           shadow-[0_0_20px_rgba(99,102,241,0.25)]
           transition-all duration-500 group-hover:scale-110"
          style={{
            color: service.color,
          }}
        >
          {service.icon}
        </div>

        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        {service.description}
      </p>
    </div>

    {/* Button */}
    {!service.isSolid && service.buttonText && (
      <Link
        href="/services"
        className="mt-6 flex items-center gap-3 text-gray-300
            hover:text-white transition-all duration-300 group/btn"
      >
        <span className="text-sm font-medium">{service.buttonText}</span>
        <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-all" />
      </Link>
    )}
  </div>

  {/* Neon Glow Border */}
  <div
    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 
        group-hover:opacity-100 transition-all duration-700"
    style={{
      boxShadow: `0 0 30px ${service.color}55, inset 0 0 20px ${service.color}35`,
    }}
  />
</Block>

      ))}
    </motion.div>

    {/* CTA BUTTON */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center mt-16"
    >
      <Link
        href="/services"
        className="inline-block px-10 py-4 rounded-full text-white font-semibold 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] 
            transition-all duration-300 hover:scale-[1.03]"
      >
        Explore All Services
      </Link>
    </motion.div>
  </div>
</section>

  );
};

export default ServicesBentoSection;
