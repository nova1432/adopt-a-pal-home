import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar } from "lucide-react";

const AvailablePets = () => {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&crop=faces",
      type: "Dog",
      gender: "Male"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Persian Cat",
      age: "1 year",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&crop=faces",
      type: "Cat",
      gender: "Female"
    },
    {
      id: 3,
      name: "Max",
      breed: "German Shepherd",
      age: "3 years",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop&crop=faces",
      type: "Dog",
      gender: "Male"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Available Pets</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet some of our wonderful pets looking for loving homes. Each one has a unique personality and is ready to bring joy to your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden shadow-card border-border hover:shadow-hero transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pet.image} 
                  alt={`${pet.name}, a ${pet.breed}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
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
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View All Pets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AvailablePets;