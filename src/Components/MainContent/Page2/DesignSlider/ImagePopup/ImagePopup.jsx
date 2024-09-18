import React, {useEffect, useState, useRef} from 'react';
import './ImagePopup.css';
import BackArrow from '/src/assets/back-arrow.svg';
import BackArrowHover from '/src/assets/back-arrow-hover.svg';

const ImagePopup = ({isOpen, image, onClose, customStyles}) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const popupRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Otwieranie popupu - uruchamiamy animację z lekkim opóźnieniem
            setIsClosing(false);
            setTimeout(() => {
                setIsTransitioning(true);
                document.body.style.overflow = 'hidden';
            }, 10);
        } else if (!isOpen && isTransitioning) {
            // Zamykamy popup - uruchamiamy animację zwijania
            setIsClosing(true);
            setTimeout(() => {
                setIsTransitioning(false);
                setIsClosing(false);
                document.body.style.overflow = '';
            }, 500); // Czas, jaki trwa animacja (dopasowany do CSS `transition`)
        }
    }, [isOpen, isTransitioning]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target) &&
                popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen && !isTransitioning) {
        return null; // Całkowicie usuń popup po zakończeniu animacji zamykania
    }

    return (
        <div className="popup-overlay" onClick={onClose} ref={overlayRef}>
            <div
                className={`popup-content ${isTransitioning ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
                ref={popupRef}
                style={customStyles}
            >
                <span className="popup-close" onClick={onClose} onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}><img src={!isHovered ? BackArrow : BackArrowHover} alt="back"/></span>

                {/* Tytuł */}
                <h2>{image?.title}</h2>

                {/* Główne zdjęcie */}
                <img className="main-image-popup" src={image?.mainImage} alt={Image?.alt} style={{width: '100%'}}/>

                {/* Opis */}
                <p className="project-description">{image?.description}</p>

                {/* Dodatkowe obrazy */}
                <div className="additional-images">
                    {image?.additionalImages && image.additionalImages.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} style={{width: '100px', margin: '10px'}}/>
                    ))}
                </div>

                {/* Podpis zdjęcia */}
                <div className="popup-caption">{image?.caption}</div>
            </div>
        </div>
    );
};

export default ImagePopup;
