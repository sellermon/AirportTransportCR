import { CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import costaRicaMap from "@assets/Screenshot 2025-09-05 at 11.52.42 AM_1757094778013.png";

export default function Coverage() {
  const { t } = useLanguage();
  
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
          {t('coverage.title')}
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
              {/* San José - Purple province in center-south */}
              <div className="absolute top-[62%] left-[45%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-san-jose" title="San José"></div>
              {/* Alajuela - Red province in center-north */}
              <div className="absolute top-[35%] left-[42%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-alajuela" title="Alajuela"></div>
              {/* Heredia - Yellow province in center-east */}
              <div className="absolute top-[38%] left-[52%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-heredia" title="Heredia"></div>
              {/* Cartago - Blue province in center-east */}
              <div className="absolute top-[52%] left-[58%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-cartago" title="Cartago"></div>
              {/* Puntarenas - Orange province in south */}
              <div className="absolute top-[75%] left-[45%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-puntarenas" title="Puntarenas"></div>
              {/* Guanacaste - Green province in northwest */}
              <div className="absolute top-[45%] left-[25%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-guanacaste" title="Guanacaste"></div>
              {/* Limón - Turquoise province on Caribbean coast */}
              <div className="absolute top-[45%] left-[68%] w-3 h-3 bg-brand-red rounded-full border-2 border-white shadow-md" data-testid="location-marker-limon" title="Limón"></div>
            </div>
          </div>

          {/* Coverage Text */}
          <div data-testid="coverage-info">
            <h3 className="text-xl font-bold text-brand-navy mb-6" data-testid="coverage-subtitle">
              {t('coverage.subtitle')}
            </h3>
            <p className="text-brand-gray mb-6 text-base" data-testid="coverage-description">
              {t('coverage.description')}
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
                {t('coverage.airports')}
              </p>
              <p className="text-sm text-brand-gray mt-1">
                {t('coverage.airportList')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}