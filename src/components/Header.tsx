import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logoPlaceholder from '@/assets/logo-placeholder.png';

interface HeaderProps {
  currentLanguage: 'de' | 'en';
  onLanguageChange: (language: 'de' | 'en') => void;
}

const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    de: {
      home: "Home",
      about: "Über mich",
      services: "Leistungen",
      results: "Ergebnisse",
      contact: "Kontakt"
    },
    en: {
      home: "Home",
      about: "About me",
      services: "Services",
      results: "Results",
      contact: "Contact"
    }
  };

  const t = content[currentLanguage];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (language: 'de' | 'en') => {
    console.log('Language change requested:', language);
    onLanguageChange(language);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Language Selector - Left Side */}
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-silver" />
            <div className="flex gap-1">
              <button 
                onClick={() => handleLanguageChange('de')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  currentLanguage === 'de' 
                    ? 'bg-gold text-foreground' 
                    : 'text-silver hover:text-gold-light'
                }`}
              >
                DE
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  currentLanguage === 'en' 
                    ? 'bg-gold text-foreground' 
                    : 'text-silver hover:text-gold-light'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Brand - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={logoPlaceholder} 
              alt="Firmenlogo" 
              className="h-8 md:h-14 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-silver hover:text-gold-light transition-colors"
            >
              {t.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-silver hover:text-gold-light transition-colors"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-silver hover:text-gold-light transition-colors"
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-silver hover:text-gold-light transition-colors"
            >
              {t.results}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-foreground px-6 py-2 rounded-lg hover:bg-gold-light transition-colors"
            >
              {t.contact}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-silver"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-silver hover:text-gold-light transition-colors text-left"
              >
                {t.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-silver hover:text-gold-light transition-colors text-left"
              >
                {t.about}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-silver hover:text-gold-light transition-colors text-left"
              >
                {t.services}
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-silver hover:text-gold-light transition-colors text-left"
              >
                {t.results}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-foreground px-6 py-2 rounded-lg hover:bg-gold-light transition-colors text-left"
              >
                {t.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
