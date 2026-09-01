import type { Metadata } from "next";
import Link from "next/link";
import { CTA, Eyebrow, PageHead } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Platforms — CivicLoop and OpsGrid",
  description:
    "Two proven platforms, configured to your situation: CivicLoop for citizen complaints and resolution, OpsGrid for staff, stock, customers and fleet.",
  alternates: { canonical: "/platforms/" },
};

const PRODUCTS = [
  {
    href: "/platforms/civic/",
    image: "/platform/civic-hero.webp",
    kicker: "End-User ↔ Service Desk",
    name: "Loop",
    line: "Issues stop disappearing into an inbox",
    body: "Users report problems with photos, video, and location data. Operations teams are notified instantly to work a self-sorting queue. Real-time status transparency builds immediate trust.",
    tags: ["Municipal", "Housing societies", "Utilities", "Campuses", "Internal helpdesk"],
  },
  {
    href: "/platforms/operations/",
    image: "/platform/ops-hero.webp",
    kicker: "Business operations",
    name: "OpsGrid",
    line: "The whole operation on one screen",
    body: "Staff, stock, customers, orders and vehicles in one system. QR stock counts, live loading status, and field apps that keep working when the signal drops.",
    tags: ["Distribution", "Retail chains", "Manufacturing", "Field service", "Hospitality"],
  },
];

export default function PlatformsPage() {
  return (
    <>
      <PageHead
        eyebrow="Platforms"
        title="Products already built, shaped to fit you"
        lede="Neither of these is off-the-shelf software you bend yourself around, and neither is a bespoke build starting from nothing. The engine is proven; what sits on top is configured for your sector, your workflow and your words."
      />

      <section className="sec sec-dark">
        <div className="wrap">
          {PRODUCTS.map((p) => (
            <article className="plat" key={p.name}>
              <Link href={p.href} className="plat-media">
                <img src={p.image} alt={`${p.name} screens`} loading="lazy" />
              </Link>
              <div className="plat-body">
                <span className="kicker mono">{p.kicker}</span>
                <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)" }}>{p.name}</h2>
                <p className="plat-line">{p.line}</p>
                <p>{p.body}</p>
                <div className="pills" style={{ marginTop: 22 }}>
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="btn-row">
                  <Link href={p.href} className="btn btn-brand">Explore {p.name}</Link>
                  <Link href="/contact/" className="btn btn-ghost">Request a demo</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Also worth knowing</Eyebrow>
          <h2 className="h2">Not sure either one fits? That is a normal conversation.</h2>
          <div className="grid-2">
            <div>
              <span className="kicker mono">Mobile, web, or both</span>
              <h3>You choose the shape</h3>
              <p>Both platforms run as mobile apps, as a browser application, or as both from one build. If you want a website rather than an app, that is the same conversation and the same team.</p>
            </div>
            <div>
              <span className="kicker mono">Pricing</span>
              <h3>Scoped, not listed</h3>
              <p>We do not publish a price because we have never quoted two of these the same. Tell us the problem and you get a fixed written scope and a fixed number, at no cost.</p>
            </div>
            <div>
              <span className="kicker mono">Something else entirely</span>
              <h3>We build from scratch too</h3>
              <p>These two exist because clients asked for them. If your problem does not fit either, that is what our custom platform work is for — same engineers, same approach.</p>
            </div>
            <div>
              <span className="kicker mono">AI</span>
              <h3>Built in, not bolted on</h3>
              <p>Categorisation, duplicate detection, forecasting and anomaly flagging are part of both platforms — used where they remove real work, left out where a plain rule does the job better.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Tell us the process that keeps breaking."
        body="Twenty minutes, no deck. We will show you the relevant platform running against a situation like yours."
      />
    </>
  );
}
