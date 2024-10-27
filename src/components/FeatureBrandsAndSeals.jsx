import React from 'react';
import FeatureBrands from './FeatureBrands';
import SaleBanner from "../assets/sales-banner.png"
const FeatureBrandsAndSeals = () => {
    return (
        <div className='gap-20'>
            <div className="brands-wrapper">
                <div className="brands-inner">
                   <FeatureBrands/>
                </div>
                <div className='brand-banner'>
                    <a href='/' className='block banner-wrapper'>
                    <img 
                            src={SaleBanner} 
                            alt="Addidus brand logo" 
                            width="908" 
                            height="410"  
                            style={{ objectFit: 'cover' }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeatureBrandsAndSeals;