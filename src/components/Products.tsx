import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

const PRODUCTS = [
  {
    id: 1,
    name: 'Dárkové sady',
    tagline: 'Sestavené s láskou',
    description: 'Pečlivě zkompletované sady pro vaše blízké. Každý kousek vybrán s citem, zabalený s vůní přírody.',
    image: '/Produkty/balicek.png',
  },
  {
    id: 2,
    name: 'Jemná mýdla',
    tagline: 'Jemná očista',
    description: 'Ručně vyráběná přírodní mýdla z bylinného extraktu. Šetrná ke kůži, šetrná k planetě.',
    image: '/Produkty/mydlo.png',
  },
  {
    id: 3,
    name: 'Bylinné krémy',
    tagline: 'Péče o pokožku',
    description: 'S přírodními oleji a výtažky bylinek z naší zahrádky. Pro suchou, unavenou i citlivou pleť.',
    image: '/Produkty/mast.png',
  },
  {
    id: 4,
    name: 'Sójové svíčky',
    tagline: 'Voňavá atmosféra',
    description: 'Ze sójového vosku s bylinnou esencí. Rozsvítí váš domov vůní přírody — bez chemie.',
    image: '/Produkty/svicky.png',
  },
];


export default function Products() {
  return (
    <section id="produkty" className="w-full bg-[#FDFBF7] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-[3.6rem] lg:text-[3.9rem] text-stone-900 leading-[1.1] tracking-tight mb-8">
            Naše bylinné <span className="italic font-light opacity-90 text-[#A3B18A]">poklady</span>
          </h2>
          <div className="w-16 h-px bg-[#A3B18A] mx-auto mb-6 opacity-60"></div>
          <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
            Každý produkt vzniká s maximální péčí z bylin z naší zahrádky.
            Dostupné přes naši FB skupinu — napište a domluvíme se.
          </p>
        </div>

        {/* ── Products Grid 2×2 / 4 on desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col items-center border border-dashed border-[#A3B18A]/40 rounded-3xl p-6 md:p-8 hover:border-[#A3B18A]/70 hover:bg-white/60 transition-all duration-300"
            >
              {/* Floating product image */}
              <div className="relative w-full aspect-square mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={product.image}
                  alt={`${product.name} – ${product.description}`}
                  fill
                  className="object-contain mix-blend-multiply opacity-95 drop-shadow-[0_8px_16px_rgba(0,0,0,0.07)]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Text */}
              <div className="text-center flex flex-col gap-2 flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A3B18A]">
                  {product.tagline}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-stone-900">
                  {product.name}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-xs font-bold uppercase tracking-widest text-[#A3B18A] border-b border-[#A3B18A]/40 hover:border-[#A3B18A] pb-0.5 transition-colors duration-200"
              >
                To mě zajímá →
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
