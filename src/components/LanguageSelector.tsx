
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LanguageSelectorProps {
  onLanguageSelect: (language: 'de' | 'en') => void;
}

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if language was already selected
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
      setIsOpen(true);
    } else {
      onLanguageSelect(savedLanguage as 'de' | 'en');
    }
  }, [onLanguageSelect]);

  const handleLanguageSelect = (language: 'de' | 'en') => {
    localStorage.setItem('selectedLanguage', language);
    onLanguageSelect(language);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Sprache wählen / Choose Language
          </h2>
          
          <p className="text-gray-600">
            Bitte wähle deine bevorzugte Sprache aus
            <br />
            Please select your preferred language
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleLanguageSelect('de')}
              className="flex flex-col items-center gap-2 p-6 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
            >
              <div className="text-4xl">🇩🇪</div>
              <span className="font-semibold text-gray-900 group-hover:text-red-600">
                Deutsch
              </span>
            </button>

            <button
              onClick={() => handleLanguageSelect('en')}
              className="flex flex-col items-center gap-2 p-6 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
            >
              <div className="text-4xl">🇬🇧</div>
              <span className="font-semibold text-gray-900 group-hover:text-red-600">
                English
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
