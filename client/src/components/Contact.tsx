import { Clock, Shield, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const features = [
    {
      icon: Clock,
      title: "Disponibilidad",
      description: "24 horas, 7 días"
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Vehículos asegurados"
    },
    {
      icon: Star,
      title: "Calidad",
      description: "Servicio profesional"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/50612345678', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-brand-navy text-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12" data-testid="contact-title">Contacto</h2>
        <div className="max-w-2xl mx-auto">
          {/* WhatsApp Contact */}
          <div className="bg-white/10 rounded-2xl p-8 mb-8" data-testid="whatsapp-contact-card">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-green-400 mr-4" />
              <div className="text-left">
                <a 
                  href="https://wa.me/50612345678" 
                  className="text-2xl font-bold hover:text-green-400 transition-colors"
                  data-testid="phone-number"
                >
                  +506 1234 5678
                </a>
                <p className="text-blue-200" data-testid="availability-text">Atendemos 24/7</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6" data-testid="whatsapp-description">
              Contáctanos directamente por WhatsApp para reservas inmediatas
              y atención personalizada las 24 horas del día.
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              data-testid="button-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Escribir por WhatsApp
            </Button>
          </div>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} data-testid={`feature-${index}`}>
                  <IconComponent className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2" data-testid={`feature-title-${index}`}>
                    {feature.title}
                  </h4>
                  <p className="text-blue-200" data-testid={`feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}