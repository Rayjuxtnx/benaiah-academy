"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Star, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export function AnimatedMissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const homeImages = PlaceHolderImages.home_page || [];
  const bgImage = homeImages.find((img) => img.id === 'mission-vision');

  return (
    <section id="mission-vision" className="relative" ref={ref}>
       {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover blur-sm"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div
            className={cn(
              'flex flex-col items-center text-center space-y-4 transition-all duration-700 ease-out transform p-6 rounded-lg bg-card/80 backdrop-blur-sm',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
              'hover:scale-105'
            )}
          >
            <Target className="h-12 w-12 text-primary" />
            <h3 className="font-headline text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide a safe, loving, and stimulating Christian environment that fosters each child's God-given potential through quality education, biblical teachings, and creative learning experiences that prepare them for life.
            </p>
          </div>
          <div
            className={cn(
              'flex flex-col items-center text-center space-y-4 transition-all duration-700 ease-out transform delay-200 p-6 rounded-lg bg-card/80 backdrop-blur-sm',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
              'hover:scale-105'
            )}
          >
            <Star className="h-12 w-12 text-primary" />
            <h3 className="font-headline text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading Christian kindergarten in Machakos County, recognized for developing well-rounded children who excel in character, learning, and service to God and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

    