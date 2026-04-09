import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Voňavý Dotek – Ručně vyráběná bylinná kosmetika",
    template: "%s | Voňavý Dotek",
  },
  description: "Ručně vyráběná bylinná kosmetika od Martinky. Levandulové masti, přírodní mýdla, krémy a svíčky ze zahrádky bez chemie. Objednávka přes FB skupinu.",
  keywords: ["bylinná kosmetika", "ručně vyráběná mast", "levandulová mast", "přírodní mýdla", "ekologická kosmetika", "Voňavý dotek", "Martinka"],
  authors: [{ name: "Martinka", url: "https://vonavydotek.cz" }],
  openGraph: {
    title: "Voňavý Dotek – Ručně vyráběná bylinná kosmetika",
    description: "Levandulové masti, přírodní mýdla a voňavé svíčky ze zahrádky. Vyráběno s láskou, bez chemie.",
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans flex flex-col">{children}</body>
    </html>
  );
}
