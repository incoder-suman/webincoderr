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
  verification: {
    google: "7TguKs5Jx0CGeBHr4NMn5dMQXLjk4dyIKWJdmSvRe5Jk",
  },
  title: "Web & Digital Marketing Agency in Delhi | Webincoder",
  description:
    "Webincoder is a leading Web & Digital Marketing Agency in Delhi, offering website development, SEO, PPC, and branding solutions to help businesses grow online.",
  keywords:
    "web development, Digital Marketing Services, SEO agency, Webincoder, delhi web agency, nextjs websites, wordpress design, branding, Website Design Services in Delhi",

  openGraph: {
    title: "Web & Digital Marketing Agency in Delhi | Webincoder",
    description:
      "Webincoder is a leading Web & Digital Marketing Agency in Delhi, offering website development, SEO, PPC, and branding solutions to help businesses grow online.",
    url: "https://www.webincoder.com/",
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
  const organizationSchema = {
    "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WebInCoder",
  "alternateName": "WebInCoder",
  "url": "https://www.webincoder.com/",
  "logo": "https://www.webincoder.com/_next/image?url=%2Flogo.png&w=48&q=75",
  "sameAs": [
    "https://www.facebook.com/people/Webincoder/61576246542051/",
    "https://www.instagram.com/webincoder/"
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
<Script 
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
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
