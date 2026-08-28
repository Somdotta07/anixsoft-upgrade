"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, PROJECTS, type Category } from "@/lib/projects";

export default function WorkFilter() {
  const [active, setActive] = useState<Category | "all">("all");
  const list = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter case studies">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={active === c.id ? "on" : undefined}
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid-3">
        {list.map((p) => (
          <Link href={`/work/${p.slug}/`} className="card" key={p.slug}>
            <span className="tag mono">{p.category} · {p.country}</span>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <div className="result">
              <b>{p.metric}</b>
              <span>{p.metricLabel}</span>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <p className="lede">Nothing in this category yet. Try another filter.</p>
      )}
    </>
  );
}
