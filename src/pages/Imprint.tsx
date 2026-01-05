
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Imprint = () => {
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
      back: "Zurück zur Startseite",
      title: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz (DSGVO)",
      imprintContent: {
        title: "Impressum",
        text: `Angaben gemäß § 5 TMG:

Max Mustermann
WebDev Pro
Musterstraße 123
12345 Musterstadt

Kontakt:
Telefon: +49 123 456789
E-Mail: max.mueller@webdev-pro.de

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Max Mustermann
Musterstraße 123
12345 Musterstadt`
      },
      privacyContent: {
        title: "Datenschutzerklärung",
        text: `1. Datenschutz auf einen Blick

Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.

2. Allgemeine Hinweise und Pflichtinformationen

Datenschutz
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

3. Datenerfassung auf dieser Website

Cookies
Diese Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.

4. Ihre Rechte

Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.`
      }
    },
    en: {
      back: "Back to Home",
      title: "Legal",
      imprint: "Imprint",
      privacy: "Privacy Policy (GDPR)",
      imprintContent: {
        title: "Imprint",
        text: `Information according to § 5 TMG:

Max Mustermann
WebDev Pro
Sample Street 123
12345 Sample City

Contact:
Phone: +49 123 456789
Email: max.mueller@webdev-pro.de

Responsible for content according to § 55 Abs. 2 RStV:
Max Mustermann
Sample Street 123
12345 Sample City`
      },
      privacyContent: {
        title: "Privacy Policy",
        text: `1. Privacy at a Glance

General Information
The following information provides a simple overview of what happens to your personal data when you visit this website.

2. General Information and Mandatory Information

Data Protection
The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.

3. Data Collection on this Website

Cookies
This website uses cookies. These are small text files that your web browser stores on your device.

4. Your Rights

You have the right at any time to receive free information about your stored personal data, its origin and recipients, and the purpose of data processing, as well as a right to correct or delete this data.`
      }
    }
  };

  const t = content[currentLanguage];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-light transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          {t.back}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
          {t.title}
        </h1>
        
        <Tabs defaultValue="imprint" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="imprint" className="text-sm md:text-base">
              {t.imprint}
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-sm md:text-base">
              {t.privacy}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="imprint" className="bg-card rounded-lg p-6 md:p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {t.imprintContent.title}
            </h2>
            <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {t.imprintContent.text}
            </div>
          </TabsContent>
          
          <TabsContent value="privacy" className="bg-card rounded-lg p-6 md:p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {t.privacyContent.title}
            </h2>
            <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {t.privacyContent.text}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Imprint;
