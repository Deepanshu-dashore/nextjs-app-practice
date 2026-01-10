"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import toast from "react-hot-toast";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "../components/shared/Footer";
import { FiPhoneCall, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


export default function ContactPage() {
  const heroRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  /* ---------------- SCROLL EFFECT ---------------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ========================= UI ========================= */
  return (
    <main>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[70dvh] overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-150 rotate-6"
            style={{
              backgroundAttachment: "fixed",
              backgroundImage:
                "url('https://www.shutterstock.com/image-vector/abstract-pink-neon-light-wave-260nw-2490596587.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-20">
            <span className="text-sm tracking-[0.3em] uppercase text-white">
              Contact Us
            </span>

            <div className="h-px max-w-sm bg-linear-to-r from-white/60 to-transparent mt-3" />

            <h1 className="text-6xl md:text-7xl font-bold mt-4 text-white">
              Let’s{" "}
              <span className="bg-gradient-to- from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Talk
              </span>
            </h1>

            <p className="text-xl text-gray-300 mt-6 max-w-3xl">
              Have a project in mind or just want to say hello?  
              We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>
{/* CONTACT SECTION */}
<section className="py-24 bg-[#0d0d0d]">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-400">
        We’d love to hear from you. Reach out using the form or contact details.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* LEFT — REFERENCE SECTION */}
<div className="space-y-10">

  {/* CONTACT INFO */}
  {[
    {
      title: "Phone",
      value: "+91 8435840622",
      icon: <FiPhoneCall size={22} />,
    },
    {
      title: "Email",
      value: "info@indidevelopers.com",
      icon: <FiMail size={22} />,
    },
    {
      title: "Address",
      value: "11 Vijay Nagar, Indore, India",
      icon: <FiMapPin size={22} />,
    },
    {
      title: "Business Hours",
      value: (
        <>
          Monday – Friday: 9:00 AM – 6:00 PM <br />
          Saturday: 10:00 AM – 4:00 PM
        </>
      ),
      icon: <FiClock size={22} />,
    },
  ].map((item, i) => (
    <div
      key={i}
      className="rounded-2xl p-6
        bg-gradient-to- from-[#14151c] to-[#0b0c10]
        border border-indigo-500/30
        hover:shadow-[0_0_35px_-10px_rgba(99,102,241,0.35)]
        transition"
    >
      <div className="flex items-start gap-4">
        <div className="text-indigo-400 mt-1">
          {item.icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">
            {item.title}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.value}
          </p>
        </div>
      </div>
    </div>
  ))}

  {/* CONNECT WITH US */}
  <div>
    <h3 className="text-xl font-semibold text-white mb-6">
      Connect With Us
    </h3>

    <div className="flex items-center gap-4">
      {[
        { Icon: FaFacebookF, color: "bg-[#1877F2]" },
        { Icon: FaTwitter, color: "bg-[#1877F2]" },
        { Icon: FaInstagram, color: "bg-[#1877F2]" },
        { Icon: FaLinkedinIn, color: "bg-[#1877F2]" },
        { Icon: FaWhatsapp, color: "bg-[#1877F2]" },
      ].map(({ Icon, color }, i) => (
        <a
          key={i}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full ${color}
            flex items-center justify-center
            text-white text-lg
            hover:scale-110
            hover:shadow-[0_0_20px_rgba(255,255,255,0.45)]
            transition`}
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>

</div>


{/* RIGHT — CONTACT FORM */}
<form
  onSubmit={handleSubmit}
  suppressHydrationWarning
  className="relative overflow-hidden rounded-2xl
    bg-gradient-to-from-[#14151c] to-[#0b0c10]
    border border-indigo-500/40
    p-8 space-y-6
    hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]
    transition"
>
  {["name", "email", "contact", "subject"].map((f) => (
    <input
      key={f}
      suppressHydrationWarning
      name={f}
      value={formData[f]}
      onChange={handleChange}
      placeholder={f.toUpperCase()}
      required
      autoComplete="off"
      className="w-full px-4 py-4 rounded-xl
        bg-black/40 text-white
        border border-white/10
        placeholder-gray-500
        focus:ring-2 focus:ring-indigo-500/50
        transition"
    />
  ))}

  <textarea
    suppressHydrationWarning
    name="message"
    rows={5}
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    required
    autoComplete="off"
    className="w-full px-4 py-4 rounded-xl
      bg-black/40 text-white
      border border-white/10
      placeholder-gray-500
      focus:ring-2 focus:ring-indigo-500/50
      resize-none transition"
  />

  <button
    suppressHydrationWarning
    type="submit"
    disabled={isSubmitting}
    className="w-full py-4 rounded-xl font-semibold text-white
      bg-indigo-500 hover:opacity-90
      disabled:opacity-50 transition"
  >
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
</form>


    </div>
  </div>
</section>


      <Footer />
    </main>
  );
}
