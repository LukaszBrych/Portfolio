import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import Logo from '/src/assets/LOGO.svg';
import {NAV_SECTION_KEYS, SECTIONS} from '../../../data/siteSeo.js';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';
import {
    scrollToSectionElement,
    updateSectionHeaderOffset,
} from '../../../utils/scrollToSection.js';

const NavBar = ({scrollRefs}) => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isNavbarAnimatingRef = useRef(false);
    const {language, setLanguage, t} = useLanguage();

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const scrollToSection = (ref) => {
        const wasOpen = isMobileMenuOpen;

        if (wasOpen) {
            closeMobileMenu();
            window.setTimeout(() => scrollToSectionElement(ref.current), 280);
            return;
        }

        scrollToSectionElement(ref.current);
    };

    const handleNavClick = (event, ref) => {
        event.preventDefault();
        scrollToSection(ref);
    };

    const handleScroll = () => {
        const headerOffset = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue('--section-header-offset')
        ) || 120;
        const scrollAnchor = window.scrollY + headerOffset + 24;
        const sections = Object.entries(scrollRefs);
        let currentSection = '';

        for (const [key, ref] of sections) {
            if (ref.current) {
                const offsetTop = ref.current.offsetTop;
                const offsetHeight = ref.current.offsetHeight;
                if (scrollAnchor >= offsetTop && scrollAnchor < offsetTop + offsetHeight) {
                    currentSection = key;
                }
            }
        }

        setActiveSection(currentSection);
    };

    const updateHeaderOffset = useCallback(() => {
        updateSectionHeaderOffset();
    }, []);

    useEffect(() => {
        updateHeaderOffset();

        if (document.fonts?.ready) {
            document.fonts.ready.then(updateHeaderOffset);
        }

        window.addEventListener('load', updateHeaderOffset);

        return () => {
            window.removeEventListener('load', updateHeaderOffset);
        };
    }, [updateHeaderOffset]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollRefs]);

    useEffect(() => {
        updateHeaderOffset();

        const wrapper = document.querySelector('.navbar-wrapper');
        if (!wrapper) return;

        const resizeObserver = new ResizeObserver(() => {
            if (isNavbarAnimatingRef.current) return;
            window.requestAnimationFrame(updateHeaderOffset);
        });
        resizeObserver.observe(wrapper);

        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setIsMobileMenuOpen(false);
            }
            updateHeaderOffset();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, [updateHeaderOffset]);

    const navLabels = {
        about: t.nav.about,
        uiProjects: t.nav.uiProjects,
        applications: t.nav.applications,
        graphics: t.nav.graphics,
        contact: t.nav.contact,
    };

    return (
        <header className={`navbar-wrapper${isMobileMenuOpen ? ' navbar-wrapper--menu-open' : ''}`}>
            <Navbar
                expand="xl"
                className="portfolio-navbar"
                aria-label={t.a11y.navLabel}
                expanded={isMobileMenuOpen}
                onToggle={setIsMobileMenuOpen}
            >
                <img src={Logo} id="logo1" alt={t.a11y.logoAlt} />
                <span id="logo2">
                    <span>PORTFOLIO</span>
                    <span id="sign">ŁUKASZ BRYCH</span>
                </span>
                <Navbar.Toggle aria-controls="navbarNav" aria-label={t.a11y.openMenu} />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto" as="ul">
                        {NAV_SECTION_KEYS.map(({key, section}) => (
                            <li className="nav-item" key={key}>
                                <a
                                    href={`#${SECTIONS[section].id}`}
                                    className={`nav-link ${activeSection === key ? 'active' : ''}`}
                                    onClick={(event) => handleNavClick(event, scrollRefs[key])}
                                    aria-current={activeSection === key ? 'true' : undefined}
                                >
                                    {navLabels[section]}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item language-switcher-item">
                            <div className="language-switcher" role="group" aria-label="Language">
                                <button
                                    type="button"
                                    className={`language-switcher__btn ${language === 'pl' ? 'is-active' : ''}`}
                                    onClick={() => setLanguage('pl')}
                                    aria-label={t.a11y.switchToPl}
                                    aria-pressed={language === 'pl'}
                                >
                                    PL
                                </button>
                                <button
                                    type="button"
                                    className={`language-switcher__btn ${language === 'en' ? 'is-active' : ''}`}
                                    onClick={() => setLanguage('en')}
                                    aria-label={t.a11y.switchToEn}
                                    aria-pressed={language === 'en'}
                                >
                                    EN
                                </button>
                            </div>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavBar;
