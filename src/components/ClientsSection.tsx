import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import nouraPortrait from '../assets/noura-portrait.jpg';
import ahmedPortrait from '../assets/ahmed-portrait.jpg';
import sarahPortrait from '../assets/sarah-portrait.jpg';
import abdulrahmanPortrait from '../assets/abdulrahman-portrait.jpg';
import ataa from '../assets/partners/ataa.jpg';
import ministryoftelecom from '../assets/partners/ministryoftelecom.jpg';
import ecomedge from '../assets/partners/ecomedge.jpg';

const ClientsSection = () => {
  const { t } = useLanguage();
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

  const clients = [
    {
      name: {
        ar: "شركة عطاء البدر",
        en: "Ataa Al-Badr Company",
        tr: "Ataa Al-Badr Şirketi"
      },
      role: {
        ar: "شريك تقني مميز",
        en: "Distinguished Technology Partner",
        tr: "Öne Çıkan Teknoloji Partneri"
      },
      image: ataa,
      testimonial: {
        ar: "شراكة مثمرة مع فريق محترف ومبدع في تقديم الحلول التقنية.",
        en: "A fruitful partnership with a professional and creative team in delivering technical solutions.",
        tr: "Teknik çözümler sunan profesyonel ve yaratıcı bir ekip ile verimli bir ortaklık."
      }
    },
    {
      name: {
        ar: "وزارة الاتصالات والتقنية",
        en: "Ministry of Communications and Technology",
        tr: "İletişim ve Teknoloji Bakanlığı"
      },
      role: {
        ar: "جهة حكومية رسمية",
        en: "Official Government Entity",
        tr: "Resmi Hükümet Kurumu"
      },
      image: ministryoftelecom,
      testimonial: {
        ar: "تنفيذ مشاريع تقنية متطورة تلبي احتياجات القطاع الحكومي.",
        en: "Implementation of advanced technology projects that meet government sector needs.",
        tr: "Hükümet sektörü ihtiyaçlarını karşılayan gelişmiş teknoloji projelerinin uygulanması."
      }
    },
    {
      name: {
        ar: "ايكوم ايدج",
        en: "Ecom Edge",
        tr: "Ecom Edge"
      },
      role: {
        ar: "شريك تجاري رقمي",
        en: "Digital Business Partner",
        tr: "Dijital İş Ortaklığı"
      },
      image: ecomedge,
      testimonial: {
        ar: "حلول رقمية مبتكرة ساهمت في تطوير أعمالنا بشكل كبير.",
        en: "Innovative digital solutions that significantly contributed to developing our business.",
        tr: "İşlerimizi geliştirmede önemli katkıda bulunan yenilikçi dijital çözümler."
      }
    }
  ];

  return (
    <section ref={sectionRef} id="clients" className="py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-8 reveal" style={{ lineHeight: '1.4' }}>
            {t('clients.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Clients Grid - Centered */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="glass p-6 text-center hover:shadow-glow transition-all duration-500 hover:scale-105 reveal group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                <img 
                  src={client.image}
                  alt={client.name.en}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {t('language') === 'ar' ? client.name.ar : t('language') === 'tr' ? client.name.tr : client.name.en}
              </h4>
              <p className="text-primary font-medium mb-4">
                {t('language') === 'ar' ? client.role.ar : t('language') === 'tr' ? client.role.tr : client.role.en}
              </p>
              <p className="text-muted-foreground text-sm italic">
                "{t('language') === 'ar' ? client.testimonial.ar : t('language') === 'tr' ? client.testimonial.tr : client.testimonial.en}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;