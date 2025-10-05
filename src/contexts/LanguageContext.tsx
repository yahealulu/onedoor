import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translation files
import enTranslations from '../translations/en.json';
import arTranslations from '../translations/ar.json';
import trTranslations from '../translations/tr.json';

// Translation dictionary
const translations = {
  en: enTranslations,
  ar: arTranslations,
  tr: trTranslations
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'ar', 'tr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Set language attribute but keep direction static
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    // Split the key by dots to navigate nested objects
    const keys = key.split('.');
    let translation: any = translations[language];
    
    // Navigate through the nested object structure
    for (const k of keys) {
      if (translation && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        translation = translations.en;
        for (const k of keys) {
          if (translation && translation[k] !== undefined) {
            translation = translation[k];
          } else {
            return key; // Return the key if no translation found
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};