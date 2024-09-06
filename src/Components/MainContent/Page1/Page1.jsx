import './Page1.css'
import LeftPanelBackgroundImage from "/src/assets/left-panel-background.png";
import ScrollDownButton from "./ScrollDownButton/ScrollDownButton.jsx";
import ScrollDownButtonImage from '/src/assets/scroll-down-button.svg';
import ScrollDownButtonHoverImage from '/src/assets/scroll-down-button-hover.svg';


const Page1 = ({scrollRef}) => {

    const LeftPanelBackground = {
        backgroundImage: `url(${LeftPanelBackgroundImage})`
    }

    return (
        <div className="main-section">
            <div className="left-panel" style={LeftPanelBackground}></div>
            <div className="right-panel">
                <div className="right-panel-up">
                    <h2>O mnie</h2>
                    <div id="my-description">
                        <div className="my-description-background"></div>
                        <p>Hej jestem Łukasz. Interesuję się wieloma dziedzinami sztuki. Staram się łączyć je w
                            kreatywny
                            sposób.
                            Moim
                            największym hobby jest muzyka. Nie skupiam się tylko na słuchaniu, lecz piszę własne
                            teksty.</p>
                        <p>W życiu stawiam na rozwój osobisty. Szukam nowych wyzwań by nie pozostać w miejscu. Studiuję
                            informatykę,
                            pozwala mi to połączyć wiedzę developerską z tworzeniem projektów graficznych. Uważam, że
                            kluczem do
                            sukcesu
                            jest połączenie estetyki z funkcjonalnością. Dlatego dbam o to by moje projekty były
                            atrakcyjne
                            wizualnie
                            oraz intuicyjne.</p>
                        <p>Pasjonuję się również grafiką komputerową. Ogromną przyjemność sprawia mi tworzenie rysunków,
                            wektorowych
                            jak
                            i rastrowych. Jakbym miał powiedzieć jednym słowem co najbardziej lubię robić, to byłoby to
                            tworzenie.
                            Czuję
                            wielką satysfakcję gdy od zera zrobię jakiś produkt.</p>
                    </div>

                </div>
                <div className="right-panel-down"><ScrollDownButton scrollRef={scrollRef}
                                                                    ScrollDownButtonImageSrc={ScrollDownButtonImage}
                                                                    ScrollDownButtonHoverImageSrc={ScrollDownButtonHoverImage}/>
                </div>
            </div>
        </div>
    )
}

export default Page1