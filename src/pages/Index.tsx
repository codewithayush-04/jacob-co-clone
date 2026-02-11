import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimepiecesSection from "@/components/TimepiecesSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import InquireSection from "@/components/InquireSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimepiecesSection />
      <PartnershipsSection />
      <InquireSection />
      <Footer />
    </main>
  );
};

export default Index;
