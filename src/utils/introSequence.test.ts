import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateIntroState, TIMELINE_CONFIG } from './introSequence.js';

test('Phase 1: 0 - 2000ms keeps hero content hidden and fullscreen Hyperspeed', () => {
  const atStart = calculateIntroState(0);
  assert.equal(atStart.phase, 'phase-1-entrance');
  assert.equal(atStart.phaseNumber, 1);
  assert.equal(atStart.hyperspeedMode, 'fullscreen');
  assert.equal(atStart.showTechText, false);
  assert.equal(atStart.showSubtitle, false);
  assert.equal(atStart.showCtas, false);

  // Within boost window (e.g. at 1000ms)
  const atBoost = calculateIntroState(1000);
  assert.equal(atBoost.isBoosting, true);
  assert.equal(atBoost.showTechText, false);
});

test('Phase 2: 2000 - 3000ms transitions Hyperspeed into background before title reveal', () => {
  const atTransition = calculateIntroState(2500);
  assert.equal(atTransition.phase, 'phase-2-transition');
  assert.equal(atTransition.phaseNumber, 2);
  assert.equal(atTransition.hyperspeedMode, 'background');
  assert.equal(atTransition.showTechText, false);
  assert.equal(atTransition.showSubtitle, false);
});

test('Phase 3: 3000 - 5000ms reveals TechText title only, subtitle and buttons still hidden', () => {
  const atTechText = calculateIntroState(3500);
  assert.equal(atTechText.phase, 'phase-3-techtext');
  assert.equal(atTechText.phaseNumber, 3);
  assert.equal(atTechText.showTechText, true);
  assert.equal(atTechText.showSubtitle, false);
  assert.equal(atTechText.showDescription, false);
  assert.equal(atTechText.showCtas, false);
});

test('Phase 4: 5000 - 6000ms stages subtitle, description, and CTA reveals', () => {
  const atSubtitle = calculateIntroState(5100);
  assert.equal(atSubtitle.phase, 'phase-4-hero-content');
  assert.equal(atSubtitle.showSubtitle, true);
  assert.equal(atSubtitle.showDescription, false);
  assert.equal(atSubtitle.showCtas, false);

  const atCtas = calculateIntroState(5800);
  assert.equal(atCtas.showSubtitle, true);
  assert.equal(atCtas.showDescription, true);
  assert.equal(atCtas.showCtas, true);
});

test('Phase 5: 6000ms+ completes intro and enables full interactive experience', () => {
  const atComplete = calculateIntroState(6500);
  assert.equal(atComplete.phase, 'phase-5-complete');
  assert.equal(atComplete.phaseNumber, 5);
  assert.equal(atComplete.isComplete, true);
  assert.equal(atComplete.showTechText, true);
  assert.equal(atComplete.showCtas, true);
});

test('Reduced motion or skipIntro flag jumps immediately to complete phase', () => {
  const skipped = calculateIntroState(0, true);
  assert.equal(skipped.phase, 'phase-5-complete');
  assert.equal(skipped.isComplete, true);
  assert.equal(skipped.showTechText, true);
  assert.equal(skipped.showCtas, true);
});
