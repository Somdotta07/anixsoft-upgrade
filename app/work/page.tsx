import type { Metadata } from "next";
import WorkFilter from "@/components/WorkFilter";
import { CTA, PageHead } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Work — websites, platforms, applied AI and mobile apps",
  description:
    "Case studies from Anixsoft: payroll platforms, motion analysis, IoT portals, restaurant sites, assessment systems and mobile apps across eleven countries.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageHead
        eyebrow="Selected work"
        title="Systems in production, not screenshots"
        lede="Sixteen builds and seven mobile apps. Filter by what you need — every website card links to the live site, and every case study includes the problem, the architecture and the number that changed."
      />
      <section className="sec sec-dark">
        <div className="wrap">
          <WorkFilter />
        </div>
      </section>
      <CTA />
    </>
  );
}
