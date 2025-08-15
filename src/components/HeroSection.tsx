import { Button } from "@/components/ui/button";
import { Heart, Search, Users } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  return (
    <section className="bg-warm-gradient min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  PetAdopt
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find your perfect companion! Connect with loving pets waiting for their forever homes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero px-8 py-6 text-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Pets
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Pets Adopted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Partner Shelters</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img 
                src={heroImage} 
                alt="Happy pets waiting for adoption" 
                className="w-full h-[500px] object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Join our community</div>
                  <div className="text-sm text-muted-foreground">1,200+ members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;