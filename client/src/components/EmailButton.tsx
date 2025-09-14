import { Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function EmailButton() {
  const { t } = useLanguage();
  
  const handleEmailClick = () => {
    const email = "info@gocrtransport.com";
    const subject = "Solicitud de Transporte - GoCR Transport";
    const body = "Hola, me interesa contratar sus servicios de transporte. Por favor contáctenme para más información.";
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_self');
  };

  return (
    <button
      onClick={handleEmailClick}
      className="fixed bottom-20 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      data-testid="email-float-button"
      title={t('contact.emailButton')}
    >
      <Mail className="w-6 h-6" />
    </button>
  );
}