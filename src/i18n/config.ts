import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ar from './locales/ar.json';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      ar: { translation: ar },
    },
    fallbackLng: 'en', // Use English if detected language is not available
    debug: false, // Set to true for development debugging
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    
    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache user language preference
      caches: ['localStorage'],
    },
  });

export default i18n;
