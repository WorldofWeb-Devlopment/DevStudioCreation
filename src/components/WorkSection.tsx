import React, { useState } from 'react';
import { RotateCw, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import FlipCard from './FlipCard.jsx';

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  highlights: string[];
  gradient: string;
}

export const WorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 'apex-cloud',
      title: 'Apex Cloud Platform',
      category: 'Websites',
      tag: 'Next-Gen SaaS',
      summary: 'Ultra-fast responsive marketing portal with interactive pricing and onboarding flows.',
      highlights: ['99.9% uptime SLA guaranteed', '0.4s initial load time worldwide', 'Dynamic design tokens & dark mode'],
      gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    },
    {
      id: 'lumina-film',
      title: 'Lumina Cinema Trailer',
      category: 'Video Editing',
      tag: 'Commercial 4K',
      summary: 'High-energy cinematic teaser with bespoke sound design and 3D camera projections.',
      highlights: ['Motion tracking & 3D VFX', 'Custom Hollywood color grade', 'Spatial Dolby Atmos sound mix'],
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'vanguard-brand',
      title: 'Vanguard Visual Identity',
      category: 'Graphic Design',
      tag: 'Brand System',
      summary: 'End-to-end design guideline, typography system, digital stationery, and merchandise kit.',
      highlights: ['Vector master logo suite', 'Design system token library', 'Social media marketing kit'],
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    },
    {
      id: 'flow-analytics',
      title: 'Flow Operations Suite',
      category: 'Custom Apps',
      tag: 'Workflow Dashboard',
      summary: 'Custom operational workspace enabling real-time inventory and delivery telemetry.',
      highlights: ['Real-time WebSocket telemetry', 'Automated data export pipelines', 'Granular RBAC team permissions'],
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
  ];

  const categories = ['All', 'Websites', 'Custom Apps', 'Video Editing', 'Graphic Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28 px-4 md:px-8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111113] tracking-tight">
            Ideas We've Brought To Life
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            Explore Our Selected Projects And Discover How We Turn Creative Ideas Into Meaningful Digital Experiences.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#121214] text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-mono text-neutral-500 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span>Click or drag any card to flip and inspect project specifications</span>
          </p>
        </div>

        {/* 4 Cards Grid using FlipCard component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {filteredProjects.map((project) => {
            const frontFace = (
              <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative bg-gradient-to-br from-[#0c0c0e] via-[#101014] to-[#0c0c0e] select-none text-left">
                {/* Ambient glow highlight */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-25 pointer-events-none`} />

                {/* Front Top row */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-neutral-300 font-semibold border border-white/10 backdrop-blur-xs">
                    {project.tag}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono hover:text-orange-400 transition-colors">
                    <span>Preview</span>
                    <RotateCw className="w-3.5 h-3.5 text-orange-500" />
                  </span>
                </div>

                {/* Front Middle/Bottom info */}
                <div className="relative z-10">
                  <p className="text-xs text-orange-400 font-mono font-medium tracking-wide uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-orange-400/90 font-medium">
                    <span>Click to flip preview</span>
                    <ArrowRight className="w-3 h-3 text-orange-500" />
                  </div>
                </div>
              </div>
            );

            const backFace = (
              <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative bg-[#0a0a0d] select-none text-left border border-orange-500/30">
                {/* Back Ambient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-orange-500/15 blur-2xl pointer-events-none" />

                {/* Back Top row */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                      {project.category} // {project.tag}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      <RotateCcw className="w-3 h-3 text-orange-500" />
                      <span>Back</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="relative z-10 my-2">
                  <h4 className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back Footer */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-[11px] text-orange-400">DEVSTUDIO CREATIONS</span>
                  <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1">
                    <span>Click to flip front</span>
                    <RotateCcw className="w-3 h-3 text-orange-500" />
                  </span>
                </div>
              </div>
            );

            return (
              <div key={project.id} className="w-full flex justify-center">
                <FlipCard
                  front={frontFace}
                  back={backFace}
                  axis="y"
                  flipOnClick={true}
                  draggable={true}
                  tilt={true}
                  tiltMax={12}
                  glare={true}
                  glareOpacity={0.22}
                  hoverScale={1.02}
                  perspective={1100}
                  stiffness={180}
                  damping={22}
                  width={480}
                  height={340}
                  radius={24}
                  background="#0c0c0e"
                  color="#ffffff"
                  shadow={true}
                  shadowColor="#000000"
                  shadowOpacity={0.5}
                  ariaLabel={`${project.title} card - click to flip details`}
                  className="w-full !max-w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
