import React, { useEffect, useState } from "react";
import api from "../shared/api";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    api.get("/team/")
      .then((r) => setTeam(Array.isArray(r.data) ? r.data : (r.data?.results ?? [])))
      .catch(() => setTeam([]));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {Array.isArray(team) && team.length > 0 ? (
          team.map((m) => (
            <div key={m.id} className="card">
              <div className="flex items-center gap-4">
                {m.photo_url && <img src={m.photo_url} className="w-16 h-16 rounded-full object-cover" />}
                <div>
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-gray-600 text-sm">{m.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-3">{m.bio}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No team members yet. Add from Django admin.</p>
        )}
      </div>
    </div>
  );
}