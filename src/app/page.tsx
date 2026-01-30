import Hero from "@/app/components/sections/Hero";
import Market from "@/app/components/sections/Market";
import Philosophy from "@/app/components/sections/Philosophy";
import Ecosystem from "@/app/components/sections/Ecosystem";
import Product from "@/app/components/sections/Product";
import Tokenomics from "@/app/components/sections/Tokenomics";
import Footer from "@/app/components/sections/Footer";
import LoadingScreen from "@/app/components/layout/LoadingScreen";

export default function Home() {
  return (
    <main className="relative w-full">
      <LoadingScreen />
      <Hero />
      <Market />
      <Philosophy />
      <Ecosystem />
      <Product />
      <Tokenomics />
      <Footer />
    </main>
  );
}
