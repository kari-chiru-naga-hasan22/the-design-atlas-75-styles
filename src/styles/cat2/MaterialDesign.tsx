import React, { useState } from 'react';
import { Plus, Server, Cloud, Cpu, Activity, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { ImageBox, ImageGallery, DeviceMockup } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MaterialDesignPage: React.FC = () => {
  const [clusterCount, setClusterCount] = useState(14);
  const [activeChip, setActiveChip] = useState<'all' | 'healthy' | 'deploying'>('all');

  const cloudServices = [
    {
      title: 'ENTERPRISE CLOUD INTERFACE',
      subtitle: 'Dynamic M3 surface tiers mapping 400+ Kubernetes microservices.',
      category: 'OBSERVABILITY',
      year: 'M3 TOKENS',
      src: MEDIA_ASSETS.materialDesign.cloudInterface,
      aspectRatio: '4/3' as const
    },
    {
      title: 'MATERIAL MOBILE ECOSYSTEM',
      subtitle: 'Adaptive color extraction and tactile ripple states for Android 15.',
      category: 'MOBILE ENGINE',
      year: 'DYNAMIC COLOR',
      src: MEDIA_ASSETS.materialDesign.mobileEcosystem,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#4F46E5] selection:text-white relative">
      {/* Material Design Top App Bar */}
      <header className="bg-white border-b border-[#E2E8F0] px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
            <Cloud size={20} />
          </div>
          <div>
            <div className="text-lg font-bold font-plus-jakarta text-[#0F172A]">NEXUS CLOUD OS</div>
            <div className="text-[11px] text-[#64748B]">Material You / M3 Enterprise Architecture</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#475569]">
          <a href="#clusters" className="hover:text-[#4F46E5] transition-colors">Clusters</a>
          <a href="#ecosystem" className="hover:text-[#4F46E5] transition-colors">Ecosystem</a>
          <a href="#telemetry" className="hover:text-[#4F46E5] transition-colors">Telemetry</a>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-xs shadow-md shadow-indigo-500/20 transition-all cursor-pointer">
          Console Login
        </button>
      </header>

      {/* Hero Section: Elevated Surface Hierarchy with Real Cloud Media */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-medium">
              <span>●</span> MATERIAL 3 DESIGN TOKENS • ADAPTIVE ELEVATION
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Adaptive Cloud Orchestration with <span className="text-[#4F46E5]">Tactile Elevation</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Nexus Cloud OS maps complex Kubernetes microservices into intuitive Material 3 surface tiers. Dynamic elevation shadows communicate priority, status, and health at a glance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 cursor-pointer">
                Deploy First Pod <ArrowRight size={14} />
              </button>
              <button className="px-6 py-3 rounded-full bg-white hover:bg-[#F1F5F9] text-[#1E293B] border border-[#CBD5E1] font-semibold text-xs shadow-sm transition-all cursor-pointer">
                Explore Documentation
              </button>
            </div>
          </div>

          {/* Elevated Surface Showcase with Cloud Interface Photo */}
          <div className="lg:col-span-5">
            <div className="p-4 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xl">
              <ImageBox
                src={MEDIA_ASSETS.materialDesign.cloudInterface}
                alt="Nexus Material 3 Cloud Interface"
                aspectRatio="4/3"
                rounded="2xl"
                tag="LIVE TELEMETRY VIEW"
              />
            </div>
          </div>
        </div>

        {/* 2-Column Ecosystem Gallery */}
        <section id="ecosystem" className="space-y-6 pt-8 border-t border-[#E2E8F0]">
          <div className="flex justify-between items-end border-b border-[#E2E8F0] pb-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#4F46E5]">ELEVATED ECOSYSTEMS</span>
              <h2 className="text-3xl font-bold text-[#0F172A]">Material 3 Surface Architecture</h2>
            </div>
            <span className="text-xs text-[#64748B]">M3 DESIGN TOKENS</span>
          </div>

          <ImageGallery items={cloudServices} columns={2} theme="minimal" />
        </section>
      </main>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => setClusterCount(prev => prev + 1)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-2xl bg-[#4F46E5] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="Deploy New Pod (+1)"
      >
        <Plus size={24} />
      </button>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] py-8 text-center text-xs text-[#64748B]">
        NEXUS CLOUD OS // MATERIAL 3 DESIGN SYSTEM • 2026
      </footer>
    </div>
  );
};
