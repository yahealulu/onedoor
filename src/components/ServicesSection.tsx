import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Smartphone, Settings, Cloud, ShieldCheck, Palette, Brain } from 'lucide-react';

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger curtain reveal
            const curtain = entry.target.querySelector('.curtain-reveal');
            if (curtain) {
              curtain.classList.add('active');
            }
            
            // Animate other elements
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 200 + 500); // Delay after curtain animation
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

  const services = [
    {
      title: t('services.web'),
      description: t('services.web_desc'),
      icon: <Globe className="text-primary" strokeWidth={1.5} size={36} />
    },
    {
      title: t('services.mobile'),
      description: t('services.mobile_desc'),
      icon: <Smartphone className="text-primary" strokeWidth={1.5} size={36} />
    },
    {
      title: t('services.backend'),
      description: t('services.backend_desc'),
      icon: <Settings className="text-primary" strokeWidth={1.5} size={36} />
    },
    {
      title: t('services.cloud'),
      description: t('services.cloud_desc'),
      icon: <Cloud className="text-primary" strokeWidth={1.5} size={36} />
    },
    {
      title: t('services.security'),
      description: t('services.security_desc'),
      icon: <ShieldCheck className="text-primary" strokeWidth={1.5} size={36} />
    },
    {
      title: t('services.design'),
      description: t('services.design_desc'),
      icon: <Palette className="text-primary" strokeWidth={1.5} size={36} />
    },
    {
      title: t('services.ai'),
      description: t('services.ai_desc'),
      icon: <Brain className="text-primary" strokeWidth={1.5} size={36} />
    }
  ];

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative py-32 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Curtain Reveal Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background transform translate-y-full transition-transform duration-1000 ease-out curtain-reveal"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 reveal" style={{ lineHeight: '1.4' }}>
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-4 reveal">
            {t('services.subtitle')}
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12 reveal">
            {t('services.what_we_create')} — {t('services.what_we_create_desc')}
          </p>
          <button 
            onClick={handleGetStarted}
            className="btn-primary reveal"
          >
            {t('services.get_started')}
          </button>
        </div>

        {/* Services Title */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4 reveal">
            {t('services.title')}
          </h3>
          <p className="text-lg text-muted-foreground reveal">
            {t('services.what_we_create')}<br />
            {t('services.what_we_create_desc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass p-8 hover:shadow-glow transition-all duration-500 hover:scale-105 reveal group"
            >
              <div className="mb-4 group-hover:animate-bounce">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;