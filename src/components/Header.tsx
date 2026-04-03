'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('hero');

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-[110] flex flex-col items-end gap-1.5 p-3 h-11 w-11 justify-center bg-white/80 backdrop-blur-md rounded-full border border-stone-200/50 shadow-sm outline-none group"
          aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
        >
          <div className={`h-[1.5px] bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[4.5px]' : 'w-5'}`}></div>
          <div className={`h-[1.5px] bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-3'}`}></div>
          <div className={`h-[1.5px] bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[4.5px]' : 'w-4'}`}></div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#FDFBF7] z-[105] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col items-center gap-8 text-center p-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 bg-stone-100/50 px-4 py-1.5 rounded-full">Menu</span>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif text-stone-900 hover:text-olive-900 transition-all hover:italic tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-4 px-6 md:px-0">
             <div className="w-12 h-[1px] bg-stone-200"></div>
             <p className="text-stone-500 text-sm font-light">voňavý dotek &copy; 2024</p>
          </div>
        </div>
      </div>
    </header>
  );
}
