import './Page3.css'
import DesignSlider from "../Page2/DesignSlider/DesignSlider.jsx";
import LeftArrow from '/src/assets/left-slide-button-graphic-designs.svg';
import LeftArrowHover from '/src/assets/left-slide-button-graphic-designs-hover.svg';
import RightArrow from '/src/assets/right-slide-button-graphic-designs.svg';
import RightArrowHover from '/src/assets/right-slide-button-graphic-designs-hover.svg';
import PandaThumbnail from  '/src/assets/panda-thumbnail.png';
import HumanThumbnail from '/src/assets/human-thumbnail.png';
import OwlThumbnail from '/src/assets/owl-thumbnail.png';
import DeerThumbnail from '/src/assets/deer-thumbnail.png';

const Page3 = () => {
    const images = [
        {id: 1, src: PandaThumbnail, alt: 'Image 1', caption: ''},
        {id: 2, src: HumanThumbnail, alt: 'Image 2', caption: ''},
        {id: 3, src: OwlThumbnail, alt: 'Image 3', caption: ''},
        {id: 4, src: DeerThumbnail, alt: 'Image 4', caption: ''},
        // Dodaj więcej obrazów według potrzeby
    ];
    return (
        <div className="main-section-3">
            <div className="top-top-panel"></div>
            <div className="top-panel">
                <div className="graphic-designs-description-outside">
                    <div className="title-outside">
                        <h2>RYSUNKI GRAFICZNE</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="graphic-designs-description">
                        Lorem ipsum dolor sit amet consectetur. Quam quisque vel ac tempus nulla nisi. Luctus adipiscing
                        faucibus est varius risus purus sit cras in. Non aenean eu enim laoreet mollis nisl. Posuere
                        mollis
                        aliquam morbi ut leo eu vel. Lorem ipsum dolor sit amet consectetur. Quam quisque vel ac tempus
                        nulla
                        nisi. Luctus adipiscing faucibus est varius risus purus sit cras in. Lorem ipsum dolor sit amet
                        consectetur.
                    </div>
                </div>
            </div>
            <div className="design-slider-outside">
                <DesignSlider
                    images={images}
                    leftArrowSrc={LeftArrow}
                    rightArrowSrc={RightArrow}
                    leftArrowHoverSrc={LeftArrowHover}
                    rightArrowHoverSrc={RightArrowHover}
                    imageStyle={{borderRadius: '30px'}}
                    popupStyles={{
                        backgroundColor: '#AFB8A8'
                    }}
                />
            </div>
        </div>
    )
}

export default Page3