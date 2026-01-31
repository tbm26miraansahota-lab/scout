import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, UserCheck, LayoutDashboard, Search, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionReveal } from '../ui/SectionReveal';
import { VideoAnalysisMock } from '../mocks/VideoAnalysisMock';
import { PlayerProfileMock } from '../mocks/PlayerProfileMock';
import { DashboardMock } from '../mocks/DashboardMock';
import { ScoutSearchMock } from '../mocks/ScoutSearchMock';

interface TabConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  bullets: string[];
  chips: { label: string; accent: 'lime' | 'cyan' }[];
  component: React.ComponentType;
}

const tabs: TabConfig[] = [
  {
    id: 'video',
    label: 'AI Video Analysis',
    icon: <Video className="w-4 h-4" />,
    headline: 'Turn smartphone footage into pro-level analytics',
    description: 'Upload match videos from any phone. Our AI extracts speed, positioning, passing accuracy, and more — no GPS vests or expensive equipment needed.',
    bullets: [
      'Heatmaps and movement trails from video',
      'Sprint detection and distance tracking',
      'Pass accuracy and shot analysis',
      'Standardized metrics across all players',
    ],
    chips: [
      { label: 'AI-Powered', accent: 'lime' },
      { label: 'No hardware required', accent: 'cyan' },
    ],
    component: VideoAnalysisMock,
  },
  {
    id: 'profile',
    label: 'Player Profiles',
    icon: <UserCheck className="w-4 h-4" />,
    headline: 'One verified profile. Shareable anywhere.',
    description: 'Every player gets a coach-verified profile with stats, highlights, and match history. Share it with any scout, academy, or university via a single link.',
    bullets: [
      'Coach-verified performance data',
      'Season stats and match history',
      'Highlight reel with tagged moments',
      'Shareable link or downloadable PDF',
    ],
    chips: [
      { label: 'Verified metrics', accent: 'lime' },
      { label: 'Shareable link', accent: 'cyan' },
    ],
    component: PlayerProfileMock,
  },
  {
    id: 'dashboard',
    label: 'Coach Dashboard',
    icon: <LayoutDashboard className="w-4 h-4" />,
    headline: 'Your entire squad. One dashboard.',
    description: 'Track every player\'s growth over time. Upload match footage, view team analytics, and identify your top improvers — all from a single screen.',
    bullets: [
      'Full squad roster with live ratings',
      'Video upload with AI processing',
      'Team-level analytics and trends',
      'Top improver tracking and alerts',
    ],
    chips: [
      { label: 'Real-time data', accent: 'lime' },
      { label: 'Growth tracking', accent: 'cyan' },
    ],
    component: DashboardMock,
  },
  {
    id: 'scout',
    label: 'Scout Discovery',
    icon: <Search className="w-4 h-4" />,
    headline: 'Find talent in minutes, not months.',
    description: 'Filter by position, age, location, and verified performance metrics. Compare players side-by-side. Build shortlists without traveling 200+ days a year.',
    bullets: [
      'Advanced filters: position, age, city, metrics',
      'Side-by-side player comparison',
      'Verified-only toggle for quality results',
      'Shortlist and export capabilities',
    ],
    chips: [
      { label: 'Compare players', accent: 'lime' },
      { label: 'Verified only', accent: 'cyan' },
    ],
    component: ScoutSearchMock,
  },
];

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];
  const ActiveMock = active.component;

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,245,59,0.03),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            badge="Platform"
            title={
              <>
                Everything grassroots football needs.{' '}
                <span className="gradient-text">Nothing it doesn't.</span>
              </>
            }
            subtitle="Built for Indian school football — from Subroto Cup coaches to ISL scouts."
          />
        </SectionReveal>

        {/* Tab bar */}
        <SectionReveal delay={0.08}>
          <div className="flex justify-center mb-10 lg:mb-14">
            <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    i === activeTab
                      ? 'bg-lime-400/15 text-lime-400 border border-lime-400/25 shadow-[0_0_20px_rgba(196,245,59,0.08)]'
                      : 'text-charcoal-400 hover:text-charcoal-200 border border-transparent hover:bg-white/[0.03]'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Content area */}
        <SectionReveal delay={0.12}>
          <div className="grid lg:grid-cols-[380px,1fr] gap-8 lg:gap-12 items-start">
            {/* Left: Copy */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                className="lg:sticky lg:top-28"
              >
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  {active.headline}
                </h3>
                <p className="text-charcoal-300 leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {active.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-lime-400" />
                      </div>
                      <span className="text-sm text-charcoal-300 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Proof chips */}
                <div className="flex flex-wrap gap-2">
                  {active.chips.map(chip => (
                    <span
                      key={chip.label}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                        chip.accent === 'lime'
                          ? 'bg-lime-400/10 text-lime-400 border-lime-400/20'
                          : 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20'
                      }`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right: Mock UI */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative"
              >
                {/* Glow behind mock */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-lime-400/[0.06] via-transparent to-cyan-400/[0.04] blur-2xl pointer-events-none" />
                <div className="relative">
                  <ActiveMock />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
