import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            Webincoder
          </span>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/webincoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-slate-500 hover:text-[#E1306C] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="www.linkedin.com/in/webincoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-[#0077B5] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61576246542051"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-[#0077B5] transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
