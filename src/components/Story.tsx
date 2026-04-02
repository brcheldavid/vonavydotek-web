import Link from 'next/link';
import Image from 'next/image';
import { Leaf } from 'lucide-react';

export default function Story() {
  return (
    <section id="pribeh" className="w-full bg-[#FDFBF7] flex flex-col pt-12 pb-24 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative border-t border-[#EAE4D9]/30 pt-20">
        
        {/* The Zig-Zag Journey Container */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-32 lg:gap-40 mt-16 md:mt-24 z-10">
          
          {/* Block 1 (Moje zahrádka) */}
          <div className="flex flex-col md:flex-row items-center w-full relative z-20">
             {/* Left: Text */}
             <div className="w-full md:w-1/2 flex justify-start md:pr-24 lg:pr-32">
                <div className="bg-[#FDFBF7] relative z-20 p-6 md:p-12 -ml-6 md:-ml-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] max-w-[560px] rounded-[2rem]">
                   <h3 className="font-serif italic text-3xl md:text-[2.25rem] text-stone-900 leading-[1.1] mb-8 border-b border-[#A3B18A]/40 pb-3 inline-flex items-center">
                     <span className="text-[#8C76AC] not-italic font-light text-base md:text-xl uppercase tracking-widest whitespace-nowrap">První krok</span>
                     <Leaf className="w-5 h-5 text-[#A3B18A] opacity-60 mx-6 shrink-0" />
                     <span className="whitespace-nowrap">Moje zahrádka</span>
                   </h3>
                   <ul className="text-stone-700 font-light leading-relaxed flex flex-col gap-6 text-base md:text-lg">
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Všechno to začíná u nás na zahradě.</span>
                     </li>
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Tady levandule pomalu roste a nabírá v sobě hřejivou sílu slunce i živiny z půdy.</span>
                     </li>
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Každý kvítek opečovávám s láskou a respektem k přírodě.</span>
                     </li>
                   </ul>
                </div>
             </div>
             
             {/* Right: Floating Photo */}
             <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 relative z-10">
                <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] animate-float relative flex items-center justify-center">
                   {/* Decorative soft glow behind image */}
                   <div className="absolute inset-x-12 inset-y-16 bg-white/50 blur-[50px] rounded-full z-0"></div>
                   
                   <div className="relative w-full h-full z-10 transition-transform hover:scale-105 duration-500 cursor-default">
                      <Image 
                        src="/zahradka.png" 
                        alt="Moje zahrádka" 
                        fill
                        className="object-contain mix-blend-multiply opacity-95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                      />
                   </div>
                </div>
             </div>

             {/* SVG Spojnice 1 (Text 1 -> Text 2) */}
             <div className="hidden md:block absolute left-[38%] top-[60%] w-[24%] h-[150%] pointer-events-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                   <path d="M 0,0 C 20,60 100,40 100,100" fill="none" stroke="#A3B18A" strokeWidth="2" strokeDasharray="8 8" opacity="0.5" strokeLinecap="round"/>
                </svg>
             </div>
          </div>


          {/* Block 2 (Laskavý sběr) */}
          <div className="flex flex-col-reverse md:flex-row items-center w-full relative z-20">
             {/* Left: Floating Photo (Uprostřed) */}
             <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0 z-10">
                <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] animate-float-delayed relative flex items-center justify-center">
                   <div className="absolute inset-x-12 inset-y-16 bg-white/50 blur-[50px] rounded-full z-0"></div>
                   
                   <div className="relative w-full h-full z-10 transition-transform hover:scale-105 duration-500 cursor-default">
                      <Image 
                        src="/trhani bylinek.png" 
                        alt="Laskavý sběr" 
                        fill
                        className="object-contain mix-blend-multiply opacity-95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                      />
                   </div>
                </div>
             </div>

             {/* Right: Text (Posunutý dolů pod fotku) */}
             <div className="w-full md:w-1/2 flex justify-end md:pl-24 lg:pl-32 mb-12 md:mb-0 md:mt-32">
                <div className="bg-[#FDFBF7] relative z-20 p-6 md:p-12 -mr-6 md:-mr-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] max-w-[560px] rounded-[2rem]">
                   <h3 className="font-serif italic text-3xl md:text-[2.25rem] text-stone-900 leading-[1.1] mb-8 border-b border-[#A3B18A]/40 pb-3 inline-flex items-center">
                     <span className="text-[#8C76AC] not-italic font-light text-base md:text-xl uppercase tracking-widest whitespace-nowrap">Druhý krok</span>
                     <Leaf className="w-5 h-5 text-[#A3B18A] opacity-60 mx-6 shrink-0" />
                     <span className="whitespace-nowrap">Laskavý sběr</span>
                   </h3>
                   <ul className="text-stone-700 font-light leading-relaxed flex flex-col gap-6 text-base md:text-lg">
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Bylinky sbírám ručně, s úctou a v jejich největší síle.</span>
                     </li>
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Při zpracování nikam nespěchám – každá mast i mýdlo potřebuje svůj čas.</span>
                     </li>
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Věřím, že energie a klid, se kterými tvořím, se přenese i k vám domů.</span>
                     </li>
                   </ul>
                </div>
             </div>

             {/* SVG Spojnice 2 (Text 2 -> Text 3) */}
             <div className="hidden md:block absolute right-[38%] top-[60%] w-[24%] h-[150%] pointer-events-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                   <path d="M 100,0 C 80,60 0,40 0,100" fill="none" stroke="#A3B18A" strokeWidth="2" strokeDasharray="8 8" opacity="0.5" strokeLinecap="round"/>
                </svg>
             </div>
          </div>


          {/* Block 3 (Pravdivý dotek) */}
          <div className="flex flex-col md:flex-row items-center w-full relative z-20">
             {/* Left: Text */}
             <div className="w-full md:w-1/2 flex justify-start md:pr-24 lg:pr-32 mb-16 md:mb-0 md:mt-16">
                <div className="bg-[#FDFBF7] relative z-20 p-6 md:p-12 -ml-6 md:-ml-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] max-w-[560px] rounded-[2rem]">
                   <h3 className="font-serif italic text-3xl md:text-[2.25rem] text-stone-900 leading-[1.1] mb-8 border-b border-[#A3B18A]/40 pb-3 inline-flex items-center">
                     <span className="text-[#8C76AC] not-italic font-light text-base md:text-xl uppercase tracking-widest whitespace-nowrap">Třetí krok</span>
                     <Leaf className="w-5 h-5 text-[#A3B18A] opacity-60 mx-6 shrink-0" />
                     <span className="whitespace-nowrap">Pravdivý dotek</span>
                   </h3>
                   <ul className="text-stone-700 font-light leading-relaxed flex flex-col gap-6 text-base md:text-lg">
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Výsledkem jsou poctivé produkty bez zbytečné chemie a syntetiky.</span>
                     </li>
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Nejsou dokonalé, ale jsou pravdivé – přesně takové, jaké je příroda zamýšlela.</span>
                     </li>
                     <li className="flex gap-4 items-start">
                       <Leaf className="w-5 h-5 mt-1.5 text-[#A3B18A] opacity-40 shrink-0" />
                       <span>Dopřejte si malý rituál péče, který pohladí vaši pokožku i vaši mysl.</span>
                     </li>
                   </ul>
                </div>
             </div>
             
             {/* Right: Floating Photo */}
             <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] animate-float-slow relative flex items-center justify-center">
                   <div className="absolute inset-x-12 inset-y-16 bg-white/50 blur-[50px] rounded-full z-0"></div>
                   
                   <div className="relative w-full h-full z-10 transition-transform hover:scale-105 duration-500 cursor-default">
                      <Image 
                        src="/tvorba masticky.png" 
                        alt="Pravdivý dotek" 
                        fill
                        className="object-contain mix-blend-multiply opacity-95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                      />
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>

      {/* CTA Intermezzo placed tightly below the Zig-Zag sequence */}
      <div className="mt-32 lg:mt-48 w-full border-t border-b border-[#EAE4D9] bg-white/30 py-16 backdrop-blur-md z-30 relative shadow-sm">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center lg:justify-between gap-10 text-center lg:text-left relative z-20">
           <p className="text-2xl md:text-3xl font-serif text-stone-900 leading-snug max-w-2xl">
             Líbí se vám tato cesta? Přidejte se k nám do FB skupiny a buďte u toho, až vykvete další várka.
           </p>
           <Link 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 lg:px-12 lg:py-5 bg-[#A3B18A] text-white text-[15px] font-bold tracking-wider uppercase hover:opacity-90 transition-all duration-300 rounded-full shadow-lg shrink-0 hover:-translate-y-1"
            >
              Chci být u toho
           </Link>
        </div>
      </div>
    </section>
  );
}
