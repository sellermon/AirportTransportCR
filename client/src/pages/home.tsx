import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Mission from "../components/Mission";
import Coverage from "../components/Coverage";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <Hero />
      <div className="bg-gray-50">
        <Services />
        <Mission />
        <Coverage />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8">
          <Testimonials />
          <Gallery />
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
