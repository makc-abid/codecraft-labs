import React, { useEffect, useState } from "react";
import api from "../shared/api";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects/")
      .then((r) => setProjects(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setProjects([]));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((p) => (
            <div key={p.id} className="card">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-600 mt-1">{p.description}</p>
              <div className="mt-3 space-x-3">
                {p.live_url && <a className="link" href={p.live_url} target="_blank" rel="noreferrer">Live</a>}
                {p.repo_url && <a className="link" href={p.repo_url} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects yet. Add from Django admin.</p>
        )}
      </div>
    </div>
  );
}