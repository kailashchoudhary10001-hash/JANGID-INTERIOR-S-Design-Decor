'use client';

import { useEffect, useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const DEFAULT_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Residential Design',
    description: 'Transform your home into a luxurious sanctuary with our bespoke residential interior design services.',
    icon: '🏠',
  },
  {
    id: '2',
    title: 'Commercial Spaces',
    description: 'Create stunning office and retail environments that inspire productivity and captivate clients.',
    icon: '🏢',
  },
  {
    id: '3',
    title: 'Modular Kitchens',
    description: 'Modern, functional kitchens designed to perfection with premium materials and smart storage solutions.',
    icon: '🍳',
  },
  {
    id: '4',
    title: 'Custom Wardrobes',
    description: 'Tailored wardrobe solutions that maximize space and elegance in your bedroom.',
    icon: '🚪',
  },
  {
    id: '5',
    title: 'False Ceilings',
    description: 'Aesthetic false ceiling designs with integrated lighting for modern living spaces.',
    icon: '✨',
  },
  {
    id: '6',
    title: 'Renovation',
    description: 'Complete renovation services that breathe new life into existing spaces with contemporary style.',
    icon: '🔨',
  },
];

export default function Services() {
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (res.ok) {
          const data = await res.json();
          setServices(data.length > 0 ? data : DEFAULT_SERVICES);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[2px] text-luxury-600 font-semibold">
            Our Expertise
          </span>
          <h2 className="mt-2 mb-4">Comprehensive Interior Design Services</h2>
          <div className="luxury-divider mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-warm-cream rounded-lg hover:shadow-lg hover:bg-luxury-50 transition-all duration-300 border border-luxury-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="mb-3 text-xl">{service.title}</h3>
              <p className="text-slate-dark leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
