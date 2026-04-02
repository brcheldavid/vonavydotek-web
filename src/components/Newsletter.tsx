export default function Newsletter() {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#EFECE5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
          
          {/* Texts */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-3xl md:text-5xl text-stone-900 leading-[1.15]">
              Nechte si poslat <br className="sm:hidden" />
              <span className="italic font-light text-[#8C76AC]">vůni do e-mailu.</span>
            </h3>
            <p className="text-stone-700 font-light leading-relaxed md:text-lg max-w-2xl mx-auto">
              Budu vám psát, až vykvete nová levandule nebo uvařím čerstvou mast. Žádné zbytečnosti, jen upřímné zprávy o tom, co se u nás zrovna děje.
            </p>
          </div>
          
          {/* Form */}
          <div className="w-full max-w-md pt-2">
            <div className="bg-white rounded-full p-1.5 flex items-center shadow-sm border border-stone-200/50 w-full transition-shadow duration-300 hover:shadow-md focus-within:shadow-md">
              <input 
                type="email" 
                placeholder="Váš e-mail" 
                className="bg-transparent outline-none px-6 py-3 w-full text-base text-stone-700 placeholder-stone-400 font-medium" 
                required
              />
              <button 
                type="submit"
                className="bg-[#A3B18A] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-all shrink-0 shadow-sm"
              >
                Chci být u toho
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
