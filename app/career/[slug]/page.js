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
} from "firebase/firestore";
import { useParams } from "next/navigation";
import Footer from "@/app/components/shared/Footer";
import { db } from "@/app/firebase";
import { FaGlobe, FaCode, FaNetworkWired } from "react-icons/fa";

// Accordion Section with smooth open/close
const AccordionSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-(--color-gray-500) overflow-hidden pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-2xl font-bold cursor-pointer">{isOpen ? "−" : "+"}</span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-gray-300"
      >
        <div className="pb-4">{children}</div>
      </motion.div>
    </div>
  );
};

export default function JobDetail() {
  const { slug } = useParams();
  const heroRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
const [isApplyOpen, setIsApplyOpen] = useState(false);
const [submitting, setSubmitting] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
  resume: null,
});

  /* SAFE MOUNT */
  useEffect(() => setMounted(true), []);

  /* SAFE SCROLL */
  const { scrollYProgress } = useScroll(
    mounted && heroRef.current
      ? { target: heroRef, offset: ["start start", "end start"] }
      : {}
  );
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* FETCH DATA */
  useEffect(() => {
    const fetchData = async () => {
      const jobSnap = await getDoc(doc(db, "opportunities", slug));
      if (!jobSnap.exists()) {
        setLoading(false);
        return;
      }

      const jobData = jobSnap.data();
      setJob(jobData);

      const relatedSnap = await getDocs(
        query(
          collection(db, "opportunities"),
          where("department", "==", jobData.department)
        )
      );

      setRelatedJobs(
        relatedSnap.docs
          .filter((d) => d.id !== slug)
          .map((d) => ({ id: d.id, ...d.data() }))
      );

      setLoading(false);
    };

    fetchData();
  }, [slug]);

  const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (name === "resume") {
    setFormData({ ...formData, resume: files[0] });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};
const handleApplySubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    let resumeURL = "";

    // Upload resume
    if (formData.resume) {
      const resumeRef = ref(
        storage,
        `job-resumes/${slug}/${Date.now()}-${formData.resume.name}`
      );

      await uploadBytes(resumeRef, formData.resume);
      resumeURL = await getDownloadURL(resumeRef);
    }

    // Save application data
    await addDoc(collection(db, "jobApplications"), {
      jobId: slug,
      jobTitle: job.title,
      department: job.department,
      applicantName: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      resumeURL,
      appliedAt: serverTimestamp(),
    });

    alert("Application submitted successfully 🎉");
    setIsApplyOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: null,
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  const normalizeToArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
      return value
        .split(/[\n,]+/) // split by comma or newline
        .map((v) => v.trim())
        .filter(Boolean);
    }
    return [];
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
    <div className="relative bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')",
        }}
        animate={{ y: bgY }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <div className="fixed inset-0 -z-10 bg-black/80" />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 pt-32 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 uppercase">{job.title}</h1>
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2  text-gray-300 mb-6   capitalize">
  <span>{job.department}</span>
  <span className="text-gray-300">|</span>

  <span>{job.type}</span>
  <span className="text-gray-300">|</span>

  <span>Experience: {job.experience} Years</span>
  <span className="text-gray-300">|</span>

  <span>{job.location}</span>
</div>

        {/* <button className="bg-(--color) cursor-pointer hover:bg-(--color-indigo-700) px-8 py-3 mt-4 font-semibold rounded">
          Apply for this job
        </button> */}
        <button
  onClick={() => setIsApplyOpen(true)}
  className="bg-(--color) cursor-pointer hover:bg-(--color-indigo-700) px-8 py-3 mt-4 font-semibold rounded"
>
  Apply for this job
</button>

      </motion.section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 ">
        {/* LEFT - Job Details */}
        <motion.div
          className="lg:col-span-2  space-y-6 border-t border-(--color-gray-500)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AccordionSection title="Job Description" defaultOpen>
            <p>{job.description}</p>
          </AccordionSection>

          <AccordionSection title="Project Role">
            <p>{job.role}</p>
          </AccordionSection>

          <AccordionSection title="Responsibilities">
            <ul className="list-disc pl-6 space-y-2">
              {normalizeToArray(job.responsibilities).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Qualifications">
            <ul className="list-disc pl-6 space-y-2">
              {normalizeToArray(job.qualification).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Department">
            <p>{job.department}</p>
          </AccordionSection>

          {job.additionalInfo && (
            <AccordionSection title="Additional Information">
              <p>{job.additionalInfo}</p>
            </AccordionSection>
          )}

          {/* Job Fit Section */}
      {/* Job Fit Section */}
<section className="py-20">
  <h2 className="text-3xl font-bold mb-12">
    Discover where this job fits at {job.company || "INDIDEVELOPERS"}
  </h2>

  {/* Dynamic fit items based on job role/department */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {[
      {
        icon: <FaNetworkWired className="text-white w-8 h-8 mb-4" />,
        title: `${job.department || "Industry"}: Jobs at the forefront of change`,
        desc: `Work across different sectors with solution-based thinking to reinvent how industries operate and grow.`,
        link: "#",
      },
      {
        icon: <FaCode className="text-white w-8 h-8 mb-4" />,
        title: `${job.ro || "Software"} jobs: Imagine it, build it, scale it`,
        desc: `Create impactful solutions that drive change and empower people within ${job.company || "the company"}.`,
        link: "#",
      },
      {
        icon: <FaGlobe className="text-white w-8 h-8 mb-4" />,
        title: `Technology jobs: Be the catalyst`,
        desc: `Work with cutting-edge technologies that help clients and teams innovate and make a difference.`,
        link: "#",
      },
    ].map((item, idx) => (
      <div key={idx} className="flex flex-col">
        {item.icon}
        <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
        <p className="text-gray-300 mb-6">{item.desc}</p>
        <a
          href={item.link}
          className="text-white font-medium hover:underline flex items-center gap-1"
        >
          Learn more <span className="text-xl">→</span>
        </a>
      </div>
    ))}
  </div>
</section>

        </motion.div>

        {/* RIGHT / Similar Jobs */}
        <motion.aside
          className="space-y-6 w-[400px] "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white">Similar jobs</h3>
          <div className="p-4 bg-[#1C1C1C] rounded-[6px] border border-transparent transition-all duration-200">
            {relatedJobs.map((item) => (
              <div
                key={item.id}
                className="relative p-3 mb-4 rounded  transition-colors"
              >
                <div className="absolute top-2 left-2 w-12 h-1 bg-(--color) rounded-tl-[6px]" />
                <h4 className="text-[16px] leading-[24px] font-medium text-white mb-2 mt-3 uppercase ">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-[20px] text-gray-300 mb-3 capitalize">
                  {item.department} | {item.location} | {item.type} | Experience: {item.experience || "N/A"} Years
                </p>
                  <p className="text-[14px] leading-[20px] text-gray-300 mb-3 capitalize">
                  {item.description.slice(0, 300)}...  
                </p>
                <a
                  href={`/career/${item.id}`}
                  className="text-[16px] leading-[24px] text-white font-medium flex items-end "
                >
                  See this job <span className="ml-1">→</span>

                </a>
                <div className="absolute bottom-2 right-2 left-2 w-24 h-[1px] bg-gray-400 rounded-br-[6px]" />
              </div>
            ))}
          </div>
        </motion.aside>
      </section>
{/* APPLY JOB MODAL */}
{isApplyOpen && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-[#121212] w-full max-w-xl rounded-lg p-8 relative"
      initial={{ scale: 0.9, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsApplyOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-2">
        Apply for <span className="text-(--color)">{job.title}</span>
      </h2>
      <p className="text-gray-400 mb-6">
        Fill in the details below to submit your application.
      </p>

      {/* FORM */}
      <form className="space-y-5" onSubmit={handleApplySubmit}>
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-(--color)"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-(--color)"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-(--color)"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full text-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Why should we hire you?</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-(--color)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-(--color) hover:bg-(--color-indigo-700 py-3 rounded font-semibold"
        >
          Submit Application
        </button>
      </form>
    </motion.div>
  </motion.div>
)}

      <Footer />
    </div>
  );
}
