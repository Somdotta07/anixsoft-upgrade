"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

function Mark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <i style={{ left: 0, top: 0, width: 9, height: 9 }} />
      <i style={{ right: 0, top: 0, width: 9, height: 9, opacity: 0.55 }} />
      <i style={{ left: 0, bottom: 0, width: 9, height: 9, opacity: 0.55 }} />
      <i style={{ right: 0, bottom: 0, width: 9, height: 9, opacity: 0.25 }} />
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo">
          <Mark />
          ANIXSOFT
        </Link>

        <div className="nav-links">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={path.startsWith(n.href) ? "on" : undefined}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact/" className="nav-cta">
            Request a demo
          </Link>
        </div>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className={"mobile-menu" + (open ? " open" : "")}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <Link href="/contact/" onClick={() => setOpen(false)}>
          Request a demo
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: 14 }}>
              <Mark />
              ANIXSOFT
            </Link>
            <p
              style={{
                color: "var(--text-mute-light)",
                fontSize: 14,
                lineHeight: 1.62,
                maxWidth: "34ch",
              }}
            >
              Product engineering and applied AI. Building since 2015 from
              Kolkata, for clients in eleven countries.
            </p>
          </div>

          <div>
            <h5>Products</h5>
            <Link href="/forge/">Anix Forge</Link>
            <Link href="/platforms/society/">Society Manager</Link>
            <Link href="/platforms/business/">Business Suite</Link>
          </div>

          <div>
            <h5>Company</h5>
            <Link href="/work/">Work</Link>
            <Link href="/services/">Services</Link>
            <Link href="/writing/">Writing</Link>
            <Link href="/about/">About</Link>
          </div>

          <div>
            <h5>Contact</h5>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link href="/contact/">Book a call</Link>
            <Link href="/india/">India enquiries</Link>
          </div>
        </div>

        <div className="foot-note">
          <span>© {new Date().getFullYear()} Anixsoft. All rights reserved.</span>
          <span className="mono">Kolkata, India · Serving AU · MT · US · IN</span>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow mono">
      <span className="rule" />
      <span>{children}</span>
    </div>
  );
}

export function CTA({
  title = "Tell us the hard part. That is the bit we want.",
  body = "A 20-minute call, no deck. Bring the problem you have not been able to hand to anyone else.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="sec sec-dark">
      <div className="wrap">
        <div className="cta">
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="btn-row">
            <Link href="/contact/" className="btn btn-dark">
              Book a 20-minute call
            </Link>
            <Link href="/forge/" className="btn btn-ghost-dark">
              See Anix Forge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="sec-deep page-head">
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="h1">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </header>
  );
}
