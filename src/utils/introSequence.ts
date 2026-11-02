/**
 * Timeline states and phase calculator for the DevStudioCreations cinematic intro sequence.
 */

export type IntroPhase = 
  | 'phase-1-entrance'      // 0 - 2000ms: Hyperspeed starts full-screen, boost engages
  | 'phase-2-transition'    // 2000 - 3000ms: Peak speed, smooth transition to background
  | 'phase-3-techtext'      // 3000 - 5000ms: TechText brand title assembles
  | 'phase-4-hero-content'  // 5000 - 6000ms: Subtitle, description, CTA buttons
  | 'phase-5-complete';     // 6000ms+: Finished, full interactivity

export interface IntroState {
  phase: IntroPhase;
  phaseNumber: number; // 1, 2, 3, 4, 5
  isBoosting: boolean;
  showHyperspeed: boolean;
  hyperspeedMode: 'fullscreen' | 'background';
  showTechText: boolean;
  showSubtitle: boolean;
  showDescription: boolean;
  showCtas: boolean;
  isComplete: boolean;
}

export const TIMELINE_CONFIG = {
  PHASE_1_START_MS: 0,
  BOOST_START_MS: 400,
  BOOST_END_MS: 2100,
  PHASE_2_START_MS: 2000,
  PHASE_3_START_MS: 3000,
  PHASE_4_START_MS: 5000,
  SUBTITLE_DELAY_MS: 5000,
  DESCRIPTION_DELAY_MS: 5300,
  CTAS_DELAY_MS: 5600,
  COMPLETION_MS: 6000,
};

/**
 * Calculates current intro state based on elapsed milliseconds.
 * Respects prefers-reduced-motion or autostart override by jumping directly to complete.
 */
export function calculateIntroState(elapsedMs: number, skipIntro = false): IntroState {
  if (skipIntro) {
    return {
      phase: 'phase-5-complete',
      phaseNumber: 5,
      isBoosting: false,
      showHyperspeed: true,
      hyperspeedMode: 'background',
      showTechText: true,
      showSubtitle: true,
      showDescription: true,
      showCtas: true,
      isComplete: true,
    };
  }

  const isBoosting = elapsedMs >= TIMELINE_CONFIG.BOOST_START_MS && elapsedMs < TIMELINE_CONFIG.BOOST_END_MS;

  if (elapsedMs < TIMELINE_CONFIG.PHASE_2_START_MS) {
    return {
      phase: 'phase-1-entrance',
      phaseNumber: 1,
      isBoosting,
      showHyperspeed: true,
      hyperspeedMode: 'fullscreen',
      showTechText: false,
      showSubtitle: false,
      showDescription: false,
      showCtas: false,
      isComplete: false,
    };
  }

  if (elapsedMs < TIMELINE_CONFIG.PHASE_3_START_MS) {
    return {
      phase: 'phase-2-transition',
      phaseNumber: 2,
      isBoosting,
      showHyperspeed: true,
      hyperspeedMode: 'background',
      showTechText: false,
      showSubtitle: false,
      showDescription: false,
      showCtas: false,
      isComplete: false,
    };
  }

  if (elapsedMs < TIMELINE_CONFIG.PHASE_4_START_MS) {
    return {
      phase: 'phase-3-techtext',
      phaseNumber: 3,
      isBoosting: false,
      showHyperspeed: true,
      hyperspeedMode: 'background',
      showTechText: true,
      showSubtitle: false,
      showDescription: false,
      showCtas: false,
      isComplete: false,
    };
  }

  if (elapsedMs < TIMELINE_CONFIG.COMPLETION_MS) {
    return {
      phase: 'phase-4-hero-content',
      phaseNumber: 4,
      isBoosting: false,
      showHyperspeed: true,
      hyperspeedMode: 'background',
      showTechText: true,
      showSubtitle: elapsedMs >= TIMELINE_CONFIG.SUBTITLE_DELAY_MS,
      showDescription: elapsedMs >= TIMELINE_CONFIG.DESCRIPTION_DELAY_MS,
      showCtas: elapsedMs >= TIMELINE_CONFIG.CTAS_DELAY_MS,
      isComplete: false,
    };
  }

  return {
    phase: 'phase-5-complete',
    phaseNumber: 5,
    isBoosting: false,
    showHyperspeed: true,
    hyperspeedMode: 'background',
    showTechText: true,
    showSubtitle: true,
    showDescription: true,
    showCtas: true,
    isComplete: true,
  };
}
