
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import {
//   doc,
//   getDoc,
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { useParams, useRouter } from "next/navigation";
// import Footer from "@/app/components/shared/Footer";
// import { db, storage } from "@/app/firebase";
// import { toast } from "react-hot-toast";

// export default function JobDetail() {
//   const { slug } = useParams();
//   const router = useRouter();

//   /* ---------------- STATE ---------------- */
//   const [job, setJob] = useState(null);
//   const [sections, setSections] = useState([]);
//   const [simpleDataList, setSimpleDataList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   /* ---------------- REFS ---------------- */
//   const heroRef = useRef(null);
//   const formRef = useRef(null);
//   const fileInputRef = useRef(null);

//   /* ---------------- FORM DATA ---------------- */
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     contact: "",
//     resume: null,
//   });

//   /* ---------------- SAFE MOTION SCROLL ---------------- */
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const { scrollYProgress } = useScroll(
//     mounted && heroRef.current
//       ? {
//           target: heroRef,
//           offset: ["start start", "end start"],
//         }
//       : {}
//   );

//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   /* ---------------- FETCH SIMPLE DATA ---------------- */
//   useEffect(() => {
//     const fetchSimpleData = async () => {
//       const snap = await getDocs(collection(db, "simpleData"));
//       setSimpleDataList(
//         snap.docs.map((d) => ({ id: d.id, ...d.data() }))
//       );
//     };
//     fetchSimpleData();
//   }, []);

//   /* ---------------- FETCH JOB ---------------- */
//   useEffect(() => {
//     if (!slug) return;

//     const fetchJob = async () => {
//       const snap = await getDoc(doc(db, "opportunities", slug));
//       if (snap.exists()) {
//         setJob({ id: snap.id, ...snap.data() });
//       }
//       setLoading(false);
//     };

//     fetchJob();
//   }, [slug]);

//   /* ---------------- FETCH SECTIONS ---------------- */
//   useEffect(() => {
//     if (!slug) return;

//     const fetchSections = async () => {
//       const q = query(
//         collection(db, "careerSections"),
//         where("opportunityId", "==", slug)
//       );
//       const snap = await getDocs(q);
//       setSections(snap.docs.map((d) => d.data()));
//     };

//     fetchSections();
//   }, [slug]);

//   /* ---------------- FORM HANDLERS ---------------- */
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       let resumeUrl = "";

//       if (formData.resume) {
//         const storageRef = ref(
//           storage,
//           `resumes/${Date.now()}-${formData.resume.name}`
//         );
//         const snap = await uploadBytes(storageRef, formData.resume);
//         resumeUrl = await getDownloadURL(snap.ref);
//       }

//       await addDoc(collection(db, "applications"), {
//         ...formData,
//         resume: resumeUrl,
//         opportunity: job?.title,
//         createdAt: serverTimestamp(),
//       });

//       toast.success("Application submitted successfully!");

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//         contact: "",
//         resume: null,
//       });

//       if (fileInputRef.current) fileInputRef.current.value = null;
//     } catch (err) {
//       console.error(err);
//       toast.error("Submission failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   /* ---------------- LOADING STATES ---------------- */
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         Loading job details...
//       </div>
//     );
//   }

//   if (!job) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         Job not found
//       </div>
//     );
//   }

//   return (
//     <div className="relative text-white overflow-hidden">
//       {/* BACKGROUND */}
//       <motion.div

//         className="fixed inset-0 -z-20 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
//         }}
//       />
//       <div className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-sm" />

//       {/* CONTENT */}
//       <div className="relative z-10">
//         {/* HERO */}
//         <section
//           ref={heroRef}
//           className="h-[70vh] w-full flex items-center mt-20 px-6"
//         >
//           <div className="mx-24 ">
//             <h1 className="text-4xl md:text-5xl font-bold uppercase">
//               {job.title}
//             </h1>

//             <div className="flex justify-start gap-4 mt-6 text-gray-400 text-sm">
//               <span>{job.department}</span>
//               <span>•</span>
//               <span>{job.location}</span>
//               <span>•</span>
//               <span>{job.type}</span>
//             </div>

//             <button
//               onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
//               className="mt-12 px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition cursor-pointer"
//             >
//               Apply Now
//             </button>
//           </div>
//         </section>

//         {/* DETAILS */}
//         <section className="py-28">
//           <div className="max-w-4xl mx-auto px-6 space-y-16">
//             {sections.map((sec, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-2xl font-semibold mb-4">
//                   {sec.title}
//                 </h2>
//                 <p className="text-gray-300 whitespace-pre-line">
//                   {sec.content}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* APPLY FORM */}
//         <section ref={formRef} className="py-20 bg-[#0d0d0d]">
//            < h1 className="text-5xl font-bold text-center mb-12 capitalize">
//               Apply for {job.title}
//             </h1>
//           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
//             {/* LEFT */}
//             <div className="space-y-6">
//               {[...simpleDataList].reverse().map((item) => (
//                 <div
//                   key={item.id}
//                   className="p-6 rounded-2xl bg-[#111] border border-indigo-500/20"
//                 >
//                   <h3 className="text-xl font-semibold mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400">{item.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* FORM */}
//             <form
//               onSubmit={handleSubmit}
//               className="p-8 rounded-2xl bg-[#111] border border-indigo-500/20 space-y-5"
//             >
//               {["name", "contact", "email", "subject"].map((f) => (
//                 <input
//                   key={f}
//                   name={f}
//                   value={formData[f]}
//                   onChange={handleChange}
//                   placeholder={f.toUpperCase()}
//                   required
//                   className="w-full px-4 py-3 rounded-xl bg-black text-white border border-white/10"
//                 />
//               ))}

//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 name="resume"
//                 onChange={handleChange}
//                 className="w-full text-gray-400"
//               />

//               <textarea
//                 name="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Cover Letter"
//                 className="w-full px-4 py-3 rounded-xl bg-black text-white border border-white/10"
//               />

//               <button
//                 disabled={isSubmitting}
//                 className="w-full py-4 bg-indigo-500 rounded-xl font-semibold disabled:opacity-50"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Application"}
//               </button>
//             </form>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useParams } from "next/navigation";
import Footer from "@/app/components/shared/Footer";
import { db, storage } from "@/app/firebase";
import { toast } from "react-hot-toast";

export default function JobDetail() {
  const { slug } = useParams();

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const [job, setJob] = useState(null);
  const [sections, setSections] = useState([]);
  const [simpleDataList, setSimpleDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact: "",
    resume: null,
  });

  /* ---------------- SAFE MOUNT ---------------- */
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll(
    mounted && heroRef.current
      ? {
          target: heroRef,
          offset: ["start start", "end start"],
        }
      : {}
  );

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const fetchAll = async () => {
      const jobSnap = await getDoc(doc(db, "opportunities", slug));
      if (jobSnap.exists()) setJob(jobSnap.data());

      const secSnap = await getDocs(
        query(
          collection(db, "careerSections"),
          where("opportunityId", "==", slug)
        )
      );
      setSections(secSnap.docs.map((d) => d.data()));

      const simpleSnap = await getDocs(collection(db, "simpleData"));
      setSimpleDataList(simpleSnap.docs.map((d) => d.data()));

      setLoading(false);
    };
    fetchAll();
  }, [slug]);

  /* ---------------- FORM ---------------- */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((p) => ({ ...p, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let resumeUrl = "";
      if (formData.resume) {
        const storageRef = ref(
          storage,
          `resumes/${Date.now()}-${formData.resume.name}`
        );
        const snap = await uploadBytes(storageRef, formData.resume);
        resumeUrl = await getDownloadURL(snap.ref);
      }

      await addDoc(collection(db, "applications"), {
        ...formData,
        resume: resumeUrl,
        opportunity: job?.title,
        createdAt: serverTimestamp(),
      });

      toast.success("Application submitted successfully");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        contact: "",
        resume: null,
      });
      fileInputRef.current.value = null;
    } catch {
      toast.error("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading job details...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Job not found
      </div>
    );
  }

  return (
    <div className="relative text-white overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          y: bgY,
          backgroundImage:
            "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black" />

{/* HERO */}
<section
  ref={heroRef}
  className="h-[95vh] max-w-4xl flex items-center justify-start px-6"
>
  <div className="max-w-6xl mx-auto">
    
    {/* Title */}
    <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide">
      {job.title}
    </h1>

    {/* Decorative Line */}
    <div className="mt-4 mb-6 flex items-center gap-3">
      <span className="h-[1px] w-[580px] bg-white/30 rounded-full" />
  
    </div>

    {/* Meta Info */}
    <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-12 capitalize">
      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
        {job.department || "Engineering"}
      </span>

      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
        {job.location || "Remote"}
      </span>

      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
        {job.type || "Internship"}
      </span>
    </div>

    {/* CTA */}
    <button
      onClick={() =>
        formRef.current?.scrollIntoView({ behavior: "smooth" })
      }
      className="
        px-12 py-4 rounded-full font-semibold
        bg-white text-black
        hover:bg-gray-200
        transition-all duration-300
        shadow-lg hover:shadow-xl
      "
    >
      Apply Now
    </button>
  </div>
</section>


   {/* DETAILS */}
<section className="py-28 bg-black/70">
  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-14">

    {/* LEFT : JOB DESCRIPTION */}
    <div className="flex-1 space-y-16  ">
      {(sections.length
        ? sections
        : [
            {
              title: "About This Role",
              content:
                "This role offers hands-on experience working on real-world projects, collaborating with experienced professionals, and gaining industry-level exposure.",
            },
          ]
      ).map((sec, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10  min-h-[380px]"
        >
          <h2 className="text-2xl font-semibold mb-4">
            {sec.title}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {sec.content ||
              "Detailed responsibilities and expectations will be discussed during the interview process."}
          </p>
        </motion.div>
      ))}
    </div>

    {/* RIGHT : JOB DETAILS CARD */}
    <div className="w-full lg:w-[360px]">
      <div className="sticky top-28 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 space-y-6">

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-3">
          Job Details
        </h3>

        {/* DETAILS LIST */}
        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex justify-between">
            <span className="text-gray-400">Department</span>
            <span>{job.department || "Engineering"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Location</span>
            <span>{job.location || "Remote"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Job Type</span>
            <span>{job.type || "Internship"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Experience</span>
            <span>{job.experience || "0–1 Years"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Openings</span>
            <span>{job.openings || "Multiple"}</span>
          </div>
        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
</section>


      {/* APPLY */}
      <section ref={formRef} className="py-24 bg-black">
        <h1 className="text-5xl font-bold text-center mb-16">
          Apply for {job.title}
        </h1>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {(simpleDataList.length
              ? simpleDataList
              : [
                  {
                    title: "Why Join Us?",
                    description:
                      "Gain hands-on experience, mentorship, and growth opportunities in a collaborative environment.",
                  },
                ]
            ).map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-indigo-500/20"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur border border-indigo-500/20 space-y-5"
          >
            {["name", "contact", "email", "subject"].map((f) => (
              <input
                key={f}
                name={f}
                value={formData[f]}
                onChange={handleChange}
                placeholder={f.toUpperCase()}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10"
              />
            ))}

        <input
                type="file"
                ref={fileInputRef}
                name="resume"
                onChange={handleChange}
                className="w-full text-gray-400  px-4 py-3 rounded-xl bg-black/50 border border-white/10"
              />


            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Cover Letter"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10"
            />

            <button
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
