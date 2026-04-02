import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Ritual from "@/components/Ritual";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <Hero />
      <section className="w-full bg-[#FDFBF7] pt-24 pb-4 px-6">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-[3.6rem] lg:text-[3.9rem] text-stone-900 leading-[1.1] tracking-tight max-w-5xl mx-auto">
            <span className="text-[#8C76AC]">Tři</span> kroky pro vaše spojení s <span className="italic font-light opacity-90 text-[#A3B18A]">přírodou</span>
          </h2>
        </div>
      </section>
      <Story />
      <Products />
      <Ritual />
      <Contact />
      <Footer />
    </main>
  );
}
