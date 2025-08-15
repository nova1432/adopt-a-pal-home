import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, MapPin, Calendar, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedAge, setSelectedAge] = useState("all");

  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&crop=faces",
      type: "Dog",
      gender: "Male",
      description: "Friendly and energetic dog who loves playing fetch and swimming."
    },
    {
      id: 2,
      name: "Luna",
      breed: "Persian Cat",
      age: "1 year",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&crop=faces",
      type: "Cat",
      gender: "Female",
      description: "Gentle and calm cat who enjoys quiet moments and gentle petting."
    },
    {
      id: 3,
      name: "Max",
      breed: "German Shepherd",
      age: "3 years",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop&crop=faces",
      type: "Dog",
      gender: "Male",
      description: "Loyal and intelligent dog, great with kids and very protective."
    },
    {
      id: 4,
      name: "Mia",
      breed: "Labrador Mix",
      age: "4 years",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop&crop=faces",
      type: "Dog",
      gender: "Female",
      description: "Sweet and gentle dog who loves long walks and treats."
    },
    {
      id: 5,
      name: "Whiskers",
      breed: "Maine Coon",
      age: "2 years",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop&crop=faces",
      type: "Cat",
      gender: "Male",
      description: "Large and fluffy cat with a playful personality."
    },
    {
      id: 6,
      name: "Bella",
      breed: "Border Collie",
      age: "1 year",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop&crop=faces",
      type: "Dog",
      gender: "Female",
      description: "Highly intelligent and active dog who needs mental stimulation."
    }
  ];

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || pet.type.toLowerCase() === selectedType;
    const matchesAge = selectedAge === "all" || 
                      (selectedAge === "young" && parseInt(pet.age) <= 2) ||
                      (selectedAge === "adult" && parseInt(pet.age) > 2 && parseInt(pet.age) <= 6) ||
                      (selectedAge === "senior" && parseInt(pet.age) > 6);
    
    return matchesSearch && matchesType && matchesAge;
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-warm-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Your Perfect <span className="bg-hero-gradient bg-clip-text text-transparent">Companion</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our wonderful pets looking for loving homes. Each one has been cared for and is ready to become part of your family.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Pet Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="dog">Dogs</SelectItem>
                <SelectItem value="cat">Cats</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedAge} onValueChange={setSelectedAge}>
              <SelectTrigger>
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="young">Young (0-2 years)</SelectItem>
                <SelectItem value="adult">Adult (3-6 years)</SelectItem>
                <SelectItem value="senior">Senior (7+ years)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredPets.length} of {pets.length} pets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPets.map((pet) => (
              <Card key={pet.id} className="overflow-hidden shadow-card border-border hover:shadow-hero transition-all duration-300 group animate-fade-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={pet.image} 
                    alt={`${pet.name}, a ${pet.breed}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors hover-scale">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground">
                    {pet.type}
                  </Badge>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">{pet.name}</h3>
                    <p className="text-muted-foreground">{pet.breed} • {pet.gender}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{pet.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {pet.age}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {pet.location}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/pet/${pet.id}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPets.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No pets found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or check back later for new arrivals.</p>
            </div>
          )}
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default PetsPage;