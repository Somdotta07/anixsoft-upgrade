import type { Metadata } from "next";
import WorkFilter from "@/components/WorkFilter";
import { CTA, PageHead } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Work — platforms, applied AI, web and mobile",
  description:
    "Case studies from Anixsoft: payroll platforms, motion analysis, document intelligence, booking systems and generated storefronts across eleven countries.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageHead
        eyebrow="Case studies"
        title="Systems in production, not screenshots"
        lede="Each of these is running right now. Every one includes the problem, the architecture and the number that changed."
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
