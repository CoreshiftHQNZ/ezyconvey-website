import { ArrowRight, Download } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <AnimateIn>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Trusted by 100+ Australian law firms</span>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Bringing clarity to property contracts —{' '}
                <span className="text-blue-300">for everyone involved</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-lg text-blue-200/80 max-w-xl mb-8 leading-relaxed">
                Real-time property contract tracking for lawyers, buyers/sellers and agents. 
                All parties. One platform. Total transparency.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25">
                  Book a Demo <ArrowRight size={18} />
                </a>
                <a href="#download" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all">
                  <Download size={18} /> Download App
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right — app screenshots */}
          <AnimateIn delay={0.3} direction="right">
            <div className="relative flex justify-center items-center">
              {/* Desktop screenshot behind */}
              <div className="hidden lg:block absolute -top-8 -right-4 w-[420px] rounded-xl shadow-2xl overflow-hidden border border-white/10 opacity-60">
                <img src="/images/dd147336-f23e-4d9b-aa00-6a4cdf34fa63.webp" alt="EzyConvey web dashboard" className="w-full" />
              </div>
              {/* Main phone */}
              <div className="relative z-10 w-[280px] sm:w-[300px]">
                <img src="/images/d2ce347e-7cdc-40e8-9804-b2a02d380a40.webp" alt="EzyConvey mobile app — agent dashboard" className="w-full rounded-3xl shadow-2xl" />
              </div>
              {/* Second phone offset */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-[220px] z-20">
                <img src="/images/fc03671c-50c3-4057-aa3d-6837c0be2d2f.webp" alt="EzyConvey mobile — case details" className="w-full rounded-3xl shadow-xl border-2 border-white/10" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
