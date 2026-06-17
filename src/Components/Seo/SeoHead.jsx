import {useEffect} from 'react';
import {useLanguage} from '../../i18n/LanguageContext.jsx';
import {
    OG_IMAGE,
    OG_IMAGE_ALT,
    PROFESSIONAL_SERVICES,
    SEO_KEYWORDS,
} from '../../data/seoConfig.js';
import {PERSON, SITE_NAME, SITE_URL} from '../../data/siteSeo.js';

const upsertMeta = (attributes, content) => {
    if (!content) return;

    const selector = Object.entries(attributes)
        .map(([key, value]) => `[${key}="${value}"]`)
        .join('');

    let element = document.head.querySelector(`meta${selector}`);

    if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
};

const upsertLink = ({rel, href, hreflang}) => {
    const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;

    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) {
            element.setAttribute('hreflang', hreflang);
        }
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
};

const upsertMeLink = (href) => {
    let element = document.head.querySelector(`link[rel="me"][href="${href}"]`);

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'me');
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
};

const SeoHead = () => {
    const {language, t} = useLanguage();
    const {title, description} = t.meta;
    const keywords = SEO_KEYWORDS[language].join(', ');
    const locale = language === 'pl' ? 'pl_PL' : 'en_US';
    const alternateLocale = language === 'pl' ? 'en_US' : 'pl_PL';

    useEffect(() => {
        document.documentElement.lang = language;

        if (title) {
            document.title = title;
        }

        upsertMeta({name: 'description'}, description);
        upsertMeta({name: 'keywords'}, keywords);
        upsertMeta({name: 'author'}, PERSON.name);
        upsertMeta({name: 'creator'}, PERSON.name);
        upsertMeta({name: 'publisher'}, SITE_NAME);
        upsertMeta({name: 'robots'}, 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        upsertMeta({name: 'googlebot'}, 'index, follow');
        upsertMeta({name: 'referrer'}, 'strict-origin-when-cross-origin');
        upsertMeta({name: 'format-detection'}, 'telephone=no');

        upsertMeta({property: 'og:type'}, 'website');
        upsertMeta({property: 'og:site_name'}, SITE_NAME);
        upsertMeta({property: 'og:locale'}, locale);
        upsertMeta({property: 'og:locale:alternate'}, alternateLocale);
        upsertMeta({property: 'og:title'}, title);
        upsertMeta({property: 'og:description'}, description);
        upsertMeta({property: 'og:url'}, SITE_URL);
        upsertMeta({property: 'og:image'}, OG_IMAGE);
        upsertMeta({property: 'og:image:alt'}, OG_IMAGE_ALT);
        upsertMeta({property: 'og:image:type'}, 'image/svg+xml');

        upsertMeta({name: 'twitter:card'}, 'summary');
        upsertMeta({name: 'twitter:title'}, title);
        upsertMeta({name: 'twitter:description'}, description);
        upsertMeta({name: 'twitter:image'}, OG_IMAGE);
        upsertMeta({name: 'twitter:image:alt'}, OG_IMAGE_ALT);
        upsertMeta({name: 'twitter:creator'}, '@lukasheq_');

        upsertLink({rel: 'canonical', href: SITE_URL});
        upsertLink({rel: 'alternate', href: SITE_URL, hreflang: 'pl'});
        upsertLink({rel: 'alternate', href: SITE_URL, hreflang: 'en'});
        upsertLink({rel: 'alternate', href: SITE_URL, hreflang: 'x-default'});

        upsertMeLink(PERSON.github);
        upsertMeLink(PERSON.instagram);

        upsertMeta({name: 'application-name'}, SITE_NAME);
        upsertMeta({name: 'apple-mobile-web-app-title'}, 'Łukasz Brych');
        upsertMeta({name: 'apple-mobile-web-app-capable'}, 'yes');
        upsertMeta({name: 'mobile-web-app-capable'}, 'yes');

        const servicesSummary = PROFESSIONAL_SERVICES[language].join(', ');
        upsertMeta({name: 'subject'}, servicesSummary);
        upsertMeta({name: 'classification'}, servicesSummary);
    }, [language, title, description, keywords, locale, alternateLocale]);

    return null;
};

export default SeoHead;
