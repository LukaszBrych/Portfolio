import React, { useEffect, useState } from 'react';
import './ImagePopup.css';

const ImagePopup = ({ isOpen, image, onClose, customStyles }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Otwieranie popupu - uruchamiamy animację z lekkim opóźnieniem
            setIsClosing(false);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 10);
        } else if (!isOpen && isTransitioning) {
            // Zamykamy popup - uruchamiamy animację zwijania
            setIsClosing(true);
            setTimeout(() => {
                setIsTransitioning(false);
                setIsClosing(false);
            }, 500); // Czas, jaki trwa animacja (dopasowany do CSS `transition`)
        }
    }, [isOpen, isTransitioning]);

    if (!isOpen && !isTransitioning) {
        return null; // Całkowicie usuń popup po zakończeniu animacji zamykania
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className={`popup-content ${isTransitioning ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
                style={customStyles}
            >
                <span className="popup-close" onClick={onClose}>&times;</span>

                {/* Tytuł */}
                <h2>{image?.title}</h2>

                {/* Główne zdjęcie */}
                <img className="main-image-popup" src={image?.src} alt={image?.alt} style={{ width: '100%' }} />

                {/* Opis */}
                <p>{image?.description}</p>

                {/* Dodatkowe obrazy */}
                <div className="additional-images">
                    {image?.additionalImages && image.additionalImages.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} style={{ width: '100px', margin: '10px' }} />
                    ))}
                </div>

                {/* Podpis zdjęcia */}
                <div className="popup-caption">{image?.caption}</div>
            </div>
        </div>
    );
};

export default ImagePopup;
