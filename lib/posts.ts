export interface Post {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  topic: string;
  excerpt: string;
  body: { type: "h2" | "p" | "ul" | "callout"; text?: string; items?: string[] }[];
}

export const POSTS: Post[] = [
  {
    slug: "thousand-websites-one-run",
    title: "How we generate 1,000 unique websites in a single run",
    date: "2026-08-14",
    readingTime: "9 min",
    topic: "Anix Forge",
    excerpt:
      "The interesting problem was never generation. It was making a thousand outputs that do not look like a thousand outputs.",
    body: [
      { type: "p", text: "Generating one website from a prompt is a solved problem and has been for a while. Generating a thousand in one batch is a different exercise, because the failure mode changes. With one site you worry about quality. With a thousand you worry about sameness — and sameness is much harder to detect from inside the system that produced it." },
      { type: "h2", text: "The batch is the unit, not the site" },
      { type: "p", text: "Our first version generated each site independently. Every individual result was fine. Viewed as a grid of thumbnails, the batch was obviously machine-made: the same three-column feature section, the same hero rhythm, the same six adjectives. Nothing was wrong with any one site, and everything was wrong with the set." },
      { type: "p", text: "So we made the batch the unit of evaluation. Every generated site is diffed against the others in its run across layout archetype, palette distance, type pairing and copy n-grams. If a site lands too close to a sibling, it is regenerated with those regions constrained." },
      { type: "callout", text: "The rule that fixed most of it: no output may share more than a three-word sequence with any other output in the same batch, outside of proper nouns." },
      { type: "h2", text: "Compositional grammar, not template library" },
      { type: "p", text: "A template library has a ceiling equal to its size. We instead defined a grammar of section types, each with valid neighbours and valid internal arrangements, and sample compositions from it. The number of reachable layouts is combinatorial rather than enumerated, which is what stops the ceiling from existing." },
      { type: "h2", text: "Where it costs money" },
      { type: "ul", items: [
        "Copy generation dominates token spend; layout selection is nearly free.",
        "Regeneration from similarity checks adds roughly 8–12% overhead on a large batch.",
        "Image treatment, not image generation, is where quality is won or lost.",
        "Build and deploy parallelise cleanly and stop being the bottleneck above about 50 sites.",
      ]},
      { type: "h2", text: "What we would do differently" },
      { type: "p", text: "We spent too long improving individual site quality before building batch-level evaluation. The batch metrics would have told us which individual improvements actually mattered. If you are building something similar, build the measurement first." },
    ],
  },
  {
    slug: "cost-per-generated-site",
    title: "What a generated website actually costs to produce",
    date: "2026-07-02",
    readingTime: "6 min",
    topic: "Economics",
    excerpt:
      "An honest breakdown of compute, storage and human time per site at batch sizes from 10 to 1,000.",
    body: [
      { type: "p", text: "Most published numbers about AI-generated websites quietly exclude the parts that dominate the bill. Here is ours, including the parts that are inconvenient." },
      { type: "h2", text: "The line items" },
      { type: "ul", items: [
        "Model inference for copy and structure — scales linearly with site count.",
        "Similarity checking and regeneration — scales superlinearly with batch size.",
        "Asset processing — flat per site, but sensitive to image count.",
        "Build and deploy — cheap, parallel, largely fixed.",
        "Human review — the real cost, and the one nobody publishes.",
      ]},
      { type: "h2", text: "Why per-site cost falls then rises" },
      { type: "p", text: "Cost per site drops steeply up to roughly a hundred sites as fixed overhead amortises, then creeps back up as similarity checking becomes quadratic-ish against the growing batch. We cap effective comparison windows to keep this manageable, at some cost to diversity guarantees." },
      { type: "h2", text: "The honest conclusion" },
      { type: "p", text: "Generation is cheap. Deciding what is good enough to ship is not. Any vendor quoting you a per-site price without describing their review process is quoting you the easy half." },
    ],
  },
  {
    slug: "generated-sites-not-look-generated",
    title: "Stopping generated sites from looking generated",
    date: "2026-05-20",
    readingTime: "7 min",
    topic: "Design systems",
    excerpt:
      "Four signals that give away machine-made design, and what we changed to remove each one.",
    body: [
      { type: "p", text: "There is a recognisable look to machine-generated design right now. It is not that it is ugly — it is that it is average in a very specific way. These are the four tells we found and what we did about them." },
      { type: "h2", text: "1. Uniform vertical rhythm" },
      { type: "p", text: "Generated pages tend to give every section the same vertical padding. Human designers vary it constantly to signal importance. We now assign a weight to each section and derive spacing from it." },
      { type: "h2", text: "2. Palette by formula" },
      { type: "p", text: "Sampling hues at even intervals around a colour wheel produces palettes that are technically valid and visibly synthetic. We sample from curated palette families instead, then perturb within a bounded range." },
      { type: "h2", text: "3. Type pairing from the same five families" },
      { type: "p", text: "Model output gravitates to a handful of very common typefaces. We maintain an explicit pairing set with usage weights, deliberately under-weighting the obvious choices." },
      { type: "h2", text: "4. Copy that describes rather than says" },
      { type: "p", text: "The strongest tell is language. Generated copy defaults to describing the category — 'quality solutions for your business' — rather than saying something specific. We constrain generation to require at least one concrete, checkable detail per section." },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
