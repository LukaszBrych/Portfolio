import React, {useEffect, useRef, useState} from 'react';
import './DesignSlider.css';
import ImagePopup from './ImagePopup/ImagePopup.jsx';
import {useLanguage} from '../../../../i18n/LanguageContext.jsx';

const MOBILE_BREAKPOINT = 900;

const DesignSlider = ({
                          images,
                          leftArrowSrc,
                          rightArrowSrc,
                          leftArrowHoverSrc,
                          rightArrowHoverSrc,
                          imageStyle,
                          popupStyles,
                          variant = 'default',
                      }) => {
    const {t} = useLanguage();
    const visibleItemsCount = Math.min(3, Math.max(images.length, 1));
    const displayedItemsCount = Math.min(visibleItemsCount, images.length);
    const showArrows = images.length > visibleItemsCount;
    const showDots = images.length > 1;
    const isGraphics = variant === 'graphics';
    const isApplications = variant === 'applications';

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [slideAnimation, setSlideAnimation] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const mobileCarouselRef = useRef(null);
    const slideRefs = useRef([]);
    const scrollTimeoutRef = useRef(null);

    const extendedImages = images.length > visibleItemsCount
        ? [...images, ...images, ...images]
        : images;

    const desktopSlides = images.length > visibleItemsCount
        ? extendedImages.slice(currentIndex, currentIndex + visibleItemsCount)
        : images;

    const activeDotIndex = ((currentIndex % images.length) + images.length) % images.length;

    useEffect(() => {
        setCurrentIndex(0);
    }, [images.length]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

        const updateIsMobile = () => setIsMobile(mediaQuery.matches);
        updateIsMobile();

        mediaQuery.addEventListener('change', updateIsMobile);
        return () => mediaQuery.removeEventListener('change', updateIsMobile);
    }, []);

    useEffect(() => {
        slideRefs.current = slideRefs.current.slice(0, images.length);
    }, [images.length]);

    const triggerSlideAnimation = (direction) => {
        if (isMobile) return;
        setSlideAnimation(direction === 'next' ? 'carousel-slide-next' : 'carousel-slide-prev');
        window.setTimeout(() => setSlideAnimation(''), 480);
    };

    const handleNext = () => {
        if (isMobile) {
            goToSlide((activeDotIndex + 1) % images.length);
            return;
        }
        triggerSlideAnimation('next');
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= images.length ? newIndex - images.length : newIndex;
        });
    };

    const handlePrev = () => {
        if (isMobile) {
            goToSlide((activeDotIndex - 1 + images.length) % images.length);
            return;
        }
        triggerSlideAnimation('prev');
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? newIndex + images.length : newIndex;
        });
    };

    const goToSlide = (index) => {
        if (index === activeDotIndex) return;

        if (isMobile) {
            slideRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
            setCurrentIndex(index);
            return;
        }

        triggerSlideAnimation(index > activeDotIndex ? 'next' : 'prev');
        setCurrentIndex(index);
    };

    const handleMobileScroll = () => {
        const container = mobileCarouselRef.current;
        if (!container) return;

        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
            const center = container.scrollLeft + container.clientWidth / 2;
            let closestIndex = 0;
            let minDistance = Infinity;

            slideRefs.current.forEach((slide, index) => {
                if (!slide) return;
                const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
                const distance = Math.abs(center - slideCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setCurrentIndex(closestIndex);
        }, 80);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage(null);
    };

    const containerClassName = [
        'carousel-container',
        isGraphics ? 'carousel-container--graphics' : '',
        isApplications ? 'carousel-container--applications' : '',
        isMobile ? 'carousel-container--mobile' : '',
        images.length === 1 ? 'carousel-container--single' : '',
        !showArrows ? 'carousel-container--no-arrows' : '',
    ].filter(Boolean).join(' ');

    const carouselClassName = [
        'carousel',
        slideAnimation,
        isMobile ? 'carousel--mobile' : '',
        isGraphics ? 'carousel--graphics' : '',
        isApplications ? 'carousel--applications' : '',
        `carousel--display-${displayedItemsCount}`,
    ].filter(Boolean).join(' ');

    const renderSlide = (image, index, key) => (
        <div
            key={key}
            className="carousel-item"
            ref={(element) => {
                if (isMobile) slideRefs.current[index] = element;
            }}
        >
            <div
                className="caption-photo-outside"
                onClick={() => handleImageClick(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleImageClick(image);
                    }
                }}
            >
                <img src={image.src} alt={image.alt} style={imageStyle}/>
                {image.caption ? <div className="caption">{image.caption}</div> : null}
            </div>
        </div>
    );

    return (
        <div className={containerClassName}>
            <div className={`carousel-row ${showArrows && !isMobile ? '' : 'carousel-row--no-arrows'}`}>
                {!isMobile && showArrows && (
                    <button
                        type="button"
                        className="arrow left"
                        onClick={handlePrev}
                        onMouseEnter={() => setIsLeftHovered(true)}
                        onMouseLeave={() => setIsLeftHovered(false)}
                        aria-label={t.a11y.prevSlide}
                    >
                        <img src={isLeftHovered ? leftArrowHoverSrc : leftArrowSrc} alt=""/>
                    </button>
                )}

                <div
                    className={carouselClassName}
                    ref={isMobile ? mobileCarouselRef : null}
                    onScroll={isMobile ? handleMobileScroll : undefined}
                >
                    {isMobile
                        ? images.map((image, index) => renderSlide(image, index, image.id))
                        : desktopSlides
                            .map((image, index) => renderSlide(image, index, `${image.id}-${currentIndex}-${index}`))}
                </div>

                {!isMobile && showArrows && (
                    <button
                        type="button"
                        className="arrow right"
                        onClick={handleNext}
                        onMouseEnter={() => setIsRightHovered(true)}
                        onMouseLeave={() => setIsRightHovered(false)}
                        aria-label={t.a11y.nextSlide}
                    >
                        <img src={isRightHovered ? rightArrowHoverSrc : rightArrowSrc} alt=""/>
                    </button>
                )}
            </div>

            {showDots && (
                <div className="carousel-dots" role="tablist" aria-label={t.a11y.slideNav}>
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            type="button"
                            className={`carousel-dot ${index === activeDotIndex ? 'is-active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`${t.a11y.slide} ${index + 1}`}
                            aria-selected={index === activeDotIndex}
                        />
                    ))}
                </div>
            )}

            <ImagePopup isOpen={isPopupOpen} image={selectedImage} onClose={closePopup} customStyles={popupStyles}/>
        </div>
    );
};

export default DesignSlider;
