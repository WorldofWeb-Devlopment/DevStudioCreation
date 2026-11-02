import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'Graphic Design',
    'Websites',
    'Video Editing',
    'Custom Apps',
    'Graphic Design',
    'Websites',
    'Video Editing',
    'Custom Apps',
  ];

  return (
    <div
      aria-label="Core Services Marquee"
      className="w-full bg-[#0a0a0c] text-white py-4 sm:py-5 overflow-hidden border-y border-white/10 select-none shadow-md"
    >
      <div className="flex w-max animate-marquee items-center gap-8">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-sm sm:text-base md:text-lg font-bold tracking-wide">
            <span className="text-white hover:text-orange-400 transition-colors whitespace-nowrap">
              {text}
            </span>
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
