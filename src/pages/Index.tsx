import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AvailablePets from "@/components/AvailablePets";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AvailablePets />
      <Footer />
    </div>
  );
};

export default Index;
