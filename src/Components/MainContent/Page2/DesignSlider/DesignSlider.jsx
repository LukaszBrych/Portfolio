import React, {useState} from 'react';
import './DesignSlider.css'; // Plik z stylami
import ImagePopup from './ImagePopup/ImagePopup.jsx'; // Importowanie nowego komponentu

const DesignSlider = ({
                          images,
                          leftArrowSrc,
                          rightArrowSrc,
                          leftArrowHoverSrc,
                          rightArrowHoverSrc,
                          imageStyle,
                          popupStyles,
                      }) => {
    const visibleItemsCount = 3; // Liczba widocznych elementów

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Stan dla popupu
    const [selectedImage, setSelectedImage] = useState(null); // Wybrane zdjęcie

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

    const handleImageClick = (image) => {
        setSelectedImage(image); // Ustaw wybrane zdjęcie
        setIsPopupOpen(true); // Otwórz popup
    };

    const closePopup = () => {
        setIsPopupOpen(false); // Zamknij popup
        setSelectedImage(null); // Wyzeruj wybrane zdjęcie
    };

    return (
        <div className="carousel-container">
            <button
                className="arrow left"
                onClick={handlePrev}
                onMouseEnter={() => setIsLeftHovered(true)}
                onMouseLeave={() => setIsLeftHovered(false)}
            >
                <img src={isLeftHovered ? leftArrowHoverSrc : leftArrowSrc} alt="Prev"/>
            </button>
            <div className="carousel">
                {extendedImages.slice(currentIndex, currentIndex + visibleItemsCount).map((image) => (
                    <div key={image.id} className="carousel-item">
                        <div className="caption-photo-outside" onClick={() => handleImageClick(image)}>
                            <img src={image.src} alt={image.alt} style={imageStyle}/>
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
                <img src={isRightHovered ? rightArrowHoverSrc : rightArrowSrc} alt="Next"/>
            </button>

            {/* Użycie komponentu ImagePopup */}
            <ImagePopup isOpen={isPopupOpen} image={selectedImage} onClose={closePopup} customStyles={popupStyles}/>
        </div>
    );
};

export default DesignSlider;
