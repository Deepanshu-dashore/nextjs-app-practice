"use client";

import { useEffect, useRef, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { db } from "../firebase";
import { motion, useScroll, useTransform } from "motion/react";
import Footer from "../components/shared/Footer";
import Head from "next/head";

/* ================= DATE FORMATTER ================= */
const formatDate = (timestamp) => {
  if (!timestamp) return "";

  const date =
    typeof timestamp.toDate === "function"
      ? timestamp.toDate()
      : new Date(timestamp);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
          summary: data.summary || "", // ✅ FETCH SUMMARY
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

  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const categories = [...new Set(blogs.map((b) => b.category))];

  if (loading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }

  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>Indidevelopers Blog | Insights on Modern Software Development</title>
        <meta
          name="description"
          content="Clear, practical writing on scalable and reliable web applications."
        />
      </Head>

      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative h-dvh overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/blogherobg.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-6xl font-semibold text-white">
              Insights on Modern Software Development
            </h1>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl">
              Practical writing on scalable, real-world web applications.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative bg-black">
        <div className="mx-auto py-20 w-[90dvw]">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-400">No blogs found.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* ========== LEFT 2/3 ========== */}
              <div className="lg:col-span-8 space-y-6">
                {/* FEATURED BLOG */}
                <div className="flex flex-col gap-3 ml-2">
                  <h5 className="text-gray-400 text-xs uppercase ">
                    {formatDate(filteredBlogs[0].createdAt)}
                  </h5>

                  {/* ✅ SUMMARY INSTEAD OF TITLE */}
                  <h2 className="text-2xl font-semibold text-white capitalize">
                    {filteredBlogs[0].summary ||
                      filteredBlogs[0].titleSlug.replace(/-/g, " ")}
                  </h2>
                </div>

                <Link
                  href={`/blog/${filteredBlogs[0].titleSlug}`}
                  className="group relative block rounded-3xl mb-10 overflow-hidden border border-white/20 hover:border-blue-500/40 transition"
                >
                  <div className="h-[420px] overflow-hidden">
                    <img
                      src={filteredBlogs[0].coverImageUrl}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>
                </Link>

                {/* <div className="flex items-center gap-4 text-sm">
                  <span className="text-blue-400 uppercase tracking-widest">
                    {filteredBlogs[0].category}
                  </span>
                </div> */}

                {/* BLOG LIST */}
                <div className="space-y-12">
                  {filteredBlogs.slice(1).map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.titleSlug}`}
                      className="group flex flex-col md:flex-row gap-8 border-t  border-white/20 rounded-2xl p-4  transition"
                    >
                      {/* IMAGE */}
                      <div className="md:w-1/3 h-56 overflow-hidden rounded-xl mt-5">
                        <img
                          src={blog.coverImageUrl}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="md:w-2/3 flex flex-col justify-center space-y-2 mt-5">
                        <div className="flex items-center gap-8 text-xs uppercase tracking-widest text-gray-400">
                          <span>{formatDate(blog.createdAt)}</span>
                          {/* <span>{blog.category}</span> */}
                        </div>
        {/* FEATURED BLOG TITLE */}
                <h2 className="text-4xl font-semibold text-white capitalize">
                  {filteredBlogs[0].titleSlug.replace(/-/g, " ")}
                </h2>
               
                        {/* ✅ SUMMARY */}
                        
                        <h3 className="text-lg  text-white">
                          {blog.summary ||
                            blog.titleSlug.replace(/-/g, " ")}
                        </h3>

                        {/* <p className="text-sm text-gray-400">
                          By{" "}
                          <span className="text-gray-300">
                            {blog.authorName}
                          </span>
                        </p> */}

                        {/* <div className="h-px w-full bg-white/20 my-3" /> */}

                        <span className="text-sm text-gray-300 group-hover:text-blue-400 transition">
                          Read Full 
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ========== RIGHT 1/3 (CATEGORIES) ========== */}
              <aside className="lg:col-span-4">
                <div className="sticky top-36 rounded-3xl border border-white/20 bg-[#0b0b0b] p-8">
                  <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-widest">
                    Categories
                  </h3>

                  <ul className="space-y-4">
                    <li
                      onClick={() => setActiveCategory("all")}
                      className={`cursor-pointer text-sm uppercase tracking-wider ${
                        activeCategory === "all"
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-blue-400"
                      }`}
                    >
                      All
                    </li>

                    {categories.map((category, idx) => (
                      <li
                        key={idx}
                        onClick={() => setActiveCategory(category)}
                        className={`cursor-pointer text-sm uppercase tracking-wider ${
                          activeCategory === category
                            ? "text-blue-400"
                            : "text-gray-300 hover:text-blue-400"
                        }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
