"use client";

import { useEffect, useState } from "react";

export const STEPS = [
  ["01", "Brief", "Business name, sector and tone parsed into a structured spec."],
  ["02", "Copy", "Section-aware content generated per page, checked for repetition across the batch."],
  ["03", "Layout", "Archetype chosen from a compositional grammar — not a template library."],
  ["04", "Assets", "Palette, type pairing and imagery derived from the brief, seeded per site."],
  ["05", "Build", "Static output compiled, Lighthouse-audited and diffed against the batch."],
  ["06", "Deploy", "Pushed to CDN with domains, SSL and analytics attached."],
];

export default function Pipeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((s) => (s + 1) % STEPS.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pipe">
      {STEPS.map(([n, t, d], i) => (
        <div key={n} className={"pipe-step" + (active === i ? " on" : "")}>
          <span className="mono">{n}</span>
          <h4>{t}</h4>
          <p>{d}</p>
        </div>
      ))}
    </div>
  );
}
