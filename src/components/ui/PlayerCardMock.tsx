import { ShieldCheck, Zap, Wind, Target } from 'lucide-react';

export function PlayerCardMock() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Animated glow behind card */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-lime-400/20 via-cyan-400/10 to-lime-400/5 blur-2xl animate-glow-pulse" />

      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface-2/90 backdrop-blur-xl">
        {/* Header stripe */}
        <div className="h-1.5 bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400" />

        {/* Player header */}
        <div className="p-5 pb-4">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pitch-700 to-pitch-900 border border-pitch-600 flex items-center justify-center">
                <span className="text-xl font-bold text-lime-400">AS</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-charcoal-950" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-white">Arjun Singh</h3>
              </div>
              <p className="text-sm text-charcoal-400 mb-2">#9 · Striker · Modern School, Delhi</p>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-lime-400/15 text-lime-400 border border-lime-400/20">
                  Verified
                </span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-charcoal-700 text-charcoal-300 border border-charcoal-600">
                  Age 16
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="text-right shrink-0">
              <div className="text-3xl font-extrabold text-white leading-none">86</div>
              <div className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium mt-0.5">Overall</div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-3 gap-2.5">
            <MetricChip icon={<Zap className="w-3.5 h-3.5" />} label="Speed" value={88} color="lime" />
            <MetricChip icon={<Wind className="w-3.5 h-3.5" />} label="Stamina" value={82} color="cyan" />
            <MetricChip icon={<Target className="w-3.5 h-3.5" />} label="Passing" value={75} color="lime" />
          </div>
        </div>

        {/* Mini metric bars */}
        <div className="px-5 pb-5 space-y-2.5">
          <MiniBar label="Shooting" value={91} />
          <MiniBar label="Dribbling" value={85} />
          <MiniBar label="Defending" value={40} />
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
          <span className="text-[11px] text-charcoal-500 font-mono">scoutx.in/player/arjun-singh</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-charcoal-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricChip({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: 'lime' | 'cyan' }) {
  const borderColor = color === 'lime' ? 'border-lime-400/20' : 'border-cyan-400/20';
  const iconColor = color === 'lime' ? 'text-lime-400' : 'text-cyan-400';
  const valueColor = color === 'lime' ? 'text-lime-400' : 'text-cyan-400';

  return (
    <div className={`rounded-xl border ${borderColor} bg-white/[0.03] p-2.5 text-center`}>
      <div className={`${iconColor} flex justify-center mb-1.5`}>{icon}</div>
      <div className={`text-lg font-bold ${valueColor}`}>{value}</div>
      <div className="text-[10px] text-charcoal-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function MiniBar({ label, value }: { label: string; value: number }) {
  const barColor = value >= 80 ? 'bg-lime-400' : value >= 60 ? 'bg-cyan-400' : 'bg-charcoal-500';
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-charcoal-400 w-16 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-charcoal-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barColor} transition-all duration-700`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-semibold text-charcoal-300 w-6 text-right">{value}</span>
    </div>
  );
}
