import React, {useEffect, useState, useRef} from 'react';
import {createPortal} from 'react-dom';
import './ImagePopup.css';
import BackArrow from '/src/assets/back-arrow.svg';
import BackArrowHover from '/src/assets/back-arrow-hover.svg';
import {useLanguage} from '../../../../../i18n/LanguageContext.jsx';
import useScrollLock from '../../../../../hooks/useScrollLock.js';

const ImagePopup = ({isOpen, image, onClose, customStyles}) => {
    const {t} = useLanguage();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const popupRef = useRef(null);

    const additionalImages = Array.isArray(image?.additionalImages) ? image.additionalImages : [];
    const mainScreenSrc = image?.mainImage || image?.src;
    const isAccentBg = customStyles?.backgroundColor === '#AFB8A8';
    const isScrollLocked = isOpen || isTransitioning;

    useScrollLock(isScrollLocked);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            const openTimer = window.setTimeout(() => {
                setIsTransitioning(true);
            }, 10);

            return () => window.clearTimeout(openTimer);
        }

        if (!isOpen && isTransitioning) {
            setIsClosing(true);
            const closeTimer = window.setTimeout(() => {
                setIsTransitioning(false);
                setIsClosing(false);
            }, 500);

            return () => window.clearTimeout(closeTimer);
        }

        return undefined;
    }, [isOpen, isTransitioning]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen && !isTransitioning) {
        return null;
    }

    return createPortal(
        <div className="popup-overlay" onClick={onClose}>
            <div
                className={`popup-content ${isTransitioning ? 'open' : ''} ${isClosing ? 'closing' : ''} ${isAccentBg ? 'popup-content--accent' : ''}`}
                onClick={(e) => e.stopPropagation()}
                ref={popupRef}
                style={customStyles}
            >
                <div className="popup-toolbar">
                    <button
                        type="button"
                        className="popup-exit"
                        onClick={onClose}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label={t.a11y.close}
                    >
                        <img src={isHovered ? BackArrowHover : BackArrow} alt=""/>
                        <span>{t.a11y.close}</span>
                    </button>
                </div>

                {(image?.title || image?.description) && (
                    <header className="popup-header">
                        {image?.title && <h2>{image.title}</h2>}
                        {image?.description && (
                            <p className="project-description">{image.description}</p>
                        )}
                    </header>
                )}

                <div className="popup-screens">
                    {mainScreenSrc && (
                        <img
                            className="popup-screen"
                            src={mainScreenSrc}
                            alt={image?.alt || image?.title || ''}
                        />
                    )}
                    {additionalImages.map((img, index) => (
                        <img
                            key={index}
                            className="popup-screen"
                            src={img.src}
                            alt={img.alt || ''}
                        />
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ImagePopup;
