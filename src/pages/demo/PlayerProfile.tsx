import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck, MapPin, Calendar, Ruler, Weight, Star,
  Share2, Copy, ArrowLeft, Trophy, Clock, Footprints
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { getPlayerById } from '../../data/players';
import { Badge } from '../../components/ui/Badge';
import { MetricBar } from '../../components/ui/MetricBar';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

export default function PlayerProfile() {
  const { id } = useParams<{ id: string }>();
  const player = getPlayerById(id || '');
  const [copied, setCopied] = useState(false);

  if (!player) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Player not found</h1>
        <Button variant="primary" to="/demo/scout-search">Back to Search</Button>
      </div>
    );
  }

  const radarData = [
    { metric: 'Speed', value: player.metrics.speed },
    { metric: 'Stamina', value: player.metrics.stamina },
    { metric: 'Passing', value: player.metrics.passingAccuracy },
    { metric: 'Shooting', value: player.metrics.shooting },
    { metric: 'Dribbling', value: player.metrics.dribbling },
    { metric: 'Defending', value: player.metrics.defending },
  ];

  const initials = player.name.split(' ').map(n => n[0]).join('');
  const profileUrl = `scoutx.in/player/${player.id}`;

  const totalGoals = player.matches.reduce((s, m) => s + m.goals, 0);
  const totalAssists = player.matches.reduce((s, m) => s + m.assists, 0);
  const avgRating = (player.matches.reduce((s, m) => s + m.rating, 0) / player.matches.length).toFixed(1);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${profileUrl}`).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back + Demo Badge */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/demo/scout-search" className="flex items-center gap-1 text-charcoal-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Search
          </Link>
          <Badge variant="lime" size="md">Demo Profile</Badge>
        </div>

        {/* Profile Header */}
        <div className="glass-card p-6 lg:p-8 mb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 rounded-2xl bg-pitch-800 border-2 border-pitch-600 flex items-center justify-center text-lime-400 font-bold text-2xl shrink-0">
                {initials}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl lg:text-3xl font-bold text-white">{player.name}</h1>
                  {player.verified && (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/20">
                      <ShieldCheck className="w-4 h-4 text-lime-400" />
                      <span className="text-xs font-semibold text-lime-400">Verified</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal-400">
                  <span className="font-medium text-white">#{player.jerseyNumber} · {player.position}</span>
                  <span className="text-charcoal-600">·</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{player.city}, {player.state}</span>
                  <span className="text-charcoal-600">·</span>
                  <span>{player.school}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-charcoal-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />Age {player.age}</span>
                  <span className="flex items-center gap-1"><Ruler className="w-3.5 h-3.5" />{player.height} cm</span>
                  <span className="flex items-center gap-1"><Weight className="w-3.5 h-3.5" />{player.weight} kg</span>
                  <span className="flex items-center gap-1"><Footprints className="w-3.5 h-3.5" />{player.preferredFoot} foot</span>
                </div>
              </div>
            </div>

            <div className="lg:ml-auto flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                <span className="text-3xl font-bold text-white">{player.overallRating}</span>
                <span className="text-sm text-charcoal-400">Overall</span>
              </div>
              <div className="text-xs text-charcoal-500">Last updated: {player.lastUpdated}</div>
            </div>
          </div>

          {/* Shareable Link */}
          <div className="mt-6 pt-6 border-t border-charcoal-700">
            <div className="flex items-center gap-2 text-sm mb-2">
              <Share2 className="w-4 h-4 text-lime-400" />
              <span className="text-charcoal-300 font-medium">Shareable Profile Link</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 px-4 py-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-charcoal-300 font-mono text-sm truncate">
                {profileUrl}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-lime-400/10 text-lime-400 border border-lime-400/20 text-sm font-medium hover:bg-lime-400/20 transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column: Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Radar Chart */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Performance Metrics</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="70%">
                    <PolarGrid stroke="#2a2a2a" />
                    <PolarAngleAxis
                      dataKey="metric"
                      tick={{ fill: '#9e9e9e', fontSize: 12 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: '#616161', fontSize: 10 }}
                    />
                    <Radar
                      name="Player"
                      dataKey="value"
                      stroke="#c4f53b"
                      fill="#c4f53b"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                <MetricBar label="Speed" value={player.metrics.speed} />
                <MetricBar label="Stamina" value={player.metrics.stamina} />
                <MetricBar label="Passing" value={player.metrics.passingAccuracy} />
                <MetricBar label="Shooting" value={player.metrics.shooting} />
                <MetricBar label="Dribbling" value={player.metrics.dribbling} />
                <MetricBar label="Defending" value={player.metrics.defending} />
              </div>
            </div>

            {/* Match History */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Match History</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-charcoal-700 text-charcoal-400">
                      <th className="text-left py-2 pr-3 font-medium">Date</th>
                      <th className="text-left py-2 pr-3 font-medium">Opponent</th>
                      <th className="text-left py-2 pr-3 font-medium hidden sm:table-cell">Tournament</th>
                      <th className="text-center py-2 px-2 font-medium">G</th>
                      <th className="text-center py-2 px-2 font-medium">A</th>
                      <th className="text-center py-2 px-2 font-medium hidden sm:table-cell">Min</th>
                      <th className="text-center py-2 pl-2 font-medium">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {player.matches.map((match, i) => (
                      <tr key={i} className="border-b border-charcoal-800 hover:bg-white/[0.02] transition-colors">
                        <td className="py-2.5 pr-3 text-charcoal-400">{match.date}</td>
                        <td className="py-2.5 pr-3 text-white">{match.opponent}</td>
                        <td className="py-2.5 pr-3 text-charcoal-400 hidden sm:table-cell">{match.tournament}</td>
                        <td className="py-2.5 px-2 text-center font-semibold text-white">{match.goals}</td>
                        <td className="py-2.5 px-2 text-center font-semibold text-white">{match.assists}</td>
                        <td className="py-2.5 px-2 text-center text-charcoal-400 hidden sm:table-cell">{match.minutesPlayed}'</td>
                        <td className="py-2.5 pl-2 text-center">
                          <span className={`font-semibold ${match.rating >= 8 ? 'text-lime-400' : match.rating >= 7 ? 'text-emerald-400' : 'text-white'}`}>
                            {match.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Summary + Highlights */}
          <div className="space-y-6">
            {/* Season Stats */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Season Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-charcoal-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{player.matches.length}</div>
                  <div className="text-xs text-charcoal-400 mt-1">Matches</div>
                </div>
                <div className="bg-charcoal-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-lime-400">{totalGoals}</div>
                  <div className="text-xs text-charcoal-400 mt-1">Goals</div>
                </div>
                <div className="bg-charcoal-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{totalAssists}</div>
                  <div className="text-xs text-charcoal-400 mt-1">Assists</div>
                </div>
                <div className="bg-charcoal-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">{avgRating}</div>
                  <div className="text-xs text-charcoal-400 mt-1">Avg Rating</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Highlights</h2>
              <div className="space-y-3">
                {player.highlightTags.map(tag => (
                  <div key={tag} className="flex items-center gap-3 p-3 rounded-xl bg-charcoal-800/50 border border-charcoal-700">
                    <div className="w-10 h-10 rounded-lg bg-pitch-800 border border-pitch-600 flex items-center justify-center shrink-0">
                      <Trophy className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white font-medium">{tag}</div>
                      <div className="text-xs text-charcoal-500 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> Match highlight
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio Card */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Player Info</h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Position', value: player.position },
                  { label: 'School', value: player.school },
                  { label: 'Location', value: `${player.city}, ${player.state}` },
                  { label: 'Age', value: `${player.age} years` },
                  { label: 'Height', value: `${player.height} cm` },
                  { label: 'Weight', value: `${player.weight} kg` },
                  { label: 'Preferred Foot', value: player.preferredFoot },
                  { label: 'Jersey', value: `#${player.jerseyNumber}` },
                  { label: 'Status', value: player.verified ? 'Verified' : 'Pending verification' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-charcoal-800 last:border-0">
                    <span className="text-charcoal-400">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
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
