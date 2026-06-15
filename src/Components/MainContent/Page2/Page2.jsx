import './Page2.css'
import DesignSlider from "./DesignSlider/DesignSlider.jsx";
import LeftArrow from '/src/assets/left-slide-button-ui-designs.svg';
import LeftArrowHover from '/src/assets/left-slide-button-ui-designs-hover.svg';
import RightArrow from '/src/assets/right-slide-button-ui-designs.svg';
import RightArrowHover from '/src/assets/right-slide-button-ui-designs-hover.svg';
import GymDesignThumbnail from '/src/assets/gym-design-thumbnail.png';
import ShopDesignThumbnail from '/src/assets/shop-design-thumbnail.png';
import HotelDesignThumbnail from '/src/assets/hotel-design-thumbnail.png';
import MusicDesignThumbnail from '/src/assets/music-design-thumbnail-DsZiVuno.png';
import GymFirstPhoto from '/src/assets/gym-first-photo-DeVZzIay.png';
import GymSecondPhoto from '/src/assets/gym-second-photo-BIm93e40.png';
import GymThirdPhoto from '/src/assets/gym-third-photo-DoOn9Ez3.png';
import GymFourthPhoto from '/src/assets/gym-fourth-photo-CXhpm-Bc.png';
import GymFifthPhoto from '/src/assets/gym-fiveth-photo-xq36ENBO.png';
import GymSixthPhoto from '/src/assets/gym-sixth-photo-DPe7LtN_.png';
import GymSeventhPhoto from '/src/assets/gym-seventh-photo-CCgJUvvw.png';
import ShopFirstPhoto from '/src/assets/shop-first-photo-B8TYVCZo.png';
import ShopSecondPhoto from '/src/assets/shop-second-photo-BPJi4wFY.png';
import HotelFirstPhoto from '/src/assets/hotel-first-photo-CMHmwydC.png';
import HotelSecondPhoto from '/src/assets/hotel-second-photo-Dal2JMuw.png';
import MusicFirstPhoto from '/src/assets/music-first-photo-DwA6bAqw.png';
import {SECTIONS} from '../../../data/siteSeo.js';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';
import {useMemo} from 'react';

const Page2 = () => {
    const {t} = useLanguage();
    const {gym, shop, hotel, music} = t.uiProjects.items;

    const images = useMemo(() => [
        {
            id: 1,
            src: GymDesignThumbnail,
            alt: `${t.a11y.uiThumbAlt}: ${gym.title}`,
            caption: gym.caption,
            description: gym.description,
            mainImage: GymFirstPhoto,
            additionalImages: [
                {src: GymSecondPhoto, alt: `${gym.title} – ${t.a11y.screen} 2`},
                {src: GymThirdPhoto, alt: `${gym.title} – ${t.a11y.screen} 3`},
                {src: GymFourthPhoto, alt: `${gym.title} – ${t.a11y.screen} 4`},
                {src: GymFifthPhoto, alt: `${gym.title} – ${t.a11y.screen} 5`},
                {src: GymSixthPhoto, alt: `${gym.title} – ${t.a11y.screen} 6`},
                {src: GymSeventhPhoto, alt: `${gym.title} – ${t.a11y.screen} 7`},
            ],
            title: gym.title,
        },
        {
            id: 2,
            src: ShopDesignThumbnail,
            alt: `${t.a11y.uiThumbAlt}: ${shop.title}`,
            caption: shop.caption,
            title: shop.title,
            description: shop.description,
            mainImage: ShopFirstPhoto,
            additionalImages: [
                {src: ShopSecondPhoto, alt: `${shop.title} – ${t.a11y.screen} 2`},
            ],
        },
        {
            id: 3,
            src: HotelDesignThumbnail,
            alt: `${t.a11y.uiThumbAlt}: ${hotel.title}`,
            caption: hotel.caption,
            title: hotel.title,
            description: hotel.description,
            mainImage: HotelFirstPhoto,
            additionalImages: [
                {src: HotelSecondPhoto, alt: `${hotel.title} – ${t.a11y.screen} 2`},
            ],
        },
        {
            id: 4,
            src: MusicDesignThumbnail,
            alt: `${t.a11y.uiThumbAlt}: ${music.title}`,
            caption: music.caption,
            title: music.title,
            description: music.description,
            mainImage: MusicFirstPhoto,
        },
    ], [t, gym, shop, hotel, music]);

    return (
        <div className="main-section-2">
            <div className="top-panel"></div>
            <div className="UI-designs-description-outside">
                <h2 id={SECTIONS.uiProjects.headingId}>{t.uiProjects.heading}</h2>
                <p className="UI-designs-description">
                    {t.uiProjects.description}
                </p>
            </div>
            <div className="design-slider-outside">
                <DesignSlider
                    images={images}
                    leftArrowSrc={LeftArrow}
                    rightArrowSrc={RightArrow}
                    leftArrowHoverSrc={LeftArrowHover}
                    rightArrowHoverSrc={RightArrowHover}
                    popupStyles={{
                        backgroundColor: '#000000',
                    }}
                />
            </div>
        </div>
    )
}

export default Page2
