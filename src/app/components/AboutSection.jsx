"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-[#E6F7FF] dark:from-[#0F172A] dark:to-[#002B4D] text-slate-900 dark:text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-auto">
            <Image
              src="/about-agency.webp"
              alt="Webincoder team working on web development and marketing projects in Delhi NCR"
              width={600}
              height={450}
              priority
              className="rounded-3xl shadow-2xl object-cover border border-slate-200 dark:border-slate-700"
            />
            {/* Decorative gradient glow */}
            <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-gradient-to-tr from-[#007BFF] to-[#00CFFF] rounded-full blur-3xl opacity-40" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00CFFF]">
            About Webincoder
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
            Webincoder is a Delhi NCR–based <strong>Web Development</strong> and{" "}
            <strong>Digital Marketing</strong> agency helping startups,
            corporates, and growing brands build their online identity. We
            specialize in <strong>Next.js websites, CRM software, SEO, and
            performance marketing</strong> that deliver measurable business
            growth.
          </p>

          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
            With a client-first approach, our goal is to combine design,
            technology, and marketing strategies to boost visibility and lead
            generation for businesses across Delhi, Noida, and Gurugram.
          </p>

          <div className="flex flex-wrap gap-6 my-8">
            {[
              { num: "250+", label: "Websites Delivered" },
              { num: "100+", label: "Delhi NCR Clients" },
              { num: "2+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#007BFF]">
                  {stat.num}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            href="#contact"
            className="inline-block rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CFFF] px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Let’s Talk Growth
          </Link>
        </motion.div>
      </div>

      {/* Decorative wave bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white dark:text-slate-900"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,90.7C840,85,960,75,1080,74.7C1200,75,1320,85,1380,90.7L1440,96V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z"
        ></path>
      </svg>
    </section>
  );
}
