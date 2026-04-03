import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-stone-900">

      {/* Main row */}
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <p className="font-serif italic text-xl text-white tracking-wide">
          Martinka <span className="not-italic font-light text-stone-400 mx-2">—</span> Voňavý dotek
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <Link
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook skupiny Voňavý dotek"
            className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-[#A3B18A] hover:text-[#A3B18A] transition-all duration-300"
          >
            <FacebookIcon />
          </Link>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Voňavý dotek"
            className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-[#8C76AC] hover:text-[#8C76AC] transition-all duration-300"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12 py-5 text-center">
          <p className="text-stone-600 text-xs font-light italic">
            S vděčností vytvořeno v malé bylinkové zahrádce. 🌿
          </p>
        </div>
      </div>

    </footer>
  );
}
