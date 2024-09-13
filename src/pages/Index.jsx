import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our Community</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Join our thriving community of over 1000 members. Connect, collaborate, and grow together!
      </p>
      <Link to="/contacts">
        <Button className="bg-white text-blue-600 hover:bg-blue-100 transition-colors">
          View Members
        </Button>
      </Link>
    </div>
  );
};

export default Index;