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

    keyFeatures: [
      "Responsive UI for all devices",
      "SEO‑ready structure and clean URLs",
      "Role‑based access and secure authentication",
      "Integration with CRMs, payment gateways, and analytics",
      "Reusable component library / design system",
    ],
    outcomes: [
      "Faster page loads and better Core Web Vitals",
      "Higher conversion and lower bounce on mobile",
      "Easier content and feature updates for your team",
      "Codebase ready for future products (dashboards, portals, apps)",
    ],
    engagementModel: [
      "Discovery workshop and scope definition",
      "Fixed‑scope MVP or ongoing sprint‑based development",
      "Optional maintenance and performance optimization plan",
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



    keyFeatures: [
      "Cross‑platform Android/iOS builds",
      "Push notifications and real‑time updates",
      "Secure login and user profiles",
      "In‑app forms, payments, and media handling",
      "Analytics and crash monitoring",
    ],
    outcomes: [
      "Single codebase, reduced development and maintenance cost",
      "Faster release cycles for new features",
      "Higher user engagement and retention through better UX",
    ],
    engagementModel: [
      "UX prototype → tech architecture → phased delivery",
      "Regular builds for testing on real devices",
      "Post‑launch support & store updates",
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

    keyFeatures: [
      "Central dashboards and role‑based panels",
      "Inventory, billing, invoicing, and approvals",
      "GST/invoice logic (for Indian businesses)",
      "Audit logs and access control",
      "Custom reports and exports",
    ],
    outcomes: [
      "Reduced manual work and error rates",
      "Real‑time visibility into operations",
      "Faster reporting and decision‑making",
    ],
    engagementModel: [
      "Start with 1–2 critical modules, then expand",
      "Data migration from legacy tools",
      "Training and documentation for teams",
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

    keyFeatures: [
      "User research and persona mapping",
      "Wireframing and interactive prototypes",
      "High-fidelity UI design",
      "Design system creation",
      "Accessibility compliance (WCAG)",
    ],
    outcomes: [
      "Clear user journeys and improved engagement",
      "Design systems that keep your brand consistent",
      "Hand‑off ready designs for efficient development",
    ],
    engagementModel: [
      "Design sprint workshops",
      "Iterative design process",
      "Developer hand-off support",
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



    keyFeatures: [
      "Technical SEO audits and fixes",
      "Conversion Rate Optimization (CRO)",
      "PPC campaign management",
      "Content strategy and creation",
      "Performance analytics dashboards",
    ],
    outcomes: [
      "Better visibility and higher‑intent traffic",
      "Conversion‑focused pages and messaging",
      "Analytics to understand what actually works",
    ],
    engagementModel: [
      "Monthly retainer for growth",
      "Project-based campaign setup",
      "Performance-based models",
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

    keyFeatures: [
      "2D/3D Game Design & Development",
      "Gamification of apps/websites",
      "AR/VR experiences",
      "Multiplayer infrastructure",
      "Asset optimization",
    ],
    outcomes: [
      "Cross‑platform playable experiences",
      "Stable performance even on mid‑range devices",
      "Engaging mechanics that keep users coming back",
    ],
    engagementModel: [
      "Prototype to Production",
      "Asset creation and integration",
      "Live ops and updates",
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

    keyFeatures: [
      "CI/CD Pipeline Setup",
      "Automated Testing Frameworks",
      "Infrastructure as Code (IaC)",
      "Security Audits & Hardening",
      "Performance Monitoring",
    ],
    outcomes: [
      "24/7 support options",
      "Performance optimization and refactoring",
      "Security reviews and best practices baked in",
    ],
    engagementModel: [
      "Audit and Consulting",
      "DevOps Implementation",
      "Ongoing Support Retainer",
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


export const nonCodeTech = {
  audioVideo: [
    { name: "Adobe Audition", icon: <SiAdobeaudition className="text-[#00E4BB] text-[18px]" /> },
    { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="text-[#9999FF] text-[18px]" /> },
    { name: "After Effects", icon: <SiAdobeaftereffects className="text-[#7E5EFF] text-[18px]" /> },
    { name: "Canva", icon: <SiCanva className="text-[#00C4CC] text-[18px]" /> },
  ],

  threeD_AR_VR: [
    { name: "Blender", icon: <SiBlender className="text-[#F5792A] text-[18px]" /> },
    { name: "Unity", icon: <SiUnity className="text-white text-[18px]" /> },
    { name: "Unreal Engine", icon: <SiUnrealengine className="text-white text-[18px]" /> },
    { name: "WebGL", icon: <SiWebgl className="text-[#990000] text-[18px]" /> },
    { name: "Three.js", icon: <SiThreedotjs className="text-black text-[18px]" /> },
  ],

  marketingTools: [
    { name: "Google Analytics", icon: <SiGoogleanalytics className="text-[#E37400] text-[18px]" /> },
    { name: "Tag Manager", icon: <SiGoogletagmanager className="text-[#1A73E8] text-[18px]" /> },
    { name: "Google Ads", icon: <SiGoogleads className="text-[#4285F4] text-[18px]" /> },
    { name: "Meta Ads", icon: <SiMeta className="text-[#0467DF] text-[18px]" /> },
    { name: "HubSpot", icon: <SiHubspot className="text-[#FF7A00] text-[18px]" /> },
    { name: "SEMrush", icon: <SiSemrush className="text-[#FF642D] text-[18px]" /> },
  ],

  crmBusiness: [
    { name: "Salesforce", icon: <SiSalesforce className="text-[#00A1E0] text-[18px]" /> },
    { name: "Zendesk", icon: <SiZendesk className="text-[#03363D] text-[18px]" /> },
    { name: "Notion", icon: <SiNotion className="text-black text-[18px]" /> },
    { name: "Trello", icon: <SiTrello className="text-[#026AA7] text-[18px]" /> },
    { name: "Asana", icon: <SiAsana className="text-[#F06A6A] text-[18px]" /> },
  ],

  cloudStorage: [
    { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900] text-[18px]" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4] text-[18px]" /> },
  { name: "Azure", icon: <SiCloudflare className="text-[#0078D4] text-[18px]" /> },
    { name: "Cloudflare", icon: <SiCloudflarepages className="text-[#F38020] text-[18px]" /> },
  ],

  contentBranding: [
    { name: "WordPress", icon: <SiWordpress className="text-[#21759B] text-[18px]" /> },
    { name: "Shopify", icon: <SiShopify className="text-[#96BF48] text-[18px]" /> },
    { name: "Wix", icon: <SiWii className="text-black text-[18px]" /> },
    { name: "Squarespace", icon: <SiSquarespace className="text-white text-[18px]" /> },
    { name: "SEO (Yoast)", icon: <SiYoast className="text-[#A4373A] text-[18px]" /> },
    { name: "Brand Guidelines", icon: <SiGrab className="text-[#00AEEF] text-[18px]" /> },
  ],

  aiAutomation: [
    { name: "OpenAI", icon: <SiOpenai className="text-white text-[18px]" /> },
    { name: "Zapier", icon: <SiZapier className="text-[#FF4A00] text-[18px]" /> },
    { name: "Airtable", icon: <SiAirtable className="text-[#18BFFF] text-[18px]" /> },
    { name: "Slack Workflows", icon: <SiSlack className="text-[#4A154B] text-[18px]" /> },
  ],
};
