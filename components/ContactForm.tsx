'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          Thank you! We'll contact you soon.
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-luxury-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-600"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-luxury-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-600"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-luxury-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-600"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-luxury-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-600"
      >
        <option value="">Select a Service</option>
        <option value="residential">Residential Design</option>
        <option value="commercial">Commercial Spaces</option>
        <option value="modular">Modular Kitchens</option>
        <option value="wardrobes">Custom Wardrobes</option>
        <option value="ceiling">False Ceilings</option>
        <option value="renovation">Renovation</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-2 border border-luxury-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-600 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
