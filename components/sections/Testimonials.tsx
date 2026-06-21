import Link from "next/link";
import { Star } from "lucide-react";

// Placeholder reviews — replace with real Google reviews after client provides Google Business Profile link
const reviews = [
  {
    name: "Marcus T.",
    location: "Henderson, NV",
    rating: 5,
    text: "Called in the morning, dumpster was at my house by noon. Exactly what I needed for my garage cleanout. Price was fair and the driver was professional.",
  },
  {
    name: "Diana R.",
    location: "North Las Vegas, NV",
    rating: 5,
    text: "Used Silver State for a full roof tear-off. They dropped the dumpster right where I needed it and picked it up the next day after we finished. Couldn't have been easier.",
  },
  {
    name: "Jorge M.",
    location: "Las Vegas, NV",
    rating: 5,
    text: "I've used a few dumpster companies in Vegas and these guys are the most responsive. Texts and calls answered fast. Will definitely use them again for my next project.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            What Our <span className="text-ssws-blue">Customers Say</span>
          </h2>
          <p className="mt-3 text-ssws-steel max-w-xl mx-auto">
            Las Vegas homeowners and contractors trust Silver State for fast delivery and honest service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-ssws-mist border border-gray-200 p-6 flex flex-col gap-3">
              <StarRow count={r.rating} />
              <p className="text-ssws-charcoal text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="border-t border-gray-200 pt-3">
                <p className="font-heading font-semibold text-ssws-charcoal text-sm uppercase tracking-wide">
                  {r.name}
                </p>
                <p className="text-ssws-steel text-xs">{r.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-ssws-steel text-sm mb-3">
            Happy with your service? Leave us a review on Google.
          </p>
          {/* Replace href with real Google Business Profile URL once client provides it */}
          <Link
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ssws-blue text-ssws-blue px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-mist transition-colors"
          >
            Leave a Google Review
          </Link>
        </div>
      </div>
    </section>
  );
}
