import './MainContent.css'
import NavBar from "./NavBar/NavBar.jsx";
import Page1 from "./Page1/Page1.jsx";
import Page2 from "./Page2/Page2.jsx";
import {useRef} from "react";
import Page3 from "./Page3/Page3.jsx";
import Page4 from "./Page4/Page4.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import StructuredData from "../Seo/StructuredData.jsx";
import {SECTIONS} from "../../data/siteSeo.js";
import {useLanguage} from "../../i18n/LanguageContext.jsx";

const MainContent = () => {
    useScrollReveal();
    const {t} = useLanguage();

    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);
    const page4Ref = useRef(null);

    const scrollRefs = {
        page1Ref,
        page2Ref,
        page3Ref,
        page4Ref,
    };

    return (
        <>
            <StructuredData />
            <main className="MainSite">
                <h1 className="sr-only">{t.a11y.siteHeading}</h1>
                <NavBar scrollRefs={scrollRefs} />

                <section
                    id={SECTIONS.about.id}
                    ref={page1Ref}
                    aria-labelledby={SECTIONS.about.headingId}
                >
                    <Page1 scrollRef={page2Ref}/>
                </section>
                <section
                    id={SECTIONS.uiProjects.id}
                    ref={page2Ref}
                    aria-labelledby={SECTIONS.uiProjects.headingId}
                >
                    <Page2 />
                </section>
                <section
                    id={SECTIONS.graphics.id}
                    ref={page3Ref}
                    aria-labelledby={SECTIONS.graphics.headingId}
                >
                    <Page3 />
                </section>
                <section
                    id={SECTIONS.contact.id}
                    ref={page4Ref}
                    aria-labelledby={SECTIONS.contact.headingId}
                >
                    <Page4 />
                </section>
            </main>
        </>
    )
}

export default MainContent
