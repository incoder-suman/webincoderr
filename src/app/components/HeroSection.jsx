"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#0099FF] via-[#00CFFF] to-[#00AEEF] dark:from-[#0F172A] dark:via-[#004F88] dark:to-[#007BFF] text-white"
    >
      {/* optional subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-10" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:flex lg:items-center lg:gap-16">
        {/* ---- LEFT CONTENT ---- */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Build <span className="text-yellow-300">Fast</span>. Rank{" "}
            <span className="text-yellow-300">High</span>. Grow{" "}
            <span className="text-yellow-300">Smart</span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-100/90 dark:text-slate-200 max-w-xl mx-auto lg:mx-0">
            Webincoder is a full-stack web development & digital marketing
            agency helping businesses create responsive websites, rank higher on
            Google, and scale revenue with performance-driven strategies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="rounded-xl bg-white text-[#007BFF] font-semibold px-7 py-3 shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              Get a 48-Hour Plan
            </Link>
            <Link
              href="#services"
              className="rounded-xl border border-white/80 text-white font-semibold px-7 py-3 hover:bg-white/10 transition"
            >
              View Services
            </Link>
          </div>

          {/* hidden SEO text */}
          <div className="sr-only">
            <h2>Web Development & SEO Agency in Delhi NCR</h2>
            <p>
              Webincoder provides Next.js, React, WordPress, SEO, Branding and
              Marketing services for businesses across India.
            </p>
          </div>
        </div>

        {/* ---- RIGHT IMAGE ---- */}
        <div className="mt-14 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg">
            <Image
              src="/hero-banner.webp"
              alt="Webincoder developers working on futuristic dashboards"
              width={800}
              height={500}
              priority
              className="w-full h-auto rounded-3xl shadow-2xl border border-white/30 object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/10"></div>
          </div>
        </div>
      </div>

      {/* ---- BLUE GRADIENT WAVE (FIXED + FULL WIDTH) ---- */}
      <div className="absolute bottom-0 left-0 w-screen overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[130px]"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00AEEF" />
              <stop offset="100%" stopColor="#007BFF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,64L60,53.3C120,43,240,21,360,26.7C480,32,600,64,720,85.3C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128H1440V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
