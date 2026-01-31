import { ShieldCheck, Share2, ExternalLink, Star, MapPin } from 'lucide-react';

export function PlayerProfileMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface-1 overflow-hidden">
      {/* Header with gradient */}
      <div className="relative h-20 bg-gradient-to-r from-pitch-800 via-pitch-900 to-surface-1 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 500 80" preserveAspectRatio="none">
          <circle cx="250" cy="100" r="60" stroke="#c4f53b" strokeWidth="0.5" fill="none" />
          <line x1="0" y1="40" x2="500" y2="40" stroke="#c4f53b" strokeWidth="0.3" />
        </svg>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="text-[10px] px-2 py-1 rounded-md bg-charcoal-950/60 backdrop-blur text-charcoal-400 border border-white/10 flex items-center gap-1">
            <Share2 className="w-3 h-3" /> Share
          </span>
          <span className="text-[10px] px-2 py-1 rounded-md bg-charcoal-950/60 backdrop-blur text-charcoal-400 border border-white/10 flex items-center gap-1">
            <ExternalLink className="w-3 h-3" /> PDF
          </span>
        </div>
      </div>

      {/* Player info */}
      <div className="px-5 -mt-8 relative z-10">
        <div className="flex items-end gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pitch-700 to-pitch-900 border-2 border-surface-1 flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-lime-400">AS</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center ring-2 ring-surface-1">
              <ShieldCheck className="w-3 h-3 text-charcoal-950" />
            </div>
          </div>
          <div className="pb-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              Arjun Singh
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-lime-400/15 text-lime-400 border border-lime-400/20 font-medium">Verified</span>
            </h3>
            <p className="text-xs text-charcoal-400 flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Modern School, Delhi · #9 Striker · Age 16
            </p>
          </div>
          <div className="ml-auto pb-1 text-right">
            <div className="text-3xl font-extrabold text-white leading-none">86</div>
            <div className="text-[10px] text-charcoal-500 uppercase tracking-wider">Overall</div>
          </div>
        </div>
      </div>

      {/* Stat chips row */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-6 gap-2">
          {[
            { label: 'SPD', value: 88, top: true },
            { label: 'SHT', value: 91, top: true },
            { label: 'DRB', value: 85, top: false },
            { label: 'PAS', value: 75, top: false },
            { label: 'STA', value: 82, top: false },
            { label: 'DEF', value: 40, top: false },
          ].map(s => (
            <div key={s.label} className={`rounded-lg p-2 text-center border ${s.top ? 'bg-lime-400/[0.06] border-lime-400/15' : 'bg-white/[0.03] border-white/5'}`}>
              <div className={`text-base font-bold ${s.value >= 80 ? 'text-lime-400' : s.value >= 60 ? 'text-cyan-400' : 'text-charcoal-400'}`}>{s.value}</div>
              <div className="text-[9px] text-charcoal-500 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights strip */}
      <div className="px-5 mt-4">
        <div className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium mb-2">Highlights</div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[
            { label: 'Hat-trick vs St. Mary\'s', tag: 'Goals' },
            { label: '2 assists — Subroto Cup QF', tag: 'Assists' },
            { label: '28.4 km/h sprint', tag: 'Speed' },
          ].map(h => (
            <div key={h.label} className="flex-none rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2 min-w-[160px]">
              <div className="flex items-center gap-1.5 mb-1">
                <Star className="w-3 h-3 text-amber-400" />
                <span className="text-[9px] uppercase text-amber-400 font-medium">{h.tag}</span>
              </div>
              <span className="text-xs text-charcoal-200">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Season summary bar */}
      <div className="px-5 py-4 mt-3 border-t border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { label: 'Matches', value: '18' },
            { label: 'Goals', value: '14' },
            { label: 'Assists', value: '8' },
            { label: 'MoM', value: '5' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-lg font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-charcoal-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-2.5 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
        <span className="text-[11px] text-charcoal-500 font-mono">scoutx.in/player/arjun-singh</span>
        <span className="text-[10px] text-charcoal-600">Last updated: Jan 2026</span>
      </div>
    </div>
  );
}
