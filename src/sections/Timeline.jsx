import { motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Calendar, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export function Timeline() {
  return (
    <section
      id="timeline"
      aria-label="Event Timeline"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#050610]"
    >
      {/* Subtle ambient lighting */}
      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 03"
          kicker="Milestone Roadmap"
          title="EVENT"
          accent="TIMELINE."
          description="Your journey from online abstract registration to the final 24-hour sprint and podium."
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-14 relative">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#2db7ff] via-[#1fe0a0] to-[#2db7ff]/30 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#2db7ff] via-[#1fe0a0] to-[#2db7ff]/30 sm:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-8 sm:space-y-12">
            {eventData.timeline.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = step.status === 'completed';

              return (
                <Reveal key={step.id} delay={idx * 0.08}>
                  <div className={`relative flex items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className="w-full sm:w-[calc(50%-36px)] pl-14 sm:pl-0">
                      <div className="group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#1fe0a0]/40 p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-black/50">
                        {/* Header with Date Badge */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-[#2db7ff]/10 text-[#2db7ff] border border-[#2db7ff]/25">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{step.date}</span>
                          </span>

                          <span className="font-mono text-xs text-[#8E89AA] uppercase tracking-wider font-medium">
                            STAGE // 0{step.id}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#1fe0a0] transition-colors leading-snug mb-2">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#929caa] leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Highlight Tag */}
                        {step.highlight && (
                          <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#1fe0a0]">
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span>{step.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Central Marker Circle on the Line */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#070814] border-2 border-white/20 shadow-lg group-hover:border-[#1fe0a0] transition-colors">
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-[#1fe0a0]" />
                        ) : (
                          <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0]">
                            0{step.id}
                          </span>
                        )}
                        <span className="absolute inset-0 rounded-full border border-[#1fe0a0]/40 animate-ping opacity-25" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
