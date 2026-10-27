import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import {
  Trophy,
  Award,
  Sparkles,
  Palette,
  Share2,
  CheckCircle,
  X,
  Briefcase,
  Gift,
} from 'lucide-react';

function SpecialAwardModal({ award, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!award) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        className="relative z-10 w-full max-w-xl rounded-2xl bg-[#0c0d1c] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/80"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#8E89AA] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[#1fe0a0]/10 text-[#1fe0a0] border border-[#1fe0a0]/30">
            {award.track}
          </span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white pr-8 mb-3">
          {award.title}
        </h3>

        <p className="text-[#B9B4CA] text-sm sm:text-base leading-relaxed mb-6">
          {award.description}
        </p>

        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#2db7ff] mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Evaluation Criteria</span>
          </h4>
          <div className="space-y-2.5">
            {award.criteria.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c7cfd9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1fe0a0] mt-2 shrink-0" />
                <span className="leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 mb-6">
          <Gift className="w-5 h-5 text-[#1fe0a0] shrink-0" />
          <div className="text-xs sm:text-sm text-white font-mono">
            <span className="text-[#8E89AA]">Reward: </span>
            {award.prize}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 transition-all"
          >
            Got It
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function Prizes() {
  const [activeTrack, setActiveTrack] = useState('expert');
  const [selectedAward, setSelectedAward] = useState(null);

  const podiums = activeTrack === 'expert' ? eventData.prizesData.expert : eventData.prizesData.novice;

  return (
    <section id="prizes" aria-label="Prizes and Rewards" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(45,183,255,0.08),transparent_70%)] blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 04"
          kicker="Honors & Bounties"
          title="PRIZES &"
          accent="REWARDS."
          description="Competitive rewards, industry internships, and trophies across both tracks."
          align="center"
        />

        {/* Prize Pool Highlight Hero Banner */}
        <Reveal>
          <div className="relative max-w-3xl mx-auto mb-14 text-center rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,224,160,0.15),transparent_60%)]" />
            
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#1fe0a0] block mb-2">
                TOTAL CASH & BOUNTY POOL
              </span>
              <div className="font-display font-extrabold text-5xl sm:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] via-[#43e6b5] to-[#1fe0a0] my-2 filter drop-shadow-[0_0_40px_rgba(31,224,160,0.3)]">
                {eventData.prizesData.totalPool}
              </div>
              <p className="mt-3 text-[#B9B4CA] text-sm sm:text-base max-w-lg mx-auto">
                Plus coveted internship interviews with technology partners, custom trophies, and official certificates of excellence.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Interactive Novice vs Expert Switcher */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg">
              <button
                onClick={() => setActiveTrack('expert')}
                className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                  activeTrack === 'expert'
                    ? 'text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] shadow-md shadow-[#1fe0a0]/30'
                    : 'text-[#8E89AA] hover:text-white'
                }`}
              >
                Expert Track Rewards
              </button>

              <button
                onClick={() => setActiveTrack('novice')}
                className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                  activeTrack === 'novice'
                    ? 'text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] shadow-md shadow-[#1fe0a0]/30'
                    : 'text-[#8E89AA] hover:text-white'
                }`}
              >
                Novice Track Rewards
              </button>
            </div>
          </div>
        </Reveal>

        {/* Podium Cards Grid (Order: 2nd, 1st, 3rd for Olympic layout on desktop) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 items-center"
          >
            {/* 2nd Place */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl bg-white/[0.03] border border-white/15 p-6 sm:p-7 text-center hover:border-slate-300/40 transition-all duration-300 shadow-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-400/15 border border-slate-300/30 text-slate-200 mb-4 font-mono font-bold text-sm">
                  2ND
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8E89AA] mb-1">
                  {podiums[1].title}
                </h4>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white my-2">
                  {podiums[1].amount}
                </div>
                <div className="space-y-2 mt-4 pt-4 border-t border-white/10 text-xs text-[#c7cfd9] font-sans">
                  {podiums[1].perks.map((p, i) => (
                    <div key={i} className="flex items-center justify-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#2db7ff]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 1st Place (Featured & Larger) */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl bg-gradient-to-b from-[#151833] to-[#0c0d1c] border-2 border-[#1fe0a0]/60 p-7 sm:p-9 text-center shadow-2xl shadow-[#1fe0a0]/20 transform md:-translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                  CHAMPION
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 mb-4 font-mono font-bold text-base shadow-[0_0_25px_rgba(251,191,36,0.3)]">
                  <Trophy className="w-8 h-8 text-amber-300" />
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#1fe0a0] mb-1">
                  {podiums[0].title}
                </h4>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white my-2 filter drop-shadow">
                  {podiums[0].amount}
                </div>
                <div className="space-y-2.5 mt-5 pt-5 border-t border-white/15 text-xs sm:text-sm text-white font-sans">
                  {podiums[0].perks.map((p, i) => (
                    <div key={i} className="flex items-center justify-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span className="font-medium">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="order-3">
              <div className="rounded-2xl bg-white/[0.03] border border-white/15 p-6 sm:p-7 text-center hover:border-amber-700/40 transition-all duration-300 shadow-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-700/20 border border-amber-600/30 text-amber-400 mb-4 font-mono font-bold text-sm">
                  3RD
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8E89AA] mb-1">
                  {podiums[2].title}
                </h4>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white my-2">
                  {podiums[2].amount}
                </div>
                <div className="space-y-2 mt-4 pt-4 border-t border-white/10 text-xs text-[#c7cfd9] font-sans">
                  {podiums[2].perks.map((p, i) => (
                    <div key={i} className="flex items-center justify-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#1fe0a0]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Special Recognition Awards (Clickable Modals) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2db7ff]">
              SPECIAL MERIT HONORS
            </span>
            <h3 className="font-display font-bold text-2xl text-white mt-1">
              Category Awards & Goodies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventData.prizesData.specialAwards.map((award) => {
              const Icon = award.id === 'uiux' ? Palette : Share2;
              return (
                <div
                  key={award.id}
                  onClick={() => setSelectedAward(award)}
                  className="group cursor-pointer rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#1fe0a0]/40 p-6 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#1fe0a0] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-[#8E89AA] uppercase tracking-wider">
                        {award.track}
                      </span>
                      <span className="font-mono text-[10px] text-[#1fe0a0] uppercase tracking-wider group-hover:underline">
                        View Criteria →
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-[#1fe0a0] transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-xs text-[#929caa] leading-relaxed mt-1 line-clamp-2">
                      {award.description}
                    </p>
                    <div className="mt-3 text-xs font-mono text-white/80 flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-[#2db7ff]" />
                      <span>{award.prize}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Special Award Modal */}
      <AnimatePresence>
        {selectedAward && (
          <SpecialAwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}