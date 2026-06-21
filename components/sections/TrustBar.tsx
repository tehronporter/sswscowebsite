import { ShieldCheck, Users, Clock, Handshake } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured for your peace of mind.",
  },
  {
    icon: Users,
    title: "Local & Family Owned",
    desc: "Proudly serving our community with honest, dependable service.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Fast, reliable delivery when you need it most.",
  },
  {
    icon: Handshake,
    title: "Built on Integrity",
    desc: "We do what we say and stand behind our work.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-ssws-blue flex items-center justify-center">
                <Icon size={20} className="text-ssws-blue" />
              </div>
              <div>
                <p className="font-heading font-semibold text-ssws-charcoal uppercase tracking-wide text-sm">
                  {title}
                </p>
                <p className="text-ssws-steel text-xs mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
