import React, { useState } from 'react';
import { Download, Terminal, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const BrutalismPage: React.FC = () => {
  const [downloadCount, setDownloadCount] = useState(4821);
  const [isAlertAcknowledged, setIsAlertAcknowledged] = useState(false);

  const archiveDocs = [
    { id: 'DOC_091_RADICAL', title: 'BARBICAN ESTATE TOWER STRUCTURAL SCHEMATICS', size: '14.2 MB', clearance: 'UNRESTRICTED', date: '2026-03-12' },
    { id: 'DOC_092_INFRA', title: 'SUBSEA CABLE TOPOLOGY: DECENTRALIZED FAILURE MODES', size: '88.1 MB', clearance: 'ANONYMOUS', date: '2026-02-28' },
    { id: 'DOC_093_PRISON', title: 'RAW CAST CONCRETE PRESERVATION IN POST-SOVIET BLOCS', size: '204.6 MB', clearance: 'PUBLIC', date: '2025-12-04' }
  ];

  const brutalistStructures = [
    {
      title: 'THE BARBICAN MONOLITH',
      subtitle: 'Chamberlin, Powell & Bon • Heavy bush-hammered concrete aggregate.',
      category: 'LONDON RESIDENTIAL',
      year: '1982',
      src: MEDIA_ASSETS.brutalism.barbicanConcrete,
      aspectRatio: '4/3' as const
    },
    {
      title: 'KOTELNICHESKAYA RAW TOWER',
      subtitle: 'Reinforced concrete spine standing 176 meters above riverbed.',
      category: 'MONUMENTAL CORE',
      year: '1974',
      src: MEDIA_ASSETS.brutalism.rawTower,
      aspectRatio: '4/3' as const
    },
    {
      title: 'ORTHOGONAL LOAD GRID',
      subtitle: 'Exposed structural waffle-slab load distribution framework.',
      category: 'TACTILE SLAB',
      year: '1968',
      src: MEDIA_ASSETS.brutalism.concreteGrid,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#E2E2DF] text-black font-mono selection:bg-black selection:text-[#E2E2DF]">
      {/* Brutalist Alert Header */}
      {!isAlertAcknowledged && (
        <div className="bg-[#FF2200] text-white p-3 border-b-2 border-black flex items-center justify-between text-xs font-bold">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>ATTENTION: THIS ARCHIVE DOES NOT USE TRACKING COOKIES, ADS OR DECORATIVE GRADIENTS.</span>
          </div>
          <button 
            onClick={() => setIsAlertAcknowledged(true)}
            className="px-2 py-0.5 bg-black text-white hover:bg-white hover:text-black border border-black cursor-pointer uppercase text-[10px]"
          >
            [DISMISS]
          </button>
        </div>
      )}

      {/* Exposed Wireframe Grid Navigation */}
      <nav className="border-b-2 border-black grid grid-cols-1 md:grid-cols-4 bg-white text-xs">
        <div className="p-4 border-b-2 md:border-b-0 md:border-r-2 border-black font-bold flex items-center justify-between">
          <span>RAW_ARCHIVE_V4</span>
          <span className="bg-[#0000FF] text-white px-1.5 py-0.5 text-[10px]">ROOT</span>
        </div>
        <div className="p-4 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-black hover:text-white transition-none cursor-pointer">
          [01] DEPOSITORY_INDEX
        </div>
        <div className="p-4 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-black hover:text-white transition-none cursor-pointer">
          [02] CONCRETE_DOSSIERS
        </div>
        <div className="p-4 flex items-center justify-between bg-[#E2E2DF]">
          <span>STATUS: OPEN</span>
          <span className="text-[10px] text-gray-600">IP: 127.0.0.1</span>
        </div>
      </nav>

      {/* Hero Section: Monolithic Type & Raw Structural Blocks */}
      <section className="border-b-2 border-black grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-6 sm:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between space-y-8">
          <div>
            <div className="text-[11px] font-bold text-[#0000FF] uppercase mb-4 tracking-wider">
              PROJECT IDENTIFIER: ARC-7782 // CLASSIFICATION: DECLASSIFIED
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92]">
              UNPOLISHED TRUTH. <br />
              ZERO DECORATION. <br />
              <span className="bg-black text-[#E2E2DF] px-2 inline-block mt-2">
                STRUCTURAL REALITY.
              </span>
            </h1>

            <p className="mt-8 text-sm sm:text-base leading-relaxed text-black/80 max-w-xl font-medium">
              We reject consumerist polish, rounded corners, and pastel gradients. 
              The web is an industrial communication apparatus. Raw concrete, exposed markup, and uncompromising honesty.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-black flex flex-wrap gap-4 items-center">
            <button 
              onClick={() => setDownloadCount(prev => prev + 1)}
              className="px-6 py-4 bg-black text-white hover:bg-[#FF2200] transition-none cursor-pointer uppercase text-xs font-black border-2 border-black shadow-[4px_4px_0px_#0000FF] flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> BATCH DOWNLOAD ARCHIVE ({downloadCount})
            </button>
            <span className="text-xs text-gray-600">CHECKSUM: SHA-256 VALIDATED</span>
          </div>
        </div>

        {/* Hero Right: Raw Concrete Photographic Plate */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs border-b-2 border-black pb-2">
              <span className="font-bold">SPECIMEN NO. 88</span>
              <span className="bg-[#0000FF] text-white px-2 py-0.5 text-[10px]">BARBICAN CORE</span>
            </div>

            <ImageBox
              src={MEDIA_ASSETS.brutalism.barbicanConcrete}
              alt="Raw Brutalist Barbican Concrete Tower"
              aspectRatio="4/3"
              border={true}
              borderColor="border-black"
              tag="RAW UNADORNED MATERIAL"
              caption="BARBICAN CENTRE // LONDON EC2"
            />

            <div className="text-xs text-black/70 space-y-1">
              <div>COMPRESSIVE STRENGTH: 45 MPa</div>
              <div>CEMENT MATRIX: Portland Type 1 with Crushed Flint</div>
            </div>
          </div>

          <div className="border-t-2 border-black pt-4 flex justify-between text-xs text-gray-600">
            <span>ARCHIVE ID: #8812</span>
            <span>NO RESTRICTIONS</span>
          </div>
        </div>
      </section>

      {/* 3-Column Brutalist Monolith Gallery */}
      <section className="border-b-2 border-black p-6 sm:p-12 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b-2 border-black pb-4">
          <div>
            <span className="text-xs text-[#0000FF] font-bold uppercase">PHYSICAL REPOSITORY</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              SURVIVING BRUTALIST ARCHIVES
            </h2>
          </div>
          <span className="text-xs bg-black text-white px-3 py-1 font-bold">1965–1985</span>
        </div>

        <ImageGallery items={brutalistStructures} columns={3} theme="swiss" />
      </section>

      {/* Archive Files Table */}
      <section className="p-6 sm:p-12 max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-3">
          DECLASSIFIED MONOGRAPHS &amp; REPOSITORIES
        </h2>

        <div className="border-2 border-black bg-white divide-y-2 divide-black text-xs">
          {archiveDocs.map((doc, idx) => (
            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#E2E2DF]">
              <div className="space-y-1">
                <span className="text-[#0000FF] font-bold">{doc.id}</span>
                <div className="text-sm font-black">{doc.title}</div>
              </div>
              <div className="flex items-center gap-6">
                <span>{doc.size}</span>
                <span className="bg-black text-white px-2 py-0.5 text-[10px]">{doc.clearance}</span>
                <button className="underline font-bold hover:text-[#FF2200]">DOWNLOAD</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-white p-6 sm:p-12 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>RAW ARCHIVE // PUBLIC REPOSITORY FOR UNCOMPROMISED CIVIL WORKS</div>
        <div>NO RIGHTS RESERVED • PUBLIC DOMAIN 2026</div>
      </footer>
    </div>
  );
};
