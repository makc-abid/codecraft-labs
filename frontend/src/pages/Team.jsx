import React, { useEffect, useState } from "react";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}team/`)
      .then((res) => res.json())
      .then((data) => setTeam(Array.isArray(data) ? data : (data?.results ?? [])))
      .catch((err) => console.error("Error fetching team:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {team.length > 0 ? (
          team.map((m) => (
            <div key={m.id} className="bg-white shadow-lg rounded-2xl p-6 text-center">
              {m.photo_url && (
                <img
                  src={m.photo_url}
                  alt={m.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
              )}
              <h3 className="text-xl font-semibold text-primary mb-1">{m.name}</h3>
              <p className="text-gray-500 mb-2">{m.role}</p>
              <p className="text-gray-600 text-sm">{m.bio}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No team members yet.</p>
        )}
      </div>
    </div>
  );
}
