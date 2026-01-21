
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import Footer from "@/app/components/shared/Footer";

/* 🔹 Date Formatter */
const formatDate = (timestamp) => {
  if (!timestamp?.toDate) return "";
  return timestamp.toDate().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [activeId, setActiveId] = useState(null);
const [relatedBlogs, setRelatedBlogs] = useState([]);

  /* ===============================
     🔹 Fetch Blog
  =============================== */
  useEffect(() => {
    if (!slug) return;

    async function fetchBlog() {
      const q = query(
        collection(db, "blogs"),
        where("titleSlug", "==", slug),
        where("status", "==", "published"),
        limit(1)
      );

      const snap = await getDocs(q);

      if (!snap.empty) {
        const data = snap.docs[0].data();

        setBlog({
          id: snap.docs[0].id,
          ...data,
          headings: [],
          summary: data.summary?.trim() || "",
          tags: Array.isArray(data.tags)
            ? data.tags
            : typeof data.tags === "string"
            ? data.tags.split(",").map((t) => t.trim())
            : [],
        });
      }
    }

    fetchBlog();
  }, [slug]);

  /* ===============================
     🔹 Inject IDs
  =============================== */
  useEffect(() => {
    if (!blog?.content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, "text/html");

    const headings = Array.from(
      doc.querySelectorAll("h1, h2, h3")
    ).map((el) => {
      const id = el.textContent
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      el.id = id;
      return {
        id,
        text: el.textContent,
        level: Number(el.tagName.replace("H", "")),
      };
    });

    setBlog((prev) => ({
      ...prev,
      content: doc.body.innerHTML,
      headings,
    }));
  }, [blog?.content]);

  /* ===============================
     🔹 ScrollSpy Logic (Exact PX)
  =============================== */
  useEffect(() => {
    if (!blog?.headings?.length) return;

    // when user scrolls, pick last one passed the threshold
    const handleScroll = () => {
      let current = blog.headings[0].id;
      const offset = window.innerHeight * 0.3;

      blog.headings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (!el) return;

        const topDist = el.getBoundingClientRect().top;
        if (topDist <= offset) {
          current = h.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog?.headings]);
/* ===============================
   🔹 Fetch Related Blogs
================================ */
useEffect(() => {
  if (!blog?.category || !blog?.id) return;

  async function fetchRelatedBlogs() {
    const q = query(
      collection(db, "blogs"),
      where("category", "==", blog.category),
      where("status", "==", "published"),
      limit(4) // fetch extra in case current blog is included
    );

    const snap = await getDocs(q);

    const related = snap.docs
      .filter((doc) => doc.id !== blog.id) // exclude current blog
      .slice(0, 3)
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    setRelatedBlogs(related);
  }

  fetchRelatedBlogs();
}, [blog?.category, blog?.id]);

  /* ===============================
     🔹 Smooth Scroll & Hash
  =============================== */
  const onTOCClick = (id) => (e) => {
    e.preventDefault();
    setActiveId(id);

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });

    history.pushState(null, "", `#${id}`);
  };

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <p className="text-gray-400">Loading blog...</p>
      </div>
    );
  }

  const title = blog.titleSlug.replace(/-/g, " ");

  return (
    <>
      <div className="bg-black text-white min-h-screen scroll-smooth">
        {/* ================= HERO ================= */}
    <section className="flex flex-col items-center mt-20 sm:mt-24 lg:mt-28 px-4 sm:px-6">
  {blog.category && (
    <span className="
      text-xs font-semibold text-gray-200
      py-1.5 sm:py-2 px-3 sm:px-4
      bg-white/10 rounded-lg
    ">
      {blog.category}
    </span>
  )}

  <h1 className="
    text-3xl sm:text-4xl lg:text-5xl
    font-extrabold mt-4
    text-center capitalize
    leading-tight
  ">
    {title}
  </h1>

  {blog.summary && (
    <p className="
      text-base sm:text-lg
      text-gray-400
      max-w-4xl mt-4
      text-center
    ">
      {blog.summary}
    </p>
  )}

  {/* ================= META (Author + Date) ================= */}
  <div className="mt-6 sm:mt-8 flex items-center gap-4">
    {/* Avatar */}
    <div className="
      w-9 h-9 sm:w-10 sm:h-10
      rounded-full bg-gray-500
      flex items-center justify-center
      text-white text-sm font-medium
    ">
      {blog.authorName ? blog.authorName[0] : "A"}
    </div>

    {/* Name + Date */}
    <div className="flex flex-col text-center sm:text-left">
      {blog.authorName && (
        <span className="text-white font-medium text-sm sm:text-base">
          {blog.authorName}
        </span>
      )}
      {blog.createdAt && (
        <span className="text-gray-400 text-xs sm:text-sm">
          Published on {formatDate(blog.createdAt)}
        </span>
      )}
    </div>
  </div>

  {blog.coverImageUrl && (
    <img
      src={blog.coverImageUrl}
      alt={title}
      className="
        w-full
        max-w-7xl
        lg:w-[85%]
        h-[240px] sm:h-[300px] lg:h-[75vh]
        object-cover
        rounded-xl sm:rounded-2xl
        mt-8 sm:mt-10
      "
    />
  )}
</section>

        {/* ================= BODY ================= */}
        <section className="max-w-7xl mx-auto px-4 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* ===== TOC ===== */}
            <aside className="hidden lg:block sticky top-28 h-[420px] w-[300px] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-xl p-6">
              <h2 className="text-sm font-semibold tracking-widest text-white mb-6 uppercase">
                Table of Contents
              </h2>

              <ul className="space-y-1">
                {blog.headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      onClick={onTOCClick(h.id)}
                      className={`relative block pl-4 py-2 text-sm transition-all
                        ${
                          activeId === h.id
                            ? "text-blue-400 font-medium before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-blue-500"
                            : "text-white hover:text-gray-200"
                        }
                      `}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* ===== CONTENT ===== */}
            <article className="lg:col-span-3 bg-[#0f0f0f] border border-white/10 rounded-xl p-8">
              <div
                className="
                  prose prose-invert prose-lg max-w-none
                  prose-headings:text-white
                  prose-headings:scroll-mt-28
                  prose-p:text-gray-400
                  prose-li:text-gray-400
                  prose-strong:text-white
                  prose-a:text-blue-400
                "
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
                           {/* TAGS */}
              {blog.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap gap-3">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm rounded-full bg-white/5 text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* META */}
              <div className="text-sm text-gray-500 mt-6">
                {blog.authorName && (
                  <span>
                    By{" "}
                    <span className="text-gray-300 font-medium">
                      {blog.authorName}
                    </span>
                  </span>
                )}
                {blog.createdAt && (
                  <span> • {formatDate(blog.createdAt)}</span>
                )}
              </div>
            </article>
            
          </div>
           
         
          
        </section>
        {/* ================= RELATED BLOGS ================= */}
{relatedBlogs.length > 0 && (
  <section className="max-w-7xl mx-auto px-4 pb-24">
    <h2 className="text-2xl font-bold text-white mb-8">
      Related Articles
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedBlogs.map((item) => (
        <a
          key={item.id}
          href={`/blog/${item.titleSlug}`}
          className="group bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition"
        >
          {item.coverImageUrl && (
            <img
              src={item.coverImageUrl}
              alt={item.titleSlug}
              className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}

          <div className="p-5">
         

            {item.createdAt && (
              <p className="text-xs text-gray-500 ">
                {formatDate(item.createdAt)}
              </p>
            )}
            <h3 className="text-lg font-semibold text-white  line-clamp-2 capitalize">
              {item.titleSlug.replace(/-/g, " ")}
            </h3>

            {item.summary && (
              <p className="text-sm text-gray-400 mt-2 line-clamp-3 capitalize">
                {item.summary}
              </p>
              
            )}

   <span className="text-xs text-gray-400  tracking-wider">
              {item.category}
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
)}

      </div>

      <Footer />
    </>
  );
}
