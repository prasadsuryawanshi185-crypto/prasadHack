import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import { ArrowUpRight, CheckCircle2, Send, Mail, User, Building2, Sparkles, ExternalLink } from 'lucide-react';

const initialForm = { name: '', email: '', college: '', track: 'novice' };

export function FinalCTA() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.college.trim()) errs.college = 'Institution name is required';
    return errs;
  };

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    try {
      localStorage.setItem(
        'wce_hackathon_2027_interest',
        JSON.stringify({ ...form, timestamp: new Date().toISOString() })
      );
    } catch {
      // session fallback
    }
  };

  return (
    <section
      id="register"
      aria-label="Registration and Priority Access"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#050610]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(31,224,160,0.1),transparent_60%)]"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Reveal className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#1fe0a0] px-3.5 py-1 rounded-full bg-[#1fe0a0]/10 border border-[#1fe0a0]/25 inline-block mb-4">
              SEC // 09 · REGISTRATION PORTAL
            </span>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Ready to code, create &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] via-[#43e6b5] to-[#1fe0a0]">
                conquer?
              </span>
            </h2>
            <p className="mt-4 text-[#B9B4CA] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Step into the 24-hour crucible at Walchand College of Engineering, Sangli. Round 1 entry is 100% free.
            </p>

            {/* Direct Unstop Primary Banner */}
            <div className="mt-8 mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#2db7ff]/15 via-[#1fe0a0]/15 to-transparent border border-[#2db7ff]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="text-left flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center shrink-0">
                  <img
                    src="/assets/unstop_logo.jpg-BAMEIG7b.jpeg"
                    alt="Unstop"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-white">
                    Official Unstop Registration
                  </div>
                  <div className="text-xs text-[#c7cfd9] mt-0.5">
                    Register your team directly on the Unstop hackathon portal.
                  </div>
                </div>
              </div>

              <a
                href={eventData.unstopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-xs font-bold uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-lg shadow-[#1fe0a0]/30 transition-all shrink-0"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Go To Unstop</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>
            </div>
          </Reveal>

          {/* Secondary Priority Pre-Registration Card */}
          <Reveal delay={0.12}>
            <div className="relative rounded-3xl bg-white/[0.03] border border-white/15 p-8 sm:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-[#2db7ff] tracking-wider uppercase block mb-1">
                    Direct Pre-Registration & Updates
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Join The Candidate Registry
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-[#1fe0a0]">
                  <span className="w-2 h-2 rounded-full bg-[#1fe0a0] pulse-dot" />
                  <span>Free Round 1</span>
                </span>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1fe0a0]/15 border border-[#1fe0a0]/40 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-[#1fe0a0]" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-white">
                      Registration Interest Recorded!
                    </h4>
                    <p className="mt-3 text-[#B9B4CA] max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{form.name}</span>! Your pre-registration for the{' '}
                      <span className="text-[#1fe0a0] font-mono font-bold">{form.track.toUpperCase()}</span> track has been recorded. We will dispatch critical problem statements and schedule notifications to your inbox.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm(initialForm);
                        }}
                        className="px-5 py-2.5 rounded-xl font-mono text-xs text-[#8E89AA] hover:text-white bg-white/5 transition-colors"
                      >
                        Register Another Team Member
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="reg-name" className="block font-mono text-xs uppercase tracking-wider text-[#c7cfd9] mb-2">
                          Team Lead Name <span className="text-[#1fe0a0]">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E89AA]" />
                          <input
                            id="reg-name"
                            type="text"
                            value={form.name}
                            onChange={update('name')}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#2db7ff] focus:ring-1 focus:ring-[#2db7ff] transition-all"
                          />
                        </div>
                        {errors.name && <span className="text-xs text-rose-400 mt-1 block font-mono">{errors.name}</span>}
                      </div>

                      <div>
                        <label htmlFor="reg-email" className="block font-mono text-xs uppercase tracking-wider text-[#c7cfd9] mb-2">
                          Email Address <span className="text-[#1fe0a0]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E89AA]" />
                          <input
                            id="reg-email"
                            type="email"
                            value={form.email}
                            onChange={update('email')}
                            placeholder="lead@college.edu"
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#2db7ff] focus:ring-1 focus:ring-[#2db7ff] transition-all"
                          />
                        </div>
                        {errors.email && <span className="text-xs text-rose-400 mt-1 block font-mono">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="reg-college" className="block font-mono text-xs uppercase tracking-wider text-[#c7cfd9] mb-2">
                          College / University <span className="text-[#1fe0a0]">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E89AA]" />
                          <input
                            id="reg-college"
                            type="text"
                            value={form.college}
                            onChange={update('college')}
                            placeholder="Walchand College of Engineering"
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#2db7ff] focus:ring-1 focus:ring-[#2db7ff] transition-all"
                          />
                        </div>
                        {errors.college && <span className="text-xs text-rose-400 mt-1 block font-mono">{errors.college}</span>}
                      </div>

                      <div>
                        <label htmlFor="reg-track" className="block font-mono text-xs uppercase tracking-wider text-[#c7cfd9] mb-2">
                          Track Preference
                        </label>
                        <select
                          id="reg-track"
                          value={form.track}
                          onChange={update('track')}
                          className="w-full px-4 py-3 rounded-xl bg-[#0c0d1c] border border-white/10 text-white text-sm outline-none focus:border-[#2db7ff] transition-all"
                        >
                          <option value="novice">Novice Track (1st & 2nd Year Only)</option>
                          <option value="expert">Expert Track (3rd & 4th Year+)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <span className="font-mono text-xs text-[#8E89AA]">
                        No credit card or payment required for Round 1
                      </span>
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-mono text-xs font-bold uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-lg shadow-[#1fe0a0]/25 transition-all"
                      >
                        <Send className="w-4 h-4 text-black" />
                        <span>Submit Pre-Registration</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}