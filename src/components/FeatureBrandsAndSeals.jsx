import React from 'react';
import FeatureBrands from './FeatureBrands';
import { MEDIA_BASE_URL } from '../constants/URL';
const FeatureBrandsAndSeals = ({ data, banner }) => {
    return (
        <div className='gap-20'>
            {/* <FeatureBrands/> */}
            <div className="brands-wrapper">
                <FeatureBrands data={data} />
                <div className='brand-banner'>
                    {/* <a href='/' className='block banner-wrapper'> */}
                    <img
                        src={MEDIA_BASE_URL+banner?.image}
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