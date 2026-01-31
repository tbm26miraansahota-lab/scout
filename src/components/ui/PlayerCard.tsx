import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Star } from 'lucide-react';
import type { Player } from '../../data/players';
import { Badge } from './Badge';

interface PlayerCardProps {
  player: Player;
  showCompare?: boolean;
  isSelected?: boolean;
  onCompareToggle?: (id: string) => void;
}

export function PlayerCard({ player, showCompare, isSelected, onCompareToggle }: PlayerCardProps) {
  const initials = player.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="glass-card p-5 hover:border-lime-400/20 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-pitch-800 border border-pitch-600 flex items-center justify-center text-lime-400 font-bold text-lg shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Link
              to={`/demo/player/${player.id}`}
              className="text-white font-semibold hover:text-lime-400 transition-colors truncate"
            >
              {player.name}
            </Link>
            {player.verified && (
              <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal-400 mb-3">
            <span>{player.position}</span>
            <span className="text-charcoal-600">·</span>
            <span>Age {player.age}</span>
            <span className="text-charcoal-600">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {player.city}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white font-semibold">{player.overallRating}</span>
            </div>
            <Badge variant={player.verified ? 'green' : 'gray'}>
              {player.verified ? 'Verified' : 'Pending'}
            </Badge>
            <Badge variant="lime">{player.school.split(',')[0]}</Badge>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-charcoal-800/50 rounded-lg p-2 text-center">
              <div className="text-charcoal-400">SPD</div>
              <div className="text-white font-semibold">{player.metrics.speed}</div>
            </div>
            <div className="bg-charcoal-800/50 rounded-lg p-2 text-center">
              <div className="text-charcoal-400">SHT</div>
              <div className="text-white font-semibold">{player.metrics.shooting}</div>
            </div>
            <div className="bg-charcoal-800/50 rounded-lg p-2 text-center">
              <div className="text-charcoal-400">PAS</div>
              <div className="text-white font-semibold">{player.metrics.passingAccuracy}</div>
            </div>
          </div>
        </div>
      </div>
      {showCompare && onCompareToggle && (
        <button
          onClick={() => onCompareToggle(player.id)}
          className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border ${
            isSelected
              ? 'bg-lime-400/20 text-lime-400 border-lime-400/30'
              : 'bg-charcoal-800 text-charcoal-300 border-charcoal-700 hover:border-charcoal-500'
          }`}
        >
          {isSelected ? '✓ Selected for Compare' : 'Add to Compare'}
        </button>
      )}
    </div>
  );
}
