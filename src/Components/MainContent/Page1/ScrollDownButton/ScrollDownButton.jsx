import './ScrollDownButton.css';
import React from 'react';
import {useState} from 'react';
import {scrollToSectionRef} from '../../../../utils/scrollToSection.js';
import {useLanguage} from '../../../../i18n/LanguageContext.jsx';

const ScrollDownButton = ({
                              scrollRef,
                              ScrollDownButtonImageSrc,
                              ScrollDownButtonHoverImageSrc
                          }) => {

    const [isHovered, setIsHovered] = useState(false);
    const {t} = useLanguage();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const scrollToSection = () => {
        scrollToSectionRef(scrollRef);
    };

    return (
        <div className="scroll-down-button">
            <button
                type="button"
                onClick={scrollToSection}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label={t.a11y.scrollDown}
            >
                <img src={isHovered ? ScrollDownButtonHoverImageSrc : ScrollDownButtonImageSrc} alt=""/>
            </button>
        </div>
    );
};

export default ScrollDownButton;
