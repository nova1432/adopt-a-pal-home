import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-hero-gradient rounded-xl shadow-hero">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">PetAdopt</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Add Pet
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              View Pets
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero">
            Adopt Now
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="h-0.5 bg-foreground"></div>
              <div className="h-0.5 bg-foreground"></div>
              <div className="h-0.5 bg-foreground"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;