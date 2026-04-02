'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Leaf, X } from 'lucide-react';

const steps = [
  {
    area: 'Spánky',
    tip: 'Naneste malé množství masti a jemnými kruhovými pohyby vmasírujte do spánků. Zavřete oči, pomalu dýchejte a nechte vůni levandule udělat svou práci.',
  },
  {
    area: 'Šíje',
    tip: 'Napětí v šíji odezní, pokud mast zahřejete v dlaních a masérovacími pohyby nahoru-dolů vpravíte do svalu. Pracujte od ramen k uším.',
  },
  {
    area: 'Zápěstí',
    tip: 'Stačí kapička na vnitřní stranu zápěstí. Přiložte nos a zhluboka se nadechněte – aromaterapie přímo v pohybu, kdekoliv jste.',
  },
];

export default function Ritual() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="ritual" className="w-full bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A3B18A] mb-4 inline-block">
            Tipy a triky z naší zahrádky
          </span>
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.15]">
            Malý rituál pro <span className="text-[#8C76AC]">velkou úlevu</span>
          </h2>
        </div>

        {/* 50/50 Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">

          {/* Left: Images */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-8 relative">
            {/* Decorative background blob */}
            <div className="absolute inset-0 bg-[#A3B18A]/5 rounded-[3rem] blur-2xl -z-10"></div>

            {/* Main image: Kam aplikovat */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] flex-shrink-0">
              <Image
                src="/Kam aplikovat.png"
                alt="Diagram ukazující místa pro aplikaci masťky – spánky, šíje a zápěstí"
                fill
                className="object-contain mix-blend-multiply opacity-95"
              />
            </div>

            {/* Secondary image: Bolava hlava – lightbox trigger */}
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="Zobrazit ilustraci bolesti hlavy"
              className="relative w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] -mt-12 lg:-mt-16 self-end mr-4 lg:mr-12 animate-float-slow group cursor-zoom-in"
            >
              <Image
                src="/Bolava hlava.png"
                alt="Ilustrace bolesti hlavy – indikace pro použití levandulové masťky"
                fill
                className="object-contain mix-blend-multiply opacity-90 drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              />
              {/* Hover ring hint */}
              <span className="absolute inset-0 rounded-full ring-2 ring-[#A3B18A]/0 group-hover:ring-[#A3B18A]/40 transition-all duration-300 pointer-events-none"></span>
            </button>
          </div>

          {/* Right: Steps */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={step.area} className="flex gap-6 items-start group">
                {/* Icon + connector line */}
                <div className="flex flex-col items-center gap-2 pt-1 shrink-0">
                  <div className="w-10 h-10 rounded-full border border-[#A3B18A]/50 flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#A3B18A]/10 transition-colors duration-300">
                    <Leaf className="w-4 h-4 text-[#A3B18A]" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-[#A3B18A]/20"></div>
                  )}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-2 pb-2">
                  <h3 className="font-serif italic text-2xl md:text-3xl text-stone-900 leading-tight">
                    {step.area}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                    {step.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Lightbox Overlay ── */}
      <div
        onClick={() => setLightboxOpen(false)}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10 transition-all duration-300 ${
          lightboxOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Stop propagation so clicking the image itself won't close */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative transition-all duration-300 ${
            lightboxOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <div className="relative w-[min(80vw,520px)] aspect-square">
            <Image
              src="/Bolava hlava.png"
              alt="Ilustrace bolesti hlavy – zvětšený náhled"
              fill
              className="object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Zavřít náhled"
            className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-xl hover:bg-stone-100 transition-colors duration-200 z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
}
