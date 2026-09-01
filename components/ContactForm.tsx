"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const PROJECT_TYPES = [
  "Anix Forge (site generation)",
  "CivicLoop (citizen complaints)",
  "OpsGrid (business operations)",
  "Custom platform build",
  "Applied AI / ML integration",
  "Web application",
  "Mobile application",
  "Legacy migration",
  "Something else",
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $150,000",
  "Over $150,000",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Later this year",
  "Just exploring",
];

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [preset, setPreset] = useState("");

  // Pre-select project type from ?product=forge / civic / operations
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("product");
    if (p === "forge") setPreset(PROJECT_TYPES[0]);
    if (p === "civic") setPreset(PROJECT_TYPES[1]);
    if (p === "operations") setPreset(PROJECT_TYPES[2]);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="callout" style={{ marginTop: 40 }}>
        <p>
          <strong>Message received.</strong> We reply to every enquiry within one
          working day. If it is urgent, email {SITE.email} directly.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label className="mono" htmlFor="name">Your name *</label>
        <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" />
      </div>

      <div className="field">
        <label className="mono" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
      </div>

      <div className="field">
        <label className="mono" htmlFor="company">Company</label>
        <input id="company" name="company" autoComplete="organization" placeholder="Company name" />
      </div>

      <div className="field">
        <label className="mono" htmlFor="country">Country</label>
        <input id="country" name="country" autoComplete="country-name" placeholder="Australia" />
      </div>

      <div className="field">
        <label className="mono" htmlFor="type">What do you need? *</label>
        <select
          id="type" name="project_type" required
          value={preset} onChange={(e) => setPreset(e.target.value)}
        >
          <option value="">Select one</option>
          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="field">
        <label className="mono" htmlFor="budget">Budget range *</label>
        <select id="budget" name="budget" required defaultValue="">
          <option value="">Select one</option>
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div className="field full">
        <label className="mono" htmlFor="timeline">When do you want to start? *</label>
        <select id="timeline" name="timeline" required defaultValue="">
          <option value="">Select one</option>
          {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="field full">
        <label className="mono" htmlFor="message">What are you trying to build? *</label>
        <textarea
          id="message" name="message" required
          placeholder="The more specific, the better. What breaks today? What would good look like?"
        />
      </div>

      {/* honeypot */}
      <input
        type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
        style={{ position: "absolute", left: "-9999px" }} aria-hidden="true"
      />

      <div className="full">
        <button className="btn btn-brand" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {state === "error" && (
          <p className="form-note" style={{ color: "var(--brand)" }}>
            That did not send. Email {SITE.email} and we will pick it up there.
          </p>
        )}
        <p className="form-note">
          We reply within one working day. No mailing list, no follow-up sequence.
        </p>
      </div>
    </form>
  );
}
