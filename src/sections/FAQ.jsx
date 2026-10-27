import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import { ChevronDown, Mail, HelpCircle, Phone, Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'eligibility', label: 'Eligibility & Tracks' },
  { id: 'fees', label: 'Fees & Logistics' },
  { id: 'rules', label: 'Rules & Code' },
];

function FaqItem({ item, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = `faq-c-${index}`;
  const headerId = `faq-h-${index}`;

  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-[#1fe0a0]/40 bg-white/[0.05] shadow-lg shadow-black/40'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
      }`}
    >
      <h3>
        <button
          id={headerId}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        >
          <div className="flex items-center gap-3">
            <HelpCircle
              className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                open ? 'text-[#1fe0a0]' : 'text-[#8E89AA]'
              }`}
            />
            <span
              className={`font-display font-semibold text-base sm:text-lg transition-colors duration-300 ${
                open ? 'text-[#1fe0a0]' : 'text-white'
              }`}
            >
              {item.question}
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 shrink-0 text-[#8E89AA] transition-transform duration-300 ${
              open ? 'rotate-180 text-[#1fe0a0]' : ''
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          >
            <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#c7cfd9] leading-relaxed border-t border-white/10 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    const list = eventData.faqs || [];
    if (category === 'all') return list;
    return list.filter((f) => {
      if (category === 'eligibility') return f.category === 'eligibility' || f.category === 'tracks';
      if (category === 'fees') return f.category === 'fees' || f.category === 'logistics' || f.category === 'teams';
      return f.category === category;
    });
  }, [category]);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#070814]"
    >
      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 08"
          kicker="Clarifications & Answers"
          title="FREQUENTLY ASKED"
          accent="QUESTIONS."
          description="Everything you need to know about eligibility, team rules, evaluation, and facilities."
          align="center"
        />

        {/* Filter Tabs */}
        <Reveal delay={0.08}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase border transition-all duration-300 ${
                  category === cat.id
                    ? 'bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] text-black font-bold border-transparent shadow-md shadow-[#1fe0a0]/25'
                    : 'bg-white/[0.03] text-[#8E89AA] hover:text-white border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filtered.map((item, i) => (
            <Reveal key={item.question} delay={Math.min(i * 0.05, 0.3)}>
              <FaqItem item={item} index={i} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>

        {/* Unresolved Questions Helpline Card */}
        <Reveal delay={0.2}>
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 rounded-xl bg-[#2db7ff]/10 text-[#2db7ff] border border-[#2db7ff]/30">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  Have more questions?
                </h4>
                <p className="text-xs sm:text-sm text-[#8E89AA] mt-0.5">
                  Reach out to the WCE ACM organizing team directly.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${eventData.contactEmail}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2db7ff]" />
                <span>{eventData.contactEmail}</span>
              </a>

              <a
                href="tel:+918459039945"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Call Coordinator</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}