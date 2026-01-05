import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DynamicBackground from '@/components/DynamicBackground';
import LanguageSelector from '@/components/LanguageSelector';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLanguageSelect = (language: 'de' | 'en') => {
    console.log('Language selected:', language);
    setCurrentLanguage(language);
    // Save to localStorage
    localStorage.setItem('selectedLanguage', language);
  };

  return (
    <div className="min-h-screen relative">
      <LanguageSelector onLanguageSelect={handleLanguageSelect} />
      <DynamicBackground />
      <div className="relative z-10">
        <Header 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageSelect}
        />
        <HeroSection currentLanguage={currentLanguage} />
        <ServicesOverview currentLanguage={currentLanguage} />
        <AboutSection currentLanguage={currentLanguage} />
        <ServicesSection currentLanguage={currentLanguage} />
        <ResultsSection currentLanguage={currentLanguage} />
        <ContactSection currentLanguage={currentLanguage} />
        <Footer 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageSelect}
        />
      </div>
    </div>
  );
};

export default Index;
