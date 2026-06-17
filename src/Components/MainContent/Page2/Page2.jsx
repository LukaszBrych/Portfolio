import './Page2.css'
import DesignSlider from "./DesignSlider/DesignSlider.jsx";
import LeftArrow from '/src/assets/left-slide-button-ui-designs.svg';
import LeftArrowHover from '/src/assets/left-slide-button-ui-designs-hover.svg';
import RightArrow from '/src/assets/right-slide-button-ui-designs.svg';
import RightArrowHover from '/src/assets/right-slide-button-ui-designs-hover.svg';
import ToolsRentDesignThumbnail from '/src/assets/ToolsRent-design-thumbnail.png';
import ToolsRentFirstPhoto from '/src/assets/ToolsRent-first-photo.png';
import ToolsRentSecondPhoto from '/src/assets/ToolsRent-second-photo.png';
import ToolsRentThirdPhoto from '/src/assets/ToolsRent-third-photo.png';
import ToolsRentFourthPhoto from '/src/assets/ToolsRent-fourth-photo.png';
import ToolsRentFifthPhoto from '/src/assets/ToolsRent-fifth-photo.png';
import ToolsRentSixthPhoto from '/src/assets/ToolsRent-sixth-photo.png';
import ToolsRentSeventhPhoto from '/src/assets/ToolsRent-seventh-photo.png';
import ToolsRentEighthPhoto from '/src/assets/ToolsRent-eighth-photo.png';
import ToolsRentNinthPhoto from '/src/assets/ToolsRent-nineth-photo.png';
import ToolsRentEleventhPhoto from '/src/assets/RentTools-eleventh-photo.png';
import ToolsRentTwelfthPhoto from '/src/assets/ToolsRent-twelveth-photo.png';
import ToolsRentThirteenthPhoto from '/src/assets/ToolsRent-thirteenth-photo.png';
import ToolsRentFourteenthPhoto from '/src/assets/ToolsRent-fourteenth-photo.png';
import ToolsRentFifteenthPhoto from '/src/assets/ToolsRent-fifteenth-photo.png';
import ToolsRentSixteenthPhoto from '/src/assets/ToolsRent-sixteenth-photo.png';
import ToolsRentSeventeenthPhoto from '/src/assets/ToolsRent-seventeenth-photo.png';
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
    const {toolsRent, gym, shop, hotel, music} = t.uiProjects.items;

    const images = useMemo(() => [
        {
            id: 1,
            src: ToolsRentDesignThumbnail,
            alt: `${t.a11y.uiThumbAlt}: ${toolsRent.title}`,
            caption: toolsRent.caption,
            description: toolsRent.description,
            mainImage: ToolsRentFirstPhoto,
            additionalImages: [
                {src: ToolsRentSecondPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 2`},
                {src: ToolsRentThirdPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 3`},
                {src: ToolsRentFourthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 4`},
                {src: ToolsRentFifthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 5`},
                {src: ToolsRentSixthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 6`},
                {src: ToolsRentSeventhPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 7`},
                {src: ToolsRentEighthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 8`},
                {src: ToolsRentNinthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 9`},
                {src: ToolsRentEleventhPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 10`},
                {src: ToolsRentTwelfthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 11`},
                {src: ToolsRentThirteenthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 12`},
                {src: ToolsRentFourteenthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 13`},
                {src: ToolsRentFifteenthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 14`},
                {src: ToolsRentSixteenthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 15`},
                {src: ToolsRentSeventeenthPhoto, alt: `${toolsRent.title} – ${t.a11y.screen} 16`},
            ],
            title: toolsRent.title,
        },
        {
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
            src: MusicDesignThumbnail,
            alt: `${t.a11y.uiThumbAlt}: ${music.title}`,
            caption: music.caption,
            title: music.title,
            description: music.description,
            mainImage: MusicFirstPhoto,
        },
    ], [t, toolsRent, gym, shop, hotel, music]);

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
