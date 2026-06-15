import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {translations} from './translations.js';

const STORAGE_KEY = 'portfolio-language';

const LanguageContext = createContext(null);

const updateDocumentMeta = (language, meta) => {
    document.documentElement.lang = language;

    if (meta.title) {
        document.title = meta.title;
    }

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag && meta.description) {
        descriptionTag.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.title) {
        ogTitle.setAttribute('content', meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && meta.description) {
        ogDescription.setAttribute('content', meta.description);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
        ogLocale.setAttribute('content', language === 'pl' ? 'pl_PL' : 'en_US');
    }
};

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'en' ? 'en' : 'pl';
    });

    const t = translations[language];

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        updateDocumentMeta(language, t.meta);
    }, [language, t.meta]);

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
