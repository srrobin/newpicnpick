import React from 'react';
import b1 from '../assets/b1.png'; 
import sb from '../assets/sales-banner.png'; 
import Slider from "react-slick";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const FeatureBrands = () => {
    const settings = {
        // className: "center",
        centerMode: false,
        infinite: false,
        // centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        nextArrow: <GrFormNext />,
        prevArrow: <GrFormPrevious />,
        // slidesPerRow: 2
      };


    return (
        <div className='brands-wrapper'>
        <div className="brands-inner">
        <div className="area home-section featured-brands">
            <div className="flex sided title">
            <h4>Featured Brands</h4>
            <a href="/brands" className="link">
                Show all
            </a>
            </div>
            <div className="area-content double_line ">
            <Slider {...settings}>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                  <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>

            <a href='/' className="single__features text-center block page-link"  >
                <div className="img-wrapper">
                    <img 
                        src={b1} 
                        alt="Addidus brand logo" 
                        width="50" 
                        height="50" 
                        className="lazy-img" 
                        style={{ opacity: 1 }}
                    />
                </div>
                                <div className="item-title">Addidus</div>

            </a>




            </Slider>
            </div>
        </div>
        </div>

        <div className="brand-banner">
        <a href="/products/sale?banner=1" className="block banner-wrapper">
            <img 
            src={sb}
            alt="Sale" 
            height="100" 
            width="500" 
            />
        </a>
        </div>
        </div>
    );
};

export default FeatureBrands;