import { Play, Pause, SkipForward } from 'lucide-react';

export function VideoAnalysisMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface-1 overflow-hidden">
      {/* Top toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-[11px] font-medium text-charcoal-400">Match Analysis — Subroto Cup QF</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20">AI Processing</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr,200px] gap-0">
        {/* Video + Heatmap area */}
        <div className="relative">
          {/* Pitch with heatmap */}
          <div className="relative aspect-[16/10] bg-pitch-900 overflow-hidden">
            {/* Pitch markings */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
              <rect width="400" height="250" fill="#0a1f0f" />
              {/* Field outline */}
              <rect x="20" y="15" width="360" height="220" stroke="#1b5e20" strokeWidth="1" fill="none" rx="2" />
              {/* Center line + circle */}
              <line x1="200" y1="15" x2="200" y2="235" stroke="#1b5e20" strokeWidth="0.8" />
              <circle cx="200" cy="125" r="35" stroke="#1b5e20" strokeWidth="0.8" fill="none" />
              <circle cx="200" cy="125" r="2" fill="#1b5e20" />
              {/* Penalty areas */}
              <rect x="20" y="65" width="60" height="120" stroke="#1b5e20" strokeWidth="0.8" fill="none" />
              <rect x="320" y="65" width="60" height="120" stroke="#1b5e20" strokeWidth="0.8" fill="none" />
              {/* Goal areas */}
              <rect x="20" y="90" width="25" height="70" stroke="#1b5e20" strokeWidth="0.6" fill="none" />
              <rect x="355" y="90" width="25" height="70" stroke="#1b5e20" strokeWidth="0.6" fill="none" />

              {/* Heatmap zones */}
              <ellipse cx="280" cy="100" rx="50" ry="40" fill="rgba(196,245,59,0.25)" />
              <ellipse cx="290" cy="95" rx="30" ry="25" fill="rgba(196,245,59,0.4)" />
              <ellipse cx="295" cy="90" rx="15" ry="12" fill="rgba(196,245,59,0.55)" />
              <ellipse cx="180" cy="140" rx="35" ry="30" fill="rgba(34,211,238,0.15)" />
              <ellipse cx="320" cy="130" rx="25" ry="20" fill="rgba(196,245,59,0.2)" />
              <ellipse cx="240" cy="80" rx="20" ry="18" fill="rgba(34,211,238,0.12)" />

              {/* Player movement trail */}
              <path
                d="M120 180 Q160 160 200 140 Q240 120 260 100 Q280 80 300 90 Q320 100 330 120"
                stroke="#c4f53b" strokeWidth="2" fill="none" strokeDasharray="5 3" opacity="0.7"
              />
              <circle cx="330" cy="120" r="5" fill="#c4f53b" stroke="#0a1f0f" strokeWidth="1.5" />
              <circle cx="120" cy="180" r="4" fill="#c4f53b" opacity="0.4" />

              {/* Sprint burst markers */}
              <circle cx="240" cy="120" r="3" fill="#22d3ee" opacity="0.8" />
              <circle cx="200" cy="140" r="2.5" fill="#22d3ee" opacity="0.6" />
              <circle cx="300" cy="90" r="3" fill="#22d3ee" opacity="0.7" />
            </svg>

            {/* Overlay label */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="text-[10px] px-2 py-1 rounded-md bg-charcoal-950/80 backdrop-blur text-lime-400 border border-lime-400/20 font-medium">
                Heatmap — Arjun Singh #9
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-charcoal-950/80 backdrop-blur text-charcoal-400 border border-white/10">
                2nd Half · 58:30
              </span>
            </div>
          </div>

          {/* Timeline bar */}
          <div className="px-4 py-3 bg-surface-2 border-t border-white/5">
            <div className="flex items-center gap-3">
              <button className="text-charcoal-400 hover:text-white transition-colors" aria-label="Play">
                <Play className="w-4 h-4" />
              </button>
              <button className="text-charcoal-400 hover:text-white transition-colors" aria-label="Pause">
                <Pause className="w-3.5 h-3.5" />
              </button>
              <button className="text-charcoal-400 hover:text-white transition-colors" aria-label="Skip">
                <SkipForward className="w-3.5 h-3.5" />
              </button>
              <div className="flex-1 h-1.5 bg-charcoal-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-lime-400 to-cyan-400" style={{ width: '62%' }} />
              </div>
              <span className="text-[11px] text-charcoal-500 font-mono tabular-nums">58:30 / 90:00</span>
            </div>
            {/* Event markers */}
            <div className="flex items-center gap-1.5 mt-2">
              {['Sprint', 'Key Pass', 'Shot on Target', 'Tackle Won'].map((ev, i) => (
                <span key={ev} className={`text-[9px] px-1.5 py-0.5 rounded ${i < 2 ? 'bg-lime-400/10 text-lime-400 border border-lime-400/15' : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/15'}`}>
                  {ev}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar — metric cards */}
        <div className="border-l border-white/5 bg-surface-2/50 p-3 space-y-2.5 hidden lg:block">
          <div className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium mb-2">AI Metrics</div>
          {[
            { label: 'Distance', value: '9.2 km', pct: 85, color: 'lime' as const },
            { label: 'Top Speed', value: '28.4 km/h', pct: 92, color: 'lime' as const },
            { label: 'Sprint Count', value: '14', pct: 70, color: 'cyan' as const },
            { label: 'Pass Acc.', value: '82%', pct: 82, color: 'lime' as const },
            { label: 'Positioning', value: '88/100', pct: 88, color: 'cyan' as const },
            { label: 'Work Rate', value: 'High', pct: 78, color: 'lime' as const },
          ].map(m => (
            <div key={m.label} className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-charcoal-500">{m.label}</span>
                <span className={`text-xs font-bold ${m.color === 'lime' ? 'text-lime-400' : 'text-cyan-400'}`}>{m.value}</span>
              </div>
              <div className="h-1 bg-charcoal-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${m.color === 'lime' ? 'bg-lime-400' : 'bg-cyan-400'}`}
                  style={{ width: `${m.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
