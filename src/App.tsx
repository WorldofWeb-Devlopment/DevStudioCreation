/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CtaBanner } from './components/CtaBanner';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const checkInitialAutostart = () => {
    if (typeof window === 'undefined') return 1;
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1' || window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      return 5;
    }
    const freeze = params.get('freezePhase');
    if (freeze) return parseInt(freeze, 10);
    return 1;
  };

  const [introKey, setIntroKey] = useState<number>(0);
  const [currentPhase, setCurrentPhase] = useState<number>(() => checkInitialAutostart());

  const handleReplayIntro = useCallback(() => {
    // Scroll back to top and restart intro sequence
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setIntroKey(prev => prev + 1);
    setCurrentPhase(1);
  }, []);

  const handlePhaseChange = useCallback((phase: number) => {
    setCurrentPhase(phase);
  }, []);

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
          <AboutSection />
          <ServicesSection />
          <CtaBanner />
          <WorkSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
