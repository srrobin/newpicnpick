import React from 'react';
import FeatureBrands from './FeatureBrands';
import SaleBanner from "../assets/sales-banner.png"
const FeatureBrandsAndSeals = () => {
    return (
        <div className='gap-20'>
            {/* <FeatureBrands/> */}
            <div className="brands-wrapper">
                <FeatureBrands />
                <div className='brand-banner'>
                    {/* <a href='/' className='block banner-wrapper'> */}
                    <img
                        src={SaleBanner}
                        alt="Addidus brand logo"
                        className='image__radius'
                    />
                    {/* </a> */}
                </div>
            </div>
        </div>
    );
};

export default FeatureBrandsAndSeals;