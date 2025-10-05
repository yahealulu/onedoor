import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Code, Smartphone, Globe, Database, Cpu, Zap, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: {
      ar: "أحمد محمد",
      en: "Ahmad Mohammad",
      tr: "Ahmet Mehmet"
    },
    role: {
      ar: "مدير شركة التقنية المتقدمة",
      en: "Director of Advanced Technology Company",
      tr: "Gelişmiş Teknoloji Şirketi Müdürü"
    },
    company: "TechCorp",
    content: {
      ar: "فريق استثنائي قدم لنا حلول تقنية مبتكرة فاقت توقعاتنا. الاحترافية والجودة كانت على أعلى مستوى.",
      en: "An exceptional team that provided us with innovative technical solutions that exceeded our expectations. Professionalism and quality were at the highest level.",
      tr: "Beklentilerimizi aşan yenilikçi teknik çözümler sunan olağanüstü bir ekip. Profesyonellik ve kalite en yüksek seviyede idi."
    },
    platform: "linkedin",
    handle: "@ahmed_tech"
  },
  {
    id: 2,
    name: {
      ar: "فاطمة العلي",
      en: "Fatima Al-Ali",
      tr: "Fatma Aliali"
    },
    role: {
      ar: "مؤسسة متجر إلكتروني",
      en: "Founder of E-Store",
      tr: "E-Mağaza Kurucusu"
    },
    company: "E-Store Plus",
    content: {
      ar: "تطبيق الجوال الذي طوروه لنا زاد من مبيعاتنا بنسبة 300%. فريق محترف وملتزم بالمواعيد.",
      en: "The mobile app they developed for us increased our sales by 300%. A professional team committed to deadlines.",
      tr: "Bizim için geliştirdikleri mobil uygulama satışlarımızı %300 artırdı. Zamanında teslimat yapan profesyonel bir ekip."
    },
    platform: "facebook",
    handle: "@fatima_store"
  },
  {
    id: 3,
    name: {
      ar: "خالد السعيد",
      en: "Khalid Al-Saeed",
      tr: "Halit Sait"
    },
    role: {
      ar: "رئيس قسم التسويق",
      en: "Marketing Department Head",
      tr: "Pazarlama Departman Başkanı"
    },
    company: "Digital Market",
    content: {
      ar: "الموقع الإلكتروني الجديد أحدث نقلة نوعية في حضورنا الرقمي. تصميم رائع وأداء ممتاز.",
      en: "The new website created a qualitative shift in our digital presence. Beautiful design and excellent performance.",
      tr: "Yeni web sitesi dijital varlığımızda niteliksel bir değişim yarattı. Güzel tasarım ve mükemmel performans."
    },
    platform: "twitter",
    handle: "@khalid_marketing"
  },
  {
    id: 4,
    name: {
      ar: "نورا الأحمد",
      en: "Nora Al-Ahmad",
      tr: "Nure Alahmet"
    },
    role: {
      ar: "مديرة العمليات",
      en: "Operations Manager",
      tr: "Operasyon Müdürü"
    },
    company: "Smart Systems",
    content: {
      ar: "نظام إدارة المحتوى الذي أنشأوه سهل علينا إدارة موقعنا بشكل كامل. دعم فني ممتاز ومتواصل.",
      en: "The content management system they created made it easy for us to manage our website completely. Excellent and continuous technical support.",
      tr: "Oluşturdukları içerik yönetim sistemi web sitemizi tamamen yönetmemizi kolaylaştırdı. Mükemmel ve sürekli teknik destek."
    },
    platform: "linkedin",
    handle: "@nora_ops"
  },
  {
    id: 5,
    name: {
      ar: "سعد الخالدي",
      en: "Saad Al-Khaldi",
      tr: "Saad Halidi"
    },
    role: {
      ar: "مطور برمجيات",
      en: "Software Developer",
      tr: "Yazılım Geliştirici"
    },
    company: "DevHub",
    content: {
      ar: "تجربة رائعة في العمل معهم. كود نظيف وتوثيق ممتاز. أنصح بهم بشدة.",
      en: "Great experience working with them. Clean code and excellent documentation. I highly recommend them.",
      tr: "Onlarla çalışmak harika bir deneyimdi. Temiz kod ve mükemmel dokümantasyon. Onları şiddetle tavsiye ederim."
    },
    platform: "github",
    handle: "@saad_dev"
  },
  {
    id: 6,
    name: {
      ar: "ريم الشمري",
      en: "Rima Al-Shamri",
      tr: "Rima Şamiri"
    },
    role: {
      ar: "مديرة المشاريع",
      en: "Project Manager",
      tr: "Proje Müdürü"
    },
    company: "InnovateLab",
    content: {
      ar: "إدارة المشروع كانت احترافية من البداية للنهاية. تسليم في الوقت المحدد والجودة عالية.",
      en: "Project management was professional from start to finish. Delivery on time and high quality.",
      tr: "Proje yönetimi baştan sona profesyoneldi. Zamanında teslimat ve yüksek kalite."
    },
    platform: "linkedin",
    handle: "@reem_pm"
  },
  {
    id: 7,
    name: {
      ar: "علي الأسمر",
      en: "Ali Al-Asmar",
      tr: "Ali Asmar"
    },
    role: {
      ar: "رائد أعمال",
      en: "Entrepreneur",
      tr: "Girişimci"
    },
    company: "StartupX",
    content: {
      ar: "ساعدونا في تحويل فكرتنا إلى تطبيق ناجح. الفريق متفهم ومبدع في الحلول.",
      en: "They helped us transform our idea into a successful application. The team is understanding and creative in solutions.",
      tr: "Fikrimizi başarılı bir uygulamaya dönüştürmemize yardımcı oldular. Ekip çözüm konusunda anlayışlı ve yaratıcı."
    },
    platform: "twitter",
    handle: "@ali_entrepreneur"
  },
  {
    id: 8,
    name: {
      ar: "هند الزهراني",
      en: "Hind Al-Zahrani",
      tr: "Hind Zehranî"
    },
    role: {
      ar: "مختصة UX/UI",
      en: "UX/UI Specialist",
      tr: "UX/UI Uzmanı"
    },
    company: "DesignStudio",
    content: {
      ar: "التصميم والتطوير متناغمان بشكل مثالي. تجربة مستخدم رائعة ومظهر جذاب.",
      en: "Design and development are perfectly harmonious. Great user experience and attractive appearance.",
      tr: "Tasarım ve geliştirme mükemmel uyum içinde. Harika kullanıcı deneyimi ve çekici görünüm."
    },
    platform: "dribbble",
    handle: "@hind_design"
  }
];;

