import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Upload, MapPin } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AddPetPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    location: "",
    description: "",
    personality: [],
    medical: {
      vaccinated: false,
      spayed: false,
      microchipped: false
    },
    contactName: "",
    contactEmail: "",
    contactPhone: ""
  });

  const personalityOptions = [
    "Friendly", "Energetic", "Calm", "Playful", "Loyal", "Independent", 
    "Gentle", "Protective", "Social", "Quiet", "Active", "Cuddly"
  ];

  const handlePersonalityChange = (trait: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      personality: checked 
        ? [...prev.personality, trait]
        : prev.personality.filter(p => p !== trait)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-warm-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Add a <span className="bg-hero-gradient bg-clip-text text-transparent">Pet</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help a loving pet find their forever home. Fill out the form below to list a pet for adoption.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Pet Photos */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2 text-primary" />
                Pet Photos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Drag and drop photos here, or click to browse</p>
                <p className="text-sm text-muted-foreground">Upload up to 5 photos (max 10MB each)</p>
                <Button type="button" variant="outline" className="mt-4">
                  Choose Photos
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Pet Name *</Label>
                  <Input 
                    id="name"
                    placeholder="Enter pet's name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Pet Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="rabbit">Rabbit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="breed">Breed</Label>
                  <Input 
                    id="breed"
                    placeholder="e.g., Golden Retriever"
                    value={formData.breed}
                    onChange={(e) => setFormData(prev => ({ ...prev, breed: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input 
                    id="age"
                    placeholder="e.g., 2 years"
                    value={formData.age}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input 
                    id="weight"
                    placeholder="e.g., 65 lbs"
                    value={formData.weight}
                    onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="location"
                      placeholder="City, State"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>About This Pet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description"
                  placeholder="Tell us about this pet's personality, behavior, and what makes them special..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-4">
                <Label>Personality Traits</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {personalityOptions.map((trait) => (
                    <div key={trait} className="flex items-center space-x-2">
                      <Checkbox 
                        id={trait}
                        checked={formData.personality.includes(trait)}
                        onCheckedChange={(checked) => handlePersonalityChange(trait, checked as boolean)}
                      />
                      <Label htmlFor={trait} className="text-sm">{trait}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medical Information */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="vaccinated"
                    checked={formData.medical.vaccinated}
                    onCheckedChange={(checked) => setFormData(prev => ({
                      ...prev,
                      medical: { ...prev.medical, vaccinated: checked as boolean }
                    }))}
                  />
                  <Label htmlFor="vaccinated">Vaccinated</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="spayed"
                    checked={formData.medical.spayed}
                    onCheckedChange={(checked) => setFormData(prev => ({
                      ...prev,
                      medical: { ...prev.medical, spayed: checked as boolean }
                    }))}
                  />
                  <Label htmlFor="spayed">Spayed/Neutered</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="microchipped"
                    checked={formData.medical.microchipped}
                    onCheckedChange={(checked) => setFormData(prev => ({
                      ...prev,
                      medical: { ...prev.medical, microchipped: checked as boolean }
                    }))}
                  />
                  <Label htmlFor="microchipped">Microchipped</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Your Name *</Label>
                  <Input 
                    id="contactName"
                    placeholder="Full name"
                    value={formData.contactName}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email *</Label>
                  <Input 
                    id="contactEmail"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input 
                    id="contactPhone"
                    placeholder="(555) 123-4567"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button 
              type="submit" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              List Pet for Adoption
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPetPage;