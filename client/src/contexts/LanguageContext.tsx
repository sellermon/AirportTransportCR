import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.coverage': 'Cobertura',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.changeLanguage': 'EN',
    'nav.mobileChangeLanguage': 'Cambiar a English',

    // Hero
    'hero.title': 'Servicios de Transporte Privado y de\nAeropuerto a su Destino',
    'hero.subtitle': 'Cobertura nacional completa. Viaja cómodo,\nseguro y puntual por todo Costa Rica 24/7',
    'hero.bookButton': '📲 Reservar por WhatsApp',

    // Services
    'services.title': 'Servicios',
    'services.airport.title': 'Traslados al\naeropuerto',
    'services.airport.desc': 'Servicio nacional desde y hacia TODOS los aeropuertos: Juan Santamaría (SJO), Daniel Oduber (LIR), Tobías Bolaños (SYQ) y Limón (LIO).',
    'services.corporate.title': 'Transporte\ncorporativo',
    'services.corporate.desc': 'Servicio ejecutivo a nivel nacional para empresas, reuniones de negocios y eventos corporativos en todas las provincias.',
    'services.tours.title': 'Tours\nprivados',
    'services.tours.desc': 'Tours nacionales personalizados: desde playas del Pacífico y Caribe hasta volcanes, parques nacionales y ciudades.',

    // Mission & Vision
    'mission.title': 'Misión',
    'mission.text': 'Brindar un servicio de transporte privado, seguro y confiable desde el aeropuerto hacia cualquier destino en Costa Rica, combinando puntualidad, comodidad y atención personalizada para ofrecer una experiencia de viaje premium que refleje la hospitalidad y calidez costarricense.',
    'vision.title': 'Visión',
    'vision.text': 'Ser la empresa líder en transporte privado en Costa Rica, reconocida por su excelencia operativa, innovación en el servicio y compromiso con la experiencia del cliente, conectando destinos con estilo, seguridad y confianza.',

    // Coverage
    'coverage.title': 'Cobertura geográfica',
    'coverage.subtitle': 'Cobertura Nacional Completa',
    'coverage.description': 'Brindamos servicios de transporte en todas las provincias de Costa Rica, conectando aeropuertos, hoteles, destinos turísticos y centros urbanos a nivel nacional.',
    'coverage.airports': '🌟 Servicio especializado desde y hacia todos los aeropuertos del país',
    'coverage.airportList': 'Juan Santamaría (SJO), Daniel Oduber (LIR), Tobías Bolaños (SYQ) y Limón (LIO)',

    // Contact
    'contact.title': 'Contacto',
    'contact.availability': 'Atendemos 24/7',
    'contact.bookButton': '📲 Reservar por WhatsApp',
    'contact.bookButton2': '📲 Reservar (Línea 2)',

    // Testimonials
    'testimonials.title': 'Testimonios',

    // Footer
    'footer.company': 'Airport Transport CR',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.coverage': 'Coverage',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.changeLanguage': 'ES',
    'nav.mobileChangeLanguage': 'Switch to Español',

    // Hero
    'hero.title': 'Private Transportation and\nAirport Services to Your Destination',
    'hero.subtitle': 'Complete national coverage. Travel comfortably,\nsafely and punctually throughout Costa Rica 24/7',
    'hero.bookButton': '📲 Book via WhatsApp',

    // Services
    'services.title': 'Services',
    'services.airport.title': 'Airport\ntransfers',
    'services.airport.desc': 'National service to and from ALL airports: Juan Santamaría (SJO), Daniel Oduber (LIR), Tobías Bolaños (SYQ) and Limón (LIO).',
    'services.corporate.title': 'Corporate\ntransportation',
    'services.corporate.desc': 'Executive service nationwide for companies, business meetings and corporate events in all provinces.',
    'services.tours.title': 'Private\ntours',
    'services.tours.desc': 'Customized national tours: from Pacific and Caribbean beaches to volcanoes, national parks and cities.',

    // Mission & Vision
    'mission.title': 'Mission',
    'mission.text': 'To provide private, safe and reliable transportation service from the airport to any destination in Costa Rica, combining punctuality, comfort and personalized attention to offer a premium travel experience that reflects Costa Rican hospitality and warmth.',
    'vision.title': 'Vision',
    'vision.text': 'To be the leading private transportation company in Costa Rica, recognized for its operational excellence, service innovation and commitment to customer experience, connecting destinations with style, safety and confidence.',

    // Coverage
    'coverage.title': 'Geographic coverage',
    'coverage.subtitle': 'Complete National Coverage',
    'coverage.description': 'We provide transportation services in all provinces of Costa Rica, connecting airports, hotels, tourist destinations and urban centers nationwide.',
    'coverage.airports': '🌟 Specialized service to and from all airports in the country',
    'coverage.airportList': 'Juan Santamaría (SJO), Daniel Oduber (LIR), Tobías Bolaños (SYQ) and Limón (LIO)',

    // Contact
    'contact.title': 'Contact',
    'contact.availability': 'We serve 24/7',
    'contact.bookButton': '📲 Book via WhatsApp',
    'contact.bookButton2': '📲 Book (Line 2)',

    // Testimonials
    'testimonials.title': 'Testimonials',

    // Footer
    'footer.company': 'Airport Transport CR',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}