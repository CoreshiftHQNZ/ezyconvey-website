import { ArrowRight } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to streamline your property transactions?
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="text-lg text-blue-200/70 max-w-2xl mx-auto mb-10">
            Join hundreds of Australian law firms, agents, and property buyers already using EzyConvey 
            for faster, more transparent conveyancing.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:ejm@ejmadvisory.com.au" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25 text-lg">
              Book a Demo <ArrowRight size={20} />
            </a>
          </div>
        </AnimateIn>

        {/* App download badges */}
        <AnimateIn delay={0.3}>
          <div id="download" className="flex justify-center gap-4">
            <a href="#" className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-6 py-3 flex items-center gap-3 transition-colors">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-white/60 text-[10px] leading-tight">Download on the</div>
                <div className="text-white font-semibold text-sm leading-tight">App Store</div>
              </div>
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-6 py-3 flex items-center gap-3 transition-colors">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z"/>
              </svg>
              <div className="text-left">
                <div className="text-white/60 text-[10px] leading-tight">GET IT ON</div>
                <div className="text-white font-semibold text-sm leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
