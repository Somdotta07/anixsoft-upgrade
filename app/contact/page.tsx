import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow, PageHead } from "@/components/Chrome";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — request a demo or start a project",
  description:
    "Tell us what you are building. We reply to every enquiry within one working day, from Kolkata, serving Australia, Malta, the US and India.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Tell us the hard part"
        lede="The batch job, the legacy migration, the workflow nobody wants to own. Those are the enquiries we answer fastest."
      />

      <section className="sec sec-dark">
        <div className="wrap-narrow">
          <ContactForm />
        </div>
      </section>

      <section className="sec sec-deep">
        <div className="wrap-narrow">
          <Eyebrow>Or just book time</Eyebrow>
          <h2 className="h2">Twenty minutes, no deck</h2>
          <p className="lede">
            Pick a slot that works in your time zone. We will have looked at your
            site before the call.
          </p>

          {/* Cal.com inline embed. Replace SITE.calcom with your real link. */}
          <div className="shot" style={{ marginTop: 32 }}>
            <div className="shot-bar">
              <i /><i /><i />
              <span className="mono" style={{ marginLeft: 8, color: "var(--text-mute-light)" }}>
                cal.com · 20 minute intro
              </span>
            </div>
            <div className="shot-body" style={{ padding: 0 }}>
              <iframe
                src={`https://cal.com/${SITE.calcom}?embed=true&theme=dark`}
                title="Book a 20 minute call"
                style={{ width: "100%", height: 620, border: "none", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Direct</Eyebrow>
          <h2 className="h2">If you would rather just email</h2>
          <div className="grid-2">
            <div>
              <span className="kicker mono">Email</span>
              <h3><a href={`mailto:${SITE.email}`} style={{ color: "inherit" }}>{SITE.email}</a></h3>
              <p>We read every message. One working day turnaround.</p>
            </div>
            <div>
              <span className="kicker mono">India enquiries</span>
              <h3>Local pricing and support</h3>
              <p>
                Indian businesses — see our <a href="/india/" style={{ color: "var(--brand-deep)" }}>India page</a> for
                INR pricing and WhatsApp contact.
              </p>
            </div>
            {SITE.addresses.map((a, i) => (
              <div key={i}>
                <span className="kicker mono">Office {i + 1}</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
