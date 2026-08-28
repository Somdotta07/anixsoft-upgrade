import type { Metadata } from "next";
import Link from "next/link";
import { CTA, PageHead } from "@/components/Chrome";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — engineering notes from Anixsoft",
  description:
    "Technical essays on generation systems, applied AI economics and design at scale, written by the team that builds them.",
  alternates: { canonical: "/writing/" },
};

export default function WritingPage() {
  return (
    <>
      <PageHead
        eyebrow="Writing"
        title="Notes from inside the build"
        lede="Engineering essays about the systems we ship — including the parts that did not work. Roughly monthly."
      />
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="grid-3">
            {POSTS.map((p) => (
              <Link href={`/writing/${p.slug}/`} className="card" key={p.slug}>
                <span className="tag mono">{p.topic}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="result">
                  <span>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "numeric", month: "short", year: "numeric",
                    })}{" · "}{p.readingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
