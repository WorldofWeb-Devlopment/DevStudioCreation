/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { initGA4, trackPageView } from './utils/analytics';
import { updateDocumentSeo } from './utils/seo';
import { SERVICE_PAGES } from './data/seoData';

// Code-split below-the-fold and secondary route components to minimize initial bundle size
const AboutSection = React.lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ServicesSection = React.lazy(() =>
  import('./components/ServicesSection').then((m) => ({
    default: m.ServicesSection,
  }))
);
const CtaBanner = React.lazy(() =>
  import('./components/CtaBanner').then((m) => ({ default: m.CtaBanner }))
);
const WorkSection = React.lazy(() =>
  import('./components/WorkSection').then((m) => ({ default: m.WorkSection }))
);
const ContactSection = React.lazy(() =>
  import('./components/ContactSection').then((m) => ({
    default: m.ContactSection,
  }))
);
const ServiceDetailPage = React.lazy(() =>
  import('./components/ServiceDetailPage').then((m) => ({
    default: m.ServiceDetailPage,
  }))
);
const NotFoundPage = React.lazy(() =>
  import('./components/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const HOMEPAGE_SEO = {
  title: 'DevStudioCreations | Web Design, Development & Creative Services',
  description:
    'DevStudioCreations helps businesses across India build professional websites, create impactful graphic designs, and produce engaging videos. Explore our creative services.',
  canonicalPath: '/',
};

export default function App() {
  const normalizePath = (rawPath: string) => {
    if (!rawPath || rawPath === '/') return '/';
    return rawPath.replace(/\/+$/, '');
  };

  const [currentPath, setCurrentPath] = useState<string>(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  const checkInitialAutostart = () => {
    if (typeof window === 'undefined') return 1;
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('autostart') === '1' ||
      params.get('skipIntro') === '1' ||
      window.location.hash
    ) {
      return 5;
    }
    const freeze = params.get('freezePhase');
    if (freeze) return parseInt(freeze, 10);
    return 1;
  };

  const [introKey, setIntroKey] = useState<number>(0);
  const [currentPhase, setCurrentPhase] = useState<number>(() =>
    checkInitialAutostart()
  );

  // Initialize GA4 and browser history popstate listener
  useEffect(() => {
    initGA4();
    trackPageView();

    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO metadata when on Homepage
  useEffect(() => {
    if (currentPath === '/') {
      updateDocumentSeo(HOMEPAGE_SEO);
    }
  }, [currentPath]);

  const handleNavigate = useCallback((target: string) => {
    if (typeof window === 'undefined') return;

    const [rawPathname, hashPart] = target.split('#');
    const nextPath = normalizePath(rawPathname || '/');

    if (nextPath === '/' && hashPart) {
      setCurrentPhase(5);
    }

    window.history.pushState(
      {},
      '',
      hashPart ? `${nextPath === '/' ? '' : nextPath}/#${hashPart}` : nextPath
    );
    setCurrentPath(nextPath);

    if (nextPath === '/' && hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  }, []);

  const handleReplayIntro = useCallback(() => {
    if (currentPath !== '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setIntroKey((prev) => prev + 1);
    setCurrentPhase(1);
  }, [currentPath]);

  const handlePhaseChange = useCallback((phase: number) => {
    setCurrentPhase(phase);
  }, []);

  // Preload below-the-fold modules during idle time or when intro reaches phase 2
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const preload = () => {
      import('./components/AboutSection');
      import('./components/ServicesSection');
      import('./components/CtaBanner');
      import('./components/WorkSection');
      import('./components/ContactSection');
    };
    if (currentPhase >= 2) {
      preload();
    } else if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(preload, {
        timeout: 3000,
      });
      return () => (window as any).cancelIdleCallback(handle);
    }
  }, [currentPhase]);

  // Resolve active route
  const cleanSlug = currentPath.replace(/^\//, '');
  const matchedService = SERVICE_PAGES[cleanSlug];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111113] selection:bg-orange-500 selection:text-white flex flex-col relative font-sans">
      {/* Floating Capsule Header */}
      <Navbar
        onReplayIntro={handleReplayIntro}
        showContent={currentPath !== '/' || currentPhase >= 3}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentPath === '/' ? (
          <>
            {/* Hero Section with Hyperspeed + TechText reveal animation */}
            <HeroSection
              introKey={introKey}
              onIntroPhaseChange={handlePhaseChange}
            />

            {/* Marquee Services Strip */}
            <div
              className={`transition-opacity duration-1000 ${
                currentPhase >= 4 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <MarqueeBanner />
            </div>

            {/* Content sections that reveal seamlessly after the intro */}
            <div
              className={`transition-opacity duration-1000 ${
                currentPhase >= 4
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <Suspense
                fallback={<div className="min-h-96" aria-hidden="true" />}
              >
                <AboutSection />
                <ServicesSection onNavigate={handleNavigate} />
                <CtaBanner />
                <WorkSection />
                <ContactSection onNavigate={handleNavigate} />
              </Suspense>
            </div>
          </>
        ) : (
          <Suspense
            fallback={<div className="min-h-screen pt-28" aria-hidden="true" />}
          >
            {matchedService ? (
              <ServiceDetailPage
                service={matchedService}
                onNavigate={handleNavigate}
              />
            ) : (
              <NotFoundPage onNavigate={handleNavigate} />
            )}
          </Suspense>
        )}
      </main>
    </div>
  );
}
