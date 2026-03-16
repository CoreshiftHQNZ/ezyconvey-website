import AnimateIn from './AnimateIn';

const screens = [
  { src: '/images/64c352b4-f118-423a-ae54-6fe04431454e.webp', alt: 'Lawyer dashboard with tasks and calculator', label: 'Lawyer Dashboard' },
  { src: '/images/fc03671c-50c3-4057-aa3d-6837c0be2d2f.webp', alt: 'Case details with status timeline', label: 'Case Timeline' },
  { src: '/images/e6a9c8d0-b0d1-4686-9c36-b71d73b9b845.webp', alt: 'Secure file management', label: 'File Management' },
  { src: '/images/fde8df8a-eea7-420e-b983-9da4ef2949bd.webp', alt: 'Client property updates', label: 'Property Updates' },
  { src: '/images/4b697207-9702-45fb-b2b3-c2f6a96a20f0.webp', alt: 'Task management and payment schedule', label: 'Tasks & Payments' },
  { src: '/images/bff91fa1-132d-477f-a4bd-81e875bfd4c7.webp', alt: 'Client overview', label: 'Client Overview' },
];

export default function AppShowcase() {
  return (
    <section id="product" className="py-24 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              See EzyConvey in Action
            </h2>
            <p className="text-lg text-navy-800/60 max-w-2xl mx-auto">
              Designed for clarity. Built for speed. Available on web and mobile.
            </p>
          </div>
        </AnimateIn>

        {/* Desktop screenshot full-width */}
        <AnimateIn delay={0.1}>
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-blue-100 max-w-4xl mx-auto">
            <img src="/images/dd147336-f23e-4d9b-aa00-6a4cdf34fa63.webp" alt="EzyConvey web dashboard" className="w-full" />
          </div>
        </AnimateIn>

        {/* Mobile screenshots grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {screens.map((s, i) => (
            <AnimateIn key={s.alt} delay={i * 0.08}>
              <div className="group">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 group-hover:shadow-xl transition-shadow">
                  <img src={s.src} alt={s.alt} className="w-full" />
                </div>
                <p className="text-center text-xs text-navy-800/50 font-medium mt-3">{s.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
