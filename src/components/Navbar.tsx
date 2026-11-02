import React, { useState, useEffect } from 'react';
import { RotateCcw, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
  showContent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, showContent = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-3 md:top-6 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-4 transition-all duration-700 pointer-events-none ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-[calc(100vw-24px)] md:w-auto flex items-center justify-between gap-2.5 sm:gap-4 md:gap-8 px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 rounded-full transition-all duration-300 shadow-xl ${
          scrolled || mobileMenuOpen
            ? 'bg-[#121214]/95 backdrop-blur-md border border-white/15 shadow-black/30'
            : 'bg-[#18181b]/95 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-1.5 sm:gap-2 group text-left cursor-pointer focus:outline-none shrink-0"
          aria-label="DevStudioCreations Home"
        >
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-orange-500 group-hover:scale-125 transition-transform animate-pulse shrink-0" />
          <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-tight">
            DevStudio<span className="text-orange-500">Creations</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs md:text-sm text-neutral-300 font-medium">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Actions & Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay cinematic intro"
              aria-label="Replay intro animation"
              className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Intro</span>
            </button>
          )}

          <button
            onClick={() => scrollToSection('contact')}
            className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 md:px-5 md:py-2 text-xs sm:text-xs md:text-sm font-semibold rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white transition-all shadow-md shadow-orange-500/30 cursor-pointer flex items-center gap-1"
          >
            <span>Let's Talk</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 md:hidden transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden w-full max-w-[calc(100vw-24px)] mt-2 bg-[#121214]/98 backdrop-blur-xl border border-white/15 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors flex items-center justify-between"
            >
              <span>Home</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-xs text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Intro</span>
              </button>
            )}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex-1 py-2 rounded-xl bg-orange-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/30"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
