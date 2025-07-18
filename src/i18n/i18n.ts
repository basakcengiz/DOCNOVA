import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJson from './en.json';
import trJson from './tr.json';

const languageKey = 'i18nextLng';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: localStorage.getItem(languageKey) || 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: enJson
    },
    tr: {
      translation: trJson
    }
  }
});

export default i18n;

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem(languageKey, lng);
};
