
import { Award, Heart, Target } from 'lucide-react';

interface AboutSectionProps {
  currentLanguage: 'de' | 'en';
}

const AboutSection = ({ currentLanguage }: AboutSectionProps) => {
  const content = {
    de: {
      title: "Über mich – ",
      titleHighlight: "Ehrlich & Direkt",
      description1: "Mit einem starken IT-Hintergrund und 2,5 Jahren Erfahrung in der digitalen Welt bringe ich technisches Know-how und kreative Social-Media-Expertise zusammen.",
      description2: "Meine Mission ist einfach: ",
      missionHighlight: "Lokale Unternehmen digital sichtbar machen",
      description3: " – ohne Fachchinesisch, ohne Verkaufsdruck, dafür mit echten Ergebnissen.",
      description4: "Besonders stolz bin ich auf meinen Car-Account, der durch gezielte Trendanalyse ",
      viewsHighlight: "über 30 Millionen Aufrufe",
      description5: " in einem Monat erreicht hat.",
      values: {
        honesty: { title: "Ehrlichkeit", subtitle: "Transparente Kommunikation" },
        quality: { title: "Qualität", subtitle: "Keine Kompromisse" },
        individuality: { title: "Individualität", subtitle: "Maßgeschneiderte Lösungen" }
      },
      workspace: {
        title: "Arbeitsplatz Setup",
        subtitle: "Webentwicklung & Design"
      },
      achievement: {
        number: "30M+",
        text: "Aufrufe generiert"
      }
    },
    en: {
      title: "About me – ",
      titleHighlight: "Honest & Direct",
      description1: "With a strong IT background and 2.5 years of experience in the digital world, I combine technical expertise with creative social media knowledge.",
      description2: "My mission is simple: ",
      missionHighlight: "Make local businesses digitally visible",
      description3: " – without technical jargon, without sales pressure, but with real results.",
      description4: "I'm particularly proud of my car account, which achieved ",
      viewsHighlight: "over 30 million views",
      description5: " in one month through targeted trend analysis.",
      values: {
        honesty: { title: "Honesty", subtitle: "Transparent communication" },
        quality: { title: "Quality", subtitle: "No compromises" },
        individuality: { title: "Individuality", subtitle: "Tailored solutions" }
      },
      workspace: {
        title: "Workspace Setup",
        subtitle: "Web development & Design"
      },
      achievement: {
        number: "30M+",
        text: "Views generated"
      }
    }
  };

  const t = content[currentLanguage];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {t.title}<span className="text-gold-light bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">{t.titleHighlight}</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-300">
                {t.description1}
              </p>
              
              <p className="hover:text-foreground transition-colors duration-300">
                {t.description2}<strong className="text-foreground">{t.missionHighlight}</strong>{t.description3}
              </p>
              
              <p className="hover:text-foreground transition-colors duration-300">
                {t.description4}<strong className="text-gold-light">{t.viewsHighlight}</strong>{t.description5}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-secondary to-background rounded-lg border border-border hover:border-gold/50 transition-all duration-300 transform hover:scale-105 group">
                <Heart className="w-8 h-8 text-silver mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-foreground">{t.values.honesty.title}</h4>
                <p className="text-sm text-muted-foreground">{t.values.honesty.subtitle}</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary to-background rounded-lg border border-border hover:border-gold/50 transition-all duration-300 transform hover:scale-105 group">
                <Award className="w-8 h-8 text-silver mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-foreground">{t.values.quality.title}</h4>
                <p className="text-sm text-muted-foreground">{t.values.quality.subtitle}</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary to-background rounded-lg border border-border hover:border-gold/50 transition-all duration-300 transform hover:scale-105 group">
                <Target className="w-8 h-8 text-silver mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-foreground">{t.values.individuality.title}</h4>
                <p className="text-sm text-muted-foreground">{t.values.individuality.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
