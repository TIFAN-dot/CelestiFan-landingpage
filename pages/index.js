import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Waitlist from "../components/Waitlist";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="background: linear-gradient(to left, #111145, #1A147F) text-white min-h-screen">
      <Header />
      <HeroSection />
      <About />
      <WhyUs />
      <Waitlist />
      <Footer />

    </main>
  );
}