import React, { useState } from 'react';
import { Compass, Box, Layers, Ruler, ArrowRight, Grid } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const WireframePage: React.FC = () => {
  const [wireframeToggled, setWireframeToggled] = useState(true);

  return (
    <div className="min-h-screen bg-[#072438] text-[#E0F2FE] font-mono selection:bg-[#38BDF8] selection:text-black p-4 sm:p-8 relative">
      {/* Millimeter CAD Blueprint Grid Lines in background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* CAD Drafting Title Block Header */}
        <header className="p-4 sm:p-6 bg-[#0B3450] border-2 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#38BDF8] flex items-center justify-center text-xl text-[#38BDF8]">
              📐
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-space text-[#E0F2FE] tracking-tight">
                SCHEMATICA CAD SYSTEMS
              </div>
              <div className="text-[10px] text-[#38BDF8] tracking-widest uppercase">
                STRUCTURAL WIREFRAME BLUEPRINT SPEC // ISO 128
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs text-[#7DD3FC]">
            <a href="#schematics" className="hover:text-white transition-colors">DRAWING NO. 42</a>
            <a href="#tolerances" className="hover:text-white transition-colors">TOLERANCES: ±0.01mm</a>
            <a href="#materials" className="hover:text-white transition-colors">ISOMETRIC MESH</a>
          </div>

          <button 
            onClick={() => setWireframeToggled(!wireframeToggled)}
            className="px-4 py-2 border border-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#072438] text-xs font-bold uppercase transition-all cursor-pointer"
          >
            GRID: {wireframeToggled ? 'VISIBLE (1:1)' : 'HIDDEN'}
          </button>
        </header>

        {/* Hero Section: Vector Wireframe Schematic */}
        <section className="text-center space-y-6 py-12 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 border border-[#38BDF8] text-[#38BDF8] text-xs uppercase tracking-widest">
            ENGINEERING SCHEMATIC SPECIFICATION SHEET
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-space text-white leading-none">
            STRUCTURAL <br />
            <span className="text-[#38BDF8]">VECTOR WIREFRAMES.</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#BAE6FD] leading-relaxed">
            Schematica strips surface textures down to fundamental vector geometries, coordinate vertices, dimension arrows, and structural load tolerances.
          </p>

          {/* Hero CAD Blueprint Image Showcase */}
          <div className="pt-8">
            <div className="p-4 sm:p-6 border-2 border-[#38BDF8] bg-[#0A304A] max-w-3xl mx-auto relative text-left space-y-4 shadow-xl">
              <div className="flex justify-between items-center text-xs text-[#38BDF8] border-b border-[#38BDF8]/40 pb-2">
                <span>COMPONENT: CANTILEVER_TRUSS_B // HIGH TOLERANCE</span>
                <span>REV: 4.2.0 // DIN ISO 128</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.wireframe.cadSchematic}
                alt="CAD Schematic Blueprint"
                aspectRatio="16/9"
                caption="Figure 01: Optical schematic alignment of structural framework, vertex coordinates, and load vectors."
                className="border border-[#38BDF8]/50"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] pt-2 border-t border-[#38BDF8]/40 text-[#7DD3FC]">
                <div>DIMENSIONS: 420 × 180 × 90 mm</div>
                <div>MATERIAL: ASTM A36 STRUCTURAL</div>
                <div>YIELD STRENGTH: 250 MPa</div>
                <div>WEIGHT: 14.82 KG</div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee of Technical Schematics */}
        <section className="py-4 border-y border-[#38BDF8]/40">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.wireframe.cadSchematic, title: 'CAD Schematic Truss' },
              { src: MEDIA_ASSETS.wireframe.wireframeGrid, title: 'Wireframe Vector Mesh' },
              { src: MEDIA_ASSETS.terminal.serverAisles, title: 'System Architecture Array' },
              { src: MEDIA_ASSETS.sciFi.commandTelemetry, title: 'Telemetry Matrix' }
            ]}
          />
        </section>

        {/* 3 Blueprint Modules */}
        <section id="schematics" className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-[#38BDF8]/30">
          <div className="p-6 border border-[#38BDF8] bg-[#0A2D46] space-y-2">
            <span className="text-xs text-[#38BDF8]">DETAIL A</span>
            <h3 className="text-lg font-bold font-space text-white">Coordinate Grid Snap</h3>
            <p className="text-xs text-[#BAE6FD] leading-relaxed">
              Real-time parametric vertex snapping to 0.1mm increments with automatic orthogonal ray alignment.
            </p>
          </div>

          <div className="p-6 border border-[#38BDF8] bg-[#0A2D46] space-y-2">
            <span className="text-xs text-[#38BDF8]">DETAIL B</span>
            <h3 className="text-lg font-bold font-space text-white">Dimension Callouts</h3>
            <p className="text-xs text-[#BAE6FD] leading-relaxed">
              Automatic drafting leader lines, radius arcs, and chamfer indicators adhering to ISO 128 standards.
            </p>
          </div>

          <div className="p-6 border border-[#38BDF8] bg-[#0A2D46] space-y-2">
            <span className="text-xs text-[#38BDF8]">DETAIL C</span>
            <h3 className="text-lg font-bold font-space text-white">STEP / DXF Export</h3>
            <p className="text-xs text-[#BAE6FD] leading-relaxed">
              Export multi-layer vector CAD files directly to 5-axis CNC machining and waterjet cutting tables.
            </p>
          </div>
        </section>

        {/* Blueprint Visual Inspection Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-center border-b border-[#38BDF8]/40 pb-3">
            <h2 className="text-xl font-bold font-space text-[#38BDF8]">TECHNICAL ARCHIVE // 3-VIEW PROJECTIONS</h2>
            <span className="text-xs text-[#7DD3FC]">ORTHOGRAPHIC RENDERINGS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.wireframe.wireframeGrid,
                title: 'Planar Projection',
                subtitle: 'Orthogonal X-Y Lattice',
                category: 'ISOMETRIC'
              },
              {
                src: MEDIA_ASSETS.wireframe.cadSchematic,
                title: 'Stress Tolerances',
                subtitle: 'Finite Element Analysis',
                category: 'LOAD MESH'
              },
              {
                src: MEDIA_ASSETS.terminal.serverAisles,
                title: 'Physical Integration',
                subtitle: 'Rack-mount Assemblies',
                category: 'SCHEMATIC'
              }
            ]}
          />
        </section>

        {/* Wireframe Footer */}
        <footer className="border-t border-[#38BDF8]/30 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7DD3FC] gap-4">
          <div>SCHEMATICA CAD SYSTEMS • STUTTGART & DETROIT</div>
          <div>PRECISION TECHNICAL BLUEPRINT ARCHIVE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
