import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Search, GitBranch, Code2, CheckCircle, Mic, ArrowRight } from 'lucide-react';

const stepIcons = {
  '01': Search,
  '02': GitBranch,
  '03': Code2,
  '04': CheckCircle,
  '05': Mic,
};

export function Journey() {
  return (
    <section id="journey" aria-label="Event journey" className="relative py-28 sm:py-36 overflow-hidden bg-[#070814]">
      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 07.5"
          kicker="Engineering Lifecycle"
          title="FROM IDEA"
          accent="TO ARENA."
          description="Five stages defining the developer experience — discovery, blueprint, sprint, audit, and demo."
          align="center"
        />

        <div className="relative max-w-5xl mx-auto mt-14">
          <div className="space-y-10">
            {(eventData.journey || []).map((step, i) => {
              const Icon = stepIcons[step.step] || Code2;
              return (
                <Reveal key={step.step} delay={i * 0.06}>
                  <div className="relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#2db7ff]/40 p-6 sm:p-8 transition-all duration-300 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      {/* Left: Step Number, Title & Icon */}
                      <div className="lg:col-span-5 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#2db7ff]/20 to-[#1fe0a0]/20 border border-white/10 flex items-center justify-center shrink-0 text-[#1fe0a0]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-[#2db7ff]">
                              STAGE // 0{step.step}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-2xl text-white">
                            {step.title}
                          </h3>
                          <p className="font-mono text-xs text-[#8E89AA] tracking-wider uppercase mt-1">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right: Description & Key Outputs */}
                      <div className="lg:col-span-7">
                        <p className="text-sm text-[#c7cfd9] leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
                          {step.keyOutputs.map((out) => (
                            <span
                              key={out}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 font-mono text-xs text-[#1fe0a0] font-medium"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#1fe0a0]" />
                              <span>{out}</span>
                            </span>
                          ))}
                        </div>
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