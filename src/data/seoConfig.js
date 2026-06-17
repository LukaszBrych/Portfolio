import {PERSON, SITE_NAME, SITE_URL} from './siteSeo.js';

export const OG_IMAGE = `${SITE_URL}logo-mark.svg`;
export const OG_IMAGE_ALT = 'Logo portfolio Łukasz Brych – projektant UX/UI i front-end developer';

export const SEO_KEYWORDS = {
    pl: [
        'Łukasz Brych',
        'Lukasz Brych',
        'portfolio Łukasz Brych',
        'Łukasz Brych UX UI',
        'Łukasz Brych front-end',
        'Łukasz Brych grafik',
        'projektant UX UI',
        'projektant interfejsów',
        'projektowanie UX',
        'projektowanie UI',
        'projektowanie interfejsów użytkownika',
        'UX designer Polska',
        'UI designer Polska',
        'front-end developer',
        'front end developer',
        'React developer portfolio',
        'grafik komputerowy',
        'portfolio UX UI',
        'portfolio front-end',
        'portfolio grafik',
        'projekty UI',
        'case study UX',
        'aplikacje webowe UI',
        'projektowanie aplikacji mobilnych',
        'MobilControl MC 6600',
        'aplikacja pomiarowa',
        'SensorBox',
        'SaaS UI design',
        'e-commerce UI',
        'wypożyczalnia narzędzi UI',
        'system obsługi siłowni UI',
        'rysunki graficzne',
        'ilustracja cyfrowa',
        'projektant stron internetowych',
        'freelance UX UI',
        'Polska',
    ],
    en: [
        'Łukasz Brych',
        'Lukasz Brych',
        'Łukasz Brych portfolio',
        'Łukasz Brych UX UI',
        'Łukasz Brych front-end',
        'Łukasz Brych graphic designer',
        'UX UI designer',
        'user interface designer',
        'UX designer Poland',
        'UI designer portfolio',
        'front-end developer portfolio',
        'React developer portfolio',
        'digital graphic artist',
        'UX case study',
        'UI projects portfolio',
        'web application UI',
        'mobile app design',
        'MobilControl MC 6600',
        'measurement app',
        'SensorBox app',
        'SaaS UI design',
        'e-commerce UI design',
        'tool rental platform UI',
        'gym management system UI',
        'graphic art portfolio',
        'digital illustration',
        'website designer',
        'freelance UX designer',
    ],
};

export const PERSON_KNOWS_ABOUT = {
    pl: [
        'Projektowanie UX',
        'Projektowanie UI',
        'Front-end development',
        'React',
        'Projektowanie aplikacji webowych',
        'Projektowanie aplikacji mobilnych',
        'Grafika komputerowa',
        'Ilustracja cyfrowa',
        'E-commerce',
        'SaaS',
        'Systemy pomiarowe',
        'MobilControl MC 6600',
    ],
    en: [
        'UX design',
        'UI design',
        'Front-end development',
        'React',
        'Web application design',
        'Mobile application design',
        'Digital graphics',
        'Digital illustration',
        'E-commerce',
        'SaaS',
        'Measurement systems',
        'MobilControl MC 6600',
    ],
};

export const PERSON_ALTERNATE_NAMES = [
    'Lukasz Brych',
    'Łukasz Brych portfolio',
    'Lukasz Brych portfolio',
];

export const PROFESSIONAL_SERVICES = {
    pl: [
        'Projektowanie UX/UI',
        'Projektowanie interfejsów użytkownika',
        'Front-end development',
        'Grafika komputerowa',
        'Projektowanie logo',
        'Implementacja stron internetowych',
    ],
    en: [
        'UX/UI design',
        'User interface design',
        'Front-end development',
        'Digital graphics',
        'Logo design',
        'Website implementation',
    ],
};

export const SECTION_SEO_KEYS = {
    about: 'about',
    uiProjects: 'uiProjects',
    applications: 'applications',
    graphics: 'graphics',
    contact: 'contact',
};

export const PERSON_SCHEMA_ID = `${SITE_URL}#person`;
export const PROFILE_PAGE_SCHEMA_ID = `${SITE_URL}#profile`;
export const WEBSITE_SCHEMA_ID = `${SITE_URL}#website`;

export const buildPersonSchema = (language, personDescription) => ({
    '@type': 'Person',
    '@id': PERSON_SCHEMA_ID,
    name: PERSON.name,
    givenName: 'Łukasz',
    familyName: 'Brych',
    alternateName: PERSON_ALTERNATE_NAMES,
    url: SITE_URL,
    image: OG_IMAGE,
    jobTitle: language === 'pl'
        ? 'Projektant UX/UI i Front-End Developer'
        : 'UX/UI Designer and Front-End Developer',
    description: personDescription,
    email: `mailto:${PERSON.email}`,
    sameAs: [PERSON.github, PERSON.instagram],
    knowsAbout: PERSON_KNOWS_ABOUT[language],
    mainEntityOfPage: {'@id': PROFILE_PAGE_SCHEMA_ID},
    hasOccupation: {
        '@type': 'Occupation',
        name: language === 'pl' ? 'Projektant UX/UI' : 'UX/UI Designer',
        occupationalCategory: language === 'pl'
            ? 'Projektowanie interfejsów i front-end development'
            : 'User interface design and front-end development',
    },
});

export const buildProfilePageSchema = (language, meta, personDescription) => {
    const person = buildPersonSchema(language, personDescription);

    return {
        '@type': 'ProfilePage',
        '@id': PROFILE_PAGE_SCHEMA_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: meta.description,
        inLanguage: language === 'pl' ? 'pl-PL' : 'en-US',
        isPartOf: {'@id': WEBSITE_SCHEMA_ID},
        about: person,
        mainEntity: person,
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: OG_IMAGE,
        },
    };
};

export const STATIC_PERSON_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: PERSON.name,
    givenName: 'Łukasz',
    familyName: 'Brych',
    alternateName: PERSON_ALTERNATE_NAMES,
    url: SITE_URL,
    email: `mailto:${PERSON.email}`,
    sameAs: [PERSON.github, PERSON.instagram],
    jobTitle: 'Projektant UX/UI i Front-End Developer',
    knowsAbout: PERSON_KNOWS_ABOUT.pl,
};
