import Carousel from "../components/Carousel";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Tags from "../components/Tags";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <Tags />
      <Services />
      <HeroSection />
    </div>
  );
}
