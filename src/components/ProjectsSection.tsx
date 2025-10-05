import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import mainjpg from "../assets/projects/ddos/main.jpg";
import loginjpg from "../assets/projects/ddos/LOG IN@3x.png";
import reelsjpg from "../assets/projects/ddos/Reels.png";
import reelsp1jpg from "../assets/projects/ddos/Reels p1.png";
import servicesjpg from "../assets/projects/ddos/Services.png";
import servicesDetailsjpg from "../assets/projects/ddos/Services Details.png";
import onboardingjpg from "../assets/projects/ddos/Onboding@3x.png";
import reelsp2jpg from "../assets/projects/ddos/Reels p2.png";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Project data with detailed structure
  const projects = [
    {
      id: "1",
      title: {
        en: "Doooss Car Marketplace",
        ar: "تطبيق Doooss لبيع وشراء السيارات",
        tr: "Doooss Araç Pazarı"
      },
      tagline: {
        en: "Revolutionizing the automotive marketplace",
        ar: "إعادة تشكيل سوق السيارات",
        tr: "Otomotiv pazarını devrim yaratmak"
      },
      images: [
        mainjpg,
        loginjpg,
        onboardingjpg,
        reelsjpg,
        reelsp1jpg,
        reelsp2jpg,
        servicesjpg,
        servicesDetailsjpg
      ]
    }
  ];

  const navigateToProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'مشاريعنا' : language === 'tr' ? 'Projelerimiz' : 'Our Projects'}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6"
            style={{ lineHeight: '1.4' }}
          >
            {language === 'ar' 
              ? 'أعمالنا المتميزة' 
              : language === 'tr' 
              ? 'Öne Çıkan Projelerimiz' 
              : 'Featured Projects'}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? 'اكتشف مجموعة من المشاريع المبتكرة التي صممناها وطورناها لعملائنا' 
              : language === 'tr' 
              ? 'Müşterilerimiz için tasarladığımız ve geliştirdiğimiz yenilikçi projeler koleksiyonunu keşfedin' 
              : 'Discover our collection of innovative projects we\'ve designed and developed for our clients'}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => navigateToProject(project.id)}
            >
              <div className="glass rounded-2xl overflow-hidden border border-border/30 transition-all duration-500 hover:shadow-xl hover:border-primary/30 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.images[0]} 
                    alt={language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">
                        {language === 'ar' ? 'عرض التفاصيل' : language === 'tr' ? 'Detayları Görüntüle' : 'View Details'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === 'ar' ? project.tagline.ar : language === 'tr' ? project.tagline.tr : project.tagline.en}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {language === 'ar' ? 'تطبيق موبايل' : language === 'tr' ? 'Mobil Uygulama' : 'Mobile App'}
                    </span>
                    <div className="flex -space-x-2">
                      {project.images.slice(0, 3).map((_, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                          <span className="text-xs text-secondary-foreground">+{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;