import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AvailablePets from "@/components/AvailablePets";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AvailablePets />
    </div>
  );
};

export default Index;
