import React from 'react';
import CardCase from './CardCase';
import ProductCard from './ProductCard';

import Slider from "react-slick";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";


const TrendingProducts = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <GrFormNext />,
    prevArrow: <GrFormPrevious />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <div className='gap-20 '> 
          <CardCase cardTitle='Trending products' cardBtntext="Show all" cardBtnLink="/"cardBg="bg__white" cardBorder="border__white">
              <div className='slider-container'>
                <Slider {...settings}>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                    <ProductCard cardBg="cardBlack"/>
                </Slider>
              </div>
          </CardCase>
        </div>
    );
};


export default TrendingProducts;