import { Button } from "@/components/ui/button";
import airportImage from "@assets/Copilot_20250819_195513_1755656411568.png";

export default function Hero() {
  const handleBookingRequest = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.4), rgba(0, 30, 60, 0.4)), url(${airportImage})`
      }}
      data-testid="hero-section"
    >
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
          Transporte Privado y de<br />
          Aeropuerto Confiable
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light" data-testid="hero-subtitle">
          Viaja cómodo, seguro y puntual. Servicio<br />
          personalizado 24/7
        </p>
        <Button
          onClick={handleBookingRequest}
          className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-md text-base md:text-lg transition-colors shadow-lg"
          size="lg"
          data-testid="button-booking-request"
        >
          Solicita tu traslado
        </Button>
      </div>
    </section>
  );
}