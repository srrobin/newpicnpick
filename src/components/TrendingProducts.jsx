import React from 'react';
import CardCase from './CardCase';
import ProductCard from './ProductCard';

const TrendingProducts = () => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='Trending products' cardBtntext="Show all" cardBtnLink="/"cardBg="bg__white" cardBorder="border__white">
          <div className='d-flex gap-3 justify-content-between'>
            <ProductCard cardBg="cardBlack"/>
            <ProductCard cardBg="cardBlack"/>
            <ProductCard cardBg="cardBlack"/>
            <ProductCard cardBg="cardBlack"/>
            <ProductCard cardBg="cardBlack"/>
            <ProductCard cardBg="cardBlack"/>
          </div>
        </CardCase>
        </div>
    );
};


export default TrendingProducts;