import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, X, ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';
import { trackProjectView } from '../utils/analytics';

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

  const handleOpenProject = (project: WebsiteProject) => {
    trackProjectView(project.title);
    setSelectedProject(project);
  };

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
      id: 'my-sketchbook',
      title: 'My Sketchbook',
      category: 'Website Development',
      tag: 'Artist Portfolio & Blog',
      summary: 'A creative journey through stories, sketches, and imagination. Built with responsive notebook paper textures, floating animated doodles, a featured artwork gallery, and storytelling blog notes.',
      image: '/assets/projects/sketchbook-hero.png',
      deliverables: [
        'Hand-drawn doodle aesthetic & notebook textured UI',
        'Interactive featured sketch gallery & artwork showcase',
        'Integrated artist blog stories with sticky-note typography',
        'High-performance responsive design deployed live on Vercel',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Vercel'],
      liveUrl: 'https://mysketchbook-amber.vercel.app/',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 px-4 md:px-8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
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

        {/* Featured Project Showcase: centered single card */}
        <div className="max-w-3xl mx-auto">
          {websiteProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl p-6 sm:p-9 border border-[#E7E1D8] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Thumbnail: Browser Preview Frame with seamless fitting */}
              <div
                onClick={() => handleOpenProject(project)}
                className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden relative cursor-pointer bg-[#E4CAA6] border border-[#d8be9a] shadow-inner group/thumb flex flex-col justify-between"
              >
                {/* Browser Top Window Bar */}
                <div className="w-full px-4 py-2.5 bg-[#d9bd98]/70 backdrop-blur-xs border-b border-[#cbb08b] flex items-center justify-between text-neutral-800 z-10 shrink-0">
                  {/* Window control dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>

                  {/* Browser Address Bar Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/70 border border-black/10 text-[10px] sm:text-[11px] font-mono text-neutral-700 shadow-2xs max-w-[220px] sm:max-w-[300px] truncate">
                    <Globe className="w-3 h-3 text-neutral-500 shrink-0" />
                    <span className="truncate">mysketchbook-amber.vercel.app</span>
                  </div>

                  {/* Live Status Badge */}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 text-[10px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>LIVE</span>
                  </span>
                </div>

                {/* Preview Content Area: Character completely fitted without cropping */}
                <div className="flex-1 w-full px-4 sm:px-8 py-3 flex items-center justify-between relative overflow-hidden">
                  {/* Left Column: Website Typography Mockup */}
                  <div className="max-w-[50%] z-10 space-y-2 text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#333333]/10 text-neutral-800 font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                      Artist Portfolio
                    </span>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#333333] tracking-tight leading-tight">
                      My Sketchbook
                    </h4>
                    <p className="text-[11px] sm:text-xs md:text-sm text-neutral-700 line-clamp-2 leading-relaxed font-medium">
                      A creative journey through stories, sketches, and imagination.
                    </p>
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F8C8B0] text-[#333333] font-bold text-[10px] sm:text-[11px] shadow-xs border border-[#333333]/15">
                        <span>Explore Gallery</span>
                        <span>↘</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Character Artwork (100% un-cropped, fitted) */}
                  <div className="h-full max-h-[280px] sm:max-h-[320px] w-[50%] flex items-center justify-center p-1 sm:p-2">
                    <img
                      src={project.image}
                      alt={`${project.title} Character Illustration`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover/thumb:scale-105 drop-shadow-sm"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="640"
                    />
                  </div>
                </div>

                {/* Bottom Overlay Pill on Hover */}
                <div className="px-4 py-2 bg-[#d9bd98]/50 border-t border-[#cbb08b]/80 flex items-center justify-between text-xs text-neutral-800 z-10">
                  <span className="font-mono text-[11px] text-neutral-700 font-semibold flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-orange-600" />
                    <span>Click anywhere to view full project preview</span>
                  </span>
                  <span className="font-mono text-[11px] text-orange-700 underline underline-offset-2 font-bold">
                    View Details →
                  </span>
                </div>
              </div>


              {/* Card Meta Content */}
              <div className="mt-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[10px] font-mono text-neutral-600 bg-neutral-100 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111113] group-hover:text-orange-500 transition-colors mt-2.5">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="mt-7 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer active:scale-95 shadow-xs"
                      aria-label={`View ${project.title} project details`}
                    >
                      <span>View Details</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all cursor-pointer active:scale-95 shadow-md shadow-orange-500/25"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Production Site</span>
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
              {/* Modal Image: Seamless character presentation without cropping */}
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden relative mb-5 bg-[#E4CAA6] border border-[#d8be9a] shadow-inner flex items-center justify-center p-2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="640"
                />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-md uppercase tracking-wider">
                    {selectedProject.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-800 bg-white/80 px-2.5 py-1 rounded-md backdrop-blur-md">
                    {selectedProject.title}
                  </span>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-orange-700 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md backdrop-blur-md font-bold underline flex items-center gap-1 shadow-xs"
                  >
                    <span>mysketchbook-amber.vercel.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
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

                <div className="flex items-center gap-2 ml-auto">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold cursor-pointer active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>Open Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full bg-[#121214] hover:bg-neutral-800 text-white text-xs font-bold cursor-pointer active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Close</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

