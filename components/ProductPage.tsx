import Link from "next/link";
import { CTA, Eyebrow, PageHead } from "@/components/Chrome";

export interface Tier {
  name: string;
  price: string;
  unit: string;
  featured?: boolean;
  points: string[];
}

export interface ProductSpec {
  eyebrow: string;
  title: string;
  lede: string;
  demoParam: string;
  screens: { label: string; note: string }[];
  features: { title: string; body: string }[];
  audience: { kicker: string; title: string; body: string }[];
  tiers: Tier[];
  ctaTitle: string;
  ctaBody: string;
}

export default function ProductPage({ spec }: { spec: ProductSpec }) {
  return (
    <>
      <PageHead eyebrow={spec.eyebrow} title={spec.title} lede={spec.lede} />

      {/* screenshots */}
      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Inside the product</Eyebrow>
          <h2 className="h2">What your team actually sees</h2>

          {spec.screens.map((s) => (
            <div className="shot" key={s.label}>
              <div className="shot-bar">
                <i /><i /><i />
                <span className="mono" style={{ marginLeft: 8, color: "var(--text-mute-light)" }}>
                  {s.label}
                </span>
              </div>
              <div className="shot-body">
                {/* Replace this placeholder with:
                    <img src="/screens/your-screenshot.png" alt="..." /> */}
                <div className="shot-note">{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* features */}
      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Capability</Eyebrow>
          <h2 className="h2">Everything the day-to-day needs</h2>
          <div className="feat">
            {spec.features.map((f) => (
              <div key={f.title}>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* audience */}
      <section className="sec sec-deep">
        <div className="wrap">
          <Eyebrow>Who it is for</Eyebrow>
          <h2 className="h2">Built from real deployments, not a feature list</h2>
          <div className="grid-2">
            {spec.audience.map((a) => (
              <div key={a.title}>
                <span className="kicker mono">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="h2">Priced per deployment, not per seat</h2>
          <p className="lede">
            Indicative ranges. Final scope is agreed on a call — we would rather
            quote accurately than cheaply.
          </p>

          <div className="price">
            {spec.tiers.map((t) => (
              <div className={"price-card" + (t.featured ? " featured" : "")} key={t.name}>
                {t.featured && <span className="tag mono">Most chosen</span>}
                <h3>{t.name}</h3>
                <div className="price-amt">
                  {t.price} <small>{t.unit}</small>
                </div>
                <ul>
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link
                  href={`/contact/?product=${spec.demoParam}`}
                  className={"btn " + (t.featured ? "btn-dark" : "btn-ghost-dark")}
                >
                  Request a demo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title={spec.ctaTitle} body={spec.ctaBody} />
    </>
  );
}
