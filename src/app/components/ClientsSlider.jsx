"use client";
import Image from "next/image";

const clients = [
  { name: "Disha Fertility", logo: "/clients/disha-fertility.webp", link: "https://dishafertility.com/" },
  { name: "My Travel Geeks", logo: "/clients/mytravelgeeks.webp", link: "https://mytravelgeeks.com/" },
  { name: "TossBook", logo: "/clients/tossbook.webp", link: "https://tossbook.vercel.app/" },
  { name: "MTH Cab", logo: "/clients/mthcab.webp", link: "https://bharatbizmart.com/" },
  { name: "Webincoder", logo: "/clients/webincoder.webp", link: "https://webincoder.com/" },
];

export default function ClientsSlider() {
  return (
    <section
      id="clients"
      className="relative py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00CFFF]">
          Trusted by Leading Delhi NCR Businesses
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
          Brands that chose <strong>Webincoder</strong> for digital transformation
        </p>
      </div>

      {/* Slider container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-16 animate-scroll px-10 hover:[animation-play-state:paused]">
          {clients.concat(clients).map((client, index) => (
            <a
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={140}
                height={70}
                className="h-auto w-auto max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Gradient overlay for fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      {/* Animation keyframes */}
      {/* <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style> */}
    </section>
  );
}
