
// "use client";

// import { useEffect, useRef, useState, useMemo } from "react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import Link from "next/link";
// import { db } from "../firebase";
// import { motion, useScroll, useTransform } from "motion/react";
// import Footer from "../components/shared/Footer";
// import Head from "next/head";

// /* ================= DATE FORMATTER ================= */
// const formatDate = (timestamp) => {
//   if (!timestamp) return "";
//   const date =
//     typeof timestamp.toDate === "function"
//       ? timestamp.toDate()
//       : new Date(timestamp);

//   return date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// };
// const normalizeCategory = (cat = "") =>
//   cat.toString().trim().toLowerCase();
// const ClampedHTML = ({ html, lines = 3 }) => {
//   if (!html) return null;

//   return (
//     <div
//       className={`text-gray-300 line-clamp-${lines} prose prose-invert max-w-none`}
//       dangerouslySetInnerHTML={{ __html: html }}
//     />
//   );
// };


// const normalizeTag = (tag = "") => {
//   return tag
//     .replace(/[#,+]/g, " ")
//     .replace(/\s+/g, " ")
//     .trim();

// };
// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTag, setActiveTag] = useState("");

//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll();
//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const q = query(
//         collection(db, "blogs"),
//         where("status", "==", "published")
//       );

//       const snap = await getDocs(q);

//       const list = snap.docs.map((docSnap) => {
//         const data = docSnap.data();
//         const rawCategory = data.category || "uncategorized";

//         return {
//           id: docSnap.id,
//           titleSlug: data.titleSlug || "",
//           summary: data.summary || "",
//           coverImageUrl: data.coverImageUrl || "",
//           category: normalizeCategory(rawCategory),
//           categoryLabel: rawCategory.trim(),
//           tags: data.tags || [],
//           createdAt: data.createdAt,
//         };
//       });


//       setBlogs(list);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= FILTER ================= */
//   const filteredBlogs = blogs.filter((blog) => {
//     const matchCategory =
//       activeCategory === "all" ||
//       normalizeCategory(blog.category) === activeCategory;

//     const search = searchTerm.toLowerCase();
//     const matchSearch =
//       blog.summary.toLowerCase().includes(search) ||
//       blog.titleSlug.toLowerCase().includes(search) ||
//       blog.tags.some((tag) =>
//         normalizeTag(tag).toLowerCase().includes(search)
//       );


//     return matchCategory && matchSearch;
//   });



//   const categories = useMemo(() => {
//     const map = new Map();

//     blogs.forEach((b) => {
//       const key = normalizeCategory(b.category);

//       if (!map.has(key)) {
//         map.set(key, {
//           label: b.categoryLabel || b.category, // display name
//           count: 1,
//         });
//       } else {
//         map.get(key).count += 1;
//       }
//     });

//     return Array.from(map.entries());
//   }, [blogs]);


//   const allTags = useMemo(() => {
//     const map = new Map();

//     blogs.forEach((b) => {
//       b.tags.forEach((tag) => {
//         const clean = normalizeTag(tag);
//         const key = clean.toLowerCase();
//         if (!map.has(key)) map.set(key, clean);
//       });
//     });

//     return Array.from(map.values());
//   }, [blogs]);


//   if (loading) {
//     return <p className="text-center py-10 text-white">Loading blogs...</p>;
//   }



//   return (
//     <>
//       <Head>
//         <title>Indidevelopers Blog</title>
//       </Head>

//       {/* ================= HERO ================= */}
//       <section ref={heroRef} className="relative h-dvh overflow-hidden">
//         <motion.div className="absolute inset-0" style={{ y: bgY }}>
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: "url('/images/blogherobg.jpg')" }}
//           />
//           <div className="absolute inset-0 bg-black/60" />
//         </motion.div>

//         <div className="relative z-10 flex h-full items-center">
//           <div className="max-w-7xl mx-auto px-4">
//             <h1 className="text-6xl font-semibold text-white">
//               Insights on Modern Software Development
//             </h1>
//             <p className="text-xl text-gray-300 mt-6 max-w-3xl">
//               Practical writing on scalable, real-world web applications.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= BLOG GRID ================= */}
//       <section className="bg-black">
//         <div className="mx-auto py-20 w-[90dvw] ">
//           {filteredBlogs.length === 0 ? (
//             <p className="text-gray-400">No blogs found.</p>
//           ) : (
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16  ">

