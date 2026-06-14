import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {children}
    </div>
  );
}

interface CarouselContentProps {
  children: React.ReactNode;
}

export function CarouselContent({ children }: CarouselContentProps) {
  return (
    <div className="flex transition-transform duration-300">
      {children}
    </div>
  );
}

interface CarouselItemProps {
  children: React.ReactNode;
}

export function CarouselItem({ children }: CarouselItemProps) {
  return (
    <div className="min-w-full">
      {children}
    </div>
  );
}
