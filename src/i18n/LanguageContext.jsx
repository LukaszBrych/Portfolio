import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {translations} from './translations.js';

const STORAGE_KEY = 'portfolio-language';

const LanguageContext = createContext(null);

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'en' ? 'en' : 'pl';
    });

    const t = translations[language];

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const value = useMemo(() => ({
        language,
        t,
        setLanguage,
        toggleLanguage: () => setLanguage((current) => (current === 'pl' ? 'en' : 'pl')),
    }), [language, t]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
