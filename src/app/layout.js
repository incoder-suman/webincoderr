import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webincoder | Web Development & Digital Marketing Agency",
  description:
    "Webincoder builds responsive websites, CRM, and performance marketing campaigns that convert. Trusted web & SEO agency serving Delhi NCR and Pan India.",
  keywords:
    "web development, digital marketing, seo agency, webincoder, delhi web agency, nextjs websites, wordpress design, branding, web design company",
  openGraph: {
    title: "Webincoder — Build Fast. Rank Fast. Grow Faster.",
    description:
      "A modern web & digital agency delivering ROI-focused websites, SEO, and branding for Indian businesses.",
    url: "https://webincoder.com",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-[#E2E8F0] transition-colors duration-300`}
      >
        {/* Navbar */}
        <Header />

        {/* Page content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
