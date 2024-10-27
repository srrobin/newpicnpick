import React from 'react';

const ProductBanner = ({ imageLink, alttext }) => {
    return (
        <div className='gap-20'>
            <a 
                href="/" 
                className="banner-wrapper home-section mb-0 br-primary flow-hidden block"
                style={{ display: 'block', textAlign: 'center' }}
            >
                <img 
                    src={imageLink}
                    alt={alttext} 
                    width="100%" 
                    height="auto" 
                    style={{ minWidth: '500px', borderRadius: '8px' }} 
                />
            </a>
        </div>
    );
};

export default ProductBanner;
