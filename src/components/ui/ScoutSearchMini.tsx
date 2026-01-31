import { Search, ShieldCheck, MapPin } from 'lucide-react';

export function ScoutSearchMini() {
  const results = [
    { initials: 'BS', name: 'Bijoy Singha', pos: 'Striker', city: 'Shillong', rating: 85, verified: true },
    { initials: 'TZ', name: 'Thanglien Zou', pos: 'Winger', city: 'Imphal', rating: 84, verified: true },
    { initials: 'KF', name: 'Krishna F.', pos: 'Winger', city: 'Goa', rating: 83, verified: true },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-surface-2/95 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/30">
      {/* Header */}
      <div className="flex items-center gap-2 px-3.5 py-2 border-b border-white/5 bg-white/[0.02]">
        <Search className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-xs font-semibold text-white">Scout Search</span>
        <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">Live</span>
      </div>

      {/* Filter chips */}
      <div className="flex gap-1.5 px-3.5 py-2 border-b border-white/[0.03]">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20">Striker</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">U-17</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-charcoal-400 border border-white/[0.06]">Verified</span>
      </div>

      {/* Results */}
      <div className="p-2 space-y-1">
        {results.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors ${i === 0 ? 'bg-lime-400/[0.04] border border-lime-400/10' : 'border border-transparent hover:bg-white/[0.02]'}`}
          >
            <div className="w-7 h-7 rounded-lg bg-pitch-800 border border-pitch-600 flex items-center justify-center text-[9px] font-bold text-lime-400 shrink-0">
              {p.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs text-white font-medium truncate">{p.name}</span>
                {p.verified && <ShieldCheck className="w-2.5 h-2.5 text-lime-400 shrink-0" />}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-charcoal-500">
                <span>{p.pos}</span>
                <span className="text-charcoal-700">·</span>
                <MapPin className="w-2 h-2" />
                <span>{p.city}</span>
              </div>
            </div>
            <span className={`text-sm font-bold shrink-0 ${i === 0 ? 'text-lime-400' : 'text-charcoal-300'}`}>{p.rating}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2 border-t border-white/5 bg-white/[0.02]">
        <span className="text-[10px] text-charcoal-500">42 players match · 3 comparing</span>
      </div>
    </div>
  );
}
