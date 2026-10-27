import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  X,
  FileText,
  CheckCircle,
  Cpu,
  Layers,
} from 'lucide-react';

function TrackModal({ item, onClose }) {
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

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c0d1c] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/80"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#8E89AA] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[#2db7ff]/10 text-[#2db7ff] border border-[#2db7ff]/30">
            {item.category || 'CHALLENGE'}
          </span>
          {item.badge && (
            <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[#1fe0a0]/10 text-[#1fe0a0] border border-[#1fe0a0]/30">
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white pr-8 mb-3">
          {item.modal?.heading || item.title}
        </h3>

        <p className="text-[#B9B4CA] text-sm sm:text-base leading-relaxed mb-6">
          {item.modal?.details || item.description}
        </p>

        {/* Key Points / Deliverables */}
        {item.modal?.points && (
          <div className="mb-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#1fe0a0] mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Scope & Problem Highlights</span>
            </h4>
            <div className="space-y-2.5">
              {item.modal.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c7cfd9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] mt-2 shrink-0" />
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources & PDF Link */}
        {item.modal?.resources && (
          <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#2db7ff]/10 text-[#2db7ff]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-white font-semibold">
                  {item.modal.resources.label}
                </div>
                <div className="text-xs text-[#c7cfd9]">
                  Official document & evaluation guidelines
                </div>
              </div>
            </div>
            <a
              href={item.modal.resources.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold text-[#2db7ff] hover:text-white bg-[#2db7ff]/15 hover:bg-[#2db7ff]/25 border border-[#2db7ff]/30 transition-all shrink-0"
            >
              <span>Download PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-mono text-xs text-[#8E89AA] hover:text-white bg-white/5 transition-colors"
          >
            Close
          </button>
          <a
            href="#register"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-lg shadow-[#1fe0a0]/25 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Register For This Track</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function Challenges() {
  const [activeTrack, setActiveTrack] = useState('novice');
  const [selectedItem, setSelectedItem] = useState(null);

  const items = activeTrack === 'novice' ? eventData.noviceTracks : eventData.expertTracks;

  return (
    <section
      id="tracks"
      aria-label="Hackathon Tracks & Problem Statements"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#070814]"
    >
      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 02"
          kicker="Tracks & Challenges"
          title="CHOOSE YOUR"
          accent="DOMAIN."
          description="Tailored challenge tiers engineered for both rising talent and seasoned developers."
          align="center"
        />

        {/* Interactive Track Switcher Pill */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="relative inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-xl">
              <button
                onClick={() => setActiveTrack('novice')}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                  activeTrack === 'novice'
                    ? 'text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] shadow-md shadow-[#1fe0a0]/30'
                    : 'text-[#8E89AA] hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Novice Track</span>
              </button>

              <button
                onClick={() => setActiveTrack('expert')}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                  activeTrack === 'expert'
                    ? 'text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] shadow-md shadow-[#1fe0a0]/30'
                    : 'text-[#8E89AA] hover:text-white'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Expert Track</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Track Eligibility Description */}
        <Reveal delay={0.15}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            {activeTrack === 'novice' ? (
              <p className="text-[#c7cfd9] text-base leading-relaxed">
                Exclusively for <span className="text-white font-bold">1st & 2nd Year</span> undergraduate students. A beginner-friendly runway focused on core innovation, IoT, Web, FinTech, and guided mentorship.
              </p>
            ) : (
              <p className="text-[#c7cfd9] text-base leading-relaxed">
                For <span className="text-white font-bold">3rd & 4th Year</span> students ready to architect production-grade, research-caliber systems in knowledge graphs, content-addressable storage, and verified RAG.
              </p>
            )}
            <div className="mt-4 h-0.5 w-24 mx-auto bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] rounded-full" />
          </div>
        </Reveal>

        {/* Track Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className={`grid grid-cols-1 ${
              activeTrack === 'novice' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'
            } gap-6`}
          >
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative cursor-pointer flex flex-col justify-between rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#2db7ff]/50 p-6 sm:p-7 transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg shadow-black/40 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db7ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar with Icon/Image & Tag */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    {item.image && (
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:border-[#2db7ff]/40 transition-colors">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
                        />
                      </div>
                    )}
                    <span className="font-mono text-xs text-[#1fe0a0] uppercase tracking-wider px-3 py-1 rounded-full bg-[#1fe0a0]/10 border border-[#1fe0a0]/25 font-bold">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2db7ff] group-hover:to-[#1fe0a0] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#c7cfd9] leading-relaxed line-clamp-3 mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg font-mono text-xs text-[#c7cfd9] bg-white/[0.05] border border-white/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-mono text-[#2db7ff] group-hover:text-white transition-colors font-semibold">
                    <span className="tracking-wider uppercase">View Problem Dossier</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2db7ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <TrackModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}