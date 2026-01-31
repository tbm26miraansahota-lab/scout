import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'lime' | 'green' | 'yellow' | 'red' | 'gray';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'lime', size = 'sm' }: BadgeProps) {
  const variants = {
    lime: 'bg-lime-400/15 text-lime-400 border-lime-400/20',
    green: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    yellow: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    red: 'bg-red-500/15 text-red-400 border-red-500/20',
    gray: 'bg-charcoal-600/50 text-charcoal-300 border-charcoal-600',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center gap-1 font-medium rounded-full border ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
