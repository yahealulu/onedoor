import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (lang: 'en' | 'ar' | 'tr') => {
    setLanguage(lang);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'glass-light backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/logo.webp" 
              alt="One Door" 
              className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-ghost"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="btn-ghost"
            >
              {t('nav.clients')}
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="btn-ghost"
            >
              {t('nav.achievements')}
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="btn-ghost"
            >
              {t('nav.activities')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  language === 'ar' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                AR
              </button>
              <button 
                onClick={() => handleLanguageChange('tr')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  language === 'tr' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                TR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Language Switcher for Mobile */}
            <div className="flex space-x-1">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('ar')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'ar' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                AR
              </button>
              <button 
                onClick={() => handleLanguageChange('tr')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'tr' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                TR
              </button>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-ghost"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-3 glass-light mt-4 rounded-xl">
            <button 
              onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left btn-ghost"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => { scrollToSection('clients'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left btn-ghost"
            >
              {t('nav.clients')}
            </button>
            <button 
              onClick={() => { scrollToSection('achievements'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left btn-ghost"
            >
              {t('nav.achievements')}
            </button>
            <button 
              onClick={() => { scrollToSection('activities'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left btn-ghost"
            >
              {t('nav.activities')}
            </button>
            <button 
              onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left btn-outline"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;