import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Weight, CalendarDays } from "lucide-react";

const dumpsters = [
  {
    id: "lowboy",
    name: "20 Yard Lowboy",
    capacity: "For heavy debris",
    rental: "7-10 day rental included",
    idealFor: ["Concrete & Dirt", "Asphalt & Gravel", "Rock & Fill Material", "Home Cleanouts"],
    href: "/dumpster-sizes#lowboy",
    featured: true,
  },
  {
    id: "40-yard",
    name: "40 Yard",
    capacity: "Holds up to 8 tons",
    rental: "7-10 day rental included",
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ssws-navy to-ssws-blue">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} aria-hidden />
                    <svg viewBox="0 0 100 56" width="76" fill="none" className="relative z-10" aria-hidden="true">
                      <rect x="4" y="18" width="92" height="34" rx="2" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.5" strokeWidth="2"/>
                      <path d="M4 18 L14 6 H86 L96 18" stroke="white" strokeOpacity="0.5" strokeWidth="2" fill="white" fillOpacity="0.08"/>
                      <line x1="30" y1="18" x2="30" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <line x1="50" y1="18" x2="50" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <line x1="70" y1="18" x2="70" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <circle cx="20" cy="52" r="4" fill="white" fillOpacity="0.3"/>
                      <circle cx="80" cy="52" r="4" fill="white" fillOpacity="0.3"/>
                    </svg>
                    <span className="font-heading text-white/70 text-sm font-semibold uppercase tracking-widest relative z-10">{d.name}</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-heading text-2xl font-bold text-ssws-blue uppercase">
                  {d.name}
                </h3>
                <div className="flex flex-col gap-1.5 text-ssws-steel text-sm">
                  <span className="flex items-center gap-1.5"><Weight size={14} className="text-ssws-skyline" />{d.capacity}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-ssws-skyline" />{d.rental}</span>
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
