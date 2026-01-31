import { ShieldCheck, TrendingUp, TrendingDown, Users, BarChart3, Upload } from 'lucide-react';

export function DashboardMock() {
  const roster = [
    { name: 'Arjun Singh', pos: 'ST', rating: 86, trend: +3, speed: 88, verified: true },
    { name: 'Priya Nair', pos: 'FW', rating: 81, trend: +5, speed: 85, verified: true },
    { name: 'Ravi Kumar', pos: 'MF', rating: 82, trend: +1, speed: 78, verified: true },
    { name: 'Meera Iyer', pos: 'MF', rating: 79, trend: +4, speed: 76, verified: true },
    { name: 'Karan Mehta', pos: 'CB', rating: 78, trend: -1, speed: 72, verified: false },
  ];

  const topImprovers = [
    { name: 'Priya Nair', metric: 'Speed', change: '+8' },
    { name: 'Meera Iyer', metric: 'Passing', change: '+6' },
    { name: 'Arjun Singh', metric: 'Stamina', change: '+4' },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-surface-1 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-lime-400 to-cyan-400 flex items-center justify-center">
            <span className="text-[10px] font-bold text-charcoal-950">SX</span>
          </div>
          <span className="text-sm font-semibold text-white">Modern School, Delhi</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20">U-17</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] text-charcoal-400 border border-white/5 flex items-center gap-1">
            <Upload className="w-3 h-3" /> Upload Video
          </span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Total Players', value: '10', icon: <Users className="w-3.5 h-3.5" />, accent: 'lime' as const },
            { label: 'Verified', value: '8', icon: <ShieldCheck className="w-3.5 h-3.5" />, accent: 'lime' as const },
            { label: 'Avg Rating', value: '80.2', icon: <BarChart3 className="w-3.5 h-3.5" />, accent: 'cyan' as const },
            { label: 'Videos Analyzed', value: '24', icon: <TrendingUp className="w-3.5 h-3.5" />, accent: 'cyan' as const },
          ].map(k => (
            <div key={k.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className={k.accent === 'lime' ? 'text-lime-400' : 'text-cyan-400'}>{k.icon}</span>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-500">{k.label}</span>
              </div>
              <div className="text-xl font-bold text-white">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr,220px] gap-4">
          {/* Roster table */}
          <div className="rounded-xl border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
              <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Squad Roster</span>
              <span className="text-[10px] text-charcoal-600">Sorted by Rating</span>
            </div>
            <div className="grid grid-cols-[1fr,50px,60px,50px,44px] gap-0 text-[10px] uppercase tracking-wider text-charcoal-600 px-4 py-1.5 border-b border-white/[0.03] bg-white/[0.01]">
              <span>Player</span>
              <span className="text-center">Pos</span>
              <span className="text-center">Speed</span>
              <span className="text-center">Rating</span>
              <span className="text-center">Trend</span>
            </div>
            {roster.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-[1fr,50px,60px,50px,44px] gap-0 items-center px-4 py-2 border-b border-white/[0.03] ${i === 0 ? 'bg-lime-400/[0.02]' : 'hover:bg-white/[0.01]'} transition-colors`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 rounded bg-pitch-800 border border-pitch-600 flex items-center justify-center text-[9px] font-bold text-lime-400 shrink-0">
                    {p.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-sm text-white font-medium truncate">{p.name}</span>
                  {p.verified && <ShieldCheck className="w-3 h-3 text-lime-400 shrink-0" />}
                </div>
                <span className="text-center text-xs text-charcoal-400">{p.pos}</span>
                <span className="text-center text-xs text-charcoal-300">{p.speed}</span>
                <span className={`text-center text-xs font-bold ${p.rating >= 85 ? 'text-lime-400' : 'text-white'}`}>{p.rating}</span>
                <div className="flex items-center justify-center gap-0.5">
                  {p.trend > 0 ? (
                    <>
                      <TrendingUp className="w-3 h-3 text-lime-400" />
                      <span className="text-[10px] text-lime-400">+{p.trend}</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-3 h-3 text-red-400" />
                      <span className="text-[10px] text-red-400">{p.trend}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Top Improvers */}
          <div className="space-y-3 hidden lg:block">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3 text-lime-400" />
                Top Improvers
              </div>
              <div className="space-y-2">
                {topImprovers.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-lime-400/20 text-lime-400' : 'bg-white/[0.04] text-charcoal-400'}`}>
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-white font-medium truncate">{p.name}</div>
                      <div className="text-[10px] text-charcoal-500">{p.metric}</div>
                    </div>
                    <span className="text-xs font-bold text-lime-400">{p.change}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team summary */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium mb-3">Team Summary</div>
              <div className="space-y-2">
                {[
                  { label: 'Avg Speed', value: 80 },
                  { label: 'Avg Passing', value: 73 },
                  { label: 'Avg Stamina', value: 77 },
                ].map(m => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-charcoal-500">{m.label}</span>
                      <span className="text-charcoal-300 font-medium">{m.value}</span>
                    </div>
                    <div className="h-1 bg-charcoal-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-lime-400 to-cyan-400" style={{ width: `${m.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
