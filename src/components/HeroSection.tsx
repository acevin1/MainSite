import { ArrowRight, Upload } from 'lucide-react';
import { useState } from 'react';
import DynamicBackground from './DynamicBackground';
import DemoSelector from './DemoSelector';
import profilePlaceholder from '@/assets/profile-placeholder.png';

interface HeroSectionProps {
  currentLanguage: 'de' | 'en';
}

const HeroSection = ({
  currentLanguage
}: HeroSectionProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(profilePlaceholder);
  const [isDemoSelectorOpen, setIsDemoSelectorOpen] = useState(false);

  const content = {
    de: {
      title: "Kein Schnickschnack.",
      subtitle: "Qualität",
      description: "Hallo, ich bin Cevin Rothenhäusler – Webentwickler und Digitalberater. Seit 2,5 Jahren helfe ich lokalen Unternehmen dabei, digital sichtbar zu werden. Meine Spezialität: Schöne One-Pager, die überzeugen.",
      callout: "Du willst digital durchstarten, aber hast keinen Plan von Websites? Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.",
      button: "Beispiel-Seiten",
      upload: "Dein Profilbild",
      uploadText: "Klicke zum Hochladen",
      stats: {
        views: "Aufrufe",
        years: "Jahre",
        honest: "Ehrlich",
        quality: "Qualität"
      }
    },
    en: {
      title: "No Nonsense.",
      subtitle: "Quality",
      description: "Hi, I'm Cevin Müller – web developer and digital consultant. For 2.5 years I've been helping local businesses become digitally visible. My specialty: Beautiful one-pagers that convince.",
      callout: "You want to go digital but have no idea about websites? I listen and develop a solution with you that works.",
      button: "Demo-Websites",
      upload: "Your Profile Picture",
      uploadText: "Click to upload",
      stats: {
        views: "Views",
        years: "Years",
        honest: "Honest",
        quality: "Quality"
      }
    }
  };

  const t = content[currentLanguage];

  const openDemoSelector = () => {
    setIsDemoSelectorOpen(true);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return <section id="home" className="min-h-[90vh] relative overflow-hidden pt-16">
      <DynamicBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-4 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Responsive Layout - Mobile: Stack, Desktop: Side by side */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            
            {/* Profile Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gold shadow-2xl bg-secondary">
                  {profileImage ? <img src={profileImage} alt="Cevin Müller" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                      <div className="text-center text-foreground">
                        <Upload size={48} className="mx-auto mb-4 text-silver" />
                        <p className="text-lg font-semibold">{t.upload}</p>
                        <p className="text-sm text-muted-foreground">{t.uploadText}</p>
                      </div>
                    </div>}
                </div>
              
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 text-center lg:text-left space-y-4 lg:space-y-6">
              <div className="space-y-3 lg:space-y-4 animate-fade-in">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                  {t.title}
                  <br />
                  <span className="text-gold-light relative">
                    {t.subtitle}
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gold animate-slide-in-right"></div>
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed animate-fade-in delay-300 text-white">
                  {t.description}
                </p>
              </div>

              <div className="space-y-4 lg:space-y-5 animate-fade-in delay-500">
                <div className="bg-background/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4 lg:p-5">
                  <p className="text-sm lg:text-base text-silver leading-relaxed">
                    {t.callout.split('Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.')[0]}
                    <span className="text-gold-light font-medium"> {t.callout.split('Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.')[1] || (currentLanguage === 'en' ? 'I listen and develop a solution with you that works.' : 'Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.')}</span>
                  </p>
                </div>

                <button onClick={openDemoSelector} className="bg-gold hover:bg-gold-light text-foreground px-6 lg:px-10 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 inline-flex items-center gap-2 group shadow-2xl hover:shadow-gold/25 transform hover:scale-105">
                  {t.button}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </div>

              <DemoSelector 
                isOpen={isDemoSelectorOpen} 
                onClose={() => setIsDemoSelectorOpen(false)} 
                currentLanguage={currentLanguage} 
              />

              {/* Stats - Key Facts in Dark Gold */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 animate-fade-in delay-700">
                <div className="text-center p-2 lg:p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border hover:border-gold/50 transition-all duration-300">
                  <div className="text-lg lg:text-xl font-bold text-gold-light">30M+</div>
                  <div className="text-xs text-muted-foreground">{t.stats.views}</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border hover:border-gold/50 transition-all duration-300">
                  <div className="text-lg lg:text-xl font-bold text-gold-light">2.5</div>
                  <div className="text-xs text-muted-foreground">{t.stats.years}</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border hover:border-gold/50 transition-all duration-300">
                  <div className="text-lg lg:text-xl font-bold text-gold-light">100%</div>
                  <div className="text-xs text-muted-foreground">{t.stats.honest}</div>
                </div>
                <div className="text-center p-2 lg:p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border hover:border-gold/50 transition-all duration-300">
                  <div className="text-lg lg:text-xl font-bold text-gold-light">∞</div>
                  <div className="text-xs text-muted-foreground">{t.stats.quality}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
