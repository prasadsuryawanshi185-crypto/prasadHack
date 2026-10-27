import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Trophy, Clock, Users, ShieldCheck, Sparkles, Building } from 'lucide-react';

const stats = [
  { value: '24', unit: 'HOURS', label: 'Continuous on-campus engineering crucible' },
  { value: '₹1L+', unit: 'BOUNTIES', label: 'Cash rewards, internships & trophies' },
  { value: '02', unit: 'TRACKS', label: 'Novice & Expert difficulty tiers' },
  { value: '500+', unit: 'DEVELOPERS', label: 'Nationwide engineering participants' },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="About WCE Hackathon 2027"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#070814]"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-xs text-[#1fe0a0] uppercase tracking-[0.2em]">
                  SEC // 01 · The Institution & Symposium
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Where engineering discipline meets{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] via-[#43e6b5] to-[#1fe0a0]">
                  raw ambition.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-[#B9B4CA] text-base sm:text-lg leading-relaxed">
                Organized under the prestigious national-level <strong className="text-white">VISION</strong> symposium by the <strong className="text-[#2db7ff]">WCE ACM Student Chapter</strong> at <strong className="text-white">Walchand College of Engineering, Sangli</strong>, WCE Hackathon brings together the sharpest undergraduate minds across India for an intense 24-hour sprint.
              </p>
              <p className="mt-4 text-[#8E89AA] text-sm sm:text-base leading-relaxed">
                Whether you are a novice building your first IoT prototype or a senior systems engineer developing zero-leakage knowledge graphs and verified RAG pipelines, this arena is calibrated to test, refine, and celebrate your technical craft.
              </p>
            </Reveal>

            {/* Institution Badges */}
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center p-1">
                    <img src="/logos/wce-logo.svg" alt="WCE Sangli" className="w-full h-full object-contain" />
                  </div>
                  <div className="font-mono text-xs">
                    <div className="text-white font-bold">WCE SANGLI</div>
                    <div className="text-[#8E89AA] text-xs font-medium">ESTABLISHED 1947</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center p-1">
                    <img src="/logos/acm-logo.png" alt="WCE ACM SC" className="w-full h-full object-contain" />
                  </div>
                  <div className="font-mono text-xs">
                    <div className="text-white font-bold">WCE ACM SC</div>
                    <div className="text-[#8E89AA] text-xs font-medium">CHARTERED 2016</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Stats Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.08}>
                  <div className="relative group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#1fe0a0]/40 p-6 sm:p-7 transition-all duration-300 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2db7ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="font-display font-extrabold text-3xl sm:text-5xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2db7ff] group-hover:to-[#1fe0a0] transition-colors leading-none">
                        {s.value}
                      </div>
                      <div className="font-mono text-xs text-[#1fe0a0] tracking-wider uppercase mt-2 font-bold">
                        {s.unit}
                      </div>
                      <div className="text-xs sm:text-sm text-[#c7cfd9] leading-relaxed mt-3">
                        {s.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#1fe0a0] shrink-0" />
                <span className="font-mono text-xs text-[#B9B4CA]">
                  {eventData.chapterCharter}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}