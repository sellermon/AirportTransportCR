export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4" data-testid="footer-brand">TransporteCR</h3>
            <p className="text-gray-400 mb-4" data-testid="footer-description">
              Transporte privado y de aeropuerto confiable en Costa Rica.
              Servicio personalizado 24/7 con los más altos estándares de calidad y seguridad.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-service-1">Traslados al aeropuerto</li>
              <li data-testid="footer-service-2">Transporte corporativo</li>
              <li data-testid="footer-service-3">Tours privados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-contact-title">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-phone">+506 1234 5678</li>
              <li data-testid="footer-availability">24/7 Disponible</li>
              <li data-testid="footer-location">Costa Rica</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2024 TransporteCR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