// Duplicate testimonials for infinite scroll
const leftColumnTestimonials = [...testimonials, ...testimonials];
const rightColumnTestimonials = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];
const mobileTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Mobile slider controls
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Start animations when in view
  useEffect(() => {
    if (inView) {
      // Desktop animations
      leftControls.start({
        y: [-600, 0],
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }
      });
      
      rightControls.start({
        y: [0, -600],
        transition: {
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }
      });
    }
  }, [inView, leftControls, rightControls]);

  const getPlatformIcon = (platform: string) => {
    const iconClass = "w-5 h-5";
    switch (platform) {
      case 'linkedin':
        return <div className={`${iconClass} bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold`}>in</div>;
      case 'facebook':
        return <div className={`${iconClass} bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs font-bold`}>f</div>;
      case 'twitter':
        return <div className={`${iconClass} bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold`}>𝕏</div>;
      case 'github':
        return <div className={`${iconClass} bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold`}>gh</div>;
      case 'dribbble':
        return <div className={`${iconClass} bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold`}>dr</div>;
      default:
        return <div className={`${iconClass} bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold`}>{platform.charAt(0)}</div>;
    }
  };

  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-6 mb-6 hover:shadow-elegant transition-all duration-300 hover:border-primary/20 group"
    >
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
        {getPlatformIcon(testimonial.platform)}
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
        "{language === 'ar' ? testimonial.content.ar : language === 'tr' ? testimonial.content.tr : testimonial.content.en}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-sm">{language === 'ar' ? testimonial.name.ar : language === 'tr' ? testimonial.name.tr : testimonial.name.en}</h4>
          <p className="text-xs text-muted-foreground">{language === 'ar' ? testimonial.role.ar : language === 'tr' ? testimonial.role.tr : testimonial.role.en}</p>
          <p className="text-xs text-primary/60 mt-1">{testimonial.handle}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );

  const MobileTestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 hover:border-primary/20 group flex-shrink-0"
      style={{ width: '280px' }}
    >
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
        {getPlatformIcon(testimonial.platform)}
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
        "{language === 'ar' ? testimonial.content.ar : language === 'tr' ? testimonial.content.tr : testimonial.content.en}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-sm">{language === 'ar' ? testimonial.name.ar : language === 'tr' ? testimonial.name.tr : testimonial.name.en}</h4>
          <p className="text-xs text-muted-foreground">{language === 'ar' ? testimonial.role.ar : language === 'tr' ? testimonial.role.tr : testimonial.role.en}</p>
          <p className="text-xs text-primary/60 mt-1">{testimonial.handle}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );

  const CreativeVisual = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Main geometric shape */}
      <div className="relative w-64 h-64 mx-auto">
        {/* Background gradient circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl" />
        
        {/* Floating tech icons */}
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-4 left-8 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20"
        >
          <Code className="w-6 h-6 text-primary" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, 10, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-16 right-4 w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-secondary/20"
        >
          <Smartphone className="w-6 h-6 text-secondary" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 5, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-16 left-4 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/20"
        >
          <Database className="w-6 h-6 text-accent" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, -5, 0]
          }}
          transition={{ 
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-4 right-8 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20"
        >
          <Globe className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Central element */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-elegant">
            <Zap className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'آراء عملائنا' : language === 'tr' ? 'Müşteri Yorumları' : 'Customer Reviews'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary via-secondary to-primary bg-clip-text text-transparent mb-6"
            style={{ lineHeight: '1.4' }}
          >
            {t('testimonials.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-start gap-12">
          {/* Left Creative Visual */}
          <div className="flex-shrink-0 w-80">
            <CreativeVisual />
          </div>

          {/* Testimonials Columns */}
          <div className="flex-1 grid grid-cols-2 gap-8 max-h-[600px] overflow-hidden">
            {/* Left Column - Scrolling Up */}
            <div className="space-y-6">
              <motion.div
                animate={leftControls}
                className="space-y-6"
              >
                {leftColumnTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={`left-${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
                ))}
              </motion.div>
            </div>

            {/* Right Column - Scrolling Down */}
            <div className="space-y-6">
              <motion.div
                animate={rightControls}
                className="space-y-6"
              >
                {rightColumnTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={`right-${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Two Horizontal Sliders */}
        <div className="lg:hidden">
          <div className="mb-12 flex justify-center">
            <div className="w-64">
              <CreativeVisual />
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Left Slider */}
            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x: ["0%", "-100%"]
                }}
                transition={{
                  duration: 22.5, // 25% faster than 30 seconds
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex space-x-4"
              >
                {mobileTestimonials.map((testimonial, index) => (
                  <MobileTestimonialCard key={`left-${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
                ))}
              </motion.div>
            </div>
            
            {/* Right Slider */}
            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x: ["-100%", "0%"]
                }}
                transition={{
                  duration: 18.75, // 25% faster than 25 seconds
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex space-x-4"
              >
                {[...mobileTestimonials].reverse().map((testimonial, index) => (
                  <MobileTestimonialCard key={`right-${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;