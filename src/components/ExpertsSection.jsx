import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, Phone } from 'lucide-react';

const ExpertsSection = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      title: "Business Strategy Consultant",
      specialization: "Startup Strategy & Scaling",
      experience: "15+ years",
      expertise: ["Business Planning", "Market Analysis", "Investment Strategy"],
      contact: {
        email: "rajesh.kumar@cef.com",
        phone: "+91 9876543210"
      },
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      availability: "Available"
    },
    {
      id: 2,
      name: "Priya Nair",
      title: "Digital Marketing Expert",
      specialization: "Growth Marketing & Branding",
      experience: "12+ years",
      expertise: ["Digital Strategy", "Social Media", "Content Marketing"],
      contact: {
        email: "priya.nair@cef.com",
        phone: "+91 9876543211"
      },
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      availability: "Available"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      title: "Financial Advisor",
      specialization: "Investment & Financial Planning",
      experience: "18+ years",
      expertise: ["Financial Planning", "Investment Advisory", "Risk Management"],
      contact: {
        email: "mohammed.ali@cef.com",
        phone: "+91 9876543212"
      },
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      availability: "Busy"
    },
    {
      id: 4,
      name: "Anitha Menon",
      title: "Technology Consultant",
      specialization: "Digital Transformation",
      experience: "14+ years",
      expertise: ["Tech Strategy", "AI/ML Solutions", "Digital Innovation"],
      contact: {
        email: "anitha.menon@cef.com",
        phone: "+91 9876543213"
      },
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      availability: "Available"
    }
  ];

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Our Expert Advisory Panel</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get personalized guidance from industry veterans and successful entrepreneurs who have been there, done that.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experts.map((expert) => (
          <Card key={expert.id} className="hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-start space-x-4">
                <img 
                  src={expert.avatar} 
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-foreground">{expert.name}</CardTitle>
                    <Badge 
                      variant={expert.availability === 'Available' ? 'default' : 'secondary'}
                      className={expert.availability === 'Available' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                    >
                      {expert.availability}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium">{expert.title}</p>
                  <p className="text-sm text-muted-foreground">{expert.specialization}</p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">{expert.experience}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Contact Information:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <a href={`mailto:${expert.contact.email}`} className="text-primary hover:underline">
                        {expert.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a href={`tel:${expert.contact.phone}`} className="text-primary hover:underline">
                        {expert.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border/50">
        <h3 className="text-lg font-semibold mb-2 text-foreground">How to Connect with Our Experts</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Contact experts directly using the provided email or phone numbers</li>
          <li>• Mention you're a CEF member for priority response</li>
          <li>• Initial consultations are complimentary for CEF community members</li>
          <li>• For urgent matters, call during business hours (9 AM - 6 PM IST)</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpertsSection;