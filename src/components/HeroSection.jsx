import h3 from "../assets/h3.png"
import h4 from "../assets/s1.png"
import Slider from "react-slick/lib/slider.js";
import { MEDIA_BASE_URL } from "../constants/URL";
const HeroSection = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const { main, right_top, right_bottom } = data;
    console.log('cis = data', data);


    return (
        <div className='main__slide hero__section'>
            <div className='parent'>
                <div className='div1'>

                    <Slider {...settings}>
                        {
                            main?.map(itm => (
                                <img src={MEDIA_BASE_URL+itm?.image} alt="" key={itm?.id} style={{ width: '100%', height: '100%' }} />
                            ))
                        }
                    </Slider>
                </div>

                <div className="inner-image-parent">


                    <div className="div2">
                        <img src={MEDIA_BASE_URL+right_top?.image} alt="Hero 2" className='image__radius' />
                    </div>
                    <div>
                        <img src={MEDIA_BASE_URL+right_bottom?.image} alt="Hero 3" className='image__radius' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;