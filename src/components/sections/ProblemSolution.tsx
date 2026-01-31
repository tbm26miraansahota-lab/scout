import { Link } from 'react-router-dom';
import { X, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionReveal } from '../ui/SectionReveal';

const problems = [
  'Coaches track stats in Excel and WhatsApp groups',
  'Talent stays invisible outside the local district',
  'Scouts travel 200+ days/year relying on word-of-mouth',
  'Parents have no credible way to showcase their child',
  'No verified performance data for sports quota applications',
];

const solutions = [
  'One dashboard for all team stats, growth, and highlights',
  'Verified player profiles shareable with any scout or academy',
  'Scout search with filters — position, age, metrics, location',
  'Shareable link with highlights, verified stats, and match data',
  'AI-assisted video analysis creates standardized metrics',
];

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            badge="The Problem"
            title={
              <>
                A multi-million dollar talent pipeline runs on{' '}
                <span className="gradient-text">WhatsApp and Excel</span>
              </>
            }
            subtitle="India has 30+ million youth footballers. The infrastructure to discover, verify, and connect them doesn't exist."
          />
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          <SectionReveal delay={0.08}>
            <div className="glass-card p-7 lg:p-8 h-full">
              <h3 className="text-base font-semibold text-red-400 mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/10 flex items-center justify-center">
                  <X className="w-4 h-4" />
                </div>
                Today's Broken Stack
              </h3>
              <ul className="space-y-4">
                {problems.map(problem => (
                  <li key={problem} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400/50 shrink-0 mt-1" />
                    <span className="text-sm text-charcoal-300 leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <div className="glass-card p-7 lg:p-8 border-lime-400/10 h-full relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/[0.03] rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-base font-semibold text-lime-400 mb-6 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/10 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  The ScoutX Stack
                </h3>
                <ul className="space-y-4">
                  {solutions.map(solution => (
                    <li key={solution} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-lime-400 shrink-0 mt-1" />
                      <span className="text-sm text-charcoal-200 leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.24}>
          <div className="mt-10 text-center">
            <Link
              to="/demo/scout-search"
              className="inline-flex items-center gap-2 text-lime-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              See it in action <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
