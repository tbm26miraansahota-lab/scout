import { Users, TrendingUp, Shield, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const proofPoints = [
  { icon: <Users className="w-4 h-4" />, text: '75+ coaches interviewed across India' },
  { icon: <TrendingUp className="w-4 h-4" />, text: '450+ early signups on waitlist' },
  { icon: <Shield className="w-4 h-4" />, text: '12 schools committed to paid pilot' },
  { icon: <Eye className="w-4 h-4" />, text: '3 ISL youth scouts expressed interest' },
];

export function SocialProof() {
  return (
    <section className="py-5 border-y border-white/[0.04] bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {proofPoints.map((point, i) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-2 text-sm text-charcoal-400"
            >
              <span className="text-lime-400/70">{point.icon}</span>
              <span>{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
