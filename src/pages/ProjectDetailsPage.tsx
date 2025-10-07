import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ZoomIn } from 'lucide-react';
import mainjpg from "../assets/projects/ddos/main.jpg";
import loginjpg from "../assets/projects/ddos/LOG IN@3x.png";
import reelsjpg from "../assets/projects/ddos/Reels.png";
import reelsp1jpg from "../assets/projects/ddos/Reels p1.png";
import servicesjpg from "../assets/projects/ddos/Services.png";
import servicesDetailsjpg from "../assets/projects/ddos/Services Details.png";
import onboardingjpg from "../assets/projects/ddos/Onboding@3x.png";
import reelsp2jpg from "../assets/projects/ddos/Reels p2.png";
import cleanomain from "../assets/projects/cleano/main.png";
import cleanohome from "../assets/projects/cleano/Home Screen.png";
import cleano2profile from "../assets/projects/cleano/2-Profile Screen.png";
import cleanocard from "../assets/projects/cleano/Card Screen.png";
import cleanoframe1 from "../assets/projects/cleano/Frame 1984077913.png";
import cleanoframe2 from "../assets/projects/cleano/Frame 1984077917 (1).png";
import cleanoframe3 from "../assets/projects/cleano/Frame 1984077918.png";
import cleanoframe4 from "../assets/projects/cleano/Frame 1984077920.png";
import cleanoframe5 from "../assets/projects/cleano/Frame 1984077934.png";
import cleanoframe6 from "../assets/projects/cleano/Frame 1984077935.png";
import cleanoprice from "../assets/projects/cleano/Price Screen.png";
import cleanomap from "../assets/projects/cleano/map View.png";
// Add Syntra imports
import syntramain from "../assets/projects/syntra/main.png";
import syntra0 from "../assets/projects/syntra/0.png";
import syntra1 from "../assets/projects/syntra/1.png";
import syntra2 from "../assets/projects/syntra/2.png";
import syntra3 from "../assets/projects/syntra/3.png";
import syntra4 from "../assets/projects/syntra/4.png";
import syntra5 from "../assets/projects/syntra/5.png";
import syntra6 from "../assets/projects/syntra/6.png";
import syntra7 from "../assets/projects/syntra/7.png";
import syntra8 from "../assets/projects/syntra/8.png";
import syntra9 from "../assets/projects/syntra/9.png";
import syntra10 from "../assets/projects/syntra/10.png";
import syntra12 from "../assets/projects/syntra/12.png";
import syntra22 from "../assets/projects/syntra/22.png";
import syntra2123 from "../assets/projects/syntra/2123.png";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          " 가능성 بيع وشراء السيارات بسهولة وسرعة",
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
    },
    {
      id: "2",
      title: {
        en: "Cleano Laundry Services",
        ar: "تطبيق كلينو لخدمات الغسيل",
        tr: "Cleano Çamaşır Yıkama Hizmetleri"
      },
      tagline: {
        en: "Revolutionizing laundry and cleaning services",
        ar: "إعادة تشكيل خدمات الغسيل والتنظيف",
        tr: "Çamaşır ve temizlik hizmetlerini devrim yaratmak"
      },
      introduction: {
        en: "Cleano offers a comprehensive solution for laundry and cleaning services, directly connecting customers with laundry shops in a seamless way, providing advanced tools for managing orders, payments, and communication between both parties.",
        ar: "مقدمة: يقدم لكم تطبيق كلينو حلاً متكاملاً لخدمات الغسيل والتلميع، حيث يهدف إلى ربط العملاء بمحلات الغسيل بشكل مباشر وسلس، مع توفير أدوات متقدمة لإدارة الطلبات والدفع والتواصل بين الطرفين.",
        tr: "Cleano, çamaşır ve temizlik hizmetleri için kapsamlı bir çözüm sunar. Müşterileri çamaşırhanelerle doğrudan ve sorunsuz bir şekilde bağlarken, siparişlerin, ödemelerin ve iletişimin yönetimi için gelişmiş araçlar sağlar."
      },
      objectives: {
        en: [
          "Make it easy for customers to get laundry services with just a few clicks",
          "Save customers time and effort in searching for reliable and quality laundries",
          "Manage orders and their execution stages clearly and effectively",
          "Provide various and secure payment options suitable for all users",
          "Offer special packages and promotions that increase customers' chances of saving money"
        ],
        ar: [
          "تسهيل عملية حصول العملاء على خدمات الغسيل من خلال بضع نقرات",
          "توفير الوقت والجهد على العملاء في البحث عن مغاسل موثوقة وذات جودة",
          "إدارة الطلبات ومراحل تنفيذها بشكل واضح وفعال",
          "تقديم خيارات دفع متنوعة وآمنة تناسب جميع المستخدمين",
          "توفير باقات وعروض خاصة تزيد من فرص توفير المال bagi العملاء"
        ],
        tr: [
          "Müşterilerin çamaşır hizmetlerini birkaç tıklamayla almasını kolaylaştırmak",
          "Müşterilerin güvenilir ve kaliteli çamaşırhaneleri aramada zaman ve çaba kazanmasını sağlamak",
          "Siparişleri ve uygulama aşamalarını açık ve etkili bir şekilde yönetmek",
          "Tüm kullanıcılar için çeşitli ve güvenli ödeme seçenekleri sunmak",
          "Müşterilerin para tasarrufu yapma şansını artıran özel paketler ve promosyonlar sunmak"
        ]
      },
      userFeatures: {
        en: [
          "Easy registration and login",
          "Update profile and personal information",
          "Search for laundries and view their lists",
          "Use filters (open now, top rated, closest to you)",
          "View details of each laundry and the services it provides",
          "Create new laundry orders and choose the service type",
          "Calculate the final price of the order (includes service, delivery, and discounts)",
          "Choose payment method (credit card, cash on delivery)",
          "Subscribe to gold, silver, or regular packages",
          "Track order status and communicate directly with the laundry (WhatsApp, call)"
        ],
        ar: [
          "التسجيل وتسجيل الدخول بسهولة",
          "تحديث الملف الشخصي والمعلومات الشخصية",
          "البحث عن المغاسل وعرض قوائمها",
          "استخدام الفلاتر (مفتوح الآن، الأعلى تقييمًا، الأقرب إليك)",
          "عرض تفاصيل كل مغسلة والخدمات التي تقدمها",
          "إنشاء طلبات غسيل جديدة واختيار نوع الخدمة",
          "حساب السعر النهائي للطلب (يشمل الخدمة، التوصيل، والخصومات)",
          "اختيار طريقة الدفع (بطاقة ائتمان، نقداً عند الاستلام)",
          "الاشتراك في باقات ذهبية أو فضية أو عادية",
          "متابعة حالة الطلب والتواصل مع المغسلة مباشرة (واتساب، اتصال)"
        ],
        tr: [
          "Kolay kayıt ve giriş",
          "Profil ve kişisel bilgileri güncelleme",
          "Çamaşırhaneleri arama ve listelerini görüntüleme",
          "Filtreleri kullanma (şimdi açık, en yüksek puanlı, size en yakın)",
          "Her çamaşırhanenin detaylarını ve sunduğu hizmetleri görüntüleme",
          "Yeni çamaşır siparişleri oluşturma ve hizmet türünü seçme",
          "Siparişin nihai fiyatını hesaplama (hizmet, teslimat ve indirimleri içerir)",
          "Ödeme yöntemi seçme (kredi kartı, kapıda ödeme)",
          "Altın, gümüş veya normal paketlere abone olma",
          "Sipariş durumunu takip etme ve çamaşırhaneyle doğrudan iletişim (WhatsApp, arama)"
        ]
      },
      dealerFeatures: {
        en: [
          "View and manage current orders",
          "Update order status (receiving, washing, ready for delivery, etc.)",
          "View total and monthly revenue of the laundry",
          "Manage laundry information and services provided",
          "Add and modify services and prices",
          "Generate and download invoices (PDF) for orders",
          "Manage communication with customers"
        ],
        ar: [
          "عرض الطلبات الحالية وإدارتها",
          "تحديث حالة الطلب (قيد الاستلام، قيد الغسيل، جاهز للتسليم، إلخ)",
          "عرض الإيرادات الإجمالية والشهرية للمغسلة",
          "إدارة معلومات المغسلة والخدمات المقدمة",
          "إضافة وتعديل الخدمات والأسعار",
          "توليد وتحميل الفواتير (PDF) للطلبات",
          "إدارة التواصل مع العملاء"
        ],
        tr: [
          "Mevcut siparişleri görüntüleme ve yönetme",
          "Sipariş durumunu güncelleme (teslim alma, yıkama, teslime hazır, vb.)",
          "Çamaşırhanenin toplam ve aylık gelirlerini görüntüleme",
          "Çamaşırhane bilgilerini ve sunulan hizmetleri yönetme",
          "Hizmetleri ve fiyatları ekleme ve değiştirme",
          "Siparişler için faturalar (PDF) oluşturma ve indirme",
          "Müşterilerle iletişimi yönetme"
        ]
      },
      buyerFeatures: {
        en: [
          "View a list of available laundries",
          "Browse services and prices for each laundry",
          "View ratings and reviews of laundries"
        ],
        ar: [
          "عرض قائمة بالمغاسل المتاحة",
          "استعراض الخدمات والأسعار لكل مغسلة",
          "الاطلاع على تقييمات وتقييمات المغاسل"
        ],
        tr: [
          "Mevcut çamaşırhanelerin listesini görüntüleme",
          "Her çamaşırhanenin hizmetlerini ve fiyatlarını inceleme",
          "Çamaşırhanelerin puanlarını ve incelemelerini görüntüleme"
        ]
      },
      additions: {
        en: [
          "Add favorite laundries to favorites list",
          "Locate laundry on map",
          "Track order status step by step",
          "Save payment data for faster experience in the future"
        ],
        ar: [
          "إضافة المغاسل المفضلة إلى قائمة المفضلة",
          "تحديد موقع المغسلة على الخريطة",
          "تتبع حالة الطلب خطوة بخطوة",
          "حفظ بيانات الدفع لتجربة أسرع في المستقبل"
        ],
        tr: [
          "Favori çamaşırhaneleri favori listesine ekleme",
          "Çamaşırhanenin konumunu haritada bulma",
          "Sipariş durumunu adım adım takip etme",
          "Gelecekte daha hızlı deneyim için ödeme verilerini kaydetme"
        ]
      },
      mainFeatures: {
        en: [
          "Ability to request laundry service easily and quickly",
          "Simple and easy-to-use interface",
          "Flexible and secure payment options",
          "Rating and review system to ensure quality"
        ],
        ar: [
          "إمكانية طلب خدمة الغسيل بسهولة وسرعة",
          "واجهة بسيطة وسهلة الاستخدام",
          "خيارات دفع مرنة وآمنة",
          "نظام تقييم ومراجعات لضمان الجودة"
        ],
        tr: [
          "Çamaşır hizmeti talep etme kolaylığı ve hızı",
          "Basit ve kullanımı kolay arayüz",
          "Esnek ve güvenli ödeme seçenekleri",
          "Kaliteyi garanti altına almak için derecelendirme ve inceleme sistemi"
        ]
      },
      serviceFeatures: {
        en: [
          "Quick display of available services (normal wash, dry, ironing, etc.)",
          "Display prices and details of each service",
          "Calculate final price instantly and transparently"
        ],
        ar: [
          "عرض سريع للخدمات المتاحة (غسيل عادي، جاف، كي، إلخ)",
          "عرض الأسعار والتفاصيل الخاصة بكل خدمة",
          "حساب السعر النهائي بشكل فوري وشفاف"
        ],
        tr: [
          "Mevcut hizmetlerin hızlı görüntülenmesi (normal yıkama, kuru temizleme, ütü, vb.)",
          "Her hizmetin fiyat ve detaylarının görüntülenmesi",
          "Nihai fiyatın anında ve şeffaf şekilde hesaplanması"
        ]
      },
      userSpecificFeatures: {
        en: [
          "View history of previous and current orders",
          "View list of favorite laundries",
          "Track order status in real time"
        ],
        ar: [
          "عرض سجل الطلبات السابقة والحالية",
          "عرض قائمة المغاسل المفضلة",
          "تتبع حالة الطلب في الوقت الفعلي"
        ],
        tr: [
          "Önceki ve mevcut siparişlerin geçmişini görüntüleme",
          "Favori çamaşırhanelerin listesini görüntüleme",
          "Sipariş durumunu gerçek zamanlı olarak takip etme"
        ]
      },
      generalFeatures: {
        en: [
          "Fast performance and easy browsing",
          "Smart search and advanced filters to find the best laundries",
          "Accurately locate laundries via maps",
          "Direct and fast communication channels with laundries"
        ],
        ar: [
          "سرعة في الأداء وسهولة في التصفح",
          "بحث ذكي وفلاتر متقدمة للعثور على أفضل المغاسل",
          "تحديد مواقع المغاسل بدقة عبر الخرائط",
          "قنوات اتصال مباشرة وسريعة مع المغاسل"
        ],
        tr: [
          "Hızlı performans ve kolay gezinme",
          "En iyi çamaşırhaneleri bulmak için akıllı arama ve gelişmiş filtreler",
          "Çamaşırhanelerin konumlarını haritalar aracılığıyla doğru bir şekilde belirleme",
          "Çamaşırhanelerle doğrudan ve hızlı iletişim kanalları"
        ]
      },
      images: [
        cleanomain,
        cleanohome,
        cleano2profile,
        cleanocard,
        cleanoprice,
        cleanomap,
        cleanoframe1,
        cleanoframe2,
        cleanoframe3,
        cleanoframe4,
        cleanoframe5,
        cleanoframe6
      ]
    },
    {
      id: "3",
      title: {
        en: "Syntra Business Management System",
        ar: "نظام سِنترا لإدارة الشركات",
        tr: "Syntra Kurumsal Yönetim Sistemi"
      },
      tagline: {
        en: "Integrated solution for business management",
        ar: "حل متكامل لإدارة الشركات والمؤسسات",
        tr: "Kurumsal yönetim için entegre çözüm"
      },
      introduction: {
        en: "Syntra offers a comprehensive solution for business and enterprise management, aiming to integrate all business and administrative processes into a unified system that ensures efficiency, accuracy, and complete control over all aspects of work.",
        ar: "يقدم لكم نظام سِنترا (Syntra) حلاً متكاملاً لإدارة الشركات والمؤسسات، حيث يهدف إلى دمج جميع العمليات التجارية والإدارية في نظام موحد يضمن الكفاءة، الدقة، والتحكم الكامل في كافة جوانب العمل.",
        tr: "Syntra, kurumsal ve işletme yönetimi için kapsamlı bir çözüm sunar. Tüm ticari ve idari süreçleri verimlilik, doğruluk ve işin tüm yönleri üzerinde tam kontrol sağlayan birleşik bir sisteme entegre etmeyi amaçlar."
      },
      objectives: {
        en: [
          "Centralize management of all company processes on a single platform",
          "Simplify business processes and financial transactions",
          "Provide accurate and live data for informed administrative decisions",
          "Enhance communication and collaboration between different departments",
          "Achieve integration between sales, purchases, inventory, and human resources"
        ],
        ar: [
          "مركزة إدارة كافة عمليات الشركة في منصة واحدة",
          "تبسيط العمليات التجارية والمعاملات المالية",
          "توفير بيانات دقيقة وحية لاتخاذ القرارات الإدارية المستنيرة",
          "تعزيز التواصل والتعاون بين الإدارات المختلفة",
          "تحقيق التكامل بين المبيعات، المشتريات، المخزون، والموارد البشرية"
        ],
        tr: [
          "Tüm şirket süreçlerini tek bir platformda merkezileştirme",
          "İş süreçlerini ve finansal işlemleri basitleştirme",
          "Bilinçli idari kararlar almak için doğru ve canlı veri sağlama",
          "Farklı departmanlar arasında iletişimi ve işbirliğini geliştirme",
          "Satışlar, satın almalar, envanter ve insan kaynakları arasında entegrasyon sağlama"
        ]
      },
      mainFeatures: {
        en: [
          "Centralization: A unified system that connects all company departments",
          "Flexibility: Customizable to suit different business needs",
          "Accuracy: Reduces human errors in calculations and data entry",
          "Integration: Seamless integration between all units to create a cohesive workflow",
          "Security: Protects company and customer data through precise user permissions",
          "Real-time Support: Instant notifications keep everyone informed"
        ],
        ar: [
          "المركزية: نظام موحد يربط جميع إدارات الشركة",
          "المرونة: قابل للتخصيص ليناسب احتياجات العمل المختلفة",
          "الدقة: يقلل من الأخطاء البشرية في العمليات الحسابية وإدخال البيانات",
          "التكامل: تكامل سلس بين جميع الوحدات لخلق تدفق عمل متجانس",
          "الأمان: حماية بيانات الشركة والعميل من خلال صلاحيات مستخدمين دقيقة",
          "الدعم اللحظي: إشعارات فورية تبقي الجميع على اطلاع دائم"
        ],
        tr: [
          "Merkezileştirme: Tüm şirket bölümlerini bağlayan birleşik bir sistem",
          "Esneklik: Farklı iş ihtiyaçlarına uyacak şekilde özelleştirilebilir",
          "Doğruluk: Hesaplama ve veri girişindeki insan hatalarını azaltır",
          "Entegrasyon: Tutarsız bir iş akışı yaratmak için tüm birimler arasında sorunsuz entegrasyon",
          "Güvenlik: Kesin kullanıcı izinleri aracılığıyla şirket ve müşteri verilerini korur",
          "Gerçek zamanlı destek: Anlık bildirimler herkesi bilgilendirir"
        ]
      },
      modules: {
        en: [
          "CRM Service: Complete customer relationship management, from following up potential customers to converting them into permanent customers, with a complete record of interactions and transactions",
          "Product & Inventory Service: Complete control over products, tracking inventory levels, and managing the movement of goods (in and out) to avoid shortages or overstocking",
          "Order Service: Following the entire order journey, from receiving it from the customer, to preparing it, shipping it, and delivering it finally",
          "Rent Service: Managing rental contracts and processes for products or equipment, in terms of following rental duration, status, and revenues",
          "Refund Service: Processing product return requests and customer refunds in an organized and clear manner",
          "Invoice Service: Creating and generating electronic invoices for customers instantly and organized, with the ability to track payment status",
          "Safe Service: Recording and tracking all cash financial transactions in the company, from revenues and expenses, to maintain treasury balance",
          "Delivery Service: Coordinating and organizing order delivery processes to customers, and following up on shipping status until delivery is completed",
          "Report Service: Providing a comprehensive set of analytical reports on sales, performance, finance, and inventory to support the decision-making process",
          "HR Service: Managing employee affairs in terms of personal data, salaries, vacations, and performance evaluation",
          "Auth Service: Ensuring system security through user permission management and granting them different access permissions according to their roles",
          "Payment Service: Integrating and facilitating the process of collecting payments from customers through multiple channels, and following up on payment status",
          "Telegram Service: Sending instant notifications to users or management about important events in the system (such as new orders, inventory alerts) via Telegram"
        ],
        ar: [
          "وحدة العملاء (CRM Service): إدارة علاقات العملاء بشكل كامل، من متابعة العملاء المحتملين إلى تحويلهم لعملاء دائمين، مع حفظ سجل كامل للتفاعلات والمعاملات",
          "وحدة إدارة المنتجات والمخزون (Product & Inventory Service): التحكم الكامل في المنتجات، ومتابعة مستويات المخزون، وإدارة حركة البضائع (دخولاً وخروجاً) لتجنب النفاد أو التكدس",
          "وحدة إدارة الطلبات (Order Service): متابعة رحلة الطلب بالكامل، من استلامه من العميل، إلى تحضيره، وشحنه، وحتى تسليمه النهائي",
          "وحدة التأجير (Rent Service): إدارة عقود وعمليات تأجير المنتجات أو المعدات، من حيث متابعة مدة التأجير، الحالة، والإيرادات",
          "وحدة المرتجعات والمبالغ المستردة (Refund Service): معالجة طلبات إرجاع المنتجات واسترداد الأموال للعملاء بشكل منظم وواضح",
          "وحدة الفواتير (Invoice Service): إنشاء وتوليد الفواتير الإلكترونية للعملاء بشكل فوري ومنظم، مع إمكانية تتبع حالة الدفع",
          "وحدة الخزينة (Safe Service): تسجيل ومتابعة جميع الحركة المالية النقدية في الشركة، من إيرادات ومصروفات، للحفاظ على توازن الخزينة",
          "وحدة التوصيل (Delivery Service): تنسيق وتنظيم عمليات تسليم الطلبات للعملاء، ومتابعة حالة الشحن حتى اكتمال التسليم",
          "وحدة التقارير (Report Service): توفير مجموعة شاملة من التقارير التحليلية عن المبيعات، الأداء، المالية، والمخزون لدعم عملية اتخاذ القرار",
          "وحدة الموارد البشرية (HR Service): إدارة شؤون الموظفين من حيث البيانات الشخصية، الرواتب، الإجازات، وتقييم الأداء",
          "وحدة الأمان والمصادقة (Auth Service): ضمان أمان النظام من خلال إدارة صلاحيات المستخدمين ومنحهم صلاحيات دخول مختلفة تتناسب مع أدوارهم",
          "وحدة الدفع (Payment Service): دمج وتسهيل عمليات تحصيل المدفوعات من العملاء عبر قنوات متعددة، ومتابعة حالة المدفوعات",
          "وحدة التليجرام (Telegram Service): إرسال إشعارات فورية للمستخدمين أو الإدارة حول الأحداث الهامة في النظام (مثل طلبات جديدة، تنبيهات المخزون) عبر Telegram"
        ],
        tr: [
          "CRM Hizmeti: Potansiyel müşterilerin takibinden kalıcı müşterilere dönüştürmeye kadar eksiksiz müşteri ilişkileri yönetimi, etkileşimlerin ve işlemlerin eksiksiz kaydıyla",
          "Ürün ve Envanter Hizmeti: Ürünlere tam kontrol, envanter seviyelerini takip etme ve mal hareketlerini (giriş ve çıkış) eksiklik veya fazlalıktan kaçınmak için yönetme",
          "Sipariş Hizmeti: Müşteriden alınan siparişin hazırlanmasından, sevkiyatına kadar tüm sipariş yolculuğunu takip etme ve nihayetinde teslim etme",
          "Kiralama Hizmeti: Ürün veya ekipman kiralama sözleşmelerini ve işlemlerini, kiralama süresini, durumunu ve gelirleri takip etme açısından yönetme",
          "İade Hizmeti: Ürün iade taleplerini ve müşteri iadelerini düzenli ve net bir şekilde işleme",
          "Fatura Hizmeti: Anında ve organize şekilde müşteriler için elektronik faturalar oluşturma ve üretme, ödeme durumunu takip etme yeteneğiyle",
          "Kasa Hizmeti: Gelirler ve giderlerden kasadaki dengeyi korumak için şirketteki tüm nakit finansal işlemleri kaydetme ve takip etme",
          "Teslimat Hizmeti: Müşterilere sipariş teslimat süreçlerini koordine etme ve düzenleme, ve teslimat tamamlanana kadar sevkiyat durumunu takip etme",
          "Rapor Hizmeti: Karar verme sürecini desteklemek için satışlar, performans, finans ve envanter hakkında kapsamlı bir analitik rapor seti sağlama",
          "İK Hizmeti: Kişisel veriler, maaşlar, tatiller ve performans değerlendirmesi açısından çalışan işlerini yönetme",
          "Yetkilendirme Hizmeti: Kullanıcı izin yönetimi aracılığıyla sistem güvenliğini sağlama ve onlara rollerine göre farklı erişim izinleri verme",
          "Ödeme Hizmeti: Müşterilerden çoklu kanallar aracılığıyla ödeme toplama sürecini entegre etme ve kolaylaştırma, ve ödeme durumunu takip etme",
          "Telegram Hizmeti: Telegram aracılığıyla sistemdeki önemli olaylar (yeni siparişler, envanter uyarıları gibi) hakkında kullanıcılara veya yönetime anlık bildirimler gönderme"
        ]
      },
      images: [
        syntramain,
        syntra0,
        syntra1,
        syntra2,
        syntra3,
        syntra4,
        syntra5,
        syntra6,
        syntra7,
        syntra8,
        syntra9,
        syntra10,
        syntra12,
        syntra22,
        syntra2123
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
        if (isModalOpen) {
          closeImageModal();
        } else {
          navigate('/#projects');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  if (!project) {
    return null;
  }

  const goBack = () => {
    navigate('/#projects');
  };

  // Split images into pairs for the alternating layout
  const imagePairs = [];
  for (let i = 0; i < project.images.length; i += 2) {
    imagePairs.push(project.images.slice(i, i + 2));
  }

  // Content sections data - Updated to handle all projects properly
  const contentSections = [
    {
      title: language === 'ar' ? 'مقدمة' : language === 'tr' ? 'Giriş' : 'Introduction',
      content: language === 'ar' ? project.introduction.ar : language === 'tr' ? project.introduction.tr : project.introduction.en
    },
    {
      title: language === 'ar' ? 'أهداف النظام' : language === 'tr' ? 'Sistem Hedefleri' : 'System Objectives',
      content: language === 'ar' ? project.objectives.ar : language === 'tr' ? project.objectives.tr : project.objectives.en,
      isList: true
    }
  ];

  // Add project-specific sections
  if (project.id === "1") {
    // Doooss project sections
    contentSections.push(
      {
        title: language === 'ar' ? 'خصائص المستخدمين' : language === 'tr' ? 'Kullanıcı Özellikleri' : 'User Features',
        content: language === 'ar' ? project.userFeatures.ar : language === 'tr' ? project.userFeatures.tr : project.userFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'محتويات صفحة بائع التطبيق Dealer' : language === 'tr' ? 'Bayi Uygulama Sayfası İçeriği' : 'Dealer Application Page Contents',
        content: language === 'ar' ? project.dealerFeatures.ar : language === 'tr' ? project.dealerFeatures.tr : project.dealerFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'خصائص المستخدمين (المشترين)' : language === 'tr' ? 'Alıcı Özellikleri' : 'Buyer Features',
        content: language === 'ar' ? project.buyerFeatures.ar : language === 'tr' ? project.buyerFeatures.tr : project.buyerFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الإضافات' : language === 'tr' ? 'Eklemeler' : 'Additions',
        content: language === 'ar' ? project.additions.ar : language === 'tr' ? project.additions.tr : project.additions.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'أهم المميزات' : language === 'tr' ? 'Ana Özellikler' : 'Main Features',
        content: language === 'ar' ? project.mainFeatures.ar : language === 'tr' ? project.mainFeatures.tr : project.mainFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الميزات الخاصة بالسيارات Reels' : language === 'tr' ? 'Reels Araç Özellikleri' : 'Reels Car Features',
        content: language === 'ar' ? project.reelsFeatures.ar : language === 'tr' ? project.reelsFeatures.tr : project.reelsFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الميزات الخاصة بالمستخدمين' : language === 'tr' ? 'Kullanıcıya Özel Özellikler' : 'User Specific Features',
        content: language === 'ar' ? project.userSpecificFeatures.ar : language === 'tr' ? project.userSpecificFeatures.tr : project.userSpecificFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الخصائص العامة' : language === 'tr' ? 'Genel Özellikler' : 'General Features',
        content: language === 'ar' ? project.generalFeatures.ar : language === 'tr' ? project.generalFeatures.tr : project.generalFeatures.en,
        isList: true
      }
    );
  } else if (project.id === "2") {
    // Cleano project sections
    contentSections.push(
      {
        title: language === 'ar' ? 'خصائص المستخدمين' : language === 'tr' ? 'Kullanıcı Özellikleri' : 'User Features',
        content: language === 'ar' ? project.userFeatures.ar : language === 'tr' ? project.userFeatures.tr : project.userFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'محتويات صفحة بائع التطبيق Dealer' : language === 'tr' ? 'Bayi Uygulama Sayfası İçeriği' : 'Dealer Application Page Contents',
        content: language === 'ar' ? project.dealerFeatures.ar : language === 'tr' ? project.dealerFeatures.tr : project.dealerFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'خصائص المستخدمين (المشترين)' : language === 'tr' ? 'Alıcı Özellikleri' : 'Buyer Features',
        content: language === 'ar' ? project.buyerFeatures.ar : language === 'tr' ? project.buyerFeatures.tr : project.buyerFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الإضافات' : language === 'tr' ? 'Eklemeler' : 'Additions',
        content: language === 'ar' ? project.additions.ar : language === 'tr' ? project.additions.tr : project.additions.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'أهم المميزات' : language === 'tr' ? 'Ana Özellikler' : 'Main Features',
        content: language === 'ar' ? project.mainFeatures.ar : language === 'tr' ? project.mainFeatures.tr : project.mainFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الميزات الخاصة بالخدمات' : language === 'tr' ? 'Hizmet Özellikleri' : 'Service Features',
        content: language === 'ar' ? project.serviceFeatures.ar : language === 'tr' ? project.serviceFeatures.tr : project.serviceFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الميزات الخاصة بالمستخدمين' : language === 'tr' ? 'Kullanıcıya Özel Özellikleri' : 'User Specific Features',
        content: language === 'ar' ? project.userSpecificFeatures.ar : language === 'tr' ? project.userSpecificFeatures.tr : project.userSpecificFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الخصائص العامة' : language === 'tr' ? 'Genel Özellikler' : 'General Features',
        content: language === 'ar' ? project.generalFeatures.ar : language === 'tr' ? project.generalFeatures.tr : project.generalFeatures.en,
        isList: true
      }
    );
  } else if (project.id === "3") {
    // Syntra project sections
    contentSections.push(
      {
        title: language === 'ar' ? 'الخصائص العامة للنظام' : language === 'tr' ? 'Sistem Genel Özellikleri' : 'System General Features',
        content: language === 'ar' ? project.mainFeatures.ar : language === 'tr' ? project.mainFeatures.tr : project.mainFeatures.en,
        isList: true
      },
      {
        title: language === 'ar' ? 'الوحدات الرئيسية في النظام' : language === 'tr' ? 'Sistemdeki Ana Modüller' : 'Main System Modules',
        content: language === 'ar' ? project.modules.ar : language === 'tr' ? project.modules.tr : project.modules.en,
        isList: true
      }
    );
  }

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
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en}
            </h1>
            <p className="text-primary font-medium text-xl">
              {language === 'ar' ? project.tagline.ar : language === 'tr' ? project.tagline.tr : project.tagline.en}
            </p>
          </div>

          {/* Alternating Sections: Images → Text → Images → Text */}
          <div className="space-y-20">
            {/* First Image Pair */}
            {imagePairs[0] && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {imagePairs[0].map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl cursor-pointer bg-secondary/20 border border-border hover:border-primary/30 transition-all duration-300"
                    onClick={() => openImageModal(image)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image}
                        alt={`${language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en} - Image ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary/80 backdrop-blur-sm rounded-full p-4 flex items-center gap-2">
                        <ZoomIn className="w-6 h-6 text-white" />
                        <span className="text-white font-medium">
                          {language === 'ar' ? 'عرض' : language === 'tr' ? 'Görüntüle' : 'View'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* First Text Section - Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                {language === 'ar' ? 'مقدمة' : language === 'tr' ? 'Giriş' : 'Introduction'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === 'ar' ? project.introduction.ar : language === 'tr' ? project.introduction.tr : project.introduction.en}
              </p>
            </motion.div>

            {/* Second Image Pair */}
            {imagePairs[1] && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {imagePairs[1].map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl cursor-pointer bg-secondary/20 border border-border hover:border-primary/30 transition-all duration-300"
                    onClick={() => openImageModal(image)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image}
                        alt={`${language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en} - Image ${idx + 3}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary/80 backdrop-blur-sm rounded-full p-4 flex items-center gap-2">
                        <ZoomIn className="w-6 h-6 text-white" />
                        <span className="text-white font-medium">
                          {language === 'ar' ? 'عرض' : language === 'tr' ? 'Görüntüle' : 'View'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Second Text Section - Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                {language === 'ar' ? 'الأهداف' : language === 'tr' ? 'Hedefler' : 'Objectives'}
              </h2>
              <ul className="space-y-4">
                {(language === 'ar' ? project.objectives.ar : language === 'tr' ? project.objectives.tr : project.objectives.en).map((objective, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start"
                  >
                    <div className="w-3 h-3 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-lg">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Remaining Image Pairs and Text Sections */}
            {imagePairs.slice(2).map((pair, pairIndex) => (
              <div key={pairIndex}>
                {/* Image Pair */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {pair.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative group overflow-hidden rounded-2xl cursor-pointer bg-secondary/20 border border-border hover:border-primary/30 transition-all duration-300"
                      onClick={() => openImageModal(image)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={image}
                          alt={`${language === 'ar' ? project.title.ar : language === 'tr' ? project.title.tr : project.title.en} - Image ${pairIndex * 2 + idx + 5}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-primary/80 backdrop-blur-sm rounded-full p-4 flex items-center gap-2">
                          <ZoomIn className="w-6 h-6 text-white" />
                          <span className="text-white font-medium">
                            {language === 'ar' ? 'عرض' : language === 'tr' ? 'Görüntüle' : 'View'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Text Section */}
                {contentSections[pairIndex + 2] && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary/10 rounded-2xl p-8 mt-12"
                  >
                    <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      {contentSections[pairIndex + 2].title}
                    </h2>
                    {contentSections[pairIndex + 2].isList ? (
                      <ul className="space-y-4">
                        {(() => {
                          const content = contentSections[pairIndex + 2].content;
                          const items = Array.isArray(content) ? content : [content];
                          return items.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start"
                            >
                              <div className="w-3 h-3 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-lg">{item}</span>
                            </motion.li>
                          ));
                        })()}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {contentSections[pairIndex + 2].content}
                      </p>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Image */}
              <div className="relative bg-secondary/10 rounded-xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-full max-h-[80vh] object-contain"
                />
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-foreground">
                {language === 'ar' ? 'انقر في أي مكان لإغلاق' : language === 'tr' ? 'Kapatmak için herhangi bir yere tıklayın' : 'Click anywhere to close'}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailsPage;