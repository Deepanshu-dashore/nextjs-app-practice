"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Loader2, Upload } from "lucide-react";
import toast from "react-hot-toast";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// 🔥 FIREBASE
import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import Footer from "../components/shared/Footer";

export default function CareersPage() {
  /* ---------------- REFS ---------------- */
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  /* ---------------- STATES ---------------- */
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [opportunities, setOpportunities] = useState([]);
  const [sectionsByOpp, setSectionsByOpp] = useState({});
  const [simpleDataList, setSimpleDataList] = useState([]);
  const [selectedOpp, setSelectedOpp] = useState(null);
  const heroRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact: "",
    resume: null,
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  /* ---------------- FETCH SIMPLE DATA ---------------- */
  useEffect(() => {
    const fetchSimpleData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "simpleData"));
        const data = snapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        setSimpleDataList(data);
      } catch (err) {
        console.error("Failed to fetch simpleDataList:", err);
      }
    };

    fetchSimpleData();
  }, []);

  /* ---------------- FETCH OPPORTUNITIES & SECTIONS ---------------- */
  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Fetch ALL opportunities
        const oppSnap = await getDocs(
          query(collection(db, "opportunities"), orderBy("createdAt", "desc"))
        );

        const opps = oppSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOpportunities(opps);

        // Fetch ALL career sections
        const secSnap = await getDocs(collection(db, "careerSections"));
        const map = {};
        secSnap.docs.forEach((doc) => {
          const d = doc.data();
          if (!map[d.opportunityId]) map[d.opportunityId] = [];
          map[d.opportunityId].push(d);
        });

        setSectionsByOpp(map);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  /* ---------------- FORM HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
  const handleSubmit = async (e, opportunityTitle) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let resumeUrl = "";

      if (formData.resume) {
        try {
          const storageRef = ref(
            storage,
            `resumes/${Date.now()}-${formData.resume.name}`
          );

          const snap = await uploadBytes(storageRef, formData.resume);
          resumeUrl = await getDownloadURL(snap.ref);
        } catch (uploadErr) {
          console.error("Resume upload failed:", uploadErr);
          toast.error("Resume upload failed, but other data will be saved.");
        }
      }

      await addDoc(collection(db, "applications"), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        subject: formData.subject,
        message: formData.message,
        resume: resumeUrl,
        opportunity: opportunityTitle || "Not specified",
        createdAt: serverTimestamp(),
      });

      toast.success("Application submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        contact: "",
        resume: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null; // safe reset
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ========================= UI ========================= */
  return (
    <main>
      {" "}
      {/* HERO */}
      {/* ---------------- HERO SECTION ---------------- */}
      <section ref={heroRef} className="relative h-[96dvh] overflow-hidden">
        {/* FIXED-LIKE BACKGROUND */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundAttachment: "fixed",
              backgroundImage:
                "url('https://img.freepik.com/free-photo/flat-lay-desktop-with-agenda-succulent-plant_23-2148430892.jpg?semt=ais_hybrid)",
            }}
            //https://t4.ftcdn.net/jpg/07/54/80/09/360_F_754800974_CXB9YRXM2ItqqUoEYouZnzctO9BTQhSv.jpg
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="max-w-7xl mx-20">
            <span className="text-sm tracking-[0.3em] uppercase text-white">
              Careers
            </span>

            <div className="h-px max-w-sm bg-linear-to-r from-white/60 to-transparent mt-3" />

            <h1 className="text-6xl md:text-7xl font-bold mt-3 text-white">
              Build, Innovate,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Shape the Future
              </span>
            </h1>

            <p className="text-xl text-gray-300 mt-6 max-w-4xl">
              Your career deserves a place where you can learn, lead, and
              innovate.
            </p>
          </div>
        </motion.div>
      </section>
      {/* OPPORTUNITIES */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Explore Opportunities
            </span>
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Current Opportunities
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover exciting roles where you can grow and make an impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((opp) => (
            <motion.div
              key={opp.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="
        group relative
        bg-[#0b0b0f]
        border border-white/10
        rounded-2xl
        p-6
        flex flex-col
        hover:border-indigo-500/40
        transition
        max-w-[350px]
        w-full
        mx-auto
      "
            >
              {/* HEADER */}
              <div className="mb-4">
                <h3 className=" font-bold capitalize text-lg text-white leading-snug mb-1 ">
                  {opp.title || (
                    <span className="text-gray-500 italic  ">
                      Opportunity title
                    </span>
                  )}
                </h3>

                <p className="text-sm capitalize text-gray-200 mt-2 line-clamp-3 h-16">
                  {opp.description || "No description provided for this role."}
                </p>
              </div>

              {/* META INFO */}
              <div className="space-y-2 text-sm mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-white ">Stipend</span>
                  <span className=" text-gray-200">
                    {opp.stipend || "Not Available"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white ">Deadline</span>
                  <span className="text-gray-200 ">
                    {opp.deadline
                      ? new Date(opp.deadline).toLocaleDateString()
                      : "Not Available"}
                  </span>
                </div>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-md text-xs bg-indigo-500/10 text-indigo-400 capitalize">
                  {opp.type || "Type"}
                </span>
                <span className="px-3 py-1 rounded-md text-xs bg-purple-500/10 text-purple-400 capitalize ">
                  {opp.location || "Location"}
                </span>
              </div>

              {/* CTA */}
              <button
                disabled={!opp.title}
                onClick={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className={`mt-auto w-full py-3 rounded-lg text-sm font-medium transition
            ${
              opp.title
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-white/10 text-gray-500 cursor-not-allowed"
            }`}
              >
                Apply now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      <section ref={formRef} className="py-20 bg-[#0d0d0d]">
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4
                  rounded-full
                  bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
                  border border-indigo-500/20
                  backdrop-blur-sm"
          >
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <span
              className="text-sm font-medium bg-clip-text text-transparent
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              Apply Opportunity
            </span>

            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Apply for The Opportunity
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Submit your application and take the next step in your career
            journey with us
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* LEFT */}
          <div className="lg:w-1/2 space-y-10">
            {/* {simpleDataList.map((item, i) => ( //right serial of data  */}
            {[...simpleDataList].reverse().map(
              (
                item,
                i //reverse of the data
              ) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl
                 bg-gradient-to-br from-[#14151c] to-[#0b0c10]
                 border 
                 p-8
                 transition-all duration-300
                 hover:-translate-y-1
              border-indigo-500/40
                 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]"
                >
                  {/* Gradient Accent Line */}
                  <span
                    className="absolute top-0 left-0 h-[1px] w-full
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>

          {/* FORM */}
          <div className="lg:w-1/2">
            <form
              onSubmit={(e) => handleSubmit(e, selectedOpp?.title)}
              className="group relative overflow-hidden rounded-2xl
               bg-gradient-to-br from-[#14151c] to-[#0b0c10]
               border
               p-8 space-y-6
               transition-all duration-300
            border-indigo-500/40
               hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]"
            >
              {/* Gradient Accent Line */}
              <span
                className="absolute top-0 left-0 h-[1px] w-full
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              />
              {/* 
     <h3 className="text-2xl font-semibold text-white mb-2">
      Apply for this Role
    </h3>
    <p className="text-gray-400 mb-6">
      Fill in your details and upload your resume
    </p> */}

              {/* INPUTS */}
              {["name", "contact", "email", "subject"].map((f) => (
                <input
                  key={f}
                  name={f}
                  value={formData[f]}
                  onChange={handleChange}
                  placeholder={f.toUpperCase()}
                  required
                  className="w-full px-4 py-4 rounded-xl
                   bg-black/40 text-white
                   border border-white/10
                   placeholder-gray-500
                   focus:outline-none
                   focus:ring-2 focus:ring-indigo-500/50
                   focus:border-indigo-500/50
                   transition"
                />
              ))}

              {/* FILE UPLOAD */}
              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl
                   bg-black/40 text-gray-400
                   border border-dashed border-white/20
                   file:hidden
                   focus:outline-none"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Upload Resume (PDF, DOC, DOCX, XLS, XLSX)
                </p>
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={5}
                placeholder="Cover Letter"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl
                 bg-black/40 text-white
                 border border-white/10
                 placeholder-gray-500
                 focus:outline-none
                 focus:ring-2 focus:ring-indigo-500/50
                 focus:border-indigo-500/50
                 transition resize-none"
              />

              {/* SUBMIT */}
              <button
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold text-white
                 bg-indigo-500
                 hover:opacity-90
                 disabled:opacity-50
                 cursor-pointer
                 transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
