import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ClientsSlider from "./components/ClientsSlider";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSlider />
      <TestimonialsSection />
      <ContactSection />
      {/* other sections will follow here */}
    </>
  );
}
