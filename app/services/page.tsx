import type { Metadata } from "next";
import Link from "next/link";
import { CTA, Eyebrow, PageHead } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Services — what we build and how we engage",
  description:
    "Generation systems, business platforms, web and mobile products, and applied AI. Engagement models, process and the current stack.",
  alternates: { canonical: "/services/" },
};

const SERVICES = [
  { kicker: "AI & automation", title: "Generation systems", body: "Python pipelines that produce content, layouts and deployable code at volume, with diversity enforcement and quality gates. For agencies, franchises and marketplaces that need hundreds of outputs, not one." },
  { kicker: "Platforms", title: "Business software", body: "Payroll, expenses, membership, billing and operations. Multi-tenant, role-based, audit-ready, and designed so that a rule change is configuration rather than a redeploy." },
  { kicker: "Product", title: "Web applications", body: "React and Next.js front-ends on APIs we design ourselves. Static where it can be, dynamic where it must be, and fast on the connections your users actually have." },
  { kicker: "Product", title: "Mobile applications", body: "React Native for iOS and Android from one codebase, with native modules where the platform demands them. Shipped and maintained through store review cycles." },
  { kicker: "Applied AI", title: "Model integration", body: "Vision, document and language models wired into real workflows — with evaluation harnesses, confidence thresholds, cost controls and fallbacks that keep them usable in production." },
  { kicker: "Modernisation", title: "Legacy migration", body: "Moving a working PHP or WordPress system to something maintainable without a big-bang rewrite. Strangler-pattern migration, with the old system running until the new one earns the traffic." },
];

const ENGAGEMENTS = [
  { name: "Discovery sprint", price: "2 weeks", unit: "fixed fee", points: ["Technical and commercial scoping", "Architecture proposal", "Risk register and estimate", "Clickable prototype of the core flow", "Fully credited against a build"] },
  { name: "Product build", price: "8–24 wks", unit: "fixed scope, staged", featured: true, points: ["Dedicated squad, 2–5 people", "Two-week iterations with live demos", "Staging environment from week one", "Handover documentation and training", "30 days post-launch warranty"] },
  { name: "Embedded team", price: "Monthly", unit: "rolling retainer", points: ["Engineers embedded in your process", "Your tooling, standups and board", "Scale up or down with 30 days notice", "Named technical lead", "Minimum three months"] },
];

const PROCESS = [
  { step: "Scope", detail: "We work out what actually has to be true for this to be worth building. Sometimes the answer is that it is not, and we say so." },
  { step: "Architect", detail: "Data model and system boundaries first, written down, agreed before anyone opens an editor." },
  { step: "Build in the open", detail: "Two-week iterations, a staging URL you can visit from day one, and a demo you can interrupt." },
  { step: "Harden", detail: "Load, security and failure-mode testing before launch, not after the first incident." },
  { step: "Hand over", detail: "Source, documentation, runbooks and a training session. You own everything." },
  { step: "Support", detail: "30 days warranty included, then a support agreement if you want one. No lock-in either way." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Services"
        title="We take the work that does not fit in a template"
        lede="If a no-code tool can do it, use the no-code tool — we will tell you which one. We are for the systems that sit underneath, where the rules are messy and the data matters."
      />

      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="h2">Six things we are genuinely good at</h2>
          <div className="grid-2">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <span className="kicker mono">{s.kicker}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>How we engage</Eyebrow>
          <h2 className="h2">Three ways to start</h2>
          <p className="lede">
            We do not publish an hourly rate. Hourly rates reward slow work and
            tell you nothing about what a project costs. These are the shapes we
            work in.
          </p>
          <div className="price">
            {ENGAGEMENTS.map((e) => (
              <div className={"price-card" + (e.featured ? " featured" : "")} key={e.name}>
                {e.featured && <span className="tag mono">Most common</span>}
                <h3>{e.name}</h3>
                <div className="price-amt">{e.price} <small>{e.unit}</small></div>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Link href="/contact/" className={"btn " + (e.featured ? "btn-dark" : "btn-ghost-dark")}>Start here</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-deep">
        <div className="wrap-narrow">
          <Eyebrow>Process</Eyebrow>
          <h2 className="h2">What actually happens after you sign</h2>
          <div className="timeline">
            {PROCESS.map((p) => (
              <div className="tl-item" key={p.step}>
                <h4>{p.step}</h4>
                <p>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Current stack</Eyebrow>
          <h2 className="h2">What we reach for in 2026</h2>
          <p className="lede">
            Not an exhaustive list — a statement of where we are current. We will
            happily work in your stack instead if that is the right call.
          </p>
          <div className="feat">
            <div><h4>Frontend</h4><p>React, Next.js, TypeScript, React Native</p></div>
            <div><h4>Backend</h4><p>Node.js, Python, FastAPI, Go where it earns its place</p></div>
            <div><h4>Data</h4><p>PostgreSQL, Redis, time-series stores, S3-compatible object storage</p></div>
            <div><h4>AI/ML</h4><p>PyTorch, hosted LLM APIs, vector search, evaluation harnesses</p></div>
            <div><h4>Infrastructure</h4><p>Docker, GitHub Actions, AWS and Cloudflare, infrastructure as code</p></div>
            <div><h4>Quality</h4><p>Automated testing, Lighthouse budgets, error tracking, uptime monitoring</p></div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
