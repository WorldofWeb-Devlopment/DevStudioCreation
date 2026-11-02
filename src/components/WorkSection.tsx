import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, X, ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';

interface WebsiteProject {
  id: string;
  title: string;
  category: 'Website Development';
  tag: string;
  summary: string;
  image: string;
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
}

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WebsiteProject | null>(null);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const websiteProjects: WebsiteProject[] = [
    {
      id: 'apex-cloud',
      title: 'Apex Cloud Platform',
      category: 'Website Development',
      tag: 'Next-Gen SaaS Portal',
      summary: 'High-conversion marketing portal with real-time tier calculators, dark mode architecture, and interactive customer onboarding.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      deliverables: [
        '99.9% uptime SLA architecture',
        '0.4s initial load time worldwide',
        'Tailwind CSS & Next.js responsiveness',
        'Interactive pricing calculators',
      ],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      liveUrl: '#',
    },
    {
      id: 'lumina-studio',
      title: 'Lumina Creative Studio',
      category: 'Website Development',
      tag: 'Agency Portfolio Website',
      summary: 'Minimalist, interactive portfolio website featuring fluid typography, bespoke grid layouts, and high-performance animations that drive conversions.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      deliverables: [
        'Fluid responsive layout across mobile and desktop',
        'Sub-second page speeds with optimized assets',
        'Accessible semantic HTML and SEO metadata',
        'Smooth scroll transitions and micro-interactions',
      ],
      techStack: ['React', 'TypeScript', 'Motion', 'Vite'],
      liveUrl: '#',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 px-4 md:px-8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-3">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111113] tracking-tight">
            Websites We've Brought To Life
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore our website development projects, where creativity meets functionality to create meaningful digital experiences.
          </p>
        </div>

        {/* Two-column Bento Grid on desktop, single-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {websiteProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E1D8] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Thumbnail / Large Screenshot */}
              <div
                onClick={() => setSelectedProject(project)}
                className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative cursor-pointer bg-neutral-900 border border-neutral-200/80 shadow-inner group/thumb"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Website Screenshot`}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover/thumb:opacity-90 transition-opacity" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {project.tag}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover/thumb:bg-orange-500 group-hover/thumb:border-orange-500 transition-colors">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                  <span className="text-xs font-mono text-orange-400 font-medium flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Website Development</span>
                  </span>
                  <span className="text-[11px] font-mono text-white/80 underline decoration-orange-500 underline-offset-4">
                    Click to view preview
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="mt-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-600 bg-neutral-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111113] group-hover:text-orange-500 transition-colors mt-2">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Action button */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer active:scale-95"
                    aria-label={`View ${project.title} project details`}
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs font-mono text-neutral-400">
                    Live Client Build
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal with Fixed Close Button & Backdrop Dismiss */}
      {selectedProject && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
        >
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-neutral-200 relative overflow-hidden flex flex-col max-h-[92vh]">
            {/* Highly visible, elevated close button in top-right */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 hover:text-black shadow-lg border border-neutral-200/80 flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Scrollable content area */}
            <div className="overflow-y-auto p-6 sm:p-8">
              {/* Modal Image */}
              <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden relative mb-5 bg-neutral-900 border border-neutral-200 shadow-inner">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                    {selectedProject.category} // {selectedProject.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {selectedProject.summary}
              </p>

              <div className="mt-5">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 font-mono">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedProject.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-neutral-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-700 bg-neutral-100 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Primary Close Button at modal bottom */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#121214] hover:bg-neutral-800 text-white text-xs font-bold cursor-pointer active:scale-95 transition-all shadow-md flex items-center gap-1.5 ml-auto"
                >
                  <span>Close Preview</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
