import { Target, Eye } from "lucide-react";

export default function Mission() {
  return (
    <section id="mision-vision" className="py-12 bg-white" data-testid="mission-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="text-center lg:text-left" data-testid="mission-card">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="bg-brand-navy text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy" data-testid="mission-title">
                Misión
              </h3>
            </div>
            <p className="text-brand-gray leading-relaxed" data-testid="mission-text">
              Brindar un servicio de transporte privado, seguro y confiable desde el aeropuerto 
              hacia cualquier destino en Costa Rica, combinando puntualidad, comodidad y atención 
              personalizada para ofrecer una experiencia de viaje premium que refleje la 
              hospitalidad y calidez costarricense.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center lg:text-left" data-testid="vision-card">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy" data-testid="vision-title">
                🌅 Visión
              </h3>
            </div>
            <p className="text-brand-gray leading-relaxed" data-testid="vision-text">
              Ser la empresa líder en transporte privado en Costa Rica, reconocida por su 
              excelencia operativa, innovación en el servicio y compromiso con la experiencia 
              del cliente, conectando destinos con estilo, seguridad y confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}