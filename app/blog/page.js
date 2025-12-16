
"use client";

import { useEffect, useRef, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { db } from "../firebase";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/shared/Footer";
import Head from "next/head";

export default function BlogPage() {
 
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
 const heroRef = useRef(null);
  // ✅ Safe in Next.js App Router
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        where("status", "==", "published")
      );

      const snap = await getDocs(q);

      const list = snap.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          titleSlug: data.titleSlug,
          authorName: data.authorName,
          coverImageUrl: data.coverImageUrl,
          category: data.category,
          createdAt: data.createdAt,
        };
      });

      setBlogs(list);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }
  if (loading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }

  return (
    <>
     {/* ================= SEO ================= */}
      <Head>
        <title>Indidevelopers Blog | Insights on Modern Software Development</title>
        <meta name="description" content="Clear, practical writing on building scalable and reliable web applications. Articles focused on real development challenges and best practices." />
        <meta property="og:title" content="Indidevelopers Blog" />
        <meta property="og:description" content="Clear, practical writing on building scalable and reliable web applications." />
        <meta property="og:image" content="/images/blogherobg.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="relative h-dvh overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          // style={{ y }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundAttachment:"fixed",
            backgroundImage:
              "url('/images/blogherobg.jpg')",
          }}
        />

        {/* Overlays */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold text-gray-300 tracking-[0.3em] uppercase">
                Blog
              </span>

  <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-white/60 to-transparent mt-3" />
              <h1 className="text-5xl md:text-6xl font-semibold text-white mt-3 mb-3 leading-tight">
                Insights on Modern
                <br className="hidden sm:block" />
                Software Development
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-3xl">
                Clear, practical writing on building scalable and reliable web applications.
              </p>

              <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                Articles focused on real development challenges, thoughtful solutions,
                and best practices from modern frameworks and tools.
              </p>
            </div>
          </div>
        </div>
      </section>


   {/* ================= BLOG GRID ================= */}
<section className="relative bg-black">
  <div className=" mx-auto py-20 w-[90dvw] h-[100dvh] ">
    {blogs.length === 0 ? (
      <p className="text-gray-400">No published blogs found.</p>
    ) : (
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.titleSlug}`}
            className="group relative rounded-3xl p-4 border border-white/20 hover:border-yellow-500/40 transition"
          >
            {/* Card */}
            <div className="h-full rounded-3xl bg-[#0b0b0b] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_60px_rgba(255,193,7,0.25)] transition-all duration-300">

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.coverImageUrl}
                  alt={blog.titleSlug}
                  className="h-full w-full object-cover scale-100 group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-white leading-snug mb-6 capitalize">
                  {blog.titleSlug.replace(/-/g, " ")}
                </h2>

                {/* Divider */}
                <div className="h-px w-full bg-white/20 mb-5" />

                {/* Read More */}
                <div className="flex items-center gap-2 text-gray-300 text-sm group-hover:text-yellow-400 transition">
              
                  <span>Read More...</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
</section>

      <Footer />
    </>
  );
}
