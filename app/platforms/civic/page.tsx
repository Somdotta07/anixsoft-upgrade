import type { Metadata } from "next";
import ProductPage, { type ProductSpec } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "CivicLoop — citizen complaint and resolution platform",
  description:
    "Citizens report issues with photos, video and location. Officials get them instantly, assign them, and close the loop with a status the public can see. Mobile, web, or both.",
  alternates: { canonical: "/platforms/civic/" },
};

const spec: ProductSpec = {
  eyebrow: "Platform · CivicLoop",
  title: "Complaints stop disappearing into an office",
  lede:
    "A citizen photographs the problem and sends it in thirty seconds. The right official is notified immediately, not next Tuesday. Everyone — the citizen included — can see exactly where it stands.",
  demoParam: "civic",
  hero: "/platform/civic-hero.webp",
  heroAlt: "CivicLoop — citizen reporting, officer queue and status tracking screens",
  claim:
    "Most complaint systems fail for one reason: the person who reported the problem never finds out what happened. CivicLoop makes the status <em>public by default</em>.",
  screens: [
    {
      image: "/platform/civic-report.webp",
      label: "Citizen",
      title: "Report in under a minute",
      body:
        "Pick a category, describe it, attach photos or video, and location is captured automatically. No account hunting, no form that times out, no office visit.",
    },
    {
      image: "/platform/civic-console.webp",
      label: "Official",
      title: "A queue that sorts itself",
      body:
        "Complaints arrive as notifications and land in a priority queue with a live countdown against the response time you have committed to. Overdue items rise to the top on their own.",
    },
    {
      image: "/platform/civic-track.webp",
      label: "Citizen",
      title: "Status the public can see",
      body:
        "Every step is timestamped and visible: submitted, acknowledged, assigned, in progress, resolved. The citizen can add photos mid-way if things change.",
    },
  ],
  shapes: [
    {
      sector: "Municipal",
      title: "Ward and city corporations",
      body:
        "Water, roads, waste, drainage, streetlights. Route by ward and department, with escalation when a response time is missed and reporting the council can put in front of the public.",
    },
    {
      sector: "Housing",
      title: "Societies and gated communities",
      body:
        "The same loop for maintenance complaints, with dues, notices, polls and visitor approvals added. Committees change every year — the record does not go with them.",
    },
    {
      sector: "Utilities",
      title: "Water, power and gas providers",
      body:
        "Fault reporting with photographic evidence and location, feeding straight into the field team's job list rather than through a call centre.",
    },
    {
      sector: "Facilities",
      title: "Campuses, hospitals, large sites",
      body:
        "Staff and visitors report faults from a phone; estates teams get a triaged queue with the SLA attached. Works equally well for a university or a factory.",
    },
    {
      sector: "Internal",
      title: "Any organisation with a helpdesk",
      body:
        "The same shape solves IT tickets, HR grievances and safety observations. Only the categories and routing rules change.",
    },
    {
      sector: "Public trust",
      title: "Where transparency is the point",
      body:
        "Published dashboards showing volumes, response times and resolution rates by area. The strongest argument for adopting this is usually the one you can show voters.",
    },
  ],
  features: [
    { title: "Rich evidence", body: "Photos, video and voice notes attached at the point of reporting, with automatic location capture." },
    { title: "Instant notification", body: "Push, SMS and email to the assigned official the moment a complaint lands." },
    { title: "Response-time tracking", body: "Commit to a turnaround per category, then measure against it automatically." },
    { title: "Escalation", body: "Unanswered items climb to the next level of authority on a schedule you set." },
    { title: "Assignment and handover", body: "Route to a person, team or department; reassign without losing the history." },
    { title: "Public status", body: "Citizens see progress without phoning anyone. This is the single biggest driver of trust." },
    { title: "Duplicate detection", body: "Ten people reporting the same pothole become one job with ten followers." },
    { title: "Map view", body: "Every open item plotted, so clusters and neglected areas become obvious." },
    { title: "Audit trail", body: "Every action timestamped and attributable. Survives an inspection or an RTI request." },
    { title: "Notices and alerts", body: "Broadcast outages, works and public notices back out to citizens in the same app." },
    { title: "Offline capable", body: "Reports queue on the phone and send when signal returns." },
    { title: "Multilingual", body: "Interface and categories in the languages your citizens actually use." },
  ],
  ai: [
    {
      title: "Automatic categorisation and routing",
      body:
        "The description and photo are enough to work out whether this is a water, roads or waste matter, and which department owns it. Officials stop triaging by hand, and misrouted complaints stop losing days.",
    },
    {
      title: "Duplicate and cluster detection",
      body:
        "Reports about the same problem are grouped by text and location similarity, so twenty complaints about one broken main become one job with twenty people to notify when it is fixed.",
    },
    {
      title: "Photo assessment",
      body:
        "Images are checked for what they actually show — severity, whether it is the reported category, whether it is a duplicate of an existing photo — and flagged for a human when the model is not confident.",
    },
    {
      title: "Plain-language summaries",
      body:
        "Long or rambling complaints are condensed into a one-line brief for the officer, in the language they work in, without losing the original text.",
    },
  ],
  delivery: [
    { title: "Mobile apps", body: "iOS and Android from one React Native codebase — one app for citizens, one for officials, or a single app that changes by role." },
    { title: "Web portal", body: "The whole thing works in a browser too. Some clients want only the web version; some want both. Neither costs you a second build." },
    { title: "Public dashboard", body: "An optional open page showing volumes and response times, which is often what wins the political argument internally." },
    { title: "Your infrastructure", body: "Deployable in your own cloud or on-premises where citizen data cannot leave the jurisdiction." },
    { title: "Your branding", body: "Your name, your colours, your domain. We are invisible unless you want us named." },
    { title: "Integration", body: "Pushes into an existing ERP, GIS or ticketing system if one is already in place. We would rather feed your system than replace it." },
  ],
  ctaTitle: "Bring us your complaint backlog.",
  ctaBody:
    "Show us how issues reach you today and where they get stuck. We will show you the same flow running in CivicLoop on a 20-minute call.",
};

export default function Page() {
  return <ProductPage spec={spec} />;
}
