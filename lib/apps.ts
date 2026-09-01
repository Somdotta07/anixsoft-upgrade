export interface MobileApp {
  slug: string;
  name: string;
  client: string;
  country: string;
  platform: string;
  /** Path under /public. Real screenshots are .webp, mockups are .svg */
  image: string;
  /** true = actual screenshot from the shipped app, false = representative mockup */
  real: boolean;
  stack: string[];
  summary: string;
  status?: string;
}

export const MOBILE_APPS: MobileApp[] = [
  {
    slug: "fleet-tracking",
    name: "Fleet Tracking",
    client: "Logistics operator",
    country: "Australia",
    platform: "iOS · Android",
    image: "/work/app-fleet-map.webp",
    real: true,
    stack: ["React Native", "Google Maps SDK", "Node.js"],
    summary:
      "Live vehicle positions on a shared map, with driver status and route history. Built for dispatchers who need one screen, not a dashboard.",
  },
  {
    slug: "fleet-onboarding",
    name: "Fleet — driver onboarding",
    client: "Logistics operator",
    country: "Kolkata",
    platform: "iOS · Android",
    image: "/work/app-fleet-signup.webp",
    real: true,
    stack: ["React Native", "OAuth", "Node.js"],
    summary:
      "Registration and permissions flow designed for drivers signing up on a phone in a depot car park, not at a desk.",
  },
  {
    slug: "weather-widget",
    name: "Site Conditions",
    client: "Field operations",
    country: "Malta",
    platform: "iOS · Android",
    image: "/work/app-weather.webp",
    real: true,
    stack: ["React Native", "Weather API", "Push notifications", "Payment gateway"],
    summary:
      "Home-screen widget with warnings, Jellyfish tracking, for outdoor crews. Glanceable, low battery cost, and legible in direct sunlight.",
  },
  {
    slug: "sales-rep",
    name: "OpsGrid — field sales",
    client: "Distribution business",
    country: "India",
    platform: "Android",
    image: "/work/app-sales-rep.webp",
    real: false,
    status: "In development",
    stack: ["React Native", "Offline sync", "PostgreSQL"],
    summary:
      "Field ordering for salesmen: daily route, customer history, order entry and live stock. Works fully offline and syncs when signal returns. One half of a two-app system.",
  },
  {
    slug: "warehouse-ops",
    name: "OpsGrid — warehouse",
    client: "Distribution business",
    country: "India",
    platform: "Android · rugged devices",
    image: "/work/app-warehouse.webp",
    real: false,
    status: "In development",
    stack: ["React Native", "Node.js", "Barcode scanning","transactional stock control"],
    summary:
      "The other half: picking queues, label printing, inventory counts and vehicle loading. Orders raised by a salesman appear here as a load sheet within seconds.",
  },
  {
    slug: "society-resident",
    name: "CivicLoop — resident app",
    client: "Housing societies",
    country: "India",
    platform: "iOS · Android",
    image: "/work/app-society.webp",
    real: false,
    stack: ["React Native", "Node.js", "Payment gateway"],
    summary:
      "Report an issue with photos and location, then watch the status move. The housing-society configuration of CivicLoop.",
  },
  {
    slug: "restaurant-ordering",
    name: "Restaurant Ordering",
    client: "Castle Taj · Delhi O Delhi",
    country: "Australia",
    platform: "iOS · Android",
    image: "/work/app-restaurant.webp",
    real: false,
    stack: ["React Native", "Stripe", "Kitchen display"],
    summary:
      "Direct ordering for two Sydney restaurants, with one-tap reorder and loyalty that only works on direct channels — built to win volume back from aggregators.",
  },
];
