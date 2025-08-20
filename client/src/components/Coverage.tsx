import { CheckCircle } from "lucide-react";

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
              <svg viewBox="0 0 300 200" className="w-full h-auto fill-brand-navy">
                <path d="M50 100 L80 80 L120 85 L160 90 L200 95 L240 100 L250 120 L240 140 L200 145 L160 140 L120 135 L80 130 L50 120 Z" />
              </svg>
              {/* Location markers */}
              <div className="absolute top-16 left-16 w-2 h-2 bg-brand-red rounded-full" data-testid="location-marker-1"></div>
              <div className="absolute top-12 left-28 w-2 h-2 bg-brand-red rounded-full" data-testid="location-marker-2"></div>
              <div className="absolute top-20 left-24 w-2 h-2 bg-brand-red rounded-full" data-testid="location-marker-3"></div>
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