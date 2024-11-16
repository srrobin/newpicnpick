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
import useAxios from '../utils/useAxios';
import { MEDIA_BASE_URL } from '../constants/URL';

const HomePage = () => {

    const { loading, data, error } = useAxios('home');
    
console.log('cis = data',data);

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div className='container__fluid'>
               <HeroSection data={data?.data?.slider} />
               <Products data={data?.data?.collections[0]} />
               <TrendingProducts data={data?.data?.collections[1]}  />
               <FeatureBrandsAndSeals data={data?.data?.featured_brands} banner={data?.data?.banners[0]} />
               <TopSellingProducts data={data?.data?.collections[2]}  />
               <ProductBanner 
                imageLink={MEDIA_BASE_URL+data?.data?.banners[1]?.image}
                alttext=""
               />
               <DailyDiscover data={data?.data?.collections[0]} />
               <ProductBanner 
                imageLink={MEDIA_BASE_URL+data?.data?.banners[2]?.image}
                alttext=""
               />
        </div>
    );
};

export default HomePage;