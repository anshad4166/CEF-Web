import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExpertsSection from '../components/ExpertsSection';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to join Kerala's most dynamic entrepreneurship community? We're here to help you get started.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  required 
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email address" 
                  required 
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="What would you like to discuss?" 
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your business or how we can help you..." 
                  rows={6} 
                  required 
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-medium">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Main Office</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> info@cef.com</p>
                  <p><strong>Phone:</strong> +91 (495) 123-4567</p>
                  <p><strong>WhatsApp:</strong> +91 9876543210</p>
                  <p><strong>Address:</strong> Chennamangallur, Calicut, Kerala 673005</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Business Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary-glow transition-colors">LinkedIn</a>
                  <a href="#" className="text-primary hover:text-primary-glow transition-colors">Instagram</a>
                  <a href="#" className="text-primary hover:text-primary-glow transition-colors">Twitter</a>
                  <a href="#" className="text-primary hover:text-primary-glow transition-colors">Facebook</a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-br from-primary/5 to-primary-glow/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Quick Response Guarantee</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We respond to all inquiries within 24 hours during business days. For urgent matters, 
                call us directly or send a WhatsApp message for faster response.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Experts Section */}
      <ExpertsSection />
    </div>
  );
};

export default ContactUs;