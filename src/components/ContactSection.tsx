
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

// ============================================
// EMAILJS KONFIGURATION - HIER DEINE WERTE EINTRAGEN
// ============================================
const EMAILJS_SERVICE_ID = 'service_kpd3nej';    // z.B. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_cky7age';  // z.B. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'h89HLPKJqj-U49NxP';    // Dein Public Key
// ============================================

interface ContactSectionProps {
  currentLanguage: 'de' | 'en';
}

const ContactSection = ({ currentLanguage }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    callback: false
  });

  const content = {
    de: {
      title: "Lass uns über dein ",
      titleHighlight: "Projekt",
      titleEnd: " sprechen",
      subtitle: "Ich antworte dir innerhalb von 24h – versprochen.",
      contactDirect: "Direkt kontaktieren",
      whatsappText: "WhatsApp Business verfügbar",
      whyWorkWith: "Warum mit mir arbeiten?",
      benefits: [
        "✓ Kostenlose Erstberatung (30 Min.)",
        "✓ Transparente Preisgestaltung",
        "✓ Schnelle Kommunikation",
        "✓ Nachbetreuung inklusive"
      ],
      form: {
        name: "Name *",
        email: "E-Mail *",
        topic: "Thema",
        message: "Nachricht *",
        callback: "Ich wünsche einen Rückruf (bitte Telefonnummer angeben)",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
        namePlaceholder: "Dein Name",
        emailPlaceholder: "deine@email.de",
        messagePlaceholder: "Erzähl mir von deinem Projekt...",
        selectPlaceholder: "Bitte wählen...",
        topics: {
          website: "Website-Erstellung",
          socialMedia: "Social Media",
          google: "Google-Eintrag",
          consulting: "Beratung",
          general: "Allgemein"
        }
      },
      successMessage: "Vielen Dank für deine Nachricht! Ich melde mich innerhalb von 24h bei dir.",
      errorMessage: "Es gab einen Fehler beim Senden. Bitte versuche es erneut.",
      configError: "EmailJS ist noch nicht konfiguriert. Bitte trage deine Zugangsdaten ein."
    },
    en: {
      title: "Let's talk about your ",
      titleHighlight: "project",
      titleEnd: "",
      subtitle: "I'll respond within 24h – guaranteed.",
      contactDirect: "Contact directly",
      whatsappText: "WhatsApp Business available",
      whyWorkWith: "Why work with me?",
      benefits: [
        "✓ Free initial consultation (30 min.)",
        "✓ Transparent pricing",
        "✓ Fast communication",
        "✓ Follow-up support included"
      ],
      form: {
        name: "Name *",
        email: "Email *",
        topic: "Topic",
        message: "Message *",
        callback: "I would like a callback (please provide Phone-Number)",
        submit: "Send message",
        sending: "Sending...",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about your project...",
        selectPlaceholder: "Please select...",
        topics: {
          website: "Website creation",
          socialMedia: "Social Media",
          google: "Google listing",
          consulting: "Consulting",
          general: "General"
        }
      },
      successMessage: "Thank you for your message! I'll get back to you within 24h.",
      errorMessage: "There was an error sending the message. Please try again.",
      configError: "EmailJS is not configured yet. Please enter your credentials."
    }
  };

  const t = content[currentLanguage];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prüfe ob EmailJS konfiguriert ist
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      toast({
        title: "Konfiguration fehlt",
        description: t.configError,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: `Thema: ${formData.topic || 'Nicht angegeben'}\nRückruf gewünscht: ${formData.callback ? 'Ja' : 'Nein'}\n\n${formData.message}`
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Erfolgreich gesendet!",
        description: t.successMessage
      });

      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        topic: '',
        message: '',
        callback: false
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Fehler",
        description: t.errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-foreground relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t.title}<span className="text-gold-light">{t.titleHighlight}</span>{t.titleEnd}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t.contactDirect}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-silver" />
                  <span className="text-lg text-muted-foreground">max.mueller@webdev-pro.de</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-silver" />
                  <span className="text-lg text-muted-foreground">+49 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-silver" />
                  <span className="text-lg text-muted-foreground">{t.whatsappText}</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-xl font-bold mb-4 text-gold-light">{t.whyWorkWith}</h4>
              <ul className="space-y-3 text-muted-foreground">
                {t.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card text-foreground p-8 rounded-2xl shadow-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-secondary text-foreground placeholder-muted-foreground disabled:opacity-50"
                  placeholder={t.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-secondary text-foreground placeholder-muted-foreground disabled:opacity-50"
                  placeholder={t.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.form.topic}
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-secondary text-foreground disabled:opacity-50"
                >
                  <option value="">{t.form.selectPlaceholder}</option>
                  <option value="website">{t.form.topics.website}</option>
                  <option value="social-media">{t.form.topics.socialMedia}</option>
                  <option value="google">{t.form.topics.google}</option>
                  <option value="consulting">{t.form.topics.consulting}</option>
                  <option value="general">{t.form.topics.general}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-secondary text-foreground placeholder-muted-foreground disabled:opacity-50"
                  placeholder={t.form.messagePlaceholder}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="callback"
                  name="callback"
                  checked={formData.callback}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-4 h-4 text-gold border-border rounded focus:ring-gold bg-secondary"
                />
                <label htmlFor="callback" className="text-sm text-muted-foreground">
                  {t.form.callback}
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gold text-foreground py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.form.sending}
                  </>
                ) : (
                  <>
                    {t.form.submit}
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
