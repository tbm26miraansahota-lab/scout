import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface KPICardProps {
  value: string;
  label: string;
  icon: ReactNode;
  index?: number;
}

export function KPICard({ value, label, icon, index = 0 }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 text-center group hover:border-lime-400/15 transition-all duration-500 relative overflow-hidden"
    >
      {/* Subtle shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-lime-400/[0.03] to-transparent" />

      <div className="relative">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-lime-400/10 text-lime-400 mb-4 group-hover:bg-lime-400/15 group-hover:glow-lime transition-all duration-500">
          {icon}
        </div>
        <div className="text-3xl font-extrabold text-white mb-1 tracking-tight">{value}</div>
        <div className="text-xs text-charcoal-500 uppercase tracking-wider font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
