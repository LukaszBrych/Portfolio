import './ScrollDownButton.css';
import React from 'react';
import {useState} from 'react';

const ScrollDownButton = ({
                              scrollRef,
                              ScrollDownButtonImageSrc,
                              ScrollDownButtonHoverImageSrc
                          }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const ScrollDownButtonBackground = {
        backgroundImage: `url(${isHovered ? ScrollDownButtonHoverImageSrc : ScrollDownButtonImageSrc})`
    }
    // Funkcja przewijająca do sekcji
    const scrollToSection = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    return (
        <div className="scroll-down-button">
            <button onClick={scrollToSection} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    >
                <img src={isHovered ? ScrollDownButtonHoverImageSrc : ScrollDownButtonImageSrc} alt={''}/>
            </button>
        </div>
    );
};

export default ScrollDownButton;
