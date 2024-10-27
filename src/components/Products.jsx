import React from 'react';
import CardCase from './CardCase';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='products' cardBtntext="Show all" cardBtnLink="/" cardBg="bg__black" cardBorder="border__white">
          <div className='d-flex gap-3 justify-content-between'>
            <ProductCard cardBg="cardWhite"/>
            <ProductCard cardBg="cardWhite"/>
            <ProductCard cardBg="cardWhite"/>
            <ProductCard cardBg="cardWhite"/>
            <ProductCard cardBg="cardWhite"/>
            <ProductCard cardBg="cardWhite"/>
          </div>
        </CardCase>
        </div>
    );
};

export default Products;