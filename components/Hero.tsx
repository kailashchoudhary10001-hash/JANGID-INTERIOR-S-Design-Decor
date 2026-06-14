'use client';

import { useState, useEffect } from 'react';
import ThreeDHero from './ThreeDHero';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-cream via-luxury-50 to-warm-beige">
      {isClient && <ThreeDHero title="JANGID INTERIOR'S" subtitle="Interiors that whisper elegance" />}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-[2px] text-luxury-600 font-semibold">
              Welcome to Elegance
            </span>
          </div>
          <h1 className="mb-4 text-white drop-shadow-lg">
            Interiors that Whisper Elegance
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md mb-8 max-w-2xl mx-auto font-serif">
            Transforming spaces into sanctuaries of luxury and comfort. Bespoke interior design that tells your story.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="/about" className="btn-secondary">
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
