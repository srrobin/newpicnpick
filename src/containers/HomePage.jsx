import React from 'react';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import TrendingProducts from '../components/TrendingProducts';
import DailyDiscover from '../components/DailyDiscover';
import TopSellingProducts from '../components/TopSellingProducts';
import FeatureBrandsAndSeals from '../components/FeatureBrandsAndSeals';
import ProductBanner from '../components/ProductBanner';
import sb1 from "../assets/sb1.png"
import sb2 from "../assets/sb2.jpg"
const HomePage = () => {
    return (
        <div className='container__fluid'>
               <HeroSection />
               <Products/>
               <TrendingProducts/>
               <FeatureBrandsAndSeals/>
               <TopSellingProducts/>
               <ProductBanner 
                imageLink={sb1}
                alttext=""
               />
               <DailyDiscover/>
               <ProductBanner 
                imageLink={sb2}
                alttext=""
               />
        </div>
    );
};

export default HomePage;