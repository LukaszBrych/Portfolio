import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import Logo from '/src/assets/LOGO.svg';
import {NAV_SECTION_KEYS, SECTIONS} from '../../../data/siteSeo.js';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';

const NavBar = ({scrollRefs}) => {
    const [activeSection, setActiveSection] = useState('');
    const isNavbarAnimatingRef = useRef(false);
    const {language, setLanguage, t} = useLanguage();

    const closeMobileMenu = () => {
        const collapse = document.getElementById('navbarNav');
        if (!collapse?.classList.contains('show')) return;

        const collapseInstance = window.bootstrap?.Collapse?.getInstance(collapse);
        if (collapseInstance) {
            collapseInstance.hide();
            return;
        }

        collapse.classList.remove('show');
    };

    const getSectionScrollTop = (element) => (
        element.getBoundingClientRect().top + window.pageYOffset
    );

    const scrollToSection = (ref) => {
        const collapse = document.getElementById('navbarNav');
        const mobileMenuWasOpen = collapse?.classList.contains('show');

        closeMobileMenu();

        const performScroll = () => {
            if (!ref.current) return;
            window.scrollTo({
                top: getSectionScrollTop(ref.current),
                behavior: 'smooth',
            });
        };

        if (mobileMenuWasOpen) {
            window.setTimeout(performScroll, 320);
            return;
        }

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(performScroll);
        });
    };

    const handleNavClick = (event, ref) => {
        event.preventDefault();
        scrollToSection(ref);
    };

    const handleScroll = () => {
        const scrollAnchor = window.scrollY + (window.innerHeight * 0.35);
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
        const wrapper = document.querySelector('.navbar-wrapper');
        if (wrapper) {
            document.documentElement.style.setProperty(
                '--section-header-offset',
                `${wrapper.offsetHeight}px`
            );
        }
    }, []);

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
        const collapse = document.getElementById('navbarNav');
        if (!wrapper) return;

        const resizeObserver = new ResizeObserver(() => {
            if (isNavbarAnimatingRef.current) return;
            window.requestAnimationFrame(updateHeaderOffset);
        });
        resizeObserver.observe(wrapper);

        const handleResize = () => updateHeaderOffset();
        window.addEventListener('resize', handleResize);

        const markAnimating = () => {
            isNavbarAnimatingRef.current = true;
        };

        const finishAnimating = () => {
            isNavbarAnimatingRef.current = false;
            updateHeaderOffset();
        };

        collapse?.addEventListener('show.bs.collapse', markAnimating);
        collapse?.addEventListener('hide.bs.collapse', markAnimating);
        collapse?.addEventListener('shown.bs.collapse', finishAnimating);
        collapse?.addEventListener('hidden.bs.collapse', finishAnimating);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', handleResize);
            collapse?.removeEventListener('show.bs.collapse', markAnimating);
            collapse?.removeEventListener('hide.bs.collapse', markAnimating);
            collapse?.removeEventListener('shown.bs.collapse', finishAnimating);
            collapse?.removeEventListener('hidden.bs.collapse', finishAnimating);
        };
    }, [updateHeaderOffset]);

    const navLabels = {
        about: t.nav.about,
        uiProjects: t.nav.uiProjects,
        graphics: t.nav.graphics,
        contact: t.nav.contact,
    };

    return (
        <header className="navbar-wrapper">
            <Navbar expand="xl" className="portfolio-navbar" aria-label={t.a11y.navLabel}>
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
