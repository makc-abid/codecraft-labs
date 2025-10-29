import React, { useEffect, useState } from "react";
import api from "../shared/api";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        // ✅ এখানে URL ঠিক করা হয়েছে (live API অনুযায়ী)
        const res = await api.get(`${import.meta.env.VITE_API_URL}pages/about/`);
        setAbout(res.data);
      } catch (error) {
        console.error("Error fetching About page:", error);
        setAbout(null);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      {about ? (
        <article>
          <h2 className="text-xl font-semibold mb-2">{about.title}</h2>
          <p className="whitespace-pre-line">{about.content}</p>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
