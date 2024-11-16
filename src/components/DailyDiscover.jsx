import React from 'react';
import CardCase from './CardCase';
import ProductCardBorder from './ProductCardBorder';

const DailyDiscover = ({ data }) => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='Daily discover' cardBtntext="" cardBtnLink=""cardBg="bg__white" cardBorder="border__white">
          <div className='topselling__product2'>
            {
              data?.product_collections?.map(itm => <ProductCardBorder cardBg="cardWhite" border="border" data={itm} key={itm?.key} />)
            }
          </div>
        </CardCase>
        </div>
    );
};

export default DailyDiscover;