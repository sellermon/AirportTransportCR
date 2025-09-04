import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logoImage from "@assets/logo oficial_1757026020182.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logoImage} 
              alt="GoCR Transport" 
              className="h-28 w-auto max-w-36 mr-3"
              data-testid="logo-image"
            />
            <h1 className="text-2xl font-bold" data-testid="logo">
              <span className="text-red-600">Go</span>
              <span className="text-blue-600">CR</span>
              <br />
              <span className="text-blue-700 text-lg tracking-wider">TRANSPORT</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-servicios"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('cobertura')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-cobertura"
              >
                {t('nav.coverage')}
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-testimonios"
              >
                {t('nav.testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-contacto"
              >
                {t('nav.contact')}
              </button>
              {/* Language Selector */}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors border border-gray-300 rounded-md"
                data-testid="language-selector"
              >
                <Globe className="w-4 h-4 mr-2" />
                {t('nav.changeLanguage')}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-gray hover:text-brand-navy focus:outline-none"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('servicios')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-servicios"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('cobertura')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-cobertura"
              >
                {t('nav.coverage')}
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-testimonios"
              >
                {t('nav.testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-contacto"
              >
                {t('nav.contact')}
              </button>
              {/* Mobile Language Selector */}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left border border-gray-300 rounded-md mx-3 mt-2"
                data-testid="mobile-language-selector"
              >
                <Globe className="w-4 h-4 mr-2" />
                {t('nav.mobileChangeLanguage')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}