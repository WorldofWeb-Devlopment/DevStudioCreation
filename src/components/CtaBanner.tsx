import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface CtaBannerProps {
  onContactClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onContactClick }) => {
  const handleClick = () => {
    trackCtaClick("Let's Work Together", "cta_banner");
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#F5EDE1] border-y border-neutral-300/40 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-2">
          Have An Idea In Mind?
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111113] tracking-tight">
          Let's Turn Your Vision Into Something Extraordinary.
        </h2>
        <button
          onClick={handleClick}
          className="mt-6 sm:mt-8 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2 cursor-pointer"
        >
          <span>Let's Work Together</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
