"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    if (data.success) {
      setSubmitted(true);
      e.target.reset();
    }
  };

  if (submitted) {
    return (
      <section className="py-24 text-center bg-gradient-to-b from-[#E6F7FF] to-white dark:from-[#001B33] dark:to-[#001F3F]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#007BFF]">
          ✅ Thank You!
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          Your message has been received. We'll contact you shortly.
        </p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#E6F7FF] to-white dark:from-[#001B33] dark:to-[#001F3F]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🧭 Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00CFFF]">
            Let’s Build Something Great
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
            Tell us your idea, and we’ll craft the perfect web solution for your
            business. We usually reply within 24 hours.
          </p>

          <ul className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
            <li>📍 Near Dwarka Mor Metro Station, Roshan Garden, Bhagwati Garden, Nawada, New Delhi, 110059</li>
            <li>📧 info@webincoder.com</li>
            <li>📧 webincoder3@gmail.com</li>
            <li>📞 +91 9310640513</li>
          </ul>
        </motion.div>

        {/* 📩 Right Side - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-slate-900/80 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <input
            type="hidden"
            name="access_key"
            value="ec78090c-f083-4ed7-b61f-20e456d0c882"
          />

          <div className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
            ></textarea>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CFFF] text-white font-semibold px-6 py-3 shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
