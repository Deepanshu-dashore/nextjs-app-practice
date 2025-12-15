"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Link from "next/link";
import { db } from "../firebase";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        where("status", "==", "published"),
      
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

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>

      {blogs.length === 0 ? (
        <p>No published blogs found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.titleSlug}`}
              className="group border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Cover Image */}
              {blog.coverImageUrl && (
                <img
                  src={blog.coverImageUrl}
                  alt={blog.titleSlug}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold capitalize group-hover:text-blue-600 transition">
                  {blog.titleSlug.replace(/-/g, " ")}
                </h2>

                <p className="text-sm text-gray-500"> Author :{blog.authorName}</p>
                {/* <p className="text-sm text-gray-500">
                  {blog.category} 
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
