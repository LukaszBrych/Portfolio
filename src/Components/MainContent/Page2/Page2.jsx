import './Page2.css'
import DesignSlider from "./DesignSlider/DesignSlider.jsx";
import LeftArrow from '/src/assets/left-slide-button-ui-designs.svg';
import LeftArrowHover from '/src/assets/left-slide-button-ui-designs-hover.svg';
import RightArrow from '/src/assets/right-slide-button-ui-designs.svg';
import RightArrowHover from '/src/assets/right-slide-button-ui-designs-hover.svg';
import GymDesignThumbnail from '/src/assets/gym-design-thumbnail.png';
import ShopDesignThumbnail from '/src/assets/shop-design-thumbnail.png';
import HotelDesignThumbnail from '/src/assets/hotel-design-thumbnail.png';
import Test from '/src/assets/test.png';

const Page2 = () => {

    const images = [
        {id: 1, src: GymDesignThumbnail, alt: 'Image 1', caption: 'System obsługi siłowni'},
        {id: 2, src: ShopDesignThumbnail, alt: 'Image 2', caption: 'Sklep internetowy'},
        {id: 3, src: HotelDesignThumbnail, alt: 'Image 3', caption: 'Strona hotelowa'},
        {id: 4, src: Test, alt: 'Image 4', caption: 'Caption 4'},
        {id: 5, src: Test, alt: 'Image 4', caption: 'Caption 5'},
        {id: 6, src: Test, alt: 'Image 4', caption: 'Caption 6'},
        // Dodaj więcej obrazów według potrzeby
    ];

    return (
        <div className="main-section-2">
            <div className="UI-designs-description-outside">
                <h2>PROJEKTY UI</h2>
                <div className="UI-designs-description">
                    Lorem ipsum dolor sit amet consectetur. Quam quisque vel ac tempus nulla nisi. Luctus adipiscing
                    faucibus est varius risus purus sit cras in. Non aenean eu enim laoreet mollis nisl. Posuere mollis
                    aliquam morbi ut leo eu vel. Lorem ipsum dolor sit amet consectetur. Quam quisque vel ac tempus
                    nulla
                    nisi. Luctus adipiscing faucibus est varius risus purus sit cras in. Lorem ipsum dolor sit amet
                    consectetur.
                </div>
            </div>
            <div className="design-slider-outside">
                <DesignSlider
                    images={images}
                    leftArrowSrc={LeftArrow}
                    rightArrowSrc={RightArrow}
                    leftArrowHoverSrc={LeftArrowHover}
                    rightArrowHoverSrc={RightArrowHover}
                />
            </div>
        </div>
    )
}

export default Page2