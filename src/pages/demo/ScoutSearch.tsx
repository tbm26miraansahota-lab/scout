import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ArrowUpDown, GitCompareArrows, ShieldCheck, Star, MapPin } from 'lucide-react';
import { players, allPositions, allCities, allStates, type Player } from '../../data/players';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { MetricBar } from '../../components/ui/MetricBar';

type SortField = 'overallRating' | 'speed' | 'shooting' | 'passingAccuracy' | 'stamina' | 'age' | 'name';
type SortDir = 'asc' | 'desc';

export default function ScoutSearch() {
  const [search, setSearch] = useState('');
  const [position, setPosition] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [ageMin, setAgeMin] = useState('');
  const [ageMax, setAgeMax] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortField, setSortField] = useState<SortField>('overallRating');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  const filtered = useMemo(() => {
    let result = [...players];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.school.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q)
      );
    }
    if (position) result = result.filter(p => p.position === position);
    if (city) result = result.filter(p => p.city === city);
    if (state) result = result.filter(p => p.state === state);
    if (ageMin) result = result.filter(p => p.age >= parseInt(ageMin));
    if (ageMax) result = result.filter(p => p.age <= parseInt(ageMax));
    if (verifiedOnly) result = result.filter(p => p.verified);

    result.sort((a, b) => {
      let aVal: number | string, bVal: number | string;
      if (sortField === 'name') {
        aVal = a.name;
        bVal = b.name;
      } else if (sortField === 'age') {
        aVal = a.age;
        bVal = b.age;
      } else if (sortField === 'overallRating') {
        aVal = a.overallRating;
        bVal = b.overallRating;
      } else {
        aVal = a.metrics[sortField];
        bVal = b.metrics[sortField];
      }
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [search, position, city, state, ageMin, ageMax, verifiedOnly, sortField, sortDir]);

  const toggleCompare = (id: string) => {
    setCompareIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const comparePlayers = players.filter(p => compareIds.includes(p.id));

  const clearFilters = () => {
    setSearch('');
    setPosition('');
    setCity('');
    setState('');
    setAgeMin('');
    setAgeMax('');
    setVerifiedOnly(false);
  };

  const selectClasses = "px-3 py-2 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white text-sm focus:border-lime-400/50 focus:outline-none transition-colors appearance-none cursor-pointer";
  const inputClasses = "px-3 py-2 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white text-sm focus:border-lime-400/50 focus:outline-none transition-colors";

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="lime" size="md">Demo</Badge>
              <h1 className="text-2xl font-bold text-white">Scout Discovery</h1>
            </div>
            <p className="text-charcoal-400 text-sm">Search, filter, and compare players across India. This is a live demo with mock data.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" to="/demo/school-dashboard">
              School Dashboard
            </Button>
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div className="glass-card p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by name, school, or city..."
                className={`${inputClasses} w-full pl-10`}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-colors ${
                showFilters ? 'bg-lime-400/10 text-lime-400 border-lime-400/30' : 'bg-charcoal-800 text-charcoal-300 border-charcoal-700 hover:border-charcoal-500'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <button
              onClick={() => setShowCompare(!showCompare)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-colors ${
                compareIds.length > 0 ? 'bg-lime-400/10 text-lime-400 border-lime-400/30' : 'bg-charcoal-800 text-charcoal-300 border-charcoal-700 hover:border-charcoal-500'
              }`}
            >
              <GitCompareArrows className="w-4 h-4" />
              Compare {compareIds.length > 0 && `(${compareIds.length})`}
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-charcoal-700">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <select value={position} onChange={e => setPosition(e.target.value)} className={selectClasses}>
                  <option value="">All Positions</option>
                  {allPositions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <select value={city} onChange={e => setCity(e.target.value)} className={selectClasses}>
                  <option value="">All Cities</option>
                  {allCities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={state} onChange={e => setState(e.target.value)} className={selectClasses}>
                  <option value="">All States</option>
                  {allStates.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <input type="number" value={ageMin} onChange={e => setAgeMin(e.target.value)} placeholder="Min Age" min={13} max={18} className={inputClasses} />
                <input type="number" value={ageMax} onChange={e => setAgeMax(e.target.value)} placeholder="Max Age" min={13} max={18} className={inputClasses} />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={verifiedOnly} onChange={e => setVerifiedOnly(e.target.checked)} className="rounded accent-lime-400" />
                  <span className="text-sm text-charcoal-300">Verified only</span>
                </label>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-charcoal-500" />
                  <select value={sortField} onChange={e => setSortField(e.target.value as SortField)} className={selectClasses}>
                    <option value="overallRating">Overall Rating</option>
                    <option value="speed">Speed</option>
                    <option value="shooting">Shooting</option>
                    <option value="passingAccuracy">Passing</option>
                    <option value="stamina">Stamina</option>
                    <option value="age">Age</option>
                    <option value="name">Name</option>
                  </select>
                  <select value={sortDir} onChange={e => setSortDir(e.target.value as SortDir)} className={selectClasses}>
                    <option value="desc">High to Low</option>
                    <option value="asc">Low to High</option>
                  </select>
                </div>
                <button onClick={clearFilters} className="text-sm text-charcoal-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none">
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Compare Panel */}
        {showCompare && compareIds.length > 0 && (
          <ComparePanel players={comparePlayers} onRemove={toggleCompare} onClear={() => setCompareIds([])} />
        )}

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-charcoal-400">{filtered.length} players found</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(player => (
            <PlayerSearchCard
              key={player.id}
              player={player}
              isSelected={compareIds.includes(player.id)}
              onCompareToggle={toggleCompare}
              compareDisabled={compareIds.length >= 3 && !compareIds.includes(player.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass-card p-12 text-center">
            <p className="text-charcoal-400 mb-2">No players match your filters.</p>
            <button onClick={clearFilters} className="text-lime-400 hover:underline cursor-pointer bg-transparent border-none text-sm">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PlayerSearchCard({ player, isSelected, onCompareToggle, compareDisabled }: {
  player: Player;
  isSelected: boolean;
  onCompareToggle: (id: string) => void;
  compareDisabled: boolean;
}) {
  const initials = player.name.split(' ').map(n => n[0]).join('');

  return (
    <div className={`glass-card p-5 hover:border-lime-400/20 transition-all duration-300 ${isSelected ? 'border-lime-400/30 ring-1 ring-lime-400/10' : ''}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-pitch-800 border border-pitch-600 flex items-center justify-center text-lime-400 font-bold shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Link to={`/demo/player/${player.id}`} className="text-white font-semibold hover:text-lime-400 transition-colors truncate">
              {player.name}
            </Link>
            {player.verified && <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />}
          </div>
          <div className="flex items-center gap-2 text-xs text-charcoal-400 mt-0.5">
            <span>{player.position}</span>
            <span className="text-charcoal-600">·</span>
            <span>Age {player.age}</span>
            <span className="text-charcoal-600">·</span>
            <MapPin className="w-3 h-3" />
            <span>{player.city}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-white font-bold">{player.overallRating}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
        {[
          { label: 'SPD', value: player.metrics.speed },
          { label: 'SHT', value: player.metrics.shooting },
          { label: 'PAS', value: player.metrics.passingAccuracy },
          { label: 'DRI', value: player.metrics.dribbling },
          { label: 'STA', value: player.metrics.stamina },
          { label: 'DEF', value: player.metrics.defending },
        ].map(m => (
          <div key={m.label} className="bg-charcoal-800/50 rounded-lg p-2 text-center">
            <div className="text-charcoal-500">{m.label}</div>
            <div className={`font-semibold ${m.value >= 80 ? 'text-lime-400' : m.value >= 60 ? 'text-white' : 'text-charcoal-300'}`}>{m.value}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Badge variant={player.verified ? 'green' : 'gray'} size="sm">
          {player.verified ? 'Verified' : 'Pending'}
        </Badge>
        <span className="text-xs text-charcoal-500">{player.school.split(',')[0]}</span>
      </div>

      <div className="flex gap-2">
        <Link
          to={`/demo/player/${player.id}`}
          className="flex-1 py-2 rounded-lg text-sm font-medium text-center bg-charcoal-800 text-charcoal-300 border border-charcoal-700 hover:border-charcoal-500 transition-colors"
        >
          View Profile
        </Link>
        <button
          onClick={() => onCompareToggle(player.id)}
          disabled={compareDisabled}
          className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-all ${
            isSelected
              ? 'bg-lime-400/20 text-lime-400 border-lime-400/30'
              : compareDisabled
              ? 'bg-charcoal-800 text-charcoal-600 border-charcoal-700 cursor-not-allowed'
              : 'bg-charcoal-800 text-charcoal-300 border-charcoal-700 hover:border-charcoal-500'
          }`}
        >
          {isSelected ? '✓' : '+'}
        </button>
      </div>
    </div>
  );
}

function ComparePanel({ players: comparePlayers, onRemove, onClear }: {
  players: Player[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  const metrics: { key: keyof Player['metrics']; label: string }[] = [
    { key: 'speed', label: 'Speed' },
    { key: 'stamina', label: 'Stamina' },
    { key: 'passingAccuracy', label: 'Passing' },
    { key: 'shooting', label: 'Shooting' },
    { key: 'dribbling', label: 'Dribbling' },
    { key: 'defending', label: 'Defending' },
  ];

  return (
    <div className="glass-card p-6 mb-6 border-lime-400/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Player Comparison ({comparePlayers.length}/3)</h3>
        <button onClick={onClear} className="text-sm text-charcoal-400 hover:text-white cursor-pointer bg-transparent border-none">
          Clear
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-charcoal-700">
              <th className="text-left py-2 pr-4 text-charcoal-400 font-medium">Metric</th>
              {comparePlayers.map(p => (
                <th key={p.id} className="text-center py-2 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white font-medium">{p.name.split(' ')[0]}</span>
                    <button onClick={() => onRemove(p.id)} className="text-charcoal-500 hover:text-red-400 cursor-pointer bg-transparent border-none">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-charcoal-800">
              <td className="py-2 pr-4 text-charcoal-400">Overall</td>
              {comparePlayers.map(p => {
                const isMax = p.overallRating === Math.max(...comparePlayers.map(x => x.overallRating));
                return (
                  <td key={p.id} className={`text-center py-2 px-4 font-bold ${isMax ? 'text-lime-400' : 'text-white'}`}>
                    {p.overallRating}
                  </td>
                );
              })}
            </tr>
            {metrics.map(m => (
              <tr key={m.key} className="border-b border-charcoal-800">
                <td className="py-2 pr-4 text-charcoal-400">{m.label}</td>
                {comparePlayers.map(p => {
                  const val = p.metrics[m.key];
                  const isMax = val === Math.max(...comparePlayers.map(x => x.metrics[m.key]));
                  return (
                    <td key={p.id} className="text-center py-2 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className={`font-semibold ${isMax ? 'text-lime-400' : 'text-white'}`}>{val}</span>
                        <div className="w-16 hidden sm:block">
                          <MetricBar label="" value={val} />
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="border-b border-charcoal-800">
              <td className="py-2 pr-4 text-charcoal-400">Age</td>
              {comparePlayers.map(p => (
                <td key={p.id} className="text-center py-2 px-4 text-white">{p.age}</td>
              ))}
            </tr>
            <tr>
              <td className="py-2 pr-4 text-charcoal-400">Position</td>
              {comparePlayers.map(p => (
                <td key={p.id} className="text-center py-2 px-4 text-white">{p.position}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
