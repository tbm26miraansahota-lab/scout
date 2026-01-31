import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Layered background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,245,59,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.04),transparent_50%)]" />

      {/* Pitch lines accent */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none" aria-hidden="true">
        <circle cx="50%" cy="50%" r="200" stroke="#c4f53b" strokeWidth="0.5" fill="none" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#c4f53b" strokeWidth="0.3" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-medium text-lime-400">Early access open</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Stop losing talent to a{' '}
            <span className="gradient-text">broken system</span>
          </h2>

          <p className="text-lg text-charcoal-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist to get early access when we launch. Or explore the demo to see
            how ScoutX works for coaches, scouts, and players.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="primary" size="lg" to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
              Join Waitlist
            </Button>
            <Button variant="secondary" size="lg" to="/demo/player/arjun-singh">
              View Sample Player Profile
            </Button>
            <Button variant="outline" size="lg" to="/contact">
              Request Demo
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
