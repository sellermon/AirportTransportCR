export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-brand-navy mb-16" data-testid="testimonials-title">
          Testimonios
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative" data-testid="testimonial-card">
            {/* Quotation mark */}
            <div className="text-6xl text-brand-blue font-serif absolute top-4 left-8" data-testid="quote-mark">
              "
            </div>
            <div className="pl-8">
              <p className="text-lg text-brand-gray leading-relaxed mb-6 italic" data-testid="testimonial-text">
                Servicio puntual y profesional, el conductor fue muy amable y el
                vehículo estaba en perfectas condiciones.
              </p>
              <div className="flex items-center">
                {/* Customer avatar placeholder */}
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold mr-4" data-testid="customer-avatar">
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
      </div>
    </section>
  );
}
