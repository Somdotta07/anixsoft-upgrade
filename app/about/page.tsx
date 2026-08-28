import type { Metadata } from "next";
import { CTA, Eyebrow, PageHead } from "@/components/Chrome";
import { SITE, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — a product engineering team in Kolkata since 2015",
  description:
    "Anixsoft has been building software for clients in eleven countries since 2015. How we work, who we are, and what we believe about building.",
  alternates: { canonical: "/about/" },
};

const TIMELINE = [
  { year: "2015", title: "Started as two engineers and a freelance account", body: "The first clients came from Freelancer and stayed for years. Several are still with us." },
  { year: "2017", title: "First offshore delivery relationships", body: "Restaurants and hospitality in Australia, alumni and community platforms in Singapore. We learned how to run projects across seven time zones." },
  { year: "2019", title: "From websites to systems", body: "Clients stopped asking for sites and started asking for the software behind them. The work shifted to platforms and internal tools." },
  { year: "2021", title: "Mobile and multi-tenant", body: "React Native across the client base, and the first genuinely multi-tenant products where one build serves many customers." },
  { year: "2023", title: "Applied AI in production", body: "Document intelligence and motion analysis shipped for real users, with the evaluation and fallback work that production actually demands." },
  { year: "2025", title: "Anix Forge", body: "An internal tool for generating client sites became a product in its own right when it produced its first commercial build in three days." },
];

const BELIEFS = [
  { title: "Say when it is not worth building", body: "The most valuable thing we do on some calls is talk a client out of the project. It costs us the engagement and earns the next three." },
  { title: "Write the data model down first", body: "Most projects that go wrong went wrong at the schema, months before anyone noticed. We agree the model before anyone opens an editor." },
  { title: "You own everything", body: "Source, infrastructure, documentation and accounts are yours from day one. We do not hold anything hostage and we do not build on platforms that would let us." },
  { title: "Small teams, long relationships", body: "We would rather run four projects properly than twelve badly. Several clients have been with us for most of a decade." },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="Ten years, eleven countries, one small team"
        lede="We are a product engineering company in Kolkata. We have never been the biggest option on anyone's shortlist, and we have never needed to be."
      />

      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="h2">Delivered to clients in eleven countries</h2>
          <p className="lede">
            Time zones stopped being a problem years ago. Our working day
            overlaps with Europe in the morning and Australia in the evening,
            and the American east coast catches us before we close.
          </p>
          <div className="pills">
            {SITE.countries.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap-narrow">
          <Eyebrow>History</Eyebrow>
          <h2 className="h2">How we got from there to here</h2>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="tl-item" key={t.year}>
                <h4>{t.year} — {t.title}</h4>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-deep">
        <div className="wrap">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="h2">Four things we will not compromise on</h2>
          <div className="grid-2">
            {BELIEFS.map((b) => (
              <div key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Clients</Eyebrow>
          <h2 className="h2">In their words</h2>
          <div className="quotes">
            {TESTIMONIALS.map((t) => (
              <blockquote className="quote" key={t.author}>
                <p>{t.quote}</p>
                <footer>{t.author} — {t.where}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Find us</Eyebrow>
          <h2 className="h2">Two offices, both in Kolkata</h2>
          <div className="grid-2">
            {SITE.addresses.map((a, i) => (
              <div key={i}>
                <span className="kicker mono">Office {i + 1}</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
