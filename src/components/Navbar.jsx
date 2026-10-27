import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { EASE_OUT_EXPO } from '../lib/easing';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = eventData.navItems.map((i) => i.id);
      const pos = window.scrollY + 220;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) {
          setActive(ids[i]);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080914]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            aria-label="WCE Hackathon — Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#2db7ff]/50 transition-all duration-300 p-1">
              <img
                src="/logos/hackathon-logo.png"
                alt="WCE Hackathon"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(45,183,255,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2db7ff] group-hover:to-[#1fe0a0] transition-all">
                  WCE HACKATHON
                </span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-[#1fe0a0]/15 text-[#1fe0a0] border border-[#1fe0a0]/30 hidden xs:inline-block">
                  2027
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#8E89AA] tracking-[0.16em] uppercase">
                WCE ACM Student Chapter
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner"
            aria-label="Primary"
          >
            {eventData.navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-[0.1em] uppercase shrink-0 transition-all duration-300 ${
                  active === item.id
                    ? 'text-white bg-gradient-to-r from-[#2db7ff]/20 to-[#1fe0a0]/20 border border-[#2db7ff]/40 shadow-[0_0_12px_rgba(45,183,255,0.25)]'
                    : 'text-[#8E89AA] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-[0_0_20px_rgba(31,224,160,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-[#8E89AA] hover:text-white border border-white/10 rounded-xl bg-white/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#070814]/98 backdrop-blur-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="container-custom flex items-center justify-between py-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logos/hackathon-logo.png"
                  alt="WCE Hackathon"
                  className="w-7 h-7 object-contain"
                />
                <span className="font-display font-bold text-base tracking-wide text-white">
                  WCE HACKATHON 2027
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-[#8E89AA] hover:text-white border border-white/10 rounded-xl bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="container-custom flex-1 flex flex-col justify-center gap-2 overflow-y-auto py-6">
              {eventData.navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.04 * i }}
                  className="group flex items-center justify-between py-3.5 px-3 rounded-lg hover:bg-white/5 border-b border-white/5 transition-all"
                >
                  <span className="font-display font-medium text-xl tracking-tight text-[#c7cfd9] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2db7ff] group-hover:to-[#1fe0a0] transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#5c6673]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="container-custom pb-8 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] shadow-lg shadow-[#1fe0a0]/20"
              >
                <Sparkles className="w-4 h-4 text-black" />
                Register on Unstop
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-center font-mono text-[11px] text-[#5c6673]">
                Round 1 Entry is 100% Free · 24-Hour Offline Hackathon
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}