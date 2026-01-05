
import { Code, Instagram, Brain, CheckCircle, Palette, CreditCard } from 'lucide-react';

interface ServicesSectionProps {
  currentLanguage: 'de' | 'en';
}

const ServicesSection = ({ currentLanguage }: ServicesSectionProps) => {
  const content = {
    de: {
      title: "Meine Leistungen",
      subtitle: "Alles individuell abgestimmt auf deine Bedürfnisse – keine Standard-Pakete, sondern maßgeschneiderte Lösungen.",
      pricing: "🛠️ Preise auf Anfrage – alles individuell. Klar und transparent.",
      services: [
        {
          title: "Website-Erstellung",
          description: "Professionelle One-Pager & Websites für Einzelunternehmer, kleine Läden und Dienstleister",
          features: [
            "Spezialisiert auf schöne One-Pager",
            "Multi-Page Websites ebenfalls möglich",
            "Responsive Design für alle Geräte",
            "SEO-optimiert für bessere Sichtbarkeit"
          ]
        },
        {
          title: "Logo & Corporate Design",
          description: "Einzigartiges Branding für deinen professionellen Auftritt",
          features: [
            "Logo-Design & Entwicklung",
            "Corporate Identity erstellen",
            "Farbpaletten & Typografie",
            "Markenrichtlinien definieren"
          ]
        },
        {
          title: "Social-Media-Grundaufbau",
          description: "Strategischer Aufbau und Optimierung deiner Social-Media-Präsenz",
          features: [
            "Instagram-Firmenprofile einrichten",
            "Content-Strategien entwickeln",
            "Trendanalysen für virale Inhalte",
            "Reels/Shorts-Konzepte erstellen"
          ]
        },
        {
          title: "Digitale Visitenkarten",
          description: "Moderne digitale Visitenkarten für den ersten Eindruck",
          features: [
            "NFC-fähige Visitenkarten",
            "QR-Code Integration",
            "Individuelles Design",
            "Einfache Kontaktübertragung"
          ]
        },
        {
          title: "Individuelle Beratung mit AI",
          description: "Modernste AI-Tools für smarte Digitalstrategien",
          features: [
            "AI-gestützte Content-Erstellung",
            "Automatisierte Trendanalysen",
            "Personalisierte Marketing-Strategien",
            "Designhilfe mit KI-Tools"
          ]
        }
      ]
    },
    en: {
      title: "My Services",
      subtitle: "Everything individually tailored to your needs – no standard packages, but customized solutions.",
      pricing: "🛠️ Prices on request – everything individual. Clear and transparent.",
      services: [
        {
          title: "Website Creation",
          description: "Professional one-pagers & websites for solo entrepreneurs, small shops and service providers",
          features: [
            "Specialized in beautiful one-pagers",
            "Multi-page websites also possible",
            "Responsive design for all devices",
            "SEO-optimized for better visibility"
          ]
        },
        {
          title: "Logo & Corporate Design",
          description: "Unique branding for your professional appearance",
          features: [
            "Logo design & development",
            "Create corporate identity",
            "Color palettes & typography",
            "Define brand guidelines"
          ]
        },
        {
          title: "Social Media Setup",
          description: "Strategic setup and optimization of your social media presence",
          features: [
            "Set up Instagram business profiles",
            "Develop content strategies",
            "Trend analysis for viral content",
            "Create Reels/Shorts concepts"
          ]
        },
        {
          title: "Digital Business Cards",
          description: "Modern digital business cards for the first impression",
          features: [
            "NFC-enabled business cards",
            "QR code integration",
            "Individual design",
            "Easy contact transfer"
          ]
        },
        {
          title: "Individual AI Consulting",
          description: "Latest AI tools for smart digital strategies",
          features: [
            "AI-supported content creation",
            "Automated trend analysis",
            "Personalized marketing strategies",
            "Design assistance with AI tools"
          ]
        }
      ]
    }
  };

  const t = content[currentLanguage];
  const icons = [Code, Palette, Instagram, CreditCard, Brain];
  const services = t.services.map((service, index) => ({
    icon: icons[index],
    ...service
  }));

  return (
    <section id="services" className="py-20 bg-secondary text-foreground relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t.title.split(' ')[0]} <span className="text-gold-light">{t.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <div className="bg-gold/20 border border-gold rounded-lg p-4 inline-block">
            <p className="text-gold-light font-semibold">
              {t.pricing}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border hover:border-gold transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <service.icon className="w-12 h-12 text-silver flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-light flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
