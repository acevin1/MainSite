
import { Monitor, Instagram, TrendingUp, Palette } from 'lucide-react';

interface ServicesOverviewProps {
  currentLanguage: 'de' | 'en';
}

const ServicesOverview = ({ currentLanguage }: ServicesOverviewProps) => {
  const content = {
    de: {
      title: "Was ich für dich tun kann",
      subtitle: "Individuelle Lösungen für deinen digitalen Erfolg – alles aus einer Hand.",
      services: [
        {
          title: "One-Pager & Websites",
          description: "Meine Spezialität: Schöne One-Pager die überzeugen. Multi-Page Websites ebenfalls möglich."
        },
        {
          title: "Logo & Corporate Design",
          description: "Einzigartiges Branding mit Logo, Farbpalette und digitalem Styleguide."
        },
        {
          title: "Social-Media-Beratung",
          description: "Instagram-Strategien und Content-Tipps für mehr Reichweite und Engagement."
        },
        {
          title: "Trendanalysen & AI",
          description: "Nutze modernste AI-Tools für bessere Sichtbarkeit und smarte Content-Strategien."
        }
      ]
    },
    en: {
      title: "What I can do for you",
      subtitle: "Individual solutions for your digital success – everything from one source.",
      services: [
        {
          title: "One-Pagers & Websites",
          description: "My specialty: Beautiful one-pagers that convince. Multi-page websites also possible."
        },
        {
          title: "Logo & Corporate Design",
          description: "Unique branding with logo, color palette and digital style guide."
        },
        {
          title: "Social Media Consulting",
          description: "Instagram strategies and content tips for more reach and engagement."
        },
        {
          title: "Trend Analysis & AI",
          description: "Use cutting-edge AI tools for better visibility and smart content strategies."
        }
      ]
    }
  };

  const t = content[currentLanguage];
  const services = [
    { icon: Monitor, ...t.services[0] },
    { icon: Palette, ...t.services[1] },
    { icon: Instagram, ...t.services[2] },
    { icon: TrendingUp, ...t.services[3] }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-dark to-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-gold-dark/20 hover:shadow-2xl transition-all duration-500 group border border-border hover:border-gold-dark/50 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-silver group-hover:scale-110 group-hover:text-silver-light transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
