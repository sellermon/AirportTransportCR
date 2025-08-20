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
    window.open('https://wa.me/50661090825', '_blank');
  };

  return (
    <section id="contacto" className="py-12 bg-gray-50" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-8" data-testid="contact-title">Contacto</h2>
        
        {/* WhatsApp Contact */}
        <div className="mb-4" data-testid="whatsapp-contact-card">
          <div className="flex items-center justify-center mb-2">
            <MessageCircle className="w-6 h-6 text-green-500 mr-2" />
            <div className="space-y-2">
              <a 
                href="https://wa.me/50661090825" 
                className="block text-xl font-bold text-brand-navy hover:text-green-500 transition-colors"
                data-testid="phone-number-1"
              >
                +506 6109-0825
              </a>
              <a 
                href="https://wa.me/50688312010" 
                className="block text-xl font-bold text-brand-navy hover:text-green-500 transition-colors"
                data-testid="phone-number-2"
              >
                +506 8831-2010
              </a>
            </div>
          </div>
          <p className="text-brand-gray" data-testid="availability-text">
            Atendemos 24/7
          </p>
        </div>
      </div>
    </section>
  );
}