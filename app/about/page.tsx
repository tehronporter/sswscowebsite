import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About Us | Silver State Waste Solutions",
  description:
    "Silver State Waste Solutions is a local, family-owned dumpster rental company proudly serving Las Vegas, North Las Vegas, and Henderson, NV.",
};

const values = [
  {
    title: "Reliable Communication",
    desc: "We answer calls and texts promptly. You'll always know what's happening with your delivery.",
  },
  {
    title: "On-Time Delivery",
    desc: "We show up when we say we will. Your project timeline matters to us.",
  },
  {
    title: "Local Knowledge",
    desc: "We know Las Vegas. Our team understands the local regulations, neighborhoods, and logistics.",
  },
  {
    title: "Honest Pricing",
    desc: "No hidden fees. We give you a straight quote and stand behind it.",
  },
  {
    title: "Clean & Professional",
    desc: "Our trucks and containers are maintained to professional standards. We take pride in our work.",
  },
  {
    title: "Family Owned",
    desc: "We're a local business built on community trust. Every customer matters to us personally.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ssws-navy py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-ssws-skyline font-heading font-semibold uppercase tracking-widest text-sm mb-3">
            About Us
          </p>
          <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight max-w-2xl leading-tight">
            A Las Vegas Company{" "}
            <span className="text-ssws-skyline">You Can Count On</span>
          </h1>
          <p className="mt-6 text-ssws-ice text-lg leading-relaxed max-w-2xl">
            Silver State Waste Solutions is a locally owned and operated dumpster rental company
            serving homeowners, contractors, and businesses across Las Vegas, North Las Vegas, and
            Henderson.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:7024600726"
              className="inline-flex items-center gap-2 bg-ssws-blue text-white px-8 py-4 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-action transition-colors"
            >
              <Phone size={18} />
              Call / Text Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight mb-6">
                Built on <span className="text-ssws-blue">Dependability</span>
              </h2>
              <div className="space-y-4 text-ssws-steel leading-relaxed">
                <p>
                  We started Silver State Waste Solutions with a simple goal: provide Las Vegas with
                  a dumpster rental service that actually shows up on time, communicates clearly, and
                  makes the whole process easy.
                </p>
                <p>
                  We&apos;ve served homeowners clearing decades of clutter, contractors working
                  tight construction schedules, and businesses managing large-scale property
                  cleanouts. Every job teaches us something about what Las Vegas customers actually
                  need.
                </p>
                <p>
                  What we&apos;ve learned: people want a company that answers the phone, delivers
                  when promised, and charges a fair price. That&apos;s what we do.
                </p>
              </div>
            </div>

            {/* Photo grid — swap divs with next/image when client photos arrive */}
            <div className="grid grid-cols-2 gap-3">
              {/* Fleet Photo */}
              <div className="col-span-2 bg-gradient-to-br from-ssws-navy to-ssws-blue h-52 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden />
                <svg viewBox="0 0 80 40" width="72" fill="none" className="relative z-10 mb-2" aria-hidden>
                  <rect x="2" y="14" width="56" height="22" rx="1" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <path d="M58 28 L64 18 L74 18 L78 28 Z" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <circle cx="14" cy="37" r="3.5" fill="white" fillOpacity="0.3"/>
                  <circle cx="46" cy="37" r="3.5" fill="white" fillOpacity="0.3"/>
                  <circle cx="66" cy="37" r="3.5" fill="white" fillOpacity="0.3"/>
                </svg>
                <span className="text-white/60 text-xs font-heading uppercase tracking-widest relative z-10">Fleet Photo</span>
              </div>
              {/* Team Photo */}
              <div className="bg-gradient-to-br from-ssws-blue to-ssws-navy h-36 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} aria-hidden />
                <svg viewBox="0 0 40 40" width="40" fill="none" className="relative z-10 mb-2" aria-hidden>
                  <circle cx="14" cy="12" r="6" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <circle cx="26" cy="12" r="6" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <path d="M4 34 Q4 24 14 24 Q20 24 20 24 Q20 24 26 24 Q36 24 36 34" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                </svg>
                <span className="text-white/60 text-xs font-heading uppercase tracking-widest relative z-10">Team Photo</span>
              </div>
              {/* Job Site Photo */}
              <div className="bg-gradient-to-br from-ssws-navy to-ssws-blue h-36 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} aria-hidden />
                <svg viewBox="0 0 40 40" width="40" fill="none" className="relative z-10 mb-2" aria-hidden>
                  <rect x="4" y="22" width="32" height="14" rx="1" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <path d="M8 22 L12 14 L28 14 L32 22" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <line x1="16" y1="22" x2="16" y2="36" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
                  <line x1="24" y1="22" x2="24" y2="36" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
                  <circle cx="10" cy="36" r="2.5" fill="white" fillOpacity="0.3"/>
                  <circle cx="30" cy="36" r="2.5" fill="white" fillOpacity="0.3"/>
                </svg>
                <span className="text-white/60 text-xs font-heading uppercase tracking-widest relative z-10">Job Site Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
              Our <span className="text-ssws-blue">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 flex gap-4">
                <CheckCircle size={22} className="text-ssws-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-ssws-charcoal uppercase tracking-wide text-sm mb-1">
                    {v.title}
                  </h3>
                  <p className="text-ssws-steel text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Let's Work Together"
        subline="Reach out today for a fast, honest quote."
      />
    </>
  );
}
