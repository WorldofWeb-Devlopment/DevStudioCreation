import React from 'react';
import { Layers, Diamond, Clock, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';
import Stack from './Stack.jsx';

export const AboutSection: React.FC = () => {
  const cardData = [
    {
      num: '01/Our Work',
      title: 'Ideas Into Reality',
      description: 'Creative Solutions That Bring Your Ideas To Life And Make Your Brand Stand Out.',
      icon: Layers,
      highlight: 'Vision & Production',
    },
    {
      num: '02/Quality',
      title: 'Never Compromise',
      description: 'Every Detail Matters. We Deliver With Care, Precision, And Attention To Quality.',
      icon: Diamond,
      highlight: 'Pixel-Perfect Standards',
    },
    {
      num: '03 / DELIVERY',
      title: 'Time Matters',
      description: 'Efficient Workflows, Clear Timelines, And Dependable Delivery.',
      icon: Clock,
      highlight: 'On-Time Milestones',
    },
    {
      num: '04 / SUPPORT',
      title: 'Beyond The Launch',
      description: "We're Here For The Long Run, Supporting Your Journey Even After Project Completion.",
      icon: InfinityIcon,
      highlight: 'Lifelong Partnership',
    },
  ];

  const cards = cardData.map((card, idx) => {
    const Icon = card.icon;
    return (
      <div
        key={idx}
        className="w-full h-full bg-[#0a0a0c] text-white p-7 sm:p-9 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between select-none relative overflow-hidden group cursor-pointer"
      >
        {/* Subtle orange ambient background glow */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

        {/* Card header */}
        <div className="flex items-center justify-between relative z-10">
          <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-orange-500 shadow-sm">
            <Icon className="w-6 h-6" strokeWidth={1.8} />
          </div>
          <span className="text-xs font-mono text-neutral-400 tracking-wider">
            {card.num}
          </span>
        </div>

        {/* Card body */}
        <div className="my-auto py-3 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 tracking-tight">
            {card.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {card.description}
          </p>
        </div>

        {/* Card footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 relative z-10">
          <span className="font-mono text-[11px] text-orange-400/90 font-medium tracking-wide">
            {card.highlight}
          </span>
          <span className="text-[11px] text-neutral-400/80 font-mono tracking-tight flex items-center gap-1 group-hover:text-orange-400 transition-colors">
            <span>Click to cycle</span>
            <ArrowRight className="w-3 h-3 text-orange-500 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  });

  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tag */}
        <p className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-3">
          ABOUT US
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#111113] tracking-tight leading-tight">
          We Build <span className="text-orange-500">Websites</span> And{' '}
          <span className="text-orange-500">Custom Apps</span> That Help Brands Grow.
        </h2>

        {/* Subtitle paragraph */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We Bring Design, Technology, And Storytelling Together To Help Brands Build A Powerful Digital
          Presence. From Stunning Websites And Custom Applications To Creative Visuals And Engaging Videos,
          Everything You Need Is Under One Roof.
        </p>

        {/* Pure Card Deck Stack */}
        <div className="mt-12 md:mt-16 max-w-xl mx-auto">
          <div className="relative w-full h-[320px] sm:h-[300px] mx-auto">
            <Stack
              cards={cards}
              layout="deck"
              visible={4}
              spread={0.28}
              depth={0.42}
              radius={24}
              sendToBackOnClick={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
