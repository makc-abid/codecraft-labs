import React, { useState } from 'react';
import api from '../shared/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // ✅ live API base URL থেকে POST পাঠানো হচ্ছে
      await api.post(`${import.meta.env.VITE_API_URL}contact/submit/`, form);
      setDone(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setError('Please check your inputs or try again later.');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us Testing...</h1>

      {done && (
        <div className="p-4 mb-4 border rounded-xl bg-green-50 text-green-800">
          ✅ Thanks! We’ll get back to you shortly.
        </div>
      )}

      {error && (
        <div className="p-4 mb-4 border rounded-xl bg-red-50 text-red-800">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full border rounded-xl p-3"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full border rounded-xl p-3"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full border rounded-xl p-3"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <textarea
          className="w-full border rounded-xl p-3"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
