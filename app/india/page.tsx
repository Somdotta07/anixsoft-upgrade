import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageHead } from "@/components/Chrome";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software development company in Kolkata — Anixsoft India",
  description:
    "Web development, mobile apps, society management and business software for Indian businesses. Kolkata-based, INR pricing, GST invoicing, WhatsApp support.",
  alternates: { canonical: "/india/" },
};

const PACKAGES = [
  {
    name: "Business website",
    price: "₹35,000",
    unit: "onwards",
    points: ["Up to 8 pages, custom design", "Mobile responsive", "Contact form and WhatsApp button", "Google Business and basic SEO setup", "1 year support included", "Delivered in 2–3 weeks"],
  },
  {
    name: "Society Manager",
    price: "₹12",
    unit: "per flat / month",
    featured: true,
    points: ["Maintenance billing and dues", "Complaint tracking", "Notices and polls", "Visitor and gate management", "Resident mobile app", "Tally-compatible export"],
  },
  {
    name: "Custom application",
    price: "₹2,50,000",
    unit: "onwards",
    points: ["Web or mobile, or both", "Discovery and scoping included", "Staged delivery with demos", "GST invoicing", "Source code handed over", "30 days warranty"],
  },
];

const FAQ = [
  { q: "Do you issue GST invoices?", a: "Yes. We are GST registered and invoice in INR with full tax breakdown, so the cost is claimable against your input credit." },
  { q: "Can we meet in person?", a: "Yes. We have two offices in Kolkata and are happy to meet at either, or at your premises anywhere in the city." },
  { q: "Do you work with businesses outside Kolkata?", a: "Regularly. Most Indian clients are outside West Bengal and everything runs over calls and WhatsApp — the same way our Australian and American clients work." },
  { q: "What if we already have a website?", a: "We can migrate it. Most of our Indian work starts as a rescue: an abandoned WordPress site, a developer who stopped responding, or a system nobody can log into anymore." },
];

export default function IndiaPage() {
  return (
    <>
      <PageHead
        eyebrow="India · Kolkata"
        title="Software built in Kolkata, to the standard we ship to Sydney"
        lede="The same team, the same engineering, priced in rupees with GST invoicing. Most of our work goes overseas — this page is for the businesses down the road."
      />

      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Why local clients pick us</Eyebrow>
          <h2 className="h2">We are not a reseller and we do not disappear</h2>
          <div className="grid-2">
            <div>
              <span className="kicker mono">Since 2015</span>
              <h3>Ten years, same team</h3>
              <p>We have been at the same address for a decade. You can visit the office. That should not be a differentiator, but locally it is.</p>
            </div>
            <div>
              <span className="kicker mono">Global standard</span>
              <h3>Built for export markets</h3>
              <p>Our work ships to Australia, Malta and the United States. Indian clients get the same engineering, not a cut-down version.</p>
            </div>
            <div>
              <span className="kicker mono">GST registered</span>
              <h3>Proper invoicing</h3>
              <p>Full INR invoices with GST breakdown, claimable against input credit. Advance and milestone terms available.</p>
            </div>
            <div>
              <span className="kicker mono">WhatsApp</span>
              <h3>Reachable the way you work</h3>
              <p>Approvals, screenshots and questions over WhatsApp. Formal documentation still gets written — it just does not slow the day down.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Packages</Eyebrow>
          <h2 className="h2">Indicative INR pricing</h2>
          <p className="lede">
            Starting points, not final quotes. Every project gets a fixed written
            estimate before any money changes hands.
          </p>
          <div className="price">
            {PACKAGES.map((p) => (
              <div className={"price-card" + (p.featured ? " featured" : "")} key={p.name}>
                {p.featured && <span className="tag mono">Most popular locally</span>}
                <h3>{p.name}</h3>
                <div className="price-amt">{p.price} <small>{p.unit}</small></div>
                <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <Link href="/contact/" className={"btn " + (p.featured ? "btn-dark" : "btn-ghost-dark")}>Get a quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-deep">
        <div className="wrap-narrow">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="h2">What local clients ask</h2>
          <div className="prose">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="wrap">
          <div className="cta">
            <h2>Come and see the office.</h2>
            <p>
              Dum Dum, Kolkata. Bring the problem, we will tell you honestly
              whether it is worth building and roughly what it costs.
            </p>
            <div className="btn-row">
              <Link href="/contact/" className="btn btn-dark">Get a quote</Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-ghost-dark">{SITE.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
