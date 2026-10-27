import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';

export function Glimpses() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="glimpses"
      aria-label="Past Edition Glimpses"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#070814]"
    >
      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 05"
          kicker="Visual Archives"
          title="PAST"
          accent="GLIMPSES."
          description="High-octane moments from previous editions of WCE Hackathon — 24 hours of pure building."
          align="center"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {(eventData.glimpses || []).map((photo, i) => (
            <Reveal key={photo.url} delay={i * 0.08}>
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-[#1fe0a0]/50 bg-white/[0.02] shadow-xl transition-all duration-500 transform hover:-translate-y-1.5"
              >
                {/* Photo Aspect Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* View icon badge */}
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption bar */}
                <div className="p-5 bg-gradient-to-b from-[#0c0d1c] to-[#070814]">
                  <div className="flex items-center gap-2 mb-1">
                    <Camera className="w-3.5 h-3.5 text-[#1fe0a0]" />
                    <h3 className="font-display font-bold text-base text-white group-hover:text-[#1fe0a0] transition-colors">
                      {photo.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#929caa] leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden bg-[#0c0d1c] border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#0c0d1c] border-t border-white/10">
                <div className="flex items-center gap-2 mb-1 font-mono text-xs text-[#1fe0a0]">
                  <Sparkles className="w-4 h-4" />
                  <span>WCE HACKATHON LIVE EXPERIENCE</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-sm text-[#B9B4CA] leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
