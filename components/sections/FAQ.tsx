"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What's the difference between the lowboy and the 15-yard dumpster?",
    a: "The lowboy is designed for heavy, dense materials like concrete, dirt, asphalt, and rock. It has low side walls (2 feet) so you can easily load heavy debris by hand, and it's priced to account for weight — not volume. The 15-yard is taller and suited for lighter bulk materials: household cleanouts, roofing shingles, wood, furniture, and yard waste.",
  },
  {
    q: "What can I put in a dumpster?",
    a: "Most construction debris, household junk, furniture, appliances, yard waste, roofing materials, wood, and general cleanout items are acceptable. Items that cannot go in: hazardous materials (paint, chemicals, oil, asbestos), tires, batteries, and electronics. Not sure about a specific item? Give us a call and we'll let you know.",
  },
  {
    q: "How long is the rental period?",
    a: "All rentals include a 7–10 day rental period. If you need the dumpster longer, contact us and we can arrange an extension for an additional daily fee.",
  },
  {
    q: "Can I extend my rental?",
    a: "Yes. If you need more time, just call or text us before your pickup date and we'll extend the rental. Extensions are billed at a daily rate. We'd rather keep you covered than rush your project.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Las Vegas, North Las Vegas, Henderson, Summerlin, Spring Valley, Enterprise, Whitney, Paradise, and surrounding areas in the Las Vegas Valley. Not sure if we cover your location? Give us a call — we'll confirm.",
  },
  {
    q: "Is delivery and pickup included in the price?",
    a: "Yes. Every rental includes one delivery and one pickup. The price we quote you covers drop-off, the rental period, and final pickup. The only variable is if you exceed the included weight limit — we'll let you know upfront if that applies to your load.",
  },
  {
    q: "How much notice do you need for delivery?",
    a: "We can typically deliver same-day or next-day depending on availability. Same-day service is available when we have open schedule slots — call or text early in the morning for the best chance. We recommend scheduling 24 hours ahead when possible.",
  },
  {
    q: "Where can the dumpster be placed?",
    a: "We can place the dumpster in your driveway, on a private property surface, or in the street if a permit is required by your municipality. Let us know the placement location when you book and we'll advise on any requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            Frequently Asked <span className="text-ssws-blue">Questions</span>
          </h2>
          <p className="mt-3 text-ssws-steel">
            Still have questions? Call or text us at{" "}
            <a href="tel:7024600726" className="text-ssws-blue font-semibold hover:underline">
              (702) 460-0726
            </a>{" "}
            — we&apos;re happy to help.
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold text-ssws-charcoal uppercase tracking-wide text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-ssws-blue transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="pb-4 pr-8">
                  <p className="text-ssws-steel text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
