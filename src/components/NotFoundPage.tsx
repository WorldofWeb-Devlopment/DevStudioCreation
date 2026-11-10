import React, { useEffect } from 'react';
import { ArrowLeft, Compass, Home } from 'lucide-react';
import { SERVICE_LIST } from '../data/seoData';
import { updateDocumentSeo } from '../utils/seo';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    updateDocumentSeo({
      title: 'Page Not Found (404) | DevStudioCreations',
      description:
        'The page you are looking for could not be found. Explore DevStudioCreations web design, development, and creative services across India.',
      canonicalPath: '/',
      robots: 'noindex, nofollow',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111113] pt-28 pb-20 px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E1D8] text-center shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mx-auto mb-4">
          <Compass className="w-6 h-6" />
        </div>
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">
          ERROR 404 · PAGE NOT FOUND
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#111113] tracking-tight">
          We Couldn't Find That Page
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
          The link you followed may have moved or no longer exists. Explore our homepage or jump directly to one of our creative and web development services below.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-md shadow-orange-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </a>
          <a
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/blog');
            }}
            className="px-6 py-3 rounded-full bg-[#FAF7F2] hover:bg-neutral-200/70 text-neutral-800 text-xs sm:text-sm font-semibold border border-[#E7E1D8] inline-flex items-center gap-1.5 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse Guides</span>
          </a>
        </div>

        <div className="mt-9 pt-7 border-t border-neutral-100 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3 text-center">
            Popular Services
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_LIST.slice(0, 6).map((svc) => (
              <a
                key={svc.slug}
                href={`/${svc.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/${svc.slug}`);
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] hover:bg-orange-500 hover:text-white text-neutral-700 border border-[#E7E1D8] transition-colors"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
