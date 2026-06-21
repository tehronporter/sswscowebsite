import Link from "next/link";
import { Home, HardHat, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    desc: "Home cleanouts, moving cleanouts, yard waste, garage cleanouts, and small renovations.",
    href: "/residential",
    bg: "bg-ssws-mist",
    accent: "border-ssws-blue",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Job site cleanup, debris removal, demolition waste, and large-scale construction projects.",
    href: "/commercial",
    bg: "bg-ssws-navy",
    dark: true,
    accent: "border-ssws-skyline",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Business cleanouts, property management, roofing projects, and recurring pickup support.",
    href: "/commercial",
    bg: "bg-ssws-blue",
    dark: true,
    accent: "border-ssws-ice",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            Dumpster Rentals{" "}
            <span className="text-ssws-blue">Made Easy</span>
          </h2>
          <p className="mt-3 text-ssws-steel max-w-xl mx-auto">
            Simple, flexible, and built around your project. We deliver on your schedule and
            handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, href, bg, dark, accent }) => (
            <div
              key={title}
              className={`group ${bg} ${dark ? "text-white" : "text-ssws-charcoal"} p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow border-t-4 ${accent}`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center border-2 ${
                  dark ? "border-white/30" : "border-ssws-blue"
                }`}
              >
                <Icon size={28} className={dark ? "text-white" : "text-ssws-blue"} />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide">{title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-white/80" : "text-ssws-steel"}`}>
                {desc}
              </p>
              <Link
                href={href}
                className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  dark
                    ? "text-ssws-ice hover:text-white"
                    : "text-ssws-blue hover:text-ssws-navy"
                }`}
              >
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
