import React, { useEffect, useState } from "react";
import api from "../shared/api";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    api.get("/pages/about/")
      .then((r) => setAbout(r.data))
      .catch(async () => {
        try {
          const res = await api.get("/pages/");
          const list = Array.isArray(res.data) ? res.data : (res.data?.results ?? []);
          const item = list.find((x) => x.slug === "about");
          setAbout(item ?? null);
        } catch {
          setAbout(null);
        }
      });
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
        <p className="text-gray-500">Add an 'about' page in Django admin (slug=about).</p>
      )}
    </div>
  );
}