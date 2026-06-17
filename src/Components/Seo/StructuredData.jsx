import {useLanguage} from '../../i18n/LanguageContext.jsx';
import {PERSON, SITE_NAME, SITE_URL} from '../../data/siteSeo.js';

const StructuredData = () => {
    const {language, t} = useLanguage();

    const uiProjects = Object.values(t.uiProjects.items);
    const applications = Object.values(t.applications.items);
    const graphicWorks = t.graphics.items;

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}#website`,
                url: SITE_URL,
                name: SITE_NAME,
                description: t.meta.description,
                inLanguage: language === 'pl' ? 'pl-PL' : 'en-US',
                publisher: {'@id': `${SITE_URL}#person`},
            },
            {
                '@type': 'ProfilePage',
                '@id': `${SITE_URL}#profile`,
                url: SITE_URL,
                name: SITE_NAME,
                description: t.meta.description,
                inLanguage: language === 'pl' ? 'pl-PL' : 'en-US',
                isPartOf: {'@id': `${SITE_URL}#website`},
                about: {'@id': `${SITE_URL}#person`},
                mainEntity: {'@id': `${SITE_URL}#person`},
            },
            {
                '@type': 'Person',
                '@id': `${SITE_URL}#person`,
                name: PERSON.name,
                url: SITE_URL,
                jobTitle: language === 'pl'
                    ? 'Projektant UX/UI i Front-End Developer'
                    : 'UX/UI Designer and Front-End Developer',
                email: `mailto:${PERSON.email}`,
                sameAs: [PERSON.github, PERSON.instagram],
            },
            {
                '@type': 'ItemList',
                '@id': `${SITE_URL}#ui-projects`,
                name: language === 'pl' ? 'Projekty UI – portfolio Łukasz Brych' : 'UI Projects – Łukasz Brych portfolio',
                itemListElement: uiProjects.map((project, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: project.title,
                    description: project.description,
                })),
            },
            {
                '@type': 'ItemList',
                '@id': `${SITE_URL}#applications`,
                name: language === 'pl' ? 'Aplikacje – portfolio Łukasz Brych' : 'Applications – Łukasz Brych portfolio',
                itemListElement: applications.map((project, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: project.title,
                    description: project.description,
                })),
            },
            {
                '@type': 'ItemList',
                '@id': `${SITE_URL}#graphic-works`,
                name: language === 'pl' ? 'Rysunki graficzne – portfolio Łukasz Brych' : 'Graphic art – Łukasz Brych portfolio',
                itemListElement: graphicWorks.map((work, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: work.title,
                    description: work.description,
                })),
            },
            {
                '@type': 'ContactPoint',
                '@id': `${SITE_URL}#contact`,
                contactType: 'customer service',
                email: PERSON.email,
                availableLanguage: ['Polish', 'English'],
                url: `${SITE_URL}#kontakt`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    );
};

export default StructuredData;
