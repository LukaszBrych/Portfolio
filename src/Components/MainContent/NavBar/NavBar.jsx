import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Logo from '/src/assets/LOGO.svg';

const NavBar = ({scrollRefs}) => {
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    const handleScroll = () => {
        const sections = Object.entries(scrollRefs);
        let currentSection = '';
        for (const [key, ref] of sections) {
            if (ref.current) {
                const offsetTop = ref.current.offsetTop;
                const offsetHeight = ref.current.offsetHeight;
                if (window.scrollY >= offsetTop - 50 && window.scrollY < offsetTop + offsetHeight - 50) {
                    currentSection = key;
                }
            }
        }
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollRefs]);

    return (
        <Navbar expand="xl" fixed="top" className="p-3">
            <img src={Logo} id="logo1" alt="Logo"/>
            <span id="logo2">
                <span>PORTFOLIO</span>
                <span id="sign">ŁUKASZ BRYCH</span>
            </span>
            <Navbar.Toggle aria-controls="navbarNav"/>
            <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeSection === 'page1Ref' ? 'active' : ''}`}
                            onClick={() => scrollToSection(scrollRefs.page1Ref)}
                        >
                            O mnie
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeSection === 'page2Ref' ? 'active' : ''}`}
                            onClick={() => scrollToSection(scrollRefs.page2Ref)}
                        >
                            Projekty UI
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeSection === 'page3Ref' ? 'active' : ''}`}
                            onClick={() => scrollToSection(scrollRefs.page3Ref)}
                        >
                            Rysunki graficzne
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeSection === 'page4Ref' ? 'active' : ''}`}
                            onClick={() => scrollToSection(scrollRefs.page4Ref)}
                        >
                            Kontakt
                        </a>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

