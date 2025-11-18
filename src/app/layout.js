import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Webincoder Logo",
      },
    ],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
<Script
  id="gtm-script"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=GTM-NKVDFXWD'+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NKVDFXWD');
    `,
  }}
/>
{/* End Google Tag Manager */}

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-[#E2E8F0] transition-colors duration-300`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKVDFXWD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
