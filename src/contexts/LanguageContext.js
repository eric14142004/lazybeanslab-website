import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { zh } from '../translations/zh';

const translations = { en, zh };

const LanguageContext = createContext({ lang: 'en', toggle: () => {}, t: en });

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
        if (saved === 'zh' || saved === 'en') setLang(saved);
    }, []);

    const toggle = () => {
        const next = lang === 'en' ? 'zh' : 'en';
        setLang(next);
        localStorage.setItem('lang', next);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
