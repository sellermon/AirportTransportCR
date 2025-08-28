import { Car, Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Car,
      title: "services.airport.title",
      description: "services.airport.desc"
    },
    {
      icon: Briefcase,
      title: "services.corporate.title",
      description: "services.corporate.desc"
    },
    {
      icon: MapPin,
      title: "services.tours.title",
      description: "services.tours.desc"
    }
  ];

  return (
    <section id="servicios" className="py-12 bg-gray-50" data-testid="services-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-8" data-testid="services-title">
          {t('services.title')}
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
                  {t(service.title).split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < t(service.title).split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-sm text-brand-gray mt-2 px-4" data-testid={`service-desc-${index}`}>
                  {t(service.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}