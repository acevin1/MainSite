import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, Building2, Scissors, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DemoSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: 'de' | 'en';
}

const DemoSelector = ({ isOpen, onClose, currentLanguage }: DemoSelectorProps) => {
  const navigate = useNavigate();

  const content = {
    de: {
      title: "Wähle eine Demo-Website",
      demos: [
        { id: 'restaurant', name: 'Restaurant', icon: UtensilsCrossed },
        { id: 'real-estate', name: 'Immobilienmakler', icon: Building2 },
        { id: 'hairdresser', name: 'Friseur', icon: Scissors },
      ]
    },
    en: {
      title: "Choose a Demo Website",
      demos: [
        { id: 'restaurant', name: 'Restaurant', icon: UtensilsCrossed },
        { id: 'real-estate', name: 'Real Estate Agent', icon: Building2 },
        { id: 'hairdresser', name: 'Hairdresser', icon: Scissors },
      ]
    }
  };

  const t = content[currentLanguage];

  const handleDemoSelect = (demoId: string) => {
    onClose();
    navigate(`/demo/${demoId}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background border-gold/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground text-center">
            {t.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {t.demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => handleDemoSelect(demo.id)}
              className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-gold/50 rounded-xl transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                <demo.icon className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                {demo.name}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoSelector;
