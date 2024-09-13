import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <Input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <Input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <Textarea id="message" placeholder="Your Message" rows={5} required />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p className="mb-2"><strong>Email:</strong> info@cef.com</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="mb-2"><strong>Address:</strong> 123 Community St, Engagement City, CE 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;