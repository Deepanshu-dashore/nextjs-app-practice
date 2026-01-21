"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit
} from "firebase/firestore";

import Footer from "../components/shared/Footer";
import Link from "next/link";
import { db } from "../firebase";
import { useRouter } from "next/navigation";


export default function Talent() {
  const router = useRouter()
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(2);
  
  const [opportunities, setOpportunities] = useState([]);
  const [sectionsByOpp, setSectionsByOpp] = useState({});
  // 🔎 Filter state
const [department, setDepartment] = useState("");
const [location, setLocation] = useState("");
const [type, setType] = useState("");
// 🎯 Filter values from Firestore data
const departments = Array.from(
  new Set(opportunities.map(o => o.department).filter(Boolean))
);

const locations = Array.from(
  new Set(opportunities.map(o => o.location).filter(Boolean))
);

const types = Array.from(
  new Set(opportunities.map(o => o.type).filter(Boolean))
);
const filteredOpportunities = opportunities.filter((opp) => {
  return (
    (!department || opp.department === department) &&
    (!location || opp.location === location) &&
    (!type || opp.type === type)
  );
});

  // 🔥 Fetch Talent Programs from Firestore
  const fetchPrograms = async () => {
    try {
      const q = query(collection(db, "talentPrograms"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPrograms(list);
    } catch (error) {
      console.error("Failed to fetch talent programs:", error);
    } finally {
      setLoading(false);
    }
  };
  const [suggestedBlogs, setSuggestedBlogs] = useState([]);

useEffect(() => {
  async function fetchSuggestedBlogs() {
    const q = query(
      collection(db, "blogs"),
      where("status", "==", "published"),
      limit(4)
    );
    const snap = await getDocs(q);
    setSuggestedBlogs(
      snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );
  }

  fetchSuggestedBlogs();
}, []);

  /* ---------------- FETCH OPPORTUNITIES & SECTIONS ---------------- */
  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Fetch ALL opportunities
        const oppSnap = await getDocs(
          query(collection(db, "opportunities"), orderBy("createdAt", "desc"))
        );

        const opps = oppSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOpportunities(opps);

        // Fetch ALL career sections
        const secSnap = await getDocs(collection(db, "careerSections"));
        const map = {};
        secSnap.docs.forEach((doc) => {
          const d = doc.data();
          if (!map[d.opportunityId]) map[d.opportunityId] = [];
          map[d.opportunityId].push(d);
        });

        setSectionsByOpp(map);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);
  useEffect(() => {
    fetchPrograms();
  }, []);
   const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const section = sectionRef.current;

  //   if (!video || !section) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         // When section is visible → unmute
  //         video.muted = false;
  //         video.play().catch(() => {});
  //       } else {
  //         // When section is not visible → mute
  //         video.muted = true;
  //       }
  //     },
  //     {
  //       threshold: 0.5, // 50% visible
  //     }
  //   );

  //   observer.observe(section);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  const featuredPrograms = [
    {
      title: "Leadership Development Track",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "AI & Data Science Program",
      image: "https://images.unsplash.com/photo-1581090700227-6be3f7d77fc5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Full-Stack Web Development",
      image: "https://images.unsplash.com/photo-1521790366325-4b9b1d9f7e3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Product Management Excellence",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cloud & DevOps Training",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee9812?auto=format&fit=crop&w=900&q=80",
    },
  ];

  // 🔁 Auto scroll featured programs
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredPrograms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredPrograms.length]);

  return (
    
    <div className="bg-[#030303] text-white overflow-hidden relative">
      {/* HERO SECTION */}
    <section className="relative h-[100dvh] min-h-[560px] overflow-hidden">
  {/* BACKGROUND */}
  <motion.div className="absolute inset-0 will-change-transform">
    <div
      className="
        absolute inset-0 bg-cover bg-center scale-110
        bg-scroll md:bg-fixed
      "
      style={{
        backgroundImage:
          "url('/images/bcec19ec-57c8-4d59-9c86-a2ed823ad3c3.png')",
      }}
    />
    <div className="absolute inset-0 bg-black/40" />
  </motion.div>

  {/* CONTENT */}
  <motion.div className="
    relative z-10 h-full flex items-center justify-center
    px-4 sm:px-6 md:px-10 lg:px-11
  ">
    <div className="
      max-w-7xl
      mx-auto lg:mx-24
      flex flex-col items-center text-center
    ">
      <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white">
        Career Programs
      </span>

      {/* Decorative Line */}
      <div
        className="
          h-px w-full max-w-[180px] sm:max-w-[230px]
          mt-3
          bg-gradient-to-r from-transparent via-white/60 to-transparent
        "
      />

      <h1 className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold mt-3 text-white
      ">
        Empower Your Career
      </h1>

      <p className="
        text-sm sm:text-base
        text-gray-400 mt-4
        max-w-4xl leading-relaxed
      ">
        Join our structured talent programs designed to enhance skills,
        foster innovation, and prepare you for leadership and technical
        excellence. Explore tracks across AI, Web Development, Product
        Management, and more.
      </p>
    </div>
  </motion.div>
</section>




<section className="py-32 bg-[#0A0A0A]">
  <div className="max-w-7xl mx-auto px-6">
 {/* HEADING */}
<div className="text-center mb-16">

  {/* Badge */}
  <div
    className="inline-flex items-center gap-2 px-4 py-2 mb-4
    rounded-full
    bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
    border border-indigo-500/20
    backdrop-blur-sm"
  >
    <svg
      className="w-4 h-4 text-indigo-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      Career Growth
    </span>

    <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
  </div>

  {/* Title */}
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
    Our Pathways
  </h2>

  {/* Subtitle */}
  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
    Clear routes designed to help you grow, learn, and succeed
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-[#131313] rounded-xl overflow-hidden shadow-lg flex flex-col">
    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="Internships"
      className="h-56 w-full object-cover"
    />
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold text-white mb-3">
        Software Internships
      </h3>
      <p className="text-gray-400 flex-1 mb-4">
        For aspiring developers, these internships provide hands-on experience in coding, software development, and working on live projects with our engineering teams.
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Duration: 8–12 weeks <br />
        Location: multiple offices / remote <br />
        Progression: pathway to full-time developer roles
      </p>
      <a
        href="#"
        className="text-purple-500 font-medium mt-auto inline-flex items-center hover:underline"
      >
        Learn more <span className="ml-2">→</span>
      </a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-[#131313] rounded-xl overflow-hidden shadow-lg flex flex-col">
    <img
      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="Graduates"
      className="h-56 w-full object-cover"
    />
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold text-white mb-3">
        Graduate Developer Program
      </h3>
      <p className="text-gray-400 flex-1 mb-4">
        Designed for recent graduates, this program rotates you across software engineering teams, builds leadership and technical skills, and accelerates your career in tech.
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Duration: 12–18 months <br />
        Location: global offices / remote <br />
        Progression: fast-track to senior developer or team lead
      </p>
      <a
        href="#"
        className="text-purple-500 font-medium mt-auto inline-flex items-center hover:underline"
      >
        Learn more <span className="ml-2">→</span>
      </a>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-[#131313] rounded-xl overflow-hidden shadow-lg flex flex-col">
    <img
      src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="STEM Champions"
      className="h-56 w-full object-cover"
    />
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold text-white mb-3">
        Tech Talent Pathway
      </h3>
      <p className="text-gray-400 flex-1 mb-4">
        For top STEM talent, this program develops advanced skills in AI, cloud computing, cybersecurity, and software engineering, preparing you for global technical leadership roles.
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Eligibility: top STEM students / coding competition winners <br />
        Opportunities: global projects, R&D teams <br />
        Benefits: mentorship, accelerated career growth
      </p>
      <a
        href="#"
        className="text-purple-500 font-medium mt-auto inline-flex items-center hover:underline"
      >
        Learn more <span className="ml-2">→</span>
      </a>
    </div>
  </div>
</div>

  </div>
</section>
       




<section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0b0b0f]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= HEADING ================= */}
    <div className="text-center mb-12 sm:mb-14 md:mb-16">

      <div
        className="
          inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4
          rounded-full
          bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
          border border-indigo-500/20
          backdrop-blur-sm
        "
      >
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm4 4V4h-4v2h4z" />
        </svg>

        <span className="text-xs sm:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Jobs & Internships
        </span>

        <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
        Career Opportunities
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        Discover full-time roles and internship opportunities to grow your career with us
      </p>
    </div>

    {/* ================= FILTERS ================= */}
    <div className="mb-12 sm:mb-14 md:mb-16">
      <p className="text-sm text-gray-400 mb-4">Filters:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <select className="w-full px-5 py-3 rounded-xl bg-[#121218] border border-white/10 text-gray-300 focus:outline-none focus:border-gray-500 transition">
          <option value="">Department</option>
        </select>

        <select className="w-full px-5 py-3 rounded-xl bg-[#121218] border border-white/10 text-gray-300 focus:outline-none focus:border-gray-500 transition">
          <option value="">Location</option>
        </select>

        <select className="w-full px-5 py-3 rounded-xl bg-[#121218] border border-white/10 text-gray-300 focus:outline-none focus:border-gray-500 transition">
          <option value="">Employment Type</option>
        </select>
      </div>
    </div>

    {/* ================= TABLE HEADER ================= */}
    <div className="hidden md:grid grid-cols-12 text-sm text-gray-500 pb-4 border-b border-white/10">
      <div className="col-span-6">Role</div>
      <div className="col-span-3 text-center">Location</div>
      <div className="col-span-2 text-center">Type</div>
      <div className="col-span-1 text-right"></div>
    </div>

    {/* ================= OPPORTUNITIES LIST ================= */}
    <div className="divide-y divide-white/10">
      {filteredOpportunities.map((opp) => (
        <motion.div
          key={opp.id}
          onClick={() => router.push(`/career/${opp.id}`)}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
          transition={{ duration: 0.2 }}
          className="
            grid grid-cols-1 md:grid-cols-12 items-start md:items-center
            py-5 sm:py-6 px-3 sm:px-4
            rounded-xl cursor-pointer
          "
        >
          {/* Role */}
          <div className="md:col-span-6">
            <h3 className="text-base sm:text-lg font-medium text-white capitalize">
              {opp.title}
            </h3>
          </div>

          {/* Location */}
          <div className="md:col-span-3 md:text-center mt-2 md:mt-0 capitalize">
            <span className="text-sm sm:text-base text-gray-400">
              {opp.location}
            </span>
          </div>

          {/* Type */}
          <div className="md:col-span-2 md:text-center mt-2 md:mt-0 capitalize">
            <span className="text-sm sm:text-base text-gray-400">
              {opp.type}
            </span>
          </div>

          {/* Apply */}
          <div className="md:col-span-1 mt-4 md:mt-0 md:text-right">
            <button
              onClick={() => router.push(`/career/${opp.id}`)}
              className="
                px-4 sm:px-5 py-2 rounded-full
                text-xs sm:text-sm font-medium
                bg-white text-black hover:bg-gray-200 transition
              "
            >
              Apply
            </button>
          </div>
        </motion.div>
      ))}

      {filteredOpportunities.length === 0 && (
        <p className="text-center text-gray-500 py-10 sm:py-12">
          No opportunities match your filters.
        </p>
      )}
    </div>
  </div>
</section>




 <section className="bg-black py-28">
        <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
<div className="text-center mb-20">

  {/* Badge */}
  <div
    className="inline-flex items-center gap-2 px-4 py-2 mb-4
    rounded-full
    bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
    border border-indigo-500/20
    backdrop-blur-sm"
  >
    <svg
      className="w-4 h-4 text-indigo-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      Insights & Stories
    </span>

    <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
  </div>

  {/* Title */}
  <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6">
    Discover More
  </h2>

  {/* CTA */}
  <Link
    href="/blog"
    className="
      inline-flex items-center justify-center
      px-6 py-3
      rounded-full
      bg-black text-white
      text-sm font-medium
      hover:opacity-90
      transition
    "
  >
    Read People Blog
  </Link>
</div>


          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {suggestedBlogs.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.titleSlug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[20px] mb-4">
                  <img
                    src={item.coverImageUrl || "/no-image.png"}
                    alt={item.title}
                    className="
                      w-full
                      h-[250px]
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Title BELOW IMAGE */}
               <h3
  className="
    mt-1
    ml-2
    text-[17px]
    font-medium
    leading-[1.35]
    text-white
    max-w-[92%]
    capitalize
  "
>
  {item.titleSlug?.replace(/-/g, " ")}
</h3>

              </Link>
            ))}
          </div>
        </div>
      </section>

   










      <Footer />
    </div>
  );
}
