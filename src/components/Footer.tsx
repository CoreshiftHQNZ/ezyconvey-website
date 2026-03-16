import Logo from './Logo';
import { Mail } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Screenshots', href: '#product' },
    { label: 'Download App', href: '#download' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="h-8 mb-4" variant="light" />
            <p className="text-blue-200/50 text-sm leading-relaxed mb-6 max-w-xs">
              An Australian legal technology company dedicated to transforming property transactions 
              through innovative software solutions.
            </p>
            <a href="mailto:ejm@ejmadvisory.com.au" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm transition-colors">
              <Mail size={16} />
              ejm@ejmadvisory.com.au
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-blue-200/50 hover:text-blue-200 text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/40 text-xs">
            © 2023–{new Date().getFullYear()} EzyConvey. All rights reserved.
          </p>
          <p className="text-blue-200/30 text-xs">
            Available for lawyers, buyers/sellers, and agents on iOS, Android & Web
          </p>
        </div>
      </div>
    </footer>
  );
}
