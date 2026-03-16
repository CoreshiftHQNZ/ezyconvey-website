import { Building2, Users, UserCheck } from 'lucide-react';
import AnimateIn from './AnimateIn';

const stats = [
  { icon: Building2, value: '100+', label: 'Law Firms', color: 'text-blue-600' },
  { icon: Users, value: '500+', label: 'Lawyers & Solicitors', color: 'text-navy-800' },
  { icon: UserCheck, value: '1,000+', label: 'Buyers, Sellers & Agents', color: 'text-blue-400' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold text-navy-800/50 uppercase tracking-wider mb-10">
            Trusted across Australia
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
                <stat.icon className={`mx-auto mb-4 ${stat.color}`} size={32} strokeWidth={1.5} />
                <div className="text-4xl font-bold text-navy-800 mb-1">{stat.value}</div>
                <div className="text-sm text-navy-800/60 font-medium">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
