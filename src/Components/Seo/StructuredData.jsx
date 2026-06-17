import {useLanguage} from '../../i18n/LanguageContext.jsx';
import {
    OG_IMAGE,
    PERSON_ALTERNATE_NAMES,
    PERSON_KNOWS_ABOUT,
    PROFESSIONAL_SERVICES,
} from '../../data/seoConfig.js';
import {NAV_SECTION_KEYS, PERSON, SECTIONS, SITE_NAME, SITE_URL} from '../../data/siteSeo.js';

const StructuredData = () => {
    const {language, t} = useLanguage();
    const inLanguage = language === 'pl' ? 'pl-PL' : 'en-US';
    const uiProjects = Object.values(t.uiProjects.items);
    const applications = Object.values(t.applications.items);
    const graphicWorks = t.graphics.items;

    const navLabels = {
        about: t.nav.about,
        uiProjects: t.nav.uiProjects,
        applications: t.nav.applications,
        graphics: t.nav.graphics,
        contact: t.nav.contact,
    };

    const sectionHeadings = {
        about: `${t.about.titleBefore} ${t.about.titleAccent}`,
        uiProjects: t.uiProjects.heading,
        applications: t.applications.heading,
        graphics: t.graphics.heading,
        contact: t.contact.heading,
    };

    const sectionDescriptions = {
        about: t.about.paragraphs[0],
        uiProjects: t.uiProjects.description,
        applications: t.applications.description,
        graphics: t.graphics.description,
        contact: t.contact.description,
    };

    const breadcrumbItems = NAV_SECTION_KEYS.map(({section}, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: navLabels[section],
        item: `${SITE_URL}#${SECTIONS[section].id}`,
    }));

    const sectionWebPages = NAV_SECTION_KEYS.map(({section}) => ({
        '@type': 'WebPage',
        '@id': `${SITE_URL}#${SECTIONS[section].id}`,
        url: `${SITE_URL}#${SECTIONS[section].id}`,
        name: sectionHeadings[section],
        description: sectionDescriptions[section],
        inLanguage,
        isPartOf: {'@id': `${SITE_URL}#website`},
        about: {'@id': `${SITE_URL}#person`},
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: OG_IMAGE,
        },
    }));

    const uiCreativeWorks = uiProjects.map((project) => ({
        '@type': 'CreativeWork',
        '@id': `${SITE_URL}#ui-${project.title.replace(/\s+/g, '-').toLowerCase()}`,
        name: project.title,
        description: project.description,
        inLanguage,
        author: {'@id': `${SITE_URL}#person`},
        creator: {'@id': `${SITE_URL}#person`},
        url: `${SITE_URL}#${SECTIONS.uiProjects.id}`,
        genre: language === 'pl' ? 'Projekt UI' : 'UI design project',
    }));

    const applicationWorks = applications.map((project) => ({
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}#app-${project.title.replace(/\s+/g, '-').toLowerCase()}`,
        name: project.title,
        description: project.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Android',
        inLanguage,
        author: {'@id': `${SITE_URL}#person`},
        creator: {'@id': `${SITE_URL}#person`},
        url: `${SITE_URL}#${SECTIONS.applications.id}`,
    }));

    const graphicCreativeWorks = graphicWorks.map((work) => ({
        '@type': 'VisualArtwork',
        '@id': `${SITE_URL}#art-${work.title.replace(/\s+/g, '-').toLowerCase()}`,
        name: work.title,
        description: work.description,
        artform: language === 'pl' ? 'Grafika cyfrowa' : 'Digital artwork',
        inLanguage,
        creator: {'@id': `${SITE_URL}#person`},
        url: `${SITE_URL}#${SECTIONS.graphics.id}`,
    }));

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}#website`,
                url: SITE_URL,
                name: SITE_NAME,
                alternateName: PERSON_ALTERNATE_NAMES,
                description: t.meta.description,
                inLanguage: ['pl-PL', 'en-US'],
                publisher: {'@id': `${SITE_URL}#person`},
                image: OG_IMAGE,
            },
            {
                '@type': 'ProfilePage',
                '@id': `${SITE_URL}#profile`,
                url: SITE_URL,
                name: SITE_NAME,
                description: t.meta.description,
                inLanguage,
                isPartOf: {'@id': `${SITE_URL}#website`},
                about: {'@id': `${SITE_URL}#person`},
                mainEntity: {'@id': `${SITE_URL}#person`},
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: OG_IMAGE,
                },
            },
            {
                '@type': 'Person',
                '@id': `${SITE_URL}#person`,
                name: PERSON.name,
                givenName: 'Łukasz',
                familyName: 'Brych',
                alternateName: PERSON_ALTERNATE_NAMES,
                url: SITE_URL,
                image: OG_IMAGE,
                jobTitle: language === 'pl'
                    ? 'Projektant UX/UI i Front-End Developer'
                    : 'UX/UI Designer and Front-End Developer',
                description: t.a11y.siteHeading,
                email: `mailto:${PERSON.email}`,
                sameAs: [PERSON.github, PERSON.instagram],
                knowsAbout: PERSON_KNOWS_ABOUT[language],
                hasOccupation: {
                    '@type': 'Occupation',
                    name: language === 'pl' ? 'Projektant UX/UI' : 'UX/UI Designer',
                    occupationalCategory: language === 'pl'
                        ? 'Projektowanie interfejsów i front-end development'
                        : 'User interface design and front-end development',
                },
                worksFor: {
                    '@type': 'Organization',
                    name: language === 'pl' ? 'Freelance / SaaS' : 'Freelance / SaaS',
                },
            },
            {
                '@type': 'ProfessionalService',
                '@id': `${SITE_URL}#services`,
                name: language === 'pl'
                    ? 'Łukasz Brych – usługi UX/UI, front-end i grafika'
                    : 'Łukasz Brych – UX/UI, front-end and graphic services',
                url: `${SITE_URL}#${SECTIONS.contact.id}`,
                image: OG_IMAGE,
                email: PERSON.email,
                areaServed: {
                    '@type': 'Country',
                    name: language === 'pl' ? 'Polska' : 'Poland',
                },
                availableLanguage: ['pl-PL', 'en-US'],
                provider: {'@id': `${SITE_URL}#person`},
                serviceType: PROFESSIONAL_SERVICES[language],
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${SITE_URL}#breadcrumb`,
                itemListElement: breadcrumbItems,
            },
            ...sectionWebPages,
            {
                '@type': 'ItemList',
                '@id': `${SITE_URL}#ui-projects`,
                name: language === 'pl' ? 'Projekty UI – portfolio Łukasz Brych' : 'UI Projects – Łukasz Brych portfolio',
                itemListElement: uiProjects.map((project, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: project.title,
                    description: project.description,
                    url: `${SITE_URL}#${SECTIONS.uiProjects.id}`,
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
                    url: `${SITE_URL}#${SECTIONS.applications.id}`,
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
                    url: `${SITE_URL}#${SECTIONS.graphics.id}`,
                })),
            },
            ...uiCreativeWorks,
            ...applicationWorks,
            ...graphicCreativeWorks,
            {
                '@type': 'ContactPoint',
                '@id': `${SITE_URL}#contact`,
                contactType: 'customer service',
                email: PERSON.email,
                availableLanguage: ['Polish', 'English'],
                url: `${SITE_URL}#${SECTIONS.contact.id}`,
                areaServed: language === 'pl' ? 'PL' : 'Worldwide',
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
