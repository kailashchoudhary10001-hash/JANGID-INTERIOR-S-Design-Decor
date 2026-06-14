'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { brandInfo } from '@/lib/design-tokens';

export default function Contact() {
  return (
    <div className="section-padding bg-gradient-to-b from-warm-cream to-luxury-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4 text-center">Get In Touch</h1>
          <p className="text-lg text-center text-slate-gray mb-12">
            Ready to transform your space? Reach out and let's discuss your project.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-dark uppercase tracking-wide">Phone</p>
                  <a href={`tel:${brandInfo.phone}`} className="text-lg text-luxury-600 hover:text-luxury-700 font-semibold">
                    {brandInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-dark uppercase tracking-wide">Email</p>
                  <a href={`mailto:${brandInfo.email}`} className="text-lg text-luxury-600 hover:text-luxury-700 font-semibold">
                    {brandInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-dark uppercase tracking-wide">Location</p>
                  <p className="text-lg font-semibold">{brandInfo.address}</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a 
                  href={brandInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6">Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
