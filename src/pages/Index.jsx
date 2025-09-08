import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import SocialMediaSlider from '../components/SocialMediaSlider';
import teamMeeting from '../assets/team-meeting.jpg';
import startupWorkspace from '../assets/startup-workspace.jpg';
import innovationTech from '../assets/innovation-tech.jpg';
import businessPartnership from '../assets/business-partnership.jpg';

const Index = () => {
  const socialMediaPosts = [
    { platform: 'LinkedIn', content: 'Join our upcoming networking event! Connect with 100+ entrepreneurs from Kerala', link: 'https://linkedin.com/post1' },
    { platform: 'Instagram', content: 'Check out our latest workshop highlights - Innovation in Tech', link: 'https://instagram.com/post1' },
    { platform: 'LinkedIn', content: 'CEF members share their success stories - From startup to scale-up', link: 'https://linkedin.com/post2' },
    { platform: 'Instagram', content: 'Entrepreneurship tips from our mentors - Building sustainable businesses', link: 'https://instagram.com/post2' },
    { platform: 'LinkedIn', content: 'Announcing our annual startup pitch competition 2024', link: 'https://linkedin.com/post3' },
    { platform: 'Instagram', content: 'Behind the scenes at our monthly networking meetup', link: 'https://instagram.com/post3' },
  ];

  const features = [
    {
      title: 'Diverse Expertise',
      description: 'Our members come from various industries and backgrounds, bringing unique perspectives and solutions.',
      image: 'https://via.placeholder.com/400x300.png?text=Diverse+Expertise',
      stats: '500+ Members'
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with fellow entrepreneurs and expand your network through regular events and meetups.',
      image: '/networking.jpg',
      stats: '50+ Events/Year'
    },
    {
      title: 'Business Growth',
      description: 'Access resources, mentorship, and support to help your business scale and thrive in the market.',
      image: 'https://via.placeholder.com/400x300.png?text=Business+Growth',
      stats: '₹10Cr+ Revenue Generated'
    }
  ];

  const gallery = [
    { image: teamMeeting, title: 'Team Collaboration', description: 'Building stronger partnerships' },
    { image: startupWorkspace, title: 'Innovation Hub', description: 'Where ideas come to life' },
    { image: innovationTech, title: 'Technology Focus', description: 'Embracing digital transformation' },
    { image: businessPartnership, title: 'Strategic Partnerships', description: 'Growing together' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src="/Logo.png" alt="CEF Logo" className="w-24 h-24 object-contain drop-shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-accent">Chennamangallur Entrepreneurs Forum</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Join Kerala's most dynamic entrepreneurship community. Connect, collaborate, and grow with 500+ visionary entrepreneurs shaping the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/contacts">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Our Community
              </Button>
            </Link>
            <Link to="/about-cef">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Choose CEF?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a networking group - we're a catalyst for entrepreneurial success in Kerala
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-0">
                  <div className="overflow-hidden rounded-t-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Latest Social Media Updates</h2>
            <p className="text-lg text-muted-foreground">Stay connected with our community activities and achievements</p>
          </div>
          <SocialMediaSlider posts={socialMediaPosts} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Community in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the energy, collaboration, and innovation that drives our entrepreneurial ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful entrepreneurs who have accelerated their growth through CEF
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>
            </Link>
            <Link to="/newsletters">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300"
              >
                Subscribe to Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
