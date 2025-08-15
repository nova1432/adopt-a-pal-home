import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-xl">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-bold">PetAdopt</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Connecting loving pets with caring families. Every adoption creates a story of love, companionship, and new beginnings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/pets" className="block text-background/80 hover:text-primary transition-colors">
                Browse Pets
              </Link>
              <Link to="/add-pet" className="block text-background/80 hover:text-primary transition-colors">
                Add a Pet
              </Link>
              <Link to="/about" className="block text-background/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/adoption-process" className="block text-background/80 hover:text-primary transition-colors">
                Adoption Process
              </Link>
              <Link to="/success-stories" className="block text-background/80 hover:text-primary transition-colors">
                Success Stories
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-background/80 hover:text-primary transition-colors">
                Contact Us
              </Link>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Pet Care Tips
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Volunteer
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Donate
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-background/80">Get the latest pet adoption stories and updates.</p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 text-sm text-background/60">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@petadopt.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Pet Street, Animal City, AC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 PetAdopt. All rights reserved. Made with ❤️ for pets and their families.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;