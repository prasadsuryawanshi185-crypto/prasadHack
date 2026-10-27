import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';

export function Highlights() {
  return (
    <section
      id="highlights"
      aria-label="Event highlights"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#050610]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(31,224,160,0.05),transparent_60%)]"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 01.5"
          kicker="The Hackathon Experience"
          title="BUILT FOR"
          accent="BUILDERS."
          description="Six core pillars that make WCE Hackathon one of Maharashtra's highest-caliber student sprints."
          align="center"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {eventData.highlights.map((item, i) => (
            <Reveal key={item.code} delay={i * 0.06} y={20}>
              <article className="group relative h-full rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#1fe0a0]/40 p-7 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db7ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="font-mono text-[10px] text-[#1fe0a0] tracking-[0.2em] uppercase font-bold px-2.5 py-1 rounded bg-[#1fe0a0]/10 border border-[#1fe0a0]/25">
                      {item.metric}
                    </span>
                    <span className="font-mono text-xs text-[#8E89AA] font-bold">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#1fe0a0] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#929caa] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[11px] text-[#2db7ff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2db7ff]" />
                  <span>WCE Sangli Standard</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1fe0a0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}