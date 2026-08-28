import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, Eyebrow } from "@/components/Chrome";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: { title: p.name, description: p.summary },
  };
}

export default async function CaseStudy(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <header className="sec-deep page-head">
        <div className="wrap">
          <Eyebrow>{p.category} · {p.country} · {p.year}</Eyebrow>
          <h1 className="h1">{p.name}</h1>
          <p className="lede">{p.tagline}</p>

          <div className="meta-row">
            <div><span className="mono">Duration</span><b>{p.duration}</b></div>
            <div><span className="mono">Team</span><b>{p.team}</b></div>
            <div><span className="mono">Stack</span><b>{p.stack.join(" · ")}</b></div>
            {p.url && (
              <div>
                <span className="mono">Live</span>
                <b><a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)" }}>Visit site ↗</a></b>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="sec sec-dark">
        <div className="wrap-narrow">
          <div className="prose">
            <h2>The problem</h2>
            {p.problem.map((t, i) => <p key={i}>{t}</p>)}

            <h2>How we approached it</h2>
            {p.approach.map((t, i) => <p key={i}>{t}</p>)}

            <h2>Architecture</h2>
            <div className="timeline">
              {p.architecture.map((a) => (
                <div className="tl-item" key={a.step}>
                  <h4>{a.step}</h4>
                  <p>{a.detail}</p>
                </div>
              ))}
            </div>

            <h2>Outcome</h2>
            <ul>{p.outcome.map((t, i) => <li key={i}>{t}</li>)}</ul>

            <div className="callout">
              <p><strong>{p.metric}</strong> — {p.metricLabel}.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>More work</Eyebrow>
          <h2 className="h2">Other systems we have shipped</h2>
          <div className="grid-3">
            {others.map((o) => (
              <Link href={`/work/${o.slug}/`} className="card" key={o.slug}>
                <span className="tag mono">{o.category} · {o.country}</span>
                <h3>{o.name}</h3>
                <p>{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
