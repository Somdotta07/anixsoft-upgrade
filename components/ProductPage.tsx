import Link from "next/link";
import { CTA, Eyebrow, PageHead } from "@/components/Chrome";

export interface ProductSpec {
  eyebrow: string;
  title: string;
  lede: string;
  demoParam: string;
  hero: string;
  heroAlt: string;
  /** the "so what" line under the hero */
  claim: string;
  screens: { image: string; label: string; title: string; body: string }[];
  /** the same core, shaped for different buyers - this is the selling point */
  shapes: { sector: string; title: string; body: string }[];
  features: { title: string; body: string }[];
  ai: { title: string; body: string }[];
  delivery: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
}

export default function ProductPage({ spec }: { spec: ProductSpec }) {
  return (
    <>
      <PageHead eyebrow={spec.eyebrow} title={spec.title} lede={spec.lede} />

      {/* hero shot */}
      <section className="sec-deep" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <figure className="hero-shot">
            <img src={spec.hero} alt={spec.heroAlt} />
          </figure>
          <p className="claim">{spec.claim}</p>
          <div className="btn-row" style={{ justifyContent: "center", paddingBottom: 96 }}>
            <Link href={`/contact/?product=${spec.demoParam}`} className="btn btn-brand">
              Request a demo
            </Link>
            <Link href="/work/" className="btn btn-ghost">See our work</Link>
          </div>
        </div>
      </section>

      {/* screen by screen */}
      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Inside the product</Eyebrow>
          <h2 className="h2">What each person actually sees</h2>
          <p className="lede">
            Different people need different things from the same system. Each role
            gets a screen built for the job in front of them, not a cut-down
            version of someone else&apos;s.
          </p>

          <div className="screens">
            {spec.screens.map((s) => (
              <figure className="screen" key={s.title}>
                <div className="screen-media">
                  <img src={s.image} alt={`${s.title} screen`} loading="lazy" />
                </div>
                <figcaption>
                  <span className="tag mono">{s.label}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* the flexibility argument */}
      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>One core, many shapes</Eyebrow>
          <h2 className="h2">The same engine, fitted to your situation</h2>
          <p className="lede">
            This is not a product you buy off a shelf and bend yourself around.
            The core is proven; what sits on top is configured for the sector,
            the workflow and the words your people already use.
          </p>
          <div className="grid-2">
            {spec.shapes.map((s) => (
              <div key={s.title}>
                <span className="kicker mono">{s.sector}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* capability */}
      <section className="sec sec-deep">
        <div className="wrap">
          <Eyebrow>Capability</Eyebrow>
          <h2 className="h2">What comes as standard</h2>
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

      {/* AI */}
      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>AI where it earns its place</Eyebrow>
          <h2 className="h2">Not a chatbot bolted on the side</h2>
          <p className="lede">
            We add models where they remove real work, and leave them out where a
            rule would do the job more cheaply and more predictably.
          </p>
          <div className="grid-2">
            {spec.ai.map((a) => (
              <div key={a.title}>
                <span className="kicker mono">AI</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* delivery + how pricing works */}
      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>How you get it</Eyebrow>
          <h2 className="h2">Mobile, web, or both — your call</h2>
          <div className="feat">
            {spec.delivery.map((d) => (
              <div key={d.title}>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            ))}
          </div>

          <div className="quote-box">
            <h3>What does it cost?</h3>
            <p>
              We do not publish a price, because we have never quoted two of these
              the same. The number depends on how many roles you need, whether it
              runs on our infrastructure or yours, what it has to integrate with,
              and how much of it you want us to keep running afterwards.
            </p>
            <p>
              Tell us what you are trying to fix and we will come back with a
              fixed written scope and a fixed number — usually within a week, and
              at no cost.
            </p>
            <div className="btn-row">
              <Link href={`/contact/?product=${spec.demoParam}`} className="btn btn-dark">
                Request a demo
              </Link>
              <Link href="/contact/" className="btn btn-ghost-dark">Get a scoped quote</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA title={spec.ctaTitle} body={spec.ctaBody} />
    </>
  );
}
