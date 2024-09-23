import React from 'react';

const AboutCEF = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About CEF (Chennamangallur Entrepreneurs Forum)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-primary rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="mb-4">
            CEF - Chennamangallur Entrepreneurship Forum is an entrepreneurship community established in Chennamangallur, Calicut, Kerala. Our mission is to promote entrepreneurship and enlighten the youth about opportunities beyond their immediate network, fostering innovation and growth in our community.
          </p>
        </div>
        <div className="border-2 border-primary rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
          <p className="mb-4">
            We envision a world where community engagement drives innovation, personal growth, and positive social change. Through CEF, we strive to build bridges between different sectors, disciplines, and cultures, creating a thriving ecosystem for entrepreneurs.
          </p>
        </div>
      </div>
      <div className="mt-8 border-2 border-primary rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-primary">What We Do</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Organize networking events and workshops</li>
          <li>Facilitate collaborative projects among members</li>
          <li>Provide resources for professional development</li>
          <li>Foster mentorship opportunities</li>
          <li>Promote knowledge sharing and best practices</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCEF;
