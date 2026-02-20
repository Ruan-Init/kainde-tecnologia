import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import ClientsMarquee from "@/components/sections/ClientsMarquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsMarquee />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
