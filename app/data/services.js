import { ShieldUser, UserSearch } from "lucide-react";
import {
  // --- Development ---
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiFlutter,
  SiExpo,
  SiFastapi,
  SiPostman,
  SiVercel,
  SiRender,
  SiAmazon,       // ✅ Corrected
  SiAppveyor,

  // --- Design Tools ---
  SiFigma,
  SiAdobe,
  SiAffinitydesigner,
  SiAntdesign,

  // --- Marketing / Analytics ---
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSemrush,
  SiGoogleads,
  SiMeta,
  SiHubspot,
  SiFraunhofergesellschaft,

  // --- Version Control & DevOps ---
  SiGit,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiGithubactions,
  SiDocker,
  SiKubernetes,
  SiDatadog,
  SiSentry,
  SiGamejolt,
  SiAmazonwebservices,
  SiAmazonapigateway,
  SiAdobeaudition,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiCanva,
  SiBlender,
  SiSalesforce,
  SiZendesk,
  SiNotion,
  SiTrello,
  SiAsana,
  SiGooglecloud,
  SiCloudflare,
  SiCloudflarepages,
  SiWordpress,
  SiShopify,
  SiWii,
  SiSquarespace,
  SiYoast,
  SiGrab,
  SiOpenai,
  SiZapier,
  SiAirtable,
  SiSlack,
  SiLighthouse,
  SiW3Schools,
  SiTestcafe,
  SiMiro,
  SiJirasoftware,
  SiConfluence,
  SiGoogle,
  SiMailchimp,
  SiJira,
  SiScrumalliance,
  SiTestinglibrary,
} from "react-icons/si";

import {
  SiUnity,
  SiUnrealengine,
  SiWebgl,
  SiThreedotjs,
  SiPhaser,
  SiFsharp,       // corrected
  SiCplusplus,
  SiJavascript,
  SiSocketdotio
} from "react-icons/si";

