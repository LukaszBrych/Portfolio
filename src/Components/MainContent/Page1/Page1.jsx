import './Page1.css'
import LeftPanelBackgroundImage from "/src/assets/left-panel-background.png";
import ScrollDownButton from "./ScrollDownButton/ScrollDownButton.jsx";
import ScrollDownButtonImage from '/src/assets/scroll-down-button.svg';
import ScrollDownButtonHoverImage from '/src/assets/scroll-down-button-hover.svg';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';
import {renderAboutParagraph} from '../../../i18n/renderAboutParagraph.jsx';


const Page1 = ({scrollRef}) => {
    const {t} = useLanguage();
    const {about, a11y} = t;

    const LeftPanelBackground = {
        backgroundImage: `url(${LeftPanelBackgroundImage})`
    }

    return (
        <div className="main-section">
            <div
                className="left-panel"
                style={LeftPanelBackground}
                role="img"
                aria-label={a11y.aboutBgAlt}
            ></div>
            <div className="right-panel">
                <div className="right-panel-up">
                    <header className="about-header">
                        <h2 id="about-heading" className="about-title">
                            {about.titleBefore}{' '}
                            <span className="about-accent">{about.titleAccent}</span>
                        </h2>
                    </header>
                    <div id="my-description">
                        <div className="my-description-background"></div>
                        {about.paragraphs.map((paragraph, index) => (
                            <article className="about-section" key={index}>
                                <p>
                                    {renderAboutParagraph(paragraph, index, about.highlights)}
                                </p>
                            </article>
                        ))}
                    </div>

                </div>
                <div className="right-panel-down">
                    <ScrollDownButton
                        scrollRef={scrollRef}
                        ScrollDownButtonImageSrc={ScrollDownButtonImage}
                        ScrollDownButtonHoverImageSrc={ScrollDownButtonHoverImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page1
