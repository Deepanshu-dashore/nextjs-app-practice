"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import toast from "react-hot-toast";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "../components/shared/Footer";

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
      <section ref={heroRef} className="relative h-[90dvh] overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/07/54/80/09/360_F_754800974_CXB9YRXM2ItqqUoEYouZnzctO9BTQhSv.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-20">
            <span className="text-sm tracking-[0.3em] uppercase text-white">
              Contact Us
            </span>

            <div className="h-px max-w-sm bg-linear-to-r from-white/60 to-transparent mt-3" />

            <h1 className="text-6xl md:text-7xl font-bold mt-4 text-white">
              Let’s{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
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

      {/* CONTACT FORM */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Send us a message
            </h2>
            <p className="text-gray-400">
              Fill out the form and our team will get back to you soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl
              bg-gradient-to-br from-[#14151c] to-[#0b0c10]
              border border-indigo-500/40
              p-8 space-y-6
              hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]
              transition"
          >
            <span
              className="absolute top-0 left-0 h-[1px] w-full
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />

            {["name", "email", "contact", "subject"].map((f) => (
              <input
                key={f}
                suppressHydrationWarning
                name={f}
                value={formData[f]}
                onChange={handleChange}
                placeholder={f.toUpperCase()}
                required
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
              className="w-full px-4 py-4 rounded-xl
                bg-black/40 text-white
                border border-white/10
                placeholder-gray-500
                focus:ring-2 focus:ring-indigo-500/50
                resize-none transition"
            />

            <button
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-semibold text-white
                bg-indigo-500 hover:opacity-90
                disabled:opacity-50 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
