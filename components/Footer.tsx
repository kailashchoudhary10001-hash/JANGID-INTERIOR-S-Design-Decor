import { brandInfo } from '@/lib/design-tokens';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-warm-cream py-16">
      <div className="section-container px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white">JANGID</h4>
            <p className="text-sm leading-relaxed opacity-75">
              Transforming spaces into sanctuaries of luxury and comfort. Your vision, our expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-luxury-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-luxury-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-luxury-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-luxury-400 transition-colors">Residential</a></li>
              <li><a href="#services" className="hover:text-luxury-400 transition-colors">Commercial</a></li>
              <li><a href="#services" className="hover:text-luxury-400 transition-colors">Modular Kitchens</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li><a href={`tel:${brandInfo.phone}`} className="hover:text-luxury-400 transition-colors">{brandInfo.phone}</a></li>
              <li><a href={`mailto:${brandInfo.email}`} className="hover:text-luxury-400 transition-colors">{brandInfo.email}</a></li>
              <li className="opacity-75">{brandInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-gray pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-75">© 2025 JANGID INTERIOR'S. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href={brandInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-luxury-400 transition-colors">
              Instagram
            </a>
            <a href={brandInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-luxury-400 transition-colors">
              Facebook
            </a>
            <a href={brandInfo.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-luxury-400 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
