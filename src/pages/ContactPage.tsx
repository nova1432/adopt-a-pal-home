import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtext: "Mon-Fri 9AM-6PM, Sat 10AM-4PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@petadopt.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Pet Street",
      subtext: "Animal City, AC 12345"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtext: "Weekends: 10AM-4PM"
    }
  ];

  const faqs = [
    {
      question: "How do I start the adoption process?",
      answer: "Browse our available pets, find one you're interested in, and click 'Start Adoption Process' on their profile. You'll fill out an application and we'll guide you through the next steps."
    },
    {
      question: "How long does the adoption process take?",
      answer: "The process typically takes 3-7 days, depending on the specific requirements and background checks. We want to ensure the best match for both you and the pet."
    },
    {
      question: "What are the adoption fees?",
      answer: "Adoption fees vary by pet and location, typically ranging from $50-$300. This covers vaccinations, spaying/neutering, and microchipping."
    },
    {
      question: "Can I meet the pet before adopting?",
      answer: "Absolutely! We encourage meet-and-greets. You can schedule a visit through the pet's profile or contact us directly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-warm-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about adoption? Need help with our platform? We're here to help you find your perfect companion.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-hero border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adoption">Adoption Question</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="shadow-card border-border bg-destructive/5 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Emergency Pet Situations</h3>
                <p className="text-muted-foreground mb-4">
                  If you have an emergency involving a pet from our platform, please contact us immediately or reach out to your local animal control.
                </p>
                <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Emergency Hotline: (555) 911-PETS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-card border-border hover:shadow-hero transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question answered here?
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All FAQs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;