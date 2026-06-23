import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Weight, CalendarDays, Scale } from "lucide-react";

const dumpsters = [
  {
    id: "lowboy",
    name: "20 Yard Lowboy",
    capacity: "For heavy debris",
    rental: "7-10 day rental included",
    includedTons: "Included tonnage — contact us to confirm",
    idealFor: ["Concrete & Dirt", "Asphalt & Gravel", "Rock & Fill Material", "Home Cleanouts"],
    href: "/dumpster-sizes#lowboy",
    featured: true,
  },
  {
    id: "40-yard",
    name: "40 Yard",
    capacity: "Holds up to 8 tons",
    rental: "7-10 day rental included",
    includedTons: "6 tons included — overage billed beyond that",
    idealFor: ["Large Construction", "Demolition", "Commercial Cleanouts", "Major Renovations"],
    href: "/dumpster-sizes#40-yard",
  },
];

export default function DumpsterSizePreview() {
  return (
    <section className="bg-ssws-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            Popular Dumpster Sizes
          </h2>
          <p className="mt-3 text-ssws-steel">
            Two container types built for the job — from heavy debris to large-scale construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {dumpsters.map((d) => (
            <div
              key={d.id}
              className={`bg-white border-2 ${
                d.featured ? "border-ssws-blue shadow-xl" : "border-gray-200"
              } flex flex-col`}
            >
              {d.featured && (
                <div className="bg-ssws-blue text-white text-center py-1.5 text-xs font-heading font-semibold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              {/* Dumpster image */}
              <div className="relative h-36 border-b border-gray-100 overflow-hidden bg-ssws-navy">
                {d.id === "lowboy" ? (
                  <Image
                    src="/images/dumpster-20yard.webp"
                    alt="Silver State Waste Solutions 20 yard lowboy dumpster"
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <Image
                    src="/images/dumpster-40yard.png"
                    alt="Silver State Waste Solutions 40 yard roll-off dumpster"
                    fill
                    className="object-cover object-center"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-heading text-2xl font-bold text-ssws-blue uppercase">
                  {d.name}
                </h3>
                <div className="flex flex-col gap-1.5 text-ssws-steel text-sm">
                  <span className="flex items-center gap-1.5"><Weight size={14} className="text-ssws-skyline" />{d.capacity}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-ssws-skyline" />{d.rental}</span>
                  <span className="flex items-center gap-1.5"><Scale size={14} className="text-ssws-skyline" />{d.includedTons}</span>
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-ssws-blue uppercase tracking-wide mb-2">
                    Ideal For:
                  </p>
                  <ul className="space-y-1">
                    {d.idealFor.map((item) => (
                      <li key={item} className="text-sm text-ssws-charcoal flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-ssws-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

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

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-ssws-steel text-sm">Not sure what size you need?</p>
          <a
            href="tel:7024600726"
            className="inline-flex items-center gap-2 bg-ssws-blue text-white px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
          >
            Call / Text Us
          </a>
          <Link
            href="/dumpster-sizes"
            className="inline-flex items-center gap-1.5 text-ssws-blue font-semibold text-sm hover:underline"
          >
            View All Details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
