import { CheckCircle } from "lucide-react";
import costaRicaMap from "@assets/generated_images/Costa_Rica_detailed_country_map_a81c6d2f.png";

export default function Coverage() {
  const provinces = [
    "San José - Capital y área metropolitana",
    "Alajuela - Aeropuerto internacional y volcanes",
    "Heredia - Montañas y cafetales",
    "Cartago - Valle Central y volcán Irazú",
    "Puntarenas - Pacífico Central y Sur",
    "Guanacaste - Playas del Pacífico Norte",
    "Limón - Caribe y parques naturales"
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
              {/* Location markers for all Costa Rica provinces */}
              {/* San José - Central Valley, center of the country */}
              <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-san-jose" title="San José"></div>
              {/* Alajuela - Northwest of San José, near the airport */}
              <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-alajuela" title="Alajuela"></div>
              {/* Heredia - North of San José */}
              <div className="absolute top-[38%] left-[48%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-heredia" title="Heredia"></div>
              {/* Cartago - Southeast of San José */}
              <div className="absolute top-[48%] left-[52%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-cartago" title="Cartago"></div>
              {/* Puntarenas - Pacific Coast, west side */}
              <div className="absolute top-[55%] left-[25%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-puntarenas" title="Puntarenas"></div>
              {/* Guanacaste - Northwest Pacific coast */}
              <div className="absolute top-[25%] left-[35%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-guanacaste" title="Guanacaste"></div>
              {/* Limón - Caribbean coast, east side */}
              <div className="absolute top-[45%] left-[75%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-limon" title="Limón"></div>
            </div>
          </div>

          {/* Coverage Text */}
          <div data-testid="coverage-info">
            <h3 className="text-xl font-bold text-brand-navy mb-6" data-testid="coverage-subtitle">
              Cobertura Nacional Completa
            </h3>
            <p className="text-brand-gray mb-6 text-base" data-testid="coverage-description">
              Brindamos servicios de transporte en todas las provincias de Costa Rica, 
              conectando aeropuertos, hoteles, destinos turísticos y centros urbanos a nivel nacional.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {provinces.map((province, index) => (
                <div key={index} className="flex items-center" data-testid={`province-${index}`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-brand-navy font-medium">{province}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-brand-red">
              <p className="text-sm text-brand-navy font-semibold">
                🌟 Servicio especializado desde y hacia todos los aeropuertos del país
              </p>
              <p className="text-sm text-brand-gray mt-1">
                Juan Santamaría (SJO), Daniel Oduber (LIR), Tobías Bolaños (SYQ) y Limón (LIO)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}