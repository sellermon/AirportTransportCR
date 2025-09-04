import logoImage from "@assets/logo oficial_1757026020182.png";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="GoCR Transport" 
                className="h-64 w-auto max-w-80 ml-[50px] mr-[50px]"
                data-testid="footer-logo-image"
              />
            </div>
            <p className="text-gray-400 mb-4" data-testid="footer-description">
              {t('footer.description').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">{t('services.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-service-1">{t('footer.services.airport')}</li>
              <li data-testid="footer-service-2">{t('footer.services.corporate')}</li>
              <li data-testid="footer-service-3">{t('footer.services.tours')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-contact-title">{t('footer.contact.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-phone-1">+506 6109-0825</li>
              <li data-testid="footer-phone-2">+506 8831-2010</li>
              <li data-testid="footer-availability">{t('footer.contact.availability')}</li>
              <li data-testid="footer-location">{t('footer.contact.location')}</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-gray-400">
          <p data-testid="footer-copyright">© 2025 GoCR Transport. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}