import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../shared/api";

export default function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // ✅ Use dynamic base URL from .env (important for production)
    api.get(`${import.meta.env.VITE_API_URL}services/`)
      .then((r) => setServices(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setServices([]));

    api.get(`${import.meta.env.VITE_API_URL}projects/`)
      .then((r) => setProjects(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setProjects([]));

    api.get(`${import.meta.env.VITE_API_URL}testimonials/`)
      .then((r) => setTestimonials(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setTestimonials([]));
  }, []);
const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api.post(`${import.meta.env.VITE_API_URL}contact/submit/`, form);
      setDone(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Consultation form failed:", err);
      setError("Please check your inputs or try again later.");
    }
  };
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          From <span className="text-primary">Design</span> to{" "}
          <span className="text-primary">Deployment</span>
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Codecraft Labs is a creative IT agency offering complete digital
          solutions — Web Development, UI/UX Design, Branding, and Marketing.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("consultation");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
          >
            Get a Free Consultation
          </a>
          <a href="/portfolio" className="btn border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white">
            See Our Work
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(services) && services.length > 0 ? (
            services.map((s) => (
              <div
              key={s.id} 
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-1 transition">
              {s.image && (
                  <img
                      src={s.image.startsWith("http") ? s.image : `${import.meta.env.VITE_API_URL}${s.image}`}
                      alt={s.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                )}
                <h3 className="text-xl font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No services available yet.</p>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.isArray(projects) && projects.length > 0 ? (
              projects.slice(0, 3).map((p) => (
                <div key={p.id} className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">
                  <h3 className="text-xl font-semibold text-primary mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-3">{p.description}</p>
                  <div className="space-x-4">
                    {p.live_url && (
                      <a href={p.live_url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        Live ↗
                      </a>
                    )}
                    {p.repo_url && (
                      <a href={p.repo_url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No projects found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-1 transition"
              >
                <p className="text-gray-600 italic mb-3">“{t.quote}”</p>
                <h4 className="text-primary font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No testimonials yet.</p>
          )}
        </div>
      </section>
      {/* 🔹 Consultation Section (Pre-Footer CTA) */}
 <section  id="consultation" className="bg-gradient-to-r from-blue-100 to-teal-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get Your Free <span className="text-blue-600">Consultation Today!</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Take the first step towards success. Schedule your free consultation today!
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Book the call</h3>

          {done && (
            <div className="p-3 mb-4 bg-green-50 text-green-700 rounded-lg">
              ✅ Thank you! We’ll reach out soon.
            </div>
          )}

          {error && (
            <div className="p-3 mb-4 bg-red-50 text-red-700 rounded-lg">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              placeholder="Message (optional)"
              className="w-full border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Get a Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}
