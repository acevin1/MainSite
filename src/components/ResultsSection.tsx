
import { TrendingUp, Users, Star, ExternalLink } from 'lucide-react';
import analyticsImage from '@/assets/analytics-placeholder.jpg';

interface ResultsSectionProps {
  currentLanguage: 'de' | 'en';
}

const ResultsSection = ({ currentLanguage }: ResultsSectionProps) => {
  const content = {
    de: {
      title: "Echte ",
      titleHighlight: "Ergebnisse",
      subtitle: "Zahlen, die sprechen – und Kunden, die begeistert sind.",
      highlightProject: "Highlight-Projekt",
      projectTitle: "Instagram Car-Profil",
      projectDescription: "Durch gezielte Trendanalyse und strategischen Content-Aufbau ",
      projectHighlight: "über 30 Millionen Aufrufe in einem Monat",
      projectEnd: " erreicht.",
      stats: {
        views: "Aufrufe",
        followers: "Likes",
        viewProfile: "Profil ansehen"
      },
      workspace: {
        title: "Analytics Dashboard",
        subtitle: "Social Media Insights"
      },
      liveProject: "Live-Projekt",
      testimonials: [
        {
          name: "Sarah Weber",
          business: "Fahrradladen Weber",
          text: "Ich hatte keine Ahnung von Social Media – jetzt läuft mein Onlineshop online besser als je zuvor!",
          rating: 5
        },
        {
          name: "Thomas Klein",
          business: "Klein's Bäckerei",
          text: "Die Zusammenarbeit mit Cevin war menschlich, professionell und direkt. Kein Blabla – sondern Ergebnisse.",
          rating: 5
        },
        {
          name: "Lisa Hoffmann",
          business: "Yoga Studio Balance",
            text: "Endlich hat jemand zugehört und nicht einfach verkauft. 100% Empfehlung für Leute mit hohen Ansprüchen",
          rating: 5
        }
      ]
    },
    en: {
      title: "Real ",
      titleHighlight: "Results",
      subtitle: "Numbers that speak – and customers who are thrilled.",
      highlightProject: "Highlight Project",
      projectTitle: "Instagram Car Profile",
      projectDescription: "Through targeted trend analysis and strategic content development achieved ",
      projectHighlight: "over 30 million views in one month",
      projectEnd: ".",
      stats: {
        views: "Views",
        followers: "Likes",
        viewProfile: "View Profile"
      },
      workspace: {
        title: "Analytics Dashboard",
        subtitle: "Social Media Insights"
      },
      liveProject: "Live Project",
      testimonials: [
        {
          name: "Sarah Weber",
          business: "Weber Bike Shop",
          text: "I had no idea about social media – now my bike shop is running better online than ever before!",
          rating: 5
        },
        {
          name: "Thomas Klein",
          business: "Klein's Bakery",
          text: "Working with Cevin was personal, professional and direct. No nonsense – just results.",
          rating: 5
        },
        {
          name: "Lisa Hoffmann",
          business: "Balance Yoga Studio",
          text: "Finally someone who listened and didn't just sell. 100% recommendation!",
          rating: 5
        }
      ]
    }
  };

  const t = content[currentLanguage];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t.title}<span className="text-gold-light bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4"></div>
        </div>

        {/* Highlight Projekt */}
        <div className="bg-gradient-to-br from-card to-secondary rounded-2xl shadow-xl p-8 mb-16 border border-border hover:border-gold/50 transition-all duration-500 animate-fade-in delay-300 transform hover:scale-105">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-gold to-gold-light text-foreground px-4 py-2 rounded-full font-semibold animate-pulse">
                {t.highlightProject}
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                {t.projectTitle}
              </h3>
              <p className="text-lg text-muted-foreground">
                {t.projectDescription}<strong className="text-gold-light">{t.projectHighlight}</strong>{t.projectEnd}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-muted to-card p-4 rounded-lg text-center border border-border hover:border-gold/50 transition-all duration-300 transform hover:scale-105">
                  <TrendingUp className="w-8 h-8 text-silver mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-light">30M+</div>
                  <div className="text-sm text-muted-foreground">{t.stats.views}</div>
                </div>
                <div className="bg-gradient-to-br from-muted to-card p-4 rounded-lg text-center border border-border hover:border-gold/50 transition-all duration-300 transform hover:scale-105">
                  <Users className="w-8 h-8 text-silver mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-light">2M+</div>
                  <div className="text-sm text-muted-foreground">{t.stats.followers}</div>
                </div>
              </div>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {t.stats.viewProfile}
              </a>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 rounded-xl shadow-lg overflow-hidden border border-border">
                <img 
                  src={analyticsImage} 
                  alt={t.workspace.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                {t.liveProject}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-card to-secondary p-6 rounded-xl shadow-lg hover:shadow-gold/20 hover:shadow-2xl transition-all duration-500 border border-border hover:border-gold/50 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-light fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic hover:text-foreground transition-colors duration-300">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-gold-light text-sm">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
