import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Features', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo/scout-search' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-lime-400 flex items-center justify-center">
                <Zap className="w-5 h-5 text-charcoal-950" />
              </div>
              <span className="text-xl font-bold text-white">
                Scout<span className="text-lime-400">X</span>
              </span>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-4 max-w-xs">
              India's tech-powered grassroots football scouting infrastructure. Making talent visible, verified, and discoverable.
            </p>
            <div className="space-y-2 text-sm text-charcoal-500">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@scoutx.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-charcoal-300 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-charcoal-500 hover:text-lime-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-charcoal-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-600">
            &copy; {new Date().getFullYear()} ScoutX. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-700">
            Built for Indian grassroots football.
          </p>
        </div>
      </div>
    </footer>
  );
}
