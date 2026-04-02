'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeSegment, setActiveSegment] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'produkty', 'pribeh', 'kontakt'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Úvod', path: '#hero', id: 'hero' },
    { label: 'Produkty', path: '#produkty', id: 'produkty' },
    { label: 'Příběh', path: '#pribeh', id: 'pribeh' },
    { label: 'Kontakt', path: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full pt-6 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-[28px] leading-none font-bold tracking-tight text-stone-900 hover:text-olive-900 transition-colors flex items-baseline outline-none">
          Voňavý <span className="font-serif italic font-normal text-[#8C76AC] ml-2 lowercase">Dotek</span>
        </Link>
        
        {/* Navigation - Pill Shape */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 p-1 bg-[#EFECE5]/60 backdrop-blur-md rounded-full border border-stone-200/50 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSegment === link.id;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-xs uppercase tracking-[0.15em] font-bold px-5 py-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-stone-900 shadow-sm border border-stone-100' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile menu wrapper */}
        <div className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-white/50 backdrop-blur-md rounded-full border border-stone-200/50">
          <div className="w-5 h-[1.5px] bg-stone-800"></div>
          <div className="w-3 h-[1.5px] bg-stone-800 self-end"></div>
        </div>
      </div>
    </header>
  );
}
