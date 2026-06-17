import './PageApplications.css';
import DesignSlider from '../Page2/DesignSlider/DesignSlider.jsx';
import LeftArrow from '/src/assets/left-slide-button-ui-designs.svg';
import LeftArrowHover from '/src/assets/left-slide-button-ui-designs-hover.svg';
import RightArrow from '/src/assets/right-slide-button-ui-designs.svg';
import RightArrowHover from '/src/assets/right-slide-button-ui-designs-hover.svg';
import {APPLICATION_ASSETS, APPLICATION_ASSET_KEYS} from '../../../data/applicationsProjects.js';
import {SECTIONS} from '../../../data/siteSeo.js';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';
import {useMemo} from 'react';

const PageApplications = () => {
    const {t} = useLanguage();
    const {headingBefore, headingAccent, description, emptyMessage} = t.applications;

    const images = useMemo(() => (
        APPLICATION_ASSET_KEYS
            .map((key, index) => {
                const item = t.applications.items[key];
                const assets = APPLICATION_ASSETS[key];

                if (!item || !assets) {
                    return null;
                }

                const additionalImages = (assets.screens || []).map((src, screenIndex) => ({
                    src,
                    alt: `${item.title} – ${t.a11y.screen} ${screenIndex + 2}`,
                }));

                return {
                    id: index + 1,
                    src: assets.thumbnail,
                    alt: `${t.a11y.appsThumbAlt}: ${item.title}`,
                    caption: item.caption,
                    description: item.description,
                    mainImage: assets.mainImage,
                    additionalImages,
                    title: item.title,
                };
            })
            .filter(Boolean)
    ), [t]);

    return (
        <div className="main-section-applications">
            <div className="top-panel"></div>
            <div className="applications-layout">
                <header className="applications-intro">
                    <p className="applications-eyebrow">{t.applications.heading}</p>
                    <h2 id={SECTIONS.applications.headingId} className="applications-title">
                        {headingBefore}
                        <span className="applications-title-accent">{headingAccent}</span>
                    </h2>
                    <p className="applications-description">
                        {description}
                    </p>
                </header>

                <div className="applications-showcase">
                    <div className="applications-showcase-inner">
                        {images.length > 0 ? (
                            <DesignSlider
                                images={images}
                                leftArrowSrc={LeftArrow}
                                rightArrowSrc={RightArrow}
                                leftArrowHoverSrc={LeftArrowHover}
                                rightArrowHoverSrc={RightArrowHover}
                                variant="applications"
                                popupStyles={{
                                    backgroundColor: '#000000',
                                }}
                            />
                        ) : (
                            <div className="applications-empty">
                                <p>{emptyMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageApplications;
