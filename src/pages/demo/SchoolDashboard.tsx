import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Upload, Users, TrendingUp, ShieldCheck, BarChart3,
  Star, Play, CheckCircle2, Loader2, Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { players } from '../../data/players';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const allRoster = players.slice(0, 10);

type UploadState = 'idle' | 'uploading' | 'analyzing' | 'done';

const teamMetricsData = [
  { name: 'Speed', avg: 80, best: 92 },
  { name: 'Stamina', avg: 82, best: 90 },
  { name: 'Passing', avg: 77, best: 90 },
  { name: 'Shooting', avg: 74, best: 91 },
  { name: 'Dribbling', avg: 78, best: 90 },
  { name: 'Defending', avg: 56, best: 92 },
];

export default function SchoolDashboard() {
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [activeTab, setActiveTab] = useState<'roster' | 'analytics' | 'upload'>('roster');

  const simulateUpload = () => {
    setUploadState('uploading');
    setTimeout(() => setUploadState('analyzing'), 1500);
    setTimeout(() => setUploadState('done'), 4000);
  };

  const resetUpload = () => setUploadState('idle');

  const verifiedCount = allRoster.filter(p => p.verified).length;
  const avgRating = (allRoster.reduce((s, p) => s + p.overallRating, 0) / allRoster.length).toFixed(1);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="lime" size="md">Demo</Badge>
              <h1 className="text-2xl font-bold text-white">School Dashboard</h1>
            </div>
            <p className="text-charcoal-400 text-sm">Modern School, Delhi — Coach's view with mock data</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" to="/demo/scout-search">
              Scout Search
            </Button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{allRoster.length}</div>
                <div className="text-xs text-charcoal-400">Total Players</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{verifiedCount}</div>
                <div className="text-xs text-charcoal-400">Verified Profiles</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{avgRating}</div>
                <div className="text-xs text-charcoal-400">Avg Rating</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-xs text-charcoal-400">Matches Analyzed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-charcoal-800/50 rounded-xl p-1 w-fit">
          {(['roster', 'analytics', 'upload'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer border-none ${
                activeTab === tab
                  ? 'bg-charcoal-700 text-white'
                  : 'text-charcoal-400 hover:text-white bg-transparent'
              }`}
            >
              {tab === 'roster' && 'Roster'}
              {tab === 'analytics' && 'Team Analytics'}
              {tab === 'upload' && 'Upload & Analyze'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'roster' && (
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-charcoal-700 bg-charcoal-800/50">
                    <th className="text-left py-3 px-4 font-medium text-charcoal-400">Player</th>
                    <th className="text-left py-3 px-3 font-medium text-charcoal-400">Position</th>
                    <th className="text-center py-3 px-3 font-medium text-charcoal-400">Age</th>
                    <th className="text-center py-3 px-3 font-medium text-charcoal-400 hidden sm:table-cell">SPD</th>
                    <th className="text-center py-3 px-3 font-medium text-charcoal-400 hidden sm:table-cell">SHT</th>
                    <th className="text-center py-3 px-3 font-medium text-charcoal-400 hidden sm:table-cell">PAS</th>
                    <th className="text-center py-3 px-3 font-medium text-charcoal-400">Rating</th>
                    <th className="text-center py-3 px-3 font-medium text-charcoal-400">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-charcoal-400">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {allRoster.map(player => (
                    <tr key={player.id} className="border-b border-charcoal-800 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-pitch-800 border border-pitch-600 flex items-center justify-center text-lime-400 font-bold text-xs shrink-0">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-white font-medium">{player.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-charcoal-300">{player.position}</td>
                      <td className="py-3 px-3 text-center text-charcoal-300">{player.age}</td>
                      <td className="py-3 px-3 text-center text-charcoal-300 hidden sm:table-cell">{player.metrics.speed}</td>
                      <td className="py-3 px-3 text-center text-charcoal-300 hidden sm:table-cell">{player.metrics.shooting}</td>
                      <td className="py-3 px-3 text-center text-charcoal-300 hidden sm:table-cell">{player.metrics.passingAccuracy}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`font-semibold ${player.overallRating >= 80 ? 'text-lime-400' : 'text-white'}`}>
                          {player.overallRating}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Badge variant={player.verified ? 'green' : 'yellow'} size="sm">
                          {player.verified ? 'Verified' : 'Pending'}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          to={`/demo/player/${player.id}`}
                          className="text-lime-400 hover:underline text-xs font-medium"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Team Metrics Overview</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teamMetricsData} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                    <XAxis dataKey="name" tick={{ fill: '#9e9e9e', fontSize: 12 }} axisLine={{ stroke: '#2a2a2a' }} />
                    <YAxis domain={[0, 100]} tick={{ fill: '#616161', fontSize: 12 }} axisLine={{ stroke: '#2a2a2a' }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff' }}
                      cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    />
                    <Bar dataKey="avg" name="Team Average" fill="#c4f53b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="best" name="Best Player" fill="#2e7d32" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-base font-semibold text-white mb-4">Position Distribution</h3>
                <div className="space-y-3">
                  {['Forward', 'Midfielder', 'Defender', 'Goalkeeper', 'Winger', 'Striker'].map(pos => {
                    const count = allRoster.filter(p => p.position === pos).length;
                    return (
                      <div key={pos} className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-300">{pos}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-charcoal-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-lime-400 rounded-full"
                              style={{ width: `${(count / allRoster.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-white font-medium w-6 text-right">{count}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-base font-semibold text-white mb-4">Top Performers</h3>
                <div className="space-y-3">
                  {[...allRoster].sort((a, b) => b.overallRating - a.overallRating).slice(0, 5).map((p, i) => (
                    <div key={p.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          i === 0 ? 'bg-amber-400/20 text-amber-400' : 'bg-charcoal-800 text-charcoal-400'
                        }`}>
                          {i + 1}
                        </span>
                        <Link to={`/demo/player/${p.id}`} className="text-sm text-white hover:text-lime-400 transition-colors">
                          {p.name}
                        </Link>
                      </div>
                      <span className="text-sm font-semibold text-lime-400">{p.overallRating}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-lg font-semibold text-white mb-2">Upload Match Footage</h2>
              <p className="text-sm text-charcoal-400 mb-6">
                Upload match footage to get AI-analyzed metrics for all tagged players. This is a simulated demo.
              </p>

              {uploadState === 'idle' && (
                <div className="border-2 border-dashed border-charcoal-700 rounded-xl p-12 text-center hover:border-charcoal-600 transition-colors">
                  <Upload className="w-12 h-12 text-charcoal-600 mx-auto mb-4" />
                  <p className="text-charcoal-300 mb-2">Drop match footage here or click to browse</p>
                  <p className="text-xs text-charcoal-500 mb-6">MP4, MOV up to 2GB</p>
                  <Button variant="primary" onClick={simulateUpload}>
                    <Play className="w-4 h-4" /> Simulate Upload
                  </Button>
                </div>
              )}

              {uploadState === 'uploading' && (
                <div className="text-center py-12">
                  <Loader2 className="w-12 h-12 text-lime-400 mx-auto mb-4 animate-spin" />
                  <p className="text-white font-medium mb-2">Uploading match footage...</p>
                  <p className="text-sm text-charcoal-400">Match_vs_StMarys_Dec2024.mp4</p>
                  <div className="w-64 mx-auto mt-4 h-2 bg-charcoal-800 rounded-full overflow-hidden">
                    <div className="h-full bg-lime-400 rounded-full animate-pulse" style={{ width: '60%' }} />
                  </div>
                </div>
              )}

              {uploadState === 'analyzing' && (
                <div className="text-center py-12">
                  <BarChart3 className="w-12 h-12 text-lime-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-white font-medium mb-2">AI analyzing player performance...</p>
                  <p className="text-sm text-charcoal-400 mb-4">Extracting metrics from match footage</p>
                  <div className="space-y-3 max-w-xs mx-auto text-left">
                    {['Detecting players', 'Tracking movement', 'Calculating speed metrics', 'Analyzing passing accuracy', 'Computing final ratings'].map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        {i < 3 ? (
                          <CheckCircle2 className="w-4 h-4 text-lime-400" />
                        ) : i === 3 ? (
                          <Loader2 className="w-4 h-4 text-lime-400 animate-spin" />
                        ) : (
                          <Clock className="w-4 h-4 text-charcoal-600" />
                        )}
                        <span className={`text-sm ${i <= 3 ? 'text-charcoal-200' : 'text-charcoal-500'}`}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {uploadState === 'done' && (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-14 h-14 text-lime-400 mx-auto mb-4" />
                  <p className="text-white font-medium text-lg mb-2">Analysis Complete!</p>
                  <p className="text-sm text-charcoal-400 mb-6">12 players analyzed from match footage</p>

                  <div className="glass-card p-4 mb-6 text-left">
                    <h3 className="text-sm font-semibold text-white mb-3">Analysis Results</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-charcoal-400">Match</span>
                        <span className="text-white">vs St. Mary's</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-charcoal-400">Duration</span>
                        <span className="text-white">78 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-charcoal-400">Players tracked</span>
                        <span className="text-lime-400 font-semibold">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-charcoal-400">Metrics generated</span>
                        <span className="text-lime-400 font-semibold">72</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <Button variant="primary" onClick={() => setActiveTab('roster')}>
                      View Roster
                    </Button>
                    <Button variant="secondary" onClick={resetUpload}>
                      Upload Another
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
