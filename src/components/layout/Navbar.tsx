import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Demo', href: '/demo/scout-search' },
  { label: 'Team', href: '/#team' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavClick(e: React.MouseEvent, href: string) {
    if (!href.includes('#')) return; // let normal links work via <Link>
    e.preventDefault();
    const hash = href.split('#')[1];
    const basePath = href.split('#')[0] || '/';

    if (location.pathname === basePath) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(basePath);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" aria-label="ScoutX Home">
            <div className="w-9 h-9 rounded-lg bg-lime-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-charcoal-950" />
            </div>
            <span className="text-xl font-bold text-white">
              Scout<span className="text-lime-400">X</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname.startsWith(link.href.split('#')[0] || '/')
                    ? link.href.includes('#') ? 'text-charcoal-300 hover:text-white hover:bg-white/5' : 'text-lime-400 bg-lime-400/10'
                    : 'text-charcoal-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" to="/contact">
              Contact
            </Button>
            <Button variant="primary" size="sm" to="/contact">
              Join Waitlist
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-charcoal-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname.startsWith(link.href.split('#')[0] || '/')
                    ? link.href.includes('#') ? 'text-charcoal-300 hover:text-white hover:bg-white/5' : 'text-lime-400 bg-lime-400/10'
                    : 'text-charcoal-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-white/10">
              <Button variant="ghost" size="sm" to="/contact" className="w-full">
                Contact
              </Button>
              <Button variant="primary" size="sm" to="/contact" className="w-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
