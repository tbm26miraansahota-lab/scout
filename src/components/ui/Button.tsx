import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', to, children, icon, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:ring-offset-2 focus:ring-offset-charcoal-950';

  const variants = {
    primary: 'bg-lime-400 text-charcoal-950 hover:bg-lime-500 active:bg-lime-600 glow-lime',
    secondary: 'bg-charcoal-700 text-white hover:bg-charcoal-600 border border-charcoal-600',
    ghost: 'text-charcoal-300 hover:text-white hover:bg-white/5',
    outline: 'border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:border-lime-400/60',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
