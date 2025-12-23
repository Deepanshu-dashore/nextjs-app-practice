"use client";

import { useEffect, useState } from "react";
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

export default function Talent() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(2);

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


  useEffect(() => {
    fetchPrograms();
  }, []);

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
      <section className="relative h-[100dvh] overflow-hidden">
        {/* BACKGROUND */}
        <motion.div className="absolute inset-0 will-change-transform">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundAttachment: "fixed",
              backgroundImage:
                "url('/images/bcec19ec-57c8-4d59-9c86-a2ed823ad3c3.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

    {/* CONTENT */}
<motion.div className="relative z-10 h-full flex items-center justify-center px-11">
  <div className="max-w-7xl mx-24 flex flex-col items-center text-center">
    <span className="text-sm tracking-[0.3em] uppercase text-white">
      Career Programs
    </span>

    {/* Line matches text width */}
    <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-white/60 to-transparent mt-3" />

    <h1 className="text-5xl md:text-5xl font-bold mt-3 text-white">
      Empower Your Career 
    </h1>
<p className="text-sm text-gray-400 mt-4 max-w-4xl leading-relaxed">
  Join our structured talent programs designed to enhance skills, foster innovation,
  and prepare you for leadership and technical excellence. Explore tracks across AI,
  Web Development, Product Management, and more.
</p>


  </div>
</motion.div>

      </section>




<section className="py-32 bg-[#0A0A0A]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-white text-center mb-16">
      Our Pathways
    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg flex flex-col">
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
        className="text-blue-400 font-medium mt-auto inline-flex items-center hover:underline"
      >
        Learn more <span className="ml-2">→</span>
      </a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg flex flex-col">
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
        className="text-blue-400 font-medium mt-auto inline-flex items-center hover:underline"
      >
        Learn more <span className="ml-2">→</span>
      </a>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg flex flex-col">
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
        className="text-blue-400 font-medium mt-auto inline-flex items-center hover:underline"
      >
        Learn more <span className="ml-2">→</span>
      </a>
    </div>
  </div>
</div>

  </div>
</section>
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Join the Dream Team
    </h2>
    <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
      Our secret to success? Global, dynamic teams of go-getters and barrier breakers.
    </p>

    {/* Video Section using video tag for full cover */}
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
      <video
        src="/images/jointheteam.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-xl"
      ></video>
    </div>
  </div>
</section>

 <section className="bg-white py-28">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-[44px] font-semibold tracking-tight text-black mb-6">
              Discover more
            </h2>

            <Link
              href="/blogs"
              className="
                inline-flex items-center justify-center
                px-6 py-2.5
                rounded-full
                bg-black text-white
                text-sm font-medium
                hover:opacity-90
                transition
              "
            >
              Read People blog
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
    text-black
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
