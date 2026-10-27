import { eventData } from '../data/event';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, Sparkles, ExternalLink, Calendar, MapPin, Trophy, Mail } from 'lucide-react';

export function FinalCTA() {
  return (
    <section
      id="register"
      aria-label="Registration and Final Call to Action"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#050610]"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Reveal className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#1fe0a0] px-4 py-1.5 rounded-full bg-[#1fe0a0]/10 border border-[#1fe0a0]/25 inline-block mb-4 font-bold">
              SEC // 09 · REGISTRATION PORTAL
            </span>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Ready to code, create &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] via-[#43e6b5] to-[#1fe0a0]">
                conquer?
              </span>
            </h2>
            <p className="mt-5 text-[#B9B4CA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Step into the 24-hour crucible at Walchand College of Engineering, Sangli. Team registrations are open on Unstop. Round 1 entry is 100% free.
            </p>
          </Reveal>

          {/* Central Registration Card */}
          <Reveal delay={0.12}>
            <div className="mt-12 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 p-8 sm:p-12 shadow-2xl backdrop-blur-xl text-center relative overflow-hidden">
              <div className="w-20 h-20 rounded-2xl bg-white p-3 mx-auto flex items-center justify-center shadow-lg mb-6">
                <img
                  src="/assets/unstop_logo.jpg-BAMEIG7b.jpeg"
                  alt="Unstop"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#2db7ff] font-bold block mb-2">
                OFFICIAL PLATFORM REGISTRATION
              </span>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Register Your Team on Unstop
              </h3>

              <p className="text-sm sm:text-base text-[#c7cfd9] max-w-lg mx-auto mb-8 leading-relaxed">
                Form a team of 2 to 4 members from your college and submit your Round 1 abstract directly on the official Unstop hackathon portal.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={eventData.unstopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-xl shadow-[#1fe0a0]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Register on Unstop</span>
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>

                <a
                  href="#tracks"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
                >
                  <span>Explore Problem Statements</span>
                  <ArrowUpRight className="w-4 h-4 text-[#2db7ff]" />
                </a>
              </div>

              {/* Key Reminders Bar */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
                  <Trophy className="w-5 h-5 text-[#2db7ff] shrink-0" />
                  <div>
                    <div className="font-mono text-xs text-white font-bold">₹1,00,000+ Prize Pool</div>
                    <div className="text-xs text-[#8E89AA]">Cash bounties & internships</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
                  <Calendar className="w-5 h-5 text-[#1fe0a0] shrink-0" />
                  <div>
                    <div className="font-mono text-xs text-white font-bold">March 20–21, 2027</div>
                    <div className="text-xs text-[#8E89AA]">24-Hour Offline Sprint</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
                  <MapPin className="w-5 h-5 text-[#9c7eff] shrink-0" />
                  <div>
                    <div className="font-mono text-xs text-white font-bold">WCE Sangli Campus</div>
                    <div className="text-xs text-[#8E89AA]">Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}