import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <Hero />
      <div className="bg-white">
        <Services />
        <Coverage />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div>
            <Testimonials />
          </div>
          <div>
            <Gallery />
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
