import React, { useState, useEffect, useRef } from 'react';
import Hyperspeed from './Hyperspeed.jsx';
import TechText from './TechText.jsx';
import { ArrowRight, ChevronDown, FastForward } from 'lucide-react';
import { TIMELINE_CONFIG } from '../utils/introSequence';

interface HeroSectionProps {
  introKey?: number;
  onIntroPhaseChange?: (phaseNumber: number) => void;
  onSkipIntro?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  introKey = 0,
  onIntroPhaseChange,
  onSkipIntro
}) => {
  // Check parameters or preferences
  const checkInitialConfig = () => {
    if (typeof window === 'undefined') {
      return { freeze: null, autostart: false };
    }
    const params = new URLSearchParams(window.location.search);
    const freeze = params.get('freezePhase') ? parseInt(params.get('freezePhase')!, 10) : null;
    const autostart = params.get('autostart') === '1' || (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);
    return { freeze, autostart };
  };

  const initial = checkInitialConfig();
  const [phaseNumber, setPhaseNumber] = useState<number>(() => {
    if (initial.freeze !== null) return initial.freeze;
    if (initial.autostart) return 5;
    return 1;
  });

  const [isBoosting, setIsBoosting] = useState<boolean>(() => {
    if (initial.freeze === 1) return true;
    return false;
  });

  const [hyperspeedFullscreen, setHyperspeedFullscreen] = useState<boolean>(() => {
    if (initial.freeze !== null) return initial.freeze === 1;
    if (initial.autostart) return false;
    return true;
  });

  const [showTechText, setShowTechText] = useState<boolean>(() => {
    if (initial.freeze !== null) return initial.freeze >= 3;
    if (initial.autostart) return true;
    return false;
  });

  const [showSubtitle, setShowSubtitle] = useState<boolean>(() => {
    if (initial.freeze !== null) return initial.freeze >= 4;
    if (initial.autostart) return true;
    return false;
  });

  const [showDescription, setShowDescription] = useState<boolean>(() => {
    if (initial.freeze !== null) return initial.freeze >= 4;
    if (initial.autostart) return true;
    return false;
  });

  const [showCtas, setShowCtas] = useState<boolean>(() => {
    if (initial.freeze !== null) return initial.freeze >= 4;
    if (initial.autostart) return true;
    return false;
  });

  const [boostAnnounced, setBoostAnnounced] = useState<string>('');
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
  };

  const skipSequence = () => {
    clearAllTimers();
    setPhaseNumber(5);
    setIsBoosting(false);
    setHyperspeedFullscreen(false);
    setShowTechText(true);
    setShowSubtitle(true);
    setShowDescription(true);
    setShowCtas(true);
    onIntroPhaseChange?.(5);
    onSkipIntro?.();
  };

  useEffect(() => {
    const config = checkInitialConfig();
    if (config.freeze !== null) {
      setPhaseNumber(config.freeze);
      setHyperspeedFullscreen(config.freeze === 1);
      setIsBoosting(config.freeze === 1);
      setShowTechText(config.freeze >= 3);
      setShowSubtitle(config.freeze >= 4);
      setShowDescription(config.freeze >= 4);
      setShowCtas(config.freeze >= 4);
      onIntroPhaseChange?.(config.freeze);
      return;
    }

    if (config.autostart) {
      skipSequence();
      return;
    }

    clearAllTimers();
    setPhaseNumber(1);
    setHyperspeedFullscreen(true);
    setIsBoosting(false);
    setShowTechText(false);
    setShowSubtitle(false);
    setShowDescription(false);
    setShowCtas(false);
    onIntroPhaseChange?.(1);

    // Timeline sequencing according to exact specification:
    // Phase 1 (0-2s): Hyperspeed entrance, starts boost around 400ms
    const tBoostStart = setTimeout(() => {
      setIsBoosting(true);
    }, TIMELINE_CONFIG.BOOST_START_MS);

    // Phase 2 (2-3s): Hyperspeed peak reached, smooth transition into background
    const tPhase2 = setTimeout(() => {
      setIsBoosting(false);
      setPhaseNumber(2);
      setHyperspeedFullscreen(false);
      onIntroPhaseChange?.(2);
    }, TIMELINE_CONFIG.PHASE_2_START_MS);

    // Phase 3 (3-5s): TechText Title Reveal ("DevStudioCreations" with intro="assemble")
    const tPhase3 = setTimeout(() => {
      setPhaseNumber(3);
      setShowTechText(true);
      onIntroPhaseChange?.(3);
    }, TIMELINE_CONFIG.PHASE_3_START_MS);

    // Phase 4 (5-6s): Hero Content Reveal
    // 5.0s: Subtitle "EVERYTHING IN ONE PLACE"
    const tSubtitle = setTimeout(() => {
      setPhaseNumber(4);
      setShowSubtitle(true);
      onIntroPhaseChange?.(4);
    }, TIMELINE_CONFIG.SUBTITLE_DELAY_MS);

    // 5.3s: Description fade in
    const tDescription = setTimeout(() => {
      setShowDescription(true);
    }, TIMELINE_CONFIG.DESCRIPTION_DELAY_MS);

    // 5.6s: CTA buttons staggered reveal
    const tCtas = setTimeout(() => {
      setShowCtas(true);
    }, TIMELINE_CONFIG.CTAS_DELAY_MS);

    // 6.0s+: Completion
    const tComplete = setTimeout(() => {
      setPhaseNumber(5);
      onIntroPhaseChange?.(5);
    }, TIMELINE_CONFIG.COMPLETION_MS);

    timersRef.current = [tBoostStart, tPhase2, tPhase3, tSubtitle, tDescription, tCtas, tComplete];

    return () => {
      clearAllTimers();
    };
  }, [introKey]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-[#FAF7F2]"
    >
      {/* PHASE 1: Fullscreen Hyperspeed Cinematic Warp Takeover */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-1000 bg-[#060608] ${
          hyperspeedFullscreen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!hyperspeedFullscreen}
      >
        <Hyperspeed
          curve="winding"
          curvature={1.3}
          speed={1.6}
          boost={3.8}
          fov={100}
          boostFov={140}
          lanes={3}
          roadWidth={11}
          density={45}
          trailLength={1.4}
          lightSize={1.2}
          poles={25}
          dust={150}
          glow={0.85}
          theme="dark"
          tailColors={['#F97316', '#EA580C', '#FB923C', '#FFFFFF']}
          headColors={['#06B6D4', '#3B82F6', '#818CF8', '#FFFFFF']}
          poleColors={['#F97316', '#FB923C']}
          roadColor="#08080a"
          lineColor="#27272a"
          interactive={false}
          boosting={isBoosting}
          onBoostStart={() => setBoostAnnounced('Hyperspeed boost engaged')}
          onBoostEnd={() => setBoostAnnounced('Hyperspeed stabilized')}
        />

        {/* Phase 1 HUD and Skip Button */}
        {hyperspeedFullscreen && (
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 pointer-events-none">
            <div className="flex justify-between items-center text-xs tracking-widest uppercase font-mono text-white/70 pointer-events-none">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                <span>PHASE 01 // HYPERSPEED WARP ENTRANCE</span>
              </span>
              <button
                onClick={skipSequence}
                className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all cursor-pointer backdrop-blur-md border border-white/10"
              >
                <span>Skip Intro</span>
                <FastForward className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-center pb-6 text-neutral-400 font-mono text-xs tracking-widest uppercase flex flex-col items-center gap-1.5 pointer-events-none">
              <span className="text-orange-400 font-semibold tracking-[0.2em]">DEVSTUDIO CREATIONS</span>
              <span className="text-[11px] text-white/50">INITIALIZING SPEED ENGINE...</span>
            </div>
          </div>
        )}
      </div>

      {/* PHASE 2 onwards: Ambient Hyperspeed blended smoothly into hero background */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
          phaseNumber >= 2 ? 'opacity-30' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <Hyperspeed
          curve="winding"
          curvature={0.8}
          speed={0.7}
          boost={2}
          fov={85}
          boostFov={110}
          lanes={2}
          roadWidth={12}
          density={30}
          trailLength={0.9}
          lightSize={0.9}
          dust={70}
          glow={0.5}
          theme="light"
          tailColors={['#F97316', '#EA580C', '#FB923C']}
          headColors={['#0284C7', '#6366F1', '#A855F7']}
          roadColor="#EAE5DE"
          lineColor="#DDD6CC"
          background="transparent"
          interactive={false}
          boosting={false}
        />
        {/* Soft radial vignette to keep typography crisp and readable */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#FAF7F2]/40 to-[#FAF7F2] pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* PHASE 3: TechText Title Reveal ("DevStudioCreations") */}
        <div className="w-full flex justify-center items-center min-h-[120px] sm:min-h-[150px] md:min-h-[190px]">
          {showTechText ? (
            <div className="w-full h-28 sm:h-36 md:h-44 flex items-center justify-center transition-all duration-700">
              <TechText
                text="DevStudioCreations"
                intro="assemble"
                introDuration={1.8}
                fontWeight={700}
                fontSize={135}
                color="#111113"
                accentColor="#F97316"
                align="center"
                lineStyle="dashed"
                strokeWidth={1.5}
                specks={20}
                labels={true}
                selection={true}
                draggable={true}
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="w-full h-28 sm:h-36 md:h-44 opacity-0 pointer-events-none" />
          )}
        </div>

        {/* PHASE 4: Subtitle Reveal ("EVERYTHING IN ONE PLACE") */}
        <div
          className={`mt-4 sm:mt-6 transition-all duration-700 ${
            showSubtitle
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg font-bold tracking-[0.28em] text-[#1e1e24] uppercase">
            EVERYTHING IN ONE PLACE
          </p>
        </div>

        {/* PHASE 4: Description Reveal */}
        <div
          className={`mt-4 sm:mt-5 max-w-2xl px-4 transition-all duration-700 delay-100 ${
            showDescription
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed font-normal">
            From websites and custom apps to graphic design and video editing we bring creativity,
            technology, and storytelling together to build your complete digital presence.
          </p>
        </div>

        {/* PHASE 4: CTA Buttons Staggered Reveal */}
        <div
          className={`mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            showCtas
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6 pointer-events-none'
          }`}
        >
          {/* Start a Project */}
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-semibold text-sm md:text-base transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 cursor-pointer flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* View Our Work */}
          <button
            onClick={() => scrollToSection('work')}
            className="px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-neutral-800 hover:text-black font-semibold text-sm md:text-base border border-neutral-200/80 hover:border-neutral-300 shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
          >
            <span>View Our Work</span>
          </button>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div
        className={`mt-14 sm:mt-18 transition-all duration-700 delay-300 ${
          showCtas ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer group"
          aria-label="Scroll to About section"
        >
          <span className="tracking-widest uppercase font-medium text-[10px]">Explore Studio</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-orange-500" />
        </button>
      </div>
    </section>
  );
};
