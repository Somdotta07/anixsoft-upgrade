# Anixsoft — website

Next.js 15 (App Router) + TypeScript. Static export, so the built output is plain
HTML/CSS/JS that any host can serve — including your existing hosting.

---

## 1. Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## 2. Build

```bash
npm run build        # writes the whole site to ./out
```

`out/` is what gets uploaded. Nothing on the server needs Node.

---

## 3. Before you go live — replace these

All in **`lib/site.ts`**:

| Field | Replace with |
|---|---|
| `email` | your real address |
| `phone` | your real number |
| `calcom` | your Cal.com link, e.g. `anixsoft/20min` (free at cal.com) |
| `formEndpoint` | your Formspree ID from formspree.io (free tier: 50/month) |

Also:
- **Product screenshots** — `components/ProductPage.tsx` still renders a dashed
  placeholder for the two platform product pages. Put PNGs in `public/screens/`
  and swap the `<div className="shot-note">` for an `<img>`.
- **Work screenshots** are already in `public/work/` (1200x750 WebP). To replace
  one, drop in a new file with the same name — no code change.
- **Logo** is `public/logo.png`, background already knocked out to transparent.
- **Case study content** — `lib/projects.ts`. Every project has `problem`,
  `approach`, `architecture`, `outcome` and a headline metric. **The metrics in
  there now are plausible placeholders — replace them with your real numbers
  before launch.** Never publish a number you can't defend on a call.
- **Blog posts** — `lib/posts.ts`. Three drafts are written. Edit or replace.

---

## 4. Deploy to your existing hosting (auto-update from GitHub)

1. Push this repo to GitHub.
2. In the repo: **Settings → Secrets and variables → Actions → New secret**, add:
   - `FTP_SERVER` — e.g. `ftp.anixsoft.net`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. Open `.github/workflows/deploy.yml` and set `server-dir` to your web root
   (usually `/public_html/`).
4. Push to `main`. GitHub Actions builds and uploads automatically.

That's the workflow you wanted: **push to GitHub → site updates**, with your
existing host serving the traffic.

There's a commented rsync/SSH option in the same file if your host supports SSH
(faster and more reliable than FTP — use it if you can).

### Alternative: Cloudflare Pages
Connect the GitHub repo, set build command `npm run build`, output directory
`out`. Free, allows commercial use, and you can drop the workflow file.

---

## 5. The .htaccess matters

`public/.htaccess` is copied into `out/` on every build. It handles:

- **Forcing HTTPS** — fixes the mixed-content problem on the current site
- **301 redirects** from every old WordPress URL, so you keep the SEO authority
- **410 Gone** for `/cart/` and `/my-account/` — tells Google the dead
  WooCommerce pages are permanently removed rather than temporarily broken
- Pretty URLs, caching, gzip, security headers

If your host is nginx rather than Apache, translate these rules — don't skip them.

---

## 6. Also do this at launch

- Point `anixsoft.in` at `anixsoft.net` with a site-wide 301. Right now the two
  domains split your authority and the old site links visitors away from itself.
- Submit `https://anixsoft.net/sitemap.xml` in Google Search Console.
- Add an OG image at `public/og.png` (1200×630) and reference it in
  `app/layout.tsx` under `openGraph.images`.
- Keep a full backup of the WordPress site for 60 days. Don't delete anything
  until Search Console shows clean crawls.

---

## Structure

```
app/
  page.tsx                  Home — generator hero, services, pipeline, work, proof
  forge/                    Anix Forge product page
  platforms/society/        Society Manager
  platforms/business/       Business Suite
  work/                     Filterable case study index
  work/[slug]/              Full case study
  services/                 Capabilities, engagement models, process, stack
  writing/                  Essay index
  writing/[slug]/           Essay
  about/                    Timeline, beliefs, countries, offices
  contact/                  Qualifying form + Cal.com embed
  india/                    Local market page — INR pricing, GST, WhatsApp
  sitemap.ts robots.ts not-found.tsx globals.css layout.tsx

components/
  Chrome.tsx        Nav, Footer, CTA, PageHead, Eyebrow
  Swarm.tsx         The generator hero (signature element)
  Pipeline.tsx      Six-stage Forge animation
  ProductPage.tsx   Shared template for both platform products
  WorkFilter.tsx    Category filtering
  ContactForm.tsx   Budget / timeline / type qualification
  Counter.tsx       Live sites-generated counter

lib/
  site.ts       Config — edit this first
  projects.ts   Case study content
  posts.ts      Essay content
```

## Adding a case study

Append an object to `PROJECTS` in `lib/projects.ts`. The index page, detail page,
sitemap and related-work cards all pick it up automatically. No other file changes.
