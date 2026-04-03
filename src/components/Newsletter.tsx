import EmailSubscriptionForm from './EmailSubscriptionForm';

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
            <EmailSubscriptionForm 
              variant="newsletter" 
              placeholder="Váš e-mail" 
              buttonText="Chci být u toho" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
