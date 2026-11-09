/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { initGA4, trackPageView } from './utils/analytics';

// Code-split below-the-fold components to minimize initial bundle size and main-thread parsing time
const AboutSection = React.lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const ServicesSection = React.lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const CtaBanner = React.lazy(() => import('./components/CtaBanner').then(m => ({ default: m.CtaBanner })));
const WorkSection = React.lazy(() => import('./components/WorkSection').then(m => ({ default: m.WorkSection })));
const ContactSection = React.lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));

export default function App() {
  const checkInitialAutostart = () => {
    if (typeof window === 'undefined') return 1;
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1' || params.get('skipIntro') === '1') {
      return 5;
    }
    const freeze = params.get('freezePhase');
    if (freeze) return parseInt(freeze, 10);
    return 1;
  };

  const [introKey, setIntroKey] = useState<number>(0);
  const [currentPhase, setCurrentPhase] = useState<number>(() => checkInitialAutostart());

  // Initialize GA4 and record initial page view
  useEffect(() => {
    initGA4();
    trackPageView();
  }, []);

  const handleReplayIntro = useCallback(() => {
    // Scroll back to top and restart intro sequence
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setIntroKey(prev => prev + 1);
    setCurrentPhase(1);
  }, []);

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
      const handle = (window as any).requestIdleCallback(preload, { timeout: 3000 });
      return () => (window as any).cancelIdleCallback(handle);
    }
  }, [currentPhase]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111113] selection:bg-orange-500 selection:text-white flex flex-col relative font-sans">
      {/* Floating Capsule Header */}
      <Navbar
        onReplayIntro={handleReplayIntro}
        showContent={currentPhase >= 3}
      />

      <main className="flex-1">
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
            currentPhase >= 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Suspense fallback={<div className="min-h-96" aria-hidden="true" />}>
            <AboutSection />
            <ServicesSection />
            <CtaBanner />
            <WorkSection />
            <ContactSection />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

