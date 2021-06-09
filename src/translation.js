import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TansFR from './TransFR.json'
import TansENG from './TransENG.json'
import TansAR from './TransAR.json'

const resources = {
    eng: {
        translation: TansENG
    },
    fr: {
        translation: TansFR
    },
    ar: {
        translation: TansAR
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'eng',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;