interface MetricBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
}

export function MetricBar({ label, value, maxValue = 100, color }: MetricBarProps) {
  const percentage = (value / maxValue) * 100;

  const getColor = () => {
    if (color) return color;
    if (percentage >= 80) return 'bg-lime-400';
    if (percentage >= 60) return 'bg-emerald-400';
    if (percentage >= 40) return 'bg-amber-400';
    return 'bg-red-400';
  };

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-charcoal-300">{label}</span>
        <span className="text-white font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-charcoal-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${getColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
