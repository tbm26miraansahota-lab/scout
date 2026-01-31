import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionReveal } from '../ui/SectionReveal';

const personaColors = {
  coach: 'from-lime-400 to-emerald-400',
  parent: 'from-amber-400 to-orange-400',
  scout: 'from-cyan-400 to-blue-400',
  player: 'from-emerald-400 to-teal-400',
};

const personaBorderColors = {
  coach: 'border-l-lime-400/60',
  parent: 'border-l-amber-400/60',
  scout: 'border-l-cyan-400/60',
  player: 'border-l-emerald-400/60',
};

const personaLabels = {
  coach: 'Coach',
  parent: 'Parent',
  scout: 'Scout',
  player: 'Player',
};

export function Testimonials() {
  // Show first 3 for a tighter, more premium layout
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-surface-1/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            badge="Voices from the Field"
            title={
              <>
                What coaches, scouts & parents{' '}
                <span className="gradient-text">told us</span>
              </>
            }
            subtitle="Real quotes from 75+ interviews across Indian grassroots football."
          />
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((testimonial, i) => (
            <SectionReveal key={testimonial.name} delay={0.08 * i}>
              <div
                className={`glass-card p-7 border-l-[3px] ${personaBorderColors[testimonial.persona]} hover:border-lime-400/15 transition-all duration-500 h-full flex flex-col`}
              >
                <Quote className="w-7 h-7 text-charcoal-700/50 mb-4 shrink-0" />
                <blockquote className="text-charcoal-200 text-sm leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                  {/* Gradient avatar circle */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${personaColors[testimonial.persona]} flex items-center justify-center shrink-0`}>
                    <span className="text-sm font-bold text-charcoal-950">
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-charcoal-500 text-xs truncate">{testimonial.role}</div>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/[0.04] text-charcoal-500 border border-white/[0.06] shrink-0 whitespace-nowrap">
                    {personaLabels[testimonial.persona]} · interview
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
