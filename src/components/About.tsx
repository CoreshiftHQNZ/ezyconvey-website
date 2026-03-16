import { Shield, Lightbulb, HeartHandshake, Target, Rocket, Users } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <AnimateIn>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">About EzyConvey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-6">
                Australian Legal Technology, Built by Property Lawyers
              </h2>
              <p className="text-navy-800/70 leading-relaxed mb-6">
                We are an Australian legal technology company dedicated to transforming the property law sector 
                through innovative software solutions. Established in early 2023, we leverage cutting-edge technology 
                to streamline legal processes, enhance compliance, and improve efficiency for law firms, conveyancers, 
                real estate professionals, as well as buyers and sellers.
              </p>
              <p className="text-navy-800/70 leading-relaxed mb-8">
                What sets us apart is our deep legal expertise. Our products are developed with direct input from 
                highly experienced property lawyers, ensuring that every feature aligns with real-world legal 
                requirements and best practices.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Reliability', desc: 'Enterprise-grade security and uptime' },
                  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously evolving with industry needs' },
                  { icon: HeartHandshake, title: 'Support', desc: 'Exceptional customer care, always' },
                  { icon: Users, title: 'Expertise', desc: 'Built by lawyers, for lawyers' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50">
                    <item.icon className="text-blue-600 mt-0.5 flex-shrink-0" size={20} strokeWidth={1.5} />
                    <div>
                      <h4 className="font-semibold text-navy-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-navy-800/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — Vision & Mission */}
          <div className="space-y-8">
            <AnimateIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white">
                <Target className="text-blue-300 mb-4" size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-blue-200/70 leading-relaxed text-sm">
                  We envision a future where legal technology revolutionizes the property law sector, 
                  eliminating inefficiencies and reducing complexities. By integrating automation, 
                  artificial intelligence, and secure digital workflows, we aim to set the standard 
                  for modern legal practice, making property transactions faster, more transparent, 
                  and fully compliant.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <Rocket className="text-blue-200 mb-4" size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-blue-100/70 leading-relaxed text-sm">
                  We empower legal professionals with cutting-edge technology, streamlining property 
                  law processes through innovative software solutions. Our mission is to enhance efficiency, 
                  accuracy, and compliance, ensuring seamless transactions and document management for law 
                  firms, conveyancers, and real estate professionals.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="p-8 rounded-2xl border border-blue-100 bg-blue-50/30">
                <h3 className="text-lg font-bold text-navy-800 mb-3">Our Approach</h3>
                <p className="text-navy-800/60 leading-relaxed text-sm">
                  Our approach combines deep legal expertise with advanced technology. We prioritize 
                  user-friendly design, regulatory compliance, and seamless integration with existing 
                  legal workflows. Through continuous innovation and close collaboration with industry 
                  professionals, we develop solutions that address real-world challenges.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
