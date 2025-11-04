import React, { useEffect, useState } from "react";
import api from "../shared/api";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_API_URL}projects/`)
      .then((res) =>
        setProjects(Array.isArray(res.data) ? res.data : res.data?.results ?? [])
      )
      .catch((err) => {
        console.error("Error loading projects:", err);
        setProjects([]);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>

      {projects.length > 0 ? (
        <div className="flex flex-col space-y-16">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* ✅ Image load from Django (SQLite media) */}
              {p.image && (
                <img
                  src={
                    p.image.startsWith("http")
                      ? p.image
                      : `${import.meta.env.VITE_API_URL}${p.image}`
                  }
                  alt={p.title}
                  className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
                />
              )}

              {/* ✅ Text part */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{p.title}</h2>
                <p className="text-gray-600 mb-4">{p.description}</p>

                <div className="flex space-x-6">
                  {p.live_url && (
                    <a
                      href={p.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Live →
                    </a>
                  )}
                  {p.repo_url && (
                    <a
                      href={p.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 font-medium hover:underline"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No projects yet. Add from Django admin.
        </p>
      )}
    </div>
  );
}
