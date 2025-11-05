"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Custom, fast, and SEO-optimized websites built with Next.js, React, and WordPress. Our web solutions focus on performance, scalability, and lead conversion.",
    icon: "🌐",
  },
  {
    title: "CRM Development",
    desc: "Smart CRM software tailored to your business workflow. Automate client management, sales tracking, and reporting using modern MERN technology.",
    icon: "⚙️",
  },
  {
    title: "Digital Marketing",
    desc: "End-to-end digital marketing — SEO, influencer marketing, content strategy, and automation to boost brand visibility and online growth.",
    icon: "🚀",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow your brand’s presence on Instagram, Facebook, and LinkedIn through engaging creatives, content calendars, and paid social ad campaigns.",
    icon: "📱",
  },
  {
    title: "Google Ads / Meta Ads",
    desc: "ROI-focused ad campaigns across Google and Meta platforms. From keyword research to ad optimization, we ensure every click drives results.",
    icon: "💰",
  },
  {
    title: "App Development",
    desc: "Build intuitive, fast, and scalable Android & iOS apps that deliver a seamless user experience — powered by React Native & Flutter frameworks.",
    icon: "📲",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00CFFF] mb-6"
        >
          Our Services
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-16">
          At Webincoder, we deliver innovative digital solutions that help
          businesses build strong online identities, attract leads, and grow
          faster through technology and marketing excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              className="group rounded-2xl p-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#007BFF] group-hover:text-[#00CFFF] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#007BFF] to-[#00CFFF]" />
    </section>
  );
}
