import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Phone, Shield, UserCheck, GraduationCap, Award } from 'lucide-react';

export function Organizers() {
  return (
    <section
      id="organizers"
      aria-label="Organizing Committee and Leadership"
      className="relative py-28 sm:py-36 overflow-hidden bg-[#050610]"
    >
      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 06"
          kicker="Leadership & Execution"
          title="ORGANIZING"
          accent="COMMITTEE."
          description="The institutional leaders, faculty advisors, and student coordinators driving WCE Hackathon 2027."
          align="center"
        />

        {/* Advisory & Executive Faculty */}
        <div className="max-w-6xl mx-auto mt-12 mb-10">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1fe0a0] px-3 py-1 rounded-full bg-[#1fe0a0]/10 border border-[#1fe0a0]/25">
              Patron & Faculty Advisors
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData.organizers.slice(0, 3).map((org, i) => (
              <Reveal key={org.name} delay={i * 0.08}>
                <div className="relative group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#2db7ff]/50 p-6 text-center transition-all duration-300 shadow-xl">
                  {/* Avatar Monogram */}
                  <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2db7ff]/20 to-[#1fe0a0]/20 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0]">
                      {org.initials}
                    </span>
                    <span className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-[#070814] border border-white/10 text-[#1fe0a0]">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="inline-block font-mono text-xs font-semibold text-[#2db7ff] tracking-wider uppercase px-3 py-1 rounded-full bg-[#2db7ff]/10 border border-[#2db7ff]/25 mb-2">
                    {org.tag}
                  </span>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#1fe0a0] transition-colors">
                    {org.name}
                  </h3>

                  <div className="font-mono text-xs text-[#c7cfd9] mt-1 font-medium">
                    {org.role}
                  </div>

                  <p className="text-xs text-[#8E89AA] mt-2">
                    {org.org}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2db7ff] px-3 py-1 rounded-full bg-[#2db7ff]/10 border border-[#2db7ff]/25">
              WCE ACM Student Chapter Leads
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData.organizers.slice(3).map((lead, i) => (
              <Reveal key={lead.name} delay={0.2 + i * 0.08}>
                <div className="relative group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#1fe0a0]/50 p-6 text-center transition-all duration-300 shadow-xl">
                  {/* Avatar Monogram */}
                  <div className="relative mx-auto w-18 h-18 rounded-2xl bg-gradient-to-tr from-[#1fe0a0]/20 to-[#2db7ff]/20 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#1fe0a0] to-[#2db7ff]">
                      {lead.initials}
                    </span>
                    <span className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-[#070814] border border-white/10 text-[#2db7ff]">
                      <UserCheck className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <span className="inline-block font-mono text-xs font-semibold text-[#1fe0a0] tracking-wider uppercase px-3 py-1 rounded-full bg-[#1fe0a0]/10 border border-[#1fe0a0]/25 mb-2">
                    {lead.tag}
                  </span>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#1fe0a0] transition-colors">
                    {lead.name}
                  </h3>

                  <div className="font-mono text-xs text-[#c7cfd9] mt-0.5 font-medium">
                    {lead.role}
                  </div>

                  <p className="text-xs text-[#8E89AA] mt-1.5 mb-4">
                    {lead.org}
                  </p>

                  {lead.phone && (
                    <a
                      href={`tel:${lead.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1fe0a0]/40 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#1fe0a0]" />
                      <span>{lead.phone}</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
