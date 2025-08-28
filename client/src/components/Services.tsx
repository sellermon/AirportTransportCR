import { Car, Briefcase, MapPin } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Traslados al\naeropuerto",
      description: "Servicio nacional desde y hacia TODOS los aeropuertos: Juan Santamaría (SJO), Daniel Oduber (LIR), Tobías Bolaños (SYQ) y Limón (LIO)."
    },
    {
      icon: Briefcase,
      title: "Transporte\ncorporativo",
      description: "Servicio ejecutivo a nivel nacional para empresas, reuniones de negocios y eventos corporativos en todas las provincias."
    },
    {
      icon: MapPin,
      title: "Tours\nprivados",
      description: "Tours nacionales personalizados: desde playas del Pacífico y Caribe hasta volcanes, parques nacionales y ciudades."
    }
  ];

  return (
    <section id="servicios" className="py-12 bg-gray-50" data-testid="services-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-8" data-testid="services-title">
          Servicios
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group" data-testid={`service-card-${index}`}>
                <div className="bg-brand-navy text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-blue transition-colors">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-brand-navy leading-tight" data-testid={`service-title-${index}`}>
                  {service.title.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < service.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}