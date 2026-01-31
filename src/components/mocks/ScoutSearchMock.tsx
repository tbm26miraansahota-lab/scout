import { Search, ShieldCheck, MapPin, GitCompareArrows, SlidersHorizontal, ChevronDown } from 'lucide-react';

export function ScoutSearchMock() {
  const filters = [
    { label: 'Position', value: 'Striker', active: true },
    { label: 'Age', value: 'U-17', active: true },
    { label: 'State', value: 'All', active: false },
    { label: 'Verified Only', value: 'Yes', active: true },
  ];

  const results = [
    { name: 'Arjun Singh', school: 'Modern School, Delhi', pos: 'Striker', age: 16, city: 'Delhi', rating: 86, speed: 88, shooting: 91, verified: true, selected: true },
    { name: 'Bijoy Singha', school: 'Don Bosco, Shillong', pos: 'Striker', age: 17, city: 'Shillong', rating: 85, speed: 84, shooting: 87, verified: true, selected: true },
    { name: 'Priya Nair', school: 'Modern School, Delhi', pos: 'Forward', age: 15, city: 'Delhi', rating: 81, speed: 85, shooting: 78, verified: true, selected: false },
    { name: 'Krishna Fernandes', school: 'Loyola HS, Goa', pos: 'Winger', age: 15, city: 'Goa', rating: 83, speed: 86, shooting: 79, verified: true, selected: false },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-surface-1 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-charcoal-500" />
          <span className="text-sm text-white font-medium">Scout Discovery</span>
        </div>
        <span className="text-[10px] text-charcoal-500">42 players match filters</span>
      </div>

      <div className="grid lg:grid-cols-[200px,1fr] gap-0">
        {/* Filters sidebar */}
        <div className="border-r border-white/5 bg-white/[0.01] p-3 space-y-3 hidden lg:block">
          <div className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium flex items-center gap-1.5">
            <SlidersHorizontal className="w-3 h-3" />
            Filters
          </div>
          {filters.map(f => (
            <div key={f.label} className="space-y-1">
              <span className="text-[10px] text-charcoal-500">{f.label}</span>
              <div className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs border ${f.active ? 'bg-lime-400/[0.06] border-lime-400/20 text-lime-400' : 'bg-white/[0.02] border-white/5 text-charcoal-300'}`}>
                <span>{f.value}</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          ))}
          {/* Sort */}
          <div className="space-y-1 pt-2 border-t border-white/5">
            <span className="text-[10px] text-charcoal-500">Sort by</span>
            <div className="flex items-center justify-between rounded-lg px-3 py-2 text-xs bg-white/[0.02] border border-white/5 text-charcoal-300">
              <span>Rating (High→Low)</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-3 space-y-3">
          {/* Search bar */}
          <div className="flex items-center gap-2 rounded-xl bg-charcoal-800/50 border border-charcoal-700 px-3 py-2">
            <Search className="w-3.5 h-3.5 text-charcoal-500" />
            <span className="text-xs text-charcoal-500">Search by name, school, or city...</span>
          </div>

          {/* Result cards */}
          <div className="space-y-2">
            {results.map(p => (
              <div
                key={p.name}
                className={`rounded-xl border p-3 transition-colors ${p.selected ? 'border-lime-400/20 bg-lime-400/[0.03]' : 'border-white/5 bg-white/[0.02] hover:border-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-pitch-800 border border-pitch-600 flex items-center justify-center text-xs font-bold text-lime-400">
                      {p.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {p.verified && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-lime-400 flex items-center justify-center">
                        <ShieldCheck className="w-2.5 h-2.5 text-charcoal-950" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white font-semibold truncate">{p.name}</span>
                      {p.selected && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-lime-400/15 text-lime-400 border border-lime-400/20">Comparing</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-charcoal-500 mt-0.5">
                      <span>{p.pos}</span>
                      <span className="text-charcoal-700">|</span>
                      <span>Age {p.age}</span>
                      <span className="text-charcoal-700">|</span>
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{p.city}</span>
                    </div>
                    <div className="text-[10px] text-charcoal-600 mt-0.5">{p.school}</div>
                  </div>
                  {/* Mini stats */}
                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <div className="text-center px-2">
                      <div className="text-xs font-bold text-charcoal-300">{p.speed}</div>
                      <div className="text-[9px] text-charcoal-600">SPD</div>
                    </div>
                    <div className="text-center px-2">
                      <div className="text-xs font-bold text-charcoal-300">{p.shooting}</div>
                      <div className="text-[9px] text-charcoal-600">SHT</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-xl font-extrabold ${p.rating >= 85 ? 'text-lime-400' : 'text-white'}`}>{p.rating}</div>
                    <div className="text-[9px] text-charcoal-600 uppercase">Overall</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compare drawer */}
          <div className="rounded-xl border border-lime-400/20 bg-lime-400/[0.04] p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <GitCompareArrows className="w-3.5 h-3.5 text-lime-400" />
                <span className="text-xs font-semibold text-lime-400">Compare (2 selected)</span>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-md bg-lime-400 text-charcoal-950 font-semibold cursor-default">
                Compare Now
              </span>
            </div>
            <div className="flex gap-2">
              {results.filter(r => r.selected).map(p => (
                <div key={p.name} className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/5 px-2 py-1">
                  <div className="w-5 h-5 rounded bg-pitch-800 flex items-center justify-center text-[8px] font-bold text-lime-400">
                    {p.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[11px] text-charcoal-300">{p.name.split(' ')[0]}</span>
                  <span className="text-[10px] text-charcoal-500 font-bold">{p.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
