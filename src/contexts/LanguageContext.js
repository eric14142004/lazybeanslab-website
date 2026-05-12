import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { zhTw } from '../translations/zh-tw';
import { zhCn } from '../translations/zh-cn';

const translations = { en, 'zh-tw': zhTw, 'zh-cn': zhCn };
const langCycle = ['en', 'zh-tw', 'zh-cn'];

const LanguageContext = createContext({ lang: 'en', toggle: () => {}, t: en });

function detectBrowserLanguage() {
    if (typeof navigator === 'undefined') {
        return 'en';
    }

    const primary = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    const normalized = primary.toLowerCase();

    if (normalized.startsWith('zh-tw') || normalized.startsWith('zh-hk') || normalized.startsWith('zh-mo') || normalized.includes('hant')) {
        return 'zh-tw';
    }

    if (normalized.startsWith('zh')) {
        return 'zh-cn';
    }

    return 'en';
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
        if (saved && translations[saved]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLang(saved);
            return;
        }

        const detected = detectBrowserLanguage();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLang(detected);
        localStorage.setItem('lang', detected);
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
