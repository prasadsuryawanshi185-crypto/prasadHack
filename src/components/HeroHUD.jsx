import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Code2, Cpu } from 'lucide-react';
import { eventData } from '../data/event';

export function HeroHUD() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [terminalLine, setTerminalLine] = useState(0);

  const logs = [
    { text: '$ wce-hackathon init --edition 2027 --mode offline', color: 'text-[#1fe0a0]' },
    { text: '> [SYSTEM] Connecting to WCE ACM Core Infrastructure...', color: 'text-[#c7cfd9]' },
    { text: '> [STATUS] National 24-Hour Crucible: ARMED & ACTIVE', color: 'text-[#2db7ff]' },
    { text: '> [TRACK 1] Novice Sprint (FE/SE Only): 6 Problem Categories', color: 'text-white' },
    { text: '> [TRACK 2] Expert Crucible (TE/BE): 2 Research-Grade Domains', color: 'text-[#9c7eff]' },
    { text: '> [PRIZES] ₹1,00,000+ Pool Allocated across Champion & Track Bounties', color: 'text-[#1fe0a0]' },
    { text: '> [REGISTRATION] Round 1 Free Entry live on Unstop platform', color: 'text-amber-300' },
    { text: '$ ready_to_build --team-size 2-4 --submit-abstract', color: 'text-[#1fe0a0]' },
  ];

  useEffect(() => {
    if (activeTab !== 'terminal') return;
    const interval = setInterval(() => {
      setTerminalLine((prev) => (prev < logs.length ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="w-full h-full flex flex-col rounded-2xl bg-[#090b14]/90 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-red-500/80" />
          <div className="w-3 h-3 rounded-sm bg-amber-500/80" />
          <div className="w-3 h-3 rounded-sm bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-[#c7cfd9] font-medium hidden sm:inline">
            wce-hackathon-2027 // developer-hud
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
              activeTab === 'terminal'
                ? 'bg-[#1fe0a0]/15 text-[#1fe0a0] font-bold border border-[#1fe0a0]/30'
                : 'text-[#8E89AA] hover:text-white'
            }`}
          >
            TERMINAL
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tracks')}
            className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
              activeTab === 'tracks'
                ? 'bg-[#2db7ff]/15 text-[#2db7ff] font-bold border border-[#2db7ff]/30'
                : 'text-[#8E89AA] hover:text-white'
            }`}
          >
            TRACKS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('system')}
            className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
              activeTab === 'system'
                ? 'bg-[#9c7eff]/15 text-[#9c7eff] font-bold border border-[#9c7eff]/30'
                : 'text-[#8E89AA] hover:text-white'
            }`}
          >
            SYSTEM
          </button>
        </div>
      </div>

      {/* Main Screen Body */}
      <div className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2 text-left"
            >
              {logs.slice(0, terminalLine).map((log, i) => (
                <div key={i} className={`leading-relaxed ${log.color} flex items-start gap-2`}>
                  <span>{log.text}</span>
                </div>
              ))}
              {terminalLine < logs.length && (
                <div className="flex items-center gap-1 text-[#1fe0a0] animate-pulse">
                  <span className="w-2 h-4 bg-[#1fe0a0]" />
                </div>
              )}

              {terminalLine >= logs.length && (
                <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href={eventData.unstopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] text-black font-bold text-xs shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>Execute Registration</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setTerminalLine(1)}
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#c7cfd9] text-xs border border-white/10 transition-colors"
                  >
                    Replay Stream
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'tracks' && (
            <motion.div
              key="tracks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4 text-left"
            >
              {/* Novice Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#1fe0a0]/30 hover:border-[#1fe0a0]/60 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#1fe0a0]/15 text-[#1fe0a0] font-bold text-xs uppercase tracking-wider">
                    Novice Track (FE & SE Only)
                  </span>
                  <span className="text-[#8E89AA] text-xs">6 Themes</span>
                </div>
                <p className="text-xs text-[#c7cfd9] leading-relaxed">
                  FinTech, HealthTech, Green Tech & Energy, Hardware IoT, EdTech, Social Innovation. Designed for emerging student innovators.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-[#c7cfd9] font-medium">₹100% Free R1</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-[#c7cfd9] font-medium">Dedicated Mentors</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-[#c7cfd9] font-medium">Trophies + Bounties</span>
                </div>
              </div>

              {/* Expert Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#9c7eff]/30 hover:border-[#9c7eff]/60 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#9c7eff]/15 text-[#9c7eff] font-bold text-xs uppercase tracking-wider">
                    Expert Track (TE & BE)
                  </span>
                  <span className="text-[#8E89AA] text-xs">2 Deep-Tech Challenges</span>
                </div>
                <p className="text-xs sm:text-sm text-[#c7cfd9] leading-relaxed">
                  GraphMind Hybrid Memory Assistant & Minimal Dataset Versioning System with cryptographic SHA-256 Merkle trees.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-[#c7cfd9] font-medium">Knowledge Graphs</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-[#c7cfd9] font-medium">Systems / MLOps</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-xs text-[#c7cfd9] font-medium">Official Problem PDFs</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'system' && (
            <motion.div
              key="system"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-3 text-left"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[#8E89AA] text-xs uppercase">VENUE</div>
                  <div className="font-bold text-white text-sm mt-1">WCE Sangli</div>
                  <div className="text-xs text-[#1fe0a0] mt-0.5 font-medium">On-Campus Labs</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[#8E89AA] text-xs uppercase">DATES</div>
                  <div className="font-bold text-white text-sm mt-1">March 20–21</div>
                  <div className="text-xs text-[#2db7ff] mt-0.5 font-medium">2027 (24 Hours)</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[#8E89AA] text-xs uppercase">FACILITIES</div>
                  <div className="font-bold text-white text-sm mt-1">Meals & Stay</div>
                  <div className="text-xs text-[#1fe0a0] mt-0.5 font-medium">100% Provided</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[#8E89AA] text-xs uppercase">AFFILIATION</div>
                  <div className="font-bold text-white text-sm mt-1">WCE ACM</div>
                  <div className="text-xs text-[#9c7eff] mt-0.5 font-medium">VISION Symposium</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1fe0a0]/5 border border-[#1fe0a0]/20 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1fe0a0] shrink-0" />
                <div className="text-xs text-[#c7cfd9]">
                  <span className="font-bold text-white">System Verified: </span>
                  Registrations are actively hosted via Unstop. Free entry for Round 1 submissions.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Live Status Bar */}
      <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8E89AA]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1fe0a0] animate-ping" />
          <span className="text-[#1fe0a0] font-semibold">ALL SYSTEMS NOMINAL</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span>PORT: 2027</span>
          <span className="text-white/20">|</span>
          <span className="text-white font-medium">BUILD FOR DEVELOPERS</span>
        </div>
      </div>
    </div>
  );
}
