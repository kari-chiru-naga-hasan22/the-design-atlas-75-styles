import React, { useState } from 'react';
import { Shield, Globe, Award, TrendingUp, CheckCircle, ArrowRight, Building } from 'lucide-react';
import { ImageBox, ImageGallery, EditorialImage } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const CorporatePage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const globalHubs = [
    {
      title: 'LONDON MAYFAIR HEADQUARTERS',
      subtitle: 'Sovereign Wealth Consultation & Cross-Border M&A Advisory',
      category: 'EUROPEAN DESK',
      year: 'EST. 1994',
      src: MEDIA_ASSETS.corporate.boardroomView,
      aspectRatio: '4/3' as const
    },
    {
      title: 'SINGAPORE MARINA BAY TOWERS',
      subtitle: 'Pan-Asian Infrastructure Allocation & Energy Transition Funds',
      category: 'ASIA-PACIFIC',
      year: 'EST. 2008',
      src: MEDIA_ASSETS.corporate.financialDistrict,
      aspectRatio: '4/3' as const
    },
    {
      title: 'NEW YORK HUDSON YARDS',
      subtitle: 'Quantitative Macro Risk Management & Institutional Equity',
      category: 'AMERICAS CORE',
      year: 'EST. 1998',
      src: MEDIA_ASSETS.corporate.executiveMeeting,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1528] text-white font-sans selection:bg-[#C5A880] selection:text-black">
      {/* Top Corporate Trust Ribbon */}
      <div className="bg-[#070D18] border-b border-white/10 py-2 px-4 sm:px-8 text-xs font-mono text-white/50 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span>FRANKFURT • LONDON • SINGAPORE • NEW YORK • TOKYO</span>
          <span className="text-[#C5A880] hidden sm:inline">| SEC &amp; FINMA REGULATED</span>
        </div>
        <div className="flex items-center gap-4">
          <span>PORTAL: INSTITUTIONAL INVESTORS</span>
          <a href="#inquiry" className="text-white hover:text-[#C5A880]">SECURE LOGIN →</a>
        </div>
      </div>

      {/* Corporate Executive Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between border-b border-white/10 sticky top-0 bg-[#0B1528]/95 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-[#C5A880] text-[#0B1528] flex items-center justify-center font-bold font-serif text-lg">
            V
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight font-plus-jakarta text-white">
              VANGUARD STRATEGY
            </div>
            <div className="text-[10px] tracking-widest uppercase text-white/50 font-mono">
              GLOBAL SOVEREIGN PARTNERS
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80 font-medium">
          <a href="#mandate" className="hover:text-[#C5A880] transition-colors">Strategic Mandates</a>
          <a href="#assets" className="hover:text-[#C5A880] transition-colors">Capital Allocation</a>
          <a href="#governance" className="hover:text-[#C5A880] transition-colors">Governance &amp; Risk</a>
        </div>

        <a 
          href="#inquiry"
          className="px-5 py-2.5 rounded bg-gradient-to-r from-[#C5A880] to-[#E3CCA9] text-[#0B1528] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Consult Advisory
        </a>
      </nav>

      {/* Hero Section: Executive Authority & Capital Scale with High-Resolution Architecture */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] text-xs font-mono uppercase tracking-wider">
              <Shield size={14} /> SOVEREIGN ADVISORY &amp; PRIVATE CAPITAL ALLOCATION
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Strategic clarity in an era of <span className="text-[#C5A880] italic font-serif">macroeconomic divergence</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
              We counsel finance ministries, central banking committees, and sovereign wealth entities across 42 jurisdictions. Managing systemic volatility through patient, disciplined governance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#inquiry"
                className="px-8 py-4 rounded bg-[#C5A880] text-[#0B1528] font-bold text-xs uppercase tracking-wider hover:bg-[#E3CCA9] transition-colors shadow-lg"
              >
                REQUEST CONFIDENTIAL AUDIT
              </a>
              <span className="text-xs font-mono text-white/40">
                AUDITED ASSETS: $42.8B
              </span>
            </div>
          </div>

          {/* Hero Image Container: Towering High-Rise Glass Skyscraper */}
          <div className="lg:col-span-5">
            <div className="border border-white/20 p-2 rounded-2xl bg-white/[0.02] backdrop-blur-xl shadow-2xl">
              <ImageBox
                src={MEDIA_ASSETS.corporate.glassSkyscraper}
                alt="Institutional Corporate Headquarters Tower"
                aspectRatio="4/3"
                rounded="xl"
                tag="GLOBAL HEADQUARTERS"
                caption="CANARY WHARF &amp; MAYFAIR SUITES"
              />
            </div>
          </div>
        </div>

        {/* 4 Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-white/10 mt-16">
          <div>
            <div className="text-3xl sm:text-5xl font-bold text-[#C5A880] font-serif">$42.8B</div>
            <div className="text-xs font-mono text-white/60 mt-1">CAPITAL ADVISED</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-bold text-white font-serif">32 YRS</div>
            <div className="text-xs font-mono text-white/60 mt-1">INSTITUTIONAL RECORD</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-bold text-white font-serif">42</div>
            <div className="text-xs font-mono text-white/60 mt-1">SOVEREIGN JURISDICTIONS</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-bold text-[#C5A880] font-serif">99.4%</div>
            <div className="text-xs font-mono text-white/60 mt-1">MANDATE RETENTION</div>
          </div>
        </div>
      </section>

      {/* 3-Column Institutional Hubs Gallery */}
      <section id="assets" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">
              INSTITUTIONAL FOOTPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
              Global Sovereign Operating Desks
            </h2>
          </div>
          <span className="text-xs font-mono text-white/40">24/7 MARKET TELEMETRY</span>
        </div>

        <ImageGallery items={globalHubs} columns={3} theme="dark" />
      </section>

      {/* Confidential Inquiry Form */}
      <section id="inquiry" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="bg-white/[0.03] border border-white/10 p-8 sm:p-12 rounded-2xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#C5A880]">INSTITUTIONAL INTAKE</span>
            <h3 className="text-2xl sm:text-3xl font-bold">Initiate Sovereign Consultation</h3>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-[#C5A880]/20 border border-[#C5A880] text-center text-sm font-mono text-[#C5A880] rounded">
              ✓ SECURE ADVISORY INQUIRY TRANSMITTED. ENCRYPTED RESPONSE WITHIN 4 HOURS.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Official Representative Name"
                  required
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm rounded text-white placeholder-white/40 focus:border-[#C5A880] outline-none"
                />
                <input
                  type="email"
                  placeholder="Government or Corporate Email"
                  required
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm rounded text-white placeholder-white/40 focus:border-[#C5A880] outline-none"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Scope of Institutional Mandate..."
                required
                className="w-full bg-white/5 border border-white/10 p-3 text-sm rounded text-white placeholder-white/40 focus:border-[#C5A880] outline-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-[#C5A880] text-[#0B1528] font-bold text-xs uppercase tracking-wider rounded hover:bg-[#E3CCA9] transition-colors"
              >
                SUBMIT TO ADVISORY COMMITTEE
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-4 text-center text-xs font-mono text-white/40">
        VANGUARD STRATEGY GROUP // SOVEREIGN PARTNERS • ZÜRICH • LONDON • TOKYO
      </footer>
    </div>
  );
};
