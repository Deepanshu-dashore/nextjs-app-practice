
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "@/app/firebase";
import Link from "next/link";
import Footer from "@/app/components/shared/Footer";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      const q = query(
        collection(db, "blogs"),
        where("titleSlug", "==", slug),
        where("status", "==", "published"),
        limit(1)
      );
      const snap = await getDocs(q);
      if (!snap.empty) setBlog({ id: snap.docs[0].id, ...snap.docs[0].data() });
    }
    if (slug) fetchBlog();
  }, [slug]);

  if (!blog) return (   <div className="flex justify-center items-center mt-24"> <p>Loading...</p></div>)

  const title = blog.titleSlug.replace(/-/g, " ");
  const description = blog.content.replace(/<[^>]+>/g, "").substring(0, 160);

  return (
    
    <>
   
   {/* <head>
        <title>{title} | Indidevelopers</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={blog.coverImageUrl || "/no-image.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </head> */}
    <div className="bg-black text-white min-h-screen">

   {/* ================= HERO SECTION ================= */}
  <section className="max-w-6xl mx-auto px-4 pt-28 pb-16">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

       {/* LEFT CONTENT */}
     <div className="flex flex-col justify-start items-start h-full">

   {/* Title */}
 <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 capitalize ">
   {blog.titleSlug.replace(/-/g, " ")} </h1>

<div className="flex flex-col items-center gap-3 text-sm text-gray-400">
 <h3>     <span>
    By : <span className="text-gray-200 font-medium">{blog.authorName}</span>   </span></h3>

 <h3 className="w-full">
   {blog.category && (
    <span className=" rounded-full text-gray-300 ">
      {blog.category}
    </span>
  )}
  </h3>
</div>

      </div>

      {/* RIGHT IMAGE */}
      {blog.coverImageUrl && (
        <div className="relative">
          <img
            src={blog.coverImageUrl}
            alt={blog.titleSlug}
            className="w-full h-[340px] lg:h-[380px] object-cover rounded-2xl"
            onError={(e) => (e.currentTarget.src = "/no-image.png")}
          />
        </div>
      )}
    </div>
  </section>

  {/* ================= CONTENT SECTION ================= */}
  <section className="max-w-4xl mx-auto px-4 pb-20">
    <div
      className="
        prose prose-invert prose-lg max-w-none
        prose-headings:text-white
        prose-p:text-gray-300
        prose-li:text-gray-300
        prose-strong:text-white
        prose-a:text-yellow-400
      "
      dangerouslySetInnerHTML={{ __html: blog.content }}
    />
  </section>

</div>
<Footer/>
    </>
  );
}
