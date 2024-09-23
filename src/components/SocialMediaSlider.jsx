import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

const SocialMediaSlider = ({ posts }) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {posts.map((post, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-between p-4 h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{post.platform}</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">{post.content}</p>
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center mt-auto"
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
