import { ArrowLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DemoRestaurant = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedLanguage = localStorage.getItem('selectedLanguage') as 'de' | 'en';
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const content = {
    de: {
      back: 'Zurück',
      announcement: 'Erleben Sie Fine Dining vom Feinsten.',
      makeReservation: 'Reservieren',
      scroll: 'Scrollen',
      aboutTitle: 'Elara',
      aboutText1: 'Elara ist eine Feier der kulinarischen Kunst, in der jedes Gericht eine Geschichte von Leidenschaft und Präzision erzählt. Unser Küchenchef kreiert Erlebnisse, die das Gewöhnliche übertreffen, mit den besten saisonalen Zutaten von lokalen Handwerkern und vertrauenswürdigen Lieferanten.',
      aboutText2: 'Das Restaurant ist ein intimer Raum, der Wärme und Raffinesse ausstrahlt. Jedes Detail wurde sorgfältig durchdacht, um eine Atmosphäre eleganter Verfeinerung zu schaffen.',
      menuTitle: 'Speisekarte',
      menuText: 'Eine Auswahl seltener und schöner Zutaten, bei der Textur, Geschmack und Harmonie im Vordergrund stehen. Tauchen Sie ein in das kulinarische Erlebnis mit unserem sorgfältig zusammengestellten Degustationsmenü und ausgewählten Weinbegleitungen.',
      viewMenu: 'Menü ansehen',
      chefTitle: 'Der Küchenchef',
      chefText: 'Mit über zwei Jahrzehnten kulinarischer Exzellenz bringt unser Küchenchef eine einzigartige Perspektive in die moderne Gastronomie. In den besten Küchen Europas ausgebildet, konzentriert sich seine Philosophie auf den Respekt vor den Zutaten bei gleichzeitiger kreativer Innovation.',
      learnMore: 'Mehr erfahren',
      experienceTitle: 'Das Erlebnis',
      reserveTitle: 'Reservieren Sie Ihren Tisch',
      reserveText: 'Begleiten Sie uns auf eine unvergessliche kulinarische Reise',
      location: 'Standort',
      hours: 'Öffnungszeiten',
      contact: 'Kontakt',
      tueSat: 'Dienstag – Samstag',
      menuItems: ['Über uns', 'Speisekarte', 'Reservierungen', 'Events', 'Kontakt'],
      footerNav: ['Über uns', 'Speisekarte', 'Reservierungen', 'Datenschutz'],
    },
    en: {
      back: 'Back',
      announcement: 'Experience Fine Dining At Its Best.',
      makeReservation: 'Make a Reservation',
      scroll: 'Scroll',
      aboutTitle: 'Elara',
      aboutText1: 'Elara is a celebration of culinary artistry, where every dish tells a story of passion and precision. Our executive chef crafts experiences that transcend the ordinary, using the finest seasonal ingredients sourced from local artisans and trusted suppliers.',
      aboutText2: 'The restaurant is an intimate space designed to evoke warmth and sophistication. Every detail has been thoughtfully considered to create an atmosphere of refined elegance.',
      menuTitle: 'Menu',
      menuText: 'A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the dining experience with our carefully curated tasting menu and thoughtfully selected wine pairings.',
      viewMenu: 'View Menu',
      chefTitle: 'The Chef',
      chefText: 'With over two decades of culinary excellence, our executive chef brings a unique perspective to modern gastronomy. Trained in the finest kitchens of Europe, their philosophy centers on respecting ingredients while pushing creative boundaries.',
      learnMore: 'Learn More',
      experienceTitle: 'The Experience',
      reserveTitle: 'Reserve Your Table',
      reserveText: 'Join us for an unforgettable culinary journey',
      location: 'Location',
      hours: 'Hours',
      contact: 'Contact',
      tueSat: 'Tuesday – Saturday',
      menuItems: ['About', 'Menu', 'Reservations', 'Events', 'Contact'],
      footerNav: ['About', 'Menu', 'Reservations', 'Privacy'],
    }
  };

  const t = content[currentLanguage];

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#2d3436] overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="bg-[#2d3436] text-white text-center py-3 px-4 text-sm tracking-wide">
        <span className="font-light">{t.announcement} </span>
        <Link to="/" className="underline hover:text-[#d4af37] transition-colors">
          {t.makeReservation}
        </Link>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
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
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-[#d4af37] transition-colors"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Reservation Button */}
        <div className="absolute top-6 right-24 z-50">
          <button className="border border-white/80 text-white text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-[#2d3436] transition-all duration-300">
            {t.makeReservation}
          </button>
        </div>

        {/* Centered Logo/Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[12vw] md:text-[10vw] font-serif tracking-[0.1em] uppercase">
            ELARA
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">{t.scroll}</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#2d3436] z-40 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-8 text-white">
            {t.menuItems.map((item) => (
              <a 
                key={item}
                href="#"
                className="text-3xl md:text-5xl font-serif tracking-widest hover:text-[#d4af37] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* About Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-[#2d3436] mb-8 tracking-wide">
            {t.aboutTitle}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#636e72] font-light max-w-3xl mx-auto">
            {t.aboutText1}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-[#636e72] font-light max-w-3xl mx-auto mt-6">
            {t.aboutText2}
          </p>
        </div>
      </section>

      {/* Menu Section with Image */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <div 
          className="h-[50vh] md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80')`,
          }}
        />
        <div className="flex items-center justify-center p-12 md:p-20 bg-[#f5f5f0]">
          <div className="max-w-md">
            <h3 className="text-4xl md:text-5xl font-serif text-[#2d3436] mb-6">{t.menuTitle}</h3>
            <p className="text-[#636e72] font-light leading-relaxed mb-8">
              {t.menuText}
            </p>
            <a 
              href="#"
              className="inline-block border-b-2 border-[#2d3436] text-[#2d3436] text-sm tracking-[0.2em] uppercase pb-2 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            >
              {t.viewMenu}
            </a>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center p-12 md:p-20 bg-[#2d3436] order-2 md:order-1">
          <div className="max-w-md text-white">
            <h3 className="text-4xl md:text-5xl font-serif mb-6">{t.chefTitle}</h3>
            <p className="text-white/70 font-light leading-relaxed mb-8">
              {t.chefText}
            </p>
            <a 
              href="#"
              className="inline-block border-b-2 border-white text-white text-sm tracking-[0.2em] uppercase pb-2 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            >
              {t.learnMore}
            </a>
          </div>
        </div>
        <div 
          className="h-[50vh] md:h-auto bg-cover bg-center order-1 md:order-2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80')`,
          }}
        />
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-8 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif text-[#2d3436] mb-16 text-center">
            {t.experienceTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div 
              className="aspect-square bg-cover bg-center hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80')`,
              }}
            />
            <div 
              className="aspect-square bg-cover bg-center hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80')`,
              }}
            />
            <div 
              className="aspect-square bg-cover bg-center hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section 
        className="relative py-40 px-8 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <h3 className="text-4xl md:text-6xl font-serif mb-8">{t.reserveTitle}</h3>
          <p className="text-white/80 font-light mb-10 text-lg">
            {t.reserveText}
          </p>
          <button className="border-2 border-white text-white text-sm tracking-[0.2em] uppercase px-12 py-4 hover:bg-white hover:text-[#2d3436] transition-all duration-300">
            {t.makeReservation}
          </button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-8 bg-[#2d3436] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-[#d4af37]">{t.location}</h4>
            <p className="font-light">123 Gourmet Avenue</p>
            <p className="font-light">Downtown, NY 10001</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-[#d4af37]">{t.hours}</h4>
            <p className="font-light">{t.tueSat}</p>
            <p className="font-light">18:00 – 23:00</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-[#d4af37]">{t.contact}</h4>
            <p className="font-light">+1 (555) 123-4567</p>
            <p className="font-light">reservations@elara.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#1a1a1a] text-white/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-4xl font-serif text-white tracking-widest">ELARA</p>
          <nav className="flex gap-8 text-xs tracking-widest uppercase">
            {t.footerNav.map((item) => (
              <a key={item} href="#" className="hover:text-[#d4af37] transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <p className="text-xs">© 2024 Elara Restaurant – Demo</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoRestaurant;
