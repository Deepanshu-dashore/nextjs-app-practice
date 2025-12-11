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
  tech: [
    { name: "React", icon: <SiReact className="text-[#61DAFB] text-[18px]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-[18px]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#3C873A] text-[18px]" /> },
    { name: "Express", icon: <SiExpress className="text-white text-[18px]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-[18px]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8] text-[18px]" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-[#E10098] text-[18px]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-[18px]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791] text-[18px]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-[18px]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B] text-[18px]" /> },
    { name: "Expo", icon: <SiExpo className="text-white text-[18px]" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-[18px]" /> },
    { name: "Render", icon: <SiRender className="text-[#46E3B7] text-[18px]" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900] text-[18px]" /> },
    { name: "Unity", icon: <SiUnity className="text-white text-[18px]" /> },
    { name: "Unreal Engine", icon: <SiUnrealengine className="text-white text-[18px]" /> },
    { name: "WebGL", icon: <SiWebgl className="text-[#008CFF] text-[18px]" /> },
    { name: "Three.js", icon: <SiJavascript className="text-[#F7DF1E] text-[18px]" /> },
    { name: "Phaser", icon: <SiGamejolt className="text-[#FF00FF] text-[18px]" /> },
    { name: "C#", icon: <SiFsharp className="text-[#239120] text-[18px]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C] text-[18px]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-[18px]" /> },
    { name: "Git, GitHub/GitLab", icon: <SiGit className="text-[#F05032] text-[18px]" /> },
    { name: "Jenkins, GitHub Actions", icon: <SiGithubactions className="text-[#2088FF] text-[18px]" /> },
    { name: "Docker, Kubernetes", icon: <SiDocker className="text-[#2496ED] text-[18px]" /> },
    { name: "Datadog, Sentry, AWS CloudWatch", icon: <SiAmazonapigateway className="text-[#FF9900] text-[18px]" /> },
  ],
  nonTech: [
    { name: "SEO Optimization", icon: <SiYoast className="text-[#A4373A] text-[18px]" /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
    { name: "Content Strategy", icon: <SiNotion className="text-white text-[18px]" /> },
    { name: "Site Performance Testing", icon: <SiLighthouse className="text-[#0CB6F5] text-[18px]" /> },
    { name: "Website Accessibility", icon: <SiW3Schools className="text-[#005A9C] text-[18px]" /> },
    { name: "CMS Management", icon: <SiWordpress className="text-[#21759B] text-[18px]" /> },
    { name: "App Store Optimization (ASO)", icon: <SiGoogleads className="text-[#4285F4] text-[18px]" /> },
    { name: "User Activity Tracking", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
    { name: "Crash Reporting", icon: <SiSentry className="text-[#4285F4] text-[18px]" /> },
    { name: "Push Notification Delivery", icon: <SiFirebase className="text-[#FFCA28] text-[18px]" /> },
    { name: "App Testing Tools", icon: <SiTestcafe className="text-[#4285F4] text-[18px]" /> },
    { name: "UI/UX Flow Mapping", icon: <SiMiro className="text-[#FFD02F] text-[18px]" /> },
    { name: "Project Management", icon: <SiJira className="text-[#2684FF] text-[18px]" /> },
    { name: "Agile & Scrum Workflows", icon: <SiScrumalliance className="text-[#009FDA] text-[18px]" /> },
    { name: "Team Collaboration", icon: <SiSlack className="text-[#4A154B] text-[18px]" /> },
  ],
};
export default function TechnologySection() {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      <div className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
            className="absolute top-10 left-10 w-60 h-60 bg-purple-500/10 blur-3xl rounded-full"
          />
          <motion.div
            animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"
          />
        </motion.div>

        {/* Section Heading */}
        <div className="text-center relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">Technology</span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
          >
            Tools & Frameworks We Use
          </motion.h3>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A complete blend of coding and non-coding technologies used in this service.
          </p>
        </div>

        {/* Tech + Non-Tech Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="gap-10 relative z-20 space-y-10 mt-10"
        >
          {/* TECH */}
          <div className="space-y-2 flex justify-center items-center flex-col">
            <LogoLoop
              logos={(servicesData[0]?.technologies ?? []).map(item => ({
                node: (
              <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl w-56 h-36 justify-center hover:bg-purple-500/20 transition-all duration-300">
 <div><h1 className="text-[50px]  p-5 rounded-full  bg-white/5">{item.icon}</h1></div>
                    <span className="text-white/90 text-sm font-medium text-center">{item.name}</span>
                  </div>
                ),
                title: item.name,
              }))}
              speed={40}
              direction="left"
              gap={50}
              logoHeight={60}
              fadeOut
              fadeOutColor="#000"
            />
          </div>

          {/* NON-TECH */}
          <div className="space-y-2 flex justify-center items-center flex-col">
            <LogoLoop
              logos={(servicesData[0]?.nonTech ?? []).map(item => ({
                node: (
                 <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl w-56 h-36 justify-center hover:bg-purple-500/20 transition-all duration-300">
   <div>
    <h1 className="text-[6rem] p-5 rounded-full  bg-white/5">{item.icon}</h1></div>
                    <span className="text-white/90 text-sm font-medium text-center">{item.name}</span>
                  </div>
                ),
                title: item.name,
              }))}
              speed={40}
              direction="right"
              gap={50}
              logoHeight={60}
              fadeOut
              fadeOutColor="#000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
