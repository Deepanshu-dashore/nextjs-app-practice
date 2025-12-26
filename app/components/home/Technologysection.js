"use client"; 
import React from "react";
import { motion } from "motion/react";
import LogoLoop from "@/app/components/LogoLoop";
import { servicesData } from "@/app/data/services";
import { ShieldUser, UserSearch } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiAngular, SiNodedotjs, SiExpress, SiTypescript,
  SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql, SiFirebase, SiFlutter,
  SiExpo, SiVercel, SiRender, SiAmazonwebservices, SiAppveyor,
  SiFigma, SiAdobe, SiAffinitydesigner, SiAntdesign,
  SiGoogleanalytics, SiGoogletagmanager, SiSemrush, SiGoogleads, SiMeta, SiHubspot, SiFraunhofergesellschaft,
  SiGit, SiGithub, SiGitlab, SiJenkins, SiGithubactions, SiDocker, SiKubernetes,
  SiDatadog, SiSentry, SiGamejolt, SiAmazonapigateway, SiAdobeaudition,
  SiAdobeaftereffects, SiBlender, SiNotion, SiLighthouse, SiW3Schools,
  SiTestcafe, SiMiro, SiJirasoftware, SiConfluence, SiGoogle, SiMailchimp,
  SiJira, SiScrumalliance, SiTestinglibrary,
  SiUnity, SiUnrealengine, SiWebgl, SiPhaser, SiFsharp, SiCplusplus,
  SiJavascript, SiSocketdotio,
  SiYoast,
  SiWordpress,
  SiSlack
} from "react-icons/si";
export const allTechnologies = {

};
export default function TechnologySection() {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      <div className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden">

        {/* Background Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-60 lg:h-60 bg-purple-500/10 blur-3xl rounded-full"
          />
          <motion.div
            animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-500/10 blur-3xl rounded-full"
          />
        </motion.div>

        {/* Section Heading */}
        <div className="text-center relative z-20 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-purple-300">
              Technology
            </span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white
              bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
              text-transparent bg-clip-text"
          >
            Tools & Frameworks We Use
          </motion.h3>

          <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
            A complete blend of coding and non-coding technologies used in this service.
          </p>
        </div>

        {/* Tech + Non-Tech Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 space-y-12 mt-10 sm:mt-14"
        >

          {/* TECH */}
          <div className="flex justify-center items-center flex-col overflow-hidden">
            <LogoLoop
              logos={(servicesData[0]?.technologies ?? []).map(item => ({
                node: (
                  <div
                    className="
                      flex flex-col items-center justify-center gap-3
                      p-4 sm:p-6 lg:p-8
                      bg-white/5 backdrop-blur-md
                      border border-white/20
                      rounded-xl
                      w-40 h-28
                      sm:w-48 sm:h-32
                      lg:w-56 lg:h-36
                      hover:bg-purple-500/20
                      transition-all duration-300
                    "
                  >
                    <h1
                      className="
                        text-4xl
                        sm:text-5xl
                        md:text-4xl
                        lg:text-5xl
                        xl:text-5xl
                        p-3 sm:p-4
                         lg:p-5
                     
                      "
                    >
                      {item.icon}
                    </h1>
                    <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
                      {item.name}
                    </span>
                  </div>
                ),
                title: item.name,
              }))}
              speed={40}
              direction="left"
              gap={30}
              logoHeight={50}
              fadeOut
              fadeOutColor="#000"
            />
          </div>

          {/* NON-TECH */}
          <div className="flex justify-center items-center flex-col overflow-hidden">
            <LogoLoop
              logos={(servicesData[0]?.nonTech ?? []).map(item => ({
                node: (
                  <div
                    className="
                      flex flex-col items-center justify-center gap-3
                      p-4 sm:p-6 lg:p-8
                      bg-white/5 backdrop-blur-md
                      border border-white/20
                      rounded-xl
                      w-40 h-28
                      sm:w-48 sm:h-32
                      lg:w-56 lg:h-36
                      hover:bg-purple-500/20
                      transition-all duration-300
                    "
                  >
                    <h1
                      className="
                     text-4xl
                        sm:text-5xl
                        md:text-4xl
                        lg:text-5xl
                        xl:text-5xl
                        p-3 sm:p-4
                         lg:p-5
                      "
                    >
                      {item.icon}
                    </h1>
                    <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
                      {item.name}
                    </span>
                  </div>
                ),
                title: item.name,
              }))}
              speed={40}
              direction="right"
              gap={30}
              logoHeight={50}
              fadeOut
              fadeOutColor="#000"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}


