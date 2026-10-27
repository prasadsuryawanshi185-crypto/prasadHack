import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, ShieldCheck, Building2, ExternalLink } from 'lucide-react';

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors & Partners" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(45,183,255,0.06),transparent_60%)]"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 07"
          kicker="Ecosystem Partners"
          title="SPONSORS &"
          accent="ALLIANCES."
          description="Powered by industry leaders and our institutional technical ecosystem."
          align="center"
        />

        {/* Featured Powered By Partner */}
        <Reveal>
          <div className="max-w-4xl mx-auto mt-12 mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/15 backdrop-blur-xl shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#2db7ff] to-transparent" />
            
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#2db7ff] block mb-6">
              OFFICIAL PLATFORM & REGISTRATION PARTNER
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6">
              <a
                href={eventData.sponsors.poweredBy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2db7ff]/50 transition-all"
              >
                <img
                  src={eventData.sponsors.poweredBy.logo}
                  alt={eventData.sponsors.poweredBy.name}
                  className="h-16 sm:h-20 object-contain rounded-xl filter drop-shadow group-hover:scale-105 transition-transform"
                />
              </a>

              <div className="text-left max-w-sm">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-2xl text-white">
                    {eventData.sponsors.poweredBy.name}
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-[#1fe0a0]" />
                </div>
                <div className="font-mono text-xs text-[#1fe0a0] mb-2">
                  {eventData.sponsors.poweredBy.role}
                </div>
                <p className="text-xs text-[#8E89AA] leading-relaxed">
                  Powering registrations, candidate shortlisting, and national developer outreach for WCE Hackathon.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={eventData.sponsors.poweredBy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase text-black bg-gradient-to-r from-[#2db7ff] to-[#1fe0a0] hover:brightness-110 shadow-lg shadow-[#1fe0a0]/20 transition-all"
              >
                <span>Visit Unstop Portal</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>

              <a
                href="#register"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Direct Pre-Registration</span>
                <ArrowUpRight className="w-4 h-4 text-[#2db7ff]" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Previous Sponsor & Institutional Backing */}
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shrink-0">
                <img
                  src={eventData.sponsors.pastSponsor.logo}
                  alt={eventData.sponsors.pastSponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">
                  {eventData.sponsors.pastSponsor.name}
                </div>
                <div className="font-mono text-xs text-[#2db7ff]">
                  {eventData.sponsors.pastSponsor.role}
                </div>
                <div className="text-xs text-[#8E89AA] mt-1">
                  {eventData.sponsors.pastSponsor.note}
                </div>
              </div>
            </div>

            <span className="font-mono text-xs text-[#1fe0a0] px-3 py-1.5 rounded-full bg-[#1fe0a0]/10 border border-[#1fe0a0]/25 shrink-0">
              Verified Supporter
            </span>
          </div>
        </Reveal>

        {/* Sponsorship Tiers */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1fe0a0]">
            BECOME A SPONSOR
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
            2027 Partnership Tiers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {eventData.sponsorshipTiers.map((tier, i) => (
            <Reveal key={tier.tier} delay={i * 0.08}>
              <div className="relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#2db7ff]/40 p-7 h-full flex flex-col justify-between transition-all duration-300 shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-[#2db7ff] px-2.5 py-1 rounded bg-[#2db7ff]/10 border border-[#2db7ff]/30 uppercase">
                      {tier.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#1fe0a0] pulse-dot" />
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-1">
                    {tier.tier}
                  </h3>
                  <div className="font-mono text-xs text-[#1fe0a0] mb-5">
                    {tier.status}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-xs text-[#c7cfd9]">
                        <Building2 className="w-4 h-4 text-[#2db7ff] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:${eventData.contactEmail}?subject=${encodeURIComponent(
                    'WCE Hackathon 2027 — Sponsorship Inquiry: ' + tier.tier
                  )}`}
                  className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#2db7ff] hover:text-white transition-colors"
                >
                  <span>Request Prospectus</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}