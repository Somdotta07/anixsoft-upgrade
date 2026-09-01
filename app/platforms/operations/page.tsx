import type { Metadata } from "next";
import ProductPage, { type ProductSpec } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "OpsGrid — staff, stock, customer and fleet operations platform",
  description:
    "One system for staff, inventory, customers, QR stock counts and vehicle loading. Admin and manager control, field and warehouse apps. Mobile, web, or both.",
  alternates: { canonical: "/platforms/operations/" },
};

const spec: ProductSpec = {
  eyebrow: "Platform · OpsGrid",
  title: "The whole operation on one screen, finally",
  lede:
    "Staff, stock, customers, orders and vehicles in a single system — with a manager view that shows what is actually happening right now, and field apps that work in a warehouse with no signal.",
  demoParam: "operations",
  hero: "/platform/ops-hero.webp",
  heroAlt: "OpsGrid — operations dashboard, QR stock scanning and vehicle loading screens",
  claim:
    "Most businesses do not lack data. They lack it <em>in one place, at the moment someone has to decide something</em>.",
  screens: [
    {
      image: "/platform/ops-dashboard.webp",
      label: "Admin & manager",
      title: "Today, at a glance",
      body:
        "Who is on shift, what stock is worth, how many orders are open, which vehicles are out, and what needs attention before it becomes a problem. One screen, refreshed live.",
    },
    {
      image: "/platform/ops-scan.webp",
      label: "Warehouse",
      title: "Stock counts by QR scan",
      body:
        "Scan the bin label, confirm the count, and a variance is flagged for review instead of quietly corrupting your numbers. Works offline and syncs when signal returns.",
    },
    {
      image: "/platform/ops-fleet.webp",
      label: "Dispatch",
      title: "Loading status, live",
      body:
        "Every vehicle with its route, driver, load progress and delay status. Dispatch stops phoning the bay to ask how far along they are.",
    },
  ],
  shapes: [
    {
      sector: "Distribution",
      title: "Wholesalers and distributors",
      body:
        "Salesmen raise orders on the road; the warehouse sees them as pick lists within seconds; loading and despatch close the loop. This is the two-app configuration we build most often.",
    },
    {
      sector: "Retail chains",
      title: "Multi-branch retail",
      body:
        "Stock across every branch on one ledger, with transfers, reorder points and per-branch performance visible to head office without a nightly export.",
    },
    {
      sector: "Manufacturing",
      title: "Shop floor and stores",
      body:
        "Raw material consumption, work-in-progress and finished goods, tied to attendance and shift data so cost per unit is a number rather than a guess.",
    },
    {
      sector: "Services",
      title: "Field service businesses",
      body:
        "Swap vehicle loading for job scheduling and van stock. Engineers see their day, consume parts against a job, and the office sees it immediately.",
    },
    {
      sector: "Hospitality",
      title: "Restaurant and kitchen groups",
      body:
        "Ingredient stock, wastage, supplier orders and staff rosters across several outlets, with the same manager dashboard.",
    },
    {
      sector: "Any size",
      title: "From one depot to twenty",
      body:
        "Start with stock and staff at a single site, add branches, vehicles and customers as you grow. The data model was built multi-site from day one.",
    },
  ],
  features: [
    { title: "Staff and roles", body: "Attendance, shifts and granular permissions, so a manager sees their branch and an admin sees everything." },
    { title: "Inventory", body: "Multi-location stock with bins, batches, reorder points and full movement history." },
    { title: "QR and barcode", body: "Scan to count, scan to pick, scan to load. Any Android phone works; rugged scanners if you have them." },
    { title: "Customers", body: "Accounts, credit limits, order history and outstanding balances, visible to the salesman on the road." },
    { title: "Orders", body: "Raised in the field or the office, routed to the warehouse as a pick list within seconds." },
    { title: "Vehicle loading", body: "Load sheets per vehicle with live progress, delay flags and driver assignment." },
    { title: "Label printing", body: "Bin, pick and despatch labels to Zebra or any network printer, straight from the phone." },
    { title: "Approvals", body: "Discounts, credit extensions and write-offs routed for approval with a full audit trail." },
    { title: "Offline first", body: "Warehouses and rural routes lose signal. Work continues and syncs when it returns." },
    { title: "Reporting", body: "Despatch, stock ageing, salesman performance and branch comparison, exportable to Tally or Excel." },
    { title: "Alerts", body: "Low stock, overdue loads and unusual variances pushed to the person who can act on them." },
    { title: "Audit trail", body: "Every count, movement and approval attributable to a person and a time." },
  ],
  ai: [
    {
      title: "Demand forecasting and reorder points",
      body:
        "Reorder levels set from actual movement, seasonality and lead times rather than a number someone typed in three years ago. The system proposes; a human still approves.",
    },
    {
      title: "Variance and anomaly detection",
      body:
        "A count that does not fit the pattern gets flagged the same day rather than surfacing at the annual stocktake. This is usually where the system pays for itself.",
    },
    {
      title: "Load and route optimisation",
      body:
        "Suggested load sequences and delivery ordering based on drop points, vehicle capacity and traffic patterns, so the last drop is not an hour out of the way.",
    },
    {
      title: "Ask your operation a question",
      body:
        "Plain-language queries over your own data — which customers slipped this quarter, which SKU is dying, which route is consistently late — without waiting on someone to write a report.",
    },
  ],
  delivery: [
    { title: "Linked mobile apps", body: "Typically two: one for field sales, one for warehouse and loading. They talk to each other, so an order becomes a pick list instantly." },
    { title: "Web back office", body: "Admin and manager functions in a browser, because nobody wants to reconcile a month-end on a phone." },
    { title: "One app or several", body: "Some clients want a single app that changes by role. Others want them separate so a driver never sees pricing. Both are supported." },
    { title: "Your infrastructure", body: "Runs in our cloud or yours. On-premises where stock and customer data has to stay inside the building." },
    { title: "Hardware you already own", body: "Standard Android phones for scanning; rugged devices and label printers supported where you have them." },
    { title: "Integration", body: "Feeds Tally, existing accounting or an ERP rather than demanding you throw it out." },
  ],
  ctaTitle: "Bring us the process that keeps breaking.",
  ctaBody:
    "The stock count that never reconciles, the orders that get lost between the road and the warehouse, the loading bay nobody can see into. That is the demo worth having.",
};

export default function Page() {
  return <ProductPage spec={spec} />;
}
