import React from 'react';

const AboutCEF = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About CEF (Community Engagement Forum)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            CEF is dedicated to fostering a vibrant community where members can connect, collaborate, and grow together. We aim to create a platform that empowers individuals from diverse backgrounds to share knowledge, skills, and experiences.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            We envision a world where community engagement drives innovation, personal growth, and positive social change. Through CEF, we strive to build bridges between different sectors, disciplines, and cultures.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
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