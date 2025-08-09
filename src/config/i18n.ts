import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n.use(LanguageDetector) // auto-detect user's language
    .use(initReactI18next) // bind react-i18next to react
    .init({
        resources: {
            en: { translation: en },
            ar: { translation: ar },
        },
        fallbackLng: "en", // default if user's language is not available
    });

export default i18n;
