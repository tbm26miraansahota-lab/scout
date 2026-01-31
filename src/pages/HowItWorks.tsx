import { Upload, Cpu, Share2, Search, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const steps = [
  {
    icon: <Upload className="w-7 h-7" />,
    number: '01',
    title: 'Coach uploads match footage',
    description: 'Record matches with any smartphone. Upload to the ScoutX dashboard — no expensive equipment or GPS vests needed.',
    detail: 'Supports MP4, MOV. AI handles the rest.',
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    number: '02',
    title: 'AI analyzes player performance',
    description: 'Our models extract speed, stamina, passing accuracy, shooting, dribbling, and defensive metrics from match footage.',
    detail: 'Standardized metrics, comparable across schools.',
  },
  {
    icon: <Share2 className="w-7 h-7" />,
    number: '03',
    title: 'Players get a verified profile link',
    description: 'Every player gets a shareable profile with verified stats, highlights, and match history — one link for everything.',
    detail: 'Perfect for sports quota, academy applications.',
  },
  {
    icon: <Search className="w-7 h-7" />,
    number: '04',
    title: 'Scouts discover talent by metrics',
    description: 'Scouts search by position, age, location, and verified metrics. No more traveling blind — find talent in minutes.',
    detail: 'Filter, compare, and shortlist from anywhere.',
  },
];

export default function HowItWorks() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title={
            <>
              From match footage to{' '}
              <span className="gradient-text">scout discovery</span>
            </>
          }
          subtitle="Four steps. No complicated setup. No expensive hardware."
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-lime-400/40 via-lime-400/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 z-10">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 glass-card p-8 hover:border-lime-400/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lime-400 font-mono text-sm font-bold">{step.number}</span>
                    <div className="lg:hidden w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-charcoal-300 leading-relaxed mb-3">{step.description}</p>
                  <p className="text-sm text-charcoal-500 italic">{step.detail}</p>
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <ArrowRight className="w-5 h-5 text-charcoal-600 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" size="lg" to="/demo/scout-search">
            See the Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
