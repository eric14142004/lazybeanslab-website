import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { zhTw } from '../translations/zh-tw';
import { zhCn } from '../translations/zh-cn';

const translations = { en, 'zh-tw': zhTw, 'zh-cn': zhCn };
const langCycle = ['en', 'zh-tw', 'zh-cn'];

const LanguageContext = createContext({ lang: 'en', toggle: () => {}, t: en });

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
        if (saved && translations[saved]) setLang(saved);
    }, []);

    const toggle = () => {
        const next = langCycle[(langCycle.indexOf(lang) + 1) % langCycle.length];
        setLang(next);
        localStorage.setItem('lang', next);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggle, setLang: (l) => { setLang(l); localStorage.setItem('lang', l); }, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
