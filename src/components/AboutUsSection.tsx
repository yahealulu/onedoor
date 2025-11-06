import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import flagOfSyria from '../assets/Flag_of_Syria_(2025-).svg.png';
import flagOfTurkey from '../assets/Flag_of_Turkey.svg.webp';
import newVision from '../assets/visionid.png';
import sarahportrait from '../assets/sarah-portrait.jpg'
import nouraportrait from '../assets/noura-portrait.jpg'
import ahmedportrait from '../assets/ahmed-portrait.jpg'
import abdulrahmanportrait from '../assets/abdulrahman-portrait.jpg'

const AboutUsSection = () => {
  const { t, language } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section 
      id="about-us" 
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
              {language === 'en' ? 'OUR STORY' : language === 'tr' ? 'HİKAYEMİZ' : 'قصتنا'}
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Story Section with Team */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-20 md:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div variants={slideInLeft} className="order-2 lg:order-1">
              <div className="glass p-6 md:p-8 lg:p-10 rounded-3xl border border-border/50 backdrop-blur-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  {t('about.story')}
                </h3>
                <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
                  {t('about.description')}
                </p>
                <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                  {language === 'en' 
                    ? "Our journey has been marked by innovation, dedication, and an unwavering commitment to excellence. Today, we serve clients across multiple continents, bringing cutting-edge solutions to businesses of all sizes."
                    : language === 'tr' 
                    ? "Yolculuğumuz, yenilik, adanmışlık ve mükemmelliğe olan sarsılmaz bağlılığımızla işaretlendi. Bugün, tüm boyutlardaki işletmelere son teknoloji çözümler sunarak birçok kıtada müşterilere hizmet veriyoruz."
                    : "تميزت رحلتنا بالابتكار والتفاني والالتزام اللام wavering بالتفوق. اليوم، نخدم العملاء عبر قارات متعددة، ونوفر حلولاً متطورة لشركات من جميع الأحجام."}
                </p>
                
                {/* Team Members */}
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-2xl">
                  <div className="flex -space-x-3">
                    {[abdulrahmanportrait, ahmedportrait, nouraportrait, sarahportrait].map((portrait, idx) => (
                      <motion.img
                        key={idx}
                        src={portrait}
                        alt="Team Member"
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-3 border-background object-cover shadow-lg"
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {language === 'en' ? "20+ Experts" : language === 'tr' ? "20+ Uzman" : "20+ خبير"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? "Worldwide Team" : language === 'tr' ? "Dünya Çapında Ekip" : "فريق عالمي"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={slideInRight} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { value: "150+", label: language === 'en' ? 'Projects' : language === 'tr' ? 'Projeler' : 'مشاريع', color: "primary" },
                  { value: "30+", label: language === 'en' ? 'Clients' : language === 'tr' ? 'Müşteriler' : 'عملاء', color: "accent" },
                  { value: "7", label: language === 'en' ? 'Countries' : language === 'tr' ? 'Ülkeler' : 'دول', color: "primary" },
                  { value: "20+", label: language === 'en' ? 'Experts' : language === 'tr' ? 'Uzmanlar' : 'خبراء', color: "accent" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="glass p-6 md:p-8 rounded-2xl border border-border/40 text-center backdrop-blur-xl"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`text-3xl md:text-4xl font-bold mb-2 ${
                        stat.color === 'primary'
                          ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
                          : 'bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent'
                      }`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm md:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-20 md:mb-32"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            {t('about.mission.title')}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission Card */}
            <motion.div
              variants={slideInLeft}
              className="glass p-8 md:p-10 rounded-3xl border border-primary/30 backdrop-blur-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02, borderColor: "rgba(var(--primary), 0.5)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                    {t('about.mission.mission')}
                  </h4>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {t('about.mission.mission_desc')}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={slideInRight}
              className="glass p-8 md:p-10 rounded-3xl border border-accent/30 backdrop-blur-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02, borderColor: "rgba(var(--accent), 0.5)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                    {t('about.mission.vision')}
                  </h4>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {t('about.mission.vision_desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Image Display */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-20 md:mb-32"
        >
          <motion.div
            variants={scaleIn}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl">
              <motion.img
                src={newVision}
                alt="Vision"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Locations Section with Flags */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-20 md:mb-32"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          >
            {t('about.locations.title')}
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Syria Location */}
            <motion.div
              variants={slideInLeft}
              className="glass p-6 md:p-8 rounded-3xl border border-border/50 backdrop-blur-xl group hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <img
                      src={flagOfSyria}
                      alt="Syria Flag"
                      className="w-24 h-16 md:w-32 md:h-20 rounded-xl object-cover shadow-xl border-2 border-border/50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl"></div>
                  </div>
                </motion.div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {t('about.locations.syria')}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {t('about.locations.syria_address1')}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {t('about.locations.syria_address2')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Turkey Location */}
            <motion.div
              variants={slideInRight}
              className="glass p-6 md:p-8 rounded-3xl border border-border/50 backdrop-blur-xl group hover:border-accent/50 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <img
                      src={flagOfTurkey}
                      alt="Turkey Flag"
                      className="w-24 h-16 md:w-32 md:h-20 rounded-xl object-cover shadow-xl border-2 border-border/50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl"></div>
                  </div>
                </motion.div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {t('about.locations.turkey')}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {t('about.locations.turkey_address1')}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {t('about.locations.turkey_address2')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-base md:text-lg italic"
          >
            {t('about.locations.description')}
          </motion.p>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            {t('about.mission.core_values')}
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-center text-muted-foreground mb-12 md:mb-16 text-base md:text-lg"
          >
            {language === 'en' 
              ? 'The principles that guide everything we do'
              : language === 'tr'
              ? 'Yaptığımız her şeyi yönlendiren ilkeler'
              : 'المبادئ التي توجه كل ما نقوم به'}
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: t('about.mission.innovation'),
                description: t('about.mission.innovation_desc'),
                icon: "💡",
                gradient: "from-primary/20 to-accent/20",
                border: "border-primary/30"
              },
              {
                title: t('about.mission.integrity'),
                description: t('about.mission.integrity_desc'),
                icon: "🛡️",
                gradient: "from-accent/20 to-primary/20",
                border: "border-accent/30"
              },
              {
                title: t('about.mission.excellence'),
                description: t('about.mission.excellence_desc'),
                icon: "⭐",
                gradient: "from-primary/20 via-accent/20 to-primary/20",
                border: "border-primary/30"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`glass p-6 md:p-8 rounded-3xl border ${value.border} backdrop-blur-xl bg-gradient-to-br ${value.gradient} to-transparent text-center`}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutUsSection;