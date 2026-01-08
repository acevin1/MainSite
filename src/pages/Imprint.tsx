import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Imprint = () => {
    const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');
    const [privacyText, setPrivacyText] = useState<string>('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const savedLanguage = localStorage.getItem('selectedLanguage') as 'de' | 'en';
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }

        // Datenschutz-Text aus der externen Datei laden
        fetch('/datenschutz.txt')
            .then((response) => response.text())
            .then((text) => setPrivacyText(text))
            .catch((error) => console.error('Fehler beim Laden:', error));
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

Cevin Rothenhäusler
Eichenweg 9
72581 Dettingen an der Erms

Kontakt:
Telefon: +4915156044032
E-Mail: cworkz.industries@gmail.com

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV`
            },
            privacyContent: {
                title: "Datenschutzerklärung"
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

Legal Notice

Information provided in accordance with applicable laws.

Owner / Responsible Party

Cevin Rothenhäusler
Eichenweg 9
72581 Dettingen an der Erms
Germany

Contact Information

Phone: +49 151 56044032
Email: cworkz.industries@gmail.com

Content Responsibility

Cevin Rothenhäusler is responsible for the content of this website.`
            },
            privacyContent: {
                title: "Privacy Policy"
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
                            {privacyText || 'Datenschutztext wird geladen...'}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Imprint;
