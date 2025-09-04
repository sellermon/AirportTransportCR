import { Clock, Shield, Star, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import watermarkBg from "@assets/fondo_1757026523220.png";

export default function Contact() {
  const { t } = useLanguage();
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
    <section 
      id="contacto" 
      className="py-12 bg-gray-50 relative" 
      style={{
        backgroundImage: `url(${watermarkBg})`,
        backgroundSize: '350px 350px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
      data-testid="contact-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-8" data-testid="contact-title">{t('contact.title')}</h2>
        
        {/* WhatsApp Contact */}
        <div className="mb-6" data-testid="whatsapp-contact-card">
          <div className="flex items-center justify-center mb-4">
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
          
          {/* WhatsApp Booking Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <a 
              href="https://wa.me/50661090825?text=Hola%20quiero%20reservar%20transporte%20desde%20el%20aeropuerto"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
              data-testid="whatsapp-book-button-1"
            >
              {t('contact.bookButton')}
            </a>
            <a 
              href="https://wa.me/50688312010?text=Hola%20quiero%20reservar%20transporte%20desde%20el%20aeropuerto"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
              data-testid="whatsapp-book-button-2"
            >
              {t('contact.bookButton2')}
            </a>
          </div>
          
          <p className="text-brand-gray" data-testid="availability-text">
            {t('contact.availability')}
          </p>
        </div>

        {/* Email Contact */}
        <div className="mb-6" data-testid="email-contact-card">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-blue-500 mr-2" />
            <div className="space-y-2">
              <a 
                href="mailto:info@gocrtransport.com"
                className="block text-xl font-bold text-brand-navy hover:text-blue-500 transition-colors"
                data-testid="email-address"
              >
                info@gocrtransport.com
              </a>
            </div>
          </div>
          
          {/* Email Contact Button */}
          <div className="flex justify-center mb-4">
            <a 
              href="mailto:info@gocrtransport.com?subject=Solicitud%20de%20Transporte%20-%20GoCR%20Transport&body=Hola%2C%20me%20interesa%20contratar%20sus%20servicios%20de%20transporte.%20Por%20favor%20cont%C3%A1ctenme%20para%20m%C3%A1s%20informaci%C3%B3n."
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
              data-testid="email-contact-button"
            >
              {t('contact.emailButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}