//               {/* ================= LEFT ================= */}
//               <div className="lg:col-span-8  bg-white/10 p-4">
//                 {/* FEATURED */}
//                 <Link
//                   href={`/blog/${filteredBlogs[0].titleSlug}`}
//                   className="group block rounded-3xl overflow-hidden border border-white/20 hover:border-indigo-500/40 transition mb-8"
//                 >
//                   <div className="h-[420px] overflow-hidden">
//                     <img
//                       src={filteredBlogs[0].coverImageUrl}
//                       className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
//                     />
//                   </div>
//                 </Link>

//                 <div className="mb-12">
//                   <p className="text-xs text-gray-400 uppercase">
//                     {formatDate(filteredBlogs[0].createdAt)}
//                   </p> <h2 className="text-2xl font-semibold text-white mt-2">
                 
                  
//                   <ClampedHTML
//   html={filteredBlogs[0].summary || filteredBlogs[0].titleSlug}
//   lines={3}
// /></h2>

//                 </div>

//                 {/* LIST */}
//                 <div className="space-y-12">
//                   {filteredBlogs.slice(1).map((blog) => (
//                     <Link
//                       key={blog.id}
//                       href={`/blog/${blog.titleSlug}`}
//                       className="group flex flex-col md:flex-row gap-8 border-t border-white/20 p-4 rounded-2xl"
//                     >
//                       <div className="md:w-1/3 h-56 rounded-xl overflow-hidden">
//                         <img
//                           src={blog.coverImageUrl}
//                           className="w-full h-full object-cover group-hover:scale-105 transition"
//                         />
//                       </div>

//                       <div className="md:w-2/3 space-y-2">
//                         <p className="text-xs uppercase text-gray-400">
//                           {formatDate(blog.createdAt)}
//                         </p>
                                 
//  {blog.titleSlug}

//                         <h3 className="text-lg text-white">
//                        <ClampedHTML
//   html={blog.summary || blog.titleSlug}
//   lines={3}
// />

//                         </h3>
//                         <span className="text-sm text-gray-300 group-hover:text-indigo-400">
//                           Read More →
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* ================= RIGHT ================= */}
//               <aside className="lg:col-span-4 bg-white/10 p-4 space-y-8">

//                 {/* SEARCH */}
//                 <input
//                   type="text"
//                   placeholder="Search by title or tag"
//                   value={searchTerm}
//                   onChange={(e) => {
//                     setSearchTerm(e.target.value);
//                     setActiveTag("");
//                   }}
//                   className="w-full rounded-xl border border-white/20 px-4 py-3 text-sm text-white bg-transparent"
//                 />


//                 {/* CATEGORIES */}
//                 <div>

//                   <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                     Categories    <span className="h-[2px] w-8 bg-indigo-400" />
//                   </h3>

//                   <ul className="space-y-3">
//                     {/* ALL */}
//                     <li
//                       onClick={() => setActiveCategory("all")}
//                       className={`flex justify-between cursor-pointer ${activeCategory === "all"
//                           ? "text-indigo-400"
//                           : "text-gray-300"
//                         }`}
//                     >
//                       <span>All</span>
//                       <span>{blogs.length}</span>
//                     </li>

//                     {/* MERGED CATEGORIES */}
//                     {categories.map(([key, value]) => (
//                       <li
//                         key={key}
//                         onClick={() => setActiveCategory(key)}
//                         className={`flex justify-between cursor-pointer ${activeCategory === key
//                             ? "text-indigo-400"
//                             : "text-gray-300"
//                           }`}
//                       >
//                         <span className="capitalize">{value.label}</span>
//                         <span>{value.count}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>


//                 {/* GALLERY */}
//                 <div>

//                   <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                     Gallery
//                     <span className="h-[2px] w-8 bg-indigo-400" />
//                   </h3>

