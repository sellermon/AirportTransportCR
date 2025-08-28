import { useLanguage } from "../contexts/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  
  return (
    <div id="testimonios" data-testid="testimonials-section">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 md:mb-8" data-testid="testimonials-title">
        {t('testimonials.title')}
      </h2>
      <div className="relative">
        {/* Quotation mark */}
        <div className="text-5xl md:text-6xl text-brand-blue font-serif absolute -top-2 left-0" data-testid="quote-mark">
          "
        </div>
        <div className="pl-8 md:pl-12">
          <p className="text-base md:text-lg text-brand-gray leading-relaxed mb-4 md:mb-6" data-testid="testimonial-text">
            Servicio puntual y profesional, el conductor fue muy amable y el
            vehículo estaba en perfectas condiciones.
          </p>
          <div className="flex items-center">
            {/* Customer avatar placeholder */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold mr-3 md:mr-4" data-testid="customer-avatar">
              LM
            </div>
            <div>
              <p className="font-semibold text-brand-navy" data-testid="customer-name">Laura M.</p>
              <p className="text-sm text-brand-gray" data-testid="customer-status">Cliente verificado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}