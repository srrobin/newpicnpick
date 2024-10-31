import React from 'react';
import CardCase from './CardCase';
import ProductCardBorder from './ProductCardBorder';

const DailyDiscover = () => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='Daily discover' cardBtntext="" cardBtnLink=""cardBg="bg__white" cardBorder="border__white">
          <div className='d-flex gap-3  flex-wrap '>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
            <ProductCardBorder cardBg="cardWhite" border="border"/>
          </div>
        </CardCase>
        </div>
    );
};

export default DailyDiscover;