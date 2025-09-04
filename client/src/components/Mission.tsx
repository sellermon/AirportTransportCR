import { Heart, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import watermarkBg from "@assets/fondo_1757026523220.png";

export default function Mission() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="mision-vision" 
      className="py-12 bg-white relative" 
      style={{
        backgroundImage: `url(${watermarkBg})`,
        backgroundSize: '400px 400px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
      data-testid="mission-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="text-center lg:text-left" data-testid="mission-card">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="bg-brand-navy text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy" data-testid="mission-title">
                {t('mission.title')}
              </h3>
            </div>
            <p className="text-brand-gray leading-relaxed" data-testid="mission-text">
              {t('mission.text')}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center lg:text-left" data-testid="vision-card">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy" data-testid="vision-title">
                {t('vision.title')}
              </h3>
            </div>
            <p className="text-brand-gray leading-relaxed" data-testid="vision-text">
              {t('vision.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}