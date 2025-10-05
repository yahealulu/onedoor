import { Calendar, MapPin, Users, Award, Handshake, Eye } from 'lucide-react';
import activity1 from '../assets/activity-1.jpg';
import activity2 from '../assets/activity-2.jpg';
import activity3 from '../assets/activity-3.jpg';
import activity4 from '../assets/activity-4.jpg';
import activity5 from '../assets/activity-5.jpg';
import activity6 from '../assets/activity-6.jpg';
import activity7 from '../assets/activity-7.jpg';
import activity8 from '../assets/activity-8.jpg';
import activity9 from '../assets/activity-9.jpg';
import activity10 from '../assets/activity-10.jpg';
import activity11 from '../assets/11.jpg';
import activity12 from '../assets/12.jpg';
import activity13 from '../assets/13.jpg';
import activity14 from '../assets/14.jpg';
import activity15 from '../assets/15.jpg';
import activity16 from '../assets/16.jpg';
import activity17 from '../assets/17.jpg';
import activity18 from '../assets/18.jpg';
import activity19 from '../assets/19.jpg';
import activity20 from '../assets/20.jpg';
import activity21 from '../assets/21.jpg';
import activity22 from '../assets/22.jpg';
import activity23 from '../assets/23.jpg';
import activity24 from '../assets/24.jpg';
import activity25 from '../assets/25.jpg';
import activity26 from '../assets/26.jpg';
import activity27 from '../assets/27.jpg';

