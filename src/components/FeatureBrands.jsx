import React, { useRef } from 'react';
import b1 from '../assets/b1.png';
import sb from '../assets/sales-banner.png';
import Slider from "react-slick";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { MEDIA_BASE_URL } from '../constants/URL';

const FeatureBrands = ({ data }) => {
    let sliderRef = useRef(null);
    const settings = {
        // className: "center",
        centerMode: false,
        infinite: false,
        // centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        // nextArrow: <GrFormNext />,
        // prevArrow: <GrFormPrevious />,
        // slidesPerRow: 2c

    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <div className="area home-section featured-brands">
            <div className="flex sided title">
                <h4>Featured Brands</h4>
                <div className="arrow-buttons-feature">
                    <span onClick={previous}><GrFormPrevious /></span>
                    <span onClick={next}><GrFormNext /></span>
                </div>
                <a href="/brands" className="link">
                    Show all
                </a>
            </div>
            <div className="area-content double_line feature-slick">

                <Slider
                    {...settings}
                    ref={slider => {
                        sliderRef = slider;
                    }}>

                    {
                        data?.map(itm => (
                            <Link href='/' className="single__features text-center block page-link" key={itm?.id}>
                            <div className="img-wrapper">
                                <img
                                    src={MEDIA_BASE_URL+itm?.image}
                                    alt="Addidus brand logo"
                                    width="50"
                                    height="50"
                                    className="lazy-img"
                                    style={{ opacity: 1 }}
                                />
                            </div>
                            <div className="item-title">{itm?.title}</div>
                        </Link>
                        )
                        )
                    }
                </Slider>
            </div>
        </div>

    );
};

export default FeatureBrands;