export type Category = "platform" | "ai" | "web" | "mobile";

export interface Project {
  slug: string;
  name: string;
  category: Category;
  country: string;
  year: string;
  tagline: string;
  summary: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  duration: string;
  team: string;
  problem: string[];
  approach: string[];
  architecture: { step: string; detail: string }[];
  outcome: string[];
  url?: string;
}

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "platform", label: "Platforms" },
  { id: "ai", label: "Applied AI" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

export const PROJECTS: Project[] = [
  {
    slug: "vistacloud",
    name: "VistaCloud",
    category: "platform",
    country: "India",
    year: "2024",
    tagline: "Payroll and expense management for distributed teams",
    summary:
      "Multi-entity payroll with a statutory compliance engine and an approvals workflow that finance teams actually trust.",
    metric: "12k+",
    metricLabel: "payslips processed monthly",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    duration: "7 months",
    team: "4 engineers, 1 designer",
    url: "https://vistacloud.in/",
    problem: [
      "The client ran payroll for several legal entities across three states, each with different statutory deductions, and reconciled everything by hand in spreadsheets at month end.",
      "Errors were caught late, expense claims sat in email threads, and a single missed filing deadline carried real penalty exposure.",
    ],
    approach: [
      "We modelled statutory rules as versioned, dated policy objects rather than hard-coded logic, so a rule change in one state does not require a redeploy and historical payruns stay reproducible.",
      "Approvals became a state machine with a full audit trail, so any figure on a payslip can be traced back to who approved it and when.",
    ],
    architecture: [
      { step: "Ingest", detail: "Attendance, leave and expense claims arrive via API and CSV import, normalised into a single ledger." },
      { step: "Policy engine", detail: "Dated rule sets resolve deductions per entity, per state, per employee grade." },
      { step: "Payrun", detail: "Immutable payrun snapshots — reruns produce a new version, never overwrite." },
      { step: "Approvals", detail: "Role-based state machine with delegation and full audit log." },
      { step: "Disbursement", detail: "Bank file generation plus reconciliation against posted transactions." },
      { step: "Reporting", detail: "Statutory filings and management reports generated from the same snapshot." },
    ],
    outcome: [
      "Month-end close dropped from nine working days to two.",
      "Zero missed statutory deadlines since launch.",
      "Expense reimbursement turnaround fell from three weeks to four days.",
    ],
  },
  {
    slug: "vuemotion",
    name: "VueMotion",
    category: "ai",
    country: "United States",
    year: "2025",
    tagline: "Athletic performance analysis from ordinary phone video",
    summary:
      "Pose extraction and joint-angle tracking that turns a coach's phone into a motion-capture rig, with reporting they can read.",
    metric: "60 fps",
    metricLabel: "on-device motion capture",
    stack: ["Python", "PyTorch", "MediaPipe", "React Native", "FastAPI"],
    duration: "9 months",
    team: "3 engineers, 1 ML specialist",
    problem: [
      "Motion capture that gives coaches useful biomechanical feedback normally requires a lab, markers and a specialist to interpret the output.",
      "Coaches in the field have a phone and about ninety seconds of attention between drills.",
    ],
    approach: [
      "We ran pose estimation on-device to avoid upload latency and to keep athlete video off our servers entirely — a privacy decision that also removed a whole class of compliance work.",
      "The hard problem was not detection but interpretation: raw joint coordinates mean nothing to a coach. We built a rules layer that converts angle sequences into plain-language observations tied to specific frames.",
    ],
    architecture: [
      { step: "Capture", detail: "Standard phone camera, 60 fps, no markers or calibration rig." },
      { step: "Pose", detail: "On-device landmark extraction; only derived keypoints leave the phone." },
      { step: "Smoothing", detail: "Temporal filtering to remove jitter without flattening real movement." },
      { step: "Kinematics", detail: "Joint angles, velocities and asymmetry indices computed per frame." },
      { step: "Interpretation", detail: "Rules layer maps sequences to coach-readable observations." },
      { step: "Report", detail: "Frame-linked feedback, shareable with the athlete." },
    ],
    outcome: [
      "Analysis turnaround went from days in a lab to under a minute on the sideline.",
      "No athlete video is transmitted or stored, which removed the client's largest compliance obstacle.",
    ],
  },
  {
    slug: "novel-aquatech",
    name: "Novel Aquatech Portal",
    category: "platform",
    country: "India",
    year: "2025",
    tagline: "Operations portal for water treatment installations",
    summary:
      "Site monitoring, service scheduling and client reporting for a water treatment company running dozens of installations.",
    metric: "40+",
    metricLabel: "sites monitored live",
    stack: ["React", "Node.js", "PostgreSQL", "MQTT", "Chart.js"],
    duration: "5 months",
    team: "3 engineers",
    url: "https://portal.novelaquatech.com/",
    problem: [
      "Service history, sensor readings and client commitments lived in three separate spreadsheets and one engineer's memory.",
      "When a client asked whether their plant had been serviced on schedule, answering took a phone call and half a day.",
    ],
    approach: [
      "We built the client-facing report first and worked backwards. If the portal could not produce the report a client wanted, the underlying data model was wrong.",
      "Telemetry ingestion was designed to tolerate intermittent connectivity — installations lose network regularly, and a gap in readings must not look like a fault.",
    ],
    architecture: [
      { step: "Devices", detail: "On-site controllers publish readings over MQTT with local buffering." },
      { step: "Ingest", detail: "Broker writes to a time-series store; gaps recorded explicitly, not inferred." },
      { step: "Rules", detail: "Threshold and trend alerts routed to the right service engineer." },
      { step: "Scheduling", detail: "Service intervals per contract, with automatic escalation." },
      { step: "Portal", detail: "Client-facing dashboard and downloadable compliance reports." },
    ],
    outcome: [
      "Client reporting became self-service, removing roughly a day a week of manual work.",
      "Service-level breaches are now caught before the client notices them.",
    ],
  },
  {
    slug: "malta-experience",
    name: "The Malta Experience",
    category: "web",
    country: "Malta",
    year: "2024",
    tagline: "Booking and content platform for a heritage attraction",
    summary:
      "Multilingual booking built for a visitor pattern that triples in summer and nearly disappears in February.",
    metric: "5 langs",
    metricLabel: "served from one codebase",
    stack: ["Next.js", "TypeScript", "Stripe", "Headless CMS"],
    duration: "4 months",
    team: "2 engineers, 1 designer",
    url: "https://themaltaexperience.com",
    problem: [
      "Seasonal traffic swings meant the old site was either overprovisioned or falling over, and every language was a separate site to maintain.",
    ],
    approach: [
      "Static generation with incremental revalidation: showtimes and availability stay fresh while everything else is served as a static file, so a traffic spike costs almost nothing.",
      "One content model, five locales, one deployment.",
    ],
    architecture: [
      { step: "Content", detail: "Headless CMS with locale-aware content model." },
      { step: "Build", detail: "Static generation per locale at build time." },
      { step: "Availability", detail: "Live showtime lookup via edge function." },
      { step: "Checkout", detail: "Stripe with local payment methods per market." },
    ],
    outcome: [
      "Peak-season hosting costs fell substantially while page load improved.",
      "Adding a sixth language is now a content task, not an engineering project.",
    ],
  },
  {
    slug: "castle-taj",
    name: "Castle Taj & Delhi O Delhi",
    category: "mobile",
    country: "Australia",
    year: "2023",
    tagline: "Restaurant ordering across web and native mobile",
    summary:
      "Two Sydney restaurants, shared ordering infrastructure, kitchen-side order routing and repeat-customer flows.",
    metric: "2 apps",
    metricLabel: "iOS and Android shipped",
    stack: ["React Native", "PHP", "MySQL", "Stripe"],
    duration: "6 months",
    team: "3 engineers",
    url: "https://www.castletaj.com.au/",
    problem: [
      "Both venues were paying percentage commission to aggregators on every order, including from regulars who would have ordered direct.",
    ],
    approach: [
      "The apps were built to win back repeat customers specifically — saved orders, one-tap reorder, and loyalty that only works on direct channels.",
      "Kitchen display was designed for a noisy pass with wet hands, not for a product demo.",
    ],
    architecture: [
      { step: "Ordering", detail: "Shared cart and menu service across both venues." },
      { step: "Routing", detail: "Orders pushed to kitchen display with audible escalation." },
      { step: "Payments", detail: "Card and wallet, with tokenised reorder." },
      { step: "Loyalty", detail: "Direct-channel-only rewards to shift volume off aggregators." },
    ],
    outcome: [
      "A meaningful share of repeat orders moved from aggregators to direct channels.",
      "Commission savings covered the build within the first year.",
    ],
  },
  {
    slug: "ninas-arts",
    name: "Nina's Arts",
    category: "web",
    country: "Portugal",
    year: "2024",
    tagline: "Studio storefront for a working ceramicist",
    summary:
      "Inventory, made-to-order commissions and international shipping rules for a one-person studio.",
    metric: "3 days",
    metricLabel: "brief to live store",
    stack: ["Anix Forge", "Next.js", "Stripe"],
    duration: "3 days",
    team: "1 engineer",
    url: "https://www.ninassarts.com/",
    problem: [
      "A working artist with no budget for a six-week agency engagement, selling one-off pieces where every item is unique stock of one.",
    ],
    approach: [
      "This was the first commercial build to come out of Anix Forge. The generator produced the site structure, copy and layout in minutes; a single engineer then spent three days on the commission workflow and shipping rules.",
    ],
    architecture: [
      { step: "Generate", detail: "Forge produced structure, copy and design system from the brief." },
      { step: "Refine", detail: "Human pass on tone and photography treatment." },
      { step: "Commerce", detail: "Unique-stock inventory and made-to-order commission flow." },
      { step: "Shipping", detail: "Per-region rules with fragile-item handling." },
    ],
    outcome: [
      "Live in three days at a fraction of a conventional build.",
      "Became the internal proof case for productising Forge.",
    ],
  },
  {
    slug: "dview-ai",
    name: "dView.ai",
    category: "ai",
    country: "India",
    year: "2023",
    tagline: "Document intelligence for field operations",
    summary:
      "Extraction and validation pipeline that turns photographed paperwork into structured, checkable records.",
    metric: "94%",
    metricLabel: "fields extracted without review",
    stack: ["Python", "FastAPI", "OCR", "React"],
    duration: "6 months",
    team: "3 engineers",
    url: "https://dview.ai/",
    problem: [
      "Field staff photographed forms on phones in poor light; back-office staff retyped them. The retyping was the bottleneck and the source of most errors.",
    ],
    approach: [
      "We treated confidence as a first-class output. Anything below threshold goes to a review queue rather than silently entering the system — the pipeline is judged on how little it needs a human, not on pretending it never does.",
    ],
    architecture: [
      { step: "Capture", detail: "Mobile capture with on-device quality checks before upload." },
      { step: "Preprocess", detail: "Deskew, denoise and region detection." },
      { step: "Extract", detail: "Field-level extraction with per-field confidence scores." },
      { step: "Validate", detail: "Cross-field rules catch internally inconsistent documents." },
      { step: "Review", detail: "Low-confidence fields queued for human confirmation." },
    ],
    outcome: [
      "Manual data entry reduced by roughly nine tenths.",
      "Error rate fell because humans now check flagged fields instead of retyping everything.",
    ],
  },
  {
    slug: "pictures-of-england",
    name: "Pictures of England",
    category: "web",
    country: "United Kingdom",
    year: "2019",
    tagline: "Community photo archive at scale",
    summary:
      "A long-running photographic archive of English towns, villages and landmarks with heavy contributor traffic.",
    metric: "100k+",
    metricLabel: "images served",
    stack: ["PHP", "MySQL", "Solr", "Memcached"],
    duration: "Ongoing",
    team: "2 engineers",
    url: "https://www.picturesofengland.com/",
    problem: [
      "A large, growing archive with search that had stopped scaling and page loads that suffered under contributor activity.",
    ],
    approach: [
      "Search moved to a dedicated index rather than hammering the primary database, and heavily-read pages were cached aggressively with targeted invalidation.",
    ],
    architecture: [
      { step: "Index", detail: "Dedicated full-text search index, rebuilt incrementally." },
      { step: "Cache", detail: "Object caching on read-heavy pages with targeted invalidation." },
      { step: "Media", detail: "Derivative generation and CDN delivery." },
    ],
    outcome: [
      "Search response times improved by an order of magnitude.",
      "The archive has continued running with minimal intervention for years.",
    ],
  },
  {
    slug: "salon-solution",
    name: "Salon Website Solution",
    category: "platform",
    country: "Multi-market",
    year: "2025",
    tagline: "Multi-tenant booking for independent salons",
    summary:
      "One codebase, many salons: booking, staff rosters and client records, each on their own domain and branding.",
    metric: "1 build",
    metricLabel: "unlimited salon tenants",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Anix Forge"],
    duration: "5 months",
    team: "3 engineers",
    problem: [
      "Independent salons each wanted their own site and their own brand, but none could justify a bespoke build.",
    ],
    approach: [
      "A multi-tenant core with per-tenant theming generated by Forge. Onboarding a new salon is a form, not a project.",
    ],
    architecture: [
      { step: "Tenant", detail: "Isolated data per salon with shared application core." },
      { step: "Theme", detail: "Forge generates brand, palette and layout from the salon's details." },
      { step: "Booking", detail: "Staff-aware availability with service durations and buffers." },
      { step: "Domain", detail: "Custom domain and SSL provisioned automatically." },
    ],
    outcome: [
      "New salon onboarding went from a multi-week build to under an hour.",
      "Became the template for how we productise vertical software.",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
