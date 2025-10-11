import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import ferdon from '../assets/stuff/ferdon.jpg';
import obadaaboalshams from '../assets/stuff/obadaaboalshams.jpg';
import zohairalashram from '../assets/stuff/zohairalashram.jpg';
import yahya from '../assets/stuff/yahya.png';
import baraasheikha from '../assets/stuff/baraasheikha.jpg';
import momtazalkeddeh from '../assets/stuff/MomtazAlkeddeh.jpg';
import basharkallajpg from '../assets/stuff/basharkallajpg.jpg';
import ahmadhajali from '../assets/stuff/ahmadhajali.jpg';
import mohammadsleiman from '../assets/stuff/MohammadSleiman.jpg';
import mohamedzeytoun from '../assets/stuff/MohamedZeytoun.jpg';
import moazabdulhak from '../assets/stuff/moazabdulhak.jpg';
import kareemsharaf from '../assets/stuff/KAREEMSHARAF.png';
import subhibekri from '../assets/stuff/SUBHIBEKRI.png';
import husseinhamada from '../assets/stuff/husseinhamada.jpg';
import mouaztaloolabi from '../assets/stuff/mouaztaloolabi.png';
import ammarahmadjafleh from '../assets/stuff/ammarahmadjafleh.jpg';

const StuffSection = () => {
  const { language } = useLanguage();
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Team members data with multilingual support
  const teamMembers = [
    {
      id: 1,
      name: {
        en: "Ferudun chamor",
        ar:"فريدون چامور",
        tr: "Ferudun Çamur"
      },
      role: {
        en: "Board Member",
        ar: "عضو مجلس الإدارة",
        tr: "Yönetim Kurulu Üyesi"
      },
      image: ferdon,
      isFeatured: true
    },
    {
      id: 2,
      name: {
        en: "Obada Abo Alshams",
       ar:"عبادة ابو الشمس",
        tr: "Obada Abo Alshams"
      },
      role: {
        en: "CEO of One Door Company",
        ar: "One Doorالرئيس التنفيذي لشركة ",
        tr: "One Door Şirketi CEO'su"
      },
      image: obadaaboalshams,
      isFeatured: true
    },
    {
      id: 3,
      name: {
        en: "Zohair Al-Ashram",
        ar: "زهير الأشرم",
        tr: "Zohair Al-Ashram"
      },
      role: {
        en: "Team Leader",
        ar: "قائد الفريق",
        tr: "Takım Lideri"
      },
      image: zohairalashram,
      isFeatured: true
    },
    {
      id: 4,
      name: {
        en: "Yahya loulou",
       ar:"يحيى لؤلؤ",
        tr: "Yahya loulou"
      },
      role: {
        en: " Frontend Developer",
        ar: "مطور واجهات أمامية رئيسي",
        tr: "Kıdemli Frontend Geliştirici"
      },
      image: yahya,
      isFeatured: false
    },
    {
      id: 5,
      name: {
        en: "Baraa Sheikha",
        ar: "براء الشيخة",
        tr: "Baraa Sheikha"
      },
      role: {
        en: "DevOps Engineer",
        ar: "مهندس DevOps",
        tr: "DevOps Mühendisi"
      },
      image: baraasheikha,
      isFeatured: false
    },
    {
      id: 6,
      name: {
        en: "Momtaz Alkedde",
        ar: "ممتاز القدة",
        tr: "Momtaz Alkedde"
      },
      role: {
        en: " Backend Engineer",
        ar: "مهندس خلفية رئيسي",
        tr: "Kıdemli Backend Mühendisi"
      },
      image: momtazalkeddeh,
      isFeatured: false
    },
    {
      id: 7,
      name: {
        en: "Bashar Kalla",
        ar:"بشار قلع",
        tr: "Bashar Kalla"
      },
      role: {
        en: " Backend Engineer",
        ar: "مهندس خلفية رئيسي",
        tr: "Kıdemli Backend Mühendisi"
      },
      image: basharkallajpg,
      isFeatured: false
    },
    {
      id: 8,
      name: {
        en: "Ahmad Alhaj Ali",
        ar: "أحمد الحاج علي",
        tr: "Ahmad Alhaj Ali"
      },
      role: {
        en: "Photographer",
        ar: "مصور فوتوغرافي",
        tr: "Fotoğrafçı"
      },
      image: ahmadhajali,
      isFeatured: false
    },
    {
      id: 9,
      name: {
        en: "Mohammad Sleiman",
        ar: "محمد سليمان",
        tr: "Mohammad Sleiman"
      },
      role: {
        en: "Accountant",
        ar: "محاسب",
        tr: "Muhasebeci"
      },
      image: mohammadsleiman,
      isFeatured: false
    },
    {
      id: 10,
      name: {
        en: "Mohamed Zeytoun",
        ar: "محمد زيتون",
        tr: "Mohamed Zeytoun"
      },
      role: {
        en: "Flutter Developer",
        ar: "مطور Flutter",
        tr: "Flutter Geliştirici"
      },
      image: mohamedzeytoun,
      isFeatured: false
    },
    {
      id: 11,
      name: {
        en: "Moaz Abdulhak",
        ar: "معاذ عبد الحق",
        tr: "Moaz Abdulhak"
      },
      role: {
        en: "UI/UX Designer",
        ar: "مصمم واجهات المستخدم وتجربة الاستخدام",
        tr: "UI/UX Tasarımcı"
      },
      image: moazabdulhak,
      isFeatured: false
    },
    {
      id: 12,
      name: {
        en: "Kareem Sharaf",
        ar: "كريم شرف",
        tr: "Kareem Sharaf"
      },
      role: {
        en: "Backend Developer",
        ar: "مطور خلفية",
        tr: "Backend Geliştirici"
      },
      image: kareemsharaf,
      isFeatured: false
    },
    {
      id: 13,
      name: {
        en: "Subhi Bekri",
        ar: "صبحي بكري",
        tr: "Subhi Bekri"
      },
      role: {
        en: "Back-end Developer",
        ar: "مطور خلفية",
        tr: "Backend Geliştirici"
      },
      image: subhibekri,
      isFeatured: false
    },
    {
      id: 14,
      name: {
        en: "Hussein Hamada",
        ar: "حسين حماده",
        tr: "Hussein Hamada"
      },
      role: {
        en: "Frontend Developer",
        ar: "مطور واجهات أمامية",
        tr: "Frontend Geliştirici"
      },
      image: husseinhamada,
      isFeatured: false
    },
    {
      id: 15,
      name: {
        en: "Mouaz Taloolabi",
       ar:"معاذ طالو العلبي",
        tr: "Mouaz Taloolabi"
      },
      role: {
        en: "Frontend Developer",
        ar: "مطور واجهات أمامية",
        tr: "Frontend Geliştirici"
      },
      image: mouaztaloolabi,
      isFeatured: false
    },
    {
      id: 16,
      name: {
        en: "Ammar Ahmad Jafleh",
        ar: "عمار أحمد جفلى",
        tr: "Ammar Ahmad Jafleh"
      },
      role: {
        en: "AI Engineer",
        ar: "مهندس ذكاء اصطناعي",
        tr: "Yapay Zeka Mühendisi"
      },
      image: ammarahmadjafleh,
      isFeatured: false
    }
  ];

  // Featured members (first 3)
  const featuredMembers = teamMembers.filter(member => member.isFeatured);
  // Regular members (remaining 13)
  const regularMembers = teamMembers.filter(member => !member.isFeatured);
  
  // Pagination logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(regularMembers.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = regularMembers.slice(startIndex, endIndex);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section 
      ref={sectionRef} 
      id="stuff" 
      className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'فريقنا' : language === 'tr' ? 'Ekibimiz' : 'Our Team'}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6"
            style={{ lineHeight: '1.4' }}
          >
            {language === 'ar' 
              ? 'فريق عمل One Door' 
              : language === 'tr' 
              ? 'One Door Ekibi' 
              : 'One Door Team'}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? 'فريق من الخبراء المتفانين في تقديم أفضل الحلول الرقمية' 
              : language === 'tr' 
              ? 'En iyi dijital çözümleri sunmaya adanmış uzmanlardan oluşan ekip' 
              : 'A team of dedicated experts committed to delivering the best digital solutions'}
          </motion.p>
        </motion.div>

        {/* Featured Members - Full Width Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {featuredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={imageVariants}
                className="glass rounded-2xl overflow-hidden border border-border/30 transition-all duration-500 hover:shadow-xl hover:border-primary/30 h-full"
              >
                {/* Member Image */}
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={language === 'ar' ? member.name.ar : language === 'tr' ? member.name.tr : member.name.en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {language === 'ar' ? member.name.ar : language === 'tr' ? member.name.tr : member.name.en}
                  </h3>
                  <p className="text-primary font-medium text-lg">
                    {language === 'ar' ? member.role.ar : language === 'tr' ? member.role.tr : member.role.en}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Regular Members with Pagination */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {currentMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={imageVariants}
                  className="glass rounded-xl overflow-hidden border border-border/30 transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full"
                >
                  {/* Member Image */}
                  <div className="relative overflow-hidden h-60">
                    <img 
                      src={member.image} 
                      alt={language === 'ar' ? member.name.ar : language === 'tr' ? member.name.tr : member.name.en}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1">
                      {language === 'ar' ? member.name.ar : language === 'tr' ? member.name.tr : member.name.en}
                    </h3>
                    <p className="text-primary text-sm">
                      {language === 'ar' ? member.role.ar : language === 'tr' ? member.role.tr : member.role.en}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentPage === index ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
              
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default StuffSection;