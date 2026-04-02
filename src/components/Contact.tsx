import Link from 'next/link';
import Image from 'next/image';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="kontakt" className="w-full bg-[#A3B18A]/10 py-24 lg:py-32 border-t border-[#A3B18A]/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="font-serif italic text-4xl md:text-5xl text-stone-900 leading-[1.15]">
            Zůstaňme v <span className="text-[#A3B18A]">kontaktu</span>
          </h2>
        </div>

        {/* New Horizontal / Integrated Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto relative px-4">
          
          {/* 1. Left Card: Lavender */}
          <div className="w-40 md:w-52 lg:w-48 shrink-0 relative order-1 lg:order-1 -rotate-6 lg:-rotate-12 transition-transform hover:rotate-0 duration-500 hover:scale-105 drop-shadow-xl z-20">
            <Image 
              src="/karticky/dekuji_levandule-removebg-preview.png" 
              alt="Děkovná kartička – Levandulová"
              width={260}
              height={340}
              className="object-contain"
            />
          </div>

          {/* 2. Center: Newsletter (Hero Style) */}
          <div className="w-full lg:max-w-[440px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-2 z-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-2xl md:text-3xl text-stone-900 leading-tight">
                Chcete vědět, až vykvete <br className="hidden md:block" /> nová levandule?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed text-base max-w-sm">
                Nechte mi tu svůj e-mail. Píši jen tehdy, když mám co říct — žádný spam, jen zprávy ze zahrádky.
              </p>
            </div>
            
            {/* Hero Style Subscription Form */}
            <div className="bg-white rounded-full p-[4px] flex items-center shadow-sm border border-stone-200/50 w-full z-30">
               <input 
                 type="email" 
                 placeholder="Váš e-mail pro novinky" 
                 className="bg-transparent outline-none px-5 py-3 w-full text-sm text-stone-700 placeholder-stone-400" 
               />
               <button className="bg-[#A3B18A] text-white px-8 py-3 rounded-full text-xs font-bold tracking-wide hover:opacity-90 transition-all shrink-0">
                 Odebírat
               </button>
            </div>
          </div>

          {/* 3. Divider & FB Section (Right side grouping) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 order-3 lg:order-3 w-full lg:w-auto">
            
            {/* Vertical Divider (Hidden on mobile) */}
            <div className="hidden lg:block h-32 w-px bg-[#A3B18A]/20"></div>
            {/* Horizontal Divider (Visible on mobile) */}
            <div className="lg:hidden w-full h-px bg-[#A3B18A]/20 my-4"></div>

            {/* FB Invitation */}
            <div className="flex flex-col items-center lg:items-start gap-5 max-w-[240px]">
              <p className="text-stone-600 font-light text-sm leading-relaxed text-center lg:text-left">
                Nahlédněte za oponu v naší FB skupině — zákulisí výroby a nové várky.
              </p>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-white border border-[#A3B18A]/30 text-[#A3B18A] font-bold tracking-wider uppercase text-[11px] rounded-full shadow-sm hover:bg-[#A3B18A] hover:text-white transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
                FB Skupina
              </Link>
            </div>

            {/* 4. Right Card: Green/Mint */}
            <div className="w-40 md:w-52 lg:w-48 shrink-0 relative rotate-6 lg:rotate-12 transition-transform hover:rotate-0 duration-500 hover:scale-105 drop-shadow-xl z-20">
              <Image 
                src="/karticky/dekuji_mata-removebg-preview.png" 
                alt="Děkovná kartička – Mátová"
                width={260}
                height={340}
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
