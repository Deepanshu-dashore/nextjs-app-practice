"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "@/app/firebase";
import Footer from "@/app/components/shared/Footer";

export default function BlogDetailClient({ titleSlug }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!titleSlug) return;

    async function fetchBlog() {
      const q = query(
        collection(db, "blogs"),
        where("titleSlug", "==", titleSlug),
        where("status", "==", "published"),
        limit(1)
      );

      const snap = await getDocs(q);

      if (!snap.empty) {
        setBlog({ id: snap.docs[0].id, ...snap.docs[0].data() });
      }
    }

    fetchBlog();
  }, [titleSlug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center mt-24">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <section className="max-w-6xl mx-auto px-4 pt-28 pb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 capitalize">
            {blog.titleSlug.replace(/-/g, " ")}
          </h1>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </section>
      </div>

      <Footer />
    </>
  );
}
