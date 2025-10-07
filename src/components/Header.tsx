import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

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
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: 'en' | 'ar' | 'tr') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Language options with full names
  const languageOptions = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-ghost px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-ghost px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
            >
              {language === 'ar' ? 'المشاريع' : language === 'tr' ? 'Projeler' : 'Projects'}
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="btn-ghost px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
            >
              {t('nav.clients')}
            </button>
            <button 
              onClick={() => scrollToSection('stuff')}
              className="btn-ghost px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
            >
              {language === 'ar' ? 'فريقنا' : language === 'tr' ? 'Ekibimiz' : 'Our Team'}
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="btn-ghost px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
            >
              {t('nav.achievements')}
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="btn-ghost px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
            >
              {t('nav.activities')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline px-4 py-2 rounded-lg transition-all duration-300"
            >
              {t('nav.contact')}
            </button>
            
            {/* Enhanced Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group"
              >
                <span className="text-lg">{languageOptions.find(lang => lang.code === language)?.flag}</span>
                <span className="font-medium text-foreground">
                  {languageOptions.find(lang => lang.code === language)?.code.toUpperCase()}
                </span>
                <svg 
                  className={`w-4 h-4 text-foreground transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-background/90 backdrop-blur-xl border border-border/50 shadow-xl overflow-hidden z-50"
                  >
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code as 'en' | 'ar' | 'tr')}
                        className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-all duration-200 ${
                          language === lang.code
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'hover:bg-secondary/50 text-foreground'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <svg className="w-5 h-5 text-primary ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Enhanced Mobile Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
              >
                <span className="text-base">{languageOptions.find(lang => lang.code === language)?.flag}</span>
                <span className="font-medium text-foreground text-sm">
                  {languageOptions.find(lang => lang.code === language)?.code.toUpperCase()}
                </span>
              </button>

              {/* Mobile Language Dropdown */}
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-1 w-40 rounded-lg bg-background/90 backdrop-blur-xl border border-border/50 shadow-lg overflow-hidden z-50"
                  >
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code as 'en' | 'ar' | 'tr')}
                        className={`flex items-center space-x-2 w-full px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                          language === lang.code
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'hover:bg-secondary/50 text-foreground'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-ghost p-2 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-3 space-y-2 glass-light rounded-xl border border-border/30">
            <button 
              onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-ghost transition-all duration-300"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-ghost transition-all duration-300"
            >
              {language === 'ar' ? 'المشاريع' : language === 'tr' ? 'Projeler' : 'Projects'}
            </button>
            <button 
              onClick={() => { scrollToSection('clients'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-ghost transition-all duration-300"
            >
              {t('nav.clients')}
            </button>
            <button 
              onClick={() => { scrollToSection('stuff'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-ghost transition-all duration-300"
            >
              {language === 'ar' ? 'فريقنا' : language === 'tr' ? 'Ekibimiz' : 'Our Team'}
            </button>
            <button 
              onClick={() => { scrollToSection('achievements'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-ghost transition-all duration-300"
            >
              {t('nav.achievements')}
            </button>
            <button 
              onClick={() => { scrollToSection('activities'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-ghost transition-all duration-300"
            >
              {t('nav.activities')}
            </button>
            <button 
              onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg btn-outline transition-all duration-300"
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