import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    common: {},
  },
  hi: {
    common: {},
  },
  mr: {
    common: {},
  },
};

// Load translations dynamically
const loadTranslations = async () => {
  try {
    const [enResponse, hiResponse, mrResponse] = await Promise.all([
      fetch('/locales/en/common.json'),
      fetch('/locales/hi/common.json'),
      fetch('/locales/mr/common.json'),
    ]);
    
    if (enResponse.ok) {
      resources.en.common = await enResponse.json();
    }
    if (hiResponse.ok) {
      resources.hi.common = await hiResponse.json();
    }
    if (mrResponse.ok) {
      resources.mr.common = await mrResponse.json();
    }
  } catch (error) {
    console.warn('Failed to load some translation files:', error);
  }
};

// Initialize i18n
const initializeI18n = async () => {
  await loadTranslations();
  
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: localStorage.getItem('language') || 'en',
      fallbackLng: 'en',
      defaultNS: 'common',
      ns: ['common'],
      
      interpolation: {
        escapeValue: false,
      },

      react: {
        useSuspense: false,
      },
    });
};

// Initialize immediately
initializeI18n();

export default i18n;