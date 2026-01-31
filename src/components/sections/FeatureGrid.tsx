import { SectionHeading } from '../ui/SectionHeading';
import { SectionReveal } from '../ui/SectionReveal';

function ProfileSVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto" aria-hidden="true">
      <rect width="200" height="140" rx="12" fill="#151515" />
      {/* Header bar */}
      <rect x="0" y="0" width="200" height="4" rx="2" fill="url(#limeGrad)" />
      {/* Avatar */}
      <rect x="16" y="20" width="36" height="36" rx="8" fill="#0a2b0e" stroke="#0f3d15" strokeWidth="1" />
      <text x="34" y="43" textAnchor="middle" fill="#c4f53b" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">AS</text>
      {/* Verified dot */}
      <circle cx="48" cy="52" r="6" fill="#c4f53b" />
      <path d="M45 52 l2 2 l4-4" stroke="#0a0a0a" strokeWidth="1.5" fill="none" />
      {/* Name + subtitle */}
      <rect x="62" y="22" width="90" height="10" rx="3" fill="#2a2a2a" />
      <rect x="62" y="38" width="60" height="7" rx="2" fill="#1a1a1a" />
      {/* Rating */}
      <text x="176" y="38" textAnchor="middle" fill="white" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">86</text>
      <rect x="163" y="42" width="26" height="5" rx="2" fill="#1a1a1a" />
      {/* Metric chips */}
      <rect x="16" y="70" width="52" height="40" rx="8" fill="rgba(196,245,59,0.06)" stroke="rgba(196,245,59,0.15)" strokeWidth="0.5" />
      <text x="42" y="93" textAnchor="middle" fill="#c4f53b" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">88</text>
      <text x="42" y="104" textAnchor="middle" fill="#616161" fontSize="7" fontFamily="Inter, sans-serif">SPEED</text>
      <rect x="74" y="70" width="52" height="40" rx="8" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
      <text x="100" y="93" textAnchor="middle" fill="#22d3ee" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">82</text>
      <text x="100" y="104" textAnchor="middle" fill="#616161" fontSize="7" fontFamily="Inter, sans-serif">STAMINA</text>
      <rect x="132" y="70" width="52" height="40" rx="8" fill="rgba(196,245,59,0.06)" stroke="rgba(196,245,59,0.15)" strokeWidth="0.5" />
      <text x="158" y="93" textAnchor="middle" fill="#c4f53b" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">75</text>
      <text x="158" y="104" textAnchor="middle" fill="#616161" fontSize="7" fontFamily="Inter, sans-serif">PASSING</text>
      {/* Footer */}
      <line x1="0" y1="120" x2="200" y2="120" stroke="rgba(255,255,255,0.04)" />
      <text x="16" y="133" fill="#424242" fontSize="7" fontFamily="monospace">scoutx.in/player/arjun-singh</text>
      <defs>
        <linearGradient id="limeGrad" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stopColor="#c4f53b" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AnalysisSVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto" aria-hidden="true">
      <rect width="200" height="140" rx="12" fill="#151515" />
      {/* Pitch field background */}
      <rect x="20" y="16" width="160" height="90" rx="4" fill="#0a1f0f" stroke="#0f3d15" strokeWidth="0.5" />
      <line x1="100" y1="16" x2="100" y2="106" stroke="#0f3d15" strokeWidth="0.5" />
      <circle cx="100" cy="61" r="20" stroke="#0f3d15" strokeWidth="0.5" fill="none" />
      {/* Heatmap blobs */}
      <circle cx="70" cy="50" r="18" fill="rgba(196,245,59,0.2)" />
      <circle cx="65" cy="55" r="10" fill="rgba(196,245,59,0.35)" />
      <circle cx="120" cy="65" r="14" fill="rgba(34,211,238,0.15)" />
      <circle cx="130" cy="40" r="12" fill="rgba(196,245,59,0.12)" />
      {/* Motion trail */}
      <path d="M40 75 Q60 45 80 50 Q100 55 120 40 Q140 25 155 35" stroke="#c4f53b" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="155" cy="35" r="4" fill="#c4f53b" />
      <circle cx="40" cy="75" r="3" fill="#c4f53b" opacity="0.4" />
      {/* Labels */}
      <rect x="20" y="114" width="50" height="16" rx="4" fill="rgba(196,245,59,0.08)" />
      <text x="45" y="125" textAnchor="middle" fill="#c4f53b" fontSize="8" fontFamily="Inter, sans-serif">AI Analysis</text>
      <rect x="78" y="114" width="46" height="16" rx="4" fill="rgba(34,211,238,0.08)" />
      <text x="101" y="125" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="Inter, sans-serif">Heatmap</text>
      <rect x="132" y="114" width="48" height="16" rx="4" fill="rgba(255,255,255,0.04)" />
      <text x="156" y="125" textAnchor="middle" fill="#757575" fontSize="8" fontFamily="Inter, sans-serif">Tracking</text>
    </svg>
  );
}

function DiscoverySVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto" aria-hidden="true">
      <rect width="200" height="140" rx="12" fill="#151515" />
      {/* Search bar */}
      <rect x="16" y="14" width="168" height="24" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="30" cy="26" r="5" stroke="#424242" strokeWidth="1" fill="none" />
      <line x1="34" y1="30" x2="37" y2="33" stroke="#424242" strokeWidth="1" />
      <rect x="44" y="22" width="60" height="6" rx="2" fill="#2a2a2a" />
      {/* Filter chips */}
      <rect x="16" y="46" width="40" height="14" rx="7" fill="rgba(196,245,59,0.1)" stroke="rgba(196,245,59,0.2)" strokeWidth="0.5" />
      <text x="36" y="56" textAnchor="middle" fill="#c4f53b" fontSize="7" fontFamily="Inter, sans-serif">Striker</text>
      <rect x="62" y="46" width="38" height="14" rx="7" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
      <text x="81" y="56" textAnchor="middle" fill="#22d3ee" fontSize="7" fontFamily="Inter, sans-serif">U-17</text>
      <rect x="106" y="46" width="42" height="14" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <text x="127" y="56" textAnchor="middle" fill="#757575" fontSize="7" fontFamily="Inter, sans-serif">Delhi</text>
      {/* Result rows */}
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(0, ${68 + i * 22})`}>
          <rect x="16" y="0" width="168" height="18" rx="6" fill={i === 0 ? 'rgba(196,245,59,0.03)' : 'rgba(255,255,255,0.02)'} stroke={i === 0 ? 'rgba(196,245,59,0.1)' : 'rgba(255,255,255,0.04)'} strokeWidth="0.5" />
          <rect x="22" y="4" width="10" height="10" rx="3" fill="#0a2b0e" />
          <text x="27" y="12" textAnchor="middle" fill="#c4f53b" fontSize="6" fontWeight="bold" fontFamily="Inter, sans-serif">{['AS', 'BS', 'TZ'][i]}</text>
          <rect x="38" y="5" width={[50, 44, 56][i]} height="5" rx="2" fill="#2a2a2a" />
          <rect x="38" y="12" width="30" height="4" rx="1" fill="#1a1a1a" />
          <text x="168" y="12" textAnchor="middle" fill={i === 0 ? '#c4f53b' : '#bdbdbd'} fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">{[86, 85, 84][i]}</text>
        </g>
      ))}
    </svg>
  );
}

const features = [
  {
    illustration: <ProfileSVG />,
    title: 'Verified Player Profiles',
    description: 'Every player gets a shareable link with coach-verified stats, highlights, and match history. One profile — any scout, academy, or university.',
    accent: 'lime' as const,
  },
  {
    illustration: <AnalysisSVG />,
    title: 'AI-Assisted Match Analysis',
    description: 'Upload smartphone footage. Our AI extracts speed, stamina, passing accuracy, positioning — standardized metrics, no GPS vests needed.',
    accent: 'cyan' as const,
  },
  {
    illustration: <DiscoverySVG />,
    title: 'Scout Discovery Search',
    description: 'Filter by position, age, location, and performance metrics. Compare up to 3 players side-by-side. Find talent in minutes, not months.',
    accent: 'lime' as const,
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20 lg:py-28 bg-surface-1/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <SectionReveal key={feature.title} delay={0.08 * i}>
              <div className="glass-card group hover:border-lime-400/15 transition-all duration-500 overflow-hidden h-full">
                {/* Illustration */}
                <div className="p-4 pb-0">
                  <div className="rounded-xl overflow-hidden border border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-500">
                    {feature.illustration}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 pt-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lime-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
