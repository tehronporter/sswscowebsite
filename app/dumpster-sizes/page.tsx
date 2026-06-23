import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Weight, CalendarDays, Scale } from "lucide-react";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Dumpster Sizes | Roll-Off Dumpster Rental Las Vegas",
  description:
    "Choose from 20 yard lowboy and 40 yard dumpsters. Silver State Waste Solutions has the right size for every project in Las Vegas, NV. Call (702) 460-0726.",
};

const dumpsters = [
  {
    id: "lowboy",
    name: "20 Yard Lowboy",
    dims: "8' W × 14' L × 2' H (low profile)",
    capacity: "For heavy debris — concrete, dirt, asphalt",
    rental: "7-10 day rental included",
    includedTons: "Included tonnage — contact us to confirm",
    idealFor: [
      "Concrete & Dirt",
      "Asphalt & Gravel",
      "Rock & Fill Material",
      "Heavy Dense Debris",
      "Ground-Level Loading",
      "Home Cleanouts & Renovations",
    ],
    featured: true,
    note: "The lowboy's low walls make it easy to load heavy materials by hand. Overage tonnage is billed beyond the included amount.",
  },
  {
    id: "40-yard",
    name: "40 Yard",
    dims: "8' W × 22' L × 8' H",
    capacity: "Holds up to 8 tons",
    rental: "7-10 day rental included",
    includedTons: "6 tons included — overage billed beyond that",
    idealFor: [
      "Large Construction Projects",
      "Demolition",
      "Commercial Cleanouts",
      "Major Renovations",
      "Roofing Tear-Offs",
      "Large-Scale Debris",
    ],
    notFor: "Not recommended for concrete, dirt, or heavy dense materials.",
  },
];

export default function DumpsterSizesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ssws-navy py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight">
            Dumpster Sizes{" "}
            <span className="text-ssws-skyline">For Every Project</span>
          </h1>
          <p className="mt-4 text-ssws-ice text-lg max-w-2xl">
            From heavy debris and construction sites to large-scale cleanouts, we have the right
            dumpster for your job. Two container types — built for work that doesn&apos;t stop.
          </p>
        </div>
      </section>

      {/* Size cards */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dumpsters.map((d) => (
              <div
                key={d.id}
                id={d.id}
                className={`bg-white border-2 ${
                  d.featured ? "border-ssws-blue shadow-xl" : "border-gray-200"
                } flex flex-col scroll-mt-24`}
              >
                {d.featured && (
                  <div className="bg-ssws-blue text-white text-center py-1.5 text-xs font-heading font-semibold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                {/* Dumpster photo */}
                <div className="relative h-44 border-b border-gray-100 overflow-hidden bg-ssws-navy">
                  {d.id === "lowboy" ? (
                    <Image
                      src="/images/dumpster-20yard.webp"
                      alt="Silver State Waste Solutions 20 yard lowboy dumpster"
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ssws-navy to-ssws-blue">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} aria-hidden />
                      <svg viewBox="0 0 100 56" width="86" fill="none" className="relative z-10" aria-hidden="true">
                        <rect x="4" y="18" width="92" height="34" rx="2" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.5" strokeWidth="2"/>
                        <path d="M4 18 L14 6 H86 L96 18" stroke="white" strokeOpacity="0.5" strokeWidth="2" fill="white" fillOpacity="0.08"/>
                        <line x1="30" y1="18" x2="30" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
                        <line x1="50" y1="18" x2="50" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
                        <line x1="70" y1="18" x2="70" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
                        <circle cx="20" cy="52" r="4" fill="white" fillOpacity="0.3"/>
                        <circle cx="80" cy="52" r="4" fill="white" fillOpacity="0.3"/>
                      </svg>
                      <span className="font-heading text-white/70 text-sm font-semibold uppercase tracking-widest relative z-10">{d.name}</span>
                      <span className="text-white/40 text-xs relative z-10">{d.dims}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h2 className="font-heading text-3xl font-bold text-ssws-blue uppercase">
                    {d.name}
                  </h2>

                  <div className="space-y-1.5 text-ssws-steel text-sm border-b border-gray-100 pb-4">
                    <p className="flex items-center gap-1.5"><Weight size={14} className="text-ssws-skyline" />{d.capacity}</p>
                    <p className="flex items-center gap-1.5"><CalendarDays size={14} className="text-ssws-skyline" />{d.rental}</p>
                    <p className="flex items-center gap-1.5"><Scale size={14} className="text-ssws-skyline" />{d.includedTons}</p>
                  </div>

                  <div>
                    <p className="text-xs font-heading font-semibold text-ssws-blue uppercase tracking-wide mb-2">
                      Ideal For:
                    </p>
                    <ul className="space-y-1.5">
                      {d.idealFor.map((item) => (
                        <li key={item} className="text-sm text-ssws-charcoal flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ssws-blue flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(d.notFor || d.note) && (
                    <p className="text-xs text-ssws-steel italic border-t border-gray-100 pt-3">
                      {d.notFor ?? d.note}
                    </p>
                  )}

                  <Link
                    href="/contact"
                    className="mt-auto flex items-center justify-center gap-2 bg-ssws-blue text-white py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
                  >
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Help CTA */}
          <div className="mt-12 bg-white border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ssws-mist border-2 border-ssws-blue flex items-center justify-center">
                <Phone size={18} className="text-ssws-blue" />
              </div>
              <div>
                <p className="font-heading font-semibold text-ssws-charcoal uppercase tracking-wide text-sm">
                  Not Sure What Size You Need?
                </p>
                <p className="text-ssws-steel text-xs">
                  Our team is happy to help you choose the right dumpster.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="tel:7024600726"
                className="inline-flex items-center gap-2 bg-ssws-blue text-white px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
              >
                <Phone size={15} />
                Call / Text (702) 460-0726
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-ssws-blue text-ssws-blue px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-mist transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTABand
        headline="Ready to Get Started?"
        subline="Fast, reliable dumpster rentals — call or text us today!"
      />
    </>
  );
}
