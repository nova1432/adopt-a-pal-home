import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const stats = [
    { icon: Heart, label: "Pets Adopted", value: "2,500+" },
    { icon: Users, label: "Happy Families", value: "2,300+" },
    { icon: Award, label: "Partner Shelters", value: "45+" },
    { icon: Calendar, label: "Years of Service", value: "8+" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces",
      bio: "Animal lover with 15+ years in animal welfare and rescue operations."
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      bio: "Former veterinarian dedicated to improving pet adoption processes."
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
      bio: "Passionate about connecting pets with loving families nationwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-warm-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="bg-hero-gradient bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At PetAdopt, we believe every pet deserves a loving home and every family deserves the joy of pet companionship. 
            We're dedicated to making the adoption process simple, transparent, and successful for everyone involved.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground">How PetAdopt came to be</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  PetAdopt was founded in 2016 when our founder, Sarah Johnson, experienced firsthand how difficult it could be to find the right pet to adopt. After visiting multiple shelters and navigating complex processes, she realized there had to be a better way.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  What started as a simple website to help local shelters showcase their pets has grown into a nationwide platform connecting thousands of pets with loving families every year. We've streamlined the adoption process while ensuring the best outcomes for both pets and their new families.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Today, we partner with shelters, rescue organizations, and individual foster families across the country to give every pet the best chance at finding their forever home.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop" 
                  alt="Happy pets and families"
                  className="rounded-2xl shadow-hero w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Compassion First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make is guided by what's best for the animals in our care and the families who will love them.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Community Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of community and work together with shelters, volunteers, and families to achieve our mission.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to providing the best possible experience for everyone involved in the adoption process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The people behind PetAdopt</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
                <CardContent className="p-8 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're looking to adopt, volunteer, or partner with us, there are many ways to help pets find loving homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Browse Pets
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;