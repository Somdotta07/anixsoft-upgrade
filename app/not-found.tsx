import Link from "next/link";
import { Eyebrow } from "@/components/Chrome";

export default function NotFound() {
  return (
    <section className="sec sec-dark" style={{ paddingTop: 120, paddingBottom: 140 }}>
      <div className="wrap">
        <Eyebrow>404</Eyebrow>
        <h1 className="h1">That page moved when we rebuilt the site.</h1>
        <p className="lede">
          The old WordPress URLs are redirected, but a few slipped through.
          Start from one of these.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn-brand">Home</Link>
          <Link href="/work/" className="btn btn-ghost">Case studies</Link>
          <Link href="/contact/" className="btn btn-ghost">Contact</Link>
        </div>
      </div>
    </section>
  );
}
