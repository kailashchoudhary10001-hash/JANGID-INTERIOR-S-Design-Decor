'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch('/api/admin/inquiries');
        if (res.ok) {
          const data = await res.json();
          setInquiries(data);
        } else {
          router.push('/admin');
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  if (loading) return <div className="section-padding">Loading...</div>;

  return (
    <div className="min-h-screen bg-warm-beige p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn-secondary">
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-luxury-600 text-white">
            <h2>Inquiries</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-luxury-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Service</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry: any) => (
                  <tr key={inquiry.id} className="border-t hover:bg-warm-cream">
                    <td className="px-6 py-4">{inquiry.name}</td>
                    <td className="px-6 py-4">{inquiry.email}</td>
                    <td className="px-6 py-4">{inquiry.phone}</td>
                    <td className="px-6 py-4">{inquiry.service || 'N/A'}</td>
                    <td className="px-6 py-4 text-sm text-slate-dark">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
