import type { Metadata } from "next";
import ProductPage, { type ProductSpec } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Society Manager — housing society and community management software",
  description:
    "Billing, maintenance dues, complaints, visitor logs and committee reporting for housing societies and residential communities.",
  alternates: { canonical: "/platforms/society/" },
};

const spec: ProductSpec = {
  eyebrow: "Product · Society Manager",
  title: "The committee stops running the society on WhatsApp",
  lede:
    "Maintenance billing, dues tracking, complaints, visitors and facility bookings in one place — with an audit trail that survives a change of committee.",
  demoParam: "society",
  screens: [
    {
      label: "society-manager · dues dashboard",
      note: "Screenshot: dues dashboard — collection rate, ageing buckets, per-flat status.\nDrop your PNG at /public/screens/society-dues.png and replace this block.",
    },
    {
      label: "society-manager · complaint tracker",
      note: "Screenshot: complaint tracker — open tickets by category, assignment and SLA.\nDrop your PNG at /public/screens/society-complaints.png.",
    },
  ],
  features: [
    { title: "Maintenance billing", body: "Per-flat charges by area or slab, automatic invoice generation, part payments and interest on arrears." },
    { title: "Dues and reminders", body: "Ageing view by flat, scheduled reminders over email and WhatsApp, and receipts issued automatically." },
    { title: "Complaint tracking", body: "Residents raise, committee assigns, everyone sees status. No more messages lost in a group chat." },
    { title: "Visitor management", body: "Gate log with resident approval, delivery handling and a searchable history." },
    { title: "Facility booking", body: "Clubhouse, hall and parking bookings with rules, deposits and conflict prevention." },
    { title: "Committee handover", body: "Full audit trail and exportable records, so a new committee inherits the history rather than a shoebox." },
    { title: "Notices and polls", body: "Circulars with read receipts, and binding polls with one vote per flat." },
    { title: "Accounts export", body: "Tally and spreadsheet exports your auditor already knows how to read." },
    { title: "Resident app", body: "React Native app for iOS and Android — dues, complaints, notices and gate approvals." },
  ],
  audience: [
    { kicker: "Housing societies", title: "50 to 2,000 flats", body: "Purpose-built for the committee model: honorary office bearers, annual handovers and residents who did not sign up for admin work." },
    { kicker: "Builders", title: "Handover packages", body: "Ship a running society system with the building. Residents get structure from day one instead of a spreadsheet inherited three years later." },
    { kicker: "Facility managers", title: "Multi-society portfolios", body: "One login across every society you manage, with per-society isolation and consolidated reporting." },
    { kicker: "Gated communities", title: "Villas and townships", body: "Plot-based billing, multiple gates and per-zone facility rules." },
  ],
  tiers: [
    { name: "Society", price: "₹12", unit: "per flat / month", points: ["Up to 250 flats", "Billing, dues and receipts", "Complaints and notices", "Resident mobile app", "Email support"] },
    { name: "Community", price: "₹9", unit: "per flat / month", featured: true, points: ["250 to 2,000 flats", "Everything in Society", "Visitor and gate management", "Facility booking and deposits", "Accounts export", "Priority support"] },
    { name: "Portfolio", price: "Custom", unit: "per deployment", points: ["Multiple societies, one login", "Your branding and domain", "Deployed in your cloud if required", "Data migration included", "Named support contact"] },
  ],
  ctaTitle: "See it with your own society's data.",
  ctaBody: "Send us one month of dues and complaint records and we will load them into a demo instance before the call.",
};

export default function Page() {
  return <ProductPage spec={spec} />;
}
