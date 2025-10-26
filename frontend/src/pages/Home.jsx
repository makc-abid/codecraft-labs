import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../shared/api";

export default function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.get("/services/")
      .then((r) => setServices(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setServices([]));

    api.get("/projects/")
      .then((r) => setProjects(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setProjects([]));

    api.get("/testimonials/")
      .then((r) => setTestimonials(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setTestimonials([]));
  }, []);

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
          <a href="/contact" className="btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
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
              <div key={s.id} className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-1 transition">
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
    </div>
  );
}