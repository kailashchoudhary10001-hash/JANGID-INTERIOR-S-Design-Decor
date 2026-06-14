'use client';

import { useEffect, useState } from 'react';
import { prisma } from '@/lib/prisma';

interface AboutData {
  title: string;
  subtitle: string;
  story: string;
  mission: string;
  vision: string;
  image: string;
}

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => {
        setAbout(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="section-padding">Loading...</div>;

  return (
    <div className="section-padding">
      <div className="section-container">
        <h1 className="mb-4">{about?.title || 'About JANGID INTERIOR\'S'}</h1>
        <p className="text-lg text-slate-dark mb-8">{about?.subtitle}</p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="text-base leading-relaxed mb-4">{about?.story}</p>
          </div>
          {about?.image && (
            <div className="relative h-96 bg-luxury-100 rounded-lg overflow-hidden">
              <img 
                src={about.image} 
                alt="Our studio"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-4">Our Mission</h3>
            <p className="text-base leading-relaxed">{about?.mission}</p>
          </div>
          <div>
            <h3 className="mb-4">Our Vision</h3>
            <p className="text-base leading-relaxed">{about?.vision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
