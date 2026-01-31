import { SectionReveal } from '../ui/SectionReveal';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Search, BarChart3, Star, MapPin, Filter, TrendingUp } from 'lucide-react';

export function ProductPreview() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            badge="Product Preview"
            title={
              <>
                See ScoutX in{' '}
                <span className="gradient-text">action</span>
              </>
            }
            subtitle="Real interfaces. Real workflows. Built for Indian grassroots football."
          />
        </SectionReveal>

        {/* Dashboard preview */}
        <SectionReveal delay={0.1}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-300">
                <BarChart3 className="w-4 h-4 text-lime-400" />
                School Coach Dashboard
              </span>
            </div>
            <DeviceFrame>
              <DashboardMockup />
            </DeviceFrame>
          </div>
        </SectionReveal>

        {/* Scout Search preview */}
        <SectionReveal delay={0.15}>
          <div>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-300">
                <Search className="w-4 h-4 text-cyan-400" />
                Scout Discovery Search
              </span>
            </div>
            <DeviceFrame>
              <ScoutSearchMockup />
            </DeviceFrame>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-lime-400/10 via-transparent to-cyan-400/10 blur-xl opacity-50" />
      {/* Browser chrome */}
      <div className="relative rounded-2xl border border-white/10 bg-surface-1 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-charcoal-700" />
            <div className="w-3 h-3 rounded-full bg-charcoal-700" />
            <div className="w-3 h-3 rounded-full bg-charcoal-700" />
          </div>
          <div className="flex-1 mx-8">
            <div className="max-w-md mx-auto h-6 rounded-md bg-charcoal-800 border border-charcoal-700 flex items-center px-3">
              <span className="text-[11px] text-charcoal-500 font-mono">app.scoutx.in/dashboard</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const roster = [
    { name: 'Arjun Singh', pos: 'ST', rating: 86, speed: 88, verified: true },
    { name: 'Ravi Kumar', pos: 'MF', rating: 82, speed: 78, verified: true },
    { name: 'Rohit Sharma', pos: 'FW', rating: 80, speed: 82, verified: true },
    { name: 'Priya Nair', pos: 'FW', rating: 81, speed: 85, verified: true },
  ];

  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Players', value: '10', icon: <Star className="w-3.5 h-3.5" /> },
          { label: 'Verified', value: '8', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
          { label: 'Avg Rating', value: '80.2', icon: <TrendingUp className="w-3.5 h-3.5" /> },
          { label: 'Analyzed', value: '8', icon: <BarChart3 className="w-3.5 h-3.5" /> },
        ].map(k => (
          <div key={k.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-lime-400">{k.icon}</span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-500">{k.label}</span>
            </div>
            <div className="text-xl font-bold text-white">{k.value}</div>
          </div>
        ))}
      </div>
      {/* Mini roster table */}
      <div className="rounded-xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-5 gap-0 text-[11px] uppercase tracking-wider text-charcoal-500 bg-white/[0.02] px-4 py-2 border-b border-white/5">
          <span className="col-span-2">Player</span>
          <span className="text-center">Pos</span>
          <span className="text-center">SPD</span>
          <span className="text-center">Rating</span>
        </div>
        {roster.map(p => (
          <div key={p.name} className="grid grid-cols-5 gap-0 items-center px-4 py-2.5 border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors">
            <div className="col-span-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-pitch-800 border border-pitch-600 flex items-center justify-center text-[10px] font-bold text-lime-400">
                {p.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-sm text-white font-medium truncate">{p.name}</span>
              {p.verified && <ShieldCheck className="w-3 h-3 text-lime-400 shrink-0" />}
            </div>
            <span className="text-center text-xs text-charcoal-400">{p.pos}</span>
            <span className="text-center text-xs text-charcoal-300">{p.speed}</span>
            <span className={`text-center text-xs font-bold ${p.rating >= 85 ? 'text-lime-400' : 'text-white'}`}>{p.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoutSearchMockup() {
  const players = [
    { name: 'Bijoy Singha', pos: 'Striker', age: 17, city: 'Shillong', rating: 85, verified: true },
    { name: 'Thanglien Zou', pos: 'Winger', age: 16, city: 'Imphal', rating: 84, verified: true },
    { name: 'Krishna Fernandes', pos: 'Winger', age: 15, city: 'Goa', rating: 83, verified: true },
  ];

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="flex gap-3">
        <div className="flex-1 flex items-center gap-2 rounded-xl bg-charcoal-800/70 border border-charcoal-700 px-4 py-2.5">
          <Search className="w-4 h-4 text-charcoal-500" />
          <span className="text-sm text-charcoal-500">Search by name, school, or city...</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-charcoal-800/70 border border-charcoal-700 px-4 py-2.5">
          <Filter className="w-4 h-4 text-charcoal-500" />
          <span className="text-sm text-charcoal-500">Filters</span>
        </div>
      </div>
      {/* Results */}
      <div className="grid sm:grid-cols-3 gap-3">
        {players.map(p => (
          <div key={p.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-lime-400/20 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-pitch-800 border border-pitch-600 flex items-center justify-center text-[10px] font-bold text-lime-400">
                {p.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm text-white font-semibold truncate">{p.name}</span>
                  {p.verified && <ShieldCheck className="w-3 h-3 text-lime-400 shrink-0" />}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-charcoal-500">
                  <span>{p.pos}</span>
                  <span>·</span>
                  <span>Age {p.age}</span>
                  <span>·</span>
                  <MapPin className="w-2.5 h-2.5" />
                  <span>{p.city}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg font-bold text-lime-400">{p.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
