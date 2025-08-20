import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <Hero />
      <Services />
      <Coverage />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
