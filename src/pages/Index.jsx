import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <img src="/logo.svg" alt="Community Logo" className="w-32 h-32 mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Community</h1>
        <p className="text-xl mb-8">
          Join our thriving community of over 1000 members. Connect, collaborate, and grow together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Diverse Expertise</h2>
            <p>Our members come from various backgrounds, including tech, design, business, and more.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Networking Opportunities</h2>
            <p>Connect with like-minded professionals and expand your network.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Collaborative Projects</h2>
            <p>Participate in exciting projects and learn from your peers.</p>
          </div>
        </div>
        <Link to="/contacts">
          <Button className="bg-white text-blue-600 hover:bg-blue-100 transition-colors text-lg px-8 py-3">
            Explore Our Community
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;