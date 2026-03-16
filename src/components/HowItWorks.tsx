import { FilePlus, Users, BarChart3 } from 'lucide-react';
import AnimateIn from './AnimateIn';

const steps = [
  {
    icon: FilePlus,
    step: '01',
    title: 'Lawyer Creates a Case',
    desc: 'A lawyer sets up the property transaction with all relevant details, documents, and parties.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Parties Are Invited',
    desc: 'Buyers, sellers, and agents receive invitations to collaborate on the case in real-time.',
  },
  {
    icon: BarChart3,
    step: '03',
    title: 'Everyone Tracks Progress',
    desc: 'All parties have full visibility into case status, tasks, payments, and documents — anytime, anywhere.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Getting started with EzyConvey is simple — three steps to total transparency.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <AnimateIn key={s.step} delay={i * 0.15}>
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl font-bold text-white/10 mb-4">{s.step}</div>
                <s.icon className="text-blue-300 mb-4" size={32} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-blue-200/60 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-400/30" />
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
