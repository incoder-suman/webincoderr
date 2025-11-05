"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll detection (safe)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Safe theme initialization (no ESLint error)
  useEffect(() => {
    // run after mount in microtask
    setTimeout(() => {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && prefersDark)) {
        setDark(true);
        document.documentElement.classList.add("dark");
      }
    }, 0);
  }, []);

  // ✅ Toggle theme
  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Webincoder Logo"
            width={38}
            height={38}
            priority
          />
          <span className="text-xl font-bold tracking-tight bg-linear-to-r from-[#007BFF] to-[#00CFFF] bg-clip-text text-transparent">
            Webincoder
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#0099CC] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-linear-to-r from-[#007BFF] to-[#00CFFF] px-5 py-2 text-white font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Get Quote
          </a>
          <button
            onClick={toggleTheme}
            className="border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-current"></span>
          <span className="w-6 h-0.5 bg-current"></span>
          <span className="w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#0099CC] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-linear-to-r from-[#007BFF] to-[#00CFFF] px-5 py-2 text-white font-semibold shadow-md hover:opacity-90"
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </a>
            <button
              onClick={toggleTheme}
              className="border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
