import { CheckCircle } from "lucide-react";

export default function Coverage() {
  const locations = [
    "San José y área metropolitana",
    "Alajuela y aeropuerto internacional",
    "Heredia y alrededores",
    "Principales destinos turísticos"
  ];

  return (
    <section id="cobertura" className="py-20 bg-gray-50" data-testid="coverage-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-brand-navy mb-16" data-testid="coverage-title">
          Cobertura geográfica
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Costa Rica Map */}
          <div className="relative" data-testid="costa-rica-map">
            <div className="bg-brand-navy rounded-lg p-8 relative h-80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="relative w-64 h-48 mx-auto">
                  <svg viewBox="0 0 300 200" className="w-full h-full fill-brand-blue stroke-white stroke-2">
                    <path d="M50 100 L80 80 L120 85 L160 90 L200 95 L240 100 L250 120 L240 140 L200 145 L160 140 L120 135 L80 130 L50 120 Z" />
                  </svg>
                  {/* Location markers */}
                  <div className="absolute top-16 left-20 w-3 h-3 bg-brand-red rounded-full animate-pulse" data-testid="location-marker-1"></div>
                  <div className="absolute top-12 left-32 w-3 h-3 bg-brand-red rounded-full animate-pulse" data-testid="location-marker-2"></div>
                  <div className="absolute top-20 left-28 w-3 h-3 bg-brand-red rounded-full animate-pulse" data-testid="location-marker-3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Text */}
          <div data-testid="coverage-info">
            <h3 className="text-2xl font-bold text-brand-navy mb-6" data-testid="coverage-subtitle">
              Operamos en San José,<br />
              Alajuela, Heredia y más
            </h3>
            <p className="text-brand-gray text-lg leading-relaxed mb-6" data-testid="coverage-description">
              Cubrimos las principales provincias y destinos turísticos de Costa Rica.
              Nuestro servicio está disponible en:
            </p>
            <ul className="space-y-3 text-brand-gray">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center" data-testid={`location-${index}`}>
                  <CheckCircle className="w-5 h-5 text-brand-blue mr-3" />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}