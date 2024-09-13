import React from 'react';
import { Button } from "@/components/ui/button";

const Newsletters = () => {
  // Mock newsletter data
  const newsletters = [
    { id: 1, title: "March 2024 Update", date: "March 1, 2024" },
    { id: 2, title: "February Tech Insights", date: "February 1, 2024" },
    { id: 3, title: "January Community Spotlight", date: "January 1, 2024" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Newsletters</h1>
      <div className="grid gap-6">
        {newsletters.map((newsletter) => (
          <div key={newsletter.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{newsletter.title}</h2>
            <p className="text-gray-600 mb-4">{newsletter.date}</p>
            <Button>Read Newsletter</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletters;