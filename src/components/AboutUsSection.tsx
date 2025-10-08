import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { easeInOut } from 'framer-motion';
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
  const [activeTab, setActiveTab] = useState('story');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position to section position
  const y = useTransform(scrollY, [0, 800], [800, 0]);
  const opacity = useTransform(scrollY, [0, 400], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section 
      id="about-us" 
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden min-h-screen absolute top-0 left-0 w-full"
      style={{ y, opacity }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gradient mb-6"
            style={{ lineHeight: '1.4' }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-secondary/50 rounded-full border border-border/50">
            {['story', 'mission', 'locations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {language === 'ar' ? 
                  (tab === 'story' ? 'قصتنا' : 
                   tab === 'mission' ? 'المهمة والرؤية' : 
                   'المواقع') : 
                 language === 'tr' ? 
                  (tab === 'story' ? 'Hikayemiz' : 
                   tab === 'mission' ? 'Misyonumuz ve Vizyonumuz' : 
                   'Konumlar') : 
                  tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="glass p-8 rounded-2xl border border-border/50"
          >
            {activeTab === 'story' && (
              <motion.div
                key="story"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.description')}
                </p>
                <p className="text-muted-foreground mb-4">
                  {language === 'en' 
                    ? "Our journey has been marked by innovation, dedication, and an unwavering commitment to excellence. Today, we serve clients across multiple continents, bringing cutting-edge solutions to businesses of all sizes."
                    : language === 'tr' 
                    ? "Yolculuğumuz, yenilik, adanmışlık ve mükemmelliğe olan sarsılmaz bağlılığımızla işaretlendi. Bugün, tüm boyutlardaki işletmelere son teknoloji çözümler sunarak birçok kıtada müşterilere hizmet veriyoruz."
                    : "تميزت رحلتنا بالابتكار والتفاني والالتزام اللام wavering بالتفوق. اليوم، نخدم العملاء عبر قارات متعددة، ونوفر حلولاً متطورة لشركات من جميع الأحجام."}
                </p>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="flex -space-x-2">
                    <img 
                      src={abdulrahmanportrait}
                      alt="Team Member" 
                      className="w-10 h-10 rounded-full border-2 border-background"
                    />
                    <img 
                      src={ahmedportrait}
                      alt="Team Member" 
                      className="w-10 h-10 rounded-full border-2 border-background"
                    />
                    <img 
                      src={nouraportrait}
                      alt="Team Member" 
                      className="w-10 h-10 rounded-full border-2 border-background"
                    />
                    <img 
                      src={sarahportrait}
                      alt="Team Member" 
                      className="w-10 h-10 rounded-full border-2 border-background"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {language === 'en' ? "20+ Experts" : language === 'tr' ? "20+ Uzman" : "20+ خبير"}
                    </span> 
                    {language === 'en' ? " worldwide" : language === 'tr' ? " dünya çapında" : " حول العالم"}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'mission' && (
              <motion.div
                key="mission"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.mission.title')}</h3>
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('about.mission.mission')}</h4>
                    <p className="text-muted-foreground">
                      {t('about.mission.mission_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('about.mission.vision')}</h4>
                    <p className="text-muted-foreground">
                      {t('about.mission.vision_desc')}
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-secondary/30 rounded-lg border border-border/30">
                  <img 
                    src={newVision} 
                    alt="Vision Identity" 
                    className="w-full max-w-xs mx-auto"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'locations' && (
              <motion.div
                key="locations"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.locations.title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <img 
                        src={flagOfSyria} 
                        alt="Syria Flag" 
                        className="w-12 h-8 rounded-lg border border-border/30 shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t('about.locations.syria')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('about.locations.syria_address1')}<br />
                        {t('about.locations.syria_address2')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <img 
                        src={flagOfTurkey} 
                        alt="Turkey Flag" 
                        className="w-12 h-8 rounded-lg border border-border/30 shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t('about.locations.turkey')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('about.locations.turkey_address1')}<br />
                        {t('about.locations.turkey_address2')}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-muted-foreground">
                      {t('about.locations.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              {/* Floating elements */}
              <motion.div 
                variants={floatingVariants}
                className="absolute top-10 left-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center"
              >
                <span className="text-4xl font-bold text-primary">2018</span>
              </motion.div>
              
              <motion.div 
                variants={floatingVariants}
                className="absolute top-20 right-16 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-accent">2025</span>
              </motion.div>
              
              <motion.div 
                variants={floatingVariants}
                className="absolute bottom-16 left-20 w-28 h-28 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center"
              >
                <span className="text-3xl font-bold text-primary">∞</span>
              </motion.div>
              
              {/* Central image with floating effect */}
              <motion.div 
                variants={floatingVariants}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img 
                    src={newVision}
                    alt="One Door Vision" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                </div>
              </motion.div>
            </div>
            
            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="glass p-4 rounded-xl text-center border border-border/30">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Projects' : language === 'tr' ? 'Projeler' : 'مشاريع'}
                </div>
              </div>
              <div className="glass p-4 rounded-xl text-center border border-border/30">
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Clients' : language === 'tr' ? 'Müşteriler' : 'عملاء'}
                </div>
              </div>
              <div className="glass p-4 rounded-xl text-center border border-border/30">
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Countries' : language === 'tr' ? 'Ülkeler' : 'دول'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-24"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-center text-foreground mb-12"
          >
            {t('about.mission.core_values')}
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('about.mission.innovation'),
                description: t('about.mission.innovation_desc'),
                icon: "💡"
              },
              {
                title: t('about.mission.integrity'),
                description: t('about.mission.integrity_desc'),
                icon: "🛡️"
              },
              {
                title: t('about.mission.excellence'),
                description: t('about.mission.excellence_desc'),
                icon: "⭐"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-2xl border border-border/30 text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;