import React from 'react';
import { Globe, Video, Palette, Code2, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-8 bg-[#FAF7F2] border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-2">
            SERVICES
          </p>
          <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-1">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111113] tracking-tight">
            Your Vision.<span className="text-orange-500">Our Creativity</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            From Websites And Branding To Videos And Digital Experiences, We're Here To Bring Your Ideas To Life.
          </p>
        </div>

        {/* Services Grid with project-matched imagery */}
        <div className="space-y-8 sm:space-y-12">
          {/* Row 1: Website Development (Apex Cloud Platform matching) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors">
                  Website Development
                </span>
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="Apex Cloud SaaS Website Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-orange-400">
                    Apex Cloud Portal
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    Next.js · Responsive
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-500 font-mono tracking-tight">
                Business Websites · Landing Pages · Portfolio Websites · Website Redesign
              </p>
            </div>

            {/* Text description */}
            <div className="md:pl-4">
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-bold">
                HIGH-CONVERSION ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111113] leading-snug mt-1">
                We Build Modern, Responsive Websites That Turn Visitors Into Customers.
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                Engineered for lightning speeds, dynamic dark modes, and effortless user onboarding. Every website is custom-crafted to scale alongside your ambition.
              </p>
              <p className="mt-4 text-xs text-neutral-500 font-mono">
                Business Websites · Landing Pages · Portfolio Websites · Website Redesign
              </p>
            </div>
          </div>

          {/* Row 2: Video Editing & Graphic Design (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Video Editing (Lumina Cinema Trailer matching) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors">
                  Video Editing
                </span>
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
                  alt="Lumina Cinema Trailer 4K Video Editing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-orange-400">
                    Lumina 4K Cinema
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    Color Grading · VFX
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-500 font-mono tracking-tight">
                Reels · YouTube Videos · Promotional Videos · Motion Graphics
              </p>
            </div>

            {/* Graphic Design (Vanguard Visual Identity matching) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors">
                  Graphic Design
                </span>
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5" />
                </div>
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
                  alt="Vanguard Brand Identity Graphic Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-orange-400">
                    Vanguard System
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    Identity · Typography
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-500 font-mono tracking-tight">
                Logo Design · Branding · Posters · Social Media Posters
              </p>
            </div>
          </div>

          {/* Row 3: Custom Web Applications (Flow Operations Suite matching) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Text description */}
            <div className="order-2 md:order-1 md:pr-4">
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-bold">
                ENTERPRISE WORKFLOWS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111113] leading-snug mt-1">
                We Develop Smart Digital Tools That Simplify Workflows And Solve Business Challenges.
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                Real-time operational workspaces, telemetry dashboards, and bespoke automation pipelines that eliminate friction and give teams superpowers.
              </p>
              <p className="mt-4 text-xs text-neutral-500 font-mono">
                Dashboards · Admin Panels · Management Systems · Custom Tools
              </p>
            </div>

            {/* Card */}
            <div className="order-1 md:order-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors">
                  Custom Web Applications
                </span>
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  alt="Flow Operations Telemetry Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-orange-400">
                    Flow Suite
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    Real-time Telemetry
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-500 font-mono tracking-tight">
                Dashboards · Admin Panels · Management Systems · Custom Tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
