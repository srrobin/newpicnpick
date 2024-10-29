import React from 'react';
import b1 from '../assets/b1.png'; 
import Slider from "react-slick";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const FeatureBrands = () => {
    const settings = {
        // className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        nextArrow: <GrFormNext />,
        prevArrow: <GrFormPrevious />,
        // slidesPerRow: 2
      };


    return (
        <div className="card" style={{ minHeight: "300px" }}>
            <div className="card-header card__header" style={{ borderBottom: "none", background: "#fff" }}>
                <div className="card__title">Featured Brands</div>
                <div className="card__button">
                    <a className="" href="/">Show All</a>
                </div>
            </div>
            <div className="card-body feature__body">
            <div className="slider-container double_line ">
            <Slider {...settings}>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
            <a href='/' className="single__features text-center "  >
                <img 
                    src={b1} 
                    alt="Addidus brand logo" 
                    width="99" 
                    height="99" 
                    className="rounded-circle pt-2" 
                    style={{ objectFit: 'cover' }}
                />
                <div className="brandName">Addidus</div>
            </a>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
                <div>
                <h3>7</h3>
                </div>
                <div>
                <h3>8</h3>
                </div>
                <div>
                <h3>9</h3>
                </div>
                <div>
                <h3>10</h3>
                </div>
                <div>
                <h3>11</h3>
                </div>
                <div>
                <h3>12</h3>
                </div>
                <div>
                <h3>13</h3>
                </div>
                <div>
                <h3>14</h3>
                </div>
                <div>
                <h3>15</h3>
                </div>
                <div>
                <h3>16</h3>
                </div>
            </Slider>
            </div>
            </div>
        </div>
    );
};

export default FeatureBrands;
