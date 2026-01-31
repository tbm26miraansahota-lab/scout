import { useState } from 'react';
import { ArrowRight, Play, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { PlayerCardMock } from '../ui/PlayerCardMock';
import { ScoutSearchMini } from '../ui/ScoutSearchMini';

export function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to backend / Netlify form
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Layered background */}
      <div className="absolute inset-0 pitch-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(196,245,59,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,245,59,0.05),transparent_40%)]" />

      {/* Full pitch SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="heroGlow1" cx="65%" cy="40%" r="35%">
            <stop offset="0%" stopColor="#c4f53b" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#c4f53b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGlow2" cx="75%" cy="60%" r="25%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Ambient glows */}
        <rect width="1200" height="700" fill="url(#heroGlow1)" />
        <rect width="1200" height="700" fill="url(#heroGlow2)" />
        {/* Pitch markings */}
        <g opacity="0.04" stroke="#c4f53b" fill="none">
          <rect x="100" y="50" width="1000" height="600" strokeWidth="1" rx="4" />
          <line x1="600" y1="50" x2="600" y2="650" strokeWidth="0.8" />
          <circle cx="600" cy="350" r="80" strokeWidth="0.8" />
          <circle cx="600" cy="350" r="3" fill="#c4f53b" />
          <rect x="100" y="165" width="150" height="270" strokeWidth="0.6" />
          <rect x="100" y="225" width="60" height="150" strokeWidth="0.5" />
          <circle cx="210" cy="350" r="3" fill="#c4f53b" opacity="0.5" />
          <rect x="950" y="165" width="150" height="270" strokeWidth="0.6" />
          <rect x="1040" y="225" width="60" height="150" strokeWidth="0.5" />
          <circle cx="990" cy="350" r="3" fill="#c4f53b" opacity="0.5" />
          <path d="M100 60 A10 10 0 0 1 110 50" strokeWidth="0.5" />
          <path d="M1090 50 A10 10 0 0 1 1100 60" strokeWidth="0.5" />
          <path d="M100 640 A10 10 0 0 0 110 650" strokeWidth="0.5" />
          <path d="M1090 650 A10 10 0 0 0 1100 640" strokeWidth="0.5" />
          <path d="M250 265 A85 85 0 0 1 250 435" strokeWidth="0.5" />
          <path d="M950 265 A85 85 0 0 0 950 435" strokeWidth="0.5" />
        </g>
        {/* Decorative dotted trails */}
        <g opacity="0.06">
          <path d="M300 500 Q450 380 600 350 Q750 320 850 250" stroke="#c4f53b" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
          <path d="M200 200 Q350 280 500 350 Q650 420 800 380" stroke="#22d3ee" strokeWidth="1" fill="none" strokeDasharray="3 8" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-sm font-medium text-lime-400 uppercase tracking-wider">
                Data-Driven &middot; Future-Ready
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight">
              Revolutionise{' '}
              <span className="gradient-text">Talent</span>
              <br />
              Discovery
            </h1>

            <p className="text-lg text-charcoal-300 max-w-xl mb-8 leading-relaxed">
              Step into the future of grassroots football scouting. ScoutX empowers
              coaches and scouts with AI-powered analytics and immersive tools to find
              and elevate India's hidden talent. Say goodbye to lost videos, endless
              spreadsheets and invisible players.
            </p>

            {/* Email signup form */}
            {submitted ? (
              <div className="flex items-center gap-2 text-lime-400 font-medium mb-10">
                <Mail className="w-5 h-5" />
                <span>You're on the list! We'll be in touch.</span>
              </div>
            ) : (
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row items-start gap-3 mb-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="w-full sm:w-72 px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400/40 focus:border-lime-400/40 transition-all"
                />
                <Button variant="primary" size="lg" type="submit">
                  Notify Me
                </Button>
              </form>
            )}

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <Button variant="primary" size="lg" to="/demo/scout-search" icon={<Play className="w-5 h-5" />}>
                View Demo
              </Button>
              <Button variant="outline" size="lg" to="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                Join Waitlist
              </Button>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-white/10">
              {[
                { value: '99.9%', label: 'Invisible Talent' },
                { value: '168M', label: 'Youth Players' },
                { value: '0.002%', label: 'Scouted Today' },
              ].map(stat => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-lime-400">{stat.value}</span>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating product cards */}
          <div className="hidden lg:block relative">
            {/* Ambient glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-400/[0.04] blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-cyan-400/[0.03] blur-[80px] pointer-events-none" />

            {/* Player Card — front, floats slower */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative z-10"
            >
              <div className="hero-float-slow">
                <PlayerCardMock />
              </div>
            </motion.div>

            {/* Scout Search Mini — behind, offset, floats faster */}
            <motion.div
              initial={{ opacity: 0, x: 60, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute -bottom-8 -left-12 z-[5] w-[320px]"
            >
              <div className="hero-float-fast">
                <ScoutSearchMini />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />
    </section>
  );
}
