import React from 'react';
import { Globe, Video, Palette, Code2, ArrowRight } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  status: 'AVAILABLE NOW' | 'COMING SOON';
  description: string;
  tags: string[];
  image: string;
  webpImage?: string;
  imageAlt: string;
  projectTag: string;
  meta: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServicesSectionProps {
  onNavigate?: (path: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const scrollToContact = () => {
    trackCtaClick("Let's Start Your Project", 'services-bento');
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const services: ServiceItem[] = [
    {
      id: 'website-dev',
      slug: '/website-development',
      number: '01',
      title: 'Website Development',
      status: 'AVAILABLE NOW',
      description: 'We build modern, responsive websites that turn visitors into customers.',
      tags: ['Business Websites', 'Landing Page Design', 'Custom Website Development', 'Portfolio & Redesign'],
      image: '/assets/projects/sketchbook-hero.png',
      webpImage: '/assets/projects/sketchbook-hero.webp',
      imageAlt: 'My Sketchbook – Custom Website Development Services in India by DevStudioCreations',
      projectTag: 'My Sketchbook Live Build',
      meta: 'Vercel · Responsive',
      icon: Globe,
    },
    {
      id: 'video-editing',
      slug: '/video-editing',
      number: '02',
      title: 'Video Editing',
      status: 'COMING SOON',
      description: 'Engaging visual stories that capture attention and communicate your brand.',
      tags: ['Reels', 'YouTube Videos', 'Promotional Videos', 'Motion Graphics'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Professional Video Editing Services in India – Color Grading & Motion Graphics',
      projectTag: 'Lumina 4K Cinema',
      meta: 'Color Grading · VFX',
      icon: Video,
    },
    {
      id: 'graphic-design',
      slug: '/graphic-design',
      number: '03',
      title: 'Graphic Design',
      status: 'COMING SOON',
      description: 'Creative designs that make your brand memorable and recognizable.',
      tags: ['Logo Design', 'Branding', 'Posters', 'Social Media Posters'],
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Graphic Design & Custom Logo Design Services in India by DevStudioCreations',
      projectTag: 'Vanguard System',
      meta: 'Identity · Typography',
      icon: Palette,
    },
    {
      id: 'custom-web-apps',
      slug: '/website-development',
      number: '04',
      title: 'Custom Web Applications',
      status: 'COMING SOON',
      description: 'Smart digital tools that simplify workflows and solve business challenges.',
      tags: ['Dashboards', 'Admin Panels', 'Management Systems', 'Custom Tools'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Custom Web Application & Dashboard Development in India',
      projectTag: 'Flow Suite',
      meta: 'Real-time Telemetry',
      icon: Code2,
    },
  ];

  const renderBadge = (status: 'AVAILABLE NOW' | 'COMING SOON') => {
    if (status === 'AVAILABLE NOW') {
      return (
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-white shadow-sm transition-all duration-300 hover:brightness-110"
          style={{ backgroundColor: '#16A34A' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse" />
          AVAILABLE NOW
        </span>
      );
    }

    return (
      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#FF7900]/10"
        style={{
          backgroundColor: '#F8F5EF',
          color: '#FF7900',
          border: '1px solid #FF7900',
        }}
      >
        COMING SOON
      </span>
    );
  };

  const websiteService = services[0];
  const videoService = services[1];
  const graphicService = services[2];
  const customAppService = services[3];

  const specializedWebLinks = [
    { label: 'Website Development', path: '/website-development' },
    { label: 'Business Websites', path: '/business-website-development' },
    { label: 'Landing Pages', path: '/landing-page-development' },
    { label: 'Portfolio Websites', path: '/portfolio-website-development' },
    { label: 'Website Redesign', path: '/website-redesign' },
    { label: 'Graphic Design', path: '/graphic-design' },
    { label: 'Logo Design', path: '/logo-design' },
    { label: 'Video Editing', path: '/video-editing' },
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-8 bg-[#F8F5EF] border-t border-[#E7E1D8]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-2">
            SERVICES
          </p>
          <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-1">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Your Vision.<span style={{ color: '#FF7900' }}>Our Creativity</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            From Websites And Branding To Videos And Digital Experiences, We Help Businesses Across India Bring Their Ideas To Life.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="space-y-8 sm:space-y-12">
          {/* Row 1: Website Development (AVAILABLE NOW) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Card - Without extra button inside the card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {websiteService.number}.
                  </span>
                  <a
                    href={websiteService.slug}
                    onClick={(e) => handleServiceLink(e, websiteService.slug)}
                    className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#FF7900] transition-colors"
                  >
                    {websiteService.title}
                  </a>
                </div>
                {renderBadge(websiteService.status)}
              </div>

              {/* Project-matched Image: Seamless fitting for My Sketchbook with WebP */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-[#E4CAA6] border border-[#d8be9a] shadow-inner flex items-center justify-center p-2">
                <picture className="w-full h-full flex items-center justify-center">
                  {websiteService.webpImage && (
                    <source srcSet={websiteService.webpImage} type="image/webp" />
                  )}
                  <img
                    src={websiteService.image}
                    alt={websiteService.imageAlt}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xs"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="640"
                  />
                </picture>

                <div className="absolute top-2.5 left-3">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-md">
                    mysketchbook-amber.vercel.app
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-neutral-800">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/80 backdrop-blur-md border border-black/10 text-orange-700 shadow-2xs">
                    {websiteService.projectTag}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-neutral-700 bg-white/70 px-2 py-0.5 rounded-md backdrop-blur-md">
                    {websiteService.meta}
                  </span>
                </div>
              </div>

              {/* Card Footer tags without the inner button */}
              <div className="mt-3">
                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-neutral-500 font-mono tracking-tight">
                    {websiteService.tags.join(' · ')}
                  </p>
                  <a
                    href={websiteService.slug}
                    onClick={(e) => handleServiceLink(e, websiteService.slug)}
                    className="text-[11px] font-mono font-semibold text-emerald-600 hover:underline shrink-0 ml-2"
                  >
                    Service Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Text description with the main CTA */}
            <div className="md:pl-4">
              <span
                className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-600"
              >
                AVAILABLE NOW
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-snug mt-1">
                {websiteService.description}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                Engineered for lightning speeds, mobile responsiveness, and search engine visibility across India. Every website is custom-crafted to scale alongside your business ambition.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
                  style={{
                    backgroundColor: '#FF7900',
                    boxShadow: '0 4px 14px rgba(255, 121, 0, 0.3)',
                  }}
                >
                  <span>Let's Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="/website-development"
                  onClick={(e) => handleServiceLink(e, '/website-development')}
                  className="text-xs font-mono font-semibold text-neutral-700 hover:text-[#FF7900] underline underline-offset-4 transition-colors"
                >
                  Explore Web Development →
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: Video Editing & Graphic Design (COMING SOON) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Video Editing */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {videoService.number}.
                  </span>
                  <a
                    href={videoService.slug}
                    onClick={(e) => handleServiceLink(e, videoService.slug)}
                    className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#FF7900] transition-colors"
                  >
                    {videoService.title}
                  </a>
                </div>
                {renderBadge(videoService.status)}
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src={videoService.image}
                  alt={videoService.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[#FF7900]">
                    {videoService.projectTag}
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    {videoService.meta}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm text-neutral-700 leading-snug">
                  {videoService.description}
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <p className="text-xs text-neutral-500 font-mono tracking-tight">
                    {videoService.tags.join(' · ')}
                  </p>
                  <a
                    href={videoService.slug}
                    onClick={(e) => handleServiceLink(e, videoService.slug)}
                    className="text-[11px] font-mono text-neutral-500 hover:text-[#FF7900] transition-colors shrink-0 ml-2"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {graphicService.number}.
                  </span>
                  <a
                    href={graphicService.slug}
                    onClick={(e) => handleServiceLink(e, graphicService.slug)}
                    className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#FF7900] transition-colors"
                  >
                    {graphicService.title}
                  </a>
                </div>
                {renderBadge(graphicService.status)}
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src={graphicService.image}
                  alt={graphicService.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[#FF7900]">
                    {graphicService.projectTag}
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    {graphicService.meta}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm text-neutral-700 leading-snug">
                  {graphicService.description}
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <p className="text-xs text-neutral-500 font-mono tracking-tight">
                    {graphicService.tags.join(' · ')}
                  </p>
                  <a
                    href={graphicService.slug}
                    onClick={(e) => handleServiceLink(e, graphicService.slug)}
                    className="text-[11px] font-mono text-neutral-500 hover:text-[#FF7900] transition-colors shrink-0 ml-2"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Custom Web Applications (COMING SOON) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Text description */}
            <div className="order-2 md:order-1 md:pr-4">
              <span
                className="text-xs font-mono uppercase tracking-widest font-bold"
                style={{ color: '#FF7900' }}
              >
                UPCOMING SERVICE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-snug mt-1">
                {customAppService.description}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                Real-time operational workspaces, telemetry dashboards, and bespoke automation pipelines that eliminate friction and give teams superpowers.
              </p>
              <div className="mt-4 flex items-center gap-3">
                {renderBadge(customAppService.status)}
                <span className="text-xs font-mono text-neutral-500">
                  Currently in internal private alpha
                </span>
              </div>
            </div>

            {/* Card */}
            <div className="order-1 md:order-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {customAppService.number}.
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#FF7900] transition-colors">
                    {customAppService.title}
                  </span>
                </div>
                {renderBadge(customAppService.status)}
              </div>

              {/* Project-matched Image */}
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative my-2 bg-neutral-900 border border-neutral-200/80 shadow-inner">
                <img
                  src={customAppService.image}
                  alt={customAppService.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="400"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[#FF7900]">
                    {customAppService.projectTag}
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    {customAppService.meta}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-neutral-500 font-mono tracking-tight">
                    {customAppService.tags.join(' · ')}
                  </p>
                  <span className="text-[11px] font-mono text-neutral-400 italic">
                    Opening Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dedicated Service Pages Directory Strip for Internal Linking & India-Wide SEO */}
          <div className="pt-6 border-t border-[#E7E1D8]/80 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mr-1">
              Explore Specialized Services:
            </span>
            {specializedWebLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleServiceLink(e, item.path)}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white hover:bg-[#FF7900] text-neutral-700 hover:text-white border border-[#E7E1D8] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
