import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import mainjpg from "../assets/projects/ddos/main.jpg";
import loginjpg from "../assets/projects/ddos/LOG IN@3x.png";
import reelsjpg from "../assets/projects/ddos/Reels.png";
import reelsp1jpg from "../assets/projects/ddos/Reels p1.png";
import servicesjpg from "../assets/projects/ddos/Services.png";
import servicesDetailsjpg from "../assets/projects/ddos/Services Details.png";
import onboardingjpg from "../assets/projects/ddos/Onboding@3x.png";
import reelsp2jpg from "../assets/projects/ddos/Reels p2.png";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      introduction: {
        en: "Doooss offers a comprehensive solution for buying and selling cars between individuals and companies. The app directly and securely connects sellers with buyers, providing advanced tools for managing transactions and communications.",
        ar: "مقدمة: يقدم لكم تطبيق Doooss حلولاً متكاملة لبيع وشراء السيارات بين الأفراد والشركات، حيث يهدف إلى ربط البائعين بالمشترين بشكل مباشر وآمن، مع توفير أدوات متقدمة لإدارة المعاملات والمراسلات بين الطرفين.",
        tr: "Doooss, bireyler ve şirketler arasında araç alım satımı için kapsamlı bir çözüm sunar. Uygulama, satıcıları doğrudan ve güvenli bir şekilde alıcılarla bağlarken, işlemlerin ve iletişimlerin yönetimi için gelişmiş araçlar sağlar."
      },
      objectives: {
        en: [
          "Provide users with easy and convenient buying and selling of cars",
          "Save users time and effort in searching for cars",
          "Effectively manage orders and conversations between sellers and buyers",
          "Provide detailed reports on listed vehicles",
          "Offer special features for sellers to enhance their sales opportunities"
        ],
        ar: [
          "إتاحة الفرصة للمستخدمين لبيع وشراء السيارات بكل سهولة ويسر",
          "توفير الوقت والجهد على المستخدمين في عملية البحث عن السيارات",
          "إدارة الطلبات والمحادثات بين البائعين والمشترين بفعالية",
          "تقديم تقرير مفصل عن المركبات المعروضة",
          "توفير ميزات خاصة للبائعين لتعزيز فرص بيع سياراتهم"
        ],
        tr: [
          "Kullanıcılara kolay ve uygun araç alım satımı imkanı sunmak",
          "Kullanıcıların araç arama sürecinde zaman ve çaba kazandırmak",
          "Satıcılar ve alıcılar arasında sipariş ve konuşmaları etkili bir şekilde yönetmek",
          "Listelenen araçlar hakkında detaylı raporlar sunmak",
          "Satıcılara satış fırsatlarını artırmak için özel özellikler sunmak"
        ]
      },
      userFeatures: {
        en: [
          "User can log in via SMS",
          "Update personal information",
          "Instant messaging",
          "Request to purchase cars",
          "Search for cars",
          "Use map functionality",
          "Safe application usage",
          "Check order status",
          "Communicate with sellers"
        ],
        ar: [
          "User يمكن تسجيل الدخول عبر SMS",
          "تحديث البيانات الشخصية",
          "محادثات فورية",
          "طلب شراء السيارات",
          "البحث عن السيارات",
          "استخدام الخريطة",
          "الاستخدام الآمن للتطبيق",
          "التحقق من حالة الطلب",
          "التواصل مع البائعين"
        ],
        tr: [
          "Kullanıcı SMS ile giriş yapabilir",
          "Kişisel bilgileri güncelleme",
          "Anında mesajlaşma",
          "Araç satın alma talebi",
          "Araç arama",
          "Harita işlevselliğini kullanma",
          "Güvenli uygulama kullanımı",
          "Sipariş durumunu kontrol etme",
          "Satıcılarla iletişim kurma"
        ]
      },
      dealerFeatures: {
        en: [
          "Display cars for sale clearly",
          "Advertisements",
          "Manage orders and conversations",
          "Edit or delete account",
          "Add new cars",
          "Edit car details",
          "Add car photos (limited number)",
          "Add car specifications (color, engine, etc.)"
        ],
        ar: [
          "عرض سياراته للبيع بوضوح",
          "الإعلانات",
          "إدارة الطلبات والمحادثات",
          "تعديل أو حذف حسابه",
          "إضافة سيارات جديدة",
          "تحرير تفاصيل السيارة",
          "إضافة صور للسيارة (عدد محدود)",
          "إضافة مواصفات السيارة (مثل اللون، المحرك...)"
        ],
        tr: [
          "Satıştaki arabaları net bir şekilde görüntüleme",
          "Reklamlar",
          "Sipariş ve konuşmaları yönetme",
          "Hesabı düzenleme veya silme",
          "Yeni arabalar ekleme",
          "Araba detaylarını düzenleme",
          "Araba fotoğrafları ekleme (sınırlı sayıda)",
          "Araba özellikleri ekleme (renk, motor, vb.)"
        ]
      },
      buyerFeatures: {
        en: [
          "View cars from existing sellers",
          "Browse available cars"
        ],
        ar: [
          "عرض سيارات البائعين المتواجدين",
          "استعراض السيارات المتاحة"
        ],
        tr: [
          "Mevcut satıcılardan arabaları görüntüleme",
          "Mevcut arabalara göz atma"
        ]
      },
      additions: {
        en: [
          "Add new cars to favorites list",
          "Locate seller on map",
          "Add new cars to purchase list"
        ],
        ar: [
          "إضافة سيارات جديدة إلى قائمة المفضلة",
          "تحديد موقع البائع على الخريطة",
          "إضافة سيارات جديدة إلى قائمة المشتريات"
        ],
        tr: [
          "Yeni arabaları favori listesine ekleme",
          "Satıcıyı haritada bulma",
          "Yeni arabaları satın alma listesine ekleme"
        ]
      },
      mainFeatures: {
        en: [
          "Easy and fast buying and selling of cars",
          "Easy to use"
        ],
        ar: [
          "إمكانية بيع وشراء السيارات بسهولة وسرعة",
          "سهولة الاستخدام"
        ],
        tr: [
          "Kolay ve hızlı araç alım satımı",
          "Kullanımı kolay"
        ]
      },
      reelsFeatures: {
        en: [
          "Quick display of cars",
          "Display specifications and photos",
          "Show car specifications (color, engine, etc.)"
        ],
        ar: [
          "عرض السيارات بسرعة",
          "عرض المواصفات والصور",
          "عرض مواصفات السيارة (اللون، المحرك...)"
        ],
        tr: [
          "Arabaların hızlı görüntülenmesi",
          "Özelliklerin ve fotoğrafların görüntülenmesi",
          "Araba özelliklerinin görüntülenmesi (renk, motor, vb.)"
        ]
      },
      userSpecificFeatures: {
        en: [
          "View purchased or sold cars",
          "View favorite cars",
          "View purchase list"
        ],
        ar: [
          "عرض السيارات التي تم شراؤها أو بيعها",
          "عرض السيارات المفضلة",
          "عرض قائمة المشتريات"
        ],
        tr: [
          "Satın alınan veya satılan arabaları görüntüleme",
          "Favori arabaları görüntüleme",
          "Satın alma listesini görüntüleme"
        ]
      },
      generalFeatures: {
        en: [
          "Fast loading and easy to use",
          "Easy car search",
          "Display seller locations via GPS",
          "Easy communication with sellers"
        ],
        ar: [
          "سرعة التحميل وسهولة الاستخدام",
          "سهولة البحث عن السيارات",
          "عرض مواقع البائعين عبر GPS",
          "سهولة التواصل مع البائعين"
        ],
        tr: [
          "Hızlı yükleme ve kullanımı kolay",
          "Kolay araç arama",
          "GPS aracılığıyla satıcı konumlarını görüntüleme",
          "Satıcılarla kolay iletişim"
        ]
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

  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    if (!project) {
      // If project not found, navigate to 404 page
      navigate('/not-found');
    }
  }, [project, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/#projects');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!project) return;
    
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!project) {
    return null;
  }

  const goBack = () => {
    navigate('/#projects');
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={goBack}
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            {language === 'ar' ? 'العودة إلى المشاريع' : language === 'tr' ? 'Projelere Geri Dön' : 'Back to Projects'}
          </button>
          <button
            onClick={goBack}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant border border-border"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en}
            </h1>
            <p className="text-primary font-medium">
              {language === 'ar' ? project.tagline.ar : language === 'tr' ? project.tagline.tr : project.tagline.en}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery - Desktop */}
            <div className="lg:w-7/12">
              <div className="relative bg-secondary/10 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={project.images[currentImageIndex]}
                    alt={`${language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en} - Image ${currentImageIndex + 1}`}
                    className="w-full h-96 md:h-[500px] object-contain"
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-primary w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="lg:w-5/12 overflow-y-auto max-h-[600px]">
              <div className="space-y-6">
                {/* Introduction */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {language === 'ar' ? 'مقدمة' : language === 'tr' ? 'Giriş' : 'Introduction'}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'ar' ? project.introduction.ar : language === 'tr' ? project.introduction.tr : project.introduction.en}
                  </p>
                </div>
                
                {/* Objectives */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {language === 'ar' ? 'أهداف التطبيق' : language === 'tr' ? 'Uygulama Hedefleri' : 'Application Objectives'}
                  </h2>
                  <ul className="space-y-2">
                    {(language === 'ar' ? project.objectives.ar : language === 'tr' ? project.objectives.tr : project.objectives.en).map((objective, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Sections - Full Width */}
          <div className="mt-12 space-y-8">
            {/* User Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'خصائص المستخدمين' : language === 'tr' ? 'Kullanıcı Özellikleri' : 'User Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.userFeatures.ar : language === 'tr' ? project.userFeatures.tr : project.userFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dealer Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'محتويات صفحة بائع التطبيق Dealer' : language === 'tr' ? 'Bayi Uygulama Sayfası İçeriği' : 'Dealer Application Page Contents'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.dealerFeatures.ar : language === 'tr' ? project.dealerFeatures.tr : project.dealerFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Buyer Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'خصائص المستخدمين (المشترين)' : language === 'tr' ? 'Alıcı Özellikleri' : 'Buyer Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.buyerFeatures.ar : language === 'tr' ? project.buyerFeatures.tr : project.buyerFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additions */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'الإضافات' : language === 'tr' ? 'Eklemeler' : 'Additions'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.additions.ar : language === 'tr' ? project.additions.tr : project.additions.en).map((addition, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{addition}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'أهم المميزات' : language === 'tr' ? 'Ana Özellikler' : 'Main Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.mainFeatures.ar : language === 'tr' ? project.mainFeatures.tr : project.mainFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reels Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'الميزات الخاصة بالسيارات Reels' : language === 'tr' ? 'Reels Araç Özellikleri' : 'Reels Car Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.reelsFeatures.ar : language === 'tr' ? project.reelsFeatures.tr : project.reelsFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* User Specific Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'الميزات الخاصة بالمستخدمين' : language === 'tr' ? 'Kullanıcıya Özel Özellikler' : 'User Specific Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.userSpecificFeatures.ar : language === 'tr' ? project.userSpecificFeatures.tr : project.userSpecificFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* General Features */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {language === 'ar' ? 'الخصائص العامة' : language === 'tr' ? 'Genel Özellikler' : 'General Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'ar' ? project.generalFeatures.ar : language === 'tr' ? project.generalFeatures.tr : project.generalFeatures.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;