//                   <div className="grid grid-cols-3 gap-3">
//                     {blogs.slice(0, 6).map((blog) => (
//                       <Link
//                         key={blog.id}
//                         href={`/blog/${blog.titleSlug}`}
//                         className="h-20 rounded-lg overflow-hidden"
//                       >
//                         <img
//                           src={blog.coverImageUrl}
//                           className="w-full h-full object-cover hover:scale-110 transition"
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 {/* TAGS */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
//                     Tags
//                     <span className="h-[2px] w-8 bg-indigo-400" />
//                   </h3>

//                   <div className="flex flex-wrap gap-3">
//                     {allTags.map((tag) => {
//                       const isActive = activeTag === tag;

//                       return (
//                         <button
//                           key={tag}
//                           onClick={() => {
//                             setSearchTerm(tag);
//                             setActiveTag(tag);
//                           }}
//                           className={`px-4 py-2 text-sm rounded-md border transition ${isActive
//                               ? "bg-black text-white border  border-indigo-500/40"
//                               : "bg-black text-white border border-white/20 "
//                             }`}
//                         >
//                           {tag}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>


//               </aside>
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { db } from "../firebase";
import { motion, useScroll, useTransform } from "motion/react";
import Footer from "../components/shared/Footer";
import Head from "next/head";

/* ================= HELPERS ================= */

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

const normalizeCategory = (cat = "") =>
  cat.toString().trim().toLowerCase();

const normalizeTitle = (value = "") =>
  value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const normalizeTag = (tag = "") =>
  tag.replace(/[#,+]/g, " ").replace(/\s+/g, " ").trim();

const ClampedHTML = ({ html, lines = 4 }) => {
  if (!html) return null;

  return (
    <div
      className={`text-gray-300 line-clamp-${lines} prose prose-invert max-w-none`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/* ================= PAGE ================= */

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("");

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
        const rawCategory = data.category || "Uncategorized";

        return {
          id: docSnap.id,
          titleSlug: data.titleSlug || "",
          summary: data.summary || "",
          coverImageUrl: data.coverImageUrl || "",
          category: normalizeCategory(rawCategory),
          categoryLabel: rawCategory,
          tags: data.tags || [],
          createdAt: data.createdAt,
        };
      });

      setBlogs(list);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FILTER ================= */

  const filteredBlogs = blogs.filter((blog) => {
    const matchCategory =
      activeCategory === "all" ||
      blog.category === activeCategory;

    const search = searchTerm.toLowerCase();
    const matchSearch =
      normalizeTitle(blog.titleSlug).toLowerCase().includes(search) ||
      blog.summary.toLowerCase().includes(search) ||
      blog.tags.some((tag) =>
        normalizeTag(tag).toLowerCase().includes(search)
      );

    return matchCategory && matchSearch;
  });

  /* ================= CATEGORIES ================= */

  const categories = useMemo(() => {
    const map = new Map();

    blogs.forEach((b) => {
      if (!map.has(b.category)) {
        map.set(b.category, {
          label: b.categoryLabel,
          count: 1,
        });
      } else {
        map.get(b.category).count += 1;
      }
    });

    return Array.from(map.entries());
  }, [blogs]);

  /* ================= TAGS ================= */

  const allTags = useMemo(() => {
    const set = new Set();

    blogs.forEach((b) =>
      b.tags.forEach((t) => set.add(normalizeTag(t)))
    );

    return Array.from(set);
  }, [blogs]);

  if (loading) {
    return <p className="text-center py-20 text-white">Loading blogs…</p>;
  }

  return (
    <>
      <Head>
        <title>Indidevelopers Blog</title>
      </Head>

      {/* ================= HERO ================= */}
      {/* <section ref={heroRef} className="relative h-dvh overflow-hidden">
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
      </section> */}

      
   <section ref={heroRef} className="relative h-[70dvh] overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundAttachment: "fixed",
              backgroundImage:
                "url('/images/bg3.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      <div className="relative z-10 h-full flex items-center">
  <div className="max-w-7xl mx-20">
    <span className="text-sm tracking-[0.3em] uppercase text-white">
      Our Journal
    </span>

    <div className="h-px max-w-sm bg-linear-to-r from-white/60 to-transparent mt-3" />

    <h1 className="text-6xl md:text-7xl font-bold mt-4 text-white">
      Ideas That{" "}
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Shape the Web
      </span>
    </h1>

    <p className="text-xl text-gray-300 mt-6 max-w-3xl leading-relaxed">
      A space where creativity meets technology. Discover stories on UX design,
      visual thinking, digital experiences, and the ideas that turn concepts
      into memorable products.
    </p>
  </div>
</div>

          </section>
      {/* ================= CONTENT ================= */}
      <section className="bg-black">
        <div className="mx-auto py-20 w-[90dvw]">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-400">No blogs found.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* ================= LEFT ================= */}
              <div className="lg:col-span-8 bg-white/10 p-6 rounded-2xl">

                {/* FEATURED */}
                <Link
                  href={`/blog/${filteredBlogs[0].titleSlug}`}
                  className="block rounded-3xl overflow-hidden border border-white/20 hover:border-indigo-500/40 transition mb-10"
                >
                  <div className="h-[420px] overflow-hidden">
                    <img
                      src={filteredBlogs[0].coverImageUrl}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                </Link>

                <p className="text-xs text-gray-400 uppercase">
                  {formatDate(filteredBlogs[0].createdAt)}
                </p>

                <h2 className="text-2xl font-semibold text-white mt-2">
                  {normalizeTitle(filteredBlogs[0].titleSlug)}
                </h2>

                <div className="mt-3">
                  <ClampedHTML html={filteredBlogs[0].summary} />
                </div>

                {/* LIST */}
                <div className="space-y-12 mt-14 overflow-y-scroll h-[60dvh] pr-4 " style={{scrollbarWidth:"none"}}>
                  {filteredBlogs.slice(1).map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.titleSlug}`}
                      className="group flex flex-col md:flex-row gap-8 border-t border-white/20 pt-8"
                    >
                      <div className="md:w-1/3 h-56 rounded-xl overflow-hidden">
                        <img
                          src={blog.coverImageUrl}
                          className="w-full h-full object-cover hover:scale-105 transition"
                        />
                      </div>

                      <div className="md:w-2/3 space-y-2">
                        <p className="text-xs uppercase text-gray-400">
                          {formatDate(blog.createdAt)}
                        </p>

                        <h3 className="text-xl text-white font-medium">
                          {normalizeTitle(blog.titleSlug)}
                        </h3>

                        <ClampedHTML html={blog.summary} />

                        <span className="text-sm text-indigo-400">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ================= RIGHT ================= */}
              <aside className="lg:col-span-4  bg-white/10 p-6 rounded-2xl space-y-10">

                {/* SEARCH */}
                <input
                  type="text"
                  placeholder="Search blogs…"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setActiveCategory("all");
                    setActiveTag("");
                  }}
                  className="w-full rounded-xl border border-white/20 px-4 py-3 text-sm text-white bg-black/30 focus:outline-none focus:border-indigo-400"
                />

                {/* CATEGORIES */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    Categories <span className="h-[2px] w-8 bg-indigo-400" />
                  </h3>

                  <ul className="space-y-2">
                    <li
                      onClick={() => setActiveCategory("all")}
                      className={`cursor-pointer flex justify-between px-3 py-2 rounded-lg
                        ${
                          activeCategory === "all"
                            ? "bg-indigo-500/10 text-indigo-400"
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                    >
                      <span>All</span>
                      <span>{blogs.length}</span>
                    </li>

                    {categories.map(([key, val]) => (
                      <li
                        key={key}
                        onClick={() => {
                          setActiveCategory(key);
                          setSearchTerm("");
                          setActiveTag("");
                        }}
                        className={`cursor-pointer flex justify-between px-3 py-2 rounded-lg
                          ${
                            activeCategory === key
                              ? "bg-indigo-500/10 text-indigo-400"
                              : "text-gray-300 hover:bg-white/5"
                          }`}
                      >
                        <span>{normalizeTitle(val.label)}</span>
                        <span>{val.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GALLERY */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    Gallery <span className="h-[2px] w-8 bg-indigo-400" />
                  </h3>

                  <div className="grid grid-cols-3 gap-3">
                    {blogs.slice(0, 6).map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blog/${blog.titleSlug}`}
                        className="h-24 rounded-lg overflow-hidden"
                      >
                        <img
                          src={blog.coverImageUrl}
                          className="w-full h-full object-cover hover:scale-110 transition"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* TAGS */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    Tags <span className="h-[2px] w-8 bg-indigo-400" />
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSearchTerm(tag);
                          setActiveTag(tag);
                          setActiveCategory("all");
                        }}
                        className={`px-4 py-2 text-sm rounded-md border transition capitalize
                          ${
                            activeTag === tag
                              ? "border-indigo-500 text-indigo-400 bg-indigo-500/10"
                              : "border-white/20 text-gray-300 hover:border-indigo-400"
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
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
