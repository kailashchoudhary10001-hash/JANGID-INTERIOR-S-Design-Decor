'use client';

import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './Carousel';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Homeowner, South Delhi',
    content: 'JANGID transformed our home into a luxury sanctuary. The attention to detail and craftsmanship is unmatched. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rajesh Patel',
    role: 'Business Owner, Gurgaon',
    content: 'Our office redesign by JANGID exceeded expectations. The team was professional, punctual, and delivered exceptional results.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anjali Verma',
    role: 'Apartment Owner, Central Delhi',
    content: 'From concept to execution, JANGID was fantastic. They understood my vision and brought it to life beautifully. Thank you!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        if (res.ok) {
          const data = await res.json();
          setTestimonials(data.length > 0 ? data : DEFAULT_TESTIMONIALS);
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="section-padding bg-luxury-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[2px] text-luxury-600 font-semibold">
            Client Reviews
          </span>
          <h2 className="mt-2 mb-4">What Our Clients Say</h2>
          <div className="luxury-divider mx-auto"></div>
        </div>

        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-dark">{testimonial.name}</h4>
                      <p className="text-sm text-slate-dark opacity-70">{testimonial.role}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-warm-gold">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-gray leading-relaxed italic">"{testimonial.content}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
