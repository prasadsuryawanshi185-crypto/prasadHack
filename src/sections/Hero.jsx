import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/event';
import { ArrowRight, MapPin, Sparkles, Terminal, Calendar, Trophy, Clock, Users } from 'lucide-react';
import { EASE_OUT_EXPO } from '../lib/easing';
import { HeroScene } from '../three/HeroScene';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Target event date: March 20, 2027
    const target = new Date(eventData.targetDate || '2027-03-20T10:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-3 py-3">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((unit, idx) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center min-w-[56px] sm:min-w-[68px] h-16 sm:h-20 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md px-2 shadow-lg shadow-black/30">
            <span className="font-mono text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] leading-none">
              {unit.value}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#8E89AA] uppercase tracking-wider mt-1.5">
              {unit.label}
            </span>
          </div>
          {idx < 3 && (
            <span className="font-mono text-lg font-bold text-[#8E89AA]/40 -mt-2">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="WCE Hackathon 2027"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-28 lg:pt-32 pb-12"
    >
      {/* Background radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(45,183,255,0.15)_0%,transparent_70%)] blur-3xl z-[0]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(31,224,160,0.12)_0%,transparent_72%)] blur-3xl z-[0]"
      />

      <div className="container-custom relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-7 relative z-20">
          {/* Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#1fe0a0] pulse-dot" />
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#c7cfd9]">
              WCE ACM Student Chapter Presents
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#2db7ff] tracking-wider">
              VISION 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
          >
            <h1 className="font-display font-extrabold uppercase text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.04] text-white">
              BUILD WHAT{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] via-[#43e6b5] to-[#1fe0a0] filter drop-shadow-[0_0_35px_rgba(31,224,160,0.25)]">
                MATTERS.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
            className="mt-6 max-w-xl text-[#B9B4CA] text-base sm:text-lg leading-relaxed font-sans"
          >
            India's premier 24-hour national offline hackathon at Walchand College of Engineering, Sangli. Two calibrated tracks for beginners and advanced engineers. One crucible of innovation.
          </motion.p>

          {/* Live Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.3 }}
            className="mt-8"
          >
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.2em] uppercase text-[#8E89AA]">
              <Clock className="w-3.5 h-3.5 text-[#1fe0a0]" />
              <span>Hackathon Countdown</span>
            </div>
            <CountdownTimer />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#register"
              className="relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-[0_0_25px_rgba(31,224,160,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Register on Unstop</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#tracks"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-medium tracking-wider uppercase text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#2db7ff]/40 transition-all duration-300"
            >
              <Terminal className="w-4 h-4 text-[#2db7ff]" />
              <span>View Problem Statements</span>
            </a>
          </motion.div>

          {/* Event Metadata Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#8E89AA]"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#2db7ff]" />
              <span>WCE Sangli, Maharashtra</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#1fe0a0]" />
              <span>March 20–21, 2027</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-2 text-[#1fe0a0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1fe0a0]" />
              <span>Round 1 Free Entry</span>
            </span>
          </motion.div>
        </div>

        {/* Right Column: 3D Scene */}
        <div className="lg:col-span-5 relative z-10 flex items-center justify-center">
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[540px] xl:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl">
            {/* Corner Indicators */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E89AA] bg-[#070814]/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1fe0a0] pulse-dot" />
              <span>INTERACTIVE CORE</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E89AA] bg-[#070814]/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
              24-HR CRUCIBLE
            </div>
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Key Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="container-custom relative z-10 mt-12 pt-6 border-t border-white/10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: 'Prize Pool', value: '₹1,00,000+', icon: Trophy, color: 'text-[#2db7ff]' },
            { label: 'Continuous Sprint', value: '24 Hours', icon: Clock, color: 'text-[#1fe0a0]' },
            { label: 'Target Audience', value: '2 Tracks', icon: Terminal, color: 'text-[#9c7eff]' },
            { label: 'Hackers Expected', value: '500+ Devs', icon: Users, color: 'text-[#2db7ff]' },
            { label: 'Abstract Round', value: '100% Free', icon: Sparkles, color: 'text-[#1fe0a0]' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                    {item.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#8E89AA] uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}