/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import p1 from "../assets/p1.jpg";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
const ProductCard = ({ bgColor, cardBorder }) => {
    return (
            <div  className='product__card' 
            style={{ 
                backgroundColor: bgColor || 'white', 
                border: cardBorder || '' 
            }}
       >    
            <div className='product__image'>
               <img src={p1} alt='' />
            </div> 
            <div className='product__title'>Stylish coffee cup and saucer</div>
            <div className='rating__review'>
                <div className='rating'>
                    <MdOutlineStarBorderPurple500 />
                    <MdOutlineStarBorderPurple500 />
                    <MdOutlineStarBorderPurple500 />
                    <MdOutlineStarBorderPurple500 />
                    <MdOutlineStarBorderPurple500 />
                </div>
                <div className='review'> 0 reviews</div>
            </div>
            <div className='price__discount'>
                <div className='priv__price'>৳ 1,600</div>
                <div className='current__price'>৳ 1,100</div>
                <div className='discount__rate'> -32% </div>
            </div>
        </div>
    );
};

export default ProductCard;