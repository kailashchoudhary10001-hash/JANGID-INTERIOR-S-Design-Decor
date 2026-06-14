'use client';

import Link from 'next/link';
import { useState } from 'react';
import { brandInfo } from '@/lib/design-tokens';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="section-container flex items-center justify-between h-20 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-luxury-600 to-warm-gold rounded-lg flex items-center justify-center">
            <span className="text-white font-display text-lg font-bold">J</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden md:block">
            JANGID
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-gray hover:text-luxury-600 transition-colors text-sm">
            Home
          </Link>
          <Link href="/about" className="text-slate-gray hover:text-luxury-600 transition-colors text-sm">
            About
          </Link>
          <Link href="/#services" className="text-slate-gray hover:text-luxury-600 transition-colors text-sm">
            Services
          </Link>
          <Link href="/#portfolio" className="text-slate-gray hover:text-luxury-600 transition-colors text-sm">
            Portfolio
          </Link>
          <Link href="/contact" className="text-slate-gray hover:text-luxury-600 transition-colors text-sm">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${brandInfo.phone}`}
            className="btn-primary text-sm"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-luxury-100">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-slate-gray hover:text-luxury-600">
              Home
            </Link>
            <Link href="/about" className="text-slate-gray hover:text-luxury-600">
              About
            </Link>
            <Link href="/#services" className="text-slate-gray hover:text-luxury-600">
              Services
            </Link>
            <Link href="/#portfolio" className="text-slate-gray hover:text-luxury-600">
              Portfolio
            </Link>
            <Link href="/contact" className="text-slate-gray hover:text-luxury-600">
              Contact
            </Link>
            <a href={`tel:${brandInfo.phone}`} className="btn-primary text-center">
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
