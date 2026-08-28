import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, Eyebrow } from "@/components/Chrome";
import { POSTS, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/writing/${p.slug}/` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date },
  };
}

export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Anixsoft" },
  };

  return (
    <>
      <header className="sec-deep page-head">
        <div className="wrap-narrow">
          <Eyebrow>
            {post.topic} ·{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric", month: "long", year: "numeric",
            })}{" "}
            · {post.readingTime}
          </Eyebrow>
          <h1 className="h1" style={{ fontSize: "clamp(32px,5vw,58px)" }}>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
        </div>
      </header>

      <article className="sec sec-dark">
        <div className="wrap-narrow">
          <div className="prose">
            {post.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "p") return <p key={i}>{b.text}</p>;
              if (b.type === "callout")
                return <div className="callout" key={i}><p>{b.text}</p></div>;
              return (
                <ul key={i}>
                  {b.items?.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              );
            })}
          </div>
        </div>
      </article>

      <section className="sec sec-light">
        <div className="wrap">
          <Eyebrow>Keep reading</Eyebrow>
          <div className="grid-3">
            {more.map((p) => (
              <Link href={`/writing/${p.slug}/`} className="card" key={p.slug}>
                <span className="tag mono">{p.topic}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
