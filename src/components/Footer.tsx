import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = footerRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the home page, navigate to it first
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer ref={footerRef} className="bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 reveal">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/logo.webp" 
                alt="One Door" 
                className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  const heroSection = document.getElementById('hero');
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61572301930088" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/intishaar-software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/onedoor_company?fbclid=IwY2xjawM478pleHRuA2FlbQIxMABicmlkETFGeFRRbzMxeDJCa21GZUduAR719a5P7_6N3-VyfMNuX7qE1CbLLCo1m3xNDAuDBNrMhOtA-1JDCKBRE1awMQ_aem_Uv3sP6Hv7gnkXC7OD4ctXw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="space-y-3 mb-8">
              <p className="text-foreground font-medium text-lg">
                {t('footer.success_stories')}
              </p>
              <p className="text-muted-foreground">
                {t('footer.technology')}
              </p>
              <p className="text-muted-foreground">
                {t('footer.together')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t('footer.company')}
            </h4>
            <ul className="space-y-3">
              {[
                { name: t('about.title'), id: 'about-us' },
                { name: t('nav.services'), id: 'services' },
                { name: t('nav.clients'), id: 'clients' },
                { name: t('nav.contact'), id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.id);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="reveal">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                t('footer.privacy_policy') || (language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'),
                t('footer.terms_of_use') || (language === 'en' ? 'Terms of Use' : 'شروط الاستخدام')
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Locations */}
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">
                {t('footer.syria_address1')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('footer.syria_address2')}
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-1">
              {[
                t('footer.phone1') || '00963969697088',
                t('footer.phone2') || '00963930342875', 
                t('footer.phone3') || '00963990486277',
                t('footer.phone4') || '00963 995 550 310'
              ].map((phone, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {phone}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8 text-center reveal">
          <p className="text-muted-foreground">
            © 2025 One Door. {t('footer.rights')} {t('footer.building_digital')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;