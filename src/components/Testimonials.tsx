import { Quote } from 'lucide-react';
import AnimateIn from './AnimateIn';

const testimonials = [
  {
    quote: "EzyConvey has completely transformed how we manage property transactions. The built-in task system means nothing falls through the cracks, and our clients love the transparency.",
    name: "Sarah Mitchell",
    role: "Property Lawyer",
    firm: "Mitchell & Associates, QLD",
  },
  {
    quote: "As a first-time buyer, the process was so much less stressful knowing I could track everything in real-time. I always knew exactly where my purchase was up to.",
    name: "James Chen",
    role: "Property Buyer",
    firm: "Brisbane, QLD",
  },
  {
    quote: "The agent dashboard gives me instant visibility across all my running cases. I can track every transaction without chasing lawyers for updates — it's a game changer.",
    name: "Rebecca Torres",
    role: "Real Estate Agent",
    firm: "Pacific Realty, NSW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-navy-800/60 max-w-2xl mx-auto">
              Trusted by legal professionals and property stakeholders across Australia.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <Quote className="text-blue-200 mb-4" size={28} />
                <p className="text-navy-800/70 leading-relaxed text-sm flex-1 mb-6">"{t.quote}"</p>
                <div className="border-t border-blue-50 pt-4">
                  <div className="font-semibold text-navy-800 text-sm">{t.name}</div>
                  <div className="text-xs text-navy-800/50">{t.role}</div>
                  <div className="text-xs text-blue-600/70">{t.firm}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
