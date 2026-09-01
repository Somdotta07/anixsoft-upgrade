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
  url2?: string;
  image?: string;
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
    image: "/work/vistacloud.webp",
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
    image: "/work/vuemotion.webp",
    name: "VueMotion",
    category: "ai",
    country: "United States",
    year: "2025",
    tagline: "Athletic performance analysis from ordinary phone video",
    summary:
      "Pose extraction and joint-angle tracking that turns a coach's phone into a motion-capture rig, with reporting they can read.",
    metric: "60 fps",
    metricLabel: "on-device motion capture",
    stack: ["Python", "PyTorch", "MediaPipe", "React", "FastAPI"],
    duration: "9 months",
    team: "3 engineers, 1 ML specialist",
    url: "https://www.vuemotion.com/",
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
    slug: "novel-aquatech-portal",
    image: "/work/novel-aquatech-portal.webp",
    name: "Novel Aquatech Portal",
    category: "platform",
    country: "Australia",
    year: "2025",
    tagline: "Engineering end-to-end software, IoT, and clean-tech solutions for urban challenges.",
    summary:
      "Site monitoring, service scheduling and client reporting for a water treatment company running dozens of installations.",
    metric: "40+",
    metricLabel: "sites monitored live",
    stack: ["React", "Node.js", "PostgreSQL", "MQTT", "Chart.js", "Azure"],
    duration: "5 months",
    team: "3 engineers",
    url: "https://novelaquatech.com/",
    url2: "https://portal.novelaquatech.com/",
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
    image: "/work/malta-experience.webp",
    name: "The Malta Experience",
    category: "web",
    country: "Malta",
    year: "2024",
    tagline: "Booking and content platform for a heritage attraction",
    summary:
      "Multilingual booking built for a visitor pattern that triples in summer and nearly disappears in February.",
    metric: "5 langs",
    metricLabel: "served from one codebase",
    stack: ["Next.js", "TypeScript", "Stripe", "Headless CMS", "PHP"],
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
    image: "/work/castle-taj.webp",
    name: "Castle Taj",
    category: "web",
    country: "Australia",
    year: "2023",
    tagline: "Restaurant ordering across web and native mobile",
    summary:
      "Ordering, table booking and catering enquiries for a Castle Hill institution, with kitchen-side order routing.",
    metric: "2 apps",
    metricLabel: "iOS and Android shipped",
    stack: ["React", "PHP", "MySQL", "Stripe"],
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
    image: "/work/ninas-arts.webp",
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
    image: "/work/dview-ai.webp",
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
    image: "/work/pictures-of-england.webp",
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
    image: "/work/salon-solution.webp",
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

  {
    slug: "autosales",
    image: "/work/autosales.webp",
    name: "AutoSales",
    category: "platform",
    country: "United States",
    year: "2024",
    tagline: "Dealer inventory and lead management",
    summary:
      "Vehicle inventory, pricing and buyer enquiries in one place, with listings syndicated out to the marketplaces dealers actually sell on.",
    metric: "1 source",
    metricLabel: "of truth across every listing site",
    stack: ["React", "Node.js", "PostgreSQL", "Feed syndication"],
    duration: "6 months",
    team: "3 engineers",
    url: "https://autosales.com/",
    problem: [
      "Inventory lived in one system, photos in another, and every marketplace listing was maintained by hand. A sold car could stay live on three sites for days.",
    ],
    approach: [
      "One canonical vehicle record, with outbound feeds generated per marketplace. Marking a car sold retires it everywhere in a single write.",
    ],
    architecture: [
      { step: "Intake", detail: "VIN decode, photo upload and condition capture from a phone on the forecourt." },
      { step: "Record", detail: "Canonical vehicle record with pricing history and status." },
      { step: "Syndicate", detail: "Per-marketplace feed generation with format and field mapping." },
      { step: "Leads", detail: "Enquiries from every channel routed to the right salesperson." },
    ],
    outcome: [
      "Listing errors and stale adverts largely eliminated.",
      "Lead response time cut because enquiries stopped landing in a shared inbox.",
    ],
  },
  {
    slug: "urnopatro",
    name: "Urnopatro",
    category: "web",
    country: "India",
    year: "2023",
    tagline: "Regional publishing and readership platform",
    summary:
      "Editorial publishing with Bengali script support, category browsing and a reading experience built for low-bandwidth mobile connections.",
    metric: "Bengali",
    metricLabel: "full script and typography support",
    stack: ["PHP", "MySQL", "Responsive CSS"],
    duration: "4 months",
    team: "2 engineers",
    url: "https://urnopatro.in",
    problem: [
      "Regional-language publishing carries real technical constraints: font rendering, search that understands the script, and readers largely on older Android phones over patchy mobile data.",
    ],
    approach: [
      "We optimised for the actual device profile rather than the one we would have preferred. Subset fonts, aggressive image compression and server-rendered pages.",
    ],
    architecture: [
      { step: "Authoring", detail: "Editor tooling with Bengali input and preview." },
      { step: "Delivery", detail: "Server-rendered pages with subset webfonts." },
      { step: "Search", detail: "Script-aware indexing and matching." },
    ],
    outcome: [
      "Readable and fast on entry-level Android hardware.",
      "Editorial team publishes without developer involvement.",
    ],
  },
  {
    slug: "charnock-city",
    image: "/work/charnock-city.webp",
    name: "Charnock City",
    category: "web",
    country: "India",
    year: "2019",
    tagline: "Property development and enquiry portal",
    summary:
      "Project showcase, floor plans, availability and enquiry capture for a residential development in Kolkata.",
    metric: "Floor plans",
    metricLabel: "browsable per unit type",
    stack: ["WordPress", "PHP", "MySQL"],
    duration: "3 months",
    team: "2 engineers",
    url: "https://charnockcity.com",
    problem: [
      "Buyers wanted to compare unit types and see what was still available; the sales team wanted qualified enquiries rather than phone numbers with no context.",
    ],
    approach: [
      "Floor plans made browsable per unit type, with enquiry forms attached to a specific unit so the sales team knows what the buyer is actually looking at.",
    ],
    architecture: [
      { step: "Showcase", detail: "Project galleries and amenity detail." },
      { step: "Plans", detail: "Unit-type floor plans with availability status." },
      { step: "Enquiry", detail: "Unit-scoped enquiry capture routed to sales." },
    ],
    outcome: [
      "Enquiries arrive with context, so the first sales call is a real conversation.",
    ],
  },
  {
    slug: "pure-indian-cooking",
    image: "/work/pure-indian-cooking.webp",
    name: "Pure Indian Cooking",
    category: "web",
    country: "Australia",
    year: "2018",
    tagline: "Restaurant booking and online ordering",
    summary:
      "Table booking and takeaway ordering for a Sydney restaurant, with menu management the owner can run without calling us.",
    metric: "2 flows",
    metricLabel: "booking and ordering, one site",
    stack: ["WordPress", "PHP", "Payment gateway"],
    duration: "2 months",
    team: "2 engineers",
    url: "https://pureindiancooking.com",
    problem: [
      "Two separate things a customer might want — a table or a takeaway — competing for the same screen without confusing either.",
    ],
    approach: [
      "Both actions given equal weight in the header rather than burying one. Menu and pricing editable by the owner.",
    ],
    architecture: [
      { step: "Menu", detail: "Owner-editable menu with per-item availability." },
      { step: "Booking", detail: "Table reservation with covers and sitting times." },
      { step: "Ordering", detail: "Takeaway cart with pickup slots and payment." },
    ],
    outcome: [
      "Menu changes stopped being a support ticket.",
    ],
  },

  {
    slug: "delhi-o-delhi",
    image: "/work/delhi-o-delhi.webp",
    name: "Delhi O Delhi",
    category: "web",
    country: "Australia",
    year: "2023",
    tagline: "Restaurant site built around two competing calls to action",
    summary:
      "Ordering and booking given equal weight, with seasonal promotions the owner can run without a developer.",
    metric: "2 CTAs",
    metricLabel: "order and book, neither buried",
    stack: ["WordPress", "PHP", "Payment gateway"],
    duration: "3 months",
    team: "2 engineers",
    url: "https://www.delhiodelhi.com.au/",
    problem: [
      "A customer arriving on the homepage wants one of two very different things — a table tonight or delivery in twenty minutes. Most restaurant sites bury one of them.",
    ],
    approach: [
      "Both actions given identical visual weight in the header and again over the hero, so neither journey is the second-class option.",
      "Seasonal offer bar is owner-editable, because promotions that need a developer never actually run.",
    ],
    architecture: [
      { step: "Menu", detail: "Owner-editable menu with per-item availability and dietary flags." },
      { step: "Booking", detail: "Table reservations with covers, sittings and function enquiries." },
      { step: "Ordering", detail: "Takeaway cart with pickup windows and card payment." },
      { step: "Promotions", detail: "Scheduled offer bar, editable from the dashboard." },
    ],
    outcome: [
      "Both revenue paths get equal prominence rather than one cannibalising the other.",
      "Promotions now go live the same day they are decided.",
    ],
  },
  {
    slug: "novel-aquatech",
    image: "/work/novel-aquatech.webp",
    name: "Novel Aquatech",
    category: "web",
    country: "Australia",
    year: "2025",
    tagline: "Corporate site for an IoT and engineering firm",
    summary:
      "Public-facing site covering IoT, ConstructIQ, engineering and research divisions, with a login into the operations portal.",
    metric: "4 divisions",
    metricLabel: "one coherent site",
    stack: ["React", "Node.js", "Responsive CSS"],
    duration: "3 months",
    team: "2 engineers",
    url: "https://novelaquatech.com/",
    problem: [
      "Four fairly different business lines under one roof, each with its own audience, competing for the same homepage.",
    ],
    approach: [
      "A single positioning statement up top, then clearly separated division paths — so a municipal buyer and an industrial client each find their route within one scroll.",
    ],
    architecture: [
      { step: "Positioning", detail: "One hero claim covering all four divisions." },
      { step: "Divisions", detail: "Separate paths for IoT, ConstructIQ, engineering and research." },
      { step: "Portal", detail: "Authenticated hand-off into the operations dashboard." },
    ],
    outcome: [
      "Enquiries arrive pre-sorted by division instead of landing in one inbox.",
    ],
  },
  {
    slug: "saaaitech",
    image: "/work/saaaitech.webp",
    name: "Saaaitech Assessments",
    category: "platform",
    country: "India",
    year: "2020",
    tagline: "Online exam preparation and assessment system",
    summary:
      "Test series and mock exams for security and fireman certification, with separate business, candidate and assessor roles.",
    metric: "3 roles",
    metricLabel: "business, candidate, assessor",
    stack: ["PHP", "MySQL", "Bootstrap"],
    duration: "5 months",
    team: "2 engineers",
    url: "https://app.saaaitech.com",
    problem: [
      "Three groups needed genuinely different things from one system: employers commissioning assessments, candidates sitting them, and assessors marking them.",
    ],
    approach: [
      "Role-scoped interfaces over a shared question bank, with timing and scoring rules held centrally so an assessment behaves identically wherever it is taken.",
    ],
    architecture: [
      { step: "Bank", detail: "Versioned question bank with categorisation and difficulty." },
      { step: "Assembly", detail: "Test series assembled from the bank with timing rules." },
      { step: "Delivery", detail: "Candidate sitting with autosave and time enforcement." },
      { step: "Marking", detail: "Assessor queue with scoring and moderation." },
    ],
    outcome: [
      "Mock tests became self-service, removing manual scheduling.",
      "Assessors work from a queue instead of email attachments.",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
