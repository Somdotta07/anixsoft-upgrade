import type { Metadata } from "next";
import Link from "next/link";
import Swarm from "@/components/Swarm";
import Pipeline from "@/components/Pipeline";
import { CTA, Eyebrow, PageHead } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Anix Forge — generate thousands of unique websites",
  description:
    "Anix Forge is a Python and AI pipeline that turns one business brief into thousands of genuinely different websites, built and deployed automatically.",
  alternates: { canonical: "/forge/" },
};

const FAQ = [
  {
    q: "How is this different from an AI website builder?",
    a: "Builders make one site at a time, from a template library, with a human at the keyboard. Forge is a batch system: you give it a list of briefs and it returns a list of deployed sites. The design constraint is diversity across the batch, which is a problem single-site builders never have to solve.",
  },
  {
    q: "Do the sites look the same?",
    a: "No, and preventing that is most of the engineering. Every site in a run is compared against its siblings across layout, palette, type pairing and copy. Anything too close to a sibling is regenerated with those regions constrained.",
  },
  {
    q: "Can we run it on our own infrastructure?",
    a: "Yes. Forge is available as a managed service or as a licensed deployment inside your own cloud account, which is the usual choice where client data cannot leave a jurisdiction.",
  },
  {
    q: "What do we need to supply?",
    a: "At minimum a business name and a one-line description per site. Better input produces better output — sector, tone, service list and any brand assets all improve the result measurably.",
  },
];

export default function ForgePage() {
  return (
    <>
      <PageHead
        eyebrow="Product · Anix Forge"
        title="A website factory, not a website builder"
        lede="Feed it one brief or ten thousand. Forge writes the copy, composes the layout, generates the assets, builds the site and deploys it — then proves that no two outputs in the run are alike."
      />

      {/* live demo */}
      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Try it</Eyebrow>
          <h2 className="h2">Run a batch on your own business</h2>
          <p className="lede">
            This is a sandboxed preview of the real engine — twelve sites instead
            of a thousand, and layout only. Ask for a demo to see full output.
          </p>
          <Swarm count={12} />
        </div>
      </section>

      {/* how it works */}
      <section className="sec sec-deep">
        <div className="wrap">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="h2">Six stages, fully parallelised</h2>
          <Pipeline />
        </div>
      </section>

      {/* who it is for */}
      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Who it is for</Eyebrow>
          <h2 className="h2">Built for people who need many, not one</h2>

          <div className="grid-2">
            <div>
              <span className="kicker mono">Agencies</span>
              <h3>White-label volume</h3>
              <p>
                Deliver client sites at a margin that survives fixed-fee pricing.
                Your brand, your domains, your client relationship — Forge stays
                invisible.
              </p>
            </div>
            <div>
              <span className="kicker mono">Franchises</span>
              <h3>Location sites at scale</h3>
              <p>
                Every branch gets a site that is genuinely its own rather than a
                cloned page with the address swapped, while brand rules stay
                enforced centrally.
              </p>
            </div>
            <div>
              <span className="kicker mono">Marketplaces</span>
              <h3>Seller storefronts</h3>
              <p>
                Give every vendor on your platform a real storefront at signup,
                provisioned automatically with domain and SSL attached.
              </p>
            </div>
            <div>
              <span className="kicker mono">Directories</span>
              <h3>Programmatic footprints</h3>
              <p>
                Generate genuinely distinct pages at volume, with the diversity
                checks that keep the output out of duplicate-content territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* capability numbers */}
      <section className="sec sec-dark">
        <div className="wrap">
          <Eyebrow>Capability</Eyebrow>
          <h2 className="h2">What a run looks like</h2>

          <div className="stat-row" style={{ borderTop: "none", paddingBottom: 0 }}>
            <div className="stat">
              <b>1,000</b>
              <span>sites in a single batch run</span>
            </div>
            <div className="stat">
              <b>9 sec</b>
              <span>average build and deploy per site</span>
            </div>
            <div className="stat">
              <b>6</b>
              <span>pipeline stages, parallelised</span>
            </div>
            <div className="stat">
              <b>3-word</b>
              <span>maximum shared phrase between siblings</span>
            </div>
          </div>

          <div className="feat" style={{ marginTop: 56 }}>
            <div>
              <h4>Diversity enforcement</h4>
              <p>
                Every output diffed against its batch across layout archetype,
                palette distance, type pairing and copy n-grams.
              </p>
            </div>
            <div>
              <h4>Compositional grammar</h4>
              <p>
                Section types with valid neighbours and arrangements, sampled
                combinatorially rather than picked from a fixed template set.
              </p>
            </div>
            <div>
              <h4>Audited output</h4>
              <p>
                Each build is Lighthouse-checked before deploy. Failures are
                regenerated, not shipped.
              </p>
            </div>
            <div>
              <h4>Domains and SSL</h4>
              <p>
                Provisioned automatically per site, including custom domains
                supplied in the brief.
              </p>
            </div>
            <div>
              <h4>Your infrastructure</h4>
              <p>
                Deployable inside your own cloud account where data residency
                matters.
              </p>
            </div>
            <div>
              <h4>Human handoff</h4>
              <p>
                Output is real source, not a locked builder export. Your team can
                take it from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="sec sec-light">
        <div className="wrap-narrow">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="h2">The ones we always get asked</h2>

          <div className="prose">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="btn-row">
            <Link href="/contact/?product=forge" className="btn btn-dark">
              Request a Forge demo
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="See it run on your real brief."
        body="Send us ten businesses and we will run the batch live on a call. No deck, no sales engineer."
      />
    </>
  );
}
