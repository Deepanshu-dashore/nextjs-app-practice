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
import Link from "next/link";
import { db } from "@/app/firebase";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        where("titleSlug", "==", slug),
        where("status", "==", "published"),
        limit(1)
      );

      const snap = await getDocs(q);

      if (!snap.empty) {
        setBlog({ id: snap.docs[0].id, ...snap.docs[0].data() });
      } else {
        setBlog(null);
      }
    } catch (error) {
      console.error("Error loading blog:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
        <Link href="/blog" className="text-blue-600 mt-4 inline-block">
          ← Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 mt-20">
 

      {/* Cover Image */}
      {blog.coverImageUrl && (
        <img
          src={blog.coverImageUrl}
          alt={blog.titleSlug}
          className="w-full h-[400px] object-cover rounded-xl mb-6"
          onError={(e) => (e.currentTarget.src = "/no-image.png")}
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold capitalize mb-4">
        {blog.titleSlug.replace(/-/g, " ")}
      </h1>

      {/* Meta */}
      <div className="text-gray-500 text-sm mb-6">
        <span>Author: {blog.authorName}</span>
        {blog.category && <span> • {blog.category}</span>}
      </div>

      {/* Content (Quill HTML) */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
