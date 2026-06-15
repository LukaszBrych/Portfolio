import './Page3.css'
import DesignSlider from "../Page2/DesignSlider/DesignSlider.jsx";
import LeftArrow from '/src/assets/left-slide-button-graphic-designs.svg';
import LeftArrowHover from '/src/assets/left-slide-button-graphic-designs-hover.svg';
import RightArrow from '/src/assets/right-slide-button-graphic-designs.svg';
import RightArrowHover from '/src/assets/right-slide-button-graphic-designs-hover.svg';
import PandaThumbnail from  '/src/assets/panda-thumbnail.png';
import HumanThumbnail from '/src/assets/human-thumbnail.png';
import OwlThumbnail from '/src/assets/owl-thumbnail.png';
import DeerThumbnail from '/src/assets/deer-thumbnail.png';
import {SECTIONS} from '../../../data/siteSeo.js';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';
import {useMemo} from 'react';

const graphicSources = [PandaThumbnail, HumanThumbnail, OwlThumbnail, DeerThumbnail];

const Page3 = () => {
    const {t} = useLanguage();

    const images = useMemo(() => t.graphics.items.map((work, index) => ({
        id: index + 1,
        src: graphicSources[index],
        alt: work.alt,
        caption: '',
        title: work.title,
        description: work.description,
        mainImage: graphicSources[index],
    })), [t.graphics.items]);

    return (
        <div className="main-section-3">
            <div className="top-top-panel"></div>
            <div className="top-panel">
                <div className="graphic-designs-description-outside">
                    <div className="title-outside">
                        <h2 id={SECTIONS.graphics.headingId}>{t.graphics.heading}</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="graphic-designs-description">
                        {t.graphics.description}
                    </p>
                </div>
            </div>
            <div className="design-slider-outside">
                <DesignSlider
                    images={images}
                    leftArrowSrc={LeftArrow}
                    rightArrowSrc={RightArrow}
                    leftArrowHoverSrc={LeftArrowHover}
                    rightArrowHoverSrc={RightArrowHover}
                    variant="graphics"
                    popupStyles={{
                        backgroundColor: '#AFB8A8',
                    }}
                />
            </div>
        </div>
    )
}

export default Page3
