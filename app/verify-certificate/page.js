"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { FaEye, FaTrash, FaCertificate } from "react-icons/fa";
import Link from "next/link";

export default function ManageCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "certificates"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCertificates(data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this certificate?")) return;
    try {
      await deleteDoc(doc(db, "certificates", id));
      setCertificates((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FaCertificate className="text-indigo-400" />
          Manage Certificates
        </h1>

        {certificates.length === 0 ? (
          <p className="text-gray-400">No certificates found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert) => (
                  <tr
                    key={cert.id}
                    className="border-t border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="p-3">{cert.studentName}</td>
                    <td className="p-3">{cert.role}</td>
                    <td className="p-3">
                      {cert.startDate} - {cert.endDate}
                    </td>
                    <td className="p-3 flex items-center justify-center gap-4">
                      {/* View Certificate */}
                      <Link
                        href={`/verify-certificate/${cert.id}`}
                        className="text-emerald-400 hover:text-emerald-300 text-xl"
                        title="View Certificate"
                      >
                        <FaEye />
                      </Link>

                      {/* Delete Certificate */}
                      <button
                        onClick={() => handleDelete(cert.id)}
                        className="text-red-400 hover:text-red-300 text-xl"
                        title="Delete Certificate"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
