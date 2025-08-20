import { Car, Briefcase, MapPin } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Traslados al\naeropuerto",
      description: "Servicio puntual y confiable desde y hacia el aeropuerto internacional Juan Santamaría y otros aeropuertos."
    },
    {
      icon: Briefcase,
      title: "Transporte\ncorporativo",
      description: "Soluciones de transporte profesional para empresas, reuniones de negocios y eventos corporativos."
    },
    {
      icon: MapPin,
      title: "Tours\nprivados",
      description: "Descubre Costa Rica con nuestros tours personalizados y guías profesionales en vehículos cómodos."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-brand-navy mb-16" data-testid="services-title">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group" data-testid={`service-card-${index}`}>
                <div className="bg-brand-navy text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue transition-colors">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4" data-testid={`service-title-${index}`}>
                  {service.title.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < service.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-brand-gray leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
