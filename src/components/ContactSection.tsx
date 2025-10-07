import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/963995550310', '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-gradient-to-b from-accent/10 to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-8 reveal" style={{ lineHeight: '1.4' }}>
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Addresses */}
            <div className="glass p-8 reveal">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-2xl mr-3">📍</span>
                {t('contact.locations')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Syria - Damascus - Mazzeh' 
                      : language === 'tr' ? 'Suriye - Şam - Mazzeh' 
                      : language === 'ar' 
                      ? 'Suriye - Şam - Mazzeh' 
                      : 'سوريا - دمشق - مزة ساحة المواساة'}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'Syria - Aleppo - Opposite Sheraton Hotel' 
                      : language === 'tr' 
                      ? 'Suriye - Halep - Karşılık Sheraton Otel' 
                      : 'سوريا - حلب - مقابل فندق الشيراتون'}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="glass p-8 reveal">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                {t('contact.phone_numbers')}
              </h3>
              <div className="space-y-3">
                {[
              
                  '+963 995 550 310'
                ].map((phone, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-primary">•</span>
                    <a 
                      href={`tel:${phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass p-8 reveal">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </h3>
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary w-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t('contact.whatsapp')}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 reveal">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('contact.send_message')}
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.first_name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg 
                             focus:ring-2 focus:ring-primary focus:border-transparent
                             text-foreground placeholder-muted-foreground
                             transition-all duration-300"
                    placeholder={t('contact.first_name_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.last_name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg 
                             focus:ring-2 focus:ring-primary focus:border-transparent
                             text-foreground placeholder-muted-foreground
                             transition-all duration-300"
                    placeholder={t('contact.last_name_placeholder')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg 
                           focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground placeholder-muted-foreground
                           transition-all duration-300"
                  placeholder={t('contact.email_placeholder')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg 
                           focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground placeholder-muted-foreground
                           transition-all duration-300 resize-none"
                  placeholder={t('contact.message_placeholder')}
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                {language === 'en' ? 'Send Message' : language === 'tr' ? 'Mesaj Gönder' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;