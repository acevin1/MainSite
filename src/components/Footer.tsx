
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  currentLanguage: 'de' | 'en';
  onLanguageChange: (language: 'de' | 'en') => void;
}

const Footer = ({ currentLanguage, onLanguageChange }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const content = {
    de: {
      description: "Webentwicklung, Digitalberatung & Social-Media-Analyse für lokale Unternehmen",
      quickLinks: "Quick Links",
      followMe: "Folge mir",
      language: "Sprache",
      home: "Home",
      about: "Über mich",
      services: "Leistungen",
      results: "Ergebnisse",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz"
    },
    en: {
      description: "Web development, digital consulting & social media analysis for local businesses",
      quickLinks: "Quick Links",
      followMe: "Follow me",
      language: "Language",
      home: "Home",
      about: "About me",
      services: "Services",
      results: "Results",
      contact: "Contact",
      rights: "All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy"
    }
  };

  const t = content[currentLanguage];

  return (
    <footer className="bg-card text-foreground py-12 relative z-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">CWORKZ</h3>
            <p className="text-muted-foreground">
              {t.description}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={16} className="text-silver" />
              <span>cworkz.industries@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t.quickLinks}</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-gold-light transition-colors">
                {t.home}
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-gold-light transition-colors">
                {t.about}
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-gold-light transition-colors">
                {t.services}
              </a>
              <a href="#results" className="block text-muted-foreground hover:text-gold-light transition-colors">
                {t.results}
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-gold-light transition-colors">
                {t.contact}
              </a>
            </div>
          </div>

          {/* Language */}
          <div className="space-y-4">
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2 text-foreground">{t.language}</h4>
              <div className="flex gap-2">
                <button 
                  onClick={() => onLanguageChange('de')}
                  className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                    currentLanguage === 'de' 
                      ? 'bg-gold text-foreground' 
                      : 'bg-secondary text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  🇩🇪 DE
                </button>
                <button 
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                    currentLanguage === 'en' 
                      ? 'bg-gold text-foreground' 
                      : 'bg-secondary text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear}  {t.rights}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/imprint" className="text-muted-foreground hover:text-gold-light transition-colors">
              {t.imprint}
            </Link>
            <Link to="/imprint" className="text-muted-foreground hover:text-gold-light transition-colors">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
