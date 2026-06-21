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

          {/* Right: branded panel — swap the inner content for a real grid of photos when client assets arrive */}
          <div className="relative bg-ssws-navy overflow-hidden flex items-center justify-center min-h-[340px]">
            {/* Dot-grid texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #619BD0 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />
            {/* Diagonal accent stripe */}
            <div
              className="absolute -right-8 top-0 bottom-0 w-24 bg-ssws-blue/20 skew-x-6"
              aria-hidden
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 px-10 py-10 text-center">
              {/* Watermark logo */}
              <div className="opacity-20">
                <svg viewBox="0 0 120 50" width="160" fill="white" aria-hidden="true">
                  <text x="0" y="38" fontFamily="sans-serif" fontSize="28" fontWeight="900" letterSpacing="-1">SILVER STATE</text>
                </svg>
              </div>
              <p className="text-ssws-ice/70 text-xs uppercase tracking-widest font-heading">
                Waste Solutions
              </p>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-2">
                {[
                  { num: "3", label: "Trucks Ready" },
                  { num: "Las Vegas", label: "Service Area" },
                  { num: "Same-Day", label: "When Available" },
                ].map(({ num, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <span className="font-heading font-bold text-white text-xl leading-tight">{num}</span>
                    <span className="text-ssws-ice/60 text-xs uppercase tracking-wide leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
