import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

const SocialMediaSlider = ({ posts }) => {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CarouselContent>
        {posts.map((post, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <h3 className="text-lg font-semibold mb-2">{post.platform}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{post.content}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  View Post <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SocialMediaSlider;