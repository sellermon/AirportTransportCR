import { CheckCircle } from "lucide-react";
import costaRicaMap from "@assets/generated_images/Costa_Rica_detailed_country_map_a81c6d2f.png";

export default function Coverage() {
  const locations = [
    "San José y área metropolitana",
    "Alajuela y aeropuerto internacional",
    "Heredia y alrededores",
    "Principales destinos turísticos"
  ];

  return (
    <section id="cobertura" className="py-12 bg-gray-50" data-testid="coverage-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-8" data-testid="coverage-title">
          Cobertura geográfica
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Costa Rica Map */}
          <div className="relative" data-testid="costa-rica-map">
            <div className="relative w-full max-w-xs mx-auto lg:mx-0">
              <img 
                src={costaRicaMap} 
                alt="Mapa de Costa Rica" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Location markers positioned according to actual Costa Rica geography */}
              {/* San José - Central Valley, center of the country */}
              <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-san-jose" title="San José"></div>
              {/* Alajuela - Northwest of San José, near the airport */}
              <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-alajuela" title="Alajuela"></div>
              {/* Heredia - North of San José */}
              <div className="absolute top-[38%] left-[48%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-heredia" title="Heredia"></div>
            </div>
          </div>

          {/* Coverage Text */}
          <div data-testid="coverage-info">
            <h3 className="text-xl font-bold text-brand-navy mb-4" data-testid="coverage-subtitle">
              Operamos en San José,<br />
              Alajuela, Heredia y más
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}