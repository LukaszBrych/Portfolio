import React, { useState } from 'react';
import './DesignSlider.css'; // Plik z stylami

const DesignSlider = ({
                          images,
                          leftArrowSrc,
                          rightArrowSrc,
                          leftArrowHoverSrc,
                          rightArrowHoverSrc,
                          imageStyle,
                      }) => {
    const visibleItemsCount = 3; // Liczba widocznych elementów

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    const extendedImages = [...images, ...images, ...images];

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex + 1;
            return newIndex >= images.length ? newIndex - images.length : newIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? newIndex + images.length : newIndex;
        });
    };

    return (
        <div className="carousel-container">
            <button
                className="arrow left"
                onClick={handlePrev}
                onMouseEnter={() => setIsLeftHovered(true)}
                onMouseLeave={() => setIsLeftHovered(false)}
            >
                <img src={isLeftHovered ? leftArrowHoverSrc : leftArrowSrc} alt="Prev" />
            </button>
            <div className="carousel">
                {extendedImages.slice(currentIndex, currentIndex + visibleItemsCount).map((image) => (
                    <div key={image.id} className="carousel-item">
                        <div className="caption-photo-outside">
                            <img src={image.src} alt={image.alt} style={imageStyle} />
                            <div className="caption">{image.caption}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="arrow right"
                onClick={handleNext}
                onMouseEnter={() => setIsRightHovered(true)}
                onMouseLeave={() => setIsRightHovered(false)}
            >
                <img src={isRightHovered ? rightArrowHoverSrc : rightArrowSrc} alt="Next" />
            </button>
        </div>
    );
};

export default DesignSlider;
