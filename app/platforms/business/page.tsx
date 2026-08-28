import type { Metadata } from "next";
import ProductPage, { type ProductSpec } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Business Suite — operations software for growing companies",
  description:
    "Payroll, expenses, invoicing, inventory and approvals in one system, built for businesses that have outgrown spreadsheets.",
  alternates: { canonical: "/platforms/business/" },
};

const spec: ProductSpec = {
  eyebrow: "Product · Business Suite",
  title: "The system you build once you outgrow the spreadsheets",
  lede:
    "Payroll, expenses, invoicing, inventory and approvals on one ledger — multi-entity, role-based, and built to survive an audit.",
  demoParam: "business",
  screens: [
    {
      label: "business-suite · approvals",
      note: "Screenshot: approvals queue — pending items by owner, ageing and delegation.\nDrop your PNG at /public/screens/business-approvals.png and replace this block.",
    },
    {
      label: "business-suite · payroll run",
      note: "Screenshot: payrun detail — entity, period, deductions and disbursement status.\nDrop your PNG at /public/screens/business-payrun.png.",
    },
  ],
  features: [
    { title: "Multi-entity payroll", body: "Separate legal entities with their own statutory rules, running on one shared employee record." },
    { title: "Dated policy engine", body: "Statutory rules are versioned and dated, so a rule change does not break last year's payruns." },
    { title: "Expense claims", body: "Mobile capture, policy checks at submission, and reimbursement tracked to the bank line." },
    { title: "Approvals", body: "Role-based state machine with delegation, escalation and a complete audit log." },
    { title: "Invoicing", body: "Recurring and one-off invoices, tax handling per jurisdiction, and payment reconciliation." },
    { title: "Inventory", body: "Stock across locations with movement history and reorder thresholds." },
    { title: "Reporting", body: "Management and statutory reports generated from immutable snapshots, not live queries." },
    { title: "Integrations", body: "Bank files, accounting exports and an API for whatever we have not covered." },
    { title: "Access control", body: "Granular roles, so finance sees salaries and line managers do not." },
  ],
  audience: [
    { kicker: "Multi-entity groups", title: "Several companies, one back office", body: "Consolidated reporting with genuine data separation, for groups running two to twenty entities." },
    { kicker: "Services firms", title: "20 to 500 staff", body: "Where headcount has outgrown the spreadsheet but an enterprise ERP would take a year and cost more than the problem." },
    { kicker: "Manufacturing", title: "Stock plus payroll", body: "Inventory movement and shop-floor attendance feeding the same ledger as payroll." },
    { kicker: "Finance teams", title: "Audit-ready by default", body: "Every figure traceable to who approved it and when, without assembling evidence after the fact." },
  ],
  tiers: [
    { name: "Core", price: "$4", unit: "per employee / month", points: ["Up to 50 employees", "Single entity", "Payroll and expenses", "Approvals and audit log", "Standard reports"] },
    { name: "Group", price: "$3", unit: "per employee / month", featured: true, points: ["50 to 500 employees", "Multi-entity, multi-currency", "Everything in Core", "Invoicing and inventory", "Bank file generation", "Priority support"] },
    { name: "Deployed", price: "Custom", unit: "annual licence", points: ["Runs in your own cloud account", "Data residency guaranteed", "Custom statutory rule sets", "Migration and training included", "Named support contact"] },
  ],
  ctaTitle: "Bring us your messiest process.",
  ctaBody: "The multi-entity payroll nobody wants to touch, or the approvals chain that lives in email. That is the demo worth having.",
};

export default function Page() {
  return <ProductPage spec={spec} />;
}
