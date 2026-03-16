import { useState } from 'react';
import { LayoutDashboard, FileText, ListChecks, ShieldCheck, Calculator, Home, CreditCard, Eye, Mail, Clock } from 'lucide-react';
import AnimateIn from './AnimateIn';

type Tab = 'lawyers' | 'buyers' | 'agents';

const tabs: { key: Tab; label: string }[] = [
  { key: 'lawyers', label: 'For Lawyers' },
  { key: 'buyers', label: 'For Buyers & Sellers' },
  { key: 'agents', label: 'For Agents' },
];

const features: Record<Tab, { icon: typeof LayoutDashboard; title: string; desc: string }[]> = {
  lawyers: [
    { icon: LayoutDashboard, title: 'One Dashboard. Total Visibility', desc: 'Accessible anytime, anywhere — our platform is designed for lawyers on both web and mobile.' },
    { icon: FileText, title: 'Secure File Management', desc: 'Store, organize, and share all case-related documents in one safe, centralized location.' },
    { icon: ListChecks, title: 'Built-in Task Management', desc: "Our system's built-in to-do tasks guide lawyers through exactly what needs to be done at each stage." },
    { icon: ShieldCheck, title: 'Faster Identity Verification', desc: 'Verify identities in seconds — easier, faster, and accessible anywhere, anytime.' },
    { icon: Clock, title: 'Case Status Timeline', desc: 'Track case progress with a clear status timeline and payment tracking all in one place.' },
    { icon: Calculator, title: 'Built-in Calculators', desc: 'Transfer duty, land tax estimator, title registration fee, and Easy CGT — all at your fingertips.' },
  ],
  buyers: [
    { icon: Home, title: 'Property Updates in Real-Time', desc: 'Stay informed with live updates on your property transaction from anywhere.' },
    { icon: Eye, title: 'Ownership Percentage Tracking', desc: 'See your ownership breakdown and case progress at a glance.' },
    { icon: ListChecks, title: 'Task Management', desc: 'Know exactly what you need to do and when — never miss a deadline.' },
    { icon: CreditCard, title: 'Payment Schedule Visibility', desc: 'Track all payments with clear due dates and status indicators.' },
    { icon: FileText, title: 'Document Access & Upload', desc: 'Upload and access all your documents in one secure place.' },
    { icon: Calculator, title: 'Property Calculators', desc: 'Estimate costs with built-in transfer duty, land tax, and CGT calculators.' },
  ],
  agents: [
    { icon: LayoutDashboard, title: 'Case Overview Dashboard', desc: 'See all your running cases — buying and selling — in one clear view.' },
    { icon: ListChecks, title: 'To-Do Lists with Due Dates', desc: 'Stay on top of every task with clear deadlines and status tracking.' },
    { icon: CreditCard, title: 'Payment Tracking', desc: 'Monitor all payments across your cases in real-time.' },
    { icon: Mail, title: 'Invitation Management', desc: 'Send and manage case invitations to all parties seamlessly.' },
    { icon: Clock, title: 'Recently Viewed Cases', desc: 'Quickly jump back to cases you were working on recently.' },
    { icon: Eye, title: 'Full Case Visibility', desc: 'Complete transparency across all transaction stages for every property.' },
  ],
};

const screenshots: Record<Tab, { src: string; alt: string }> = {
  lawyers: { src: '/images/dd147336-f23e-4d9b-aa00-6a4cdf34fa63.webp', alt: 'Lawyer web dashboard' },
  buyers: { src: '/images/bff91fa1-132d-477f-a4bd-81e875bfd4c7.webp', alt: 'Buyer/seller property overview' },
  agents: { src: '/images/d2ce347e-7cdc-40e8-9804-b2a02d380a40.webp', alt: 'Agent dashboard' },
};

export default function Features() {
  const [active, setActive] = useState<Tab>('lawyers');

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              Tailored for Every Party
            </h2>
            <p className="text-lg text-navy-800/60 max-w-2xl mx-auto">
              Whether you're a lawyer, buyer, seller, or agent — EzyConvey gives you the tools you need.
            </p>
          </div>
        </AnimateIn>

        {/* Tabs */}
        <AnimateIn delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-navy-800/5 rounded-xl p-1.5 gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    active === tab.key
                      ? 'bg-navy-800 text-white shadow-md'
                      : 'text-navy-800/60 hover:text-navy-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature list */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features[active].map((f, i) => (
              <AnimateIn key={f.title} delay={i * 0.05}>
                <div className="p-5 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <f.icon className="text-blue-600 mb-3" size={24} strokeWidth={1.5} />
                  <h3 className="font-semibold text-navy-800 mb-1.5 text-sm">{f.title}</h3>
                  <p className="text-xs text-navy-800/60 leading-relaxed">{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Screenshot */}
          <AnimateIn delay={0.2} direction="right">
            <div className="flex justify-center">
              <div className={`rounded-2xl shadow-2xl overflow-hidden border border-blue-100 ${
                active === 'lawyers' ? 'max-w-[500px]' : 'max-w-[280px]'
              }`}>
                <img
                  src={screenshots[active].src}
                  alt={screenshots[active].alt}
                  className="w-full"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
