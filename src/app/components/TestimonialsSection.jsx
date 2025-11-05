"use client";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();

        setReviews(
          data?.reviews?.length
            ? data.reviews
            : [
                {
                  author_name: "Priya Chauhan",
                  rating: 5,
                  text: "We hired Webincoder for local SEO and Google My Business optimization. The team increased our website traffic by 3× in 45 days. Best agency in Delhi NCR!",
                  location: "Noida Sector 63",
                },
                {
                  author_name: "Ravi Sharma",
                  rating: 5,
                  text: "They built our entire website in record time with perfect responsiveness. Highly professional and supportive team.",
                  location: "Gurugram",
                },
                {
                  author_name: "Neha Patel",
                  rating: 5,
                  text: "Our brand’s visibility improved massively through their influencer and performance marketing strategies.",
                  location: "Delhi",
                },
                {
                  author_name: "Amit Singh",
                  rating: 4,
                  text: "Timely delivery and excellent UI/UX design. The CRM they built made our internal workflow smooth.",
                  location: "Faridabad",
                },
                {
                  author_name: "Rahul Mehta",
                  rating: 5,
                  text: "Google Ads campaigns by Webincoder gave us 5× ROI within the first month. Highly recommended!",
                  location: "Ghaziabad",
                },
              ]
        );
      } catch (err) {
        console.error("❌ Error fetching reviews:", err);
      }
    };
    loadReviews();
  }, []);

  if (!reviews.length) return null;

  // Duplicate list for infinite effect
  const repeated = [...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-[#E6F7FF] 
                 dark:from-[#0F172A] dark:to-[#002B4D] overflow-hidden"
    >
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00CFFF]">
          What Our Clients Say
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm md:text-base">
          Real Experiences from Our Delhi NCR Clients
        </p>
      </div>

      {/* ✅ Working Auto Scroll */}
      <div className="overflow-hidden relative">
        <div
          className="flex flex-nowrap gap-8 px-8 animate-testimonialScroll hover:[animation-play-state:paused]"
          style={{
            width: `${repeated.length * 280}px`, // guarantee long horizontal strip
          }}
        >
          {repeated.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] lg:w-[360px]
                         bg-white/90 dark:bg-slate-900/80 backdrop-blur-md
                         border border-slate-200 dark:border-slate-700 rounded-3xl
                         shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.15)]
                         p-6 transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="flex mb-3">
                {[...Array(r.rating || 5)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-[15px] italic leading-relaxed mb-5">
                “{r.text}”
              </p>

              <div>
                <h4 className="text-[#007BFF] font-semibold text-sm md:text-base">
                  {r.author_name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {r.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0F172A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0F172A] to-transparent" />
    </section>
  );
}
