import { NextResponse } from "next/server";

export async function GET() {
  const reviews = [
    {
      author_name: "Rohit Mehra – Connaught Place, Delhi",
      rating: 5,
      text: "Webincoder completely revamped our website and optimized it for SEO. Within a month, our business started ranking on Google for Delhi keywords. Highly recommended!"
    },
    {
      author_name: "Priya Chauhan – Noida Sector 63",
      rating: 5,
      text: "We hired Webincoder for local SEO and Google My Business optimization. The team increased our website traffic by 3× in 45 days. Best agency in Delhi NCR!"
    },
    {
      author_name: "Amit Sharma – Dwarka, New Delhi",
      rating: 4,
      text: "Professional service and responsive support. Our ecommerce site now loads faster and shows up on page 1 for key Delhi NCR searches."
    },
    {
      author_name: "Neha Singh – Gurugram DLF Phase 2",
      rating: 5,
      text: "Webincoder built our complete CRM and handled Google Ads & Meta Ads campaigns. Superb ROI and perfect communication!"
    },
    {
      author_name: "Rakesh Verma – Laxmi Nagar, Delhi",
      rating: 5,
      text: "We struggled with poor ranking until Webincoder fixed our technical SEO. Now our business appears in Google Maps top 3 results in East Delhi."
    },
    {
      author_name: "Simran Kaur – Saket, South Delhi",
      rating: 5,
      text: "Amazing content and graphic design team. They handled everything from website redesign to social media marketing — top Delhi NCR professionals!"
    },
    {
      author_name: "Manish Gupta – Ghaziabad (Vaishali)",
      rating: 4,
      text: "I appreciate their honest consultation. Webincoder’s SEO plan actually delivers measurable growth in leads. Delhi based team you can trust."
    }
  ];
  return NextResponse.json({ reviews });
}
