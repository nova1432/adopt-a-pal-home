import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowLeft, MapPin, Calendar, User, Shield, Activity } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PetDetailPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // In a real app, this would come from an API
  const pet = {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    location: "San Francisco, CA",
    images: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=800&h=600&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=800&h=600&fit=crop&crop=faces"
    ],
    type: "Dog",
    gender: "Male",
    weight: "65 lbs",
    description: "Buddy is a wonderful Golden Retriever who loves people and other dogs. He's house-trained, knows basic commands, and has the sweetest temperament. Buddy would thrive in an active household where he can get plenty of exercise and attention.",
    personality: ["Friendly", "Energetic", "Loyal", "Playful"],
    medical: {
      vaccinated: true,
      spayed: true,
      microchipped: true
    },
    requirements: ["Fenced yard preferred", "Good with kids", "Good with other dogs", "Needs daily exercise"],
    story: "Buddy came to us when his previous family had to move and couldn't take him along. Despite this change, he's remained optimistic and loving. He's been with a foster family for the past month and has shown nothing but love and gratitude."
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/pets" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all pets
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img 
                src={pet.images[currentImageIndex]} 
                alt={`${pet.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <button className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors hover-scale">
                <Heart className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {pet.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg transition-all ${
                    currentImageIndex === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${pet.name} - Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Pet Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-foreground">{pet.name}</h1>
                <Badge className="bg-primary text-primary-foreground">{pet.type}</Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-6">{pet.breed} • {pet.gender}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <span>{pet.age}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <User className="h-5 w-5 mr-3 text-primary" />
                  <span>{pet.weight}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span>{pet.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Shield className="h-5 w-5 mr-3 text-primary" />
                  <span>Health Certified</span>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">{pet.description}</p>
            </div>

            {/* Personality Traits */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Personality Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {pet.personality.map((trait) => (
                    <Badge key={trait} variant="secondary">{trait}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medical Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Medical Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Vaccinated</span>
                    <span className={pet.medical.vaccinated ? "text-green-600" : "text-red-600"}>
                      {pet.medical.vaccinated ? "✓ Yes" : "✗ No"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Spayed/Neutered</span>
                    <span className={pet.medical.spayed ? "text-green-600" : "text-red-600"}>
                      {pet.medical.spayed ? "✓ Yes" : "✗ No"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Microchipped</span>
                    <span className={pet.medical.microchipped ? "text-green-600" : "text-red-600"}>
                      {pet.medical.microchipped ? "✓ Yes" : "✗ No"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Adoption Requirements</h3>
                <ul className="space-y-2">
                  {pet.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                Start Adoption Process
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Schedule Visit
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Ask Question
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pet's Story */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{pet.name}'s Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{pet.story}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );

export default PetDetailPage;