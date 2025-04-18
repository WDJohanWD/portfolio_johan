import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/portfolio_johan/translations/{{lng}}/{{ns}}.json",
        },
        ns: ["home", "projects", "hero", "skills", "contact", "footer", /* agrega otros namespaces */],
        defaultNS: "home",
        react: {
             useSuspense: true // Asegúrate de que useSuspense esté en true (es el valor por defecto)
        }
    });

export default i18n