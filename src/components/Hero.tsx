import Link from 'next/link';
import { Globe, Share2, Music } from 'lucide-react';
import EmailSubscriptionForm from './EmailSubscriptionForm';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[850px] lg:h-screen flex flex-col pt-28 overflow-hidden bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12 flex-1 relative flex pb-20 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-4 w-full h-full lg:pt-8">
          
          {/* --- LEFT CONTENT (Top/Content) --- */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-2xl z-20 w-full lg:w-[50%] lg:pr-12 lg:pt-4 text-left">
            {/* Main Heading */}
            <h1 className="font-serif text-5xl md:text-[4.2rem] lg:text-[4.6rem] text-stone-900 leading-[1.1] tracking-tight">
              Návrat k <span className="italic font-light opacity-90 text-[#A3B18A]">přírodě</span> <br/>skrze jemný <span className="text-[#8C76AC]">dotek</span>
            </h1>
            <p className="text-sm md:text-base text-stone-700 font-light leading-relaxed max-w-[460px]">
              Objevte kouzlo ručně vyráběné bylinné kosmetiky, která pečuje o vaši pleť s respektem k tradicím a naší planetě. Jemná, hřejivá a organická péče bez kompromisů.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <Link 
                href="#ritual" 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#A3B18A] text-white font-medium hover:opacity-90 transition-all duration-300 rounded-full hover:-translate-y-0.5 shadow-md text-sm"
              >
                Prozkoumat péči
              </Link>
              <Link 
                href="#pribeh" 
                className="group inline-flex items-center text-stone-800 font-semibold transition-all duration-300 relative text-sm border-b-2 border-stone-800"
              >
                Náš příběh
              </Link>
            </div>

            {/* Email Form migrated from the bottom */}
            <div className="flex flex-col items-start gap-4 w-full max-w-[420px] pt-6 lg:pt-10 opacity-95">
                <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
                  Objevte tajemství přírody
                </span>
                <EmailSubscriptionForm 
                  variant="hero" 
                  placeholder="Zadejte svůj e-mail pro tipy a novinky" 
                  buttonText="Odebírat" 
                />
            </div>
          </div>

          {/* --- RIGHT CONTENT (Image & Floating Pins) --- */}
          <div className="relative w-full lg:w-[50%] flex flex-col items-center justify-start z-10 lg:-mt-8">
             
             {/* Central Image and Pins Container */}
             <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center scale-100 md:scale-110 lg:scale-110 transition-transform duration-500">
                <img 
                  src="/stred kola.png" 
                  alt="Vyšlehaný krém na rattanové podložce" 
                  className="w-full h-full object-contain opacity-100 z-10"
                />

                {/* --- FLOATING PINS (New Clean Style from Images) --- */}
                
                {/* 1. Mýdla (Top Right) */}
                <Link href="#produkty" className="absolute top-[5%] -right-4 md:-right-8 animate-float-slow group z-30 flex flex-col items-center gap-1 scale-[0.8] md:scale-100">
                   <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#A3B18A] text-white flex items-center justify-center text-xl md:text-2xl font-light shadow-md hover:scale-110 transition-transform">+</div>
                     <img src="/mydlo.png" alt="mýdla" className="w-[3.5rem] md:w-[4.5rem] h-[3.5rem] md:h-[4.5rem] object-contain drop-shadow-md hover:scale-105 transition-transform" />
                   </div>
                   <div className="px-4 py-2 md:px-5 md:py-2.5 bg-[#f4f2ea] rounded-full shadow-sm text-stone-800 text-sm md:text-lg whitespace-nowrap relative -top-1 md:-top-2">
                     mýdla
                   </div>
                </Link>

                {/* 2. Svíčky (Bottom Right) */}
                <Link href="#produkty" className="absolute bottom-[8%] -right-4 md:-right-8 animate-float-delayed group z-30 flex flex-col items-center gap-1 scale-[0.8] md:scale-100">
                   <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#A3B18A] text-white flex items-center justify-center text-xl md:text-2xl font-light shadow-md hover:scale-110 transition-transform">+</div>
                     <img src="/svicka.png" alt="svíčky" className="w-[3.5rem] md:w-[4.5rem] h-[3.5rem] md:h-[4.5rem] object-contain drop-shadow-md hover:scale-105 transition-transform" />
                   </div>
                   <div className="px-4 py-2 md:px-5 md:py-2.5 bg-[#f4f2ea] rounded-full shadow-sm text-stone-800 text-sm md:text-lg whitespace-nowrap relative -top-1 md:-top-2">
                     svíčky
                   </div>
                </Link>

                {/* 3. Krémy (Bottom Left) */}
                <Link href="#produkty" className="absolute bottom-[5%] -left-8 md:-left-16 animate-float group z-30 flex flex-col items-center gap-1 scale-[0.8] md:scale-100">
                   <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#A3B18A] text-white flex items-center justify-center text-xl md:text-2xl font-light shadow-md hover:scale-110 transition-transform">+</div>
                     <img src="/krem.png" alt="krémy" className="w-[3.5rem] md:w-[4.5rem] h-[3.5rem] md:h-[4.5rem] object-contain drop-shadow-md hover:scale-105 transition-transform" />
                   </div>
                   <div className="px-4 py-2 md:px-5 md:py-2.5 bg-[#f4f2ea] rounded-full shadow-sm text-stone-800 text-sm md:text-lg whitespace-nowrap relative -top-1 md:-top-2">
                     krémy
                   </div>
                </Link>

                {/* 4. Balíček (Top Left) */}
                <Link href="#produkty" className="absolute top-[8%] -left-4 md:-left-12 animate-float group z-30 flex flex-col items-center gap-1 scale-[0.8] md:scale-100">
                   <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#A3B18A] text-white flex items-center justify-center text-xl md:text-2xl font-light shadow-md hover:scale-110 transition-transform">+</div>
                     <img src="/balicek.png" alt="balíček" className="w-[3.5rem] md:w-[4.5rem] h-[3.5rem] md:h-[4.5rem] object-contain drop-shadow-md hover:scale-105 transition-transform" />
                   </div>
                   <div className="px-4 py-2 md:px-5 md:py-2.5 bg-[#f4f2ea] rounded-full shadow-sm text-stone-800 text-sm md:text-lg whitespace-nowrap relative -top-1 md:-top-2">
                     balíček
                   </div>
                </Link>
             </div>
          </div>
        </div>
      </div>

      {/* End of Hero */}
    </section>
  );
}
