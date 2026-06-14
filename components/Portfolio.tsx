'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luxury Apartment Transformation',
    category: 'Residential',
    description: 'A complete makeover of a 3BHK apartment with emphasis on elegance and functionality.',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
  {
    id: '2',
    title: 'Corporate Office Redesign',
    category: 'Commercial',
    description: 'Modern office space with collaborative zones and executive areas.',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
  },
  {
    id: '3',
    title: 'Modern Kitchen Studio',
    category: 'Modular',
    description: 'Premium modular kitchen with Italian finishes and smart storage.',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
  {
    id: '4',
    title: 'Master Bedroom Suite',
    category: 'Residential',
    description: 'Serene bedroom design with custom wardrobes and ambient lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
  },
  {
    id: '5',
    title: 'Retail Showroom',
    category: 'Commercial',
    description: 'High-end retail space with strategic product displays and customer experience zones.',
    thumbnail: 'https://images.unsplash.com/photo-1487017159836-0aa959fdcc1f?w=500&q=80',
  },
  {
    id: '6',
    title: 'Heritage Home Restoration',
    category: 'Renovation',
    description: 'Restoring a heritage property while maintaining its character and adding modern comforts.',
    thumbnail: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&q=80',
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  const categories = ['All', 'Residential', 'Commercial', 'Modular', 'Renovation'];

  useEffect(() => {
    const filtered =
      selectedCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === selectedCategory);
    setFilteredProjects(filtered);
  }, [selectedCategory, projects]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const data = await res.json();
          setProjects(data.length > 0 ? data : DEFAULT_PROJECTS);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-white to-luxury-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[2px] text-luxury-600 font-semibold">
            Our Portfolio
          </span>
          <h2 className="mt-2 mb-4">Showcase of Exquisite Projects</h2>
          <div className="luxury-divider mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-luxury-600 text-white'
                  : 'bg-luxury-100 text-luxury-600 hover:bg-luxury-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white mb-2 font-display">{project.title}</h3>
                <p className="text-warm-cream text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
