import { useEffect, useState } from 'react';
import { ArrowLeft, Building2, Home, MapPin, Phone, Mail, BedDouble, Bath, Square, Menu, X, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoRealEstate = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedLanguage = localStorage.getItem('selectedLanguage') as 'de' | 'en' | null;
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const propertyImages = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
  ];

  const content = {
    de: {
      back: 'Zurück',
      nav: {
        home: 'Home',
        team: 'Unser Team',
        properties: 'Immobilien',
        services: 'Leistungen',
        contact: 'Kontakt',
      },
      hero: {
        subtitle: 'Premium Immobilienmakler',
        title: 'Jürgen Immo',
        tagline: 'Immobilien',
        cta: 'Immobilien durchsuchen',
      },
      stats: [
        { value: '500+', label: 'Verkaufte Objekte' },
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '98%', label: 'Kundenzufriedenheit' },
        { value: '€2Mrd+', label: 'Transaktionsvolumen' },
      ],
      services: {
        title: 'Unsere Expertise',
        items: [
          { icon: Home, title: 'Verkauf', desc: 'Professionelle Vermarktung Ihrer Immobilie mit maximaler Reichweite' },
          { icon: Users, title: 'Kauf', desc: 'Finden Sie Ihr Traumobjekt mit unserer persönlichen Beratung' },
          { icon: Award, title: 'Bewertung', desc: 'Marktgerechte Immobilienbewertung durch zertifizierte Experten' },
          { icon: Clock, title: 'Beratung', desc: 'Individuelle Strategieberatung für Ihre Immobilieninvestition' },
        ],
      },
      properties: {
        title: 'Exklusive Objekte',
        featured: 'Ausgewählt',
        items: [
          { title: 'Penthouse am Park', location: 'Berlin Mitte', beds: 4, baths: 3, sqm: 220, price: '2.850.000 €' },
          { title: 'Altbauvilla', location: 'Hamburg Blankenese', beds: 6, baths: 4, sqm: 380, price: '4.200.000 €' },
          { title: 'Designerwohnung', location: 'München Schwabing', beds: 3, baths: 2, sqm: 145, price: '1.890.000 €' },
          { title: 'Stadthaus', location: 'Frankfurt Westend', beds: 5, baths: 3, sqm: 260, price: '3.150.000 €' },
        ],
      },
      testimonial: {
        title: 'Was unsere Kunden sagen',
        quote: '"Ein herausragender Service von Anfang bis Ende. Das Team hat jeden Schritt mit Professionalität und Hingabe begleitet."',
        author: 'Familie Müller',
        role: 'Käufer in Berlin',
      },
      contact: {
        title: 'Lassen Sie uns sprechen',
        subtitle: 'Kontaktieren Sie uns für eine unverbindliche Beratung',
        phone: '+49 30 123 456 789',
        email: 'info@juergen-immo.de',
        address: 'Kurfürstendamm 100, 10711 Berlin',
      },
      footer: '© 2024 Jürgen Immo - Demo Website',
    },
    en: {
      back: 'Back',
      nav: {
        home: 'Home',
        team: 'Our Team',
        properties: 'Properties',
        services: 'Services',
        contact: 'Contact',
      },
      hero: {
        subtitle: 'Premium Real Estate Agent',
        title: 'Jürgen Immo',
        tagline: 'Real Estate',
        cta: 'Search Properties',
      },
      stats: [
        { value: '500+', label: 'Properties Sold' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '€2B+', label: 'Transaction Volume' },
      ],
      services: {
        title: 'Our Expertise',
        items: [
          { icon: Home, title: 'Selling', desc: 'Professional marketing of your property with maximum reach' },
          { icon: Users, title: 'Buying', desc: 'Find your dream property with our personal consultation' },
          { icon: Award, title: 'Valuation', desc: 'Market-based property valuation by certified experts' },
          { icon: Clock, title: 'Advisory', desc: 'Individual strategy consulting for your real estate investment' },
        ],
      },
      properties: {
        title: 'Exclusive Properties',
        featured: 'Featured',
        items: [
          { title: 'Penthouse at the Park', location: 'Berlin Mitte', beds: 4, baths: 3, sqm: 220, price: '€2,850,000' },
          { title: 'Historic Villa', location: 'Hamburg Blankenese', beds: 6, baths: 4, sqm: 380, price: '€4,200,000' },
          { title: 'Designer Apartment', location: 'Munich Schwabing', beds: 3, baths: 2, sqm: 145, price: '€1,890,000' },
          { title: 'Townhouse', location: 'Frankfurt Westend', beds: 5, baths: 3, sqm: 260, price: '€3,150,000' },
        ],
      },
      testimonial: {
        title: 'What Our Clients Say',
        quote: '"Outstanding service from start to finish. The team guided every step with professionalism and dedication."',
        author: 'The Miller Family',
        role: 'Buyers in Berlin',
      },
      contact: {
        title: "Let's Connect",
        subtitle: 'Contact us for a no-obligation consultation',
        phone: '+49 30 123 456 789',
        email: 'info@juergen-immo.com',
        address: 'Kurfürstendamm 100, 10711 Berlin',
      },
      footer: '© 2024 Jürgen Immo - Demo Website',
    },
  };

  const t = content[currentLanguage];

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#2d3436] overflow-x-hidden">
      {/* Hero Section - Full Screen with clear image like restaurant */}
      <section className="relative h-screen">
        {/* Background Image - clear, not blurred */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            <span>{t.back}</span>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#d4af37] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Contact Button */}
        <div className="absolute top-6 right-24 z-50 hidden md:block">
          <button className="border border-white/80 text-white text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-[#2d3436] transition-all duration-300">
            {t.nav.contact}
          </button>
        </div>

        {/* Centered Logo/Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6">
            {t.hero.subtitle}
          </p>
          <h1 className="text-white text-[10vw] md:text-[8vw] font-serif tracking-[0.05em] uppercase leading-none">
            JÜRGEN IMMO
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6 mb-10">
            <div className="h-px w-16 sm:w-32 bg-white/50" />
            <span className="text-white/70 text-sm tracking-[0.2em] uppercase">{t.hero.tagline}</span>
            <div className="h-px w-16 sm:w-32 bg-white/50" />
          </div>
          <button className="border-2 border-white text-white text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-[#2d3436] transition-all duration-300">
            {t.hero.cta}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#2d3436] z-40 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-8 text-white">
            {Object.values(t.nav).map((item, index) => (
              <a 
                key={index}
                href="#"
                className="text-3xl md:text-5xl font-serif tracking-widest hover:text-[#d4af37] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-[#2d3436]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl sm:text-5xl font-serif mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-[#2d3436] mb-8 tracking-wide">
            Jürgen Immo
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#636e72] font-light max-w-3xl mx-auto">
            {currentLanguage === 'de' 
              ? 'Ihr vertrauenswürdiger Partner für exklusive Immobilien. Mit über 15 Jahren Erfahrung begleiten wir Sie professionell bei Kauf, Verkauf und Bewertung hochwertiger Objekte.'
              : 'Your trusted partner for exclusive real estate. With over 15 years of experience, we professionally guide you through buying, selling, and valuation of premium properties.'}
          </p>
        </div>
      </section>

      {/* Services Section with Image */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <div 
          className="h-[50vh] md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')`,
          }}
        />
        <div className="flex items-center justify-center p-12 md:p-20 bg-[#f5f5f0]">
          <div className="max-w-md">
            <h3 className="text-4xl md:text-5xl font-serif text-[#2d3436] mb-6">{t.services.title}</h3>
            <div className="space-y-6">
              {t.services.items.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <service.icon className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#2d3436]">{service.title}</h4>
                    <p className="text-[#636e72] font-light text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-32 px-8 bg-[#2d3436]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">
            {t.properties.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.properties.items.map((property, index) => (
              <div 
                key={index} 
                className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={propertyImages[index]} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {index === 0 && (
                    <span className="absolute top-4 left-4 bg-[#d4af37] text-white px-4 py-1 text-xs tracking-wide uppercase">
                      {t.properties.featured}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#636e72] text-sm mb-2">
                    <MapPin size={14} />
                    <span>{property.location}</span>
                  </div>
                  <h4 className="text-2xl font-serif text-[#2d3436] mb-4">
                    {property.title}
                  </h4>
                  <div className="flex items-center gap-6 text-[#636e72] text-sm mb-4">
                    <span className="flex items-center gap-2">
                      <BedDouble size={16} /> {property.beds}
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath size={16} /> {property.baths}
                    </span>
                    <span className="flex items-center gap-2">
                      <Square size={16} /> {property.sqm}m²
                    </span>
                  </div>
                  <div className="text-2xl font-serif text-[#2d3436]">{property.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section 
        className="relative py-40 px-8 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl md:text-5xl font-serif mb-12">{t.testimonial.title}</h3>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-serif font-light italic text-white/90 mb-8 leading-relaxed">
            {t.testimonial.quote}
          </blockquote>
          <div className="text-white/80">
            <p className="text-lg">{t.testimonial.author}</p>
            <p className="text-sm text-white/60">{t.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8 bg-[#2d3436] text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif mb-4 text-center">{t.contact.title}</h3>
          <p className="text-white/60 text-center mb-12">{t.contact.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-[#d4af37]">{currentLanguage === 'de' ? 'Telefon' : 'Phone'}</h4>
              <p className="font-light flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {t.contact.phone}
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-[#d4af37]">E-Mail</h4>
              <p className="font-light flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                {t.contact.email}
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-[#d4af37]">{currentLanguage === 'de' ? 'Adresse' : 'Address'}</h4>
              <p className="font-light flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.contact.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#1a1a1a] text-white/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-4xl font-serif text-white tracking-widest">JÜRGEN IMMO</p>
          <nav className="flex gap-8 text-xs tracking-widest uppercase">
            {Object.values(t.nav).slice(0, 4).map((item, index) => (
              <a key={index} href="#" className="hover:text-[#d4af37] transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <p className="text-xs">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoRealEstate;