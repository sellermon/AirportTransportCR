import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-brand-navy" data-testid="logo">TransporteCR</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-servicios"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('cobertura')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-cobertura"
              >
                Cobertura
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-testimonios"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-brand-gray hover:text-brand-navy px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-contacto"
              >
                Contacto
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
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('cobertura')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-cobertura"
              >
                Cobertura
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-testimonios"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block text-brand-gray hover:text-brand-navy px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-contacto"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
