'use client';

import { brandInfo } from '@/lib/design-tokens';

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-luxury-600 to-luxury-700 text-white">
      <div className="section-container text-center">
        <h2 className="mb-4 text-white">Ready to Transform Your Space?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Let's discuss your interior design project and bring your vision to life.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href={brandInfo.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-luxury-600 hover:bg-warm-cream">
            WhatsApp Us
          </a>
          <a href={`tel:${brandInfo.phone}`} className="btn-primary border-2 border-white text-white hover:bg-white hover:text-luxury-600">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
