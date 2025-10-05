import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const useTextDirection = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Keep direction static regardless of language
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);
};