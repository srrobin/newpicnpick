import React from 'react';
import CardCase from './CardCase';
import ProductCard from './ProductCard';

const DailyDiscover = () => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='Daily discover' cardBtntext="" cardBtnLink=""cardBg="bg__white" cardBorder="border__white">
          <div className='d-flex gap-3  flex-wrap '>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
            <ProductCard cardBg="cardWhite" border="border"/>
          </div>
        </CardCase>
        </div>
    );
};

export default DailyDiscover;