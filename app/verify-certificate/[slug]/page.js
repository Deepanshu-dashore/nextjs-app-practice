
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { QRCodeCanvas } from "qrcode.react";
import Footer from "@/app/components/shared/Footer";
import DarkVeil from "@/app/components/home/DarkVeil";

export default function VerifyCertificate() {
  const { slug } = useParams();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);
  const certRef = useRef(null);

  useEffect(() => {
    if (slug) fetchCertificate();
  }, [slug]);

  const fetchCertificate = async () => {
    try {
      const docRef = doc(db, "certificates", slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setCert(docSnap.data());
      else setCert(null);
    } catch (err) {
      console.error("Error fetching certificate:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!cert) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Certificate Not Found</h1>
      </div>
    );
  }

  return (
    <>
        <div style={{ width: "100%", height: "100dvh", position: "fixed" }}>
                <DarkVeil speed={1} warpAmount={0.1} />
              </div>
              <div
                style={{ width: "100%", height: "100dvh", position: "relative" }}
              >
            
    <div className="min-h-screen w-full  text-white relative overflow-hidden mt-20">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.25),transparent_70%)] blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="bg-black/70 text-black rounded-2xl py-10 text-center shadow-2xl">
          <div className="flex justify-center mb-4 ">
            <div className="w-20 h-20 rounded-full  bg-gradient-to-br from-black via-purple-600/20 to-indigo-600/70 flex flex-col items-center justify-center shadow-lg">
              <img src="/images/logoindi.png" className="w-12" alt="Logo" />
              <img src ="/images/indi-Logo-white.png " className="w-12" alt="Logo"/>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">Certificate of Completion</h1>
          <p className="text-gray-300 mt-2">
            Certificate ID: {slug}
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          <div className="bg-black/60 border border-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Recipient Details</h3>
            <p className="text-gray-400">Full Name</p>
            <p className="text-lg font-semibold">{cert.name}</p>

            <p className="text-gray-400 mt-4">Internship Title</p>
            <p className="text-lg font-semibold">{cert.role}</p>
          </div>

          <div className="bg-black/60 border border-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Course Details</h3>
            <p className="text-gray-400">Completion Date</p>
            <p className="text-lg font-semibold">{cert.endDate}</p>

            <p className="text-gray-400 mt-4">Duration</p>
            <p className="text-lg font-semibold">3 Month</p>

            <p className="text-gray-400 mt-4">Issued By</p>
            <p className="text-lg font-semibold">Indidevelopers</p>
          </div>

        </div>

        {/* CERTIFICATE PREVIEW */}
        <div className="mt-12 bg-black/70 rounded-2xl p-6 border border-white/10 backdrop-blur-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Certificate Preview</h3>

<div className="w-full flex justify-center overflow-hidden">
  <div
    className="
      origin-top
      scale-[0.55]
      sm:scale-[0.65]
      md:scale-[0.8]
      lg:scale-100
    "
  >


            {/* ================= CERTIFICATE DESIGN ================= */}
            <div
              ref={certRef}
              className="relative w-[1100px] h-[780px] flex shadow-2xl font-sans overflow-hidden bg-white"
              style={{
                backgroundImage: "url('/images/blankcertificate.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* LEFT PANEL */}
              <div className="relative w-[250px] h-full">
                <div className="absolute bottom-36 left-28 -translate-x-1/2">
                  <div className="bg-white p-2 rounded-md shadow-lg">
                  <QRCodeCanvas
  value={`https://indidevelopers.com/verify-certificate/${slug}`}
  size={115}
/>

                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="flex-1 py-10 px-10 text-black relative">
                <h1 className="text-[42px] font-extrabold tracking-wider">
                  INTERNSHIP CERTIFICATE
                </h1>

                <p className="mt-20 text-[20px] tracking-wider">
                  This certifies that
                </p>

                <h2 className="mt-1 text-[50px] font-extrabold text-indigo-900 tracking-wide">
                  {cert.name}
                </h2>

                <p className="mt-4 text-[20px] leading-7 tracking-wider max-w-[730px]">
                  Has successfully completed a 3-month{" "}
                  <span className="font-semibold">{cert.role}</span> at
                  Indidevelopers (from {cert.startDate} to {cert.endDate}),
                  actively contributing to live projects with consistent
                  performance, strong collaboration skills, and a proactive
                  learning mindset.
                </p>

                <p className="mt-6 text-[20px] leading-7 tracking-wider max-w-[600px]">
                  We appreciate the dedication and wish them success in all
                  future endeavours.
                </p>

                {/* SIGNATURE */}
                <div className="absolute bottom-14 left-8 text-center">
                  {cert.signature && (
                    <img
                      src={cert.signature}
                      alt="Signature"
                      className="w-[200px] h-20 mx-auto mb-2"
                    />
                  )}

                  <div className="w-56 border-b border-gray-400 mb-2 mx-auto" />

                  <p className="font-semibold">{cert.directorName}</p>
                  <p className="text-sm">Program Director – Internship</p>
                  <p className="text-sm">Indidevelopers</p>
                </div>
              </div>
            </div>
            {/* ====================================================== */}

          </div>
        </div>

        {/* VERIFIED STATUS */}
        <div className="mt-12 bg-black/70 border border-emerald-500/40 rounded-2xl p-8 text-center backdrop-blur-lg shadow-[0_0_40px_rgba(16,185,129,0.3)]">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
            <span className="text-3xl text-emerald-400">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-emerald-400">
            Certificate Verified
          </h2>
          <p className="text-gray-400 mt-2">
            This certificate has been verified and is authentic.
          </p>
        </div>
</div>
      </div>
    </div>
    <Footer/>
   
              </div>
    </>
  );
}