export const servicesData = [
  
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    description:
      "Indidevelopers crafts responsive, SEO‑friendly web applications using frameworks like React, Next.js, Angular, and Vue. From marketing sites to complex dashboards, we focus on performance, accessibility, and maintainable frontends tightly integrated with robust backends.",
    imageSrc: "/images/services/web-dev.png",

    // Accordion Data
    problemStatement:
      "Many businesses struggle with slow, outdated websites that don’t convert visitors, fail on mobile, and are hard to maintain. Teams often spend more time fixing bugs than shipping new features.",
    approach:
      "We start with your goals: lead generation, sales, internal tools, or brand presence. Then we choose the right stack, design a clear information architecture, and build modular components so your site stays fast and easy to extend.",
  technologies:  [
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB] text-[18px]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-[18px]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#3C873A] text-[18px]" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-white text-[18px]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] text-[18px]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8] text-[18px]" />,
  },
  {
    name: "REST API",
    icon: <SiPostman className="text-[#FF6C37] text-[18px]" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-[#E10098] text-[18px]" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] text-[18px]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] text-[18px]" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white text-[18px]" />,
  },
  {
    name: "Render",
    icon: <SiRender className="text-[#46E3B7] text-[18px]" />,
  },
  {
    name: "AWS",
    icon: <SiAmazonwebservices className="text-[#FF9900] text-[18px]" />,
  },
],
nonTech: [
  { name: "SEO Optimization", icon: <SiYoast className="text-[#A4373A] text-[18px]" /> },
  { name: "Google Analytics", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
  { name: "Content Strategy", icon: <SiNotion className="text-white text-[18px]" /> },
  { name: "Site Performance Testing", icon: <SiLighthouse className="text-[#0CB6F5] text-[18px]" /> },
  { name: "Website Accessibility", icon: <SiW3Schools className="text-[#005A9C] text-[18px]" /> },
  { name: "CMS Management", icon: <SiWordpress className="text-[#21759B] text-[18px]" /> },
],


    keyFeatures: [
     { name: "Responsive UI for all devices" },
      { name: "SEO‑ready structure and clean URLs" },
      { name: "Role‑based access and secure authentication" },
      { name: "Integration with CRMs, payment gateways, and analytics" },
      { name: "Reusable component library / design system" },
    ],
    outcomes: [
     { name: "Faster page loads and better Core Web Vitals" },
      { name: "Higher conversion and lower bounce on mobile" },
      { name: "Easier content and feature updates for your team" },
      { name: "Codebase ready for future products (dashboards, portals, apps)" },
    ],
    engagementModel: [
      { name: "Discovery workshop and scope definition" },
      { name: "Fixed‑scope MVP or ongoing sprint‑based development" },
      { name: "Optional maintenance and performance optimization plan" },
    ],

    // Detail Page Specific
    heroPromise: "High‑performance web apps built for growth.",
    whoFor: [
      "Startups launching MVPs",
      "SMBs modernizing systems",
      "Agencies needing a dev partner",
    ],
    deliverables: [
      "Design system & UI kit",
      "Frontend codebase (React/Next.js)",
      "Backend APIs & Database setup",
      "Documentation & Deployment guide",
    ],
    process: [
      { step: "Discover", desc: "Understanding goals & requirements" },
      { step: "Plan", desc: "Architecture & Stack selection" },
      { step: "Design", desc: "UI/UX & Prototyping" },
      { step: "Build", desc: "Agile development sprints" },
      { step: "Test", desc: "QA, Performance & Security checks" },
      { step: "Launch", desc: "Deployment & Handover" },
      { step: "Improve", desc: "Analytics & Iteration" },
    ],
    caseStudy: {
      challenge:
        "A retail brand needed a high-performance e-commerce platform to handle spike traffic.",
      solution:
        "Built a headless commerce solution using Next.js and Shopify API with edge caching.",
      result: "50% faster load times, 30% increase in mobile conversions.",
    },
    faq: [
      {
        q: "How long does a typical project take?",
        a: "Simple sites take 2-4 weeks, complex web apps 8-12+ weeks.",
      },
      {
        q: "What do you need from us to start?",
        a: "Design files (Figma) or a clear requirements doc.",
      },
      {
        q: "Can you work with our existing backend?",
        a: "Yes, we can integrate with any REST or GraphQL API.",
      },
    ],
  },
  {
    id: "app-development",
    slug: "app-development",
    title: "App Development",
    description:
      "We build scalable, high-performance mobile and web apps that feel fast, polished, and intuitive on every device. Using React Native, Flutter, and modern web technologies, we turn your ideas into secure, production‑ready applications with smooth UX and clean code.",
    imageSrc: "/images/services/app-dev.png",

    // Accordion Data
    problemStatement:
      "Users expect app‑level experiences everywhere, but building for multiple platforms can be expensive and slow without the right architecture.",
    approach:
      "We design once around your core flows, then implement cross‑platform apps using React Native / Flutter and a shared backend, focusing on performance, security, and offline‑ready experiences where needed.",


 technologies : [
  {
    name: "React Native",
    icon: <SiReact className="text-[#61DAFB] text-[18px]" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-[#02569B] text-[18px]" />,
  },
  {
    name: "Expo",
    icon: <SiExpo className="text-white text-[18px]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#3C873A] text-[18px]" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-white text-[18px]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28] text-[18px]" />,
  },
  {
    name: "REST API",
    icon: <SiPostman className="text-[#FF6C37] text-[18px]" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-[#E10098] text-[18px]" />,
  },
  {
    name: "CI/CD",
    icon: <SiGithubactions className="text-[#2088FF] text-[18px]" />,
  },
],

nonTech: [
  { name: "App Store Optimization (ASO)", icon: <SiGoogleads className="text-[#4285F4] text-[18px]" /> },
  { name: "User Activity Tracking", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
  { name: "Crash Reporting", icon: <SiSentry className="text-[#4285F4] text-[18px]" /> },
  { name: "Push Notification Delivery", icon: <SiFirebase className="text-[#FFCA28] text-[18px]" /> },
  { name: "App Testing Tools", icon: <SiTestcafe className="text-[#4285F4] text-[18px]" /> },
  { name: "UI/UX Flow Mapping", icon: <SiMiro className="text-[#FFD02F] text-[18px]" /> },
],


    keyFeatures: [
     {name: "Cross‑platform Android/iOS builds"},
     {name: "Push notifications and real‑time updates"},
      {name: "Secure login and user profiles"},
      {name: "In‑app forms, payments, and media handling"},
      {name: "Analytics and crash monitoring"},
    ],
    outcomes: [
      {name: "Single codebase, reduced development and maintenance cost"},
      {name: "Faster release cycles for new features"},
      {name: "Higher user engagement and retention through better UX"},
    ],
    engagementModel: [
      {name: "UX prototype → tech architecture → phased delivery"},
      {name: "Regular builds for testing on real devices"},
      {name: "Post‑launch support & store updates"},
    ],

    // Detail Page Specific
    heroPromise: "Native-quality apps, half the development time.",
    whoFor: [
      "Startups needing iOS & Android presence",
      "Brands enhancing customer engagement",
      "Enterprises needing internal mobile tools",
    ],
    deliverables: [
      "iOS & Android App Binaries",
      "Source Code (React Native/Flutter)",
      "Admin Panel for content management",
      "App Store submission support",
    ],
    process: [
      { step: "Discover", desc: "User personas & Feature mapping" },
      { step: "Design", desc: "Wireframes & UI Mockups" },
      { step: "Prototype", desc: "Clickable prototype for feedback" },
      { step: "Build", desc: "Cross-platform development" },
      { step: "Test", desc: "Device testing & Beta release" },
      { step: "Launch", desc: "App Store & Play Store submission" },
    ],
    caseStudy: {
      challenge:
        "A fintech startup needed a secure, fast mobile wallet for iOS and Android.",
      solution:
        "Developed a React Native app with biometric auth and real-time transaction syncing.",
      result: "4.8-star rating, 10k+ downloads in first month.",
    },
    faq: [
      {
        q: "Do you build native or hybrid apps?",
        a: "We specialize in cross-platform (React Native/Flutter) for efficiency, but can do native if required.",
      },
      {
        q: "Will you help with App Store submission?",
        a: "Yes, we handle the entire submission and review process.",
      },
    ],
  },
  {
    id: "software-erp",
    slug: "software-erp",
    title: "Software & ERP Development",
    description:
      "We design and develop custom software and ERP systems that match your real workflows instead of forcing you into rigid templates. Our solutions connect data, automate repetitive tasks, and give teams the visibility they need to make decisions quickly.",
    imageSrc: "/images/services/erp.png",

    // Accordion Data
    problemStatement:
      "Spreadsheets, disconnected tools, and manual workflows cause delays, errors, and lack of visibility across departments.",
    approach:
      "We map your real workflows (sales, inventory, billing, HR, etc.), design modules around them, and build an ERP or internal system that connects data and automates repetitive tasks.",
       technologies : [
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#3C873A] text-[18px]" />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs className="text-white text-[18px]" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB] text-[18px]" />,
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-[#DD0031] text-[18px]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] text-[18px]" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] text-[18px]" />,
  },

  // No official icons → using best alternatives
  {
    name: "Microservices",
    icon: <SiNodedotjs className="text-[#3C873A] text-[18px]" />, // Node used as backend services icon
  },
  {
    name: "Message Queues",
    icon: <SiAppveyor className="text-[#2684FF] text-[18px]" />, // Blue service icon
  },
  {
    name: "Role-Based Access",
    icon: <SiPostman className="text-[#FF6C37] text-[18px]" />, // Orange security-style icon
  },
],
nonTech: [
  { name: "Business Process Mapping", icon: <SiNotion className="text-white text-[18px]" /> },
  { name: "Project Management", icon: <SiJirasoftware className="text-[#0052CC] text-[18px]" /> },
  { name: "Workflow Automation", icon: <SiZapier className="text-[#FF4A00] text-[18px]" /> },
  { name: "Cloud Operations", icon: <SiGooglecloud className="text-[#4285F4] text-[18px]" /> },
  { name: "Team Collaboration", icon: <SiSlack className="text-[#d433d6] text-[18px]" /> },
  { name: "Documentation Systems", icon: <SiConfluence className="text-[#2b69d3] text-[18px]" /> },
],

    keyFeatures: [
      {name:"Central dashboards and role‑based panels"},
      {name:"Inventory, billing, invoicing, and approvals"},
      {name:"GST/invoice logic (for Indian businesses)"},
      {name:"Audit logs and access control"},
      {name:"Custom reports and exports"},
    ],
    outcomes: [
      {name:"Reduced manual work and error rates"},
      {name:"Real‑time visibility into operations"},
      {name:"Faster reporting and decision‑making"},
    ],
    engagementModel: [
      {name:"Start with 1–2 critical modules, then expand"},
      {name:"Data migration from legacy tools"},
      {name:"Training and documentation for teams"},
    ],

    // Detail Page Specific
    heroPromise: "Streamline operations with custom software.",
    whoFor: [
      "Growing businesses outgrowing spreadsheets",
      "Enterprises needing custom workflows",
      "Operations-heavy industries (Logistics, Mfg)",
    ],
    deliverables: [
      "Custom ERP/CRM Software",
      "Database Design & Migration",
      "Role-based Admin Dashboard",
      "User Training Manuals",
    ],
    process: [
      { step: "Audit", desc: "Workflow & Process analysis" },
      { step: "Architect", desc: "Database & System design" },
      { step: "Develop", desc: "Module-by-module build" },
      { step: "Migrate", desc: "Data import & Validation" },
      { step: "Train", desc: "User onboarding sessions" },
      { step: "Support", desc: "Ongoing maintenance" },
    ],
    caseStudy: {
      challenge:
        "A logistics company struggled with manual tracking and billing errors.",
      solution:
        "Built a custom ERP with automated tracking, invoicing, and driver apps.",
      result:
        "Reduced billing errors by 90%, saved 20 hours/week in manual entry.",
    },
    faq: [
      {
        q: "Can it integrate with Tally/QuickBooks?",
        a: "Yes, we can build integrations with accounting software.",
      },
      {
        q: "Is it secure?",
        a: "We implement role-based access control and encrypted data storage.",
      },
    ],
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    title: "UI/UX Design",
    description:
      "Our design process starts with understanding your users and business goals. We create clean, consistent design systems, intuitive flows, and pixel‑perfect interfaces that make your product easy to use and hard to forget.",
    imageSrc: "/images/services/ui-ux.png",

    // Accordion Data
    problemStatement:
      "Poor user experience leads to low engagement, high bounce rates, and lost revenue. Inconsistent design across products confuses users.",
    approach:
      "We combine user research with aesthetic excellence. We build design systems that ensure consistency and scalability while crafting intuitive user journeys.",

 technologies : [
  {
    name: "Figma",
    icon: <SiFigma className="text-[#F24E1E] text-[18px]" />, // Figma Orange/Red
  },
  {
    name: "Adobe XD",
    icon: <SiAdobe className="text-[#FF0000] text-[18px]" />, // Adobe Red (XD not available)
  },
  {
    name: "Prototyping",
    icon: <SiAffinitydesigner className="text-[#1B72E8] text-[18px]" />, // Design tool icon
  },
  {
    name: "Usability Testing",
    icon: <SiAntdesign className="text-[#0170FE] text-[18px]" />, // Clean UI/UX blue icon
  },
  {
    name: "Design Systems",
    icon: <SiAntdesign className="text-[#2684FF] text-[18px]" />, // System & UI library icon
  },
],
nonTech: [
  { name: "User Research", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
  { name: "Wireframing", icon: <SiFigma className="text-[#F24E1E] text-[18px]" /> },
  { name: "User Journey Mapping", icon: <SiMiro className="text-[#FFD02F] text-[18px]" /> },
  {
  name: "Usability Testing",
  icon: <UserSearch className="text-[#0066FF] text-[18px]" />
},

  { name: "Accessibility Standards", icon: <SiW3Schools className="text-[#005A9C] text-[18px]" /> },
  { name: "Design Systems", icon: <SiNotion className="text-black text-[18px]" /> },
],

    keyFeatures: [
     {name: "User research and persona mapping"},
      {name: "Wireframing and interactive prototypes"},
      {name: "High-fidelity UI design"},
      {name: "Design system creation"},
      {name: "Accessibility compliance (WCAG)"},
    ],
    outcomes: [
      {name: "Clear user journeys and improved engagement"},
      {name: "Design systems that keep your brand consistent"},
      {name: "Hand‑off ready designs for efficient development"},
    ],
    engagementModel: [
    {name:  "Design sprint workshops"},
      {name: "Iterative design process"},
      {name: "Developer hand-off support"},
    ],

    // Detail Page Specific
    heroPromise: "Designs that users love and developers respect.",
    whoFor: [
      "Startups needing a product identity",
      "SaaS platforms improving UX",
      "Apps needing a redesign",
    ],
    deliverables: [
      "Figma Source Files",
      "Interactive Prototypes",
      "Design System & Style Guide",
      "Asset Export for Devs",
    ],
    process: [
      { step: "Research", desc: "Competitor & User analysis" },
      { step: "Wireframe", desc: "Structure & Flow" },
      { step: "Visual", desc: "UI Design & Branding" },
      { step: "Prototype", desc: "Interaction design" },
      { step: "Handover", desc: "Specs for developers" },
    ],
    caseStudy: {
      challenge: "A SaaS platform had high churn due to a complex interface.",
      solution:
        "Redesigned the dashboard with simplified navigation and clear onboarding.",
      result: "Churn reduced by 15%, user satisfaction score increased by 40%.",
    },
    faq: [
      {
        q: "Do you do branding/logos?",
        a: "Yes, we can include branding as part of the UI/UX package.",
      },
      {
        q: "What tools do you use?",
        a: "Primarily Figma for design and prototyping.",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    description:
      "We help your product get discovered and grow through data‑driven digital marketing. From SEO‑ready builds to landing pages, funnels, and campaign assets, we align tech and marketing so you're not just launching — you're growing.",
    imageSrc: "/images/services/marketing.png",

    // Accordion Data
    problemStatement:
      "Great products fail when they can't be found. Poor SEO, ineffective landing pages, and lack of data-driven insights mean wasted marketing budgets.",
    approach:
      "We take a data-first approach. We optimize your technical foundation for SEO, create high-converting landing pages, and set up analytics to track real ROI.",

technologies: [
  {
    name: "Google Analytics 4",
    icon: <SiGoogleanalytics className="text-[#E37400] text-[18px]" />, // GA4 Orange
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="text-[#246FDB] text-[18px]" />, // GTM Blue
  },
  {
      name: "Ahrefs",
    icon: <SiFraunhofergesellschaft className="text-[#FF6F00] text-[18px]" />

  },
  {
    name: "SEMrush",
    icon: <SiSemrush className="text-[#FF642D] text-[18px]" />, // SEMrush Orange
  },
  {
    name: "Google Ads",
    icon: <SiGoogleads className="text-[#4285F4] text-[18px]" />, // Google Ads Blue
  },
  {
    name: "Meta Ads",
    icon: <SiMeta className="text-[#0081FB] text-[18px]" />, // Meta Blue
  },
  {
    name: "Marketing Automation",
    icon: <SiHubspot className="text-[#FF7A59] text-[18px]" />, // HubSpot Orange
  }
],
nonTech: [
  { name: "SEO & SEM", icon: <SiGoogle className="text-[#4285F4] text-[18px]" /> },
  { name: "Social Media Marketing", icon: <SiMeta className="text-[#0467DF] text-[18px]" /> },
  { name: "Email Marketing Automation", icon: <SiMailchimp className="text-[#FFE01B] text-[18px]" /> },
  { name: "Google Ads Campaigns", icon: <SiGoogleads className="text-[#4285F4] text-[18px]" /> },
  { name: "Analytics & Tracking", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
  { name: "Content Planning", icon: <SiNotion className="text-black text-[18px]" /> },
],



    keyFeatures: [
     {name: "Technical SEO audits and fixes"},
      {name: "Conversion Rate Optimization (CRO)"},
      {name: "PPC campaign management"},
      {name: "Content strategy and creation"},
      {name: "Performance analytics dashboards"},
    ],
    outcomes: [
     {name: "Better visibility and higher‑intent traffic"},
      {name: "Conversion‑focused pages and messaging"},
      {name: "Analytics to understand what actually works"},
    ],
    engagementModel: [
     {name: "Monthly retainer for growth"},
      {name: "Project-based campaign setup"},
      {name: "Performance-based models"},
    ],

    // Detail Page Specific
    heroPromise: "Turn traffic into revenue.",
    whoFor: [
      "New products launching",
      "Businesses needing more leads",
      "Brands wanting better ROI",
    ],
    deliverables: [
      "SEO Audit & Strategy",
      "Campaign Setup & Management",
      "Monthly Performance Reports",
      "Landing Page Optimization",
    ],
    process: [
      { step: "Audit", desc: "Current performance review" },
      { step: "Strategy", desc: "Channel & Budget planning" },
      { step: "Setup", desc: "Tracking & Campaign build" },
      { step: "Launch", desc: "Go-live & Monitoring" },
      { step: "Optimize", desc: "A/B testing & Refinement" },
    ],
    caseStudy: {
      challenge:
        "A B2B service provider wasn't getting leads from their website.",
      solution:
        "Implemented SEO strategy and redesigned landing pages for conversion.",
      result: "Organic traffic up 200%, lead generation tripled in 3 months.",
    },
    faq: [
      {
        q: "How soon will we see results?",
        a: "PPC is immediate; SEO typically takes 3-6 months.",
      },
      {
        q: "Do you write content?",
        a: "Yes, we have copywriters for ads, landing pages, and blogs.",
      },
    ],
  },
  {
    id: "game-development",
    slug: "game-development",
    title: "Game Development",
    description:
      "For brands and startups exploring interactive experiences, we build engaging 2D/3D games and gamified products. Using engines like Unity and modern web tech, we focus on performance, smooth gameplay, and memorable visual experiences.",
    imageSrc: "/images/services/game-dev.png",

    // Accordion Data
    problemStatement:
      "Creating engaging interactive experiences requires specialized skills. Poor performance, clunky gameplay, and lack of cross-platform support limit reach.",
    approach:
      "We focus on 'fun-first' development backed by solid engineering. We optimize for the target platform to ensure smooth frame rates and responsive controls.",
 technologies: [
  {
    name: "Unity",
    icon: <SiUnity className="text-white text-[18px]" />,
  },
  {
    name: "Unreal Engine",
    icon: <SiUnrealengine className="text-[white] text-[18px]" />,
  },
  {
    name: "WebGL",
    icon: <SiWebgl className="text-[#008CFF] text-[18px]" />,
  },
  {
    name: "Three.js",
    icon:<SiJavascript className="text-[#F7DF1E] text-[18px]" />,
  },
  {
    name: "Phaser",
     icon: <SiGamejolt className="text-[#FF00FF] text-[18px]" />,
  },
  {
    name: "C#",
    icon: <SiFsharp className="text-[#239120] text-[18px]" />,
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-[#00599C] text-[18px]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] text-[18px]" />,
  },
  {
    name: "Multiplayer Networking",
    icon: <SiSocketdotio className="text-[white] text-[18px]" />, // placeholder networking icon
  },
],
nonTech: [
  { name: "Game Storyboarding", icon: <SiMiro className="text-[#FFD02F] text-[18px]" /> },
  { name: "Level Design Planning", icon: <SiBlender className="text-[#F5792A] text-[18px]" /> },
  { name: "Game Analytics", icon: <SiGoogleanalytics className="text-[#F9AB00] text-[18px]" /> },
  { name: "Sound & SFX Editing", icon: <SiAdobeaudition className="text-[#00C8FF] text-[18px]" /> },
  { name: "Animation Workflow", icon: <SiAdobeaftereffects className="text-[#9999FF] text-[18px]" /> },
{ name: "Playtesting & Feedback", icon: <ShieldUser className="text-[#0066FF] text-[18px]" /> },


],

    keyFeatures: [
     {name: "2D/3D Game Design & Development"},
      {name: "Gamification of apps/websites"},
      {name: "AR/VR experiences"},
      {name: "Multiplayer infrastructure"},
      {name: "Asset optimization"},
    ],
    outcomes: [
      {name: "Cross‑platform playable experiences"},
      {name: "Stable performance even on mid‑range devices"},
      {name: "Engaging mechanics that keep users coming back"},
    ],
    engagementModel: [
      {name: "Prototype to Production"},
      {name: "Asset creation and integration"},
      {name: "Live ops and updates"},
    ],

    // Detail Page Specific
    heroPromise: "Immersive experiences that captivate.",
    whoFor: [
      "Brands wanting gamified marketing",
      "Startups building indie games",
      "EdTech using games for learning",
    ],
    deliverables: [
      "Game Design Document (GDD)",
      "Playable Builds (Web/Mobile)",
      "Source Code & Assets",
      "Deployment Support",
    ],
    process: [
      { step: "Concept", desc: "Idea & Mechanics" },
      { step: "Prototype", desc: "Core loop testing" },
      { step: "Production", desc: "Art, Code, Sound" },
      { step: "Polish", desc: "FX & Optimization" },
      { step: "Release", desc: "Launch & Support" },
    ],
    caseStudy: {
      challenge: "An EdTech company needed a fun way to teach math to kids.",
      solution: "Built a web-based 2D platformer game with math puzzles.",
      result: "Student engagement time increased by 3x.",
    },
    faq: [
      { q: "Do you make mobile games?", a: "Yes, iOS and Android via Unity." },
      {
        q: "Can you do 3D art?",
        a: "We have partners for high-end 3D, or can use low-poly styles in-house.",
      },
    ],
  },
  {
    id: "engineering-support",
    slug: "engineering-support",
    title: "Engineering Practices & Support",
    description:
      "Clean code and support are built into every engagement. We use modern engineering practices—version control, CI/CD, code reviews, testing, and monitoring—to keep your product stable as it grows.",

    // Accordion Data
    problemStatement:
      "Technical debt accumulates when teams skip best practices. Without proper version control and testing, products become unstable and bugs multiply.",
    approach:
      "We treat infrastructure as code. We set up automated pipelines and monitoring from day one, ensuring that every deployment is safe and reversible.",

technologies :[
  {
    name: "Git, GitHub/GitLab",
    icon: <SiGit className="text-[#F05032] text-[18px]" />,
  },
  {
    name: "Jenkins, GitHub Actions",
    icon: <SiGithubactions className="text-[#2088FF] text-[18px]" />,
  },
  {
    name: "Docker, Kubernetes",
    icon: <SiDocker className="text-[#2496ED] text-[18px]" />,
  },
  {
    name: "Datadog, Sentry, AWS CloudWatch",
    icon: <SiAmazonapigateway className="text-[#FF9900] text-[18px]" />,
  },
],
nonTech: [
  {
    name: "Project Management",
    icon: <SiJira className="text-[#2684FF] text-[18px]" />,
  },
  {
    name: "Agile & Scrum Workflows",
    icon: <SiScrumalliance className="text-[#009FDA] text-[18px]" />,
  },
  {
    name: "UI/UX Documentation",
    icon: <SiNotion className="text-black text-[18px]" />,
  },
  {
    name: "Team Collaboration",
    icon: <SiSlack className="text-[#4A154B] text-[18px]" />,
  },
  {
    name: "Version Control Management",
    icon: <SiGit className="text-[#F05032] text-[18px]" />,
  },
  {
    name: "Product Roadmapping",
    icon: <SiMiro className="text-[#FFD02F] text-[18px]" />,
  },
  {
    name: "Quality Assurance & Testing",
    icon: <SiTestinglibrary className="text-[#E33332] text-[18px]" />,
  },
  {
    name: "System Documentation",
    icon: <SiConfluence className="text-[#172B4D] text-[18px]" />,
  },
],


    keyFeatures: [
   {name: "CI/CD Pipeline Setup"},
      {name: "Automated Testing Frameworks"},
      {name: "Infrastructure as Code (IaC)"},
      {name: "Security Audits & Hardening"},
      {name: "Performance Monitoring"},
    ],
    outcomes: [
    {name: "24/7 support options"},
      {name: "Performance optimization and refactoring"},
      {name: "Security reviews and best practices baked in"},
    ],
    engagementModel: [
    {name:  "Audit and Consulting"},
      {name: "DevOps Implementation"},
      {name: "Ongoing Support Retainer"},
    ],

    // Detail Page Specific
    heroPromise: "Solid foundations for scalable software.",
    whoFor: [
      "Teams with unstable deployments",
      "Startups needing scalable infra",
      "Companies auditing security",
    ],
    deliverables: [
      "CI/CD Configuration",
      "Infrastructure Documentation",
      "Security Audit Report",
      "Monitoring Dashboard",
    ],
    process: [
      { step: "Assess", desc: "Current state audit" },
      { step: "Plan", desc: "Roadmap for improvements" },
      { step: "Implement", desc: "Pipeline & Tool setup" },
      { step: "Verify", desc: "Load testing & Security scan" },
      { step: "Monitor", desc: "Alerts & Dashboards" },
    ],
    caseStudy: {
      challenge: "A fintech app had frequent downtime during deployments.",
      solution: "Implemented blue-green deployments and automated rollback.",
      result: "Zero downtime deployments and 99.99% uptime achieved.",
    },
    faq: [
      {
        q: "Do you offer 24/7 support?",
        a: "Yes, via our SLA-based support packages.",
      },
    ],
  },
];


