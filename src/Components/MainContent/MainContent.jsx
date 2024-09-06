import './MainContent.css'
import NavBar from "./NavBar/NavBar.jsx";
import Page1 from "./Page1/Page1.jsx";
import Page2 from "./Page2/Page2.jsx";
import {useRef} from "react";
import Page3 from "./Page3/Page3.jsx";
import Page4 from "./Page4/Page4.jsx";

const MainContent = () => {

    // Tworzenie referencji do komponentów
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);
    const page4Ref = useRef(null);

    // Obiekt z referencjami przekazywany do NavBar
    const scrollRefs = {
        page1Ref,
        page2Ref,
        page3Ref,
        page4Ref,
    };

    return (
        <div className="MainSite">
            <NavBar scrollRefs={scrollRefs} />


            {/* Przypisanie referencji do komponentów */}
            <section ref={page1Ref}>
                <Page1 scrollRef={page2Ref}/>
            </section>
            <section ref={page2Ref}>
                <Page2 />
            </section>
            <section ref={page3Ref}>
                <Page3 />
            </section>
            <section ref={page4Ref}>
                <Page4 />
            </section>
        </div>
    )
}

export default MainContent