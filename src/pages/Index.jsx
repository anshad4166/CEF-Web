import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <img src="/logo.svg" alt="CEF Logo" className="w-32 h-32 mx-auto mb-8" />
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to Chennamangallur Entrepreneurs Forum</h1>
        <p className="text-lg md:text-xl mb-8">
          Join our thriving community of entrepreneurs. Connect, collaborate, and grow together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Diverse Expertise</h2>
            <p>Our members come from various industries and backgrounds.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Networking Opportunities</h2>
            <p>Connect with fellow entrepreneurs and expand your network.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Business Growth</h2>
            <p>Access resources and support to help your business thrive.</p>
          </div>
        </div>
        <Link to="/contacts">
          <Button className="bg-white text-primary hover:bg-blue-100 transition-colors text-lg px-8 py-3">
            Explore Our Community
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;