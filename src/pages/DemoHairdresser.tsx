import { ArrowLeft, Scissors, Clock, MapPin, Phone, Star, Calendar, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const translations = {
  de: {
    back: 'Zurück',
    bookAppointment: 'Termin buchen',
    uniqueStyle: 'Ein einzigartiges Gefühl für Stil',
    modernTreatments: 'MODERNE HAAR-BEHANDLUNGEN',
    heroDescription: 'Wir bieten eine spannende Auswahl an Stilen, die neueste Trends mit klassischen Techniken verbinden.',
    discoverNow: 'Jetzt entdecken',
    whatWeOffer: 'Was wir anbieten',
    ourServices: 'Unsere Leistungen',
    aboutUs: 'Über uns',
    welcomeTo: 'Willkommen im Hair Atelier',
    aboutText1: 'Seit über 15 Jahren sind wir Ihr vertrauenswürdiger Partner für außergewöhnliche Haarpflege. Unser Team aus erfahrenen Stylisten verbindet traditionelle Handwerkskunst mit modernen Trends, um Ihnen ein unvergessliches Erlebnis zu bieten.',
    aboutText2: 'Wir verwenden ausschließlich hochwertige Produkte und legen größten Wert auf individuelle Beratung, um Ihren persönlichen Stil perfekt zur Geltung zu bringen.',
    learnMore: 'Mehr erfahren',
    ourExperts: 'Unsere Experten',
    theTeam: 'Das Team',
    yearsExperience: 'Jahre Erfahrung',
    readyForNewLook: 'Bereit für Ihren neuen Look?',
    bookNow: 'Vereinbaren Sie jetzt Ihren Termin',
    ctaDescription: 'Lassen Sie sich von unseren Experten beraten und verwöhnen. Wir freuen uns auf Ihren Besuch!',
    openingHours: 'Öffnungszeiten',
    address: 'Adresse',
    contact: 'Kontakt',
    showRoute: 'Route anzeigen',
    services: 'Services',
    haircuts: 'Haarschnitte',
    coloring: 'Färben',
    styling: 'Styling',
    treatments: 'Behandlungen',
    followUs: 'Folgen Sie uns',
    demoWebsite: 'Demo Website',
    closed: 'Geschlossen',
    hours: 'Di-Sa: 9-19 Uhr',
    // Services
    ladiesHaircut: 'Haarschnitt Damen',
    mensHaircut: 'Haarschnitt Herren',
    coloringHighlights: 'Färben & Strähnen',
    stylingUpdo: 'Styling & Hochsteck',
    // Team roles
    ownerStylist: 'Inhaberin & Stylistin',
    seniorStylist: 'Senior Stylist',
    colorist: 'Coloristin',
  },
  en: {
    back: 'Back',
    bookAppointment: 'Book Appointment',
    uniqueStyle: 'A unique sense of style',
    modernTreatments: 'MODERN HAIR TREATMENTS',
    heroDescription: 'We offer an exciting selection of styles that combine the latest trends with classic techniques.',
    discoverNow: 'Discover Now',
    whatWeOffer: 'What we offer',
    ourServices: 'Our Services',
    aboutUs: 'About Us',
    welcomeTo: 'Welcome to Hair Atelier',
    aboutText1: 'For over 15 years, we have been your trusted partner for exceptional hair care. Our team of experienced stylists combines traditional craftsmanship with modern trends to provide you with an unforgettable experience.',
    aboutText2: 'We exclusively use high-quality products and place great emphasis on individual consultation to perfectly showcase your personal style.',
    learnMore: 'Learn More',
    ourExperts: 'Our Experts',
    theTeam: 'The Team',
    yearsExperience: 'Years Experience',
    readyForNewLook: 'Ready for your new look?',
    bookNow: 'Book your appointment now',
    ctaDescription: 'Let our experts advise and pamper you. We look forward to your visit!',
    openingHours: 'Opening Hours',
    address: 'Address',
    contact: 'Contact',
    showRoute: 'Show Route',
    services: 'Services',
    haircuts: 'Haircuts',
    coloring: 'Coloring',
    styling: 'Styling',
    treatments: 'Treatments',
    followUs: 'Follow Us',
    demoWebsite: 'Demo Website',
    closed: 'Closed',
    hours: 'Tue-Sat: 9am-7pm',
    // Services
    ladiesHaircut: 'Ladies Haircut',
    mensHaircut: 'Men\'s Haircut',
    coloringHighlights: 'Coloring & Highlights',
    stylingUpdo: 'Styling & Updo',
    // Team roles
    ownerStylist: 'Owner & Stylist',
    seniorStylist: 'Senior Stylist',
    colorist: 'Colorist',
  }
};

const DemoHairdresser = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedLanguage = localStorage.getItem('selectedLanguage') as 'de' | 'en';
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const t = translations[currentLanguage];

  const services = [
    { name: t.ladiesHaircut, price: 'ab 45€', duration: '60 Min', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop' },
    { name: t.mensHaircut, price: 'ab 25€', duration: '30 Min', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop' },
    { name: t.coloringHighlights, price: 'ab 80€', duration: '120 Min', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop' },
    { name: t.stylingUpdo, price: 'ab 60€', duration: '45 Min', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop' },
  ];

  const team = [
    { name: 'Sarah Müller', role: t.ownerStylist, years: 15, image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop' },
    { name: 'Tom Weber', role: t.seniorStylist, years: 8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Lisa Schmidt', role: t.colorist, years: 6, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Bar */}
      <div className="bg-[#8B7355] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#D4C4B0] transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-[#D4C4B0] transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-[#D4C4B0] transition-colors"><Twitter size={16} /></a>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              +49 123 987654
            </span>
            <span className="hidden sm:inline text-[#D4C4B0]">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock size={14} />
              {t.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-[#8B7355] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.back}</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#8B7355]">Hair Atelier</span>
          </div>
          <button className="bg-[#C9A86C] hover:bg-[#B8956B] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">
            {t.bookAppointment}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&h=1080&fit=crop"
            alt="Frau mit schönen Haaren"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <p className="text-2xl md:text-3xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {t.uniqueStyle}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.modernTreatments.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-md">
              {t.heroDescription}
            </p>
            <button className="bg-[#C9A86C] hover:bg-[#B8956B] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 group">
              {t.discoverNow}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#C9A86C] text-lg italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>{t.whatWeOffer}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {t.ourServices}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#C9A86C] text-white px-4 py-1 rounded-full text-sm">
                      {service.price}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#8B7355] transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock size={14} /> {service.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#F8F5F1]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=700&fit=crop"
                alt="Salon Interior"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C9A86C] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">{t.yearsExperience}</div>
              </div>
            </div>
            <div>
              <p className="text-[#C9A86C] text-lg italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>{t.aboutUs}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {t.welcomeTo}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.aboutText1}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.aboutText2}
              </p>
              <button className="border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#C9A86C] text-lg italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>{t.ourExperts}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {t.theTeam}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-center gap-3">
                      <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-[#C9A86C] hover:text-white transition-colors">
                        <Facebook size={16} />
                      </a>
                      <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-[#C9A86C] hover:text-white transition-colors">
                        <Instagram size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-[#C9A86C] mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.years} {t.yearsExperience}</p>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C9A86C] fill-[#C9A86C]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8B7355] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-[#D4C4B0] text-lg italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>{t.readyForNewLook}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.bookNow}
          </h2>
          <p className="text-[#D4C4B0] text-lg max-w-2xl mx-auto mb-8">
            {t.ctaDescription}
          </p>
          <button className="bg-[#C9A86C] hover:bg-white hover:text-[#8B7355] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
            <Calendar size={20} />
            {t.bookAppointment}
          </button>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-[#F8F5F1] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#C9A86C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.openingHours}</h3>
              <p className="text-gray-600">{currentLanguage === 'de' ? 'Di-Fr: 09:00 - 19:00' : 'Tue-Fri: 9am - 7pm'}</p>
              <p className="text-gray-600">{currentLanguage === 'de' ? 'Sa: 09:00 - 16:00' : 'Sat: 9am - 4pm'}</p>
              <p className="text-gray-500 text-sm mt-2">{currentLanguage === 'de' ? 'Mo & So: Geschlossen' : 'Mon & Sun: Closed'}</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#F8F5F1] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#C9A86C] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.address}</h3>
              <p className="text-gray-600">Salonstraße 42</p>
              <p className="text-gray-600">12345 Musterstadt</p>
              <a href="#" className="text-[#C9A86C] text-sm hover:underline mt-2 inline-block">{t.showRoute} →</a>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#F8F5F1] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#C9A86C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.contact}</h3>
              <p className="text-gray-600">+49 123 987654</p>
              <p className="text-gray-600">termin@hair-atelier.de</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Hair Atelier</h4>
              <p className="text-gray-400 text-sm">
                Ihr Premium-Friseursalon für außergewöhnliche Haarpflege und Styling.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A86C]">{t.services}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.haircuts}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.coloring}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.styling}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.treatments}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A86C]">{t.contact}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Salonstraße 42</li>
                <li>12345 Musterstadt</li>
                <li>+49 123 987654</li>
                <li>termin@hair-atelier.de</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A86C]">{t.followUs}</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-[#C9A86C] p-2 rounded-full hover:bg-[#B8956B] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-[#C9A86C] p-2 rounded-full hover:bg-[#B8956B] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-[#C9A86C] p-2 rounded-full hover:bg-[#B8956B] transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Hair Atelier - {t.demoWebsite}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoHairdresser;