export interface TimelineItem {
  id: string;
  type: 'exhibition' | 'news';
  title: {
    en: string;
    ar: string;
    tr?: string;
  };
  date: {
    en: string;
    ar: string;
    tr?: string;
  };
  location?: {
    en: string;
    ar: string;
    tr?: string;
  }; 
  content: {
    en: string;
    ar: string;
    tr?: string;
  };
  images: string[];
  icon: any;
  isNested?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: 'sylicon-summit',
    type: 'exhibition',
    title: {
      en: 'SYLICON Summit – Aleppo',
      ar: 'قمة سيليكون - حلب',
      tr: 'SİLİCON Zirvesi – Halep'
    },
    date: {
      en: 'July 31 – August 2, 2025',
      ar: '31 يوليو - 2 أغسطس 2025',
      tr: '31 Temmuz – 2 Ağustos 2025'
    },
    location: {
      en: 'Sheraton Hotel, Aleppo',
      ar: 'فندق الشيراتون، حلب',
      tr: 'Sheraton Otel, Halep'
    },
    content: {
      en: "From July 31st to August 2nd, 2025, One Door proudly participated in the SYLICON Technology Summit, held at the Sheraton Hotel in Aleppo. Our booth opened the door to the future, showcasing the true meaning of technological creativity. Visitors experienced innovative digital solutions, opportunities for career growth, and the potential for strategic partnerships.\n\nAt the exhibition, we presented intelligent applications powered by artificial intelligence – solutions that don't just solve problems, but learn, adapt, and grow with users. The event was an inspiring opportunity to connect with the tech community, exchange ideas, and highlight our vision for digital transformation in Syria and beyond.",
      ar: "من 31 يوليو إلى 2 أغسطس 2025، شاركت شركة One Door بفخر في قمة تقنية سيليكون، التي أقيمت في فندق الشيراتون في حلب. فتحت كافتيريا الباب للمستقبل، وعرضت المعنى الحقيقي للإبداع التكنولوجي. شهد الزوار حلولاً رقمية مبتكرة، وفرصاً للنمو المهني، وإمكانية الشراكات الاستراتيجية.\n\nفي المعرض، قدمنا تطبيقات ذكية مدعومة بالذكاء الاصطناعي - حلولاً لا تحل المشاكل فحسب، بل تتعلم وتكيف وتنمو مع المستخدمين. كان الحدث فرصة ملهمة للتواصل مع مجتمع التكنولوجيا وتبادل الأفكار وإبراز رؤيتنا للتحول الرقمي في سوريا وما بعد.",
      tr: "31 Temmuz - 2 Ağustos 2025 tarihlerinde, One Door şirketi Halep'te Sheraton Otel'de düzenlenen SİLİCON Teknoloji Zirvesi'ne gururla katıldı. Standımız, teknolojik yaratıcılığın gerçek anlamını sergileyerek geleceği açtı. Ziyaretçiler, yenilikçi dijital çözümler, kariyer gelişimi fırsatları ve stratejik ortaklık potansiyeli yaşadı.\n\nFuarda, yalnızca sorunları çözmekle kalmayıp aynı zamanda kullanıcılarla birlikte öğrenen, uyum sağlayan ve büyüyen yapay zeka destekli akıllı uygulamalar sunduk. Etkinlik, teknoloji topluluğuyla bağlantı kurmak, fikir alışverişi yapmak ve Suriye ve ötesi için dijital dönüşüm vizyonumuzu vurgulamak açısından ilham verici bir fırsattı."
    },
    images: [activity1, activity2, activity3],
    icon: Award
  },
  {
    id: 'damascus-fair',
    type: 'exhibition', 
    title: {
      en: 'Damascus International Fair – 62nd Edition',
      ar: 'المعرض الدولي دمشق - النسخة 62',
      tr: 'Şam Uluslararası Fuarı – 62. Baskı'
    },
    date: {
      en: 'August 27 – September 5, 2025',
      ar: '27 أغسطس - 5 سبتمبر 2025',
      tr: '27 Ağustos – 5 Eylül 2025'
    },
    location: {
      en: 'Damascus Fairgrounds',
      ar: 'أرض المعرض دمشق',
      tr: 'Şam Fuar Alanı'
    },
    content: {
      en: "From August 27th to September 5th, 2025, One Door participated in the 62nd Damascus International Fair at the Damascus Fairgrounds. Our presence highlighted the latest innovations in artificial intelligence and digital technology. Visitors discovered how One Door is redefining programming through smart, adaptive solutions that leave a unique mark in the AI and tech industry.",
      ar: "من 27 أغسطس إلى 5 سبتمبر 2025، شاركت شركة One Door في المعرض الدولي الـ62 في دمشق. لفت حضورنا الانتباه إلى أحدث الابتكارات في الذكاء الاصطناعي والتكنولوجيا الرقمية. اكتشف الزوار كيف تعيد One Door تعريف البرمجة من خلال حلول ذكية وقابلة للتكيف تترك أثراً فريداً في صناعة الذكاء الاصطناعي والتكنولوجيا.",
      tr: "27 Ağustos - 5 Eylül 2025 tarihleri arasında, One Door Şam Fuar Alanı'nda düzenlenen 62. Şam Uluslararası Fuarı'na katıldı. Yerel ziyaretçiler, yapay zeka ve dijital teknolojideki en son yeniliklere dikkat çekti. Ziyaretçiler, One Door'un yapay zeka ve teknoloji endüstrisinde benzersiz bir iz bırakan akıllı ve uyarlanabilir çözümler aracılığıyla programlamayı nasıl yeniden tanımladığını keşfetti."
    },
    images: [activity4, activity5, activity6, activity7, activity8],
    icon: Users
  },
  {
    id: 'telecom-meeting',
    type: 'news',
    title: {
      en: 'Strategic Meeting with Syrian Telecommunications Company',
      ar: 'لقاء استراتيجي مع شركة الاتصالات السورية',
      tr: 'Suriye Telekom şirketiyle stratejik toplantı'
    },
    date: {
      en: 'During Damascus Fair',
      ar: 'أثناء المعرض دمشق',
      tr: 'Şam Fuarı sırasında'
    },
    content: {
      en: "As part of Syria's path towards modernization and digital transformation, One Door's General Manager, Eng. Mohammad Al-Mohammad, held a productive meeting with Mr. Ghassan Akkash, General Manager of the Syrian Telecommunications Company. The meeting focused on strengthening cooperation and supporting the work of ministries and institutions with advanced digital solutions. Both sides agreed on practical steps, paving the way for a more connected, efficient, and prosperous Syria.",
      ar: "في إطار مسيرة سوريا نحو التحديث والتحول الرقمي، عقد المدير العام لشركة One Door، المهندس محمد المحاميد، اجتماعاً إنتاجياً مع السيد غسان عكاش، المدير العام لشركة الاتصالات السورية. ركز الاجتماع على تعزيز التعاون ودعم عمل الوزارات والمؤسسات بالحلول الرقمية المتقدمة. وافق الطرفان على خطوات عملية، مما مهد الطريق لمزيد من الاتصال والكفاءة والازدهار في سوريا.",
      tr: "Suriye'nin modernizasyon ve dijital dönüşüm yolculuğunun bir parçası olarak, One Door Genel Müdürü Mühendis Muhammed el-Muhammed, Suriye Telekom Genel Müdürü Bay Gassan Akkaş ile verimli bir toplantı gerçekleştirdi. Toplantı, iş birliğini güçlendirmeye ve bakanlıklar ile kurumların gelişmiş dijital çözümlerle desteklenmesine odaklandı. Taraflar, daha fazla bağlantı, verimlilik ve refaha yol açan pratik adımlarda anlaştı."
    },
    images: [activity9, activity10, activity11],
    icon: Handshake,
    isNested: true
  },
  {
    id: 'saudi-companies',
    type: 'news',
    title: {
      en: 'Engagement with Saudi Companies',
      ar: 'التفاعل مع الشركات السعودية',
      tr: 'Suudi şirketlerle etkileşim'
    },
    date: {
      en: 'During Damascus Fair',
      ar: 'أثناء المعرض دمشق',
      tr: 'Şam Fuarı sırasında'
    },
    content: {
      en: "During its participation in the Damascus International Fair, One Door toured the Saudi companies present at the exhibition. The visit provided an opportunity to introduce One Door's vision, expand partnerships, and exchange expertise with leading companies. This reflects our commitment to building strong regional connections and fostering collaboration for mutual growth.",
      ar: "خلال مشاركتها في المعرض الدولي دمشق، زارت شركة One Door الشركات السعودية الحاضرة في المعرض. قدمت الزيارة فرصة لتقديم رؤية شركة One Door وتوسيع الشراكات وتبادل الخبرات مع الشركات الرائدة. وهذا يعكس التزامنا ببناء علاقات قوية إقليمياً وتعزيز التعاون لتحقيق النمو المتبادل.",
      tr: "Şam Uluslararası Fuarı'na katılımı sırasında, One Door fuar yerinde bulunan Suudi şirketlerini ziyaret etti. Ziyaret, One Door'un vizyonunu sunmak, ortaklıkları genişletmek ve lider şirketlerle deneyim alışverişi yapmak için bir fırsat sağladı. Bu, bölgesel olarak güçlü bağlantılar kurma ve karşılıklı büyüme için iş birliğini teşvik etme taahhüdümüzü yansıtmaktadır."
    },
    images: [activity12, activity13, activity14, activity15, activity16, activity17, activity18, activity19],
    icon: Users,
    isNested: true
  },
  {
    id: 'official-visit',
    type: 'news', 
    title: {
      en: 'Official Visit by Organizing Committee',
      ar: 'زيارة رسمية من اللجنة المنظمة',
      tr: 'Organizasyon komitesinden resmi ziyaret'
    },
    date: {
      en: 'During Damascus Fair',
      ar: 'أثناء المعرض دمشق',
      tr: 'Şam Fuarı sırasında'
    },
    content: {
      en: "The organizing committee and the general management of the Damascus International Fair and Exhibition City paid an official visit to One Door's booth. The visit highlighted One Door's role in showcasing AI and digital technology solutions and reflected the appreciation of the organizers for our active participation in this landmark national event.",
      ar: "دفعت اللجنة المنظمة والإدارة العامة للمعرض الدولي دمشق ومدينة المعارض زيارة رسمية لكافتيريا One Door. لفتت الزيارة الانتباه إلى دور شركة One Door في عرض حلول الذكاء الاصطناعي والتكنولوجيا الرقمية، وعكس تقدير المنظمين لمشاركتنا النشطة في هذا الحدث الوطني البارز.",
      tr: "Şam Uluslararası Fuarı ve Fuar Şehri organizasyon komitesi ile genel müdürlüğü, One Door standına resmi bir ziyaret gerçekleştirdi. Ziyaret, One Door'un yapay zeka ve dijital teknoloji çözümlerini sergilemedeki rolüne dikkat çekti ve organizatörlerin bu önemli ulusal etkinliğe aktif katılımımız için takdirini yansıttı."
    },
    images: [activity20, activity21],
    icon: Eye,
    isNested: true
  },
  {
    id: 'mou-innovation',
    type: 'news',
    title: {
      en: 'MoU with the National Authority for Innovation', 
      ar: 'اتفاقية تفاهم مع الهيئة الوطنية للابتكار',
      tr: 'Ulusal İnovasyon Kurumu ile mutabakat anlaşması'
    },
    date: {
      en: 'During Damascus Fair',
      ar: 'أثناء المعرض دمشق',
      tr: 'Şam Fuarı sırasında'
    },
    content: {
      en: "In a landmark step towards building a digital Syria, One Door Software Company, represented by its General Manager, Eng. Mohammad Al-Mohammad, signed a Memorandum of Understanding (MoU) with the National Authority for Innovation, represented by its Executive Director, Eng. Mohammad Aboudan. The agreement aims to collaborate on digital transformation projects and initiatives, supporting governmental and social digitization and placing Syria firmly on the path toward a promising digital future.",
      ar: "في خطوة بارزة نحو بناء سوريا رقمية، وقعت شركة One Door للبرمجيات، ممثلة بالمدير العام المهندس محمد المحاميد، مذكرة تفاهم مع الهيئة الوطنية للابتكار، ممثلة بالمدير التنفيذي المهندس محمد عبودان. تهدف الاتفاقية إلى التعاون في مشاريع ومبادرات التحول الرقمي، ودعم رقمنة الحكومة والمجتمع، ووضع سوريا بثبات على مسار نحو مستقبل رقمي واعد.",
      tr: "Dijital Suriye inşa etme yolunda önemli bir adım olarak, One Door Yazılım Şirketi Genel Müdürü Mühendis Muhammed el-Muhammed, Ulusal İnovasyon Kurumu Genel Müdürü Mühendis Muhammed Abudan ile bir mutabakat anlaşması imzaladı. Anlaşma, dijital dönüşüm projeleri ve girişimlerinde iş birliği yapmayı, hükümet ve toplumun dijitalleşmesini desteklemeyi ve Suriye'yi parlak bir dijital geleceğe doğru sağlam bir şekilde yönlendirmeyi amaçlıyor."
    },
    images: [activity22, activity23, activity24, activity25, activity26, activity27],
    icon: Award,
    isNested: true
  }
];