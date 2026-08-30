"use client";

import Link from "next/link";
import { useState } from "react";
import { PROJECTS, type Category } from "@/lib/projects";
import { MOBILE_APPS } from "@/lib/apps";

type Filter = Category | "all";

interface Item {
  key: string;
  href?: string;
  image?: string;
  tag: string;
  name: string;
  summary: string;
  metric?: string;
  metricLabel?: string;
  visit?: string;
  stack?: string;
  category: Category;
  status?: string;
}

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "platform", label: "Platforms" },
  { id: "ai", label: "Applied AI" },
  { id: "web", label: "Websites" },
  { id: "mobile", label: "Mobile apps" },
];

const clean = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const WEB: Item[] = PROJECTS.map((p) => ({
  key: p.slug,
  href: `/work/${p.slug}/`,
  image: p.image,
  tag: `${p.category} · ${p.country}`,
  name: p.name,
  summary: p.summary,
  metric: p.metric,
  metricLabel: p.metricLabel,
  visit: p.url ? clean(p.url) : undefined,
  category: p.category,
}));

const APPS: Item[] = MOBILE_APPS.map((a) => ({
  key: a.slug,
  image: a.image,
  tag: `${a.platform} · ${a.country}`,
  name: a.name,
  summary: a.summary,
  metricLabel: a.client,
  stack: a.stack.join("  ·  "),
  category: "mobile" as Category,
  status: a.status,
}));

const ALL = [...WEB, ...APPS];

export default function WorkFilter() {
  const [active, setActive] = useState<Filter>("all");
  const list = active === "all" ? ALL : ALL.filter((i) => i.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter work">
        {FILTERS.map((f) => {
          const n = f.id === "all" ? ALL.length : ALL.filter((i) => i.category === f.id).length;
          return (
            <button
              key={f.id}
              className={active === f.id ? "on" : undefined}
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
            >
              {f.label} <span className="count">{n}</span>
            </button>
          );
        })}
      </div>

      <div className="work-grid" key={active}>
        {list.map((i, idx) => {
          const inner = (
            <>
              <div className="wc-media">
                {i.image ? (
                  <img src={i.image} alt={`${i.name} — screenshot`} loading="lazy" />
                ) : (
                  <div className="wc-fallback"><span>{i.name}</span></div>
                )}
                {i.status && <span className="wc-status">{i.status}</span>}
              </div>

              <div className="wc-body">
                <span className="tag mono">{i.tag}</span>
                <h3>{i.name}</h3>
                <p>{i.summary}</p>

                <div className="result">
                  {i.metric && <b>{i.metric}</b>}
                  <span>{i.metricLabel}</span>
                </div>

                {i.visit && <span className="visit mono">{i.visit} ↗</span>}
                {i.stack && <span className="visit mono">{i.stack}</span>}
              </div>
            </>
          );

          const style = { animationDelay: `${Math.min(idx, 11) * 55}ms` };

          return i.href ? (
            <Link href={i.href} className="wcard" key={i.key} style={style}>{inner}</Link>
          ) : (
            <article className="wcard" key={i.key} style={style}>{inner}</article>
          );
        })}
      </div>
    </>
  );
}
