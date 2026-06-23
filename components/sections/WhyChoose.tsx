import Image from "next/image";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Fast communication when you need it",
  "Dependable delivery and pickup",
  "Local team that knows Las Vegas",
  "Licensed, insured, and professional",
  "Flexible scheduling for any project",
  "Same-day service when available",
];

export default function WhyChoose() {
  return (
    <section className="bg-ssws-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight mb-4">
              Why Choose{" "}
              <span className="text-ssws-blue">Silver State?</span>
            </h2>
            <p className="text-ssws-steel leading-relaxed mb-8">
              We deliver more than dumpsters — we deliver dependability. Our team is committed to
              keeping your projects moving with fast communication, on-time delivery, and local
              service you can count on.
            </p>
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-ssws-blue flex-shrink-0" />
                  <span className="text-ssws-charcoal font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: truck door photo */}
          <div className="relative overflow-hidden min-h-[340px]">
            <Image
              src="/images/truck-door.webp"
              alt="Silver State Waste Solutions branded truck door"
              fill
              className="object-cover object-center"
            />
            {/* Subtle bottom gradient for brand continuity */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ssws-navy/60 to-transparent" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
