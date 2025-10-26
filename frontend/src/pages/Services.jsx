import React, { useEffect, useState } from "react";
import api from "../shared/api";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("/services/")
      .then((res) => setServices(Array.isArray(res.data) ? res.data : (res.data?.results ?? [])))
      .catch((err) => {
        console.error("Error loading services:", err);
        setServices([]);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      {Array.isArray(services) && services.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No services available yet. Try adding some in the admin panel.
        </p>
      )}
    </div>
  );
}